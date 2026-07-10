import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { useReviews } from "@/services/useReviews";
import { useHome } from "@/services/useHome";
import { useReviewsPage } from "@/services/useReviewsPage";
import { createReviewSubmission } from "@/lib/firebase-sdk";
import { Star, TrendingUp, ArrowRight, ShieldCheck, Sparkles, BarChart2, PenLine } from "lucide-react";
import checkmarkBoxIcon from "@/assets/checkmark-box.svg";

const STATIC_REVIEWS = [{
  title: "Semrush Review",
  category: "SEO & Research",
  categoryColor: "bg-orange-100 text-orange-600",
  avatarColor: "bg-orange-500",
  avatarLetter: "S",
  rating: 5,
  summary: "Semrush is the backbone of our digital marketing workflow. The competitive intelligence tools, organic keyword tracking, and backlink audit features consistently uncover search opportunities that other platforms miss entirely. Highly recommended for growth-focused campaigns.",
  author: "Alex J.",
  role: "Growth Marketer",
  avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&q=80",
  result: "+38%",
  resultLabel: "organic traffic",
  resultColor: "bg-orange-50 text-orange-700"
}, {
  title: "Canva Pro Review",
  category: "Design & Content",
  categoryColor: "bg-purple-100 text-purple-600",
  avatarColor: "bg-purple-500",
  avatarLetter: "C",
  rating: 5,
  summary: "Canva Pro empowers our entire creative pipeline. The Brand Kit allows us to lock in color swatches and font styles, and the Background Remover and Magic Resize tools save our social team hours every single day. A must-have for content creators.",
  author: "Nina P.",
  role: "Content Strategist",
  avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&q=80",
  result: "10x",
  resultLabel: "faster content creation",
  resultColor: "bg-purple-50 text-purple-700"
}, {
  title: "HubSpot Review",
  category: "Marketing",
  categoryColor: "bg-blue-100 text-blue-600",
  avatarColor: "bg-blue-500",
  avatarLetter: "H",
  rating: 5,
  summary: "An all-in-one CRM and automated outbound suite that scales with our business lifecycle. From customized smart list logic to real-time sales pipeline tracking, it links marketing attribution directly to revenue pipelines.",
  author: "Jordan M.",
  role: "Digital Founder",
  avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&q=80",
  result: "+22%",
  resultLabel: "lead conversion",
  resultColor: "bg-blue-50 text-blue-700"
}, {
  title: "Ahrefs Review",
  category: "SEO & Research",
  categoryColor: "bg-orange-100 text-orange-600",
  avatarColor: "bg-orange-400",
  avatarLetter: "A",
  rating: 5,
  summary: "Ahrefs provides the most accurate and comprehensive backlink index on the market. The Site Explorer has been crucial for auditing off-page profiles, and Content Explorer makes topic modeling and target ideation incredibly simple.",
  author: "Daniel F.",
  role: "SEO Specialist",
  avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&q=80",
  result: "+51%",
  resultLabel: "domain authority growth",
  resultColor: "bg-orange-50 text-orange-700"
}, {
  title: "Mailchimp Review",
  category: "Email Marketing",
  categoryColor: "bg-yellow-100 text-yellow-700",
  avatarColor: "bg-yellow-500",
  avatarLetter: "M",
  rating: 5,
  summary: "Mailchimp's segmentation features and automated trigger drips run perfectly on autopilot. Send-time optimization has helped push open rates and directly improved campaign click-through revenue metrics.",
  author: "Sandra O.",
  role: "eCommerce Owner",
  avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&q=80",
  result: "+40%",
  resultLabel: "email revenue",
  resultColor: "bg-yellow-50 text-yellow-700"
}, {
  title: "Shopify Review",
  category: "eCommerce",
  categoryColor: "bg-green-100 text-green-700",
  avatarColor: "bg-green-500",
  avatarLetter: "S",
  rating: 5,
  summary: "Shopify is the absolute easiest ecommerce checkout platform to scale. Setup took a single afternoon and native abandoned checkout recovery emails paid for themselves in the very first week of launch.",
  author: "Nina V.",
  role: "DTC Founder",
  avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&q=80",
  result: "3x",
  resultLabel: "revenue in 90 days",
  resultColor: "bg-green-50 text-green-700"
}, {
  title: "Hostinger Review",
  category: "Hosting",
  categoryColor: "bg-indigo-100 text-indigo-600",
  avatarColor: "bg-indigo-500",
  avatarLetter: "H",
  rating: 5,
  summary: "Hostinger offers amazing server load performance for WordPress environments. LiteSpeed caches run incredibly fast, control panels are extremely simple, and support has been live and helpful 24/7.",
  author: "Sarah K.",
  role: "Agency Owner",
  avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=80&q=80",
  result: "99.99%",
  resultLabel: "server uptime",
  resultColor: "bg-indigo-50 text-indigo-700"
}, {
  title: "Figma Review",
  category: "Design & Content",
  categoryColor: "bg-purple-100 text-purple-600",
  avatarColor: "bg-purple-400",
  avatarLetter: "F",
  rating: 5,
  summary: "Figma is our absolute centerpiece for UI design. Live canvas collaboration, shared components libraries, and advanced prototype paths have unified our designer and developer pipelines completely.",
  author: "Elena V.",
  role: "Lead UI Designer",
  avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=80&q=80",
  result: "+45%",
  resultLabel: "hand-off efficiency",
  resultColor: "bg-purple-50 text-purple-700"
}, {
  title: "Notion Plus Review",
  category: "Productivity",
  categoryColor: "bg-amber-100 text-amber-700",
  avatarColor: "bg-amber-500",
  avatarLetter: "N",
  rating: 5,
  summary: "Notion connects our docs, roadmap sprints, and internal wikis in one unified hub. Database templates, drag-and-drop notes, and workspace sharing have completely replaced legacy documents.",
  author: "Liam N.",
  role: "Project Manager",
  avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=80&q=80",
  result: "100%",
  resultLabel: "centralized documentation",
  resultColor: "bg-amber-50 text-amber-700"
}];

