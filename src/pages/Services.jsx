import { useState, useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowLeft, ArrowRight, Search, BarChart2, Users, Mail, TrendingUp, Award, 
  CheckCircle2, Sparkles, Clock, Target, Calendar, BarChart, ChevronRight 
} from "lucide-react";

function CountUpCard({ end, suffix = "", prefix = "", label, color = "text-blue-400" }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !hasStarted) setHasStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);
  useEffect(() => {
    if (!hasStarted) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / 2000, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      setCount(Math.floor(eased * end));
      if (p < 1) requestAnimationFrame(step); else setCount(end);
    };
    requestAnimationFrame(step);
  }, [hasStarted, end]);
  return (
    <div ref={ref} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-300">
      <p className={`text-2xl font-black tracking-tight ${color}`}>{prefix}{count.toLocaleString()}{suffix}</p>
      <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-1">{label}</p>
    </div>
  );
}

export default function Services() {
  const [location, setLocation] = useLocation();
  const [selectedCard, setSelectedCard] = useState(null);
  const [hoveredPoint, setHoveredPoint] = useState(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [selectedCard]);

  useEffect(() => {
    const scrollToHash = () => {
      if (selectedCard || !window.location.hash) return;
      const target = document.querySelector(window.location.hash);
      if (target) {
        setTimeout(() => target.scrollIntoView({ behavior: "smooth", block: "start" }), 80);
      }
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, [selectedCard, location]);

  // Expanded Data structure with 6 items per category to look fully complete
  const servicesData = {
    // ── DIGITAL MARKETING CHANNELS ──
    seo: {
      id: "seo",
      category: "digital-marketing",
      title: "Search Engine Optimization (SEO)",
      subtitle: "Organic Traffic Engine",
      tagline: "Own the search terms that drive highest organic purchase intent.",
      img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      whatIs: "Search Engine Optimization is the systematic process of restructuring your site's technical setup, authoring deep-authority content hubs, and acquiring high-trust backlinks. The goal is to capture organic search traffic at the exact moment buyers search for keywords matching your commercial products, bypassing the need for active daily ad spend.",
      howWeDo: [
        { step: "Deep Core Web Vitals Optimization", detail: "We optimize site speeds, leverage CDN layouts, align schema markups, and fix broken page headers to guarantee maximum search crawling score." },
        { step: "Semantic Keyword Cluster Architecture", detail: "Mapping competitive search volume gaps and creating matching articles to build topical authority and dominate relevant phrases." },
        { step: "White-Hat Editorial Outreach", detail: "Connecting with premium niche blogs, publisher hubs, and news platforms to earn backlink authority that boosts your site's ranking potential." }
      ],
      graph: {
        title: "Compounding Traffic Curve (Organic vs Paid)",
        labelX: "Campaign Duration (Months)",
        labelY: "Monthly Organic Visitors",
        points: [1200, 2400, 5800, 14000, 31000, 68000],
        labels: ["Month 1", "Month 2", "Month 3", "Month 4", "Month 5", "Month 6"],
        percentage: "+460% Conversion Lift"
      }
    },
    email: {
      id: "email",
      category: "digital-marketing",
      title: "Email & CRM Automation",
      subtitle: "Customer Retention Hub",
      tagline: "Engage, retain, and reactivate buyer relationships automatically.",
      img: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=800&q=80",
      whatIs: "Email automation builds segmented, behavior-triggered customer communication pathways. By integrating flows like Welcome Series, Browse Abandonment, Cart Rescue, and Win-back campaigns, we convert cold list subscribers into active recurring customers.",
      howWeDo: [
        { step: "Dynamic Platform Integration", detail: "Linking custom customer data events from checkout tools directly into modern email engines like Klaviyo or ActiveCampaign." },
        { step: "Behavior-Triggered Sequence Logic", detail: "Designing specific logic trees that route personalized offers based on cart value, page clicks, or customer tier status." },
        { step: "Conversion-Rate Split Testing", detail: "Running automated title variations, discount splits, and send-time models to constantly push click-through boundaries." }
      ],
      graph: {
        title: "Email-Attributed Revenue Share Growth",
        labelX: "Optimization Weeks",
        labelY: "Share of Total Sales %",
        points: [4, 10, 16, 22, 26, 31],
        labels: ["Week 2", "Week 4", "Week 6", "Week 8", "Week 10", "Week 12"],
        percentage: "31.2% Revenue Attributed"
      }
    },
    social: {
      id: "social",
      category: "digital-marketing",
      title: "Social Media Strategy",
      subtitle: "Brand Presence & Authority",
      tagline: "Build a highly active community around your brand's core values.",
      img: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?w=800&q=80",
      whatIs: "Our organic social media strategy leverages structured short-form content funnels to build massive brand trust, increase direct Google brand search queries, and drive direct lead conversations on major social hubs.",
      howWeDo: [
        { step: "Brand Voice & Visual Playbook", detail: "Establishing high-end templates, grid layouts, and color palettes that make your social profiles stand out." },
        { step: "Short-Form Creator Engine", detail: "Consistently scripting, shooting, and editing video formats optimized for Reels, Shorts, and TikTok algorithms." },
        { step: "Direct Chat Funnels (DM CRO)", detail: "Setting up conversational keywords that trigger automated templates to send resources directly to high-intent leads." }
      ],
      graph: {
        title: "Profile Reach & Conversion Volume",
        labelX: "Funnels Iteration",
        labelY: "Weekly Active Leads Generated",
        points: [40, 120, 290, 680, 1100, 1800],
        labels: ["Iter 1", "Iter 2", "Iter 3", "Iter 4", "Iter 5", "Iter 6"],
        percentage: "4.5x Industry Standard Engagement"
      }
    },
    analytics: {
      id: "analytics",
      category: "digital-marketing",
      title: "Analytics & ROI Strategy",
      subtitle: "Attribution Data Accuracy",
      tagline: "Clean, server-to-server conversion mapping built for scaling.",
      img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
      whatIs: "Modern tracking demands server-side execution. We implement GTM server containers and conversions APIs to map the exact touchpoints of your customer journeys, protecting your ad budget algorithms from pixel loss.",
      howWeDo: [
        { step: "Server-Side Tag Container Provisioning", detail: "Bypassing browser tracking limits by hosting a tracking gateway directly on your own custom subdomain." },
        { step: "Unified BI Profit Dashboards", detail: "Integrating Shopify, Stripe, and ad networks into a dashboard representing real profitability and blended CAC/LTV." },
        { step: "CRO User Experience Audits", detail: "Analyzing heatmaps, form fields, and user session recordings to eliminate purchase friction points." }
      ],
      graph: {
        title: "Data Attribution Accuracy Improvement",
        labelX: "Optimization Steps",
        labelY: "Match Rate Accuracy %",
        points: [35, 50, 70, 88, 97, 99.8],
        labels: ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5", "Step 6"],
        percentage: "99.8% Data Accuracy Rate"
      }
    },
    cro: {
      id: "cro",
      category: "digital-marketing",
      title: "Conversion Rate Optimization (CRO)",
      subtitle: "Funnel Conversion Scaling",
      tagline: "Double your website conversions without increasing media traffic spend.",
      img: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&q=80",
      whatIs: "CRO is the science of analyzing user behavior, diagnosing friction in checkout funnels, and executing A/B split tests on copy, buttons, and layouts to maximize purchase rates.",
      howWeDo: [
        { step: "Checkout Funnel Friction Auditing", detail: "Locating exactly where users drop off inside cart pages or multi-step checkout inputs." },
        { step: "A/B Layout Split Testing", detail: "Simultaneously running alternative headers and button structures to see which generates more actions." },
        { step: "Copy & Value Proposition Alignment", detail: "Optimizing hero headlines and trust badges to answer key customer doubts instantly." }
      ],
      graph: {
        title: "Checkout Conversion Rate Percentage",
        labelX: "Split Test Iterations",
        labelY: "Blended Conversion %",
        points: [1.2, 1.8, 2.5, 3.2, 4.1, 5.4],
        labels: ["Iter 1", "Iter 2", "Iter 3", "Iter 4", "Iter 5", "Iter 6"],
        percentage: "4.5x Conversion Boost"
      }
    },
    contentMktg: {
      id: "contentMktg",
      category: "digital-marketing",
      title: "Authority Content Marketing",
      subtitle: "Brand Leadership",
      tagline: "Create high-converting guides and copy assets that attract organic leads.",
      img: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80",
      whatIs: "Authority content marketing is the strategy of writing deep educational guides, case studies, and comparison landing pages that answer your buyer's objections and establish market authority.",
      howWeDo: [
        { step: "Topical Gap Mapping", detail: "Researching questions asked by your potential customers to outline content subjects." },
        { step: "Expert Editorial Writing", detail: "Drafting high-retention copy reviewed by subject matter experts to guarantee editorial standard." },
        { step: "Lead Magnet Capture Setup", detail: "Adding custom inline callouts, sliding drawers, and PDF lockers to capture reader details." }
      ],
      graph: {
        title: "Organic Inbound Lead Acquisition",
        labelX: "Guides Published",
        labelY: "Weekly Inbound Leads",
        points: [10, 28, 62, 115, 190, 280],
        labels: ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5", "Step 6"],
        percentage: "+280% Inbound Lead Growth"
      }
    },

    // ── AFFILIATE MARKETING PARTNERSHIPS ──
    subAffiliate: {
      id: "subAffiliate",
      category: "affiliate-marketing",
      title: "Sub-Affiliate Network Management",
      subtitle: "Performance Partnerships",
      tagline: "Access thousands of niche promotion portals safely and efficiently.",
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80",
      whatIs: "We connect your brand to aggregated publisher platforms (like skimlinks, sub-networks, and coupon hubs), mapping high-reach portals under rigorous compliance to scale revenue on a pure cost-per-acquisition model.",
      howWeDo: [
        { step: "Sub-Network Program Architecture", detail: "Designing tracking codes, defining category parameters, and publishing payout commission tables." },
        { step: "Automated Fraud Compliance Setup", detail: "Implementing filters to catch keyword bid hijacking, unauthorized coupon codes, and false checkouts." },
        { step: "Dynamic Publisher Optimization", detail: "Incentivizing high-performance portals with temporary commission increases for custom homepage features." }
      ],
      graph: {
        title: "Aggregate Sub-Affiliate Publisher Scale",
        labelX: "Partner Cycles",
        labelY: "Active Sales Outlets",
        points: [45, 120, 310, 720, 1400, 2600],
        labels: ["Cycle 1", "Cycle 2", "Cycle 3", "Cycle 4", "Cycle 5", "Cycle 6"],
        percentage: "2.6k+ Outlets Active"
      }
    },
    mediaPartner: {
      id: "mediaPartner",
      category: "affiliate-marketing",
      title: "Direct Media Partnerships",
      subtitle: "Editorial Integrations",
      tagline: "Get featured in lifestyle portals, news outlets, and authority sites.",
      img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80",
      whatIs: "Direct media partnerships form custom performance deals directly with editors, journalists, and major digital media corporations. This gets your products organic review highlights, best-of lists, and buyer guide features.",
      howWeDo: [
        { step: "Editorial Target Mapping", detail: "Identifying authors writing top-ranking product recommendations in your vertical." },
        { step: "Custom Commercial Negotiations", detail: "Pitching publisher commercial teams custom content CPA parameters or hybrid flat sponsorships." },
        { step: "SEO Editorial Optimization", detail: "Ensuring publisher content is optimized to rank for buying-intent search terms permanently." }
      ],
      graph: {
        title: "Editorial Referral Clicks & Conversions",
        labelX: "Outreach Months",
        labelY: "Monthly Clicks (k)",
        points: [2, 10, 35, 80, 145, 220],
        labels: ["Month 1", "Month 2", "Month 3", "Month 4", "Month 5", "Month 6"],
        percentage: "220k Monthly Referral Visits"
      }
    },
    commissionOpt: {
      id: "commissionOpt",
      category: "affiliate-marketing",
      title: "Custom Commission Structuring",
      subtitle: "Margin Optimization",
      tagline: "Align publisher payouts with high-lifetime-value conversions.",
      img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&q=80",
      whatIs: "We structure dynamic affiliate commission models that reward publishers driving brand new buyers and high basket orders, while protecting margins from coupon-hijackers.",
      howWeDo: [
        { step: "Historical Order Margin Audits", detail: "Reviewing checkout logs to define exact profitability thresholds per product line." },
        { step: "Advanced Trigger Commission Setup", detail: "Wiring pixel actions that instantly reduce commission percentages on discount codes." },
        { step: "Ambassador Loyalty Brackets", detail: "Setting up auto-advancing commission tiers that reward creators as their monthly volume climbs." }
      ],
      graph: {
        title: "Blended Customer Acquisition Cost (CAC)",
        labelX: "Optimization Phases",
        labelY: "CAC Dollar Value ($)",
        points: [98, 85, 72, 59, 48, 38],
        labels: ["Phase 1", "Phase 2", "Phase 3", "Phase 4", "Phase 5", "Phase 6"],
        percentage: "-61.2% Reduction in CAC"
      }
    },
    partnerAcq: {
      id: "partnerAcq",
      category: "affiliate-marketing",
      title: "Premium Partner Acquisition",
      subtitle: "High-Reach Ambassador Recruitment",
      tagline: "Recruit high-reach, trusted ambassadors directly into your funnel.",
      img: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80",
      whatIs: "This capability targets, contacts, and signs industry-leading professionals, opinion-leaders, and content creators to become dedicated partners promoting your catalog.",
      howWeDo: [
        { step: "Competitor Promoter Database Scraping", detail: "Mapping out which publishers drive referral links for competitors to build a warm outreach list." },
        { step: "High-Response Cold Outreach", detail: "Running automated, personalized recruitment emails presenting commission splits and samples." },
        { step: "Fast-Track Onboarding Assets", detail: "Supplying media files, tracking codes, and sample kits to ensure partners activate instantly." }
      ],
      graph: {
        title: "Recruited Partner Monthly Sales Value",
        labelX: "Onboarding Cycle",
        labelY: "Attributed Revenue ($k)",
        points: [15, 60, 130, 240, 390, 580],
        labels: ["Cycle 1", "Cycle 2", "Cycle 3", "Cycle 4", "Cycle 5", "Cycle 6"],
        percentage: "$580k Blended Sales Volume"
      }
    },
    creatorAmbassador: {
      id: "creatorAmbassador",
      category: "affiliate-marketing",
      title: "Influencer Affiliate Networks",
      subtitle: "Creator Referral Scaling",
      tagline: "Launch large scale creator arrays tracking links & discount codes.",
      img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&q=80",
      whatIs: "We structure localized influencer groups. By pairing custom commission structures with personalized checkout codes, we allow social profiles to promote your inventory to their followers directly.",
      howWeDo: [
        { step: "Target Creator Vetting", detail: "Confirming creator engagement indexes, reach credibility, and brand-fit alignments." },
        { step: "Dynamic Discount Code Provisioning", detail: "Deploying unique custom codes configured to attribute sales to social publishers." },
        { step: "Content Quality Control", detail: "Providing messaging criteria to ensure creator posts match brand compliance rules." }
      ],
      graph: {
        title: "Creator-Attributed Purchase Volume",
        labelX: "Ambassador Signups",
        labelY: "Monthly Transactions",
        points: [12, 45, 95, 180, 310, 480],
        labels: ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5", "Step 6"],
        percentage: "+300% Ambassador Scale"
      }
    },
    editorialPR: {
      id: "editorialPR",
      category: "affiliate-marketing",
      title: "Editorial PR & Review Syndication",
      subtitle: "Digital PR Placements",
      tagline: "Secure digital product review coverage on major lifestyle media publications.",
      img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800&q=80",
      whatIs: "PR Syndication involves targeting editors writing product comparisons and gift guides, ensuring your brand has permanent high-value mentions driving passive referrals.",
      howWeDo: [
        { step: "Publisher Database Targeting", detail: "Sorting editors writing active gift guides or comparison lists in your industry." },
        { step: "Sample Distribution Workflows", detail: "Distributing product evaluation kits to journalists for honest positive reviews." },
        { step: "Syndicated Link Insertion", detail: "Adding custom link tags that pass high SEO equity to your target storefront." }
      ],
      graph: {
        title: "Syndicated PR Sales Volume ($k)",
        labelX: "Features Secured",
        labelY: "Monthly PR Revenue ($k)",
        points: [8, 22, 55, 110, 190, 310],
        labels: ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5", "Step 6"],
        percentage: "$310k Monthly PR Sales"
      }
    },

    // ── PAID ADVERTISEMENT CHANNELS ──
    googleSearch: {
      id: "googleSearch",
      category: "paid-advertisement",
      title: "Google Search & PMAX Ads",
      subtitle: "High-Intent PPC Interception",
      tagline: "Capture customers at the exact millisecond they search for solutions.",
      img: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?w=800&q=80",
      whatIs: "Google search campaigns place your product offerings directly in front of buyers actively typing keywords related to your product category, driving maximum conversion efficiency.",
      howWeDo: [
        { step: "High-Purchase Intent Keymapping", detail: "Filtering low-intent informational searches to focus budget purely on buying terms." },
        { step: "Optimized Performance Max Catalogs", detail: "Structuring dynamic store feeds, titles, and image combinations to maximize PMAX algorithmic ROAS." },
        { step: "Daily Search Term Pruning", detail: "Adding negative search parameters daily to ensure ad budget goes strictly to qualified intent." }
      ],
      graph: {
        title: "Blended Return on Ad Spend (ROAS)",
        labelX: "Campaign Weeks",
        labelY: "ROAS Ratio (Multiplier)",
        points: [1.3, 2.0, 2.7, 3.4, 4.0, 4.8],
        labels: ["Week 2", "Week 4", "Week 6", "Week 8", "Week 10", "Week 12"],
        percentage: "4.8x ROAS Achieved"
      }
    },
    metaFunnels: {
      id: "metaFunnels",
      category: "paid-advertisement",
      title: "Meta Ad Funnels (FB & IG)",
      subtitle: "Visual Disruption Strategy",
      tagline: "Generate mass attention and scalable impulse buy funnels.",
      img: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80",
      whatIs: "Meta advertising captures demand using scroll-stopping video and graphic assets. By pairing advanced lookalike data with broad behavioral targets, we locate potential buyers before they search.",
      howWeDo: [
        { step: "Creative Testing Sandbox", detail: "Testing multiple hooks, visuals, and copy variations weekly to locate winning creative concepts." },
        { step: "Full-Funnel Pixel Tracking Setup", detail: "Deploying Meta's Conversion API to guarantee data feedback reaches ad optimization servers." },
        { step: "Dynamic Catalog Retargeting", detail: "Automatically showing exact products viewed by customers to bring them back to checkout." }
      ],
      graph: {
        title: "Weekly Checkout Orders Scale",
        labelX: "Campaign Iteration",
        labelY: "Weekly Paid Orders Count",
        points: [30, 85, 160, 280, 430, 650],
        labels: ["Iter 1", "Iter 2", "Iter 3", "Iter 4", "Iter 5", "Iter 6"],
        percentage: "+2,060% Scaled Conversions"
      }
    },
    tiktokUgc: {
      id: "tiktokUgc",
      category: "paid-advertisement",
      title: "TikTok UGC Video Ads",
      subtitle: "Native Attention Scaling",
      tagline: "Stop selling, start styling. Authentic creator UGC ads.",
      img: "https://images.unsplash.com/photo-1611606063065-ee7946f0787a?w=800&q=80",
      whatIs: "TikTok video ads connect with younger demographics by serving raw, mobile-first reviews, tutorials, and trend integrations that look organic, drastically reducing CPCs.",
      howWeDo: [
        { step: "Creator UGC Briefing Engine", detail: "Structuring creative templates that dictate video flow, angles, hooks, and call-to-actions." },
        { step: "First 3-Second Hook Splitting", detail: "Testing multiple video intros to find combinations that keep users from swiping away." },
        { step: "Paid Spark Ad whitelisting", detail: "Running ads under creator handles to increase credibility and lower cost-per-clicks." }
      ],
      graph: {
        title: "Average Ad Click-Through Rate (CTR)",
        labelX: "Asset Variations Tested",
        labelY: "Click-Through Rate %",
        points: [0.9, 1.5, 2.2, 2.9, 3.5, 4.3],
        labels: ["Test 1", "Test 2", "Test 3", "Test 4", "Test 5", "Test 6"],
        percentage: "4.3% CTR Target Reached"
      }
    },
    linkedinLead: {
      id: "linkedinLead",
      category: "paid-advertisement",
      title: "LinkedIn B2B Lead Gen",
      subtitle: "Decision Maker Targeting",
      tagline: "Target precise enterprise decision makers by company and title.",
      img: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=800&q=80",
      whatIs: "LinkedIn campaigns focus on professional firmographics. We connect corporate services with verified decision-makers like CEOs, VPs, and directors based on industry size, job role, and company name.",
      howWeDo: [
        { step: "Precision Account Mapping (ABM)", detail: "Uploading lists of high-value client domains to display personalized B2B ads to their employees." },
        { step: "Native In-Feed Lead Forms", detail: "Capturing customer contact details directly within LinkedIn without forcing website clicks." },
        { step: "Corporate Offer Magnet Asset", detail: "Promoting custom case study whitepapers, tool calculators, or webinars to qualify leads." }
      ],
      graph: {
        title: "Qualified Sales Pipeline Value ($k)",
        labelX: "Campaign Duration (Months)",
        labelY: "Attributed Pipeline ($k)",
        points: [75, 180, 390, 720, 1100, 1600],
        labels: ["Month 1", "Month 2", "Month 3", "Month 4", "Month 5", "Month 6"],
        percentage: "$1.6M Pipeline Generated"
      }
    },
    youtubeAds: {
      id: "youtubeAds",
      category: "paid-advertisement",
      title: "YouTube Video Campaigns",
      subtitle: "Video Reach Scaling",
      tagline: "Establish visual dominance through high-retention video placements.",
      img: "https://images.unsplash.com/photo-1548372290-8d01b6c8e78c?w=800&q=80",
      whatIs: "YouTube ads place high-production product narratives inside high-affinity channels, maximizing brand retention metrics and direct click-through action pathways.",
      howWeDo: [
        { step: "Affinity Placement Mapping", detail: "Targeting specific popular channels or content tags matching your customer interests." },
        { step: "TrueView Skip-Rate Tuning", detail: "Iterating hook edits to prevent users from skipping within the first five seconds." },
        { step: "Custom Video Lead Funnels", detail: "Pairing custom visual overlays and promo buttons below the video stream." }
      ],
      graph: {
        title: "Attributed Conversion Pipeline",
        labelX: "Video Variations",
        labelY: "Weekly Purchases Count",
        points: [10, 35, 78, 140, 240, 390],
        labels: ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5", "Step 6"],
        percentage: "3.4x Video ROI Lift"
      }
    },
    programmaticNative: {
      id: "programmaticNative",
      category: "paid-advertisement",
      title: "Programmatic Native Ads",
      subtitle: " Syndicated Banners",
      tagline: "Syndicate targeted banners across premium news outlets globally.",
      img: "https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?w=800&q=80",
      whatIs: "Programmatic native ads run dynamic graphics on platforms like Outbrain and Taboola, blending product recommendations natively into publisher layouts.",
      howWeDo: [
        { step: "Dynamic Asset Delivery", detail: "Structuring localized visual formats configured to update based on user preferences." },
        { step: "Target Whitelist Mapping", detail: "Limiting ad placements strictly to premium news and authority portals to safeguard brand image." },
        { step: "CPC Arbitrage Testing", detail: "Analyzing click outcomes to focus spending purely on positive ROI placements." }
      ],
      graph: {
        title: "Native Ad Referral Growth",
        labelX: "Ad Impressions (M)",
        labelY: "Referrals Captured",
        points: [1500, 4800, 11000, 22000, 39000, 60000],
        labels: ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5", "Step 6"],
        percentage: "2.8x CTR Scale"
      }
    }
  };

  // Group items by category for directory view
  const digitalMarketingChannels = Object.values(servicesData).filter(item => item.category === "digital-marketing");
  const affiliateMarketingPartnerships = Object.values(servicesData).filter(item => item.category === "affiliate-marketing");
  const paidAdvertisementChannels = Object.values(servicesData).filter(item => item.category === "paid-advertisement");

  // Related / Other Services logic (Filter current active, pick up to 3)
  const getOtherServices = (currentId) => {
    return Object.values(servicesData).filter(item => item.id !== currentId).slice(0, 3);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased overflow-x-hidden">
      <Navbar />

      <main className="flex-1 pb-20">
        
        {/* Render card detail view if selected */}
        {selectedCard ? (
          <div className="animate-fadeIn">
            
            {/* ── HERO BANNER ── */}
            <div className="relative w-full h-[420px] md:h-[480px] overflow-hidden">
              <img src={selectedCard.img} alt={selectedCard.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              {/* Back Button */}
              <div className="absolute top-28 left-6 md:left-12 z-20">
                <button 
                  onClick={() => setSelectedCard(null)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-bold border border-white/20 transition-all text-sm shadow-sm"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to Services
                </button>
              </div>
              {/* Hero Content */}
              <div className="absolute bottom-0 left-0 right-0 z-20 px-6 md:px-12 pb-10 max-w-4xl">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold bg-blue-500/30 text-blue-300 uppercase tracking-widest border border-blue-400/30 mb-4">
                  {selectedCard.subtitle}
                </span>
                <h1 className="text-3xl md:text-5xl font-black text-white tracking-tight leading-tight mb-3">
                  {selectedCard.title}
                </h1>
                <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-2xl">
                  {selectedCard.tagline}
                </p>
              </div>
            </div>

            {/* ── MAIN CONTENT ── */}
            <div className="container mx-auto px-4 md:px-8 max-w-6xl py-14 space-y-14">

              {/* What Is + How We Do It */}
              <div className="grid md:grid-cols-2 gap-10">
                {/* What Is */}
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 space-y-4">
                  <div className="text-sm font-black uppercase tracking-widest text-black flex items-center gap-2">
                    <span>01 //</span>
                    What Is This Channel?
                  </div>
                  <h3 className="text-xl font-black text-slate-900">Core Mechanism & Approach</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{selectedCard.whatIs}</p>
                </div>

                {/* How We Do It */}
                <div className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100 space-y-5">
                  <div className="text-sm font-black uppercase tracking-widest text-black flex items-center gap-2">
                    <span>02 //</span>
                    How We Execute It
                  </div>
                  <h3 className="text-xl font-black text-slate-900">Operational Roadmap</h3>
                  <div className="space-y-3">
                    {selectedCard.howWeDo.map((item, idx) => (
                      <div key={idx} className="flex gap-4 items-start bg-slate-50 p-4 rounded-2xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50/40 transition-all">
                        <span className="w-7 h-7 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white font-black text-xs flex items-center justify-center shrink-0 shadow-md shadow-blue-200">
                          {idx + 1}
                        </span>
                        <div>
                          <h5 className="font-extrabold text-sm text-slate-900">{item.step}</h5>
                          <p className="text-slate-500 text-xs mt-0.5 leading-relaxed">{item.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ── GRAPH SECTION ── */}
              <div className="bg-slate-950 rounded-3xl p-8 md:p-10 shadow-2xl border border-slate-800 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-72 h-72 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-600/8 rounded-full blur-[80px] pointer-events-none" />

                {/* Header */}
                <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2 text-blue-400 text-[10px] font-extrabold uppercase tracking-widest">
                      <Sparkles className="w-3.5 h-3.5" /> 03 // Performance Growth Chart
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-white tracking-tight">{selectedCard.graph.title}</h3>
                  </div>
                  <div className="inline-flex items-center gap-2 bg-blue-600 text-white text-xs font-extrabold px-5 py-2.5 rounded-xl border border-blue-500/40 shadow-lg shadow-blue-900/50 shrink-0">
                    <TrendingUp className="w-3.5 h-3.5" /> {selectedCard.graph.percentage}
                  </div>
                </div>

                {/* Y-axis label */}
                <div className="relative z-10 flex gap-6 items-end">
                  <div className="hidden md:flex flex-col items-center justify-center gap-1 shrink-0">
                    <span className="text-slate-500 text-[9px] uppercase tracking-widest font-bold" style={{writingMode:'vertical-rl', transform:'rotate(180deg)'}}>{selectedCard.graph.labelY}</span>
                  </div>
                  <div className="flex-1 space-y-3">
                    {/* Chart bars */}
                    <div className="flex items-end gap-3 h-52">
                      {(() => {
                        const pts = selectedCard.graph.points;
                        const maxVal = Math.max(...pts);
                        return pts.map((val, idx) => {
                          const heightPct = Math.max((val / maxVal) * 100, 4);
                          const isLast = idx === pts.length - 1;
                          return (
                            <div key={idx} className="flex-1 flex flex-col items-center justify-end h-full gap-1.5 group/bar">
                              <div className="relative w-full flex items-end justify-center" style={{height: '100%'}}>
                                <div 
                                  className={`w-full rounded-t-lg transition-all duration-700 relative overflow-hidden ${isLast ? 'bg-gradient-to-t from-blue-700 to-blue-400' : 'bg-gradient-to-t from-slate-700 to-slate-500 group-hover/bar:from-blue-700/60 group-hover/bar:to-blue-400/60'}`}
                                  style={{height: `${heightPct}%`}}
                                >
                                  <div className="absolute inset-0 bg-white/5" />
                                </div>
                                {/* Tooltip */}
                                <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[9px] font-bold px-2 py-0.5 rounded-md opacity-0 group-hover/bar:opacity-100 transition-opacity whitespace-nowrap border border-slate-700 shadow-xl">
                                  {typeof val === 'number' && val > 999 ? (val/1000).toFixed(1)+'k' : val}
                                </div>
                              </div>
                            </div>
                          );
                        });
                      })()}
                    </div>
                    {/* X-axis labels */}
                    <div className="flex gap-3">
                      {selectedCard.graph.labels.map((label, idx) => (
                        <div key={idx} className="flex-1 text-center text-slate-500 text-[9px] font-bold uppercase tracking-wide truncate">{label}</div>
                      ))}
                    </div>
                    {/* X-axis label */}
                    <div className="text-center text-slate-500 text-[9px] uppercase tracking-widest font-bold mt-1">{selectedCard.graph.labelX}</div>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="relative z-10 grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-slate-800">
                  {[
                    { label: "Data Points", value: selectedCard.graph.points.length },
                    { label: "Peak Value", value: (() => { const m = Math.max(...selectedCard.graph.points); return m > 999 ? (m/1000).toFixed(1)+'k' : m; })() },
                    { label: "Result", value: selectedCard.graph.percentage }
                  ].map((stat, i) => (
                    <div key={i} className="text-center space-y-1">
                      <p className="text-white font-black text-lg md:text-xl">{stat.value}</p>
                      <p className="text-slate-500 text-[9px] uppercase tracking-widest font-bold">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── RELATED SERVICES ── */}
              <div className="space-y-6">
                <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 tracking-tight">Explore Other Services</h3>
                    <p className="text-slate-400 text-sm mt-0.5">More channels you might want to combine with this.</p>
                  </div>
                </div>
                <div className="grid sm:grid-cols-3 gap-6">
                  {getOtherServices(selectedCard.id).map((item) => (
                    <div
                      key={item.id}
                      onClick={() => {
                        setSelectedCard(item);
                        setHoveredPoint(null);
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }}
                      className="cursor-pointer bg-white border border-slate-200/85 rounded-3xl overflow-hidden hover:shadow-xl hover:border-blue-400 transition-all duration-300 flex flex-col justify-between group"
                    >
                      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                        <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                        <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-blue-600 font-extrabold text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm">
                          {item.subtitle}
                        </span>
                      </div>
                      <div className="p-5 space-y-3 flex-1 flex flex-col justify-between">
                        <div className="space-y-1">
                          <h4 className="font-extrabold text-sm md:text-base text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                            {item.title}
                          </h4>
                          <p className="text-slate-400 text-[11px] leading-relaxed line-clamp-2">
                            {item.tagline}
                          </p>
                        </div>
                        <div className="pt-3 border-t border-slate-100">
                          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-blue-600 text-white text-[10px] font-bold rounded-full shadow-sm shadow-blue-200 group-hover:bg-blue-700 transition-colors">
                            View Strategy & Data <ArrowRight className="w-3 h-3" />
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        ) : (
          <div className="space-y-20">
            
            {/* ── SPLIT HERO SECTION (Same as Contact/Blog) ── */}
            <section className="relative min-h-[520px] flex items-center justify-start overflow-hidden bg-slate-950 pt-28 pb-16 px-6 md:px-12 border-b border-slate-800">
              {/* Background Image (100% Opacity on Right) */}
              <div 
                className="absolute inset-0 bg-cover bg-right md:bg-right-center bg-no-repeat opacity-100 z-0"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=80')` }}
              />
              {/* Gradient Overlay: Dark left → Transparent right */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950/85 via-slate-950/30 to-transparent z-10" />

              {/* Left-aligned Content */}
              <div className="container mx-auto max-w-6xl relative z-20">
                <div className="max-w-2xl text-left space-y-8">
                  <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-bold bg-blue-500/20 text-blue-300 uppercase tracking-widest border border-blue-500/30">
                    <Sparkles className="w-3.5 h-3.5 text-blue-400" /> CAPABILITIES DIRECTORY
                  </span>
                  <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight text-white">
                    Channels Designed for <br/>
                    <span className="text-blue-400 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Scale & Profit</span>
                  </h1>
                  <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-xl">
                    Expand your company's potential. Click on any custom marketing channel card below to examine launch roadmaps, setup briefs, and target circular performance metrics.
                  </p>

                  {/* Counting Stats Cards Inside Hero */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                    {[
                      { end: 50, prefix: "$", suffix: "M+", label: "Client Spend Managed", color: "text-blue-400" },
                      { end: 3, suffix: ".8x", label: "Average Campaign ROAS", color: "text-cyan-400" },
                      { end: 99, suffix: ".8%", label: "Attribution Accuracy", color: "text-indigo-400" }
                    ].map((stat, i) => (
                      <CountUpCard key={i} {...stat} />
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* ── 1. DIGITAL MARKETING CHANNELS SECTION ── */}
            <div id="digital-marketing" className="container mx-auto px-4 md:px-6 max-w-7xl space-y-12 scroll-mt-28">
              <div className="text-center space-y-4 max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight text-center leading-tight">
                  Digital Marketing Channels
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed max-w-lg mx-auto">
                  Compounding search results, retention automation setups, and attribution matrices constructed for high conversion yields.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {digitalMarketingChannels.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedCard(item)}
                    className="cursor-pointer bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-[0_20px_50px_rgba(37,99,235,0.15)] hover:border-blue-500/80 hover:scale-[1.03] transition-all duration-500 ease-out flex flex-col justify-between group transform"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-blue-600 font-extrabold text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm">
                        {item.subtitle}
                      </span>
                    </div>
                    <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                      <div className="space-y-2">
                        <h3 className="font-extrabold text-lg text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-slate-500 text-[13px] leading-relaxed line-clamp-3">
                          {item.tagline}
                        </p>
                      </div>
                      <div className="mt-4 pt-4 border-t border-slate-100">
                        <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-full shadow-md shadow-blue-200 group-hover:bg-blue-700 transition-colors">
                          View Strategy & Data <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── 2. AFFILIATE MARKETING PARTNERSHIPS SECTION ── */}
            <div id="affiliate-marketing" className="container mx-auto px-4 md:px-6 max-w-7xl space-y-12 scroll-mt-28">
              <div className="text-center space-y-4 max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight text-center leading-tight">
                  Affiliate Marketing Partnerships
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed max-w-lg mx-auto">
                  Risk-free partner structures recruiting micro-affiliates, key networks, and digital PR editors to scale conversions.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {affiliateMarketingPartnerships.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedCard(item)}
                    className="cursor-pointer bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-[0_20px_50px_rgba(37,99,235,0.15)] hover:border-blue-500/80 hover:scale-[1.03] transition-all duration-500 ease-out flex flex-col justify-between group transform"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-blue-600 font-extrabold text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm">
                        {item.subtitle}
                      </span>
                    </div>
                    <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                      <div className="space-y-2">
                        <h3 className="font-extrabold text-lg text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-slate-500 text-[13px] leading-relaxed line-clamp-3">
                          {item.tagline}
                        </p>
                      </div>
                      <div className="mt-4 pt-4 border-t border-slate-100">
                        <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-full shadow-md shadow-blue-200 group-hover:bg-blue-700 transition-colors">
                          View Strategy & Data <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── 3. PAID ADVERTISEMENT CHANNELS SECTION ── */}
            <div id="paid-advertisement" className="container mx-auto px-4 md:px-6 max-w-7xl space-y-12 scroll-mt-28">
              <div className="text-center space-y-4 max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight text-center leading-tight">
                  Paid Advertisement Channels
                </h2>
                <p className="text-slate-500 text-sm leading-relaxed max-w-lg mx-auto">
                  Hyper-targeted ad funnels running on Meta, Google, YouTube, and TikTok to qualify buyers and scale blended ROAS indicators.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {paidAdvertisementChannels.map((item) => (
                  <div
                    key={item.id}
                    onClick={() => setSelectedCard(item)}
                    className="cursor-pointer bg-white border border-slate-200/80 rounded-3xl overflow-hidden shadow-sm hover:shadow-[0_20px_50px_rgba(37,99,235,0.15)] hover:border-blue-500/80 hover:scale-[1.03] transition-all duration-500 ease-out flex flex-col justify-between group transform"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                      <img src={item.img} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-blue-600 font-extrabold text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm">
                        {item.subtitle}
                      </span>
                    </div>
                    <div className="p-6 space-y-2 flex-1 flex flex-col justify-between">
                      <div className="space-y-2">
                        <h3 className="font-extrabold text-lg text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-slate-500 text-[13px] leading-relaxed line-clamp-3">
                          {item.tagline}
                        </p>
                      </div>
                      <div className="mt-4 pt-4 border-t border-slate-100">
                        <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-blue-600 text-white text-xs font-bold rounded-full shadow-md shadow-blue-200 group-hover:bg-blue-700 transition-colors">
                          View Strategy & Data <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* ── BOTTOM CTA SECTION (SAME AS HOME) ── */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-50 via-blue-100/60 to-indigo-50 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden border border-blue-100/50">
              
              {/* Soft decorative blurs */}
              <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-200/30 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-indigo-200/20 rounded-full blur-[60px]" />

              <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                  Ready to grow your website ?
                </h2>
                <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
                  Bring affiliate partnerships, search, campaigns, and reporting into one practical operating system for measurable growth.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                  <button
                    onClick={() => window.dispatchEvent(new CustomEvent('open-booking-modal'))}
                    className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-base hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 flex items-center justify-center gap-2"
                  >
                    Book a Schedule
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => {
                      setSelectedCard(null);
                      window.scrollTo({ top: 600, behavior: "smooth" });
                    }}
                    className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 border border-slate-200 rounded-full font-bold text-base hover:bg-slate-50 transition-colors shadow-sm"
                  >
                    Explore Services
                  </button>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
