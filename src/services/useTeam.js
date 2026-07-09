import { useQuery } from "@tanstack/react-query";
import { fetchCollection } from "@/lib/firebase";

const COLLECTION = "team";

const STATIC_TEAM = [
  { id: "marcus", name: "Marcus Vance", role: "CEO & Co-Founder", avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80", bio: "Former growth director at Google with 15+ years of digital marketing innovation. Architected revenue engines generating $200M+ in trackable client revenue.", active: true },
  { id: "sarah", name: "Sarah Sterling", role: "Chief of Growth & Strategy", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80", bio: "Affiliate network scaling specialist who has directed $100M+ in advertising spend across 40+ verticals for Fortune 500 brands.", active: true },
  { id: "david", name: "David Reyes", role: "VP of Paid Media", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80", bio: "Former Meta & Google certified media buyer. Managed $50M+ in annual ad budgets with a blended 4.2x ROAS across all platforms.", active: true },
  { id: "elena", name: "Elena Torres", role: "Head of Analytics & Attribution", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80", bio: "Server-side tracking architect specializing in GTM, Conversion APIs, and custom BI dashboards for multi-channel attribution.", active: true },
];

export function useTeam() {
  return useQuery({
    queryKey: ["marketys-team"],
    queryFn: async () => {
      try {
        const data = await fetchCollection(COLLECTION, { limit: 20 });
        return data.filter((m) => m.active !== false).length > 0
          ? data.filter((m) => m.active !== false)
          : STATIC_TEAM;
      } catch {
        return STATIC_TEAM;
      }
    },
    staleTime: 0,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });
}
