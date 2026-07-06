import { useEffect } from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { blogs } from "@/data/blogs";
import { BlogCard } from "@/components/BlogCard";
import { Sparkles, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import writingHandIcon from "@/assets/writing-hand.svg";
import lightningIcon from "@/assets/lightning.svg";

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const featuredPost = blogs[0];
  const regularPosts = blogs.slice(1);
  return <div className="min-h-screen flex flex-col bg-background text-foreground">{<Navbar />}{<main className="flex-1 pt-32 pb-24 relative overflow-hidden">{// Grid background pattern
    <div className="absolute inset-0 opacity-[0.4] mix-blend-overlay pointer-events-none" style={{
      backgroundImage: "linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)",
      backgroundSize: "40px 40px"
    }} />}{// Soft mesh gradients for light mode
      <div className="absolute top-[-10%] left-[-10%] w-[55%] h-[60%] bg-gradient-to-br from-blue-100 to-purple-50 rounded-full blur-[130px] pointer-events-none opacity-80" />}{<div className="absolute bottom-10 right-[-10%] w-[50%] h-[50%] bg-purple-50/50 rounded-full blur-[140px] pointer-events-none opacity-60" />}{<div className="container mx-auto px-4 md:px-6 relative z-10 space-y-16">{// Header Section (Split Layout)
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">{<div className="lg:col-span-7 space-y-6">{<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-400 font-bold text-xs uppercase tracking-widest">{<Sparkles className="w-4 h-4" />}Resources & News</div>}{<h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-slate-900 dark:text-slate-100">Marketing News & {<span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Strategy</span>}</h1>}{<p className="text-base md:text-lg text-slate-500 dark:text-slate-450 max-w-xl leading-relaxed">Expert advice, software teardowns, and actionable guides to help you scale your business and optimize your marketing stack.</p>}</div>}{<div className="lg:col-span-5 hidden lg:block relative h-[340px]">{<div className="absolute inset-0 flex items-center justify-center">{<motion.div animate={{
          y: [0, -8, 0]
        }} transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }} className="absolute top-4 left-4 w-[240px] bg-card p-4 rounded-2xl border border-border shadow-lg flex items-center gap-3.5">{<div className="w-10 h-10 rounded-xl bg-orange-50 dark:bg-orange-955/40 flex items-center justify-center p-2"><img src={writingHandIcon} className="w-6 h-6" alt="writing" /></div>}{<div>{<h4 className="font-black text-slate-800 dark:text-slate-205 text-xs">Expert Writers</h4>}{<p className="text-[10px] text-slate-500 dark:text-slate-450">Industry-tested strategies</p>}</div>}</motion.div>}{<motion.div animate={{
          x: [0, 8, 0]
        }} transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }} className="absolute top-1/2 -translate-y-1/2 left-24 w-[240px] bg-card p-4 rounded-2xl border border-border shadow-lg flex items-center gap-3.5 z-10">{<div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/40 flex items-center justify-center p-2 text-purple-600">{<Sparkles className="w-5 h-5" />}</div>}{<div>{<h4 className="font-black text-slate-800 dark:text-slate-205 text-xs">Growth Guides</h4>}{<p className="text-[10px] text-slate-550 dark:text-slate-450">Deep dives into marketing</p>}</div>}</motion.div>}{<motion.div animate={{
          y: [0, 8, 0]
        }} transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }} className="absolute bottom-4 right-4 w-[240px] bg-card p-4 rounded-2xl border border-border shadow-lg flex items-center gap-3.5">{<div className="w-10 h-10 rounded-xl bg-green-50 dark:bg-green-955/40 flex items-center justify-center p-2"><img src={lightningIcon} className="w-6 h-6" alt="lightning" /></div>}{<div>{<h4 className="font-black text-slate-800 dark:text-slate-205 text-xs">Weekly Updates</h4>}{<p className="text-[10px] text-slate-500 dark:text-slate-455">Fresh marketing trends</p>}</div>}</motion.div>}</div>}</div>}</div>}{// Redesigned Featured Post Card (Split Hero Card)
          <div className="mb-20">{<Link href={`/blog/${featuredPost.id}`} className="group relative rounded-3xl overflow-hidden flex flex-col lg:flex-row bg-card border border-border hover:shadow-2xl hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-500">{<div className="w-full lg:w-3/5 h-80 lg:h-[420px] overflow-hidden relative">{<img src={featuredPost.image} alt={featuredPost.title} className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700" />}</div>}{<div className="w-full lg:w-2/5 p-8 lg:p-10 flex flex-col justify-between bg-card">{<div className="space-y-4">{<div className="flex items-center gap-3 text-xs font-bold mb-2">{<span className="text-blue-600 bg-blue-50 dark:bg-blue-950/40 border border-blue-100 dark:border-blue-900 px-3 py-1 rounded-full uppercase tracking-wider">{featuredPost.category}</span>}{<span className="text-slate-400 font-semibold">{featuredPost.date}</span>}</div>}{<h2 className="text-2xl lg:text-3xl font-black text-slate-800 dark:text-slate-100 leading-tight group-hover:text-blue-600 transition-colors">{featuredPost.title}</h2>}{<p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{featuredPost.excerpt}</p>}</div>}{<div className="flex items-center justify-between mt-8 border-t border-border pt-6">{<div className="flex items-center gap-3">{<img src={featuredPost.author.avatar} alt={featuredPost.author.name} className="w-9 h-9 rounded-full border border-border shadow-sm" />}{<span className="font-semibold text-slate-700 dark:text-slate-300 text-sm">{featuredPost.author.name}</span>}</div>}{<span className="text-blue-600 dark:text-blue-400 font-bold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">Read Article{<ArrowRight className="w-4 h-4" />}</span>}</div>}</div>}</Link>}</div>}{// Regular posts grid
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{regularPosts.map((blog, i) => <BlogCard blog={blog} index={i} />)}</div>}</div>}</main>}{<Footer />}</div>;
}
