import { useQuery } from "@tanstack/react-query";
import { fetchCollection } from "@/lib/firebase";

const COLLECTION = "services";

const STATIC_SERVICES = [
  {
    id: "digital-marketing",
    title: "Digital Marketing that converts",
    subtitle: "Growth Channels",
    description: "Since 2019, we've helped 200+ brands dominate organic and paid channels. Our data-first strategy combines SEO authority, CRM automation, and CRO science.",
    stats: [
      { val: "+460%", label: "Organic traffic lift" },
      { val: "99.8%", label: "Data accuracy rate" },
      { val: "4.5x", label: "Conversion boost avg." },
    ],
    features: ["Custom channel & keyword targeting", "Real-time performance tracking & reporting", "Data-backed CRO & funnel optimization"],
    section: "features",
    order: 1,
    active: true,
  },
  {
    id: "affiliate-programs",
    title: "Affiliate programs that scale",
    subtitle: "Affiliate Networks",
    description: "We've built affiliate ecosystems for brands from scratch since 2020 — growing networks from 0 to 2,600+ active publishers.",
    stats: [
      { val: "2.6k+", label: "Publisher partners" },
      { val: "$580k", label: "Monthly volume" },
      { val: "–61%", label: "CAC reduction" },
    ],
    features: ["Sub-affiliate networks & media partnerships", "Custom CPA commission structures & fraud shields", "Creator ambassador & influencer referral arrays"],
    section: "features",
    order: 2,
    active: true,
  },
  {
    id: "advertising",
    title: "Advertising that pays for itself",
    subtitle: "Paid Ads",
    description: "From Google PMAX and Meta funnels to TikTok UGC and programmatic native ads — we've scaled paid channels for 150+ brands.",
    stats: [
      { val: "4.8x", label: "Avg. ROAS achieved" },
      { val: "+2,060%", label: "Scaled conversions" },
      { val: "4.3%", label: "Peak CTR delivered" },
    ],
    features: ["Google, Meta, TikTok & YouTube ad management", "Creative UGC testing & audience validation", "Server-side attribution & daily negative pruning"],
    section: "features",
    order: 3,
    active: true,
  },
];

export function useServices() {
  return useQuery({
    queryKey: ["marketys-services"],
    queryFn: async () => {
      try {
        const data = await fetchCollection(COLLECTION, { orderBy: { field: "order", direction: "ASCENDING" } });
        return data.filter((s) => s.active !== false).length > 0
          ? data.filter((s) => s.active !== false)
          : STATIC_SERVICES;
      } catch {
        return STATIC_SERVICES;
      }
    },
    staleTime: 0,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });
}
