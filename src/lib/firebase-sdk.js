import { createDocument } from "./firebase";

const ADMIN_API = import.meta.env.VITE_ADMIN_API || "";

async function writeWithAdminApi(collectionId, data) {
  if (!ADMIN_API) return null;
  try {
    const res = await fetch(`${ADMIN_API}/api/marketys/${collectionId}`, {
      method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify(data),
    });
    return res.ok ? await res.json() : null;
  } catch {
    return null;
  }
}

export async function createReviewSubmission(data) {
  const result = await writeWithAdminApi("reviews", data);
  return result || createDocument("reviews", { ...data, createdAt: new Date().toISOString() });
}

export async function createContactSubmission(data) {
  const result = await writeWithAdminApi("contacts", data);
  return result || createDocument("contacts", { ...data, createdAt: new Date().toISOString() });
}

export async function createBookingSubmission(data) {
  const result = await writeWithAdminApi("bookings", data);
  return result || createDocument("bookings", { ...data, createdAt: new Date().toISOString() });
}
