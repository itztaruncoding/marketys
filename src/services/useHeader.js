import { useQuery } from "@tanstack/react-query";
import { fetchDocument } from "@/lib/firebase";

const COLLECTION = "header";
const DOC_ID = "config";

const STATIC_HEADER = {
  logo: { text: "markety", image: "" },
  links: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Reviews", href: "/reviews" },
    { label: "Blog", href: "/blog" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "FAQ", href: "/about#faq" },
  ],
  cta: { text: "Book a Schedule", href: "#booking" },
};

export function useHeader() {
  return useQuery({
    queryKey: ["marketys-header"],
    queryFn: async () => {
      try {
        const remote = await fetchDocument(COLLECTION, DOC_ID);
        if (remote) return deepMerge(STATIC_HEADER, remote);
      } catch {}
      return STATIC_HEADER;
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