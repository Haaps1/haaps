// Business details. Replace the placeholder values before going live.
export const site = {
  name: "Haaps",
  tagline: "Digital Marketing Agency in Bangalore",
  url: "https://www.haaps.in", // TODO: real domain
  phoneDisplay: "+91 XXXXX XXXXX", // TODO
  phoneHref: "tel:+910000000000", // TODO
  whatsappNumber: "910000000000", // TODO: country code + number, digits only
  email: "hello@haaps.in", // TODO
  address: "[Office address], Bangalore, Karnataka", // TODO
  hours: "Mon–Sat, 10:00 AM – 7:00 PM",
  copyrightYear: 2026,
  socials: [
    { label: "Instagram", href: "#" }, // TODO
    { label: "LinkedIn", href: "#" },
    { label: "YouTube", href: "#" },
    { label: "Facebook", href: "#" },
  ],
};

export function whatsappLink(message = "Hi Haaps, I'd like a free growth audit.") {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export type IconName =
  | "share"
  | "reel"
  | "target"
  | "scissors"
  | "sparkle"
  | "monitor"
  | "search"
  | "bot";

export type Service = {
  slug: string;
  name: string;
  short: string;
  icon: IconName;
  desc: string;
  long: string;
  points: string[];
  idealFor: string;
};

export const services: Service[] = [
  {
    slug: "smm",
    name: "Social Media Marketing",
    short: "Social Media",
    icon: "share",
    desc: "Strategy, content and community management that turn followers into a loyal, buying audience.",
    long: "We plan, design and run your Instagram, Facebook and LinkedIn so your brand shows up consistently, looks premium and starts conversations that turn into enquiries.",
    points: ["Monthly content calendar", "Post & carousel design", "Captions & hashtags", "Community management", "Monthly growth reports"],
    idealFor: "Brands that want a consistent, professional social presence without hiring a team.",
  },
  {
    slug: "reels",
    name: "Reels",
    short: "Reels",
    icon: "reel",
    desc: "Scroll-stopping short videos — concept, shoot and edit — engineered for reach and saves.",
    long: "From hook to final cut, we create reels built for the algorithm and for your customers: trending formats, strong first three seconds, and a clear call to action.",
    points: ["Concept & scripting", "On-location shoot", "Editing with trending audio", "Captions & cover design", "Posting schedule"],
    idealFor: "Restaurants, clinics, salons, real estate and any brand that wants reach fast.",
  },
  {
    slug: "ads",
    name: "Lead Generation Ads — Google & Instagram",
    short: "Lead Gen Ads",
    icon: "target",
    desc: "Google & Instagram campaigns tuned for a low cost per lead, not vanity clicks.",
    long: "We build and manage performance campaigns on Google Search, Performance Max and Meta (Instagram & Facebook), with landing pages and tracking that show exactly what each lead costs.",
    points: ["Google Search & Performance Max", "Instagram & Facebook lead ads", "High-converting landing pages", "Conversion tracking setup", "Weekly cost-per-lead reports"],
    idealFor: "Businesses that want a steady flow of enquiries every week.",
  },
  {
    slug: "video-editing",
    name: "Video Editing",
    short: "Video Editing",
    icon: "scissors",
    desc: "Polished edits for ads, YouTube and social — with motion graphics and captions that hold attention.",
    long: "Send us your raw footage and get back polished videos for ads, YouTube and social, with pacing, motion graphics and subtitles that keep people watching.",
    points: ["Reels & YouTube edits", "Motion graphics & titles", "Subtitles in multiple languages", "Colour grading & sound polish", "Fast turnaround"],
    idealFor: "Creators, coaches and brands with footage that needs a professional finish.",
  },
  {
    slug: "ai-video",
    name: "AI Video",
    short: "AI Video",
    icon: "sparkle",
    desc: "AI avatars, voice-overs and generated visuals — studio quality at a fraction of the time and cost.",
    long: "Use AI presenters, voice-overs and generated visuals to produce explainer videos, ads and multi-language content without a studio shoot.",
    points: ["AI avatars & presenters", "Multi-language voice-overs", "AI-generated visuals & b-roll", "Product explainers", "Ad variations at scale"],
    idealFor: "Brands that need lots of video content quickly and on budget.",
  },
  {
    slug: "websites",
    name: "Websites — AI, E-commerce, WordPress",
    short: "Websites",
    icon: "monitor",
    desc: "Fast, conversion-focused websites — AI-powered, e-commerce and WordPress.",
    long: "Beautiful, fast websites designed to turn visitors into enquiries and sales — from AI-powered business sites to full e-commerce stores and easy-to-edit WordPress builds.",
    points: ["AI-powered business websites", "E-commerce stores", "WordPress websites", "Landing pages for ads", "Speed & SEO built in"],
    idealFor: "Businesses whose website looks dated or doesn't bring in leads.",
  },
  {
    slug: "seo",
    name: "SEO",
    short: "SEO",
    icon: "search",
    desc: "Rank higher on Google and get found by customers searching for you in Bangalore.",
    long: "Local and organic SEO that gets you found when customers in Bangalore search for what you offer — on Google Search and Google Maps.",
    points: ["Local SEO for Bangalore", "Google Business Profile optimisation", "On-page & technical SEO", "Content & blog strategy", "Monthly ranking reports"],
    idealFor: "Local businesses that want customers to find them on Google.",
  },
  {
    slug: "ai-automation",
    name: "AI Automation",
    short: "AI Automation",
    icon: "bot",
    desc: "Let AI reply, qualify and book — 24/7 — so no lead ever goes cold.",
    long: "We set up AI tools that answer enquiries instantly, qualify leads, book appointments and keep your social media running — even at 2 AM.",
    points: ["WhatsApp automation", "Website chatbot", "AI calling agent", "Auto social posting", "NFC smart business card"],
    idealFor: "Busy owners who lose leads because nobody replies fast enough.",
  },
];

export const stats = [
  // Dummy numbers — replace with real figures.
  { value: 1200, suffix: "+", label: "Leads generated" },
  { value: 850, suffix: "+", label: "Reels delivered" },
  { value: 60, suffix: "+", label: "Happy brands" },
  { value: 4.5, suffix: "x", label: "Average ROAS", decimals: 1 },
];

export const process = [
  { title: "Free audit", text: "We review your socials, ads, website and competitors — and find where leads are leaking." },
  { title: "Strategy", text: "A clear plan: channels, content, budget and the numbers we'll be judged on." },
  { title: "Create & launch", text: "Reels, ads, website and automations go live — fast." },
  { title: "Scale", text: "Weekly reports, testing and optimisation to lower cost per lead every month." },
];
