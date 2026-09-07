export interface IssueArticle {
  id: string;
  category: string;
  tag?: string;
  title: string;
  subtitle?: string;
  description: string;
  author?: string;
  authorCredentials?: string;
  typeMetadata?: string;
  note?: string;
  volume?: string;
  issue?: string;
  month?: string;
  year?: string;
}

export interface IssueData {
  title: string;
  month: string;
  year: string;
  identifier: string;
  metadata: string;
  summary: string;
  coverEssay: IssueArticle;
  articles: IssueArticle[];
}

export const currentIssueData: IssueData = {
  title: "September 2026",
  month: "September",
  year: "2026",
  identifier: "VOL. III · ISSUE 09 · SEPTEMBER 2026",
  metadata: "Integrated Economics Review · Digital Edition · New Delhi",
  summary: "This issue examines food-system resilience in India's coast, AI-enabled multipurpose warehousing for the blue economy, and a public brief on protecting the purchasing power of the common citizen.",
  coverEssay: {
    id: "cover-essay-sep-2026",
    category: "COVER ESSAY · SEPTEMBER 2026",
    title: "From Maximisation to Optimum Integration: Redesigning Economic Policy Architecture",
    description: "GDP-first maximisation has produced fragile growth, compressed household purchasing power and exposed coastal and emerging economies to systemic shock. The Globe Economist advances a different operating system: optimum integration across production, logistics, human capital and planetary limits.",
    author: "Prof. Dr. GVR Shastri",
    authorCredentials: "D.Litt. · Ph.D. IIT Delhi · SEP Stanford · SELP Harvard · FCMA",
    typeMetadata: "Cover Essay · Vol. III Issue 09",
    volume: "Vol. III",
    issue: "Issue 09",
    month: "September",
    year: "2026",
  },
  articles: [
    {
      id: "essay-01",
      category: "COVER ESSAY",
      tag: "ECONOMIC ARCHITECTURE",
      title: "From Maximisation to Optimum Integration",
      description: "Redesigning Indian and Global South economic policy architecture so that growth, logistics, food systems and household purchasing power move together rather than conflict.",
      typeMetadata: "Lead Essay · September 2026",
      volume: "Vol. III",
      issue: "Issue 09",
      month: "September",
      year: "2026",
    },
    {
      id: "research-01",
      category: "RESEARCH",
      tag: "BLUE ECONOMY",
      title: "AI-Enabled Integrated Multipurpose Multilevel Warehousing for Coastal India",
      description: "A human-capital mediated AI adoption model for blue-economy transformation. Accepted for presentation, ICAIR-2026.",
      typeMetadata: "Policy paper · 2026",
      volume: "Vol. III",
      issue: "Issue 09",
      month: "September",
      year: "2026",
    },
    {
      id: "research-02",
      category: "RESEARCH",
      tag: "FOOD SECURITY",
      title: "Barriers, Enablers and Pathways to Food Security and Economic Resilience in Coastal India",
      description: "Findings prepared for the Global Journal of Flexible Systems Management (Springer Nature).",
      typeMetadata: "Research article · 2026",
      volume: "Vol. III",
      issue: "Issue 09",
      month: "September",
      year: "2026",
    },
    {
      id: "policy-brief-01",
      category: "POLICY BRIEF",
      tag: "PURCHASING POWER",
      title: "Protecting the Purchasing Power of the Common Citizen",
      description: "Why cost-of-living management and purchasing-power protection are distinct policy problems — and why confusing them produces unrest.",
      typeMetadata: "Policy brief · 2026",
      volume: "Vol. III",
      issue: "Issue 09",
      month: "September",
      year: "2026",
    },
    {
      id: "open-letter-01",
      category: "OPEN LETTER",
      tag: "GLOBAL POLICY",
      title: "Note to World Leaders: The Survival Model",
      description: "An argument for replacing maximisation doctrines with optimum integration before debt, climate and supply-chain shocks compound.",
      typeMetadata: "Open letter · 2026",
      volume: "Vol. III",
      issue: "Issue 09",
      month: "September",
      year: "2026",
    },
  ],
};
