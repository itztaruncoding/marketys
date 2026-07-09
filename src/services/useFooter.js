import { useQuery } from "@tanstack/react-query";
import { fetchDocument } from "@/lib/firebase";

const COLLECTION = "footer";
const DOC_ID = "config";

const STATIC_FOOTER = {
  groups: [
    {
      title: "Solutions",
      links: [
        { label: "Digital Marketing", href: "/services#digital-marketing" },
        { label: "Affiliate Programs", href: "/services#affiliate-marketing" },
        { label: "Digital Advertising", href: "/services#paid-advertisement" },
        { label: "Growth Plans", href: "/contact" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog & Guides", href: "/blog" },
        { label: "Client Reviews", href: "/reviews" },
        { label: "FAQ", href: "/about#faq" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "How It Works", href: "/how-it-works" },
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Terms & Conditions", href: "/terms-and-conditions" },
        { label: "Contact Support", href: "/support" },
      ],
    },
  ],
  contact: {
    email: "growth@velox.agency",
    phone: "+91 77730 00000",
    address: "Betul, Madhya Pradesh, India",
  },
  social: [
    { platform: "Twitter", url: "https://twitter.com", icon: "Twitter" },
    { platform: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
    { platform: "Facebook", url: "https://facebook.com", icon: "Facebook" },
    { platform: "YouTube", url: "https://youtube.com", icon: "Youtube" },
  ],
  copyright: "\u00a9 2026 markety. All rights reserved.",
};

export function useFooter() {
  return useQuery({
    queryKey: ["marketys-footer"],
    queryFn: async () => {
      try {
        const remote = await fetchDocument(COLLECTION, DOC_ID);
        if (remote) return deepMerge(STATIC_FOOTER, remote);
      } catch {}
      return STATIC_FOOTER;
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