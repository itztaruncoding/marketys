import { FIREBASE_API_KEY as _API_KEY, FIREBASE_PROJECT_ID as _PROJECT_ID, FIRESTORE_TIMEOUT_MS as _TIMEOUT } from "../../firebase.js";

const FIREBASE_API_KEY = import.meta.env.VITE_FIREBASE_API_KEY || _API_KEY;
const FIREBASE_PROJECT_ID = import.meta.env.VITE_FIREBASE_PROJECT_ID || _PROJECT_ID;
const PROJECT_ID = "marketys";
export const FIRESTORE_PARENT = `projects/${FIREBASE_PROJECT_ID}/databases/(default)/documents/projects/${PROJECT_ID}`;

const FIRESTORE_TIMEOUT_MS = Number(import.meta.env.VITE_FIRESTORE_TIMEOUT_MS || _TIMEOUT);
const CACHE_MS = 60000; // 1 min

const memoryCache = new Map();

function cacheKey(name, params = {}) {
  return `${name}:${JSON.stringify(params)}`;
}

function readCache(key) {
  const cached = memoryCache.get(key);
  if (!cached || cached.expiresAt <= Date.now()) {
    memoryCache.delete(key);
    return null;
  }
  return cached.value;
}

function writeCache(key, value) {
  memoryCache.set(key, { value, expiresAt: Date.now() + CACHE_MS });
  return value;
}

function firestoreValueToJs(value) {
  if (!value) return undefined;
  if ("stringValue" in value) return value.stringValue;
  if ("integerValue" in value) return Number(value.integerValue);
  if ("doubleValue" in value) return Number(value.doubleValue);
  if ("booleanValue" in value) return Boolean(value.booleanValue);
  if ("timestampValue" in value) return value.timestampValue;
  if ("nullValue" in value) return null;
  if ("arrayValue" in value) return (value.arrayValue.values || []).map(firestoreValueToJs);
  if ("mapValue" in value) {
    return Object.fromEntries(
      Object.entries(value.mapValue.fields || {}).map(([k, v]) => [k, firestoreValueToJs(v)])
    );
  }
  return undefined;
}

function decodeDocument(document) {
  const data = Object.fromEntries(
    Object.entries(document.fields || {}).map(([key, value]) => [key, firestoreValueToJs(value)])
  );
  return { id: document.name.split("/").pop(), ...data };
}

function fieldFilter(fieldPath, op, value) {
  return { fieldFilter: { field: { fieldPath }, op, value } };
}

function andFilter(filters) {
  const active = filters.filter(Boolean);
  if (active.length === 1) return active[0];
  return { compositeFilter: { op: "AND", filters: active } };
}

async function firestorePost(endpoint, body) {
  if (!FIREBASE_API_KEY || !FIREBASE_PROJECT_ID) return [];

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), FIRESTORE_TIMEOUT_MS);

  let response;
  try {
    response = await fetch(
      `https://firestore.googleapis.com/v1/${FIRESTORE_PARENT}:${endpoint}?key=${FIREBASE_API_KEY}`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(body),
        signal: controller.signal,
      }
    );
  } catch (error) {
    if (error?.name === "AbortError") throw new Error(`Firestore timed out after ${FIRESTORE_TIMEOUT_MS}ms`);
    throw error;
  } finally {
    clearTimeout(timeout);
  }

  if (!response.ok) throw new Error(`Firestore failed: ${response.status}`);
  return response.json();
}

export async function fetchCollection(collectionId, { fields, filters, orderBy: order, limit: lim, offset } = {}) {
  const key = cacheKey(collectionId, { fields, filters, order, limit: lim, offset });
  const cached = readCache(key);
  if (cached) return cached;

  const rows = await firestorePost("runQuery", {
    structuredQuery: {
      select: fields ? { fields: fields.map((f) => ({ fieldPath: f })) } : undefined,
      from: [{ collectionId }],
      where: filters ? andFilter(filters) : undefined,
      orderBy: order ? [{ field: { fieldPath: order.field }, direction: order.direction }] : undefined,
      offset: offset || 0,
      limit: lim || 50,
    },
  });

  const docs = rows.filter((r) => r.document).map((r) => decodeDocument(r.document));
  return writeCache(key, docs);
}

