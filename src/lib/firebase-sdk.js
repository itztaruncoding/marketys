import { FIREBASE_API_KEY as _API_KEY, FIREBASE_PROJECT_ID as _PROJECT_ID } from "../../firebase.js";

const ADMIN_API = import.meta.env.VITE_ADMIN_API || "";
const _PARENT = `projects/${_PROJECT_ID}/databases/(default)/documents/projects/marketys`;

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
      `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${_API_KEY}`,
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

async function restWrite(collectionId, data) {
  const body = JSON.stringify({ fields: Object.fromEntries(Object.entries(data).map(([k, v]) => [k, jsToFirestoreValue(v)])) });
  const url = `https://firestore.googleapis.com/v1/${_PARENT}/${collectionId}`;
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

async function writeWithFallback(collectionId, data) {
  // Tier 1: admin API route
  if (ADMIN_API) {
    try {
      const res = await fetch(`${ADMIN_API}/api/marketys/${collectionId}`, {
        method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(data),
      });
      if (res.ok) return await res.json();
    } catch { /* fall through */ }
  }
  // Tier 2: Firebase SDK with anonymous auth
  try {
    const [{ initializeApp }, { getFirestore, collection, addDoc, serverTimestamp }, { getAuth, signInAnonymously }] =
      await Promise.all([import("firebase/app"), import("firebase/firestore"), import("firebase/auth")]);
    const PROJECT_ID = import.meta.env.VITE_FIREBASE_PROJECT_ID || _PROJECT_ID;
    const app = initializeApp({
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY || _API_KEY,
      authDomain: `${PROJECT_ID}.firebaseapp.com`,
      projectId: PROJECT_ID,
    });
    const db = getFirestore(app);
    const auth = getAuth(app);
    if (!auth.currentUser) {
      try { await signInAnonymously(auth); } catch { /* anonymous auth may be disabled */ }
    }
    const docRef = await addDoc(collection(db, "projects", "marketys", collectionId), {
      ...data, createdAt: serverTimestamp(),
    });
    return { id: docRef.id, ...data };
  } catch { /* fall through */ }
  // Tier 3: REST API with anonymous token
  const id = await restWrite(collectionId, { ...data, createdAt: new Date().toISOString() });
  return id ? { id, ...data } : null;
}

export async function createReviewSubmission(data) {
  return writeWithFallback("reviews", data);
}

export async function createContactSubmission(data) {
  return writeWithFallback("contacts", data);
}
