import { useQuery } from "@tanstack/react-query";
import { fetchDocument } from "@/lib/firebase";

const COLLECTION = "pages";

const HARDCODED_PAGES = {
  how: {
    badge: "Process",
    title: "How markety Works",
    intro: "A simple operating model for turning strategy, campaigns, analytics, and ongoing optimization into one clear growth workflow.",
    icon: "Sparkles",
    sections: [
      { title: "1. Strategy Discovery", body: "We review your offer, audience, margins, existing traffic, tracking setup, and growth bottlenecks before recommending channels." },
      { title: "2. Campaign Build", body: "Our team prepares funnels, creative angles, landing-page recommendations, audience structures, affiliate rules, and reporting dashboards." },
      { title: "3. Launch And Optimize", body: "After launch, we monitor conversion quality, cost trends, creative performance, and revenue attribution so the plan improves every week." },
      { title: "4. Scale What Works", body: "Winning channels get more budget, stronger creatives, expanded targeting, and better partner placements while weak paths are corrected quickly." },
    ],
  },
  privacy: {
    badge: "Data Protection",
    title: "Privacy Policy",
    intro: "markety treats client data, campaign metrics, contact details, and business information as confidential operational assets.",
    icon: "ShieldCheck",
    sections: [
      { title: "Information We Collect", body: "We may collect form submissions, email addresses, phone numbers, company details, campaign requirements, and performance information shared during consultations." },
      { title: "How We Use Information", body: "Information is used to respond to inquiries, prepare marketing plans, manage campaigns, improve service quality, and provide support." },
      { title: "Data Security", body: "We use reasonable administrative and technical safeguards to protect submitted information from unauthorized access, misuse, or disclosure." },
      { title: "Your Choices", body: "You can contact our support team to request updates, corrections, or removal of your submitted contact information." },
    ],
  },
  terms: {
    badge: "Service Terms",
    title: "Terms & Conditions",
    intro: "These terms explain the basic expectations for using the markety website and requesting marketing services.",
    icon: "FileText",
    sections: [
      { title: "Website Use", body: "The website content is provided for general information about markety services and should not be treated as a guaranteed business result." },
      { title: "Campaign Results", body: "Marketing performance can vary based on offer quality, budget, market demand, tracking accuracy, creative testing, and platform conditions." },
      { title: "Client Responsibilities", body: "Clients are responsible for providing accurate business information, access, approvals, budgets, and any required legal or compliance guidance." },
      { title: "Changes", body: "markety may update website content, service descriptions, or these terms when needed to reflect operational changes." },
    ],
  },
  support: {
    badge: "Support",
    title: "Contact Support",
    intro: "Need help with a project, inquiry, booking, or campaign question? Our support details are available below.",
    icon: "Mail",
    sections: [
      { title: "Email Support", body: "Send your question to growth@markety.agency with your name, company, and the service you are asking about." },
      { title: "Phone Support", body: "Call +91 77730 00000 during client support hours for project or consultation help." },
      { title: "Office", body: "markety Central Office, National Highway 46, Link Road, Betul, Madhya Pradesh, India - 460001." },
      { title: "Response Time", body: "Most website inquiries are reviewed during business hours, Monday to Saturday, 10AM to 7PM IST." },
    ],
  },
  disclaimer: {
    badge: "Important",
    title: "Disclaimer",
    intro: "The markety website explains service capabilities, examples, and marketing concepts for informational purposes.",
    icon: "HelpCircle",
    sections: [
      { title: "No Guaranteed Outcome", body: "Any performance examples, numbers, or projections are illustrative and do not guarantee the same results for every client." },
      { title: "Platform Changes", body: "Advertising platforms, tracking rules, auction costs, and search algorithms can change without notice and may affect performance." },
      { title: "Business Decisions", body: "You should review strategy, budgets, compliance needs, and commercial risk before approving any campaign or service plan." },
      { title: "Third-Party Links", body: "External websites and social platforms linked from markety are managed by their respective owners." },
    ],
  },
};

export function usePage(pageId) {
  return useQuery({
    queryKey: ["marketys-page", pageId],
    queryFn: async () => {
      const hardcoded = HARDCODED_PAGES[pageId] || null;
      if (!pageId) return hardcoded;
      try {
        const remote = await fetchDocument(COLLECTION, pageId);
        if (remote) {
          return {
            ...hardcoded,
            ...remote,
            sections: remote.sections || hardcoded?.sections || [],
          };
        }
      } catch {}
      return hardcoded;
    },
    enabled: !!pageId,
    staleTime: 0,
    refetchOnMount: true,
    refetchOnWindowFocus: false,
  });
}
