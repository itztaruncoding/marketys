import { useEffect } from "react";
import { ArrowRight, CheckCircle2, Sparkles, ShieldCheck, FileText, Mail, HelpCircle } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { usePage } from "@/services/usePage";

const ICON_MAP = { Sparkles, ShieldCheck, FileText, Mail, HelpCircle };

export default function FooterInfo({ page = "how" }) {
  const { data: content, isLoading } = usePage(page);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const Icon = content ? ICON_MAP[content.icon] || ICON_MAP.Sparkles : null;

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
              {isLoading ? (
                <div className="h-6 w-32 animate-pulse rounded bg-slate-700" />
              ) : (
                <span className="text-xs font-black uppercase tracking-widest text-blue-300 block mb-3">
                  {content?.badge}
                </span>
              )}
              {isLoading ? (
                <div className="h-12 w-96 animate-pulse rounded bg-slate-700" />
              ) : (
                <h1 className="text-4xl md:text-6xl font-black tracking-tight leading-tight text-white">
                  {content?.title}
                </h1>
              )}
              {isLoading ? (
                <div className="h-6 w-[500px] animate-pulse rounded bg-slate-700" />
              ) : (
                <p className="text-slate-300 text-base md:text-lg leading-relaxed max-w-xl">
                  {content?.intro}
                </p>
              )}
            </div>
          </div>
        </section>

        <section className="container mx-auto px-4 md:px-6 max-w-6xl py-16">
          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-6">
              {(content?.sections || []).map((section) => (
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
