import { useQuery } from "@tanstack/react-query";
import { fetchCollection } from "@/lib/firebase";

const COLLECTION = "reviews";

export function useReviews() {
  return useQuery({
    queryKey: ["marketys-reviews"],
    queryFn: async () => {
      try {
        const data = await fetchCollection(COLLECTION, { limit: 50 });
        return data.length > 0 ? data : null;
      } catch {
        return null;
      }
    },
    staleTime: 0,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });
}
