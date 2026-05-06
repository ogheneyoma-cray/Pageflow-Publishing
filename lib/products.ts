export type Product = {
  id: string;
  sku: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  price: number;
  category: "Business" | "Technology" | "Finance" | "Career & Development" | "Creative Skills";
};

export const products: Product[] = [
  {
    id: "1",
    sku: "PCP-BUS-TSF01",
    name: "The Strategic Founder",
    shortDesc: "Practical strategic planning guide for founders.",
    fullDesc: "Covers market positioning, competitive differentiation, growth prioritization, and a quarterly planning framework. Includes strategy canvases and worked examples.",
    price: 24.00,
    category: "Business",
  },
  {
    id: "2",
    sku: "PCP-BUS-PPS02",
    name: "Profitable Pricing Strategy",
    shortDesc: "Comprehensive pricing guide for services and products.",
    fullDesc: "Covers the psychology of pricing, value-based frameworks, price positioning, anchoring, and a guide to raising prices without losing clients.",
    price: 22.00,
    category: "Business",
  },
  {
    id: "3",
    sku: "PCP-TEC-AIB03",
    name: "AI Tools for Business Professionals",
    shortDesc: "Guide to integrating AI into professional workflows.",
    fullDesc: "Covers prompt engineering, AI writing, data analysis, and productivity workflows. Includes 50 tested prompt templates for non-technical users.",
    price: 26.00,
    category: "Technology",
  },
  {
    id: "4",
    sku: "PCP-TEC-EMD04",
    name: "Excel Mastery for Data-Driven Decisions",
    shortDesc: "Advanced Excel guide for business professionals.",
    fullDesc: "Covers advanced formulas, pivot tables, data visualization, and analytical workflows. Download includes template files.",
    price: 22.00,
    category: "Technology",
  },
  {
    id: "5",
    sku: "PCP-FIN-PFB05",
    name: "The Personal Finance Blueprint",
    shortDesc: "Comprehensive guide to managing money and wealth.",
    fullDesc: "Covers cash flow management, debt elimination, emergency funds, investment fundamentals, and tax-efficient investing.",
    price: 22.00,
    category: "Finance",
  },
  {
    id: "6",
    sku: "PCP-CAR-CSP06",
    name: "The Career Strategy Playbook",
    shortDesc: "Practical guide for professional advancement.",
    fullDesc: "Covers personal brand positioning, visibility, salary negotiation, and navigating organizational politics. Written by an executive coach.",
    price: 21.00,
    category: "Career & Development",
  },
  {
    id: "7",
    sku: "PCP-CRE-CCG07",
    name: "The Copywriter's Complete Guide",
    shortDesc: "Comprehensive guide to persuasion and copywriting.",
    fullDesc: "Covers persuasion psychology, ad copy, website copy, and email sequences. Includes 30 annotated examples across formats.",
    price: 24.00,
    category: "Creative Skills",
  },
];