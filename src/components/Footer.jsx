import { Link } from "wouter";
import { Facebook, Linkedin, Mail, MapPin, Phone, Twitter, Youtube } from "lucide-react";

const footerGroups = [
  {
    title: "Solutions",
    links: [
      { label: "Digital Marketing", href: "/services#digital-marketing" },
      { label: "Affiliate Programs", href: "/services#affiliate-marketing" },
      { label: "Digital Advertising", href: "/services#paid-advertisement" },
      { label: "Growth Plans", href: "/contact" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Blog & Guides", href: "/blog" },
      { label: "Client Reviews", href: "/reviews" },
      { label: "FAQ", href: "/faq" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "How It Works", href: "/how-it-works" },
      { label: "Privacy Policy", href: "/privacy-policy" },
      { label: "Terms & Conditions", href: "/terms-and-conditions" },
      { label: "Contact Support", href: "/support" },
    ],
  },
];

const contactItems = [
  { icon: Mail, label: "growth@velox.agency", href: "mailto:growth@velox.agency" },
  { icon: Phone, label: "+91 77730 00000", href: "tel:+917773000000" },
  { icon: MapPin, label: "Betul, Madhya Pradesh", href: "/contact" },
];

const socialLinks = [
  { icon: Twitter, label: "Twitter", href: "https://twitter.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
  { icon: Youtube, label: "YouTube", href: "https://youtube.com" },
];

export function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 text-slate-300 pt-20 pb-10">
      <div className="w-full px-6 md:px-10 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-14">
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-flex items-center">
              <span className="text-3xl font-black tracking-tight text-white">market<span className="text-blue-500">y</span></span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Performance marketing, affiliate growth, paid advertising, and analytics systems built to help brands scale with clear reporting.
            </p>

            <div className="space-y-3">
              {contactItems.map((item) => {
                const Icon = item.icon;
                const content = (
                  <>
                    <Icon className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>{item.label}</span>
                  </>
                );

                return item.href.startsWith("/") ? (
                  <Link key={item.label} href={item.href} className="flex items-center gap-3 text-sm text-slate-400 hover:text-blue-400 transition-colors">
                    {content}
                  </Link>
                ) : (
                  <a key={item.label} href={item.href} className="flex items-center gap-3 text-sm text-slate-400 hover:text-blue-400 transition-colors">
                    {content}
                  </a>
                );
              })}
            </div>

            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((item) => {
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-colors text-white"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-10">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h4 className="text-lg font-bold mb-6 text-white">{group.title}</h4>
                <ul className="space-y-4 text-sm">
                  {group.links.map((link) => (
                    <li key={link.href}>
                      <Link href={link.href} className="text-slate-400 hover:text-blue-400 transition-colors">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500">
          <p>Copyright 2026 markety. All Rights Reserved.</p>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link href="/disclaimer" className="hover:text-white transition-colors">
              Disclaimer
            </Link>
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy
            </Link>
            <Link href="/terms-and-conditions" className="hover:text-white transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
