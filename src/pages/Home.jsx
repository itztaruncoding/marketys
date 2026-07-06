import { useState } from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { DealCard } from "@/components/DealCard";
import { BlogCard } from "@/components/BlogCard";
import { deals } from "@/data/deals";
import { blogs } from "@/data/blogs";
import { motion } from "framer-motion";
import { ArrowRight, Star, ExternalLink, Mail, Zap, DollarSign, Users, Clock, BookOpen, Gift } from "lucide-react";
import { SiGoogleads, SiCanvas, SiMeta, SiClickup, SiHubspot, SiTiktok, SiPinterest, SiSnapchat, SiYoutube, SiMailchimp, SiBuffer, SiHootsuite, SiGrammarly, SiNotion } from "react-icons/si";
import { Linkedin } from "lucide-react";
import heroVideoMov from "@/assets/home_hero_video_2.mov";
import heroVideoWebm from "@/assets/home_hero_video_2.mp4";

import starIcon from "@/assets/star.svg";
import mailboxIcon from "@/assets/mailbox.svg";
import partyPopperIcon from "@/assets/party-popper.svg";
import checkmarkIcon from "@/assets/checkmark.svg";
import closeIcon from "@/assets/close.svg";

const renderStars = (count) => (
  <span className="flex items-center justify-center gap-0.5">
    {[...Array(count)].map((_, i) => (
      <img key={i} src={starIcon} alt="star" className="w-4 h-4" />
    ))}
  </span>
);

