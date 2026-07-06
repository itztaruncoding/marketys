import { useEffect, useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ChevronDown, CircleHelp, Sparkles, HelpCircle, Mail, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";
import checkmarkIcon from "@/assets/checkmark.svg";
import lightningIcon from "@/assets/lightning.svg";

const faqs = [{
  question: "How do I find the best deals on MarketyDeals?",
  answer: "You can browse by category, compare tools, and use the curated deal listings to find the most relevant offers for your business. We filter out expired codes to ensure every deal shown is fully active."
}, {
  question: "Are the reviews and deals verified?",
  answer: "Yes. Every deal, discount percentage, and review summary is manually verified by our team. We cross-reference pricing with original vendor sites to ensure the transparency and accuracy of all savings."
}, {
  question: "Can I use these tools for my agency or business?",
  answer: "Absolutely. The platform lists tools suitable for solo founders, growing digital agencies, ecommerce store owners, and corporate creative teams looking to optimize their operational overhead."
}, {
  question: "Do you update offers frequently?",
  answer: "Yes. New deals, discounts, and tool reviews are uploaded regularly. We constantly audit existing listings so that expired promos are removed and new software categories are introduced."
}, {
  question: "Is there any cost to use MarketyDeals?",
  answer: "No. MarketyDeals is 100% free to use. We aggregate the discounts and direct you to the official vendor page to secure the deal. There are no hidden fees or markups."
}, {
  question: "How do I redeem a coupon code?",
  answer: "Click on any tool or deal card to view its detailed view. Copy the displayed coupon code and click the official link to go to the merchant checkout page. Paste the code into the promo field at checkout to apply your savings."
}, {
  question: "What happens if a coupon code doesn't work?",
  answer: "While we audit promo links daily, some merchant codes might expire early. If a code fails, please let us know using our contact details in the footer support popup, and we will update it immediately."
}, {
  question: "How do you choose which tools to list?",
  answer: "We focus on high-utility marketing, SEO, workspace, design, and hosting solutions that have proven track records and high user ratings. We prioritize tools that offer substantial savings."
}, {
  question: "Can I submit a discount deal or promo code?",
  answer: "Absolutely! If you represent a software vendor or found an active discount code, click the 'Submit Deal' option in the footer to send us the details for verification."
}, {
  question: "Do you offer customer support for the software listed?",
  answer: "No, we only aggregate promotional deals and reviews. For billing, hosting, or technical support, please contact the specific software merchant's official support channels directly."
}];
export default function FAQ() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [openIndex, setOpenIndex] = useState(0);
  return <div className="min-h-screen flex flex-col bg-background text-foreground">{<Navbar />}{<main className="flex-1 pt-32 pb-24 relative overflow-hidden">{// Grid background pattern
      <div className="absolute inset-0 opacity-[0.4] mix-blend-overlay pointer-events-none" style={{
        backgroundImage: "linear-gradient(#cbd5e1 1px, transparent 1px), linear-gradient(90deg, #cbd5e1 1px, transparent 1px)",
        backgroundSize: "40px 40px"
      }} />}{// Soft mesh gradients for light mode
      <div className="absolute top-[-10%] left-[-10%] w-[55%] h-[60%] bg-gradient-to-br from-blue-100 to-purple-50 rounded-full blur-[130px] pointer-events-none opacity-80" />}{<div className="absolute bottom-10 right-[-10%] w-[50%] h-[50%] bg-purple-50/50 rounded-full blur-[140px] pointer-events-none opacity-60" />}{<div className="container mx-auto px-4 md:px-6 relative z-10 space-y-16">{// Header Section (Split Layout)
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">{<div className="lg:col-span-7 space-y-6">{<div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/40 border border-blue-200 dark:border-blue-800 text-blue-700 dark:text-blue-400 font-bold text-xs uppercase tracking-widest">{<CircleHelp className="w-4 h-4" />}Help Portal</div>}{<h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-slate-900 dark:text-slate-100">Frequently Asked {<span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Questions</span>}</h1>}{<p className="text-base md:text-lg text-slate-550 dark:text-slate-400 max-w-xl leading-relaxed text-slate-500">Got questions about how MarketyDeals works? Here are answers to common questions about finding and redeeming deals, coupon verification, summaries, and our agency tool partnerships.</p>}</div>}{<div className="lg:col-span-5 hidden lg:block relative h-[340px]">{<div className="absolute inset-0 flex items-center justify-center">{<motion.div animate={{
                y: [0, -8, 0]
              }} transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }} className="absolute top-4 left-4 w-[240px] bg-card p-4 rounded-2xl border border-border shadow-lg flex items-center gap-3.5">{<div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/40 flex items-center justify-center p-2"><img src={checkmarkIcon} className="w-6 h-6" alt="check" /></div>}{<div>{<h4 className="font-black text-slate-800 dark:text-slate-200 text-xs">Deals Verified</h4>}{<p className="text-[10px] text-slate-500 dark:text-slate-450">Checked manually every 24h</p>}</div>}</motion.div>}{<motion.div animate={{
                x: [0, 8, 0]
              }} transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }} className="absolute top-1/2 -translate-y-1/2 left-24 w-[240px] bg-card p-4 rounded-2xl border border-border shadow-lg flex items-center gap-3.5 z-10">{<div className="w-10 h-10 rounded-xl bg-purple-50 dark:bg-purple-950/40 flex items-center justify-center p-2 text-purple-600">{<MessageSquare className="w-5 h-5" />}</div>}{<div>{<h4 className="font-black text-slate-800 dark:text-slate-200 text-xs">Active Q&A</h4>}{<p className="text-[10px] text-slate-500 dark:text-slate-450">Verified expert answers</p>}</div>}</motion.div>}{<motion.div animate={{
                y: [0, 8, 0]
              }} transition={{
                duration: 4.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }} className="absolute bottom-4 right-4 w-[240px] bg-card p-4 rounded-2xl border border-border shadow-lg flex items-center gap-3.5">{<div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/40 flex items-center justify-center p-2"><img src={lightningIcon} className="w-6 h-6" alt="lightning" /></div>}{<div>{<h4 className="font-black text-slate-800 dark:text-slate-200 text-xs">Instant Copy</h4>}{<p className="text-[10px] text-slate-500 dark:text-slate-450">Click card to save promo code</p>}</div>}</motion.div>}</div>}</div>}</div>}{// Accordion Section
        <div className="max-w-3xl mx-auto space-y-4">{faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return <div className={`rounded-2xl border transition-all duration-300 overflow-hidden bg-card ${isOpen ? "border-blue-500/50 shadow-md ring-1 ring-blue-500/10" : "border-border shadow-sm hover:border-slate-400/50 hover:shadow-md"}`}>{<button className="flex w-full items-center justify-between text-left p-6" onClick={() => setOpenIndex(isOpen ? null : index)}>{<span className={`text-lg font-bold transition-colors ${isOpen ? "text-blue-600" : "text-slate-800 dark:text-slate-200"}`}>{item.question}</span>}{<ChevronDown className={`w-5 h-5 transition-transform ${isOpen ? "rotate-180 text-blue-600" : "text-slate-400 dark:text-slate-500"}`} />}</button>}{isOpen && <div className="px-6 pb-6 pt-1 border-t border-border bg-muted/20">{<p className="text-slate-600 dark:text-slate-350 text-sm leading-relaxed">{item.answer}</p>}</div>}</div>;
          })}</div>}</div>}</main>}{<Footer />}</div>;
}