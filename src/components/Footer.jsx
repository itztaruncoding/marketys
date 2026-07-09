import { Link } from "wouter";
import { Mail, MapPin, Phone } from "lucide-react";
import { useFooter } from "@/services/useFooter";

const FALLBACK_SOCIAL = [
  { icon: "twitter", label: "Twitter", href: "https://twitter.com" },
  { icon: "linkedin", label: "LinkedIn", href: "https://linkedin.com" },
  { icon: "facebook", label: "Facebook", href: "https://facebook.com" },
  { icon: "youtube", label: "YouTube", href: "https://youtube.com" },
];

const SOCIAL_ICONS = {
  twitter: ({ className }) => <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
  linkedin: ({ className }) => <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>,
  facebook: ({ className }) => <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>,
  youtube: ({ className }) => <svg className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>,
};

const DEFAULT_CONTACT = [
  { icon: Mail, label: "growth@velox.agency", href: "mailto:growth@velox.agency" },
  { icon: Phone, label: "+91 77730 00000", href: "tel:+917773000000" },
  { icon: MapPin, label: "Betul, Madhya Pradesh", href: "/contact" },
];

export function Footer() {
  const { data: footerData } = useFooter();
  const footerGroups = footerData?.groups || [
    { title: "Solutions", links: [{ label: "Digital Marketing", href: "/services#digital-marketing" }, { label: "Affiliate Programs", href: "/services#affiliate-marketing" }, { label: "Digital Advertising", href: "/services#paid-advertisement" }, { label: "Growth Plans", href: "/contact" }] },
    { title: "Resources", links: [{ label: "Blog & Guides", href: "/blog" }, { label: "Client Reviews", href: "/reviews" }, { label: "FAQ", href: "/about#faq" }, { label: "Contact", href: "/contact" }] },
    { title: "Company", links: [{ label: "About Us", href: "/about" }, { label: "How It Works", href: "/how-it-works" }, { label: "Privacy Policy", href: "/privacy-policy" }, { label: "Terms & Conditions", href: "/terms-and-conditions" }, { label: "Contact Support", href: "/support" }] },
  ];
  const contactItems = footerData?.contact ? [
    { icon: Mail, label: footerData.contact.email || "growth@velox.agency", href: `mailto:${footerData.contact.email || "growth@velox.agency"}` },
    { icon: Phone, label: footerData.contact.phone || "+91 77730 00000", href: `tel:${(footerData.contact.phone || "+91 77730 00000").replace(/\s/g, "")}` },
    { icon: MapPin, label: footerData.contact.address || "Betul, Madhya Pradesh", href: "/contact" },
  ] : DEFAULT_CONTACT;
  const socialLinks = footerData?.social?.length > 0 ? footerData.social : FALLBACK_SOCIAL;
  const copyright = footerData?.copyright || "Copyright 2026 markety. All Rights Reserved.";

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
                const Icon = SOCIAL_ICONS[item.icon?.toLowerCase()];
                return (
                  <a
                    key={item.label || item.platform}
                    href={item.href || item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.label || item.platform}
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition-colors text-white"
                  >
                    {Icon ? <Icon className="w-4 h-4" /> : <span className="w-4 h-4" />}
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
          <p>{copyright}</p>
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