export default function Home() {
  const [showCompare, setShowCompare] = useState(false);
  const [selectedProgram, setSelectedProgram] = useState(null);
  const [appliedPrograms, setAppliedPrograms] = useState({});
  const [submittingProgram, setSubmittingProgram] = useState(false);
  const [appForm, setAppForm] = useState({
    website: "",
    email: "",
    traffic: "1k-100k"
  });
  const [showMorePlatforms, setShowMorePlatforms] = useState(false);
  const [selectedPlatformDetail, setSelectedPlatformDetail] = useState(null);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const trendingOffers = deals.slice(0, 6);
  const todaysDeals = deals.slice(0, 6);
  const recentBlogs = blogs.slice(0, 6);
  const categories = [{
    name: "Digital Marketing",
    count: "200+",
    image: "https://www.pagetraffic.in/wp-content/uploads/2022/05/digital-marketing-guide.jpg",
    dbCategory: "Marketing",
    desc: "Learn proven strategies to grow your online presence and business."
  }, {
    name: "Affiliate Marketing",
    count: "80+",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1UE_q5YbljtZ5t8oZufk0ksW73ZVByGuW39kDQMckP-jj9-vkwAesMHmo&s=10",
    dbCategory: "Marketing",
    desc: "Partner with top brands, drive targeted traffic, and earn commissions."
  }, {
    name: "Advertising",
    count: "120+",
    image: "https://indianmediastudies.com/wp-content/uploads/2023/11/what-is-advertising-copy.jpeg.webp",
    dbCategory: "Marketing",
    desc: "Maximize ROI with cross-channel digital advertising networks."
  }, {
    name: "SEO Tools",
    count: "88+",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtJKYGDU5a0eI7jmQg2u3mbfK_2YBM72j1Oufuba7L2sBEttK86vN-BUY&s=10",
    dbCategory: "SEO Tools",
    desc: "Drive free organic traffic and dominate major search engine lists."
  }, {
    name: "Email Marketing",
    count: "90+",
    image: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=600&auto=format&fit=crop",
    dbCategory: "Email Marketing",
    desc: "Build lists, automate message flows, and engage customers directly."
  }, {
    name: "AI Marketing",
    count: "100+",
    image: "https://cdn.bap-software.net/2024/11/18163513/p1c.png",
    dbCategory: "Marketing",
    desc: "Leverage advanced artificial intelligence to automate marketing tasks."
  }, {
    name: "Web Hosting",
    count: "50+",
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=600&auto=format&fit=crop",
    dbCategory: "Hosting",
    desc: "Launch super fast, secure, and highly reliable corporate websites."
  }, {
    name: "Ecommerce",
    count: "70+",
    image: "https://images.unsplash.com/photo-1511556532299-8f662fc26c06?q=80&w=600&auto=format&fit=crop",
    dbCategory: "eCommerce",
    desc: "Sell physical or digital products globally and scale your online store."
  }, {
    name: "Social Media Tools",
    count: "40+",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?q=80&w=600&auto=format&fit=crop",
    dbCategory: "Marketing",
    desc: "Manage social media feeds, schedule posts, and build your brand."
  }];
  const affiliatePrograms = [{
    name: "Amazon Associates",
    rating: 4.6,
    comm: "Up to 10% commission",
    logo: "https://www.vectorlogo.zone/logos/amazon/amazon-icon.svg"
  }, {
    name: "Semrush Affiliate",
    rating: 4.9,
    comm: "Up to $120 per referral",
    logo: "https://images.seeklogo.com/logo-png/50/1/semrush-logo-png_seeklogo-504877.png"
  }, {
    name: "eBay Partner Network",
    rating: 4.5,
    comm: "Up to 7% commission",
    logo: "https://www.vectorlogo.zone/logos/ebay/ebay-icon.svg"
  }, {
    name: "Fiverr Affiliates",
    rating: 4.8,
    comm: "Up to $150 CPA commission",
    logo: "https://www.vectorlogo.zone/logos/fiverr/fiverr-icon.svg"
  }, {
    name: "Hostinger Affiliate",
    rating: 4.7,
    comm: "Up to 60% commission payout",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXoiSouOpkA7JJF-09eYqM4KcDdJIbCZ7qBF8a0rKPkYijuEsG_FPy0Lg&s=10"
  }];
  const toolCards = [{
    name: "Semrush",
    rating: "4.9",
    count: "3.2k",
    cat: "SEO",
    dealLink: "/deal/semrush-guru",
    icon: <img src="https://images.seeklogo.com/logo-png/50/1/semrush-logo-png_seeklogo-504877.png" alt="Semrush" className="w-full h-full object-contain p-1" />
  }, {
    name: "Ahrefs",
    rating: "4.8",
    count: "2.8k",
    cat: "SEO",
    dealLink: "/deals?search=ahrefs",
    icon: <svg viewBox="0 0 24 24" className="w-full h-full p-2">{<defs>{<linearGradient id="ahrefsGrad" x1="0%" y1="0%" x2="100%" y2="100%">{<stop offset="0%" stopColor="#3b82f6" />}{<stop offset="100%" stopColor="#1d4ed8" />}</linearGradient>}</defs>}{<rect width={24} height={24} rx={6} fill="url(#ahrefsGrad)" />}{<path d="M6 16h2v-4H6v4zm4 0h2v-8h-2v8zm4 0h2v-12h-2v12zm4 0h2v-6h-2v6z" fill="white" />}</svg>
  }, {
    name: "Mailchimp",
    rating: "4.7",
    count: "8.1k",
    cat: "Email",
    dealLink: "/deals?search=mailchimp",
    icon: <img src="https://www.vectorlogo.zone/logos/mailchimp/mailchimp-icon.svg" alt="Mailchimp" className="w-full h-full object-contain p-1" />
  }, {
    name: "HubSpot",
    rating: "4.8",
    count: "5.4k",
    cat: "CRM",
    dealLink: "/deal/hubspot",
    icon: <img src="https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg" alt="HubSpot" className="w-full h-full object-contain p-1" />
  }, {
    name: "Buffer",
    rating: "4.6",
    count: "4.1k",
    cat: "Social",
    dealLink: "/deals?search=buffer",
    icon: <svg viewBox="0 0 24 24" className="w-full h-full p-2.5">{<defs>{<linearGradient id="bufferGrad" x1="0%" y1="0%" x2="100%" y2="100%">{<stop offset="0%" stopColor="#10b981" />}{<stop offset="100%" stopColor="#059669" />}</linearGradient>}</defs>}{<rect width={24} height={24} rx={6} fill="url(#bufferGrad)" />}{<path d="M6 8l6-3 6 3-6 3-6-3zm0 4l6-3 6 3-6 3-6-3zm0 4l6-3 6 3-6 3-6-3z" fill="white" opacity={0.9} />}</svg>
  }, {
    name: "Hootsuite",
    rating: "4.5",
    count: "3.9k",
    cat: "Social",
    dealLink: "/deals?search=hootsuite",
    icon: <svg viewBox="0 0 24 24" className="w-full h-full p-2.5">{<defs>{<linearGradient id="hootGrad" x1="0%" y1="0%" x2="100%" y2="100%">{<stop offset="0%" stopColor="#f97316" />}{<stop offset="100%" stopColor="#ea580c" />}</linearGradient>}</defs>}{<rect width={24} height={24} rx={6} fill="url(#hootGrad)" />}{<path d="M12 5a6 6 0 00-6 6v3a3 3 0 003 3h6a3 3 0 003-3v-3a6 6 0 00-6-6zm-2.5 6a1.5 1.5 0 111.5-1.5 1.5 1.5 0 01-1.5 1.5zm5 0a1.5 1.5 0 111.5-1.5 1.5 1.5 0 01-1.5 1.5z" fill="white" />}</svg>
  }, {
    name: "Grammarly",
    rating: "4.7",
    count: "9.2k",
    cat: "Writing",
    dealLink: "/deals?search=grammarly",
    icon: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6sD3QjT2K4q4B5yJ7wz3aB85k6T1m2_4XgA&s" alt="Grammarly" className="w-full h-full object-contain p-1" />
  }, {
    name: "Notion",
    rating: "4.6",
    count: "4.5k",
    cat: "Workspace",
    dealLink: "/deal/notion-plus",
    icon: <svg viewBox="0 0 24 24" className="w-full h-full p-2.5">{<defs>{<linearGradient id="notionGrad" x1="0%" y1="0%" x2="100%" y2="100%">{<stop offset="0%" stopColor="#1f2937" />}{<stop offset="100%" stopColor="#111827" />}</linearGradient>}</defs>}{<rect width={24} height={24} rx={6} fill="url(#notionGrad)" />}{<path d="M7 7h3l5 7V7h2v10h-3l-5-7v7H7V7z" fill="white" />}</svg>
  }, {
    name: "Canva",
    rating: "4.8",
    count: "5.1k",
    cat: "Design",
    dealLink: "/deal/canva-pro",
    icon: <img src="https://static.vecteezy.com/system/resources/thumbnails/073/494/184/small/canva-circular-logo-glossy-modern-finish-free-png.png" alt="Canva" className="w-full h-full object-contain p-1" />
  }, {
    name: "Figma",
    rating: "4.9",
    count: "3.8k",
    cat: "Design",
    dealLink: "/deal/figma",
    icon: <img src="https://www.vectorlogo.zone/logos/figma/figma-icon.svg" alt="Figma" className="w-full h-full object-contain p-1" />
  }, {
    name: "Hostinger",
    rating: "4.7",
    count: "3.4k",
    cat: "Hosting",
    dealLink: "/deal/hostinger",
    icon: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXoiSouOpkA7JJF-09eYqM4KcDdJIbCZ7qBF8a0rKPkYijuEsG_FPy0Lg&s=10" alt="Hostinger" className="w-full h-full object-contain p-1" />
  }, {
    name: "Jasper AI",
    rating: "4.8",
    count: "2.5k",
    cat: "AI Tools",
    dealLink: "/deal/jasper-ai",
    icon: <svg viewBox="0 0 24 24" className="w-full h-full p-2.5">{<defs>{<linearGradient id="jasperGrad" x1="0%" y1="0%" x2="100%" y2="100%">{<stop offset="0%" stopColor="#8a2be2" />}{<stop offset="50%" stopColor="#ff007f" />}{<stop offset="100%" stopColor="#ffaa00" />}</linearGradient>}</defs>}{<rect width={24} height={24} rx={6} fill="url(#jasperGrad)" />}{<path d="M7 16v-3a5 5 0 0110 0v3M12 6v2" stroke="white" strokeWidth={2} strokeLinecap="round" fill="none" />}{<circle cx={9} cy={12} r={1} fill="white" />}{<circle cx={15} cy={12} r={1} fill="white" />}</svg>
  }];
  return <div className="min-h-screen flex flex-col bg-background">{<Navbar />}{<main className="flex-1">{<section className="relative pt-24 pb-14 md:pt-28 md:pb-20 overflow-hidden lg:h-screen flex items-center z-0">{<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-background to-background z-0" />}{<div className="container mx-auto px-4 md:px-6 relative z-10">{<div className="grid lg:grid-cols-12 gap-12 items-center">{<motion.div initial={{
              opacity: 0,
              x: -30
            }} animate={{
              opacity: 1,
              x: 0
            }} transition={{
              duration: 0.6
            }} className="lg:col-span-7 w-full">{<h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-foreground leading-[1.1] mb-6">Find the Best {<span className="text-blue-600">Digital Marketing</span>}, {<span className="text-blue-600">Affiliate Programs</span>} & Advertising Tools</h1>}{<p className="text-xl text-muted-foreground mb-8 leading-relaxed">Discover trusted marketing platforms, exclusive offers and verified reviews. Build your perfect stack and save money.</p>}{<div className="flex flex-col sm:flex-row items-center gap-4 mb-8">{<Link href="/deals" className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-700 transition-all hover:shadow-xl hover:shadow-blue-200 hover:-translate-y-1 flex items-center justify-center gap-2">Explore Deals {<ArrowRight className="w-5 h-5" />}</Link>}{<Link href="/categories" className="w-full sm:w-auto px-8 py-4 bg-white border-2 border-blue-200 text-blue-700 rounded-full font-bold text-lg hover:border-blue-600 hover:text-blue-700 transition-all flex items-center justify-center">Browse Categories</Link>}</div>}{<div className="flex items-center gap-4 text-sm font-medium text-muted-foreground flex-wrap">{<span>Popular:</span>}{["Google Ads", "Canva", "Semrush", "ClickFunnels", "Hostinger"].map(term => <span className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full cursor-pointer hover:bg-blue-100 transition-colors">{term}</span>)}</div>}</motion.div>}{<motion.div initial={{
              opacity: 0,
              scale: 0.95
            }} animate={{
              opacity: 1,
              scale: 1
            }} transition={{
              duration: 0.8,
              delay: 0.2
            }} className="lg:col-span-5 relative w-full flex items-center justify-center lg:justify-end z-10">{<video autoPlay={true} loop={true} muted={true} playsInline={true} onCanPlay={e => {
                e.currentTarget.muted = true;
                e.currentTarget.play().catch(err => console.log(err));
              }} className="w-full max-w-lg lg:max-w-2xl h-auto object-contain" style={{
                display: "block"
              }}>{<source src={heroVideoWebm} type="video/webm" />}{<source src={heroVideoMov} type="video/quicktime" />}</video>}</motion.div>}</div>}</div>}</section>}{<section id="categories" className="py-16 bg-muted/20 border-y border-border">{<div className="container mx-auto px-4 md:px-6">{// Highly styled category header
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 border-b border-border/80 pb-6">{<div className="space-y-3">{<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 uppercase tracking-widest border border-blue-100">Browse by Topic</span>}{<h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground">Explore Categories</h2>}{<p className="text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">Find exclusive discounts, verified reviews, and top affiliate opportunities tailored to your marketing needs.</p>}</div>}{<Link href="/categories" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors group/all shrink-0 pb-1">View All Categories {<ArrowRight className="w-5 h-5 transition-transform group-hover/all:translate-x-1" />}</Link>}</div>}{// Modern category grid
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05, duration: 0.5 }}
              >
                <Link
                  href={`/deals?category=${encodeURIComponent(cat.dbCategory || "All Deals")}`}
                  className="group flex flex-col rounded-3xl border border-slate-200/80 bg-white overflow-hidden hover:shadow-2xl hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1.5 w-full h-[400px]"
                >
                  {/* 1. Image container (Upper side) */}
                  <div className="relative h-44 w-full overflow-hidden shrink-0">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  {/* 2. Card Content (Downside) */}
                  <div className="p-5 flex flex-col justify-between flex-1">
                    <div>
                      {/* Bestseller badge */}
                      <span className="inline-block bg-blue-600 text-white text-[10px] font-black uppercase tracking-wider px-3.5 py-1 rounded-full w-fit mb-2.5">
                        Bestseller
                      </span>
                      <h3 className="font-extrabold text-xl text-slate-800 tracking-tight leading-snug group-hover:text-blue-600 transition-colors mb-2">
                        {cat.name}
                      </h3>
                      <p className="text-slate-500 text-xs leading-relaxed line-clamp-2">
                        {cat.desc}
                      </p>
                    </div>
                    {/* Card Footer Row */}
                    <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                      <div className="flex items-center gap-1.5 text-slate-500 text-xs font-semibold">
                        <Gift className="w-4 h-4 text-blue-600 shrink-0" />
                        {cat.count} Offers Available
                      </div>
                      <div className="bg-slate-100 group-hover:bg-blue-600 text-slate-700 group-hover:text-white font-bold text-xs px-4 py-2.5 rounded-xl flex items-center gap-1 transition-all border border-slate-200/50 group-hover:border-blue-600 group-hover:shadow-md group-hover:shadow-blue-500/10">
                        Explore Now <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>}</div>}</section>}{<section className="py-12 bg-card relative overflow-hidden">{<div className="container mx-auto px-4 md:px-6">{<div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6 border-b border-border/80 pb-6">{<div className="space-y-3">{<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 uppercase tracking-widest border border-amber-100">Live Offers</span>}{<h2 className="text-3xl md:text-5xl font-black tracking-tight text-foreground flex items-center gap-3">Today's Deals{<span className="relative flex h-4 w-4">{<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />}{<span className="relative inline-flex rounded-full h-4 w-4 bg-red-500" />}</span>}</h2>}{<p className="text-muted-foreground text-base md:text-lg max-w-2xl leading-relaxed">Time-sensitive discounts and exclusive pricing on premium marketing tools, updated hourly.</p>}</div>}{<Link href="/deals" className="inline-flex items-center gap-2 text-blue-600 font-bold hover:text-blue-700 transition-colors group/all shrink-0 pb-1">View All Deals {<ArrowRight className="w-5 h-5 transition-transform group-hover/all:translate-x-1" />}</Link>}</div>}{<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{todaysDeals.map((deal, i) => <DealCard deal={deal} index={i} />)}</div>}</div>}</section>}{<section className="py-12 bg-muted/30 border-y border-border">{<div className="container mx-auto px-4 md:px-6">{<div className="flex items-center justify-between mb-6">{<h2 className="text-3xl md:text-4xl font-black">Trending Offers</h2>}</div>}{<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{[{
              id: "google-ads",
              name: "Google Ads",
              icon: <img src="https://www.vectorlogo.zone/logos/google_ads/google_ads-icon.svg" alt="Google Ads" className="w-full h-full object-contain p-1" />,
              rating: 4.8,
              count: "2.1k",
              desc: "Grow your business with Google Ads and get more customers.",
              badge: "40% Bonus Credit"
            }, {
              id: "meta-ads",
              name: "Meta Ads",
              icon: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC_nApxZjoBx3yXT2iU2HOWInrsjI5fYIYgmvwXsV7AryA33blR0YB52AO&s=10" alt="Meta Ads" className="w-full h-full object-contain p-1" />,
              rating: 4.6,
              count: "1.8k",
              desc: "Start advertising on Facebook & Instagram and grow your brand.",
              badge: "20% OFF"
            }, {
              id: "semrush-guru",
              name: "Semrush",
              icon: <img src="https://images.seeklogo.com/logo-png/50/1/semrush-logo-png_seeklogo-504877.png" alt="Semrush" className="w-full h-full object-contain p-1" />,
              rating: 4.9,
              count: "3.2k",
              desc: "Best SEO tool for keyword research, competitor analysis & more.",
              badge: "30% OFF"
            }, {
              id: "canva-pro",
              name: "Canva Pro",
              icon: <img src="https://static.vecteezy.com/system/resources/thumbnails/073/494/184/small/canva-circular-logo-glossy-modern-finish-free-png.png" alt="Canva Pro" className="w-full h-full object-contain p-1" />,
              rating: 4.8,
              count: "5.1k",
              desc: "Design anything with Canva Pro and team collaboration.",
              badge: "Free Trial"
            }, {
              id: "clickfunnels",
              name: "ClickFunnels",
              icon: <img src="https://files.readme.io/008e2375967d01ecb0df3ffc71da296ed2fd2b835ad40ec0ac893dd0e17ce6a3-CF_Mark_Dark.svg" alt="ClickFunnels" className="w-full h-full object-contain p-1" />,
              rating: 4.5,
              count: "1.2k",
              desc: "Build sales funnels that convert visitors into conversions.",
              badge: "14 Days Free"
            }, {
              id: "hubspot",
              name: "HubSpot",
              icon: <img src="https://www.vectorlogo.zone/logos/hubspot/hubspot-icon.svg" alt="HubSpot" className="w-full h-full object-contain p-1" />,
              rating: 4.7,
              count: "2.9k",
              desc: "All-in-one CRM, marketing, sales and service platform.",
              badge: "25% OFF"
            }].map((offer, i) => <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: i * 0.1
            }} className="group bg-card rounded-2xl border border-border p-6 hover:border-slate-400/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full relative overflow-hidden">{<div className="absolute top-0 left-0 bg-slate-900 text-slate-100 text-[10px] font-bold px-3 py-1 uppercase tracking-wider rounded-br-lg border-r border-b border-border">{i < 2 ? "Sponsored" : "Featured"}</div>}{<div className="flex gap-4 mt-4 mb-4">{<div className="w-14 h-14 rounded-xl bg-white border border-slate-200/50 flex items-center justify-center text-2xl font-bold shrink-0 overflow-hidden">{offer.icon}</div>}{<div>{<h3 className="font-bold text-xl group-hover:text-slate-900 transition-colors">{offer.name}</h3>}{<div className="flex items-center gap-1 mt-1">{<Star className="w-4 h-4 fill-secondary text-secondary" />}{<span className="text-sm font-bold">{offer.rating}</span>}{<span className="text-xs text-muted-foreground">({offer.count})</span>}</div>}</div>}</div>}{<p className="text-muted-foreground text-sm mb-6 flex-1">{offer.desc}</p>}{<div className="flex items-center justify-between mt-auto">{<span className="bg-slate-100 text-slate-800 font-extrabold px-3 py-1.5 rounded-lg text-sm border border-slate-200">{offer.badge}</span>}{<Link href={`/deal/${offer.id}`} className="bg-slate-100 group-hover:bg-blue-600 text-slate-700 group-hover:text-white font-bold px-4 py-2 rounded-lg text-sm transition-all border border-slate-200/50 group-hover:border-blue-600 flex items-center gap-2 group-hover:shadow-md group-hover:shadow-blue-500/10">View Offer {<ArrowRight className="w-4 h-4" />}</Link>}</div>}</motion.div>)}</div>}</div>}</section>}{<section className="py-12 bg-card">{<div className="container mx-auto px-4 md:px-6">{<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 gap-4">{<div>{<h2 className="text-3xl md:text-4xl font-black mb-3">Best Affiliate Programs</h2>}{<p className="text-muted-foreground text-lg">Top networks to monetize your audience</p>}</div>}{<Link href="/deals" className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">View All Programs {<ArrowRight className="w-5 h-5" />}</Link>}</div>}{<div className="space-y-4 max-w-4xl mx-auto">{affiliatePrograms.map((prog, i) => <motion.div initial={{
              opacity: 0,
              x: -20
            }} whileInView={{
              opacity: 1,
              x: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: i * 0.1
            }} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-5 bg-card border border-border hover:border-slate-400/50 rounded-2xl hover:shadow-lg transition-all">{<div className="flex items-center gap-5">{<div className="w-16 h-16 rounded-xl bg-slate-50 border border-slate-200/50 flex items-center justify-center shrink-0 overflow-hidden p-2">{<img src={prog.logo} alt={prog.name} className="w-full h-full object-contain" />}</div>}{<div>{<h3 className="font-bold text-lg">{prog.name}</h3>}{<div className="flex items-center gap-1 text-sm">{<Star className="w-4 h-4 fill-secondary text-secondary" />}{<span className="font-medium">{prog.rating} Rating</span>}</div>}</div>}</div>}{<div className="bg-blue-50 text-blue-700 px-4 py-2 rounded-lg font-bold text-sm text-center sm:text-left">{prog.comm}</div>}{appliedPrograms[prog.name] ? <span className="px-4 py-2 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-lg font-bold text-sm text-center shadow-sm flex items-center justify-center gap-1.5 shrink-0 select-none">Applied <img src={checkmarkIcon} alt="check" className="w-4 h-4 inline-block" /></span> : <button onClick={() => setSelectedProgram(prog)} className="flex items-center justify-center gap-2 text-primary font-bold hover:underline sm:w-auto w-full py-2">Join Now {<ExternalLink className="w-4 h-4" />}</button>}</motion.div>)}</div>}</div>}</section>}{<section className="py-16 bg-slate-950 text-white text-center relative overflow-hidden">{<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?q=80&w=2400&auto=format&fit=crop')] opacity-50 bg-cover bg-center z-0" />}{<div className="absolute inset-0 bg-slate-950/65 z-0" />}{<div className="container mx-auto px-4 md:px-6 relative z-10">{<h2 className="text-4xl md:text-5xl font-black mb-6 tracking-tight">Compare Top Platforms</h2>}{<p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-12">Compare features, pricing and find the best platform for your business before you buy.</p>}{<div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 max-w-4xl mx-auto bg-slate-900 border border-slate-800 text-white p-6 rounded-3xl shadow-2xl">{<div className="flex items-center gap-3 w-full md:w-auto flex-1 p-4 bg-slate-950 border border-slate-800 rounded-xl">{<img src="https://www.vectorlogo.zone/logos/google_ads/google_ads-icon.svg" alt="Google Ads" className="w-8 h-8 object-contain" />}{<span className="font-bold text-lg text-slate-100">Google Ads</span>}</div>}{<div className="font-black text-2xl text-slate-600 w-full md:w-auto">VS</div>}{<div className="flex items-center gap-3 w-full md:w-auto flex-1 p-4 bg-slate-950 border border-slate-800 rounded-xl">{<img src="https://www.vectorlogo.zone/logos/facebook/facebook-icon.svg" alt="Facebook Ads" className="w-8 h-8 object-contain" />}{<span className="font-bold text-lg text-slate-100">Facebook Ads</span>}</div>}{<div className="font-black text-2xl text-slate-600 w-full md:w-auto">VS</div>}{<div className="flex items-center gap-3 w-full md:w-auto flex-1 p-4 bg-slate-950 border border-slate-800 rounded-xl">{<img src="https://www.vectorlogo.zone/logos/tiktok/tiktok-icon.svg" alt="TikTok Ads" className="w-8 h-8 object-contain" />}{<span className="font-bold text-lg text-slate-100">TikTok Ads</span>}</div>}</div>}{<button onClick={() => setShowCompare(true)} className="mt-12 bg-blue-600 text-white font-black px-10 py-5 rounded-full text-lg hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/20 hover:-translate-y-1 transition-all inline-flex items-center gap-3">Compare Now {<Zap className="w-5 h-5 fill-white text-white" />}</button>}</div>}{showCompare && <div className="fixed inset-0 z-50 flex items-center justify-center p-4">{<div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setShowCompare(false)}>{<div onClick={e => e.stopPropagation()} className="relative bg-slate-900 border border-slate-700 rounded-3xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-y-auto mx-auto mt-[5vh]">{<div className="sticky top-0 z-10 flex items-center justify-between px-8 py-5 bg-slate-900 border-b border-slate-800 rounded-t-3xl">{<h2 className="text-2xl font-black text-white">Platform Comparison</h2>}{<button onClick={() => setShowCompare(false)} className="text-slate-400 hover:text-white text-3xl leading-none transition-colors">×</button>}</div>}{<div className="p-6 md:p-8">{<div className="overflow-x-auto">{<table className="w-full text-left">{<thead>{<tr className="border-b border-slate-700">{<th className="pb-4 text-slate-400 font-semibold text-sm uppercase tracking-wider w-48">Feature</th>}{<th className="pb-4 text-center">{<div className="flex flex-col items-center gap-2">{<img src="https://www.vectorlogo.zone/logos/google_ads/google_ads-icon.svg" className="w-10 h-10 object-contain" />}{<span className="font-black text-white text-base">Google Ads</span>}</div>}</th>}{<th className="pb-4 text-center">{<div className="flex flex-col items-center gap-2">{<img src="https://www.vectorlogo.zone/logos/facebook/facebook-icon.svg" className="w-10 h-10 object-contain" />}{<span className="font-black text-white text-base">Facebook Ads</span>}</div>}</th>}{<th className="pb-4 text-center">{<div className="flex flex-col items-center gap-2">{<img src="https://www.vectorlogo.zone/logos/tiktok/tiktok-icon.svg" className="w-10 h-10 object-contain" />}{<span className="font-black text-white text-base">TikTok Ads</span>}</div>}</th>}</tr>}</thead>}{<tbody>{[{
                        feature: "Best For",
                        g: "Search Intent",
                        f: "Interest Targeting",
                        t: "Gen-Z / Viral"
                      }, {
                        feature: "Avg. CPC",
                        g: "$1 – $6",
                        f: "$0.50 – $3",
                        t: "$0.10 – $1.50"
                      }, {
                        feature: "Min. Daily Budget",
                        g: "$10",
                        f: "$5",
                        t: "$20"
                      }, {
                        feature: "Audience Size",
                        g: "Massive (Search)",
                        f: "3B+ Users",
                        t: "1B+ Users"
                      }, {
                        feature: "Ad Formats",
                        g: "Search, Display, Video",
                        f: "Image, Video, Stories",
                        t: "In-Feed, TopView"
                      }, {
                        feature: "Retargeting",
                        g: <span className="inline-flex items-center justify-center gap-1.5"><img src={checkmarkIcon} className="w-4 h-4" /> Yes</span>,
                        f: <span className="inline-flex items-center justify-center gap-1.5"><img src={checkmarkIcon} className="w-4 h-4" /> Yes</span>,
                        t: <span className="inline-flex items-center justify-center gap-1.5"><img src={checkmarkIcon} className="w-4 h-4" /> Yes</span>
                      }, {
                        feature: "Analytics",
                        g: "Google Analytics",
                        f: "Meta Pixel",
                        t: "TikTok Pixel"
                      }, {
                        feature: "Ease of Use",
                        g: "Moderate",
                        f: "Easy",
                        t: "Easy"
                      }, {
                        feature: "ROI Potential",
                        g: renderStars(5),
                        f: renderStars(4),
                        t: renderStars(4)
                      }, {
                        feature: "Best Vertical",
                        g: "B2B / Local",
                        f: "B2C / eCommerce",
                        t: "Entertainment / DTC"
                      }].map((row, ri) => <tr className={`border-b border-slate-800 ${ri % 2 === 0 ? "bg-slate-800/30" : ""}`}>{<td className="py-4 px-3 text-slate-300 font-semibold text-sm">{row.feature}</td>}{<td className="py-4 px-3 text-center text-white text-sm">{row.g}</td>}{<td className="py-4 px-3 text-center text-white text-sm">{row.f}</td>}{<td className="py-4 px-3 text-center text-white text-sm">{row.t}</td>}</tr>)}</tbody>}</table>}{<div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">{<div className="bg-slate-800 border border-slate-700 rounded-2xl p-5 text-center">{<img src="https://www.vectorlogo.zone/logos/google_ads/google_ads-icon.svg" className="w-10 h-10 mx-auto mb-3 object-contain" />}{<p className="text-blue-400 font-bold text-sm mb-1">Best for</p>}{<p className="text-white font-black">High-Intent Search</p>}{<p className="text-slate-400 text-xs mt-2">Capture users actively searching for your product or service.</p>}</div>}{<div className="bg-slate-800 border border-slate-700 rounded-2xl p-5 text-center">{<img src="https://www.vectorlogo.zone/logos/facebook/facebook-icon.svg" className="w-10 h-10 mx-auto mb-3 object-contain" />}{<p className="text-blue-400 font-bold text-sm mb-1">Best for</p>}{<p className="text-white font-black">eCommerce & Retargeting</p>}{<p className="text-slate-400 text-xs mt-2">Huge audience base with precise interest-based targeting.</p>}</div>}{<div className="bg-slate-800 border border-slate-700 rounded-2xl p-5 text-center">{<img src="https://www.vectorlogo.zone/logos/tiktok/tiktok-icon.svg" className="w-10 h-10 mx-auto mb-3 object-contain" />}{<p className="text-blue-400 font-bold text-sm mb-1">Best for</p>}{<p className="text-white font-black">Viral Brand Awareness</p>}{<p className="text-slate-400 text-xs mt-2">Lowest CPC and massive organic reach for video-first brands.</p>}</div>}</div>}</div>}</div>}</div>}</div>}</div>}</section>}{<section className="py-12 bg-card border-b border-border">{<div className="container mx-auto px-4 md:px-6 text-center">{<h2 className="text-3xl md:text-4xl font-black mb-12">Popular Advertising Platforms</h2>}{<div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">{[{
              name: "Google Ads",
              cpc: "$1.00 – $6.00",
              audience: "4.5 Billion searchers daily",
              verticals: "B2B, Local Services, Lead Gen",
              desc: "Google Ads places your products and services directly in front of buyers actively searching for them. Use Search, PMax, and YouTube to capture high-intent traffic.",
              features: ["Intent-based targeting", "PMax automated campaigns", "Google Search network integration"],
              dealLink: "/deal/google-ads",
              icon: <img src="https://www.vectorlogo.zone/logos/google_ads/google_ads-icon.svg" alt="Google Ads" className="w-10 h-10 object-contain" />
            }, {
              name: "Meta Ads",
              cpc: "$0.50 – $3.00",
              audience: "3 Billion daily active users",
              verticals: "DTC eCommerce, Fashion, Retail",
              desc: "Advertise across Facebook & Instagram with highly visual image, video, and story formats. Meta's lookalike algorithm makes scaling interest targeting simple.",
              features: ["Precision demographic matching", "Advantage+ shopping campaigns", "Dynamic catalog retargeting"],
              dealLink: "/deal/meta-ads",
              icon: <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC_nApxZjoBx3yXT2iU2HOWInrsjI5fYIYgmvwXsV7AryA33blR0YB52AO&s=10" alt="Meta Ads" className="w-10 h-10 object-contain" />
            }, {
              name: "TikTok Ads",
              cpc: "$0.10 – $1.50",
              audience: "1.2 Billion monthly active users",
              verticals: "Entertainment, DTC, Mobile Apps",
              desc: "Capitalize on high organic video engagement and low CPC. Leverage native TikTok user-generated content (UGC) campaigns to drive immediate conversions.",
              features: ["In-Feed native video placements", "Spark Ads organic boost", "Interactive interactive stickers"],
              dealLink: "/deals?search=tiktok",
              icon: <img src="https://www.vectorlogo.zone/logos/tiktok/tiktok-icon.svg" alt="TikTok Ads" className="w-10 h-10 object-contain" />
            }, {
              name: "LinkedIn Ads",
              cpc: "$3.00 – $10.00",
              audience: "900 Million business profiles",
              verticals: "B2B Enterprise, SaaS, Recruiting",
              desc: "LinkedIn Ads are premium but offer unparalleled targeting of professional job titles, seniority levels, departments, and specific company names.",
              features: ["Account-Based Marketing (ABM)", "Native Lead Gen forms", "Sponsored InMail outreach"],
              dealLink: "/deals?search=linkedin",
              icon: <img src="https://www.vectorlogo.zone/logos/linkedin/linkedin-icon.svg" alt="LinkedIn Ads" className="w-10 h-10 object-contain" />
            }, {
              name: "Microsoft Ads",
              cpc: "$0.80 – $3.50",
              audience: "650 Million searchers monthly",
              verticals: "Finance, Travel, Desktop B2B",
              desc: "Reach a highly educated, higher-income audience on Bing, Edge, and Yahoo. Less competition than Google Ads, resulting in lower average cost per click.",
              features: ["LinkedIn integration targeting", "Edge sidebar placements", "Local merchant product feeds"],
              dealLink: "/deals",
              icon: <img src="https://www.vectorlogo.zone/logos/microsoft/microsoft-icon.svg" alt="Microsoft Ads" className="w-10 h-10 object-contain" />
            }, {
              name: "Pinterest Ads",
              cpc: "$0.30 – $1.80",
              audience: "450 Million active pinners",
              verticals: "Home Decor, Food, DIY, Fashion",
              desc: "Target shoppers in visual discovery mode. Pinterest ads display as organic pins and have a longer click life than standard social media campaigns.",
              features: ["Shopping catalog visual pins", "Search intent keyword boards", "Visual search matching"],
              dealLink: "/deals",
              icon: <img src="https://www.vectorlogo.zone/logos/pinterest/pinterest-icon.svg" alt="Pinterest Ads" className="w-10 h-10 object-contain" />
            }, {
              name: "Snapchat Ads",
              cpc: "$0.15 – $1.00",
              audience: "380 Million daily active users",
              verticals: "Gen Z Retail, Gaming, App Installs",
              desc: "Engage teens and young adults using interactive AR lenses, immersive single-image snaps, and story catalog integrations with direct checkout options.",
              features: ["Augmented Reality Lenses", "Commercial non-skippable video", "App Install deep-links"],
              dealLink: "/deals",
              icon: <img src="https://www.vectorlogo.zone/logos/snapchat/snapchat-icon.svg" alt="Snapchat Ads" className="w-10 h-10 object-contain" />
            }, {
              name: "YouTube Ads",
              cpc: "$0.10 – $0.80",
              audience: "2.5 Billion monthly users",
              verticals: "B2C Brands, Tech, SaaS Reviews",
              desc: "Capitalize on Google's high-quality video inventory. Reach users using in-stream, discovery, or short-form video ads synced directly with search history.",
              features: ["Google search intent loops", "Unskippable bumper videos", "Direct click product overlays"],
              dealLink: "/deals",
              icon: <img src="https://www.vectorlogo.zone/logos/youtube/youtube-icon.svg" alt="YouTube Ads" className="w-10 h-10 object-contain" />
            },
            // Additional Platforms shown on click
            {
              name: "Amazon Ads",
              cpc: "$0.75 – $2.50",
              audience: "300 Million active shoppers",
              verticals: "DTC Brands, Physical Products",
              desc: "Advertise products directly on the largest ecommerce platform in the world. Sponsored products place you directly on top of competitor searches.",
              features: ["Sponsored Product Listings", "Video search displays", "Brand storefront overlays"],
              dealLink: "/deals",
              icon: <img src="https://www.vectorlogo.zone/logos/amazon/amazon-icon.svg" alt="Amazon Ads" className="w-10 h-10 object-contain" />
            }, {
              name: "Reddit Ads",
              cpc: "$0.20 – $1.50",
              audience: "70 Million active users",
              verticals: "Crypto, Tech, Gaming, SaaS",
              desc: "Target hyper-specific subreddits where passionate communities discuss niche topics. Perfect for B2B tech platforms and crypto offerings.",
              features: ["Subreddit interest placement", "Text post discussion ads", "Promoted AMAs templates"],
              dealLink: "/deals",
              icon: <img src="https://www.vectorlogo.zone/logos/reddit/reddit-icon.svg" alt="Reddit Ads" className="w-10 h-10 object-contain" />
            }, {
              name: "Twitter Ads (X)",
              cpc: "$0.40 – $2.00",
              audience: "350 Million daily users",
              verticals: "News, Finance, Crypto, B2B",
              desc: "Target conversational keywords, hashtags, and followers of specific industry figures in real-time.",
              features: ["Follower audience targeting", "Real-time trends takeover", "Promoted conversation nodes"],
              dealLink: "/deals",
              icon: <img src="https://www.vectorlogo.zone/logos/twitter/twitter-icon.svg" alt="Twitter Ads" className="w-10 h-10 object-contain" />
            }, {
              name: "Spotify Ads",
              cpc: "$0.02 – $0.05 per listen",
              audience: "500 Million listeners",
              verticals: "Audiobooks, Music, Podcasts",
              desc: "Reach engaged mobile listeners while they listen to podcasts and playlists. Include clickable audio display banners.",
              features: ["Audio voiceover scripts", "Podcast category targeting", "Clickable companion displays"],
              dealLink: "/deals",
              icon: <img src="https://www.vectorlogo.zone/logos/spotify/spotify-icon.svg" alt="Spotify Ads" className="w-10 h-10 object-contain" />
            }].slice(0, showMorePlatforms ? 12 : 8).map((plat, i) => <motion.div initial={{
              opacity: 0,
              scale: 0.9
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true
            }} transition={{
              delay: i * 0.05
            }} onClick={() => setSelectedPlatformDetail(plat)} className="flex flex-col items-center gap-4 p-6 rounded-2xl hover:bg-muted transition-colors cursor-pointer group bg-slate-50 dark:bg-slate-800/40 border border-slate-100 dark:border-slate-800 shadow-sm">{<div className="w-20 h-20 rounded-full bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 shadow-sm flex items-center justify-center group-hover:scale-110 transition-transform p-3">{plat.icon}</div>}{<span className="font-bold text-slate-500 dark:text-slate-450 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">{plat.name}</span>}</motion.div>)}</div>}{<button onClick={() => setShowMorePlatforms(!showMorePlatforms)} className="mt-8 text-primary font-bold hover:underline inline-flex items-center gap-2">{showMorePlatforms ? "Show Less Platforms " : "View More Platforms "}{<ArrowRight className={`w-4 h-4 transition-transform ${showMorePlatforms ? "rotate-90" : ""}`} />}</button>}</div>}</section>}{<section className="py-12 bg-muted/30 overflow-hidden">{<div className="container mx-auto px-4 md:px-6 mb-6">{<div className="flex items-center justify-between">{<h2 className="text-3xl md:text-4xl font-black">Top Marketing Tools</h2>}{<Link href="/tools" className="hidden sm:flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">See All Tools {<ArrowRight className="w-5 h-5" />}</Link>}</div>}</div>}{<div className="overflow-hidden px-4 md:px-6">{<div className="home-marquee-track flex w-max gap-6 py-2">{[...toolCards, ...toolCards].map((tool, i) => <Link href={`/tools?id=${tool.name.toLowerCase().split(" ")[0]}`} className="min-w-[280px] sm:min-w-[320px] bg-card p-6 rounded-2xl border border-border hover:border-slate-400/50 hover:shadow-lg transition-all shrink-0 cursor-pointer block text-left group">{<div className="flex items-center gap-4 mb-4">{<div className="w-14 h-14 rounded-xl flex items-center justify-center bg-slate-50 border border-slate-200/50 overflow-hidden p-1.5 shrink-0">{tool.icon}</div>}{<div>{<h3 className="font-bold text-xl group-hover:text-primary transition-colors">{tool.name}</h3>}{<span className="text-xs font-semibold text-primary uppercase tracking-wider">{tool.cat}</span>}</div>}</div>}{<div className="flex items-center justify-between">{<div className="flex items-center gap-1.5">{<Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />}{<span className="font-bold">{tool.rating}</span>}{<span className="text-sm text-muted-foreground">({tool.count})</span>}</div>}{<div className="text-primary bg-primary/5 group-hover:bg-primary/20 p-2 rounded-full transition-colors">{<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}</div>}</div>}</Link>)}</div>}</div>}</section>}{<section className="py-12 bg-card border-y border-border">{<div className="container mx-auto px-4 md:px-6">{<div className="flex items-center justify-between mb-6">{<h2 className="text-3xl md:text-4xl font-black">Latest Reviews</h2>}{<Link href="/reviews" className="hidden sm:flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">View All Reviews {<ArrowRight className="w-5 h-5" />}</Link>}</div>}{<div className="grid grid-cols-1 md:grid-cols-3 gap-8">{[{
              title: "Semrush Review",
              quote: "Best SEO toolkit for professionals. Unmatched keyword data.",
              img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=160&q=80",
              stars: 5,
              author: "Alex J.",
              cat: "SEO Tools"
            }, {
              title: "Ahrefs Review",
              quote: "The undisputed king of backlink analysis and site auditing.",
              img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=160&q=80",
              stars: 4.5,
              author: "Sarah M.",
              cat: "SEO Tools"
            }, {
              title: "Canva Pro Review",
              quote: "Amazing design platform. The new AI features are incredible.",
              img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=160&q=80",
              stars: 5,
              author: "David L.",
              cat: "Design"
            }].map((rev, i) => <motion.div initial={{
              opacity: 0,
              y: 20
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              delay: i * 0.1
            }} className="bg-muted/50 p-8 rounded-3xl border border-border relative">{<div className="absolute top-0 right-8 -translate-y-1/2 w-16 h-16 rounded-full overflow-hidden border-4 border-card shadow-lg bg-card">{<img src={rev.img} alt={rev.author} className="w-full h-full object-cover" />}</div>}{<div className="flex gap-1 mb-4 pt-4">{[...Array(5)].map((_, idx) => <Star className={`w-5 h-5 ${idx < Math.floor(rev.stars) ? "fill-yellow-400 text-yellow-400" : "fill-muted text-muted"}`} />)}</div>}{<h3 className="text-xl font-bold mb-3">{rev.title}</h3>}{<p className="text-muted-foreground italic mb-6">"{rev.quote}"</p>}{<div className="flex items-center justify-between border-t border-border pt-4 mt-auto">{<div className="text-sm">{<span className="font-bold">{rev.author}</span>}{<span className="text-muted-foreground"> • {rev.cat}</span>}</div>}</div>}</motion.div>)}</div>}</div>}</section>}{<section className="py-12 bg-muted/30">{<div className="container mx-auto px-4 md:px-6">{<div className="flex items-center justify-between mb-6">{<h2 className="text-3xl md:text-4xl font-black">Latest from the Blog</h2>}{<Link href="/blog" className="hidden sm:flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">View All Articles {<ArrowRight className="w-5 h-5" />}</Link>}</div>}{<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{recentBlogs.map((blog, i) => <BlogCard blog={blog} index={i} />)}</div>}</div>}</section>}{<section className="py-10 bg-card border-y border-border">{<div className="container mx-auto px-4 md:px-6">{<div className="flex flex-col md:flex-row gap-8 md:items-center justify-between">{<div className="md:w-1/3">{<h2 className="text-3xl font-black mb-4">Marketing News</h2>}{<p className="text-muted-foreground mb-6">Stay updated with the latest changes in the digital marketing landscape.</p>}{<Link href="/blog" className="text-primary font-bold inline-flex items-center gap-2 hover:gap-3 transition-all">View All News {<ArrowRight className="w-5 h-5" />}</Link>}</div>}{<div className="md:w-2/3 space-y-4">{[{
                title: "Google Ads introduces new AI features for advertisers",
                date: "May 08, 2026",
                blogId: "google-ads-2026-guide"
              }, {
                title: "Meta launches new Advantage+ advertising tools",
                date: "May 06, 2026",
                blogId: "best-seo-tools"
              }, {
                title: "TikTok Ads update: New targeting options for businesses",
                date: "May 08, 2026",
                blogId: "tiktok-ads-strategy"
              }].map((news, i) => <Link href={`/blog/${news.blogId}`} className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-5 bg-muted rounded-xl hover:bg-primary/5 transition-colors cursor-pointer group block text-left">{<h3 className="font-semibold text-lg group-hover:text-primary transition-colors">{news.title}</h3>}{<span className="text-sm text-muted-foreground whitespace-nowrap">{news.date}</span>}</Link>)}</div>}</div>}</div>}</section>}{<section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">{<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px]" />}{<div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-950/20 rounded-full blur-[80px]" />}{<div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-3xl">{<motion.div initial={{
            opacity: 0,
            y: 30
          }} whileInView={{
            opacity: 1,
            y: 0
          }} viewport={{
            once: true
          }}>{<h2 className="text-4xl md:text-5xl font-black mb-6">Never Miss New Marketing Deals!</h2>}{<p className="text-xl text-white/80 mb-10 leading-relaxed">Subscribe to get the best marketing deals, exclusive tool discounts, and actionable strategies straight to your inbox.</p>}{newsletterSubscribed ? <motion.div initial={{
              opacity: 0,
              scale: 0.95
            }} animate={{
              opacity: 1,
              scale: 1
            }} className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl max-w-xl mx-auto text-center space-y-2 shadow-2xl">{<span><img src={partyPopperIcon} className="w-8 h-8 inline-block" alt="success" /></span>}{<h3 className="text-xl font-bold text-white">Successfully Subscribed!</h3>}{<p className="text-white/80 text-sm">Thank you! A welcome email containing exclusive software discounts has been sent to {<strong>{newsletterEmail}</strong>}.</p>}</motion.div> : <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto mb-4" onSubmit={e => {
              e.preventDefault();
              if (newsletterEmail) {
                setNewsletterSubscribed(true);
              }
            }}>{<div className="relative flex-1">{<Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />}{<input type="email" placeholder="Enter your email address" value={newsletterEmail} onChange={e => setNewsletterEmail(e.target.value)} className="w-full pl-12 pr-4 py-4 rounded-xl text-slate-900 bg-white outline-none focus:ring-4 focus:ring-primary/50 shadow-lg text-lg" required={true} />}</div>}{<button type="submit" className="bg-white text-blue-700 font-black px-8 py-4 rounded-xl hover:bg-blue-50 transition-colors shadow-lg text-lg whitespace-nowrap">Subscribe Now</button>}</form>}{<p className="text-sm text-white/60">No spam. Unsubscribe anytime.</p>}</motion.div>}</div>}</section>}</main>}{<Footer />}{selectedProgram && <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">{<div className="bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 md:p-8 max-w-md w-full relative space-y-6 text-slate-800">{<button onClick={() => setSelectedProgram(null)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-650 hover:scale-110 transition-transform"><img src={closeIcon} className="w-5 h-5" alt="close" /></button>}{<div className="text-center space-y-2">{<div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center p-2 mx-auto mb-2">{<img src={selectedProgram.logo} alt={selectedProgram.name} className="w-full h-full object-contain" />}</div>}{<h3 className="text-2xl font-black text-slate-800">Join {selectedProgram.name}</h3>}{<p className="text-slate-500 text-xs">Submit your channel details below to apply for our verified partnership.</p>}</div>}{appliedPrograms[selectedProgram.name] ? <div className="text-center p-6 bg-emerald-50 border border-emerald-100 rounded-2xl space-y-3">{<span><img src={partyPopperIcon} className="w-8 h-8 inline-block" alt="success" /></span>}{<h4 className="font-bold text-emerald-800">Application Submitted!</h4>}{<p className="text-emerald-700 text-xs leading-relaxed">We've sent a confirmation email to {<strong>{appForm.email}</strong>}. Our affiliate team will review your website channel and approve your request within 24 hours.</p>}</div> : <form onSubmit={e => {
          e.preventDefault();
          setSubmittingProgram(true);
          setTimeout(() => {
            setAppliedPrograms(prev => ({
              ...prev,
              [selectedProgram.name]: true
            }));
            setSubmittingProgram(false);
          }, 1000);
        }} className="space-y-4 text-left">{<div className="space-y-1.5">{<label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Website or Social URL</label>}{<input type="url" required={true} placeholder="https://yourwebsite.com" value={appForm.website} onChange={e => setAppForm(prev => ({
              ...prev,
              website: e.target.value
            }))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 text-sm shadow-inner bg-slate-50" />}</div>}{<div className="space-y-1.5">{<label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address</label>}{<input type="email" required={true} placeholder="you@example.com" value={appForm.email} onChange={e => setAppForm(prev => ({
              ...prev,
              email: e.target.value
            }))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-slate-800 placeholder-slate-400 focus:outline-none focus:border-blue-500 text-sm shadow-inner bg-slate-50" />}</div>}{<div className="space-y-1.5">{<label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Monthly Traffic / Audience</label>}{<select value={appForm.traffic} onChange={e => setAppForm(prev => ({
              ...prev,
              traffic: e.target.value
            }))} className="w-full px-4 py-2.5 rounded-xl border border-slate-200 bg-white text-slate-800 focus:outline-none focus:border-blue-500 text-sm shadow-sm">{<option value="<1k">Under 1,000 visitors</option>}{<option value="1k-10k">1,000 to 10,000 visitors</option>}{<option value="10k-50k">10,000 to 50,000 visitors</option>}{<option value="50k+">Over 50,000 visitors</option>}</select>}</div>}{<button type="submit" disabled={submittingProgram} className="w-full py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold rounded-xl text-sm transition-colors shadow-md shadow-blue-200 mt-2">{submittingProgram ? "Submitting Application..." : "Submit Application"}</button>}</form>}</div>}</div>}{selectedPlatformDetail && <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">{<div className="bg-white rounded-3xl border border-slate-200 shadow-2xl p-6 md:p-8 max-w-lg w-full relative space-y-6 text-slate-800">{<button onClick={() => setSelectedPlatformDetail(null)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-650 hover:scale-110 transition-transform"><img src={closeIcon} className="w-5 h-5" alt="close" /></button>}{<div className="text-center space-y-2">{<div className="w-16 h-16 rounded-full bg-slate-50 border border-slate-200/80 flex items-center justify-center p-3 mx-auto mb-2">{selectedPlatformDetail.icon}</div>}{<h3 className="text-2xl font-black text-slate-800">{selectedPlatformDetail.name}</h3>}{<p className="text-slate-500 text-xs">Platform Performance & Ad Distribution</p>}</div>}{<div className="space-y-4">{<p className="text-sm text-slate-600 leading-relaxed">{selectedPlatformDetail.desc}</p>}{<div className="bg-slate-50 rounded-2xl border border-slate-250 p-4 space-y-2.5 text-xs border-slate-200">{<div className="flex justify-between">{<span className="text-slate-400 font-semibold">Avg. CPC Range</span>}{<span className="text-slate-800 font-bold">{selectedPlatformDetail.cpc}</span>}</div>}{<div className="flex justify-between">{<span className="text-slate-400 font-semibold">Estimated Reach</span>}{<span className="text-slate-800 font-bold">{selectedPlatformDetail.audience}</span>}</div>}{<div className="flex justify-between">{<span className="text-slate-400 font-semibold">Best Verticals</span>}{<span className="text-slate-800 font-bold">{selectedPlatformDetail.verticals}</span>}</div>}</div>}{<div className="space-y-2">{<h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Platform Highlights</h4>}{<ul className="space-y-1.5">{selectedPlatformDetail.features.map((feat, idx) => <li className="text-xs text-slate-600 flex items-center gap-2">{<span className="text-blue-500 font-bold"><img src={checkmarkIcon} alt="check" className="w-3.5 h-3.5 inline-block" /></span>}{feat}</li>)}</ul>}</div>}{<Link href={selectedPlatformDetail.dealLink} onClick={() => setSelectedPlatformDetail(null)} className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl text-sm transition-colors text-center inline-block shadow-md shadow-blue-200 mt-2">View Verified Deals {<ArrowRight className="w-4 h-4 inline-block ml-1" />}</Link>}</div>}</div>}</div>}</div>;
}