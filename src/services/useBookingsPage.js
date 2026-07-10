import { useQuery } from "@tanstack/react-query";
import { fetchDocument } from "@/lib/firebase";

const COLLECTION = "bookings-page";
const DOC_ID = "config";

const STATIC_BOOKINGS_PAGE = {
  booking: {
    ctaText: "Book a Schedule",
    modalTitle: "Book a Schedule",
    modalDescription: "Select your preferred slot and details below. We will send a confirmation link to your email.",
    submitText: "Confirm Schedule",
    successTitle: "Schedule Confirmed!",
    successMessage: "Thank you, {name}. We've sent a calendar invitation and confirmation details to {email}.",
  },
};

export function useBookingsPage() {
  return useQuery({
    queryKey: ["marketys-bookings-page"],
    queryFn: async () => {
      try {
        const remote = await fetchDocument(COLLECTION, DOC_ID);
        if (remote) return deepMerge(STATIC_BOOKINGS_PAGE, remote);
      } catch {}
      return STATIC_BOOKINGS_PAGE;
    },
    staleTime: 0,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });
}

function deepMerge(target, source) {
  const result = { ...target };
  for (const key of Object.keys(source)) {
    if (source[key] && typeof source[key] === "object" && !Array.isArray(source[key])) {
      result[key] = deepMerge(target[key] || {}, source[key]);
    } else if (Array.isArray(source[key]) && source[key].length > 0) {
      result[key] = source[key];
    } else if (source[key] !== undefined) {
      result[key] = source[key];
    }
  }
  return result;
}
