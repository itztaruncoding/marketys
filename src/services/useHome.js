import { useQuery } from "@tanstack/react-query";
import { fetchDocument } from "@/lib/firebase";

const COLLECTION = "home";
const DOC_ID = "config";

const STATIC_HOME = {
  hero: {
    headline: ["Drive growth.", "Scale faster.", "Win markets."],
    highlightIndex: 1,
    subtitle: "Take a data-driven approach to digital marketing. Scale your brand with high-performing campaigns and custom strategies.",
    ctaText: "Book a Schedule",
    exploreText: "Explore Services",
    rating: { score: "4.8/5", label: "(Based on over 1,200+ reviews)" },
    bgImage: "",
    videoMov: "",
    videoWebm: "",
  },
  stats: [
    { value: "48", suffix: "%", label: "Average lift in qualified traffic" },
    { value: "62", suffix: "%", label: "Increase in affiliate conversion rate" },
    { value: "3.4", suffix: "x", label: "Faster campaign learning cycles" },
  ],
  partners: [
    { name: "BBC", logo: "https://www.pngmart.com/files/23/Bbc-Logo-PNG-Pic.png" },
    { name: "Mashable", logo: "https://tse3.mm.bing.net/th/id/OIP.-QZ4oYFZsBD1ac0QWb4vwAHaBo?r=0&cb=thfc1falcon4&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "TikTok", logo: "https://tse1.mm.bing.net/th/id/OIP.wwkk7rp66RXwr7o8FuZKagAAAA?r=0&cb=thfc1falcon4&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Walmart", logo: "https://tse1.mm.bing.net/th/id/OIP.WZP4TRLFNHn2Buns9iYeegHaCs?r=0&cb=thfc1falcon4&w=4390&h=1600&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Lenovo", logo: "https://freepngimg.com/thumb/lenovo_logo/32023-4-lenovo-logo-transparent.png" },
    { name: "Uber", logo: "https://tse3.mm.bing.net/th/id/OIP.Oy5wfKuZ37KcuXONE7zjnQHaEK?r=0&cb=thfc1falcon4&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "LinkedIn", logo: "https://2.bp.blogspot.com/-DpLm5zpr3sU/W1dE0g2C1WI/AAAAAAAAq5w/WY2qL91vyvAoQ_aImF1zi5xsvwGcFygwACLcBGAs/s1600/linkedin.jpg" },
    { name: "Meta", logo: "https://www.pngall.com/wp-content/uploads/13/Meta-Logo.png" },
    { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" },
  ],
  features: [
    {
      subtitle: "Growth Channels",
      heading: "Digital Marketing that converts",
      description: "Since 2019, we've helped 200+ brands dominate organic and paid channels. Our data-first strategy combines SEO authority, CRM automation, and CRO science to turn traffic into measurable revenue.",
      stats: [
        { val: "+460%", label: "Organic traffic lift" },
        { val: "99.8%", label: "Data accuracy rate" },
        { val: "4.5x", label: "Conversion boost avg." },
      ],
      features: [
        "Custom channel & keyword targeting",
        "Real-time performance tracking & reporting",
        "Data-backed CRO & funnel optimization",
      ],
      images: [
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80",
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      ],
      floatingStats: [
        { label: "Organic Sessions", value: "68,000", sub: "\u2191 460%", bgWhite: true },
        { label: "Conversion Rate", value: "5.4%", sub: "\u2191 4.5x", bgWhite: false },
      ],
    },
    {
      subtitle: "Affiliate Networks",
      heading: "Affiliate programs that scale",
      description: "We've built affiliate ecosystems for brands from scratch since 2020 \u2014 growing networks from 0 to 2,600+ active publishers. Our risk-free CPA model means you only pay for results, not promises.",
      stats: [
        { val: "2.6k+", label: "Publisher partners" },
        { val: "$580k", label: "Monthly volume" },
        { val: "\u201361%", label: "CAC reduction" },
      ],
      features: [
        "Sub-affiliate networks & media partnerships",
        "Custom CPA commission structures & fraud shields",
        "Creator ambassador & influencer referral arrays",
      ],
      images: [
        "https://landingi.com/wp-content/uploads/2024/11/Affiliate-Digital-Marketing-1.webp",
        "https://pureresiduals.com/wp-content/uploads/top-Social-Media-Marketing-Affiliate-Programs.jpg",
        "https://assets-au-01.kc-usercontent.com/df4a25df-7d25-0294-ad5c-62528c8f82da/c234e5ea-d77b-4f6c-b74e-f19bbbf11925/Affiliate%20Marketing.jpg",
      ],
      floatingStats: [
        { label: "Active Partners", value: "2,600+", sub: "", bgWhite: true },
        { label: "Avg. CAC Drop", value: "\u201361.2%", sub: "", bgWhite: false },
      ],
    },
    {
      subtitle: "Paid Ads",
      heading: "Advertising that pays for itself",
      description: "From Google PMAX and Meta funnels to TikTok UGC and programmatic native ads \u2014 we've scaled paid channels for 150+ brands since 2021, achieving an average blended ROAS of 4.8x across portfolios.",
      stats: [
        { val: "4.8x", label: "Avg. ROAS achieved" },
        { val: "+2,060%", label: "Scaled conversions" },
        { val: "4.3%", label: "Peak CTR delivered" },
      ],
      features: [
        "Google, Meta, TikTok & YouTube ad management",
        "Creative UGC testing & audience validation",
        "Server-side attribution & daily negative pruning",
      ],
      images: [
        "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&q=80",
        "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80",
        "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80",
      ],
      floatingStats: [
        { label: "Blended ROAS", value: "4.8x", sub: "", bgWhite: false },
        { label: "CTR Achieved", value: "4.3%", sub: "", bgWhite: true },
      ],
    },
  ],
  process: [
    { title: "Research", desc: "Audience, offer and competitor signals are mapped before we spend a rupee on traffic.", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&q=90" },
    { title: "Strategy", desc: "We design a custom campaign architecture, mapping budgets, creatives, and funnels to match target ROI thresholds.", img: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=900&q=90" },
    { title: "Execution", desc: "Launch campaigns, set up exact server-side tracking, build dynamic ad copy, and push live.", img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=90" },
    { title: "Delivery", desc: "We report transparent results and scale budgets on high-yielding channels weekly.", img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=900&q=90" },
  ],
  testimonials: [
    { quote: "VELOX helped us turn scattered campaigns into a clean acquisition system. The tracking, creative tests and landing pages exceeded our targets.", author: "Rohan Mehta", role: "Founder, D2C Brand", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
    { quote: "Working with VELOX felt like having an in-house growth team. Clear communication, strong ideas and real impact on revenue.", author: "Sarah Chen", role: "Product Owner", image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80" },
    { quote: "The programmatic campaigns and custom attribution setup saved us thousands in waste. Scaling was fast, efficient, and transparent.", author: "David Miller", role: "Growth VP, SaaS", image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80" },
    { quote: "A dedicated marketing partner that values margins as much as revenue. Their team went above and beyond to launch complex funnels.", author: "Naomi Watts", role: "E-commerce Director", image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80" },
  ],
  pricing: [
    { name: "Growth", desc: "Best for startups and small teams looking to establish their digital presence.", priceMonthly: "499", priceAnnually: "399", features: ["Google Ads management", "Basic SEO & Keyword research", "Monthly reports & analytics", "Standard email support"], buttonText: "Get started today", popular: false },
    { name: "Scale", desc: "Best for mid-sized businesses looking to accelerate their growth.", priceMonthly: "999", priceAnnually: "799", features: ["All Growth features", "Multi-channel ad management", "Advanced SEO strategy", "Creative A/B testing", "Priority Slack support", "Weekly performance updates"], buttonText: "Choose Scale Plan", popular: true },
    { name: "Enterprise", desc: "Custom solutions for large corporations with complex marketing needs.", priceMonthly: "Custom", priceAnnually: "Custom", features: ["All Scale features", "Dedicated Account Manager", "Custom analytics & reporting dashboard", "24/7 Phone & email support", "Quarterly strategy consulting"], buttonText: "Contact Sales", popular: false },
  ],
  blogSection: {
    badge: "Blog & Insights",
    heading: "Expert Marketing Ideas To Fuel Your Growth",
    buttonText: "Read All Articles",
  },
  ctaSection: {
    heading: "Ready to grow your website ?",
    description: "Bring affiliate partnerships, search, campaigns, and reporting into one practical operating system for measurable growth.",
    buttonText: "Book a Schedule",
    linkText: "Explore Services",
  },
};

export function useHome() {
  return useQuery({
    queryKey: ["marketys-home"],
    queryFn: async () => {
      try {
        const remote = await fetchDocument(COLLECTION, DOC_ID);
        if (remote) return deepMerge(STATIC_HOME, remote);
      } catch {}
      return STATIC_HOME;
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
