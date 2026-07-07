import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, FileText, HelpCircle, Mail, ShieldCheck, Sparkles } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const pages = {
  how: {
    badge: "Process",
    title: "How markety Works",
    intro: "A simple operating model for turning strategy, campaigns, analytics, and ongoing optimization into one clear growth workflow.",
    icon: Sparkles,
    sections: [
      {
        title: "1. Strategy Discovery",
        body: "We review your offer, audience, margins, existing traffic, tracking setup, and growth bottlenecks before recommending channels.",
      },
      {
        title: "2. Campaign Build",
        body: "Our team prepares funnels, creative angles, landing-page recommendations, audience structures, affiliate rules, and reporting dashboards.",
      },
      {
        title: "3. Launch And Optimize",
        body: "After launch, we monitor conversion quality, cost trends, creative performance, and revenue attribution so the plan improves every week.",
      },
      {
        title: "4. Scale What Works",
        body: "Winning channels get more budget, stronger creatives, expanded targeting, and better partner placements while weak paths are corrected quickly.",
      },
    ],
  },
  privacy: {
    badge: "Data Protection",
    title: "Privacy Policy",
    intro: "markety treats client data, campaign metrics, contact details, and business information as confidential operational assets.",
    icon: ShieldCheck,
    sections: [
      {
        title: "Information We Collect",
        body: "We may collect form submissions, email addresses, phone numbers, company details, campaign requirements, and performance information shared during consultations.",
      },
      {
        title: "How We Use Information",
        body: "Information is used to respond to inquiries, prepare marketing plans, manage campaigns, improve service quality, and provide support.",
      },
      {
        title: "Data Security",
        body: "We use reasonable administrative and technical safeguards to protect submitted information from unauthorized access, misuse, or disclosure.",
      },
      {
        title: "Your Choices",
        body: "You can contact our support team to request updates, corrections, or removal of your submitted contact information.",
      },
    ],
  },
  terms: {
    badge: "Service Terms",
    title: "Terms & Conditions",
    intro: "These terms explain the basic expectations for using the markety website and requesting marketing services.",
    icon: FileText,
    sections: [
      {
        title: "Website Use",
        body: "The website content is provided for general information about markety services and should not be treated as a guaranteed business result.",
      },
      {
        title: "Campaign Results",
        body: "Marketing performance can vary based on offer quality, budget, market demand, tracking accuracy, creative testing, and platform conditions.",
      },
      {
        title: "Client Responsibilities",
        body: "Clients are responsible for providing accurate business information, access, approvals, budgets, and any required legal or compliance guidance.",
      },
      {
        title: "Changes",
        body: "markety may update website content, service descriptions, or these terms when needed to reflect operational changes.",
      },
    ],
  },
  support: {
    badge: "Support",
    title: "Contact Support",
    intro: "Need help with a project, inquiry, booking, or campaign question? Our support details are available below.",
    icon: Mail,
    sections: [
      {
        title: "Email Support",
        body: "Send your question to growth@markety.agency with your name, company, and the service you are asking about.",
      },
      {
        title: "Phone Support",
        body: "Call +91 77730 00000 during client support hours for project or consultation help.",
      },
      {
        title: "Office",
        body: "markety Central Office, National Highway 46, Link Road, Betul, Madhya Pradesh, India - 460001.",
      },
      {
        title: "Response Time",
        body: "Most website inquiries are reviewed during business hours, Monday to Saturday, 10AM to 7PM IST.",
      },
    ],
  },
  disclaimer: {
    badge: "Important",
    title: "Disclaimer",
    intro: "The markety website explains service capabilities, examples, and marketing concepts for informational purposes.",
    icon: HelpCircle,
    sections: [
      {
        title: "No Guaranteed Outcome",
        body: "Any performance examples, numbers, or projections are illustrative and do not guarantee the same results for every client.",
      },
      {
        title: "Platform Changes",
        body: "Advertising platforms, tracking rules, auction costs, and search algorithms can change without notice and may affect performance.",
      },
      {
        title: "Business Decisions",
        body: "You should review strategy, budgets, compliance needs, and commercial risk before approving any campaign or service plan.",
      },
      {
        title: "Third-Party Links",
        body: "External websites and social platforms linked from markety are managed by their respective owners.",
      },
    ],
  },
};

export default function FooterInfo({ page = "how" }) {
  const content = pages[page] || pages.how;
  const Icon = content.icon;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased overflow-x-hidden">
      <Navbar />
      <main className="flex-1">
        <section className="relative min-h-[460px] flex items-center overflow-hidden bg-slate-950 pt-28 pb-16 px-6 md:px-12 border-b border-slate-800">
          <div
            className="absolute inset-0 bg-cover bg-right md:bg-center opacity-80"
            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1600&q=80')" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/70 to-slate-950/20" />
          <div className="container mx-auto max-w-6xl relative z-10">
            <div className="max-w-2xl text-left space-y-7">
              <span className="text-xs font-black uppercase tracking-widest text-blue-300 block mb-3">
                {content.badge}
              </span>
              <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight text-white">
                {content.title}
              </h1>
              <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-xl">
                {content.intro}
              </p>
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 md:px-6 max-w-6xl py-16">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
              {content.sections.map((section) => (
                <article key={section.title} className="bg-white border border-slate-200 rounded-3xl p-6 shadow-sm hover:shadow-md hover:border-blue-200 transition-all">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
                    <CheckCircle2 className="w-5 h-5" />
                  </div>
                  <h2 className="text-lg font-black text-slate-900 mb-2">{section.title}</h2>
                  <p className="text-sm text-slate-500 leading-relaxed">{section.body}</p>
                </article>
              ))}
            </div>

            <aside className="lg:col-span-4 bg-slate-950 text-white rounded-3xl p-7 lg:sticky lg:top-28">
              <h3 className="text-xl font-black mb-3">Need direct help?</h3>
              <p className="text-sm text-slate-400 leading-relaxed mb-6">
                Send us your project details and our team will help you choose the right service path.
              </p>
              <button
                onClick={() => window.dispatchEvent(new CustomEvent('open-booking-modal'))}
                className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-sm transition-colors"
              >
                Book a Schedule
                <ArrowRight className="w-4 h-4" />
              </button>
            </aside>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