export async function fetchDocument(collectionId, docId) {
  const key = cacheKey("doc", { collectionId, docId });
  const cached = readCache(key);
  if (cached) return cached;

  const docRef = `${FIRESTORE_PARENT}/${collectionId}/${docId}`;
  const rows = await firestorePost("runQuery", {
    structuredQuery: {
      from: [{ collectionId }],
      where: fieldFilter("__name__", "EQUAL", { referenceValue: docRef }),
      limit: 1,
    },
  });

  const doc = rows.find((r) => r.document)?.document;
  return writeCache(key, doc ? decodeDocument(doc) : null);
}

export async function fetchByField(collectionId, fieldPath, op, value, opts = {}) {
  return fetchCollection(collectionId, {
    ...opts,
    filters: [fieldFilter(fieldPath, op, { stringValue: value })],
  });
}

function jsToFirestoreValue(v) {
  if (v === null || v === undefined) return { nullValue: null };
  if (typeof v === "number") return { doubleValue: v };
  if (typeof v === "boolean") return { booleanValue: v };
  if (Array.isArray(v)) return { arrayValue: { values: v.map(jsToFirestoreValue) } };
  if (typeof v === "object") return { mapValue: { fields: Object.fromEntries(Object.entries(v).map(([k, val]) => [k, jsToFirestoreValue(val)])) } };
  return { stringValue: String(v) };
}

let _idToken = null;
let _tokenExpiry = 0;

async function getAnonymousToken() {
  if (_idToken && Date.now() < _tokenExpiry) return _idToken;
  try {
    const res = await fetch(
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${FIREBASE_API_KEY}`,
      { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({ returnSecureToken: true }) }
    );
    if (!res.ok) return null;
    const json = await res.json();
    _idToken = json.idToken;
    _tokenExpiry = Date.now() + (parseInt(json.expiresIn, 10) - 60) * 1000;
    return _idToken;
  } catch {
    return null;
  }
}

async function firestoreWrite(collectionId, data) {
  const body = JSON.stringify({ fields: Object.fromEntries(Object.entries(data).map(([k, v]) => [k, jsToFirestoreValue(v)])) });
  const url = `https://firestore.googleapis.com/v1/${FIRESTORE_PARENT}/${collectionId}`;

  // Try 1: with API key only
  try {
    const res = await fetch(`${url}?key=${FIREBASE_API_KEY}`, {
      method: "POST", headers: { "content-type": "application/json" }, body,
    });
    if (res.ok) return (await res.json()).name.split("/").pop();
    if (res.status !== 403 && res.status !== 401) return null;
  } catch { /* fall through */ }

  // Try 2: with anonymous auth
  try {
    const token = await getAnonymousToken();
    if (!token) return null;
    const res = await fetch(url, {
      method: "POST", headers: { "content-type": "application/json", Authorization: `Bearer ${token}` }, body,
    });
    if (res.ok) return (await res.json()).name.split("/").pop();
  } catch { /* ignore */ }
  return null;
}

export async function createDocument(collectionId, data) {
  if (!FIREBASE_API_KEY || !FIREBASE_PROJECT_ID) return null;
  const id = await firestoreWrite(collectionId, data);
  if (!id) return null;
  return { id, ...data };
}

export async function fetchAggregateCount(collectionId, filters) {
  const key = cacheKey("count", { collectionId, filters });
  const cached = readCache(key);
  if (cached !== null) return cached;

  const rows = await firestorePost("runAggregationQuery", {
    structuredAggregationQuery: {
      structuredQuery: {
        from: [{ collectionId }],
        where: filters ? andFilter(filters) : undefined,
      },
      aggregations: [{ count: {}, alias: "total" }],
    },
  });

  const val = rows[0]?.result?.aggregateFields?.total;
  return writeCache(key, Number(val?.integerValue || 0));
}
