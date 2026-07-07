import { useState, useEffect, useRef } from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { ArrowRight, Target, Zap, Shield, Users, BarChart2, Globe, Award, CheckCircle2, Sparkles, HelpCircle, ChevronDown, MessageSquare } from "lucide-react";

function CountUpCard({ end, suffix = "", prefix = "", label, color = "text-blue-400" }) {
  const [count, setCount] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const ref = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !hasStarted) setHasStarted(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [hasStarted]);
  useEffect(() => {
    if (!hasStarted) return;
    let start = null;
    const step = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / 2000, 1);
      const eased = 1 - Math.pow(1 - p, 4);
      setCount(Math.floor(eased * end));
      if (p < 1) requestAnimationFrame(step); else setCount(end);
    };
    requestAnimationFrame(step);
  }, [hasStarted, end]);
  return (
    <div ref={ref} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 text-center hover:bg-white/10 hover:border-white/20 transition-all duration-300">
      <p className={`text-2xl font-black tracking-tight ${color}`}>{prefix}{count.toLocaleString()}{suffix}</p>
      <p className="text-[9px] text-slate-400 font-bold uppercase tracking-wider mt-1">{label}</p>
    </div>
  );
}

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openFaq, setOpenFaq] = useState(0);

  const leaders = [
    {
      name: "Marcus Vance",
      role: "CEO & Co-Founder",
      bio: "Former growth director at Google with 15+ years of digital marketing innovation. Architected revenue engines generating $200M+ in trackable client revenue.",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&q=80",
      linkedin: "#"
    },
    {
      name: "Sarah Sterling",
      role: "Chief of Growth & Strategy",
      bio: "Affiliate network scaling specialist who has directed $100M+ in advertising spend across 40+ verticals for Fortune 500 brands.",
      img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
      linkedin: "#"
    },
    {
      name: "David Reyes",
      role: "VP of Paid Media",
      bio: "Former Meta & Google certified media buyer. Managed $50M+ in annual ad budgets with a blended 4.2x ROAS across all platforms.",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80",
      linkedin: "#"
    },
    {
      name: "Elena Torres",
      role: "Head of Analytics & Attribution",
      bio: "Server-side tracking architect specializing in GTM, Conversion APIs, and custom BI dashboards for multi-channel attribution.",
      img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
      linkedin: "#"
    }
  ];

  const values = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Data-First Decisions",
      desc: "Every campaign, creative, and landing page is validated through data. No gut feelings, no guesses—only measurable outcomes.",
      color: "bg-blue-50 text-blue-600 border-blue-100",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Speed of Execution",
      desc: "We launch campaigns within 48 hours. Our agile sprint model means your growth never waits for approvals or bureaucracy.",
      color: "bg-amber-50 text-amber-600 border-amber-100",
      image: "https://images.unsplash.com/photo-1508962914676-134849a727f0?w=600&q=80"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Margin Protection",
      desc: "Profit comes first. We structure every campaign and partnership to protect your blended margins while scaling acquisition.",
      color: "bg-emerald-50 text-emerald-600 border-emerald-100",
      image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Scale Infrastructure",
      desc: "Our technology stack supports multi-currency, multi-language, and multi-region campaigns from a single unified dashboard.",
      color: "bg-indigo-50 text-indigo-600 border-indigo-100",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&q=80"
    }
  ];

  const faqs = [
    {
      question: "What makes markety different from traditional agencies?",
      answer: "Unlike traditional agencies that focus on vanity metrics like impressions or clicks, markety is entirely performance-driven. We integrate deep server-side tracking, build high-converting custom creatives in-house, and align our goals directly with your bottom-line blended margins."
    },
    {
      question: "How does the 48-hour campaign launch work?",
      answer: "Our agile sprint model is built for speed. Once onboarded, our team executes creative development, copywriting, technical tracking setup, and campaign structure assembly simultaneously, allowing us to push your ads live within 48 hours."
    },
    {
      question: "What is your server-side tracking infrastructure?",
      answer: "We deploy custom GTM server-side containers and Conversions API (CAPI) integrations to capture up to 99.8% of conversion events, bypassing browser ad-blockers and iOS privacy restrictions for absolute data accuracy."
    },
    {
      question: "Do you require long-term contracts?",
      answer: "No, we believe in retaining partners through measurable performance and clear profit generation. We structure rolling monthly partnerships so we are constantly earning your business."
    },
    {
      question: "How do we communicate with our dedicated team?",
      answer: "Every client is set up with a dedicated Slack channel for daily messaging, as well as a weekly strategy review call with full performance breakdowns and roadmap adjustments."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased overflow-x-hidden">
      <Navbar />
      
      <main className="flex-1 pb-20">
        {/* ── SPLIT HERO SECTION (Same as Contact) ── */}
        <section className="relative min-h-[520px] flex items-center justify-start overflow-hidden bg-slate-950 pt-28 pb-16 px-6 md:px-12 border-b border-slate-800">
          {/* Background Image (100% Opacity on Right) */}
          <div 
            className="absolute inset-0 bg-cover bg-right md:bg-right-center bg-no-repeat opacity-100 z-0"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1600&q=80')` }}
          />
          {/* Gradient Overlay: Dark left → Transparent right */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/50 to-transparent z-10" />

          {/* Left-aligned Content */}
          <div className="container mx-auto max-w-6xl relative z-20">
            <div className="max-w-2xl text-left space-y-8">
              <span className="text-sm font-black uppercase tracking-widest text-white block mb-3">
                WHO WE ARE
              </span>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight text-white">
                We Build The Engine <br/>
                <span className="text-blue-400 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">For Your Scale</span>
              </h1>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-xl">
                markety is a premium performance marketing agency. We combine advanced attribution analytics, creative design, and strategic media buying to programmatically scale brands across every digital channel.
              </p>

              {/* Counting Stats Cards Inside Hero */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                {[
                  { end: 200, suffix: "+", label: "Enterprise Clients", color: "text-blue-400" },
                  { end: 200, prefix: "$", suffix: "M+", label: "Revenue Generated", color: "text-cyan-400" },
                  { end: 99, suffix: ".8%", label: "Data Accuracy", color: "text-indigo-400" },
                  { end: 6, suffix: "+", label: "Years Operating", color: "text-emerald-400" }
                ].map((stat, i) => (
                  <CountUpCard key={i} {...stat} />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── MISSION & VISION ── */}
        <section className="container mx-auto px-4 md:px-6 py-20 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 text-left">
              <span className="text-sm font-black uppercase tracking-widest text-black block mb-3">
                OUR MISSION
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                Eliminate marketing guesswork. Replace it with systems.
              </h2>
              <p className="text-slate-500 leading-relaxed text-base">
                We believe that advertising should not be a gamble. By integrating deep analytics with high-converting creative structures, we turn traffic acquisition into a highly predictable revenue center for our partners. Every dollar spent is tracked, attributed, and optimized in real-time.
              </p>
              <p className="text-slate-500 leading-relaxed text-base">
                Our infrastructure is designed for brands that want to scale beyond six and seven figures in monthly revenue—without sacrificing profit margins. We architect growth systems, not one-off campaigns.
              </p>
              <Link href="/services" className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-full font-bold text-sm hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200">
                View Our Services <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200/50 aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&q=80" 
                alt="markety Collaboration" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* ── CORE VALUES ── */}
        <section className="bg-white py-20 border-t border-b border-slate-100">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-sm font-black uppercase tracking-widest text-black block mb-3">
                CORE VALUES
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight">
                What We Stand For
              </h2>
              <p className="text-slate-500 text-sm md:text-base">
                Every decision inside markety is governed by four non-negotiable operating principles.
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, i) => (
                <div key={i} className="group bg-slate-50 rounded-3xl overflow-hidden hover:shadow-2xl hover:-translate-y-2 hover:bg-slate-100/30 hover:scale-[1.02] transition-all duration-500 flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={value.image} 
                      alt={value.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent" />
                  </div>
                  <div className="p-6 text-left space-y-2 flex-1 flex flex-col justify-between">
                    <div className="space-y-1">
                      <h4 className="font-extrabold text-lg text-slate-900 group-hover:text-blue-600 transition-colors">{value.title}</h4>
                      <p className="text-slate-500 text-sm leading-relaxed">{value.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FAQ SECTION ── */}
        <section className="container mx-auto px-4 md:px-6 py-20 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            {/* Left side: Heading and Contact Card */}
            <div className="lg:col-span-5 space-y-6 text-left lg:sticky lg:top-24">
              <span className="text-sm font-black uppercase tracking-widest text-black block mb-3">
                QUESTIONS & ANSWERS
              </span>
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Frequently Asked <br />
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Questions</span>
              </h2>
              <p className="text-slate-500 leading-relaxed text-base">
                Here are answers to the most common questions about partnering with markety for performance marketing and scaling your user acquisition systems.
              </p>
            </div>

            {/* Right side: Accordion list */}
            <div className="lg:col-span-7 space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = openFaq === index;
                return (
                  <div 
                    key={index} 
                    onMouseEnter={() => setOpenFaq(index)}
                    onMouseLeave={() => setOpenFaq(null)}
                    className={`rounded-2xl border transition-all duration-300 overflow-hidden bg-white ${
                      isOpen 
                        ? "border-blue-500/50 shadow-md ring-1 ring-blue-500/10" 
                        : "border-slate-200/80 shadow-sm hover:border-slate-350 hover:shadow-md"
                    }`}
                  >
                    <button 
                      className="flex w-full items-center justify-between text-left p-6 font-bold text-slate-800 focus:outline-none pointer-events-none"
                    >
                      <span className={`text-base md:text-lg transition-colors duration-200 ${isOpen ? "text-blue-600" : "text-slate-900"}`}>
                        {faq.question}
                      </span>
                      <div className={`p-1.5 rounded-lg transition-colors duration-200 ${isOpen ? "bg-blue-50 text-blue-600" : "bg-slate-50 text-slate-400"}`}>
                        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
                      </div>
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 pt-1 border-t border-slate-100 bg-slate-50/30">
                        <p className="text-slate-600 text-sm leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── LEADERSHIP TEAM ── */}
        <section className="bg-slate-950 py-20 border-t border-slate-800">
          <div className="container mx-auto px-4 md:px-6 max-w-6xl space-y-12 text-center">
            <div className="space-y-3 max-w-2xl mx-auto">
              <span className="text-sm font-black uppercase tracking-widest text-blue-300 block mb-3">
                LEADERSHIP
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight">Meet The Leadership</h2>
              <p className="text-slate-400 text-sm md:text-base">
                Industry veterans dedicated to delivering programmatic growth blueprinting for enterprise brands.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {leaders.map((leader, i) => (
                <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-6 flex flex-col items-center text-center space-y-4 hover:border-blue-500/30 hover:bg-white/10 transition-all duration-300">
                  <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-blue-500/30">
                    <img 
                      src={leader.img} 
                      alt={leader.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-black text-white text-base">{leader.name}</h3>
                    <p className="text-blue-400 font-bold text-xs uppercase tracking-wider mt-1">{leader.role}</p>
                  </div>
                  <p className="text-slate-400 text-xs leading-relaxed">{leader.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WHY CHOOSE US ── */}
        <section className="container mx-auto px-4 md:px-6 py-20 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-slate-200/50 aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=80" 
                alt="Strategy session" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6 text-left">
              <span className="text-sm font-black uppercase tracking-widest text-black block mb-3">
                WHY MARKETY
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight leading-tight">
                What Makes Us Different
              </h2>
              <div className="space-y-4">
                {[
                  "Full-stack marketing team: strategists, media buyers, designers, and analysts",
                  "Proprietary server-side tracking infrastructure for 99.8% attribution accuracy",
                  "Real-time profitability dashboards showing blended CAC, LTV, and true ROAS",
                  "No long-term contracts—we retain clients through performance, not obligations",
                  "Dedicated Slack channel with your team for same-day communication",
                  "Weekly strategy calls with creative performance breakdowns"
                ].map((point, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                    <p className="text-slate-700 text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section className="py-10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto bg-gradient-to-r from-blue-50 via-blue-100/60 to-indigo-50 rounded-3xl p-12 md:p-16 text-center relative overflow-hidden border border-blue-100/50">
              <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-blue-200/30 rounded-full blur-[80px]" />
              <div className="absolute bottom-0 right-0 w-[250px] h-[250px] bg-indigo-200/20 rounded-full blur-[60px]" />
              <div className="relative z-10 space-y-6 max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                  Ready to Partner With markety?
                </h2>
                <p className="text-slate-500 text-base md:text-lg leading-relaxed">
                  Let's evaluate your existing analytics tracking and design a custom campaign architecture built to scale.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
                  <button
                    onClick={() => window.dispatchEvent(new CustomEvent('open-booking-modal'))}
                    className="w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-base hover:bg-blue-700 transition-colors shadow-lg shadow-blue-200 flex items-center justify-center gap-2"
                  >
                    Book a Schedule <ArrowRight className="w-4 h-4" />
                  </button>
                  <Link href="/services" className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 border border-slate-200 rounded-full font-bold text-base hover:bg-slate-50 transition-colors shadow-sm text-center">
                    View Services
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
