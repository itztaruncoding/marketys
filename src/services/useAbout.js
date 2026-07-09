import { useQuery } from "@tanstack/react-query";
import { fetchDocument } from "@/lib/firebase";

const COLLECTION = "about";
const DOC_ID = "config";

const STATIC_ABOUT = {
  hero: {
    bgImage: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80",
    title: "We Build The Engine For Your Scale",
    subtitle: "markety is a premium performance marketing agency. We combine advanced attribution analytics, creative design, and strategic media buying to programmatically scale brands across every digital channel.",
  },
  values: [
    {
      icon: "Target",
      title: "Data-First Decisions",
      desc: "Every campaign, creative, and landing page is validated through data. No gut feelings, no guesses—only measurable outcomes.",
      color: "bg-blue-50 text-blue-600 border-blue-100",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
    },
    {
      icon: "Zap",
      title: "Speed of Execution",
      desc: "We launch campaigns within 48 hours. Our agile sprint model means your growth never waits for approvals or bureaucracy.",
      color: "bg-amber-50 text-amber-600 border-amber-100",
      image: "https://images.unsplash.com/photo-1508962914676-134849a727f0?w=600&q=80",
    },
    {
      icon: "Shield",
      title: "Margin Protection",
      desc: "Profit comes first. We structure every campaign and partnership to protect your blended margins while scaling acquisition.",
      color: "bg-emerald-50 text-emerald-600 border-emerald-100",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80",
    },
    {
      icon: "Globe",
      title: "Global Scale Infrastructure",
      desc: "Our technology stack supports multi-currency, multi-language, and multi-region campaigns from a single unified dashboard.",
      color: "bg-indigo-50 text-indigo-600 border-indigo-100",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80",
    },
  ],
  faqs: [
    {
      question: "What makes markety different from traditional agencies?",
      answer: "Unlike traditional agencies that focus on vanity metrics like impressions or clicks, markety is entirely performance-driven. We integrate deep server-side tracking, build high-converting custom creatives in-house, and align our goals directly with your bottom-line blended margins.",
    },
    {
      question: "How does the 48-hour campaign launch work?",
      answer: "Our agile sprint model is built for speed. Once onboarded, our team executes creative development, copywriting, technical tracking setup, and campaign structure assembly simultaneously, allowing us to push your ads live within 48 hours.",
    },
    {
      question: "What is your server-side tracking infrastructure?",
      answer: "We deploy custom GTM server-side containers and Conversions API (CAPI) integrations to capture up to 99.8% of conversion events, bypassing browser ad-blockers and iOS privacy restrictions for absolute data accuracy.",
    },
    {
      question: "Do you require long-term contracts?",
      answer: "No, we believe in retaining partners through measurable performance and clear profit generation. We structure rolling monthly partnerships so we are constantly earning your business.",
    },
    {
      question: "How do we communicate with our dedicated team?",
      answer: "Every client is set up with a dedicated Slack channel for daily messaging, as well as a weekly strategy review call with full performance breakdowns and roadmap adjustments.",
    },
  ],
};

export function useAbout() {
  return useQuery({
    queryKey: ["marketys-about"],
    queryFn: async () => {
      try {
        const remote = await fetchDocument(COLLECTION, DOC_ID);
        if (remote) return deepMerge(STATIC_ABOUT, remote);
      } catch {}
      return STATIC_ABOUT;
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