import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Star, Play, Clock } from "lucide-react";
import heroVideoMov from "@/assets/home_hero_video_2.mov";
import heroVideoWebm from "@/assets/home_hero_video_2.mp4";
import { blogs } from "@/data/blogs";

function CountUpStat({ end, suffix = "", prefix = "" }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting && !started) setStarted(true); }, { threshold: 0.01 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [started]);
  useEffect(() => {
    if (!started) return;
    let startTs = null;
    const step = (ts) => {
      if (!startTs) startTs = ts;
      const p = Math.min((ts - startTs) / 1800, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      setCount(parseFloat((eased * end).toFixed(1)));
      if (p < 1) requestAnimationFrame(step); else setCount(end);
    };
    requestAnimationFrame(step);
  }, [started, end]);
  return <span ref={ref}>{prefix}{count % 1 === 0 ? count : count.toFixed(1)}{suffix}</span>;
}

export default function Home() {
  const [selectedPlan, setSelectedPlan] = useState("annual");
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);
  const [activeProcessStep, setActiveProcessStep] = useState(0);

  const processSteps = [
    {
      title: "Research",
      desc: "Audience, offer and competitor signals are mapped before we spend a rupee on traffic.",
      img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&q=90"
    },
    {
      title: "Strategy",
      desc: "We design a custom campaign architecture, mapping budgets, creatives, and funnels to match target ROI thresholds.",
      img: "https://images.unsplash.com/photo-1553028826-f4804a6dba3b?w=900&q=90"
    },
    {
      title: "Execution",
      desc: "Launch campaigns, set up exact server-side tracking, build dynamic ad copy, and push live.",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=90"
    },
    {
      title: "Delivery",
      desc: "We report transparent results and scale budgets on high-yielding channels weekly.",
      img: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=900&q=90"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProcessStep((prev) => (prev + 1) % processSteps.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const partners = [
    { name: "BBC", logo: "https://www.pngmart.com/files/23/Bbc-Logo-PNG-Pic.png" },
    { name: "Mashable", logo: "https://tse3.mm.bing.net/th/id/OIP.-QZ4oYFZsBD1ac0QWb4vwAHaBo?r=0&cb=thfc1falcon4&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "TikTok", logo: "https://tse1.mm.bing.net/th/id/OIP.wwkk7rp66RXwr7o8FuZKagAAAA?r=0&cb=thfc1falcon4&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Walmart", logo: "https://tse1.mm.bing.net/th/id/OIP.WZP4TRLFNHn2Buns9iYeegHaCs?r=0&cb=thfc1falcon4&w=4390&h=1600&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Lenovo", logo: "https://freepngimg.com/thumb/lenovo_logo/32023-4-lenovo-logo-transparent.png" },
    { name: "Uber", logo: "https://tse3.mm.bing.net/th/id/OIP.Oy5wfKuZ37KcuXONE7zjnQHaEK?r=0&cb=thfc1falcon4&rs=1&pid=ImgDetMain&o=7&rm=3" },
    { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
    { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg" },
    { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
    { name: "LinkedIn", logo: "https://2.bp.blogspot.com/-DpLm5zpr3sU/W1dE0g2C1WI/AAAAAAAAq5w/WY2qL91vyvAoQ_aImF1zi5xsvwGcFygwACLcBGAs/s1600/linkedin.jpg" },
    { name: "meta", logo: "https://www.pngall.com/wp-content/uploads/13/Meta-Logo.png" },


    { name: "Netflix", logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" }
  ];

  const [activeTestiIndex, setActiveTestiIndex] = useState(0);

  const customTestimonials = [
    {
      quote: "VELOX helped us turn scattered campaigns into a clean acquisition system. The tracking, creative tests and landing pages exceeded our targets.",
      author: "Rohan Mehta",
      role: "Founder, D2C Brand",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80"
    },
    {
      quote: "Working with VELOX felt like having an in-house growth team. Clear communication, strong ideas and real impact on revenue.",
      author: "Sarah Chen",
      role: "Product Owner",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&q=80"
    },
    {
      quote: "The programmatic campaigns and custom attribution setup saved us thousands in waste. Scaling was fast, efficient, and transparent.",
      author: "David Miller",
      role: "Growth VP, SaaS",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&q=80"
    },
    {
      quote: "A dedicated marketing partner that values margins as much as revenue. Their team went above and beyond to launch complex funnels.",
      author: "Naomi Watts",
      role: "E-commerce Director",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80"
    }
  ];

  // testimonials now use CSS infinite-loop animation, no JS timer needed

  const pricingPlans = [
    {
      name: "Growth",
      desc: "Best for startups and small teams looking to establish their digital presence.",
      priceMonthly: 499,
      priceAnnually: 399,
      features: [
        "Google Ads management",
        "Basic SEO & Keyword research",
        "Monthly reports & analytics",
        "Standard email support"
      ],
      buttonText: "Get started today",
      popular: false
    },
    {
      name: "Scale",
      desc: "Best for mid-sized businesses looking to accelerate their growth.",
      priceMonthly: 999,
      priceAnnually: 799,
      features: [
        "All Growth features",
        "Multi-channel ad management",
        "Advanced SEO strategy",
        "Creative A/B testing",
        "Priority Slack support",
        "Weekly performance updates"
      ],
      buttonText: "Choose Scale Plan",
      popular: true
    },
    {
      name: "Enterprise",
      desc: "Custom solutions for large corporations with complex marketing needs.",
      priceMonthly: "Custom",
      priceAnnually: "Custom",
      features: [
        "All Scale features",
        "Dedicated Account Manager",
        "Custom analytics & reporting dashboard",
        "24/7 Phone & email support",
        "Quarterly strategy consulting"
      ],
      buttonText: "Contact Sales",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground overflow-x-hidden">
      <Navbar />
      <main className="flex-1 pt-12">

        {/* ── HERO SECTION ── */}
        <section id="home" className="relative pt-12 pb-8 lg:pt-16 lg:pb-12 bg-gradient-to-br from-blue-50/50 via-background to-background border-b border-slate-100">
          <div className="w-full px-6 md:px-10 lg:px-12 relative z-10">
            <div className="grid lg:grid-cols-12 gap-12 items-center">

              {/* Left Column Text */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-6 space-y-6 text-left"
              >
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 leading-[1.05]">
                  Drive growth. <br />
                  <span className="text-blue-600">Scale faster.</span> <br />
                  Win markets.
                </h1>

                <p className="text-xl md:text-2xl text-slate-550 max-w-xl leading-relaxed">
                  Take a data-driven approach to digital marketing. Scale your brand with high-performing campaigns and custom strategies.
                </p>

                <div className="flex flex-col sm:flex-row items-center gap-4">
                  <button
                    onClick={() => window.dispatchEvent(new CustomEvent('open-booking-modal'))}
                    className="w-full sm:w-auto px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-xl transition-all hover:shadow-xl hover:shadow-blue-200 hover:-translate-y-0.5 flex items-center justify-center gap-2"
                  >
                    Book a Schedule
                  </button>
                  <Link
                    href="/services"
                    className="w-full sm:w-auto px-10 py-5 bg-white border-2 border-slate-800 hover:border-slate-950 text-slate-850 hover:bg-slate-50 rounded-full font-bold text-xl transition-all flex items-center justify-center"
                  >
                    Explore Services
                  </Link>
                </div>

                {/* Rating Strip */}
                <div className="flex items-center gap-4 pt-4 border-t border-slate-100 w-fit">
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-base font-semibold text-slate-650">
                    <span className="text-slate-900 font-bold">4.8/5</span> (Based on over 1,200+ reviews)
                  </p>
                </div>

                {/* Hero Stats with count-up animation */}
                <div className="grid grid-cols-3 gap-8 pt-8 border-t border-slate-100">
                  <div className="space-y-1">
                    <p className="text-4xl md:text-5xl font-black text-slate-950 tracking-tight">+<CountUpStat end={48} suffix="%" /></p>
                    <p className="text-xs font-semibold text-slate-500 leading-snug">Average lift in qualified traffic</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-4xl md:text-5xl font-black text-slate-950 tracking-tight">+<CountUpStat end={62} suffix="%" /></p>
                    <p className="text-xs font-semibold text-slate-500 leading-snug">Increase in affiliate conversion rate</p>
                  </div>
                  <div className="space-y-1">
                    <p className="text-4xl md:text-5xl font-black text-slate-950 tracking-tight"><CountUpStat end={3.4} suffix="x" /></p>
                    <p className="text-xs font-semibold text-slate-500 leading-snug">Faster campaign learning cycles</p>
                  </div>
                </div>
              </motion.div>

              {/* Right Column Video — made larger */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="lg:col-span-6 relative w-full flex items-center justify-center lg:justify-end z-10"
              >
                <video
                  autoPlay={true}
                  loop={true}
                  muted={true}
                  playsInline={true}
                  onCanPlay={e => {
                    e.currentTarget.muted = true;
                    e.currentTarget.play().catch(err => console.log(err));
                  }}
                  className="w-full max-w-4xl lg:max-w-5xl h-auto object-contain"
                  style={{ display: "block" }}
                >
                  <source src={heroVideoWebm} type="video/webm" />
                  <source src={heroVideoMov} type="video/quicktime" />
                </video>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── PARTNER LOGOS ── */}
        <section className="py-8 pt-4 bg-white border-b border-slate-100 overflow-hidden">
          <div className="w-full px-6 md:px-10 lg:px-12 text-center space-y-8">
            <p className="text-xs font-black uppercase tracking-widest text-slate-900">
              Trusted by the world's leading marquee brands
            </p>
            <div className="relative w-full overflow-hidden py-2">
              <div className="flex w-max gap-16 items-center home-marquee-track opacity-90">
                {[...partners, ...partners].map((partner, i) => (
                  <img
                    key={i}
                    src={partner.logo}
                    alt={partner.name}
                    className="h-7 md:h-8 object-contain shrink-0"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── FEATURES SECTION ── */}
        <section id="product" className="py-20 bg-slate-50/50 space-y-28 overflow-hidden">
          <div className="w-full px-6 md:px-10 lg:px-12">

            {/* Centered Services Section Header */}
            <div className="text-center max-w-3xl mx-auto mb-20 space-y-3">
              <span className="text-sm font-black uppercase tracking-widest text-black block mb-2">
                Our Services
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
                High-Impact Marketing Solutions
              </h2>
              <p className="text-slate-500 text-sm md:text-base">
                We design and execute custom digital campaigns that drive targeted traffic, generate leads, and maximize your advertising returns.
              </p>
            </div>

            {/* Feature 1: Digital Marketing */}
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="space-y-7 text-left"
              >
                <div className="text-sm font-black uppercase tracking-widest text-black mb-2">
                  Growth Channels
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                  Digital Marketing <br className="hidden md:block" />that converts
                </h2>
                <p className="text-base text-slate-500 leading-relaxed">
                  Since 2019, we've helped 200+ brands dominate organic and paid channels. Our data-first strategy combines SEO authority, CRM automation, and CRO science to turn traffic into measurable revenue.
                </p>
                <div className="grid grid-cols-3 gap-4 p-5 bg-blue-50 rounded-2xl border border-blue-100">
                  {[
                    { val: "+460%", label: "Organic traffic lift" },
                    { val: "99.8%", label: "Data accuracy rate" },
                    { val: "4.5x", label: "Conversion boost avg." }
                  ].map((s, i) => (
                    <div key={i} className="text-center space-y-0.5">
                      <p className="text-xl font-black text-blue-700 tracking-tight">{s.val}</p>
                      <p className="text-[10px] text-slate-500 font-semibold leading-tight">{s.label}</p>
                    </div>
                  ))}
                </div>
                <ul className="space-y-3 pt-1">
                  {[
                    "Custom channel & keyword targeting",
                    "Real-time performance tracking & reporting",
                    "Data-backed CRO & funnel optimization"
                  ].map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-3 font-semibold text-slate-700 text-sm">
                      <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0 text-[10px] font-black">✓</div>
                      {feat}
                    </li>
                  ))}
                </ul>
                <div className="pt-2">
                  <Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-sm transition-all hover:shadow-lg hover:shadow-blue-200 hover:-translate-y-0.5 group">
                    Explore Now <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>

              <div className="relative aspect-[4/5] w-full max-w-md lg:max-w-[460px] mx-auto mt-12 md:mt-0">
                {/* Image 1: Top Left (Vertical Large) */}
                <motion.div
                  initial={{ opacity: 0, x: 60, y: 60 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: 0.1, type: "spring", bounce: 0.3 }}
                  className="absolute left-0 top-0 w-[48%] h-[70%] z-10"
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-full h-full rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.15)] border-4 md:border-[8px] border-white bg-slate-100"
                  >
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" alt="Data Analytics" className="w-full h-full object-cover" />
                  </motion.div>
                </motion.div>

                {/* Image 2: Right Middle */}
                <motion.div
                  initial={{ opacity: 0, x: 80, y: 80 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.3 }}
                  className="absolute right-0 top-[8%] w-[48%] h-[42%] z-20"
                >
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="w-full h-full rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.15)] border-4 md:border-[8px] border-white bg-slate-100"
                  >
                    <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&q=80" alt="Strategy Planning" className="w-full h-full object-cover" />
                  </motion.div>
                </motion.div>

                {/* Image 3: Bottom Center */}
                <motion.div
                  initial={{ opacity: 0, x: 100, y: 100 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: 0.5, type: "spring", bounce: 0.3 }}
                  className="absolute right-[5%] bottom-[12%] w-[58%] h-[40%] z-30"
                >
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="w-full h-full rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.2)] border-4 md:border-[8px] border-white bg-slate-100"
                  >
                    <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80" alt="Marketing Dashboard" className="w-full h-full object-cover" />
                  </motion.div>
                </motion.div>

                {/* Floating Stats */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="absolute -bottom-8 left-0 right-0 flex gap-3 z-40"
                >
                  <div className="bg-white rounded-2xl px-5 py-4 shadow-xl flex-1 border border-slate-100">
                    <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Organic Sessions</p>
                    <div className="flex items-baseline gap-2">
                      <p className="text-2xl font-black text-slate-900">68,000</p>
                      <p className="text-xs text-blue-600 font-bold">↑ 460%</p>
                    </div>
                  </div>
                  <div className="bg-blue-600 rounded-2xl px-5 py-4 shadow-xl flex-1 text-white">
                    <p className="text-[10px] uppercase tracking-widest text-blue-200 font-bold mb-1">Conversion Rate</p>
                    <div className="flex items-baseline gap-2">
                      <p className="text-2xl font-black">5.4%</p>
                      <p className="text-xs text-blue-200 font-bold">↑ 4.5x</p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

          </div>

          {/* Feature 2: Affiliate Marketing */}
          <div id="affiliate-programs" className="w-full px-6 md:px-10 lg:px-12">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

              <div className="relative md:order-first order-last aspect-[4/5] w-full max-w-md lg:max-w-[460px] mx-auto mt-12 md:mt-0">
                {/* Image 1: Top Left (Vertical Large) */}
                <motion.div
                  initial={{ opacity: 0, x: 60, y: 60 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: 0.1, type: "spring", bounce: 0.3 }}
                  className="absolute left-0 top-0 w-[48%] h-[70%] z-10"
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-full h-full rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.15)] border-4 md:border-[8px] border-white bg-slate-100"
                  >
                    <img src="https://landingi.com/wp-content/uploads/2024/11/Affiliate-Digital-Marketing-1.webp" alt="Affiliate Digital Marketing" className="w-full h-full object-cover" />
                  </motion.div>
                </motion.div>

                {/* Image 2: Right Middle */}
                <motion.div
                  initial={{ opacity: 0, x: 80, y: 80 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.3 }}
                  className="absolute right-0 top-[8%] w-[48%] h-[42%] z-20"
                >
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="w-full h-full rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.15)] border-4 md:border-[8px] border-white bg-slate-100"
                  >
                    <img src="https://pureresiduals.com/wp-content/uploads/top-Social-Media-Marketing-Affiliate-Programs.jpg" alt="Social Media Marketing Affiliate Programs" className="w-full h-full object-cover" />
                  </motion.div>
                </motion.div>

                {/* Image 3: Bottom Center */}
                <motion.div
                  initial={{ opacity: 0, x: 100, y: 100 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: 0.5, type: "spring", bounce: 0.3 }}
                  className="absolute right-[5%] bottom-[12%] w-[58%] h-[40%] z-30"
                >
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="w-full h-full rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.2)] border-4 md:border-[8px] border-white bg-slate-100"
                  >
                    <img src="https://assets-au-01.kc-usercontent.com/df4a25df-7d25-0294-ad5c-62528c8f82da/c234e5ea-d77b-4f6c-b74e-f19bbbf11925/Affiliate%20Marketing.jpg" alt="Affiliate Marketing" className="w-full h-full object-cover" />
                  </motion.div>
                </motion.div>

                {/* Floating Stats */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="absolute -bottom-8 left-0 right-0 flex gap-3 z-40"
                >
                  <div className="bg-white rounded-2xl px-5 py-4 shadow-xl flex-1 border border-slate-100">
                    <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">Active Partners</p>
                    <div className="flex items-baseline gap-2">
                      <p className="text-2xl font-black text-slate-900">2,600+</p>
                    </div>
                  </div>
                  <div className="bg-blue-600 rounded-2xl px-5 py-4 shadow-xl flex-1 text-white">
                    <p className="text-[10px] uppercase tracking-widest text-blue-200 font-bold mb-1">Avg. CAC Drop</p>
                    <div className="flex items-baseline gap-2">
                      <p className="text-2xl font-black">–61.2%</p>
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="space-y-7 text-left"
              >
                <div className="text-sm font-black uppercase tracking-widest text-black mb-2">
                  Affiliate Networks
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                  Affiliate programs <br className="hidden md:block" />that scale
                </h2>
                <p className="text-base text-slate-500 leading-relaxed">
                  We've built affiliate ecosystems for brands from scratch since 2020 — growing networks from 0 to 2,600+ active publishers. Our risk-free CPA model means you only pay for results, not promises.
                </p>
                <div className="grid grid-cols-3 gap-4 p-5 bg-blue-50 rounded-2xl border border-blue-100">
                  {[
                    { val: "2.6k+", label: "Publisher partners" },
                    { val: "$580k", label: "Monthly volume" },
                    { val: "–61%", label: "CAC reduction" }
                  ].map((s, i) => (
                    <div key={i} className="text-center space-y-0.5">
                      <p className="text-xl font-black text-blue-700 tracking-tight">{s.val}</p>
                      <p className="text-[10px] text-slate-500 font-semibold leading-tight">{s.label}</p>
                    </div>
                  ))}
                </div>
                <ul className="space-y-3 pt-1">
                  {[
                    "Sub-affiliate networks & media partnerships",
                    "Custom CPA commission structures & fraud shields",
                    "Creator ambassador & influencer referral arrays"
                  ].map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-3 font-semibold text-slate-700 text-sm">
                      <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0 text-[10px] font-black">✓</div>
                      {feat}
                    </li>
                  ))}
                </ul>
                <div className="pt-2">
                  <Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-sm transition-all hover:shadow-lg hover:shadow-blue-200 hover:-translate-y-0.5 group">
                    Explore Now <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>

            </div>
          </div>

          {/* Feature 3: Advertising */}
          <div id="advertising" className="w-full px-6 md:px-10 lg:px-12 pt-20 border-t border-slate-150">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">

              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7 }}
                className="space-y-7 text-left"
              >
                <div className="text-sm font-black uppercase tracking-widest text-black mb-2">
                  Paid Ads
                </div>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                  Advertising that <br className="hidden md:block" />pays for itself
                </h2>
                <p className="text-base text-slate-500 leading-relaxed">
                  From Google PMAX and Meta funnels to TikTok UGC and programmatic native ads — we've scaled paid channels for 150+ brands since 2021, achieving an average blended ROAS of 4.8x across portfolios.
                </p>
                <div className="grid grid-cols-3 gap-4 p-5 bg-blue-50 rounded-2xl border border-blue-100">
                  {[
                    { val: "4.8x", label: "Avg. ROAS achieved" },
                    { val: "+2,060%", label: "Scaled conversions" },
                    { val: "4.3%", label: "Peak CTR delivered" }
                  ].map((s, i) => (
                    <div key={i} className="text-center space-y-0.5">
                      <p className="text-xl font-black text-blue-700 tracking-tight">{s.val}</p>
                      <p className="text-[10px] text-slate-500 font-semibold leading-tight">{s.label}</p>
                    </div>
                  ))}
                </div>
                <ul className="space-y-3 pt-1">
                  {[
                    "Google, Meta, TikTok & YouTube ad management",
                    "Creative UGC testing & audience validation",
                    "Server-side attribution & daily negative pruning"
                  ].map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-3 font-semibold text-slate-700 text-sm">
                      <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-white shrink-0 text-[10px] font-black">✓</div>
                      {feat}
                    </li>
                  ))}
                </ul>
                <div className="pt-2">
                  <Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-sm transition-all hover:shadow-lg hover:shadow-blue-200 hover:-translate-y-0.5 group">
                    Explore Now <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </motion.div>

              <div className="relative aspect-[4/5] w-full max-w-md lg:max-w-[460px] mx-auto mt-12 md:mt-0">
                {/* Image 1: Top Left (Vertical Large) */}
                <motion.div
                  initial={{ opacity: 0, x: 60, y: 60 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: 0.1, type: "spring", bounce: 0.3 }}
                  className="absolute left-0 top-0 w-[48%] h-[70%] z-10"
                >
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                    className="w-full h-full rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.15)] border-4 md:border-[8px] border-white bg-slate-100"
                  >
                    <img src="https://images.unsplash.com/photo-1542744094-3a31f272c490?w=800&q=80" alt="Paid Ads Campaign" className="w-full h-full object-cover" />
                  </motion.div>
                </motion.div>

                {/* Image 2: Right Middle */}
                <motion.div
                  initial={{ opacity: 0, x: 80, y: 80 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: 0.3, type: "spring", bounce: 0.3 }}
                  className="absolute right-0 top-[8%] w-[48%] h-[42%] z-20"
                >
                  <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="w-full h-full rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.15)] border-4 md:border-[8px] border-white bg-slate-100"
                  >
                    <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&q=80" alt="Ad Results" className="w-full h-full object-cover" />
                  </motion.div>
                </motion.div>

                {/* Image 3: Bottom Center */}
                <motion.div
                  initial={{ opacity: 0, x: 100, y: 100 }}
                  whileInView={{ opacity: 1, x: 0, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.8, delay: 0.5, type: "spring", bounce: 0.3 }}
                  className="absolute right-[5%] bottom-[12%] w-[58%] h-[40%] z-30"
                >
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="w-full h-full rounded-2xl overflow-hidden shadow-[0_20px_40px_rgba(0,0,0,0.2)] border-4 md:border-[8px] border-white bg-slate-100"
                  >
                    <img src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80" alt="Social Media Ads" className="w-full h-full object-cover" />
                  </motion.div>
                </motion.div>

                {/* Floating Stats */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                  className="absolute -bottom-8 left-0 right-0 flex gap-3 z-40"
                >
                  <div className="bg-blue-600 rounded-2xl px-5 py-4 shadow-xl flex-1 text-white">
                    <p className="text-[10px] uppercase tracking-widest text-blue-200 font-bold mb-1">Blended ROAS</p>
                    <div className="flex items-baseline gap-2">
                      <p className="text-2xl font-black">4.8x</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl px-5 py-4 shadow-xl flex-1 border border-slate-100">
                    <p className="text-[10px] uppercase tracking-widest text-slate-500 font-bold mb-1">CTR Achieved</p>
                    <div className="flex items-baseline gap-2">
                      <p className="text-2xl font-black text-blue-600">4.3%</p>
                    </div>
                  </div>
                </motion.div>
              </div>

            </div>
          </div>
        </section>






        {/* ── PROCESS SECTION (DARK INTERACTIVE GRAPHIC) ── */}
        <section className="py-24 bg-slate-950 text-white">
          <div className="w-full px-6 md:px-10 lg:px-12 space-y-16">

            {/* Centered Process Header */}
            <div className="text-center max-w-4xl mx-auto space-y-5">
              <p className="text-sm md:text-base font-black uppercase tracking-[0.3em] text-blue-500">
                — PROCESS —
              </p>
              <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight">
                Our process is simple, transparent and focused on measurable results
              </h2>
            </div>

            {/* Split Screen Layout */}
            <div className="grid lg:grid-cols-12 gap-14 items-center w-full">

              {/* Left Column Step List */}
              <div className="lg:col-span-5 space-y-2">
                {processSteps.map((step, idx) => {
                  const isActive = activeProcessStep === idx;
                  return (
                    <div
                      key={idx}
                      onClick={() => setActiveProcessStep(idx)}
                      className={`relative cursor-pointer rounded-2xl transition-all duration-400 text-left px-6 py-5 ${isActive
                        ? "bg-white/8 border border-white/15 shadow-lg"
                        : "opacity-35 hover:opacity-55 border border-transparent"
                        }`}
                    >
                      {/* Active left accent bar */}
                      {isActive && (
                        <div className="absolute left-0 top-4 bottom-4 w-1 bg-blue-500 rounded-full" />
                      )}
                      <div className="flex items-center gap-4">
                        <span className={`text-xs font-black tabular-nums tracking-widest ${isActive ? "text-blue-400" : "text-slate-600"}`}>
                          0{idx + 1}
                        </span>
                        <h3 className={`text-3xl md:text-4xl font-black tracking-tight transition-all duration-300 ${isActive ? "text-white" : "text-slate-500"
                          }`}>
                          {step.title}
                        </h3>
                      </div>
                      {isActive && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="text-slate-400 text-sm md:text-base mt-3 leading-relaxed pl-10">
                            {step.desc}
                          </p>
                          {/* Progress bar */}
                          <div className="mt-4 pl-10 h-0.5 bg-slate-800 rounded-full overflow-hidden">
                            <motion.div
                              className="h-full bg-blue-500 rounded-full"
                              initial={{ width: "0%" }}
                              animate={{ width: "100%" }}
                              transition={{ duration: 2, ease: "linear" }}
                            />
                          </div>
                        </motion.div>
                      )}
                    </div>
                  );
                })}
              </div>

              {/* Right Column Image Preview */}
              <div className="lg:col-span-7 relative flex items-center justify-center">
                <div className="absolute -inset-6 bg-blue-600/10 rounded-[3rem] blur-3xl" />
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl w-full aspect-video z-10 border border-white/10">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={activeProcessStep}
                      src={processSteps[activeProcessStep].img}
                      alt={processSteps[activeProcessStep].title}
                      initial={{ opacity: 0, scale: 1.06 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.96 }}
                      transition={{ duration: 0.5 }}
                      className="w-full h-full object-cover"
                    />
                  </AnimatePresence>
                  {/* Bottom label overlay */}
                  <div className="absolute bottom-0 left-0 right-0 px-6 py-4 bg-gradient-to-t from-slate-950/90 to-transparent">
                    <p className="text-white font-black text-lg tracking-tight">{processSteps[activeProcessStep].title}</p>
                    <p className="text-slate-400 text-xs mt-0.5">{processSteps[activeProcessStep].desc}</p>
                  </div>
                </div>
              </div>

            </div>

          </div>
        </section>

        {/* ── BLOG SECTION ── */}
        <section className="py-24 bg-white border-t border-slate-100 w-full">
          <div className="w-full px-6 md:px-10 lg:px-12 space-y-12">

            {/* Header Row — left heading + right "More blogs" link */}
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 w-full">
              <div className="space-y-3">
                <span className="text-sm font-black uppercase tracking-widest text-black block mb-2">
                  Blog & Insights
                </span>
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                  Expert Marketing Ideas <br className="hidden md:block" />To Fuel Your Growth
                </h2>
              </div>
              <Link href="/blog" className="inline-flex items-center gap-2 px-6 py-3 rounded-full border-2 border-slate-200 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:border-slate-350 transition-all shrink-0">
                Read All Articles <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Blog Cards Grid — 4 columns */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full">

              {/* Card 1 */}
              {blogs[0] && (
                <Link href={`/blog/${blogs[0].id}`} className="group cursor-pointer">
                  <div className="relative h-full min-h-[380px] rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] border border-slate-100 flex flex-col justify-end">
                    <img src={blogs[0].image} alt={blogs[0].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

                    {/* Top badge */}
                    <div className="absolute top-5 left-5">
                      <span className="bg-blue-600 text-white text-[9px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full">
                        {blogs[0].category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="relative z-10 p-6 space-y-2">
                      <span className="text-blue-300 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {blogs[0].readTime}
                      </span>
                      <h3 className="text-white font-extrabold text-base leading-snug line-clamp-3">
                        {blogs[0].title}
                      </h3>
                      <p className="text-slate-300 text-xs leading-relaxed line-clamp-2">
                        {blogs[0].excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              )}

              {/* Card 2 */}
              {blogs[1] && (
                <Link href={`/blog/${blogs[1].id}`} className="group cursor-pointer">
                  <div className="relative h-full min-h-[380px] rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] border border-slate-100 flex flex-col justify-end">
                    <img src={blogs[1].image} alt={blogs[1].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-transparent" />

                    <div className="absolute top-5 left-5">
                      <span className="bg-blue-600 text-white text-[9px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full">
                        {blogs[1].category}
                      </span>
                    </div>

                    <div className="relative z-10 p-6 space-y-2">
                      <span className="text-blue-300 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {blogs[1].readTime}
                      </span>
                      <h3 className="text-white font-extrabold text-base leading-snug line-clamp-3">
                        {blogs[1].title}
                      </h3>
                      <p className="text-slate-300 text-xs leading-relaxed line-clamp-2">
                        {blogs[1].excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              )}

              {/* Card 3 */}
              {blogs[2] && (
                <Link href={`/blog/${blogs[2].id}`} className="group cursor-pointer">
                  <div className="relative h-full min-h-[380px] rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] border border-slate-100 flex flex-col justify-end">
                    <img src={blogs[2].image} alt={blogs[2].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-transparent" />

                    <div className="absolute top-5 left-5">
                      <span className="bg-blue-600 text-white text-[9px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full">
                        {blogs[2].category}
                      </span>
                    </div>

                    <div className="relative z-10 p-6 space-y-2">
                      <span className="text-blue-300 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {blogs[2].readTime}
                      </span>
                      <h3 className="text-white font-extrabold text-base leading-snug line-clamp-3">
                        {blogs[2].title}
                      </h3>
                      <p className="text-slate-300 text-xs leading-relaxed line-clamp-2">
                        {blogs[2].excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              )}

              {/* Card 4 */}
              {blogs[3] && (
                <Link href={`/blog/${blogs[3].id}`} className="group cursor-pointer">
                  <div className="relative h-full min-h-[380px] rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] border border-slate-100 flex flex-col justify-end">
                    <img src={blogs[3].image} alt={blogs[3].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/65 to-transparent" />

                    <div className="absolute top-5 left-5">
                      <span className="bg-blue-600 text-white text-[9px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full">
                        {blogs[3].category}
                      </span>
                    </div>

                    <div className="relative z-10 p-6 space-y-2">
                      <span className="text-blue-300 text-[10px] font-bold uppercase tracking-widest flex items-center gap-1">
                        <Clock className="w-3 h-3" /> {blogs[3].readTime}
                      </span>
                      <h3 className="text-white font-extrabold text-base leading-snug line-clamp-3">
                        {blogs[3].title}
                      </h3>
                      <p className="text-slate-300 text-xs leading-relaxed line-clamp-2">
                        {blogs[3].excerpt}
                      </p>
                    </div>
                  </div>
                </Link>
              )}

            </div>

          </div>
        </section>


        {/* ── TESTIMONIALS SECTION ── */}
        <section id="about" className="py-20 bg-slate-50 border-t border-slate-100 overflow-hidden">
          <div className="w-full px-6 md:px-10 lg:px-12 space-y-12">

            {/* Centered Header */}
            <div className="text-center space-y-4 max-w-2xl mx-auto">
              <span className="text-sm font-black uppercase tracking-widest text-black block mb-2">
                WHAT CLIENTS SAY
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
                Feedback from founders and teams we have worked with
              </h2>
            </div>

            {/* Infinite-loop CSS carousel – 2 cards visible */}
            <style>{`
              @keyframes testiScroll {
                0%   { transform: translateX(0); }
                100% { transform: translateX(-50%); }
              }
              .testi-track {
                display: flex;
                gap: 2rem;
                width: max-content;
                animation: testiScroll 20s linear infinite;
              }
              .testi-track:hover { animation-play-state: paused; }
              .testi-card {
                width: calc(50vw - 4rem);
                max-width: 560px;
                min-width: 340px;
                flex-shrink: 0;
              }
            `}</style>

            <div className="relative">
              <div className="testi-track">
                {/* Render cards twice for seamless infinite loop */}
                {[...customTestimonials, ...customTestimonials].map((test, i) => (
                  <div
                    key={`${test.author}-${i}`}
                    className="testi-card bg-white border border-slate-200 rounded-3xl p-8 flex gap-6 items-center text-left hover:shadow-xl hover:border-blue-200 transition-all duration-300 shadow-md"
                  >
                    {/* Left – Quote & Author */}
                    <div className="flex-1 flex flex-col justify-between min-h-[150px]">
                      <p className="text-slate-600 text-sm md:text-base font-medium leading-relaxed">
                        "{test.quote}"
                      </p>
                      <div className="pt-5 border-t border-slate-100 mt-5">
                        <h4 className="font-extrabold text-slate-900 text-base leading-tight">{test.author}</h4>
                        <p className="text-xs text-slate-400 mt-1">{test.role}</p>
                      </div>
                    </div>
                    {/* Right – Portrait */}
                    <div className="w-24 h-32 md:w-28 md:h-36 rounded-2xl overflow-hidden shrink-0 shadow-md border border-slate-100">
                      <img src={test.image} alt={test.author} className="w-full h-full object-cover" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </section>






        {/* ── BOTTOM CTA SECTION ── */}
        <section className="py-20 bg-white">
          <div className="w-full px-6 md:px-10 lg:px-12">
            <div className="w-full bg-gradient-to-r from-blue-50 via-blue-100/60 to-indigo-50 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden border border-blue-100/50">

              {/* Soft decorative blurs */}
              <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-200/30 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-indigo-200/20 rounded-full blur-[60px]" />

              <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                  Ready to grow your website ?
                </h2>
                <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-xl mx-auto">
                  Bring affiliate partnerships, search, campaigns, and reporting into one practical operating system for measurable growth.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                  <button
                    onClick={() => window.dispatchEvent(new CustomEvent('open-booking-modal'))}
                    className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-base hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 flex items-center justify-center gap-2"
                  >
                    Book a Schedule
                    <ArrowRight className="w-4 h-4" />
                  </button>
                  <Link
                    href="/services"
                    className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 border border-slate-200 rounded-full font-bold text-base hover:bg-slate-50 transition-colors shadow-sm"
                  >
                    Explore Services
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}