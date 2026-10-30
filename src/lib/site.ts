/**
 * Central content + brand configuration for Advanced Intelligent Systems (AIS).
 * Everything visitor-facing lives here so copy, services and contact details
 * can be updated without touching component code.
 */

export const site = {
  name: "Advanced Intelligent Systems",
  short: "AIS",
  legal: "Advanced Intelligent System Limited",
  tagline: "Engineering the systems that move Zambian business forward.",
  established: 2020,
  location: "Lusaka, Zambia",
  description:
    "A forward-thinking technology company empowering small and medium enterprises with bespoke software, business intelligence and dependable IT infrastructure.",
  email: "michelosinkende@gmail.com",
  phones: ["+260 979 373 283", "+260 966 220 398"],
  address: {
    line1: "7 Katete Court, Muchsiha Road",
    line2: "Nipa, Lusaka, Zambia",
  },
  compliance: {
    pacra: "PACRA registered company",
    tpin: "ZRA TPIN 2770727181",
    trading: "Advanced Intelligent System Limited",
  },
};

// Section anchors — absolute (prefixed with "/") so they navigate home first
// when clicked from a sub-page, then scroll to the section.
export const nav = [
  { label: "Capabilities", href: "/#capabilities" },
  { label: "Approach", href: "/#approach" },
  { label: "Clients", href: "/#clients" },
  { label: "Contact", href: "/#contact" },
];

export type Service = {
  id: string;
  index: string;
  name: string;
  summary: string;
  detail: string;
  icon: string; // lucide-react icon name
  image: string;
  points: string[];
};

export const services: Service[] = [
  {
    id: "software",
    index: "01",
    name: "Software Development",
    summary:
      "Bespoke web, Android and iOS applications built to fit exactly how your business works.",
    detail:
      "Our engineers pair creative problem-solving with technical proficiency to deliver tailored software across every major platform.",
    icon: "Code2",
    image: "/assets/svc-software-2.jpg",
    points: ["Web applications", "Android & iOS", "APIs & integrations", "Custom platforms"],
  },
  {
    id: "bi",
    index: "02",
    name: "BI & Data Analysis",
    summary:
      "Turn raw operational data into decisions with business intelligence and ERP support.",
    detail:
      "We help businesses extract valuable insight from their data — driving informed, strategic growth from the numbers they already have.",
    icon: "BarChart3",
    image: "/assets/svc-bi-2.jpg",
    points: ["Dashboards & reporting", "ERP support", "Data pipelines", "Decision analytics"],
  },
  {
    id: "hosting",
    index: "03",
    name: "Web Hosting & IT Support",
    summary:
      "Reliable hosting, domains and responsive IT support that keep operations running.",
    detail:
      "From domain registration to full server maintenance, our team provides dependable support that guarantees business continuity.",
    icon: "ServerCog",
    image: "/assets/svc-hosting-2.jpg",
    points: ["Web hosting", "Domain registration", "Server maintenance", "Helpdesk support"],
  },
  {
    id: "consultancy",
    index: "04",
    name: "Business Consultancy",
    summary:
      "Strategy-to-operations guidance designed specifically for growing SMEs.",
    detail:
      "We deliver affordable technology solutions and expert guidance that help businesses thrive in competitive markets.",
    icon: "Compass",
    image: "/assets/svc-consultancy-6.jpg",
    points: ["Strategic planning", "Operational efficiency", "Tech advisory", "Growth roadmaps"],
  },
  {
    id: "hardware",
    index: "05",
    name: "Affordable Hardware",
    summary:
      "Cost-effective new and pre-owned hardware, matched to your budget and needs.",
    detail:
      "Laptops, printers, smartphones and storage — whether you are upgrading equipment or expanding infrastructure, we source economical options.",
    icon: "Cpu",
    image: "/assets/svc-hardware-2.jpg",
    points: ["Laptops & desktops", "Printers", "Smartphones", "Storage devices"],
  },
  {
    id: "marketing",
    index: "06",
    name: "Social Media & SEO",
    summary:
      "Digital marketing and search optimization that build a real online presence.",
    detail:
      "Through strategic campaigns and robust SEO, we help businesses increase visibility and engage their market meaningfully.",
    icon: "Megaphone",
    image: "/assets/svc-marketing-2.jpg",
    points: ["SEO strategy", "Social campaigns", "Content & reach", "Audience growth"],
  },
];

export type Capability = {
  label: string;
  icon: string;
  items: string[];
};

export const capabilities: Capability[] = [
  {
    label: "Platforms",
    icon: "Layers",
    items: ["Web", "Android", "iOS", "Progressive Web Apps"],
  },
  {
    label: "Data & Intelligence",
    icon: "Database",
    items: ["Business Intelligence", "ERP support", "Dashboards", "Data analysis"],
  },
  {
    label: "Infrastructure",
    icon: "Server",
    items: ["Web hosting", "Domains", "Server maintenance", "IT support"],
  },
  {
    label: "Growth",
    icon: "TrendingUp",
    items: ["SEO", "Social media", "Consultancy", "Digital strategy"],
  },
];

// Tools & technologies for the marquee — the everyday stack a Zambian SME
// tech partner works with. Kept honest and general-purpose.
export const stack: string[] = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "Python",
  "Flutter",
  "Android",
  "iOS",
  "PostgreSQL",
  "MySQL",
  "Power BI",
  "ERP",
  "WordPress",
  "cPanel",
  "Linux",
  "REST APIs",
];

export const stats = [
  { value: site.established, label: "Established", suffix: "", isYear: true },
  { value: 6, label: "Core services", suffix: "" },
  { value: 3, label: "Platforms shipped", suffix: "", note: "Web · Android · iOS" },
  { value: 100, label: "SME-focused", suffix: "%" },
];

export type Client = {
  name: string;
  logo: string;
  industry: string;
};

export const clients: Client[] = [
  { name: "Jianfeng Business Solutions", logo: "/clients/jianfeng.png", industry: "Business services" },
  { name: "Cypeed", logo: "/clients/cypeed.png", industry: "Logistics" },
  { name: "DMedia Films", logo: "/clients/dmedia.png", industry: "Media & film" },
];

export const values = [
  {
    title: "Built for SMEs",
    body: "Enterprise-grade thinking, priced and scoped for small and medium businesses.",
    icon: "Building2",
  },
  {
    title: "Accessible technology",
    body: "We make cutting-edge tools practical and affordable for the businesses that need them most.",
    icon: "Sparkles",
  },
  {
    title: "Operational excellence",
    body: "Reliable delivery and support that keeps your business running without interruption.",
    icon: "ShieldCheck",
  },
];
