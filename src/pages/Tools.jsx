import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Star, Search, ArrowRight, Copy, Check, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import checkmarkIcon from "@/assets/checkmark.svg";
import closeIcon from "@/assets/close.svg";
import lightningIcon from "@/assets/lightning.svg";
export default function Tools() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTool, setSelectedTool] = useState(null);
  const [copiedCode, setCopiedCode] = useState(false);
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const toolId = params.get("id");
    if (toolId) {
      const foundTool = toolsData.find(t => t.id === toolId);
      if (foundTool) {
        setSelectedTool(foundTool);
      }
    }
  }, []);
  const toolsData = [{
    id: "semrush",
    name: "Semrush",
    cat: "SEO Tools",
    rating: 4.9,
    count: "3,240",
    desc: "All-in-one suite for SEO, PPC, content marketing, social media, and competitor research.",
    fullDesc: "Semrush is a leading online visibility management SaaS platform. It helps marketers execute SEO, PPC, SMM, Keyword Research, Competitive Research, PR, Content Marketing, and Marketing Insights campaigns.",
    coupon: "SEMRUSH-GURU30",
    offer: "30 Days Free Trial on Guru Plan (Save $120)",
    features: ["Keyword Magic Tool", "Site Audit & Backlink Checker", "Position Tracking & Competitor SEO Analysis"],
    logo: "https://images.seeklogo.com/logo-png/50/1/semrush-logo-png_seeklogo-504877.png",
    website: "https://semrush.com"
  }, {
    id: "ahrefs",
    name: "Ahrefs",
    cat: "SEO Tools",
    rating: 4.8,
    count: "2,810",
    desc: "Industry standard toolset for backlinks, competitor research, and organic traffic growth.",
    fullDesc: "Ahrefs is a software suite containing tools for link building, keyword research, competitor analysis, rank tracking and site audits. Most of Ahrefs' features are designed for marketing professionals.",
    coupon: "AHREFS-GET10",
    offer: "Get 2 Months Free with Annual Billing",
    features: ["Site Explorer link database", "Keywords Explorer traffic tool", "Content Gap analysis insights"],
    logo: <svg viewBox="0 0 24 24" className="w-full h-full p-2">{<defs>{<linearGradient id="ahrefsGradTools" x1="0%" y1="0%" x2="100%" y2="100%">{<stop offset="0%" stopColor="#3b82f6" />}{<stop offset="100%" stopColor="#1d4ed8" />}</linearGradient>}</defs>}{<rect width={24} height={24} rx={6} fill="url(#ahrefsGradTools)" />}{<path d="M6 16h2v-4H6v4zm4 0h2v-8h-2v8zm4 0h2v-12h-2v12zm4 0h2v-6h-2v6z" fill="white" />}</svg>,
    website: "https://ahrefs.com"
  }, {
    id: "mailchimp",
    name: "Mailchimp",
    cat: "Email Marketing",
    rating: 4.7,
    count: "8,120",
    desc: "All-in-one email marketing and automation platform for growing businesses.",
    fullDesc: "Mailchimp is an automated email marketing platform that helps businesses manage contacts, create email campaigns, and track analytics to scale customer communication.",
    coupon: "CHIMP-SAVE15",
    offer: "15% off Standard Plans for 3 months",
    features: ["Visual Email Campaign Builder", "Smart Drip Automations", "Customer Journey Mapping"],
    logo: "https://www.vectorlogo.zone/logos/mailchimp/mailchimp-icon.svg",
    website: "https://mailchimp.com"
  }, {
    id: "hubspot",
    name: "HubSpot",
    cat: "CRM & Sales",
    rating: 4.8,
    count: "5,430",
    desc: "Inbound marketing, sales, and service software centered around a free CRM.",
    fullDesc: "HubSpot offers a full platform of marketing, sales, customer service, and CRM software. It helps companies attract visitors, convert leads, and close customers.",
    coupon: "HUBSPOT-CRM25",
    offer: "25% off Starter Suite plan",
    features: ["Free lifetime contact CRM", "Smart landing page designer", "Advanced email newsletters lists"],
    logo: "https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg",
    website: "https://hubspot.com"
  }, {
    id: "buffer",
    name: "Buffer",
    cat: "Social Media",
    rating: 4.6,
    count: "4,090",
    desc: "Simple social media scheduling, analytics, and community engagement for brands.",
    fullDesc: "Buffer is a software application for the web and mobile, designed to manage accounts in social networks, by providing the means for a user to schedule posts.",
    coupon: "BUFFER-FREEBIE",
    offer: "14-Day Free Premium Trial",
    features: ["Multi-account post scheduler", "Audience engagement queue", "Performance analytics reporting"],
    logo: <svg viewBox="0 0 24 24" className="w-full h-full p-2.5">{<defs>{<linearGradient id="bufferGradTools" x1="0%" y1="0%" x2="100%" y2="100%">{<stop offset="0%" stopColor="#10b981" />}{<stop offset="100%" stopColor="#059669" />}</linearGradient>}</defs>}{<rect width={24} height={24} rx={6} fill="url(#bufferGradTools)" />}{<path d="M6 8l6-3 6 3-6 3-6-3zm0 4l6-3 6 3-6 3-6-3zm0 4l6-3 6 3-6 3-6-3z" fill="white" opacity={0.9} />}</svg>,
    website: "https://buffer.com"
  }, {
    id: "hootsuite",
    name: "Hootsuite",
    cat: "Social Media",
    rating: 4.5,
    count: "3,870",
    desc: "Enterprise social media management platform to schedule, monitor, and scale posts.",
    fullDesc: "Hootsuite is a social media management platform that covers almost every aspect of a social media campaign manager's role in a single unified dashboard.",
    coupon: "HOOT-PREMIUM20",
    offer: "20% off Professional monthly plans",
    features: ["Streams social monitoring feed", "Bulk post CSV uploader", "Team permission workspaces"],
    logo: <svg viewBox="0 0 24 24" className="w-full h-full p-2.5">{<defs>{<linearGradient id="hootGradTools" x1="0%" y1="0%" x2="100%" y2="100%">{<stop offset="0%" stopColor="#f97316" />}{<stop offset="100%" stopColor="#ea580c" />}</linearGradient>}</defs>}{<rect width={24} height={24} rx={6} fill="url(#hootGradTools)" />}{<path d="M12 5a6 6 0 00-6 6v3a3 3 0 003 3h6a3 3 0 003-3v-3a6 6 0 00-6-6zm-2.5 6a1.5 1.5 0 111.5-1.5 1.5 1.5 0 01-1.5 1.5zm5 0a1.5 1.5 0 111.5-1.5 1.5 1.5 0 01-1.5 1.5z" fill="white" />}</svg>,
    website: "https://hootsuite.com"
  }, {
    id: "grammarly",
    name: "Grammarly",
    cat: "Writing Assistants",
    rating: 4.7,
    count: "9,250",
    desc: "Cloud-based typing assistant that reviews spelling, grammar, and tone in real-time.",
    fullDesc: "Grammarly is a writing assistant that goes beyond grammar correction to provide suggestions for clarity, vocabulary, delivery, and tone across different writing mediums.",
    coupon: "WRITE-SMART20",
    offer: "20% off Grammarly Premium plans",
    features: ["Tone detector settings", "Plagiarism check scanner", "Vocabulary enhancement lists"],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6sD3QjT2K4q4B5yJ7wz3aB85k6T1m2_4XgA&s",
    website: "https://grammarly.com"
  }, {
    id: "notion",
    name: "Notion",
    cat: "Workspaces",
    rating: 4.6,
    count: "4,480",
    desc: "Connected workspace for notes, docs, wiki databases, and task lists.",
    fullDesc: "Notion is an all-in-one workspace where you can write, plan, collaborate and get organized. It provides components such as databases, kanban boards, wikis, and calendars.",
    coupon: "NOTION-PLUS10",
    offer: "10% off Notion Plus Annual Plan",
    features: ["Flexible databases layouts", "Clean markdown page editing", "Shared workspace boards"],
    logo: <svg viewBox="0 0 24 24" className="w-full h-full p-2.5">{<defs>{<linearGradient id="notionGradTools" x1="0%" y1="0%" x2="100%" y2="100%">{<stop offset="0%" stopColor="#1f2937" />}{<stop offset="100%" stopColor="#111827" />}</linearGradient>}</defs>}{<rect width={24} height={24} rx={6} fill="url(#notionGradTools)" />}{<path d="M7 7h3l5 7V7h2v10h-3l-5-7v7H7V7z" fill="white" />}</svg>,
    website: "https://notion.so"
  }, {
    id: "canva",
    name: "Canva",
    cat: "Design & Graphics",
    rating: 4.8,
    count: "5,120",
    desc: "Graphic design platform used to create social media graphics, presentations, and posters.",
    fullDesc: "Canva makes graphic design amazingly simple and accessible for everyone. Drag-and-drop elements to create stunning visual assets and social media graphics in minutes.",
    coupon: "CANVA-PROFREE",
    offer: "30 Days Free Trial of Canva Pro",
    features: ["Premium elements library", "One-click background remover", "Brand kit asset templates"],
    logo: "https://static.vecteezy.com/system/resources/thumbnails/073/494/184/small/canva-circular-logo-glossy-modern-finish-free-png.png",
    website: "https://canva.com"
  }, {
    id: "figma",
    name: "Figma",
    cat: "Design & Graphics",
    rating: 4.9,
    count: "3,840",
    desc: "Collaborative interface design tool for UX/UI prototyping and vector graphics.",
    fullDesc: "Figma is a collaborative web application for interface design, with additional offline features enabled by desktop applications for macOS and Windows.",
    coupon: "FIGMA-STUDENT",
    offer: "Free Education plan for Students & Teams",
    features: ["Live co-editing canvas", "Interactive UX prototyping", "Developer handoff specs"],
    logo: "https://www.vectorlogo.zone/logos/figma/figma-icon.svg",
    website: "https://figma.com"
  }, {
    id: "hostinger",
    name: "Hostinger",
    cat: "Web Hosting",
    rating: 4.7,
    count: "3,420",
    desc: "Fast, reliable, and extremely affordable hosting solutions with custom hPanel control panel.",
    fullDesc: "Hostinger provides web hosting services, VPS servers, domain registration, and custom website builder toolsets at highly discounted entry prices.",
    coupon: "HOSTINGER-DEALS",
    offer: "Get 80% off Hosting plans + Free Domain",
    features: ["Free Website migration support", "LiteSpeed web speed boost", "Built-in AI Website builder"],
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXoiSouOpkA7JJF-09eYqM4KcDdJIbCZ7qBF8a0rKPkYijuEsG_FPy0Lg&s=10",
    website: "https://hostinger.com"
  }, {
    id: "jasper",
    name: "Jasper AI",
    cat: "AI Tools",
    rating: 4.8,
    count: "2,540",
    desc: "AI copywriting assistant that creates blog posts, social media updates, and ad copy.",
    fullDesc: "Jasper is a generative AI platform for content creators and marketers, helping write SEO blogs, draft social media captions, and build marketing campaigns.",
    coupon: "JASPER-AI10",
    offer: "10,000 Free Credits on Signup",
    features: ["50+ Copywriting templates", "SEO surfer integration mode", "Tone of voice brand selector"],
    logo: <svg viewBox="0 0 24 24" className="w-full h-full p-2.5">{<defs>{<linearGradient id="jasperGradTools" x1="0%" y1="0%" x2="100%" y2="100%">{<stop offset="0%" stopColor="#8a2be2" />}{<stop offset="50%" stopColor="#ff007f" />}{<stop offset="100%" stopColor="#ffaa00" />}</linearGradient>}</defs>}{<rect width={24} height={24} rx={6} fill="url(#jasperGradTools)" />}{<path d="M7 16v-3a5 5 0 0110 0v3M12 6v2" stroke="white" strokeWidth={2} strokeLinecap="round" fill="none" />}{<circle cx={9} cy={12} r={1} fill="white" />}{<circle cx={15} cy={12} r={1} fill="white" />}</svg>,
    website: "https://jasper.ai"
  }];
  const filteredTools = toolsData.filter(tool => tool.name.toLowerCase().includes(searchQuery.toLowerCase()) || tool.cat.toLowerCase().includes(searchQuery.toLowerCase()));
  const copyToClipboard = text => {
    navigator.clipboard.writeText(text);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };
  return <div className="min-h-screen flex flex-col bg-background">{<Navbar />}{<main className="flex-1">{<section className="relative py-20 bg-gradient-to-b from-blue-50/50 dark:from-blue-950/10 via-background to-background overflow-hidden border-b border-border">{<div className="container mx-auto px-4 md:px-6 max-w-6xl relative z-10">{<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">{<div className="lg:col-span-7 space-y-6 text-left">{<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-105 dark:border-blue-800 text-blue-700 dark:text-blue-400 text-xs font-bold uppercase tracking-wider"><img src={lightningIcon} className="w-4 h-4 inline-block align-middle" alt="lightning" /> Premium software deals</div>}{<h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 dark:text-slate-100 tracking-tight leading-none">Discover the Ultimate {<span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Marketing Stack</span>}</h1>}{<p className="text-slate-550 dark:text-slate-400 text-base md:text-lg max-w-xl leading-relaxed text-slate-500">Access verified promotional discount codes, copy exclusive coupon codes, and compare the highest-performing marketing tools to multiply your business growth.</p>}{<div className="relative max-w-md shadow-xl rounded-2xl bg-card border border-border p-1 flex items-center">{<Search className="absolute left-4 text-slate-400 w-5 h-5" />}{<input type="text" placeholder="Search tools or categories..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full pl-12 pr-4 py-3.5 rounded-xl text-slate-800 dark:text-slate-200 bg-card placeholder-slate-400 focus:outline-none text-sm font-semibold" />}</div>}{<div className="flex flex-wrap items-center gap-2.5 pt-2">{<span className="text-xs font-bold text-slate-400 uppercase">Popular Searches:</span>}{["SEO", "CRM", "Email", "Design", "Hosting"].map(tag => <button onClick={() => setSearchQuery(tag)} className="px-3 py-1 text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-blue-950/30 rounded-full border border-border transition-colors">{tag}</button>)}</div>}</div>}{<div className="lg:col-span-5 hidden lg:block relative h-[360px]">{<div className="absolute inset-0 flex items-center justify-center">{<motion.div animate={{
                  y: [0, -10, 0]
                }} transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }} className="absolute top-6 left-6 w-[240px] bg-card p-4 rounded-2xl border border-border shadow-lg flex items-center gap-4 hover:scale-105 transition-transform cursor-pointer" onClick={() => {
                  const sem = toolsData.find(t => t.id === "semrush");
                  if (sem) setSelectedTool(sem);
                }}>{<div className="w-12 h-12 bg-orange-50 dark:bg-orange-950/20 rounded-xl flex items-center justify-center p-2 border border-orange-100 dark:border-orange-900">{<img src="https://images.seeklogo.com/logo-png/50/1/semrush-logo-png_seeklogo-504877.png" alt="Semrush" className="w-full h-full object-contain" />}</div>}{<div>{<h4 className="font-black text-slate-800 dark:text-slate-200 text-sm">Semrush</h4>}{<span className="text-[10px] text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/20 font-bold px-2 py-0.5 rounded-full border border-orange-100 dark:border-orange-900">Save $120</span>}</div>}</motion.div>}{<motion.div animate={{
                  y: [0, 10, 0]
                }} transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }} className="absolute bottom-12 right-6 w-[230px] bg-card p-4 rounded-2xl border border-border shadow-lg flex items-center gap-4 hover:scale-105 transition-transform cursor-pointer" onClick={() => {
                  const can = toolsData.find(t => t.id === "canva");
                  if (can) setSelectedTool(can);
                }}>{<div className="w-12 h-12 bg-cyan-50 dark:bg-cyan-950/20 rounded-xl flex items-center justify-center p-2 border border-cyan-100 dark:border-cyan-900">{<img src="https://static.vecteezy.com/system/resources/thumbnails/073/494/184/small/canva-circular-logo-glossy-modern-finish-free-png.png" alt="Canva" className="w-full h-full object-contain" />}</div>}{<div>{<h4 className="font-black text-slate-800 dark:text-slate-200 text-sm">Canva Pro</h4>}{<span className="text-[10px] text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/20 font-bold px-2 py-0.5 rounded-full border border-cyan-100 dark:border-cyan-900">30 Days Free</span>}</div>}</motion.div>}{<motion.div animate={{
                  x: [0, 8, 0]
                }} transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }} className="absolute top-1/2 -translate-y-1/2 left-24 w-[230px] bg-card p-4 rounded-2xl border border-border shadow-md flex items-center gap-4 hover:scale-105 transition-transform cursor-pointer z-10" onClick={() => {
                  const hub = toolsData.find(t => t.id === "hubspot");
                  if (hub) setSelectedTool(hub);
                }}>{<div className="w-12 h-12 bg-amber-50 dark:bg-amber-950/20 rounded-xl flex items-center justify-center p-2 border border-amber-100 dark:border-amber-900">{<img src="https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg" alt="HubSpot" className="w-full h-full object-contain" />}</div>}{<div>{<h4 className="font-black text-slate-800 dark:text-slate-205 text-sm">HubSpot CRM</h4>}{<span className="text-[10px] text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-950/20 font-bold px-2 py-0.5 rounded-full border border-amber-100 dark:border-amber-900">25% OFF Deal</span>}</div>}</motion.div>}</div>}</div>}</div>}</div>}</section>}{<section className="py-12">{<div className="container mx-auto px-4 md:px-6 max-w-6xl">{<div className="flex justify-between items-center mb-8">{<h2 className="text-2xl font-black text-slate-900 dark:text-slate-100">Available Tools ({filteredTools.length})</h2>}</div>}{filteredTools.length === 0 ? <div className="text-center py-16 bg-card border border-border rounded-3xl">{<p className="text-slate-505 dark:text-slate-450">No tools match your search criteria.</p>}</div> : <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{filteredTools.map((tool, idx) => <motion.div initial={{
              opacity: 0,
              y: 15
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: idx * 0.05
            }} onClick={() => setSelectedTool(tool)} className="bg-card p-6 rounded-3xl border border-border hover:border-slate-350 dark:hover:border-slate-600 hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between h-full group">{<div>{<div className="flex items-center gap-4 mb-4">{<div className="w-14 h-14 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-border flex items-center justify-center p-2 overflow-hidden shrink-0">{typeof tool.logo === 'string' ? <img src={tool.logo} alt={tool.name} className="w-full h-full object-contain" /> : tool.logo}</div>}{<div>{<h3 className="font-black text-lg text-slate-850 dark:text-slate-100 group-hover:text-blue-600 transition-colors">{tool.name}</h3>}{<span className="text-xs font-bold text-blue-600 dark:text-blue-400 tracking-wide uppercase">{tool.cat}</span>}</div>}</div>}{<p className="text-slate-650 dark:text-slate-400 text-xs leading-relaxed mb-4 line-clamp-3">{tool.desc}</p>}</div>}{<div className="flex items-center justify-between pt-4 border-t border-border">{<div className="flex items-center gap-1">{<Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />}{<span className="text-xs font-black text-slate-800 dark:text-slate-200">{tool.rating}</span>}{<span className="text-[10px] text-slate-400">({tool.count})</span>}</div>}{<span className="text-xs font-bold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1">View Details {<ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />}</span>}</div>}</motion.div>)}</div>}</div>}</section>}{selectedTool && <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">{<div className="bg-card rounded-3xl border border-border shadow-2xl p-6 md:p-8 max-w-lg w-full relative space-y-6 text-slate-800 dark:text-slate-100">{<button onClick={() => setSelectedTool(null)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-650 hover:scale-110 transition-transform"><img src={closeIcon} className="w-5 h-5" alt="close" /></button>}{<div className="text-center space-y-2">{<div className="w-16 h-16 rounded-2xl bg-slate-50 dark:bg-slate-800 border border-border flex items-center justify-center p-2 mx-auto mb-2 overflow-hidden">{typeof selectedTool.logo === 'string' ? <img src={selectedTool.logo} alt={selectedTool.name} className="w-full h-full object-contain" /> : selectedTool.logo}</div>}{<h3 className="text-2xl font-black text-slate-850 dark:text-slate-100">{selectedTool.name}</h3>}{<span className="px-3 py-1 bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 rounded-full font-bold text-[10px] uppercase tracking-wide inline-block">{selectedTool.cat}</span>}</div>}{<div className="space-y-4">{<p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{selectedTool.fullDesc}</p>}{<div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-100 dark:border-blue-900 rounded-2xl p-5 space-y-3">{<span className="text-xs font-bold text-blue-700 dark:text-blue-400 uppercase tracking-wider block">Active Promotion</span>}{<p className="text-slate-850 dark:text-slate-100 font-extrabold text-sm">{selectedTool.offer}</p>}{<div className="flex gap-2 mt-2">{<div className="flex-1 px-4 py-2 bg-card border border-border rounded-xl font-mono text-center font-bold text-slate-700 dark:text-slate-200 select-all">{selectedTool.coupon}</div>}{<button onClick={() => copyToClipboard(selectedTool.coupon)} className="px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl flex items-center justify-center gap-1.5 transition-colors font-bold text-xs shadow-md shadow-blue-200">{copiedCode ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}{copiedCode ? "Copied" : "Copy"}</button>}</div>}</div>}{<div className="space-y-2">{<h4 className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Top Platform Capabilities</h4>}{<ul className="space-y-1.5">{selectedTool.features.map((feat, idx) => <li className="text-xs text-slate-650 dark:text-slate-400 flex items-center gap-2">{<span className="text-blue-500 font-bold"><img src={checkmarkIcon} className="w-3.5 h-3.5 inline-block" alt="check" /></span>}{feat}</li>)}</ul>}</div>}{<a href={selectedTool.website} target="_blank" rel="noopener noreferrer" className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl text-sm transition-colors text-center flex items-center justify-center gap-2 mt-2 shadow-md">Visit Official Website {<ExternalLink className="w-4 h-4" />}</a>}</div>}</div>}</div>}</main>}{<Footer />}</div>;
}