export default function Reviews() {
  const { data: remoteReviews } = useReviews();
  const { data: homeData } = useHome();
  const { data: pageData } = useReviewsPage();
  const hero = pageData?.hero;
  const reviews = remoteReviews || STATIC_REVIEWS;
  const testimonials = homeData?.testimonials || [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [showModal, setShowModal] = useState(false);
  const [hoverRating, setHoverRating] = useState(0);
  const [formRating, setFormRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    role: "",
    tool: "",
    category: "",
    review: ""
  });
  const handleSubmit = async e => {
    e.preventDefault();
    if (!formRating || !form.name || !form.tool || !form.review) return;
    await createReviewSubmission({
      author: form.name,
      role: form.role,
      title: form.tool,
      category: form.category,
      rating: formRating,
      summary: form.review,
    });
    setSubmitted(true);
  };
  const handleClose = () => {
    setShowModal(false);
    setSubmitted(false);
    setFormRating(0);
    setHoverRating(0);
    setForm({
      name: "",
      role: "",
      tool: "",
      category: "",
      review: ""
    });
  };
  return <div className="min-h-screen flex flex-col bg-background">{<Navbar />}{<main className="flex-1">{// ── HERO SECTION ──
      <section className="pt-28 pb-14 bg-gradient-to-br from-blue-50 dark:from-blue-950/20 via-background to-background">{<div className="w-full px-6 md:px-10 lg:px-12">{<div className="flex flex-col md:flex-row items-center gap-10">{// Left text
            <div className="flex-1">{<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-100 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 font-semibold text-sm mb-6">{<ShieldCheck className="w-4 h-4" />}{hero?.badge || "Verified platform reviews"}</div>}{<h1 className="text-4xl md:text-5xl font-black text-slate-900 dark:text-slate-100 leading-tight mb-5">{hero?.title || "Real Reviews from Real Marketers"}</h1>}{<p className="text-lg text-slate-500 dark:text-slate-400 max-w-lg mb-8">{hero?.description || "Compare tools with honest insights, user feedback, and measurable outcomes."}</p>}{// Stats strip
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">{(hero?.stats || []).map((stat, i) => <div key={i} className="rounded-2xl border border-border bg-card shadow-sm p-5"><div className="flex items-center gap-2 font-black text-lg mb-1">{stat.value}</div><p className="text-xs text-slate-500 dark:text-slate-400 font-medium">{stat.label}</p><p className="text-xs text-slate-400 dark:text-slate-500 mt-0.5">{stat.sub}</p></div>)}</div>}</div>}{// Redesigned: Large, high-impact featured expert review card on the right
          <div className="hidden lg:flex flex-col items-center justify-center flex-shrink-0 w-[420px] relative z-20">{<div className="w-full bg-card border border-border shadow-2xl rounded-3xl p-8 space-y-6 relative hover:shadow-blue-500/[0.04] transition-all hover:border-slate-300 dark:hover:border-slate-700">{// Top bar badge
              <div className="flex justify-between items-center">{<span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-400 text-xs font-bold uppercase tracking-wider border border-blue-100 dark:border-blue-900">{<Sparkles className="w-3 h-3" />}Featured Expert Review</span>}{<span className="inline-flex items-center gap-1 text-slate-500 dark:text-slate-400 text-xs font-semibold">{<ShieldCheck className="w-4 h-4 text-green-600 dark:text-green-400" />}Verified Trust</span>}</div>}{// Rating
              <div className="flex gap-0.5">{[1, 2, 3, 4, 5].map(s => <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />)}</div>}{// Review quote text (large and premium)
              <p className="text-lg font-bold text-slate-800 dark:text-slate-100 leading-snug tracking-tight">"{hero?.featuredReview?.quote || "MarketyDeals saved us over $1,200 on our marketing stack this year. The verified ratings and direct discounts make it the ultimate resource for growth teams."}"</p>}{// Author
              <div className="flex items-center gap-4 border-t border-slate-100 dark:border-slate-800 pt-5">{<div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white dark:border-slate-800 shadow-md shrink-0">{<img src={hero?.featuredReview?.avatar || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=80"} alt="Reviewer" className="w-full h-full object-cover" />}</div>}{<div>{<h4 className="font-black text-slate-800 dark:text-slate-200 text-base leading-tight">{hero?.featuredReview?.author || "Alex J."}</h4>}{<p className="text-sm text-slate-400 dark:text-slate-500">{hero?.featuredReview?.role || "Growth Director @ SaaS Metrics"}</p>}</div>}</div>}</div>}</div>}</div>}</div>}</section>}{// ── REVIEWS GRID ──
      <section className="py-14 bg-background">{<div className="w-full px-6 md:px-10 lg:px-12">{// Section header
          <div className="flex items-start justify-between mb-10">{<div>{<div className="flex items-center gap-2 text-amber-500 font-semibold text-sm mb-2">{<Star className="w-4 h-4 fill-amber-400 text-amber-400" />}Top Reviews from Marketers Like You</div>}{<h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-slate-100">In-depth reviews. Real results. Smarter decisions.</h2>}</div>}{<a href="#" className="hidden sm:inline-flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-bold text-sm hover:gap-2.5 transition-all whitespace-nowrap">View all reviews{<ArrowRight className="w-4 h-4" />}</a>}</div>}{// Cards grid
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{reviews.map(rev => <div className="bg-card border border-border rounded-3xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">{// Stars
              <div className="flex items-center gap-0.5 mb-3">{[...Array(5)].map((_, i) => <Star className={`w-4 h-4 ${i < rev.rating ? "fill-yellow-400 text-yellow-400" : "text-slate-200 dark:text-slate-700"}`} />)}</div>}{// Title + category badge
              <div className="flex items-start justify-between gap-2 mb-3">{<h3 className="text-lg font-black text-slate-900 dark:text-slate-100 leading-snug">{rev.title}</h3>}{<span className={`text-xs font-bold px-2.5 py-1 rounded-full shrink-0 ${rev.categoryColor}`}>{rev.category}</span>}</div>}{// Summary
              <p className="text-sm text-slate-550 dark:text-slate-400 mb-5 leading-relaxed">{rev.summary}</p>}{// Result metric
              <div className={`rounded-xl px-4 py-3 flex items-center gap-3 mb-5 ${rev.resultColor}`}>{<BarChart2 className="w-5 h-5 shrink-0" />}{<div>{<span className="text-xl font-black">{rev.result}</span>}{<span className="text-sm font-semibold ml-1.5 opacity-80">{rev.resultLabel}</span>}</div>}</div>}{// Author row
              <div className="border-t border-slate-105 dark:border-slate-800 pt-4 w-full">{<div className="flex items-center gap-3">{<div className="w-9 h-9 rounded-full overflow-hidden border-2 border-white dark:border-slate-800 shadow-sm shrink-0">{<img src={rev.avatar} alt={rev.author} className="w-full h-full object-cover" />}</div>}{<div>{<p className="text-sm font-bold text-slate-800 dark:text-slate-200 leading-tight">{rev.author}</p>}{<p className="text-xs text-slate-400 dark:text-slate-500">{rev.role}</p>}</div>}</div>}</div>}</div>)}</div>}</div>}</section>}{testimonials.length > 0 && <section className="py-14 bg-muted/30 border-t border-border"><div className="w-full px-6 md:px-10 lg:px-12"><div className="flex items-center gap-2 text-blue-600 dark:text-blue-400 font-semibold text-sm mb-2"><Star className="w-4 h-4 fill-blue-400 text-blue-400" />What Our Clients Say</div><h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-slate-100 mb-10">Trusted by marketing teams</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-6">{testimonials.map((t, i) => <div key={i} className="bg-card border border-border rounded-3xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all"><div className="flex items-center gap-2 mb-3"><div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white dark:border-slate-800 shadow-sm shrink-0"><img src={t.image} alt={t.author} className="w-full h-full object-cover" /></div><div><p className="text-sm font-bold text-slate-800 dark:text-slate-200 leading-tight">{t.author}</p><p className="text-xs text-slate-400 dark:text-slate-500">{t.role}</p></div></div><p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed italic">"{t.quote}"</p></div>)}</div></div></section>}{// ── WRITE A REVIEW CTA ──
      <section className="py-12 bg-muted/40 border-t border-border">{<div className="w-full px-6 md:px-10 lg:px-12">{<div className="flex flex-col sm:flex-row items-center justify-between gap-6 bg-card border border-border rounded-3xl px-8 py-7 shadow-sm">{<div className="flex items-center gap-4">{<div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-950/40 flex items-center justify-center shrink-0">{<PenLine className="w-6 h-6 text-blue-600 dark:text-blue-400" />}</div>}{<div>{<p className="font-black text-slate-900 dark:text-slate-100 text-lg">Share your experience</p>}{<p className="text-sm text-slate-500 dark:text-slate-400">Help other marketers make better decisions. Your review can make an impact!</p>}</div>}</div>}{<button onClick={() => setShowModal(true)} className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-3.5 rounded-full inline-flex items-center gap-2 transition-all hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5 shrink-0">{<PenLine className="w-4 h-4" />}Write a Review</button>}</div>}</div>}</section>}</main>}{<Footer />}{
     showModal && <div className="fixed inset-0 z-50 flex items-center justify-center p-4">{<div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={handleClose}>{<div onClick={e => e.stopPropagation()} className="relative bg-card rounded-3xl border border-border shadow-2xl w-full max-w-lg mx-auto mt-[8vh] overflow-hidden">{// Modal Header
          <div className="flex items-center justify-between px-7 py-5 border-b border-border">{<div className="flex items-center gap-3">{<div className="w-9 h-9 rounded-xl bg-blue-100 dark:bg-blue-950/40 flex items-center justify-center">{<PenLine className="w-4 h-4 text-blue-600 dark:text-blue-400" />}</div>}{<h2 className="text-xl font-black text-slate-900 dark:text-slate-100">Write a Review</h2>}</div>}{<button onClick={handleClose} className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 text-2xl leading-none transition-colors">×</button>}</div>}{
          submitted ? <div className="px-7 py-14 text-center">{<div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-950/40 flex items-center justify-center mx-auto mb-5"><span><img src={checkmarkBoxIcon} className="w-8 h-8" alt="success" /></span></div>}{<h3 className="text-2xl font-black text-slate-900 dark:text-slate-100 mb-2">Thank you!</h3>}{<p className="text-slate-500 dark:text-slate-400 mb-6">Your review has been submitted and will be published after verification.</p>}{<button onClick={handleClose} className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-3 rounded-full transition-all">Close</button>}</div> : <form onSubmit={handleSubmit} className="px-7 py-6 flex flex-col gap-4 max-h-[75vh] overflow-y-auto">{// Name + Role row
            <div className="grid grid-cols-2 gap-3">{<div>{<label className="block text-xs font-bold text-slate-605 dark:text-slate-400 mb-1">Your Name *</label>}{<input required={true} type="text" placeholder="Alex J." value={form.name} onChange={e => setForm({
                  ...form,
                  name: e.target.value
                })} className="w-full px-4 py-2.5 rounded-xl border border-border bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm focus:outline-none focus:border-blue-500 focus:bg-card transition" />}</div>}{<div>{<label className="block text-xs font-bold text-slate-605 dark:text-slate-400 mb-1">Your Role</label>}{<input type="text" placeholder="e.g. Growth Marketer" value={form.role} onChange={e => setForm({
                  ...form,
                  role: e.target.value
                })} className="w-full px-4 py-2.5 rounded-xl border border-border bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm focus:outline-none focus:border-blue-500 focus:bg-card transition" />}</div>}</div>}{// Tool name + Category row
            <div className="grid grid-cols-2 gap-3">{<div>{<label className="block text-xs font-bold text-slate-605 dark:text-slate-400 mb-1">Tool Name *</label>}{<input required={true} type="text" placeholder="e.g. Semrush" value={form.tool} onChange={e => setForm({
                  ...form,
                  tool: e.target.value
                })} className="w-full px-4 py-2.5 rounded-xl border border-border bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm focus:outline-none focus:border-blue-500 focus:bg-card transition" />}</div>}{<div>{<label className="block text-xs font-bold text-slate-605 dark:text-slate-400 mb-1">Category</label>}{<select value={form.category} onChange={e => setForm({
                  ...form,
                  category: e.target.value
                })} className="w-full px-4 py-2.5 rounded-xl border border-border bg-slate-50 dark:bg-slate-800 text-slate-800 dark:text-slate-200 text-sm focus:outline-none focus:border-blue-500 focus:bg-card transition text-slate-600 dark:text-slate-300">{<option value="">Select...</option>}{<option>SEO Tools</option>}{<option>Design & Content</option>}{<option>Email Marketing</option>}{<option>Marketing</option>}{<option>eCommerce</option>}{<option>Hosting</option>}{<option>Productivity</option>}</select>}</div>}</div>}{// Star Rating
            <div>{<label className="block text-xs font-bold text-slate-605 dark:text-slate-400 mb-2">Your Rating *</label>}{<div className="flex items-center gap-1">{[1, 2, 3, 4, 5].map(star => <button type="button" onClick={() => setFormRating(star)} onMouseEnter={() => setHoverRating(star)} onMouseLeave={() => setHoverRating(0)}>{<Star className={`w-8 h-8 transition-all ${star <= (hoverRating || formRating) ? "fill-yellow-400 text-yellow-400 scale-110" : "text-slate-350 dark:text-slate-700 fill-slate-100 dark:fill-slate-800"}`} />}</button>)}</div>}{!formRating && <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">Click a star to rate</p>}</div>}{// Review text
            <div>{<label className="block text-xs font-bold text-slate-605 dark:text-slate-400 mb-1">Your Review *</label>}{<textarea required={true} rows={4} placeholder="Share your honest experience with this tool..." value={form.review} onChange={e => setForm({
                ...form,
                review: e.target.value
              })} className="w-full px-4 py-3 rounded-xl border border-border bg-slate-50 dark:bg-slate-800 text-slate-850 dark:text-slate-200 text-sm focus:outline-none focus:border-blue-500 focus:bg-card transition resize-none" />}</div>}{// Submit
            <button type="submit" className={`w-full py-3.5 rounded-full font-bold text-sm transition-all ${formRating && form.name && form.tool && form.review ? "bg-blue-600 hover:bg-blue-700 text-white hover:shadow-lg hover:shadow-blue-500/20" : "bg-slate-100 dark:bg-slate-800 text-slate-400 dark:text-slate-500 cursor-not-allowed"}`}>{<PenLine className="w-4 h-4 inline mr-2" />}Submit Review</button>}</form>}</div>}</div>}</div>}</div>;
}
