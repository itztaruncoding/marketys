import { useQuery } from "@tanstack/react-query";
import { fetchDocument } from "@/lib/firebase";

const COLLECTION = "blog";
const DOC = "config";

const STATIC_HERO = {
  badge: "RESOURCES & NEWS",
  title: "Marketing News & Strategy Guides",
  subtitle: "Expert advice, software teardowns, and actionable guides to help you scale your business and optimize your marketing stack.",
  bgImage: "https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=1600&q=80",
};

export function useBlogPage() {
  return useQuery({
    queryKey: ["marketys-blog-page"],
    queryFn: async () => {
      try {
        const doc = await fetchDocument(COLLECTION, DOC);
        if (doc) return { hero: { ...STATIC_HERO, ...doc } };
      } catch { /* fall through */ }
      return { hero: STATIC_HERO };
    },
    staleTime: 0,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });
}
