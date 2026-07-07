import { useEffect } from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { blogs } from "@/data/blogs";
import { Sparkles, ArrowRight, Clock, BookOpen, TrendingUp, PenTool } from "lucide-react";
import { motion } from "framer-motion";

export default function Blog() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const featuredPost = blogs[0];
  const regularPosts = blogs.slice(1);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased overflow-x-hidden">
      <Navbar />

      <main className="flex-1 pb-20">

        {/* ── SPLIT HERO SECTION (Same as Contact Page) ── */}
        <section className="relative min-h-[520px] flex items-center justify-start overflow-hidden bg-slate-950 pt-28 pb-16 px-6 md:px-12 border-b border-slate-800">
          {/* Background Image (100% Opacity on Right) */}
          <div 
            className="absolute inset-0 bg-cover bg-right md:bg-right-center bg-no-repeat opacity-100 z-0"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=1600&q=80')` }}
          />

          {/* Gradient Overlay: Dark left → Transparent right */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/50 to-transparent z-10" />

          {/* Left-aligned Content */}
          <div className="container mx-auto max-w-6xl relative z-20">
            <div className="max-w-2xl text-left space-y-8">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-bold bg-blue-500/20 text-blue-300 uppercase tracking-widest border border-blue-500/30">
                <Sparkles className="w-3.5 h-3.5 text-blue-400" /> RESOURCES & NEWS
              </span>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight text-white">
                Marketing News & <br/>
                <span className="text-blue-400 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Strategy Guides</span>
              </h1>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-xl">
                Expert advice, software teardowns, and actionable guides to help you scale your business and optimize your marketing stack.
              </p>

              {/* Info Cards Inside Hero (Dark Glassmorphism - Same as Contact) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {[
                  { icon: <BookOpen className="w-5 h-5" />, label: "Expert Articles", value: `${blogs.length}+ Published`, accent: "text-blue-400 bg-blue-500/15 border-blue-500/25" },
                  { icon: <TrendingUp className="w-5 h-5" />, label: "Growth Strategies", value: "Data-Driven Insights", accent: "text-emerald-400 bg-emerald-500/15 border-emerald-500/25" },
                  { icon: <PenTool className="w-5 h-5" />, label: "Updated Weekly", value: "Fresh Marketing Trends", accent: "text-indigo-400 bg-indigo-500/15 border-indigo-500/25" }
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 flex items-center gap-4 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                    <div className={`w-10 h-10 rounded-lg ${item.accent} flex items-center justify-center border shrink-0`}>
                      {item.icon}
                    </div>
                    <div className="text-left">
                      <p className="text-[9px] font-bold text-slate-400 uppercase tracking-wider">{item.label}</p>
                      <p className="text-sm font-extrabold text-white mt-0.5">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURED POST (Split Hero Card) ── */}
        <section className="container mx-auto px-4 md:px-6 max-w-6xl pt-16 pb-8">
          <Link
            href={`/blog/${featuredPost.id}`}
            className="group relative rounded-3xl overflow-hidden flex flex-col lg:flex-row bg-white border border-slate-200 shadow-md hover:shadow-[0_20px_60px_rgba(37,99,235,0.12)] hover:border-blue-400 hover:scale-[1.01] transition-all duration-500"
          >
            <div className="w-full lg:w-3/5 h-80 lg:h-[420px] overflow-hidden relative">
              <img
                src={featuredPost.image}
                alt={featuredPost.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <span className="absolute top-4 left-4 bg-blue-600 text-white font-extrabold text-[10px] uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md">
                Featured
              </span>
            </div>
            <div className="w-full lg:w-2/5 p-8 lg:p-10 flex flex-col justify-between bg-white">
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-xs font-bold mb-2">
                  <span className="text-blue-600 bg-blue-50 border border-blue-100 px-3 py-1 rounded-full uppercase tracking-wider">
                    {featuredPost.category}
                  </span>
                  <span className="text-slate-400 font-semibold">{featuredPost.date}</span>
                </div>
                <h2 className="text-2xl lg:text-3xl font-black text-slate-900 leading-tight group-hover:text-blue-600 transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-sm text-slate-500 leading-relaxed">{featuredPost.excerpt}</p>
              </div>
              <div className="flex items-center justify-between mt-8 border-t border-slate-100 pt-6">
                <div className="flex items-center gap-3">
                  <img
                    src={featuredPost.author.avatar}
                    alt={featuredPost.author.name}
                    className="w-9 h-9 rounded-full border border-slate-200 shadow-sm"
                  />
                  <span className="font-semibold text-slate-700 text-sm">{featuredPost.author.name}</span>
                </div>
                <span className="text-blue-600 font-bold text-sm inline-flex items-center gap-1 group-hover:gap-2.5 transition-all">
                  Read Article <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>
        </section>

        {/* ── REGULAR BLOG POSTS GRID WITH PREMIUM HOVER ANIMATION ── */}
        <section className="container mx-auto px-4 md:px-6 max-w-6xl py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((blog, i) => (
              <motion.div
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Link
                  href={`/blog/${blog.id}`}
                  className="group bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-sm flex flex-col h-full hover:shadow-[0_20px_50px_rgba(37,99,235,0.15)] hover:border-blue-500/80 hover:scale-[1.03] transition-all duration-500 ease-out transform"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <span className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm text-blue-600 font-extrabold text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full shadow-sm">
                      {blog.category}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 text-xs text-slate-400 font-semibold mb-3">
                      <span>{blog.date}</span>
                      <span className="w-1 h-1 rounded-full bg-slate-300" />
                      <span className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5" />
                        {blog.readTime}
                      </span>
                    </div>

                    <h3 className="text-lg font-extrabold text-slate-900 mb-2 leading-tight group-hover:text-blue-600 transition-colors line-clamp-2">
                      {blog.title}
                    </h3>

                    <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-6 flex-1">
                      {blog.excerpt}
                    </p>

                    <div className="flex items-center justify-between mt-auto border-t border-slate-100 pt-4">
                      <div className="flex items-center gap-2">
                        <img
                          src={blog.author.avatar}
                          alt={blog.author.name}
                          className="w-7 h-7 rounded-full border border-slate-200"
                        />
                        <span className="text-xs font-bold text-slate-600">{blog.author.name}</span>
                      </div>
                      <span className="text-blue-600 font-bold text-xs flex items-center gap-1 group-hover:gap-2 group-hover:translate-x-1 transition-all">
                        Read <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
