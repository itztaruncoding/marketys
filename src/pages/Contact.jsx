import { useState, useEffect } from "react";
import { Link } from "wouter";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, Mail, Phone, MapPin, Clock, Send, CheckCircle2, 
  Sparkles, Globe, MessageSquare, FileText, Check, AlertCircle 
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    budget: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData({ ...formData });
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      budget: "",
      message: ""
    });
    setSubmitted(false);
    setSubmittedData(null);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased overflow-x-hidden">
      <Navbar />
      
      <main className="flex-1 pb-20">
        
        {/* ── PREMIUM SPLIT HERO SECTION WITH DUAL OVERLAY ── */}
        <section className="relative min-h-[520px] flex items-center justify-start overflow-hidden bg-slate-950 pt-28 pb-16 px-6 md:px-12 border-b border-slate-800">
          {/* Light Architectural Glass Background Image (100% Opacity on the Right) */}
          <div 
            className="absolute inset-0 bg-cover bg-right md:bg-right-center bg-no-repeat opacity-100 z-0"
            style={{ backgroundImage: `url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80')` }}
          />

          {/* Gradient Overlay: Dark slate/black on the left fading to transparent on the right */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/50 to-transparent z-10" />

          {/* Left-aligned Content Container in the dark zone */}
          <div className="container mx-auto max-w-6xl relative z-20">
            <div className="max-w-2xl text-left space-y-8">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-[10px] font-bold bg-blue-500/20 text-blue-300 uppercase tracking-widest border border-blue-500/30">
                <MessageSquare className="w-3.5 h-3.5 text-blue-400" /> CLIENT ENGAGEMENT PORTAL
              </span>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight text-white">
                Let's Start Your <br/>
                <span className="text-blue-400 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Growth Conversation</span>
              </h1>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-xl">
                Schedule a strategy review. Get direct insights on channels, affiliate programs, and margins optimization setup from our expert growth desk.
              </p>

              {/* ── CONTACT INFO CARDS INSIDE HERO (Dark Glassmorphism) ── */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {[
                  { icon: <Mail className="w-5 h-5" />, label: "Email Strategy Desk", value: "growth@velox.agency", accent: "text-blue-400 bg-blue-500/15 border-blue-500/25" },
                  { icon: <Phone className="w-5 h-5" />, label: "Call Growth Desk", value: "+91 77730 00000", accent: "text-emerald-400 bg-emerald-500/15 border-emerald-500/25" },
                  { icon: <MapPin className="w-5 h-5" />, label: "Head Office Address", value: "NH-46, Link Road, Betul, MP 460001", accent: "text-indigo-400 bg-indigo-500/15 border-indigo-500/25" },
                  { icon: <Clock className="w-5 h-5" />, label: "Client Support Hours", value: "Mon-Sat, 10AM-7PM IST", accent: "text-amber-400 bg-amber-500/15 border-amber-500/25" }
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

        {/* ── MAIN INTERACTIVE LAYOUT ── */}
        <section className="container mx-auto px-4 md:px-6 max-w-6xl py-16">
          <div className="grid lg:grid-cols-12 gap-10">

            {/* ── LEFT: FORM / DYNAMIC SUBMISSION RESPONSE PANEL ── */}
            <div className="lg:col-span-7 bg-white border border-slate-200 rounded-[2.5rem] p-8 md:p-12 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-blue-600" />
              
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="contact-form"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="space-y-8"
                  >
                    <div className="space-y-2 text-left">
                      <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
                        Launch Your Growth Project
                      </h2>
                      <p className="text-slate-500 text-sm">Please fill out the form parameters below to verify channel setup priority.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2 text-left">
                          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">Full Name *</label>
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            placeholder="John Doe"
                            className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                          />
                        </div>
                        <div className="space-y-2 text-left">
                          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">Email Address *</label>
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                            placeholder="john@company.com"
                            className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                          />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-6">
                        <div className="space-y-2 text-left">
                          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">Phone Number *</label>
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            placeholder="+91 XXXXX XXXXX"
                            className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                          />
                        </div>
                        <div className="space-y-2 text-left">
                          <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">Company / Website</label>
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="e.g. www.mybrand.com"
                            className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                          />
                        </div>
                      </div>

                      <div className="space-y-2 text-left">
                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">Estimated Monthly Budget *</label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-sm font-medium text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all cursor-pointer"
                        >
                          <option value="">Choose a budget range...</option>
                          <option value="₹50k - ₹1.5L/mo">₹50,000 - ₹1,50,000 / month</option>
                          <option value="₹1.5L - ₹5L/mo">₹1,50,000 - ₹5,00,000 / month</option>
                          <option value="₹5L - ₹15L/mo">₹5,00,000 - ₹15,00,000 / month</option>
                          <option value="₹15L+/mo">₹15,00,000+ / month (Enterprise)</option>
                        </select>
                      </div>

                      <div className="space-y-2 text-left">
                        <label className="text-xs font-bold text-slate-600 uppercase tracking-wider">Target Channels & Details *</label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          required
                          rows={4}
                          placeholder="Please describe your product catalog, current bottlenecks and target marketing channels..."
                          className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50 text-sm font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-bold text-sm transition-colors shadow-lg shadow-blue-200 flex items-center justify-center gap-2 group"
                      >
                        <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        Submit Growth Inquiry
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success-receipt"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-8 text-left"
                  >
                    {/* Success Header */}
                    <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-6 h-6 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="font-black text-lg text-emerald-950">Inquiry Logged Successfully!</h3>
                        <p className="text-emerald-700 text-xs mt-0.5">Reference ID: VLX-{Math.floor(Math.random() * 90000) + 10000}</p>
                      </div>
                    </div>

                    {/* Submitted Details Review Panel */}
                    <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 space-y-4">
                      <h4 className="text-xs font-black uppercase text-slate-400 tracking-wider flex items-center gap-1.5">
                        <FileText className="w-3.5 h-3.5 text-blue-600" /> Submitted Inbound Parameters
                      </h4>
                      <div className="grid sm:grid-cols-2 gap-4 text-xs font-medium text-slate-700">
                        <div>
                          <p className="text-slate-450 uppercase text-[9px] font-bold">Client Name</p>
                          <p className="font-extrabold text-slate-900 mt-0.5">{submittedData?.name}</p>
                        </div>
                        <div>
                          <p className="text-slate-450 uppercase text-[9px] font-bold">Email Address</p>
                          <p className="font-extrabold text-slate-900 mt-0.5">{submittedData?.email}</p>
                        </div>
                        <div>
                          <p className="text-slate-450 uppercase text-[9px] font-bold">Phone Number</p>
                          <p className="font-extrabold text-slate-900 mt-0.5">{submittedData?.phone}</p>
                        </div>
                        <div>
                          <p className="text-slate-450 uppercase text-[9px] font-bold">Company / Website</p>
                          <p className="font-extrabold text-slate-900 mt-0.5">{submittedData?.company || "Not provided"}</p>
                        </div>
                        <div className="sm:col-span-2">
                          <p className="text-slate-450 uppercase text-[9px] font-bold">Target Monthly Budget</p>
                          <p className="font-extrabold text-blue-600 mt-0.5">{submittedData?.budget}</p>
                        </div>
                        <div className="sm:col-span-2 border-t border-slate-200/80 pt-3">
                          <p className="text-slate-450 uppercase text-[9px] font-bold">Operational Scope Description</p>
                          <p className="text-slate-655 mt-1 leading-relaxed italic bg-white p-3 rounded-lg border border-slate-100">
                            "{submittedData?.message}"
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center gap-2.5 text-slate-700 text-xs font-bold">
                        <Check className="w-4 h-4 text-blue-600" />
                        <span>Growth Analyst assigned to review parameters</span>
                      </div>
                      <div className="flex items-center gap-2.5 text-slate-700 text-xs font-bold">
                        <Check className="w-4 h-4 text-blue-600" />
                        <span>Live Slack workspace invite sent to {submittedData?.email}</span>
                      </div>
                    </div>

                    {/* Reset Button */}
                    <button
                      onClick={handleReset}
                      className="w-full sm:w-auto px-6 py-3 bg-slate-900 text-white rounded-xl font-bold text-xs hover:bg-slate-800 transition-colors"
                    >
                      Submit Another Inquiry
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ── RIGHT: ORIGINAL MAP LOCATION BETUL, MP, INDIA ── */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Embedded Google Map pointing to Betul, Madhya Pradesh, India */}
              <div className="rounded-[2.5rem] overflow-hidden border border-slate-200 shadow-xl h-[360px] relative group">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58941.050478149814!2d77.86901845!3d21.90161475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c2e391ca9fb1f%3A0x2df27f67bf7553f1!2sBetul%2C%20Madhya%20Pradesh%20460001!5e0!3m2!1sen!2sin!4v1715000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="markety Location Betul"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Office Location Description (Betul HQ) */}
              <div className="bg-white border border-slate-200 rounded-[2rem] p-6 space-y-4 shadow-sm text-left">
                <div className="flex items-center gap-2 border-b border-slate-100 pb-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-ping" />
                  <h4 className="font-black text-lg text-slate-900">markety Central Office</h4>
                </div>
                <div className="space-y-3.5 text-xs font-semibold text-slate-600">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                    <p className="leading-relaxed">
                      National Highway 46, Link Road,<br/>
                      Betul, Madhya Pradesh, India - 460001
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-blue-600 shrink-0" />
                    <p>+91 77730 00000</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-blue-600 shrink-0" />
                    <p>growth@velox.agency</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="w-4 h-4 text-blue-600 shrink-0" />
                    <p>www.velox.agency</p>
                  </div>
                </div>
              </div>

              {/* Consultation Invite Banner */}
              <div className="bg-slate-900 text-white rounded-[2rem] p-6 space-y-3 text-left">
                <h5 className="font-extrabold text-sm flex items-center gap-1.5 text-blue-400">
                  <Sparkles className="w-4 h-4" /> Custom ROI Roadmap
                </h5>
                <p className="text-slate-400 text-[11px] leading-relaxed">
                  We review your parameters live and build a channel-by-channel ROI layout audit tailored specifically to your product margins.
                </p>
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}
