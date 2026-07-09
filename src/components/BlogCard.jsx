import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
export function BlogCard({
  blog,
  index
}) {
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} whileInView={{
    opacity: 1,
    y: 0
  }} viewport={{
    once: true
  }} transition={{
    delay: index !== undefined ? index * 0.1 : 0
  }} className="group bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300 flex flex-col h-full">{<div className="relative aspect-[16/9] overflow-hidden">{<img src={blog.image} alt={blog.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />}{<div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">{blog.category}</div>}</div>}{<div className="p-6 flex flex-col flex-1">{<div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">{<span>{blog.date}</span>}{<span>•</span>}{<span className="flex items-center gap-1">{<Clock className="w-3.5 h-3.5" />}{blog.readTime}</span>}</div>}{<h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors line-clamp-2">{blog.title}</h3>}{<p className="text-muted-foreground line-clamp-2 mb-6 flex-1">{blog.excerpt}</p>}{<div className="flex items-center justify-between mt-auto">{<div className="flex items-center gap-2">{<img src={blog.author.avatar} alt={blog.author.name} className="w-8 h-8 rounded-full" />}{<span className="text-sm font-medium">{blog.author.name}</span>}</div>}{<Link href={`/blog/${blog.slug}`} className="text-primary font-semibold text-sm flex items-center gap-1 hover:gap-2 transition-all">Read Article {<ArrowRight className="w-4 h-4" />}</Link>}</div>}</div>}</motion.div>;
}