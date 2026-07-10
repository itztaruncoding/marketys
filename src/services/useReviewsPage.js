import { useQuery } from "@tanstack/react-query";
import { fetchDocument } from "@/lib/firebase";

const COLLECTION = "reviews-page";
const DOC_ID = "config";

const STATIC_REVIEWS_PAGE = {
  hero: {
    badge: "Verified platform reviews",
    title: "Real Reviews from Real Marketers",
    description: "Compare tools with honest insights, user feedback, and measurable outcomes.",
    stats: [
      { value: "4.8/5", label: "Average Rating", sub: "Across top marketing tools" },
      { value: "100%", label: "Verified Reviews", sub: "Every review is checked for trust" },
      { value: "Weekly", label: "Updated Weekly", sub: "Fresh insights on new deals" },
    ],
    featuredReview: {
      quote: "MarketyDeals saved us over $1,200 on our marketing stack this year. The verified ratings and direct discounts make it the ultimate resource for growth teams.",
      author: "Alex J.",
      role: "Growth Director @ SaaS Metrics",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80",
    },
  },
};

export function useReviewsPage() {
  return useQuery({
    queryKey: ["marketys-reviews-page"],
    queryFn: async () => {
      try {
        const remote = await fetchDocument(COLLECTION, DOC_ID);
        if (remote) return deepMerge(STATIC_REVIEWS_PAGE, remote);
      } catch {}
      return STATIC_REVIEWS_PAGE;
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
