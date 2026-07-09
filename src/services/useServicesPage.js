import { useQuery } from "@tanstack/react-query";
import { fetchDocument } from "@/lib/firebase";

const COLLECTION = "services-page";
const DOC_ID = "config";

const STATIC_SERVICES_PAGE = {
  hero: {
    badge: "CAPABILITIES DIRECTORY",
    title: "Channels Designed for",
    highlight: "Scale & Profit",
    description: "Expand your company's potential. Click on any custom marketing channel card below to examine launch roadmaps, setup briefs, and target circular performance metrics.",
    bgImage: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80",
  },
  stats: [
    { end: 50, prefix: "$", suffix: "M+", label: "Client Spend Managed", color: "text-blue-400" },
    { end: 3, suffix: ".8x", label: "Average Campaign ROAS", color: "text-cyan-400" },
    { end: 99, suffix: ".8%", label: "Attribution Accuracy", color: "text-indigo-400" },
  ],
};

export function useServicesPage() {
  return useQuery({
    queryKey: ["marketys-services-page"],
    queryFn: async () => {
      try {
        const remote = await fetchDocument(COLLECTION, DOC_ID);
        if (remote) return deepMerge(STATIC_SERVICES_PAGE, remote);
      } catch {}
      return STATIC_SERVICES_PAGE;
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
