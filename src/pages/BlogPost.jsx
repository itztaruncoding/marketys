import { Link, useRoute } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { blogs as staticBlogs } from "@/data/blogs";
import { useBlogBySlug } from "@/services/useBlogs";
import { BlogCard } from "@/components/BlogCard";
import { useEffect, useState } from "react";
import { Clock, Calendar, Facebook, Twitter, Linkedin } from "lucide-react";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:id");
  const blogId = params?.id;
  const { data: blog } = useBlogBySlug(blogId);
  const [currentUrl, setCurrentUrl] = useState("");
  
  useEffect(() => {
    window.scrollTo(0, 0);
    if (typeof window !== "undefined") {
      setCurrentUrl(window.location.href);
    }
  }, [blogId]);

  if (!blog) {
    return <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">{<Navbar />}{<div className="flex-1 flex flex-col items-center justify-center pt-24 text-center px-4">{<h1 className="text-4xl font-black mb-4">Article Not Found</h1>}{<Link href="/blog" className="bg-blue-600 text-white px-6 py-3 rounded-full font-bold hover:bg-blue-700 transition-colors shadow-md shadow-blue-200">Back to Blog</Link>}</div>}{<Footer />}</div>;
  }

  const relatedArticles = staticBlogs.filter(b => b.id !== blog.id).slice(0, 3);
  
  return <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900">{<Navbar />}{<main className="flex-1 pt-32 pb-24">{// Article Header & Metadata (Redesigned)
      <div className="container mx-auto px-4 md:px-6 mb-10">{<div className="max-w-4xl mx-auto text-center space-y-6">{// Breadcrumbs
          <div className="flex items-center justify-center gap-2 text-slate-400 text-xs font-semibold uppercase tracking-wider">{<Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>}{<span>/</span>}{<Link href="/blog" className="hover:text-blue-600 transition-colors">Blog</Link>}{<span>/</span>}{<span className="text-slate-600 truncate max-w-[200px]">{blog.title}</span>}</div>}{// Category badge
          <span className="inline-block bg-blue-50 text-blue-700 border border-blue-100 font-bold px-4 py-1.5 rounded-full text-xs uppercase tracking-wider">{blog.category}</span>}{// Title
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-800 leading-[1.15] tracking-tight">{blog.title}</h1>}{// Author details & Date metadata
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-500 text-sm md:text-base border-y border-slate-200/80 py-4 max-w-2xl mx-auto">{<div className="flex items-center gap-2.5">{<img src={blog.author.avatar} alt={blog.author.name} className="w-9 h-9 rounded-full border border-slate-200 shadow-sm shrink-0" />}{<span className="font-semibold text-slate-700">{blog.author.name}</span>}</div>}{<div className="flex items-center gap-2">{<Calendar className="w-4 h-4 text-slate-400" />}{blog.date}</div>}{<div className="flex items-center gap-2">{<Clock className="w-4 h-4 text-slate-400" />}{blog.readTime}</div>}</div>}</div>}</div>}{// Centered Large Featured Image
      <div className="container mx-auto px-4 md:px-6 mb-12">{<div className="max-w-4xl mx-auto overflow-hidden rounded-3xl shadow-xl border border-slate-200">{<img src={blog.image} alt={blog.title} className="w-full h-auto max-h-[500px] object-cover" />}</div>}</div>}{// Content Layout
      <div className="container mx-auto px-4 md:px-6">{<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">{// Left share column (Redesigned with actual links)
          <div className="hidden lg:block lg:col-span-1">{<div className="sticky top-32 flex flex-col gap-4 items-center">{<span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2" style={{
                writingMode: 'vertical-rl',
                transform: 'rotate(180deg)'
              }}>Share</span>}{<a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(blog.title)}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-blue-400 hover:text-white hover:border-blue-400 transition-colors shadow-sm">{<Twitter className="w-4 h-4" />}</a>}{<a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(currentUrl)}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-blue-700 hover:text-white hover:border-blue-700 transition-colors shadow-sm">{<Linkedin className="w-4 h-4" />}</a>}{<a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-colors shadow-sm">{<Facebook className="w-4 h-4" />}</a>}</div>}</div>}{// Main article content
          <article className="lg:col-span-7">{<div className="prose prose-slate prose-lg md:prose-xl max-w-none text-slate-600 prose-headings:text-slate-800 prose-headings:font-black prose-a:text-blue-600 prose-strong:text-slate-800 leading-relaxed">{<p className="text-lg md:text-xl font-medium text-slate-700 leading-relaxed mb-8 border-l-4 border-blue-500 pl-4">{blog.excerpt}</p>}{blog.content.map((paragraph, i) => <p className="mb-6 leading-relaxed">{paragraph}</p>)}{<div className="mt-12 bg-white rounded-2xl p-8 border border-slate-200 shadow-sm">{<h3 className="text-xl font-bold text-slate-800 mb-4">Key Takeaways</h3>}{<ul className="list-disc pl-5 space-y-2 text-slate-600 text-base">{<li>AI automation and structured optimization are fundamental to 2026 digital campaigns.</li>}{<li>Creative testing frameworks outperform hyper-granular audience segment bids.</li>}{<li>Curating a custom, non-overlapping software stack maximizes marketing ROI.</li>}</ul>}</div>}</div>}</article>}{// Sidebar Column
          <aside className="lg:col-span-4 space-y-8">{// Subscribe Card
            <div className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-8 border border-blue-100 text-center shadow-sm">{<h3 className="text-2xl font-black text-slate-800 mb-3">Subscribe to Insights</h3>}{<p className="text-slate-500 mb-6 text-sm leading-relaxed">Join 50,000+ marketing leaders getting the best strategic growth content directly in their inbox.</p>}{<div className="space-y-3">{<input type="email" placeholder="Enter your email" className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:outline-none focus:border-blue-500 text-sm shadow-inner" />}{<button className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 transition-colors shadow-md shadow-blue-200 text-sm">Subscribe Now</button>}</div>}</div>}{// Trending Insights Card
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">{<h3 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-100 pb-3">Trending Insights</h3>}{<div className="space-y-4">{staticBlogs.filter(b => b.id !== blog.id).slice(0, 3).map(trending => <Link key={trending.id} href={`/blog/${trending.id}`} className="flex items-center gap-3 group border-b border-slate-50 pb-3 last:border-b-0 last:pb-0 cursor-pointer">{<img src={trending.image} alt={trending.title} className="w-12 h-12 rounded border border-slate-200 object-cover shrink-0 bg-white" />}{<div>{<h4 className="font-bold text-sm text-slate-700 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug">{trending.title}</h4>}{<div className="flex gap-2 items-center text-xs mt-0.5">{<span className="text-slate-400">{trending.readTime}</span>}</div>}</div>}</Link>)}</div>}</div>}</aside>}</div>}</div>}{// Related Articles section
      <div className="bg-slate-100/50 py-16 border-t border-slate-200/80 mt-16">{<div className="container mx-auto px-4 md:px-6 max-w-6xl">{<h2 className="text-2xl font-bold text-slate-800 mb-8">Related Articles</h2>}{<div className="grid grid-cols-1 md:grid-cols-3 gap-6">{relatedArticles.map(article => <BlogCard blog={article} />)}</div>}</div>}</div>}</main>}{<Footer />}</div>;
}