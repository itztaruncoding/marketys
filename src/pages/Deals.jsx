import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { deals } from "@/data/deals";
import { DealCard } from "@/components/DealCard";
import { Filter, ChevronDown, Tag, Zap, TrendingUp, Search, ShieldCheck, Sparkles, X } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import searchIcon from "@/assets/search.svg";
export default function Deals() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const categories = ["All Deals", "SEO Tools", "Hosting", "Design", "Marketing", "Email Marketing", "eCommerce", "Productivity"];
  const sortOptions = [{
    label: "Featured",
    value: "featured"
  }, {
    label: "Highest Discount",
    value: "discount"
  }, {
    label: "Highest Rated",
    value: "rating"
  }, {
    label: "Price: Low to High",
    value: "price_asc"
  }, {
    label: "Price: High to Low",
    value: "price_desc"
  }];
  const [activeCategory, setActiveCategory] = useState(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      const cat = params.get("category");
      if (cat) return decodeURIComponent(cat);
    }
    return "All Deals";
  });
  const [sortBy, setSortBy] = useState("featured");
  const [sortOpen, setSortOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(() => {
    if (typeof window !== "undefined") {
      const params = new URLSearchParams(window.location.search);
      return params.get("search") || "";
    }
    return "";
  });
  const sortRef = useRef(null);

  // Sync state with URL query parameters
  useEffect(() => {
    const handleLocationChange = () => {
      const params = new URLSearchParams(window.location.search);
      
      const cat = params.get("category");
      if (cat) {
        setActiveCategory(decodeURIComponent(cat));
      } else {
        setActiveCategory("All Deals");
      }

      const search = params.get("search");
      if (search !== null) {
        setSearchQuery(decodeURIComponent(search));
      } else {
        setSearchQuery("");
      }
    };
    handleLocationChange();
  }, [window.location.search]);

  // Close dropdown on outside click
  useEffect(() => {
    const handler = e => {
      if (sortRef.current && !sortRef.current.contains(e.target)) {
        setSortOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // Filter
  const filtered = deals.filter(d => {
    const matchesCategory = activeCategory === "All Deals" || d.category === activeCategory;
    const matchesSearch = d.name.toLowerCase().includes(searchQuery.toLowerCase()) || d.tagline.toLowerCase().includes(searchQuery.toLowerCase()) || d.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // Sort
  const sorted = [...filtered].sort((a, b) => {
    if (sortBy === "discount") return parseInt(b.discountPercentage) - parseInt(a.discountPercentage);
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "price_asc") return parseFloat(a.salePrice.replace(/[^0-9.]/g, "")) - parseFloat(b.salePrice.replace(/[^0-9.]/g, ""));
    if (sortBy === "price_desc") return parseFloat(b.salePrice.replace(/[^0-9.]/g, "")) - parseFloat(a.salePrice.replace(/[^0-9.]/g, ""));
    return 0; // featured = original order
  });
  const activeSortLabel = sortOptions.find(s => s.value === sortBy)?.label || "Sort By";
  return <div className="min-h-screen flex flex-col bg-background">{<Navbar />}{<main className="flex-1">{// ── REDESIGNED PREMIUM HERO HEADER ──
      <section className="relative pt-32 pb-20 overflow-hidden bg-slate-50 dark:bg-slate-900/50 text-slate-900 dark:text-slate-100 border-b border-slate-200/80 dark:border-slate-800">{// grid background pattern
        <div className="absolute inset-0 opacity-[0.3] mix-blend-overlay" style={{
          backgroundImage: "linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)",
          backgroundSize: "40px 40px"
        }} />}{// multi-layered mesh gradients
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[70%] bg-gradient-to-br from-blue-100 to-purple-50 rounded-full blur-[130px] pointer-events-none opacity-80" />}{<div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[60%] bg-purple-50/50 rounded-full blur-[140px] pointer-events-none opacity-60" />}{<div className="container mx-auto px-4 md:px-6 relative z-10">{<div className="grid lg:grid-cols-12 gap-12 items-center">{// Left column: Headline & Search
            <div className="lg:col-span-7 space-y-6 text-left">{// Live badge
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-400 font-bold text-xs uppercase tracking-widest">{<Sparkles className="w-3.5 h-3.5 text-blue-700 dark:text-blue-400" />}Verified Marketing Discounts</div>}{<h1 className="text-4xl md:text-6xl font-black tracking-tight leading-[1.1] text-slate-900 dark:text-slate-100">Upgrade Your Stack {<br />}{<span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">For Way Less</span>}</h1>}{<p className="text-base md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed max-w-xl">Stop paying full price. Instantly access verified, exclusive deals on the web's best SEO platforms, email marketing, hosting, and design tools.</p>}</div>}{// Right column: Glass stats grid
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4 lg:pl-6">{[{
                icon: <Tag className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
                value: `${deals.length}+`,
                label: "Verified Offers",
                desc: "Active right now"
              }, {
                icon: <TrendingUp className="w-6 h-6 text-green-600 dark:text-green-400" />,
                value: "Up to 80%",
                label: "Direct Savings",
                desc: "No coupon codes needed"
              }, {
                icon: <ShieldCheck className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />,
                value: "100%",
                label: "Verified Deals",
                desc: "Tested by experts"
              }, {
                icon: <Zap className="w-6 h-6 text-amber-600 dark:text-amber-400" />,
                value: "Limited Time",
                label: "Daily Updates",
                desc: "Grab them before they expire"
              }].map((stat, index) => <div className="p-6 rounded-2xl bg-white/70 dark:bg-slate-800/40 backdrop-blur-sm border border-slate-200 dark:border-slate-700 shadow-sm hover:bg-white dark:hover:bg-slate-800 hover:border-slate-350 dark:hover:border-slate-600 hover:shadow-md transition-all flex flex-col justify-between h-40">{<div className="flex justify-between items-center">{stat.icon}</div>}{<div className="space-y-1 mt-auto">{<span className="block text-2xl font-black tracking-tight text-slate-900 dark:text-slate-100">{stat.value}</span>}{<span className="block text-xs font-bold text-slate-700 dark:text-slate-300">{stat.label}</span>}{<span className="block text-[10px] text-slate-500 dark:text-slate-400">{stat.desc}</span>}</div>}</div>)}</div>}</div>}</div>}</section>}{// ── FILTERS + GRID ──
      <section className="py-12">{<div className="container mx-auto px-4 md:px-6">{// Filter bar
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">{// Category pills
            <div className="flex flex-wrap items-center gap-2">{categories.map(cat => <button onClick={() => setActiveCategory(cat)} className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${activeCategory === cat ? "bg-blue-600 text-white shadow-md shadow-blue-500/30" : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground border border-border"}`}>{cat}</button>)}</div>}{// Sort dropdown
            <div ref={sortRef} className="relative w-full md:w-auto">{<button onClick={() => setSortOpen(o => !o)} className="flex items-center gap-2 px-5 py-2.5 border border-border rounded-xl bg-card text-sm font-semibold hover:bg-muted transition-colors w-full md:w-auto justify-between min-w-[180px]">{<span className="flex items-center gap-2">{<Filter className="w-4 h-4 text-muted-foreground" />}{activeSortLabel}</span>}{<ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${sortOpen ? "rotate-180" : ""}`} />}</button>}{sortOpen && <div className="absolute right-0 top-full mt-2 w-52 bg-card border border-border rounded-2xl shadow-xl z-50 overflow-hidden">{sortOptions.map(opt => <button onClick={() => {
                  setSortBy(opt.value);
                  setSortOpen(false);
                }} className={`w-full text-left px-4 py-3 text-sm font-medium transition-colors ${sortBy === opt.value ? "bg-blue-600/10 text-blue-600 font-bold" : "hover:bg-muted text-foreground"}`}>{opt.label}</button>)}</div>}</div>}</div>}{// Result count
          <p className="text-sm text-muted-foreground mb-6 font-medium">Showing {<span className="text-foreground font-bold">{sorted.length}</span>} deals{activeCategory !== "All Deals" ? <span> in {<span className="text-blue-600 font-bold">{activeCategory}</span>}</span> : null}</p>}{
          // Deals grid
          sorted.length > 0 ? <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">{sorted.map((deal, i) => <DealCard deal={deal} index={i} />)}</div> : <div className="text-center py-24 text-muted-foreground">{<p className="mb-4 flex justify-center"><img src={searchIcon} className="w-16 h-16" alt="search" /></p>}{<p className="text-xl font-bold mb-2">No deals found</p>}{<p className="text-sm">Try selecting a different category.</p>}</div>}</div>}</section>}</main>}{<Footer />}</div>;
}