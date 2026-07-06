import { Link, useLocation } from "wouter";
import { Search, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();
  const [searchVal, setSearchVal] = useState("");

  useEffect(() => {
    // Explicitly clean up any left-over dark mode classes from root element
    document.documentElement.classList.remove("dark");
    localStorage.removeItem("theme");
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const handleSearchSubmit = (e) => {
    if (e.key === "Enter") {
      setLocation("/deals?search=" + encodeURIComponent(searchVal));
    }
  };

  const navLinks = [{
    name: "Home",
    href: "/"
  }, {
    name: "Deals",
    href: "/deals"
  }, {
    name: "Categories",
    href: "/categories"
  }, {
    name: "Reviews",
    href: "/reviews"
  }, {
    name: "FAQ",
    href: "/faq"
  }, {
    name: "Blog",
    href: "/blog"
  }];

  return <motion.header initial={{
    y: -100
  }} animate={{
    y: 0
  }} className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "bg-white shadow-md border-b border-slate-200 py-3" : "bg-white border-b border-slate-200 py-5"}`}>{<div className="container mx-auto px-4 md:px-6 flex items-center justify-between">{<Link href="/" className="flex items-center gap-2 z-50 relative">{<span className="text-3xl font-black tracking-tight flex items-center gap-3.5">{<svg viewBox="0 0 100 45" className="w-16 h-12 select-none shrink-0">{<defs>{<linearGradient id="logoGlobeGrad" x1="0%" y1="0%" x2="100%" y2="100%">{<stop offset="0%" stopColor="#2563eb" />}{<stop offset="100%" stopColor="#3b82f6" />}</linearGradient>}</defs>}{<circle cx="22" cy="22" r="16" fill="none" stroke="url(#logoGlobeGrad)" strokeWidth="2" />}{<path d="M6 22h32 M22 6v32" stroke="#60a5fa" strokeWidth="0.8" opacity="0.5" />}{<path d="M9 14c5 3 5 13 0 16 M35 14c-5 3-5 13 0 16" stroke="#60a5fa" strokeWidth="0.8" opacity="0.5" fill="none" />}{<path d="M14 9c3 5 13 5 16 0 M14 35c3-5 13-5 16 0" stroke="#60a5fa" strokeWidth="0.8" opacity="0.5" fill="none" />}{<path d="M 32 10 A 18 18 0 0 1 32 34" stroke="#2563eb" strokeWidth="1" fill="none" opacity="0.8" />}{<path d="M 37 6 A 23 23 0 0 1 37 38" stroke="#3b82f6" strokeWidth="1" fill="none" opacity="0.7" />}{<path d="M 42 2 A 28 28 0 0 1 42 42" stroke="#60a5fa" strokeWidth="1" fill="none" opacity="0.5" />}{<circle cx="37.5" cy="15" r="2.2" fill="#2563eb" />}{<path d="M36.7 15h1.6 M37.5 14.2v1.6" stroke="white" strokeWidth="0.5" />}{<circle cx="37.5" cy="29" r="2.2" fill="#10b981" />}{<path d="M36.7 30l1.6-2" stroke="white" strokeWidth="0.5" />}{<circle cx="45" cy="11" r="2.2" fill="#f59e0b" />}{<circle cx="45" cy="33" r="2.2" fill="#ef4444" />}{<circle cx="52" cy="6" r="2.2" fill="#8b5cf6" />}{<circle cx="52" cy="38" r="2.2" fill="#06b6d4" />}</svg>}{<span className="flex items-center">{<span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Markety</span>}{<span className="text-slate-800">Deals</span>}</span>}</span>}</Link>}{<nav className="hidden md:flex items-center gap-8">{navLinks.map(link => <Link href={link.href} className={`text-sm font-semibold transition-colors hover:text-blue-600 ${location === link.href ? "text-blue-600" : "text-slate-700"}`}>{link.name}</Link>)}</nav>}{<div className="hidden md:flex items-center gap-4">{<div className="relative group">{<Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-slate-500 group-focus-within:text-blue-600 transition-colors" />}{<input type="search" placeholder="Search tools, deals..." value={searchVal} onChange={e => setSearchVal(e.target.value)} onKeyDown={handleSearchSubmit} className="pl-12 pr-5 py-2.5 rounded-full bg-slate-50 border border-slate-300 focus:bg-white focus:border-blue-600 focus:ring-4 focus:ring-blue-500/10 outline-none text-sm w-64 md:w-80 lg:w-[380px] transition-all text-slate-800 placeholder:text-slate-500 font-medium" />}</div>}</div>}{<div className="flex items-center gap-2 md:hidden z-50 relative"><button className="p-2 text-slate-700" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>{isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}</button></div>}</div>}{<AnimatePresence>{isMobileMenuOpen && <motion.div initial={{
    opacity: 0,
    height: 0
  }} animate={{
    opacity: 1,
    height: "100vh"
  }} exit={{
    opacity: 0,
    height: 0
  }} className="md:hidden fixed inset-0 top-0 bg-white z-40 flex flex-col pt-24 px-6 pb-6">{<div className="relative mb-8">{<Search className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />}{<input type="search" placeholder="Search tools, deals..." value={searchVal} onChange={e => setSearchVal(e.target.value)} onKeyDown={handleSearchSubmit} className="w-full pl-10 pr-4 py-3 rounded-xl bg-slate-100 border border-slate-250 outline-none text-slate-800 placeholder:text-slate-400" />}</div>}{<nav className="flex flex-col gap-6 text-xl font-bold mb-auto">{navLinks.map(link => <Link href={link.href} className="border-b border-slate-100 pb-4 text-slate-700 hover:text-blue-600 transition-colors">{link.name}</Link>)}</nav>}</motion.div>}</AnimatePresence>}</motion.header>;
}