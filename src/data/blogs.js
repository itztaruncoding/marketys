const rawBlogs = [
    {
        id: "google-ads-2026-guide",
        title: "The Complete Google Ads Guide for 2026",
        category: "Digital Marketing",
        readTime: "8 min read",
        date: "May 15, 2026",
        image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80",
        excerpt: "Everything you need to know about the latest AI features and campaign types in Google Ads.",
        author: {
            name: "Alex Johnson",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80"
        },
        content: [
            "Google Ads has transformed dramatically in 2026, with AI taking a front seat in campaign management, ad creation, and bidding strategies. If you're still relying on manual CPC bidding or rigid ad groups, you might be leaving money on the table.",
            "The introduction of hyper-personalized Performance Max campaigns has streamlined the way we target audiences across YouTube, Display, Search, Discover, Gmail, and Maps. By feeding the AI with high-quality creative assets and solid conversion data, advertisers are seeing up to a 30% reduction in Cost Per Acquisition (CPA).",
            "In this guide, we dive deep into the new responsive ad features, how to structure your account for AI success, and the exact negative keyword strategies you need to prevent wasted spend. We also explore the new 'Contextual AI' targeting that replaces traditional cookies, ensuring your ads still reach the right people even in a privacy-first web."
        ]
    },
    {
        id: "best-seo-tools",
        title: "10 Best SEO Tools That Actually Work in 2026",
        category: "SEO Tools",
        readTime: "6 min read",
        date: "May 12, 2026",
        image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=80",
        excerpt: "Stop wasting money on redundant software. Here are the only 10 SEO tools you need this year.",
        author: {
            name: "Sarah Mitchell",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
        },
        content: [
            "The SEO landscape is crowded with tools claiming to be 'all-in-one' solutions, but the reality is that most marketers only use 20% of their features. In 2026, efficiency and actionable data are more important than ever.",
            "We've rigorously tested over 50 SEO platforms to bring you the definitive top 10 list. From enterprise giants like Semrush and Ahrefs to specialized AI-driven content optimization tools like Surfer and Clearscope, we break down what each tool does best.",
            "You'll learn how to build a cost-effective SEO stack that covers keyword research, technical audits, backlink analysis, and content generation without overlapping subscriptions. Plus, we highlight a few hidden gems that offer incredible value for bootstrapped startups and solo consultants."
        ]
    },
    {
        id: "affiliate-marketing-beginners",
        title: "Affiliate Marketing for Beginners: Complete 2026 Guide",
        category: "Affiliate Marketing",
        readTime: "10 min read",
        date: "May 10, 2026",
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80",
        excerpt: "Start your affiliate marketing journey with this step-by-step blueprint to your first $1,000.",
        author: {
            name: "Alex Johnson",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80"
        },
        content: [
            "Affiliate marketing remains one of the most accessible business models in 2026, but the tactics that worked five years ago are now obsolete. You can no longer just spam links on forums or rely on thin content sites.",
            "Today, successful affiliate marketing requires building genuine trust with a specific audience. Whether you're leveraging short-form video on TikTok, building an engaged email list, or creating high-quality SEO-optimized reviews, value comes first.",
            "This guide walks you through choosing a profitable niche, finding the right affiliate programs (beyond just Amazon Associates), and building your primary traffic engine. We'll also cover the legal requirements for disclosures and how to track your conversions accurately using modern attribution tools."
        ]
    },
    {
        id: "canva-pro-review",
        title: "Canva Pro Review 2026: Is It Worth the Price?",
        category: "Reviews",
        readTime: "5 min read",
        date: "May 8, 2026",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
        excerpt: "We analyze the new AI Magic Studio features to see if Canva Pro is still the reigning champion.",
        author: {
            name: "Sarah Mitchell",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
        },
        content: [
            "Canva has fundamentally changed how marketing teams operate, bridging the gap between professional designers and everyday marketers. But with the recent price adjustments in 2026, many are asking if the Pro version still justifies the cost.",
            "The short answer: Yes, more than ever. The new Magic Studio features—particularly the AI-driven text-to-image generator, automatic video resizing, and bulk creation tools—save hours of manual work every week. We put these tools to the test against dedicated AI design platforms.",
            "In this review, we break down the ROI of Canva Pro for small businesses, agencies, and enterprise teams. We'll look at the brand kit management, collaborative workflows, and the massive premium asset library to help you decide if it's time to upgrade."
        ]
    },
    {
        id: "tiktok-ads-strategy",
        title: "TikTok Ads Strategy That Generated $1M in Sales",
        category: "Advertising",
        readTime: "7 min read",
        date: "May 6, 2026",
        image: "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=600&q=80",
        excerpt: "A complete teardown of the exact creative and bidding strategy used to scale a DTC brand.",
        author: {
            name: "Alex Johnson",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80"
        },
        content: [
            "TikTok's ad platform has matured significantly, shifting from a pure top-of-funnel awareness play to a powerful direct-response engine. We recently partnered with a mid-sized DTC brand to test a new scaling strategy that resulted in over $1 million in attributed revenue in just 90 days.",
            "The secret wasn't complex bidding or hyper-granular targeting; it was a relentless focus on native, UGC-style creative. We engineered a creative testing framework that allowed us to test 20 new ad variations per week, quickly killing losers and horizontally scaling winners across different audience segments.",
            "This case study reveals the exact hook structures that retained attention in the crucial first 3 seconds, the Spark Ads strategy that built social proof, and how we utilized TikTok's latest automated creative optimization tools to maintain a 3.5x ROAS at scale."
        ]
    },
    {
        id: "email-marketing-tips",
        title: "21 Email Marketing Tips to Boost Open Rates by 50%",
        category: "Email Marketing",
        readTime: "6 min read",
        date: "May 4, 2026",
        image: "https://images.unsplash.com/photo-1596526131083-e8c633064dbc?w=600&q=80",
        excerpt: "Stop landing in the promotions tab. These proven tactics will get your emails opened and clicked.",
        author: {
            name: "Sarah Mitchell",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
        },
        content: [
            "Despite the rise of social media and instant messaging, email marketing consistently delivers the highest ROI of any digital channel. However, changing spam filters and overflowing inboxes mean that traditional batch-and-blast strategies are dead.",
            "To succeed in 2026, you need a hyper-segmented approach. We've compiled 21 actionable tips focused on deliverability, subject line psychology, and engagement triggers. You'll learn why 'plain text' styling often outperforms heavy HTML designs, and how to craft the perfect re-engagement sequence.",
            "From A/B testing preview text to implementing robust DMARC/DKIM authentication, this guide covers both the technical setup and the creative copywriting needed to dominate the inbox."
        ]
    },
    {
        id: "semrush-vs-ahrefs",
        title: "Semrush vs Ahrefs 2026: Which SEO Tool is Better?",
        category: "SEO Tools",
        readTime: "9 min read",
        date: "May 2, 2026",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
        excerpt: "The ultimate showdown between the two giants of the SEO software industry.",
        author: {
            name: "Alex Johnson",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80"
        },
        content: [
            "It's the most common question in digital marketing: Semrush or Ahrefs? Both platforms have evolved into massive, all-encompassing marketing suites, but they still have distinct strengths and weaknesses in 2026.",
            "Ahrefs remains the gold standard for backlink analysis and user-friendly keyword research, offering a cleaner interface and unmatched web crawler capabilities. Semrush, on the other hand, excels in competitive intelligence, PPC data, and comprehensive site auditing, making it a broader tool for full-stack marketers.",
            "We compare their latest features side-by-side, including their new AI writing assistants, technical SEO capabilities, and pricing models, to help you determine which platform aligns best with your specific business goals and budget."
        ]
    },
    {
        id: "facebook-ads-guide",
        title: "Facebook Ads in 2026: Complete Strategy Guide",
        category: "Advertising",
        readTime: "8 min read",
        date: "Apr 30, 2026",
        image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80",
        excerpt: "Master Meta's Advantage+ campaigns and navigate the post-privacy advertising landscape.",
        author: {
            name: "Sarah Mitchell",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
        },
        content: [
            "Meta's advertising ecosystem has largely recovered from the privacy shifts of the early 2020s, thanks to the massive success of Advantage+ shopping campaigns. The platform now relies heavily on machine learning to find your ideal customers.",
            "This comprehensive guide explains how to properly set up your Meta Pixel and Conversions API for maximum data accuracy. We'll show you why broad targeting is outperforming lookalike audiences, and how to structure your campaigns to feed the algorithm effectively.",
            "You'll also get access to our proven creative testing framework, demonstrating how to use dynamic creative formats to let Meta assemble the perfect ad for each individual user, driving down your CPA and increasing scale."
        ]
    },
    {
        id: "hubspot-review",
        title: "HubSpot CRM Review 2026: Everything You Need to Know",
        category: "Reviews",
        readTime: "7 min read",
        date: "Apr 28, 2026",
        image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&q=80",
        excerpt: "Is HubSpot the right all-in-one platform for your growing business?",
        author: {
            name: "Alex Johnson",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80"
        },
        content: [
            "HubSpot has cemented its position as the premier inbound marketing platform, but its pricing structure can be intimidating for growing businesses. In this review, we examine the true cost of ownership and the value of consolidating your tech stack.",
            "We explore the seamless integration between the Marketing, Sales, and Service Hubs, and how their new AI-powered automation features simplify complex lead nurturing workflows. We also compare it against alternatives like Salesforce and ActiveCampaign.",
            "Whether you're a B2B startup looking to scale your outbound efforts or an established agency needing better reporting, this detailed analysis will help you determine if the HubSpot ecosystem is the right long-term investment."
        ]
    },
    {
        id: "ai-marketing-tools",
        title: "Top 15 AI Marketing Tools Transforming Digital Marketing",
        category: "AI Marketing",
        readTime: "8 min read",
        date: "Apr 25, 2026",
        image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
        excerpt: "Stay ahead of the curve with these cutting-edge AI tools for copy, design, and analytics.",
        author: {
            name: "Sarah Mitchell",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
        },
        content: [
            "AI is no longer a novelty; it's a fundamental requirement for marketing efficiency. But separating the truly transformative tools from the 'ChatGPT wrappers' is challenging. We've curated a list of the 15 most impactful AI marketing platforms available today.",
            "This list covers specialized tools for predictive analytics, hyper-personalized email outreach, programmatic SEO content generation, and intelligent video editing. We highlight tools like Jasper for brand-voice copywriting, Midjourney for bespoke visual assets, and new analytics platforms that identify conversion bottlenecks automatically.",
            "Discover how integrating these tools into your daily workflows can 10x your team's output without compromising on quality or brand authenticity."
        ]
    },
    {
        id: "clickfunnels-review",
        title: "ClickFunnels 2.0 Review: Build Better Sales Funnels",
        category: "Reviews",
        readTime: "6 min read",
        date: "Apr 22, 2026",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
        excerpt: "A deep dive into the completely rebuilt ClickFunnels 2.0 platform.",
        author: {
            name: "Alex Johnson",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80"
        },
        content: [
            "ClickFunnels 2.0 is not just an update; it's a completely rebuilt platform designed to be a full-fledged CRM and business hub, rather than just a landing page builder. But does it deliver on that promise?",
            "We tested the new visual funnel builder, the integrated email marketing features, and the global products hub. The improvements in page load speed and mobile responsiveness are significant, addressing major pain points from the original version.",
            "This review breaks down the pros, cons, and pricing, comparing it directly to competitors like GoHighLevel and Kartra to help you decide the best foundation for your online business."
        ]
    },
    {
        id: "linkedin-ads-b2b",
        title: "LinkedIn Ads for B2B: The Ultimate 2026 Playbook",
        category: "Advertising",
        readTime: "9 min read",
        date: "Apr 20, 2026",
        image: "https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=600&q=80",
        excerpt: "How to generate high-quality B2B leads without burning your budget.",
        author: {
            name: "Sarah Mitchell",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
        },
        content: [
            "LinkedIn Ads are notoriously expensive, but they remain the most precise targeting platform for B2B marketers. The key to profitability is leveraging their unique professional demographic data without wasting clicks on unqualified leads.",
            "This playbook outlines a full-funnel strategy, starting with Thought Leadership Ads to build authority, followed by Lead Gen Forms with highly specific job title targeting. We'll show you how to set up retargeting sequences that move prospects from awareness to booking a demo.",
            "Learn the optimal bidding strategies, the ad formats driving the lowest Cost Per Lead (CPL) in 2026, and how to align your sales and marketing teams using LinkedIn's account-based marketing (ABM) features."
        ]
    },
    {
        id: "ecommerce-marketing",
        title: "Ecommerce Marketing: 12 Strategies to Drive More Sales",
        category: "Ecommerce",
        readTime: "7 min read",
        date: "Apr 18, 2026",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
        excerpt: "Increase your Average Order Value and Customer Lifetime Value with these tactics.",
        author: {
            name: "Alex Johnson",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80"
        },
        content: [
            "Driving traffic to an ecommerce store is only half the battle; optimizing that traffic for maximum revenue is where the real profit lies. In this guide, we cover 12 actionable strategies to boost your conversion rates and customer retention.",
            "From implementing strategic post-purchase upsells to leveraging SMS marketing for abandoned cart recovery, we provide concrete examples of tactics used by top Shopify brands. We also explore the growing importance of seamless omnichannel experiences.",
            "Discover how to build a loyalty program that actually works, optimize your product pages for both SEO and conversions, and use user-generated content to build undeniable social proof."
        ]
    },
    {
        id: "content-marketing-roi",
        title: "How to Measure Content Marketing ROI (With Examples)",
        category: "Digital Marketing",
        readTime: "6 min read",
        date: "Apr 15, 2026",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
        excerpt: "Stop guessing. Learn how to accurately track and report the financial impact of your content.",
        author: {
            name: "Sarah Mitchell",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
        },
        content: [
            "Content marketing is a long-term investment, making it notoriously difficult to attribute direct ROI. However, executives demand hard numbers. This article provides a clear framework for measuring the true impact of your blog posts, videos, and whitepapers.",
            "We'll walk you through setting up multi-touch attribution models in Google Analytics 4, defining micro and macro conversions, and assigning monetary value to lead generation events. You'll learn how to track the customer journey from a top-of-funnel blog read to a closed-won deal.",
            "Armed with these metrics, you'll be able to confidently defend your content budget and double down on the topics and formats that actually drive revenue."
        ]
    },
    {
        id: "social-media-trends",
        title: "7 Social Media Marketing Trends Dominating 2026",
        category: "Social Media",
        readTime: "5 min read",
        date: "Apr 12, 2026",
        image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&q=80",
        excerpt: "From hyper-niche communities to social commerce, see what's working right now.",
        author: {
            name: "Alex Johnson",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80"
        },
        content: [
            "The social media landscape is shifting rapidly from public broadcasting to private, community-driven interactions. In 2026, brands are finding more success in Discord servers and private broadcast channels than on traditional feeds.",
            "We highlight 7 major trends you need to adapt to, including the complete integration of social commerce (buying without leaving the app), the rise of AI-generated influencer avatars, and the increasing demand for unpolished, raw video content.",
            "Learn how to pivot your strategy to foster genuine engagement, leverage micro-influencers effectively, and navigate the fragmented platform ecosystem to maintain a strong brand presence."
        ]
    },
    {
        id: "mailchimp-alternatives",
        title: "Best Mailchimp Alternatives in 2026 (Compared)",
        category: "Email Marketing",
        readTime: "8 min read",
        date: "Apr 10, 2026",
        image: "https://images.unsplash.com/photo-1484788984921-03950022c38b?w=600&q=80",
        excerpt: "Outgrown Mailchimp? Here are the top platforms for advanced automation and better pricing.",
        author: {
            name: "Sarah Mitchell",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
        },
        content: [
            "Mailchimp is a fantastic entry-level tool, but as your subscriber list grows and your automation needs become more complex, its limitations and pricing structure often force marketers to look elsewhere.",
            "We've rigorously compared the top alternatives, analyzing platforms like Klaviyo (for ecommerce), ActiveCampaign (for advanced automation), and ConvertKit (for creators). We break down their visual builders, tagging systems, deliverability rates, and CRM integrations.",
            "This guide will help you choose the platform that offers the right balance of features and affordability for your specific business model, complete with a migration checklist to ensure you don't lose any data during the switch."
        ]
    },
    {
        id: "ppc-optimization",
        title: "PPC Optimization: 10 Tactics to Reduce Ad Spend by 40%",
        category: "Advertising",
        readTime: "7 min read",
        date: "Apr 8, 2026",
        image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&q=80",
        excerpt: "Stop leaking budget. Implement these advanced PPC tactics to improve your ROAS immediately.",
        author: {
            name: "Alex Johnson",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80"
        },
        content: [
            "Are your PPC campaigns suffering from diminishing returns? It's time for a rigorous audit. Most accounts leak 20-30% of their budget on irrelevant clicks and poorly structured ad groups.",
            "We outline 10 advanced optimization tactics, including rigorous negative keyword sculpting, utilizing custom intent audiences, and leveraging script-based automated rules to control bids based on weather, inventory, or time of day.",
            "You'll learn how to improve your Quality Score to lower your CPCs, how to conduct meaningful ad copy split tests, and why optimizing your landing page experience is often more impactful than tweaking your bids."
        ]
    },
    {
        id: "web-hosting-comparison",
        title: "Best Web Hosting Services in 2026: Full Comparison",
        category: "Web Hosting",
        readTime: "10 min read",
        date: "Apr 5, 2026",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
        excerpt: "Speed, security, and uptime. We benchmark the top hosting providers for marketers.",
        author: {
            name: "Sarah Mitchell",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
        },
        content: [
            "Site speed is a critical factor for both SEO rankings and conversion rates. Your choice of web host directly impacts your bottom line. We've conducted extensive performance benchmarks on the leading hosting providers.",
            "From budget-friendly shared hosting options like Hostinger and Bluehost to premium managed WordPress solutions like WP Engine and Kinsta, we analyze server response times, uptime reliability, and customer support quality.",
            "This comprehensive comparison provides clear recommendations based on your traffic volume, technical expertise, and platform requirements, ensuring you have a rock-solid foundation for your marketing efforts."
        ]
    },
    {
        id: "youtube-ads-guide",
        title: "YouTube Ads Guide 2026: From Setup to Optimization",
        category: "Advertising",
        readTime: "8 min read",
        date: "Apr 3, 2026",
        image: "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80",
        excerpt: "Capitalize on the cheapest high-quality video inventory available on the internet.",
        author: {
            name: "Alex Johnson",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80"
        },
        content: [
            "YouTube remains vastly underutilized by many direct-response marketers, often perceived as only a branding channel. However, with the right creative strategy and targeting, it offers some of the most profitable video inventory available.",
            "This guide covers the essentials of creating high-converting YouTube ads, focusing on the critical first 5 seconds to prevent skipping. We detail the different ad formats, from TrueView in-stream to Shorts ads, and how to utilize custom segments based on Google Search behavior.",
            "Learn how to structure your campaigns for scale, track view-through conversions accurately, and use video sequencing to tell a compelling brand story that drives measurable action."
        ]
    },
    {
        id: "digital-marketing-salary",
        title: "Digital Marketing Salaries in 2026: Complete Breakdown",
        category: "Career",
        readTime: "6 min read",
        date: "Apr 1, 2026",
        image: "https://images.unsplash.com/photo-1559526324-593bc073d938?w=600&q=80",
        excerpt: "Are you being paid what you're worth? See the latest compensation data for marketing roles.",
        author: {
            name: "Sarah Mitchell",
            avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
        },
        content: [
            "The demand for specialized digital marketing skills continues to grow, and compensation packages have adjusted accordingly. We surveyed over 5,000 marketing professionals to bring you an accurate picture of the 2026 salary landscape.",
            "We break down average salaries by role (SEO, Paid Media, Content, Data Analytics), experience level, and geographic location (including remote vs. in-office). We also highlight the fastest-growing niches that command the highest premiums.",
            "Whether you're negotiating a raise, planning a career pivot, or hiring for your team, this comprehensive data provides the benchmarks you need to make informed decisions in today's competitive job market."
        ]
    }
];

