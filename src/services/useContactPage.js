import { useQuery } from "@tanstack/react-query";
import { fetchDocument } from "@/lib/firebase";

const COLLECTION = "contact-page";
const DOC_ID = "config";

const STATIC_CONTACT_PAGE = {
  hero: {
    badge: "CLIENT ENGAGEMENT PORTAL",
    title: "Let's Start Your Growth Conversation",
    highlight: "Growth Conversation",
    description: "Schedule a strategy review. Get direct insights on channels, affiliate programs, and margins optimization setup from our expert growth desk.",
    bgImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80",
  },
};

export function useContactPage() {
  return useQuery({
    queryKey: ["marketys-contact-page"],
    queryFn: async () => {
      try {
        const remote = await fetchDocument(COLLECTION, DOC_ID);
        if (remote) return deepMerge(STATIC_CONTACT_PAGE, remote);
      } catch {}
      return STATIC_CONTACT_PAGE;
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
