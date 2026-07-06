import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Link } from "wouter";
import { ArrowRight, BarChart3, Globe, Search, Sparkles, ShoppingBag, Mail, Megaphone, Zap, Laptop, FileText } from "lucide-react";
const categoryData = [{
  title: "SEO Tools",
  description: "Keyword research, backlink trackers, and technical audits for organic growth.",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtJKYGDU5a0eI7jmQg2u3mbfK_2YBM72j1Oufuba7L2sBEttK86vN-BUY&s=10",
  stats: "3 Active Deals",
  dbCategory: "SEO Tools"
}, {
  title: "Email Marketing",
  description: "Automation builders, newsletter campaigns, and user segmentation systems.",
  image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=600&auto=format&fit=crop",
  stats: "2 Active Deals",
  dbCategory: "Email Marketing"
}, {
  title: "Marketing & Ads",
  description: "Inbound CRM systems, sales funnel managers, and custom lead captures.",
  image: "https://www.pagetraffic.in/wp-content/uploads/2022/05/digital-marketing-guide.jpg",
  stats: "3 Active Deals",
  dbCategory: "Marketing"
}, {
  title: "Design & Creative",
  description: "Collaborative UI/UX workspaces and libraries of stock creative elements.",
  image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=600&auto=format&fit=crop",
  stats: "3 Active Deals",
  dbCategory: "Design"
}, {
  title: "Web Hosting",
  description: "Blazing fast cloud hosting, domain registration, and weekly backup protection.",
  image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=600&auto=format&fit=crop",
  stats: "2 Active Deals",
  dbCategory: "Hosting"
}, {
  title: "Ecommerce",
  description: "Product catalogs, secure checkout gateways, and cart recovery solutions.",
  image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=600&auto=format&fit=crop",
  stats: "1 Active Deal",
  dbCategory: "eCommerce"
}, {
  title: "Productivity",
  description: "Document storage systems, team collaboration databases, and task planners.",
  image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=600&auto=format&fit=crop",
  stats: "2 Active Deals",
  dbCategory: "Productivity"
}, {
  title: "Content Marketing",
  description: "AI copywriting generators, blogging frameworks, and editor integrations.",
  image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?q=80&w=600&auto=format&fit=crop",
  stats: "2 Active Deals",
  dbCategory: "Marketing"
}, {
  title: "SaaS & Operations",
  description: "Business operations, brand guidelines, and organizational management templates.",
  image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop",
  stats: "2 Active Deals",
  dbCategory: "Productivity"
}, {
  title: "Social Media",
  description: "Manage feeds, schedule updates, and monitor audience growth statistics.",
  image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=600&auto=format&fit=crop",
  stats: "2 Active Deals",
  dbCategory: "Marketing"
}, {
  title: "Affiliate Networks",
  description: "Aggregated affiliate platform links, payout histories, and setup metrics.",
  image: "https://images.unsplash.com/photo-1542744094-3a31f103e35f?q=80&w=600&auto=format&fit=crop",
  stats: "3 Active Deals",
  dbCategory: "Marketing"
}, {
  title: "Workspace & CRM",
  description: "Collaborative team databases, sales funnels, and centralized ticket panels.",
  image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop",
  stats: "2 Active Deals",
  dbCategory: "Productivity"
}];
export default function Categories() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">{<Navbar />}{<main className="flex-1 pt-32 pb-24 relative overflow-hidden">{// Grid background pattern
      <div className="absolute inset-0 opacity-[0.4] mix-blend-overlay pointer-events-none" style={{
        backgroundImage: "linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)",
        backgroundSize: "40px 40px"
      }} />}{// Soft mesh gradients for light mode
      <div className="absolute top-[-10%] left-[-10%] w-[55%] h-[60%] bg-gradient-to-br from-blue-100 to-purple-50 rounded-full blur-[130px] pointer-events-none opacity-80" />}{<div className="absolute bottom-10 right-[-10%] w-[50%] h-[50%] bg-purple-50/50 rounded-full blur-[140px] pointer-events-none opacity-60" />}{<div className="container mx-auto px-4 md:px-6 relative z-10 space-y-20">{// ── REDESIGNED Split Hero Section ──
        <div className="grid lg:grid-cols-12 gap-12 items-center">{// Left Column: Headline and description
          <div className="lg:col-span-7 space-y-6 text-left">{<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-bold text-xs uppercase tracking-widest">{<Sparkles className="w-4 h-4" />}Interactive Workspaces</div>}{<h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 bg-clip-text text-transparent">Browse Tools by {<br />}{<span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Marketing Hubs</span>}</h1>}{<p className="text-base md:text-lg text-slate-600 max-w-xl leading-relaxed">Build your perfect tech stack. Browse curated tools, SaaS resources, and verified discounts sorted across nine business workspaces.</p>}{// Stats badges
            <div className="flex flex-wrap gap-4 pt-2">{<div className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 font-semibold shadow-sm">{<span className="text-blue-600 font-bold mr-1.5">12</span>}Core Workspaces</div>}{<div className="px-4 py-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 font-semibold shadow-sm">{<span className="text-cyan-600 font-bold mr-1.5">24+</span>}Verified Active Offers</div>}</div>}</div>}{// Right Column: Creative floating workspace items (enlarged)
          <div className="lg:col-span-5 relative h-[440px] w-full hidden md:block select-none">{<div className="absolute inset-0 flex items-center justify-center">{// Floating card 1
              <div className="absolute transform -rotate-6 translate-x-[-70px] translate-y-[-60px] p-5 rounded-2xl bg-white border border-slate-200 shadow-2xl w-56 space-y-3 hover:rotate-0 hover:scale-105 transition-all duration-300">{<Search className="w-7 h-7 text-blue-600" />}{<h3 className="font-extrabold text-base text-slate-800">SEO Tools</h3>}{<p className="text-xs text-slate-500">Semrush, Ahrefs & more</p>}</div>}{// Floating card 2
              <div className="absolute transform rotate-6 translate-x-[70px] translate-y-[30px] p-5 rounded-2xl bg-white border border-slate-200 shadow-2xl w-56 space-y-3 hover:rotate-0 hover:scale-105 transition-all duration-300 z-20">{<Sparkles className="w-7 h-7 text-pink-500" />}{<h3 className="font-extrabold text-base text-slate-800">Design Hub</h3>}{<p className="text-xs text-slate-500">Figma, Canva & templates</p>}</div>}{// Floating card 3
              <div className="absolute transform -rotate-12 translate-y-[110px] translate-x-[-110px] p-5 rounded-2xl bg-white border border-slate-200/60 shadow-xl w-52 space-y-3 hover:rotate-0 hover:scale-105 transition-all duration-300">{<Mail className="w-6 h-6 text-purple-500" />}{<h3 className="font-extrabold text-sm text-slate-800">Email Campaigns</h3>}{<p className="text-[11px] text-slate-500">Mailchimp, GetResponse</p>}</div>}</div>}</div>}</div>}{// ── REDESIGNED Cards Grid ──
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{categoryData.map(cat => {
            return <div className="group relative flex flex-col rounded-[2rem] border border-slate-200/80 bg-white hover:shadow-2xl hover:border-blue-500/40 transition-all duration-500 hover:-translate-y-1.5 overflow-hidden h-[370px]">{/* 1. Image cover header with overlay stats badge */}
              <div className="relative h-40 w-full overflow-hidden shrink-0"><img src={cat.image} alt={cat.title} className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" /><span className="absolute top-4 right-4 text-[10px] font-black text-slate-700 bg-white/90 backdrop-blur-sm border border-slate-200 px-3 py-1.5 rounded-full uppercase tracking-wider shadow-sm">{cat.stats}</span></div>}{/* 2. Text Details */}
              <div className="p-6 flex flex-col justify-between flex-1">{<div><h2 className="text-xl font-extrabold mb-1.5 text-slate-800 group-hover:text-blue-600 transition-colors">{cat.title}</h2><p className="text-xs text-slate-550 font-medium leading-relaxed line-clamp-2">{cat.description}</p></div>}{<Link href={`/deals?category=${encodeURIComponent(cat.dbCategory)}`} className="inline-flex items-center gap-1.5 text-xs font-black text-slate-800 group-hover:text-blue-600 transition-all mt-auto w-fit">View Deals {<ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />}</Link>}</div>}</div>;
          })}</div>}</div>}</main>}{<Footer />}</div>;
}