const uniqueAuthors = [
  { name: "Marcus Vance", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80" },
  { name: "Elena Rostova", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80" },
  { name: "David Chen", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80" },
  { name: "Clara Oswald", avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80" },
  { name: "Jason Brody", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80" },
  { name: "Naomi Watts", avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&q=80" },
  { name: "Liam Neeson", avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&q=80" },
  { name: "Sophia Loren", avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&q=80" },
  { name: "Alex Johnson", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80" },
  { name: "Sarah Mitchell", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" }
];

const uniqueImages = [
  "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80",
  "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=600&q=80",
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80",
  "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&q=80",
  "https://images.unsplash.com/photo-1611605698335-8b1569810432?w=600&q=80",
  "https://images.unsplash.com/photo-1557200134-90327ee9fafa?w=600&q=80",
  "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
  "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&q=80",
  "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&q=80",
  "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80",
  "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80",
  "https://images.unsplash.com/photo-1611944212129-29977ae1398c?w=600&q=80",
  "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80",
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=600&q=80",
  "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80",
  "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80",
  "https://images.unsplash.com/photo-1559526324-593bc073d938?w=600&q=80"
];

export const blogs = rawBlogs.map((blog, idx) => ({
  ...blog,
  image: uniqueImages[idx % uniqueImages.length],
  author: uniqueAuthors[idx % uniqueAuthors.length]
}));

export function normalizeBlog(blog = {}, index = 0) {
  return {
    id: blog.id || blog.slug || `blog-${index}`,
    title: blog.title || blog.heading || "Untitled",
    heading: blog.heading || blog.title || "Untitled",
    slug: blog.slug || blog.id || `blog-${index}`,
    category: blog.category || "Marketing",
    excerpt: blog.excerpt || "",
    content: blog.content || blog.body || [],
    image: blog.image || uniqueImages[index % uniqueImages.length],
    imageAlt: blog.imageAlt || "",
    date: blog.date || blog.createdAt || "",
    readTime: blog.readTime || `${Math.ceil((blog.content?.length || 0) * 0.5)} min read`,
    readTimeMinutes: blog.readTimeMinutes || Math.ceil((blog.content?.length || 0) * 0.5),
    author: typeof blog.author === "string" ? { name: blog.author, avatar: uniqueAuthors[index % uniqueAuthors.length].avatar } : (blog.author || uniqueAuthors[index % uniqueAuthors.length]),
    tags: blog.tags || [],
    status: blog.status || "published",
    createdAt: blog.createdAt || blog.date || "",
    updatedAt: blog.updatedAt || "",
  };
}

export function sortBlogsByDate(posts = []) {
  return [...posts].sort((a, b) => {
    const dateA = Date.parse(a.date || a.createdAt || "") || 0;
    const dateB = Date.parse(b.date || b.createdAt || "") || 0;
    return dateB - dateA;
  });
}
