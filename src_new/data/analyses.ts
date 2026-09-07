export interface AnalysisItemData {
  id: string;
  category: string;
  title: string;
  description: string;
  metadata: string;
  volume?: string;
  issue?: string;
  month?: string;
  year?: string;
}

export interface BriefingNameItem {
  statement: string;
  attribution: string;
}

export const featuredHomeAnalyses: AnalysisItemData[] = [
  {
    id: "feat-01",
    category: "BLUE ECONOMY",
    title: "AI-Enabled Integrated Multipurpose Multilevel Warehouse for Coastal India",
    description: "A human-capital mediated adoption model for transforming coastal logistics into an economic lifeline rather than a cost centre.",
    metadata: "Policy paper · 2026",
    volume: "Vol. III",
    issue: "Issue 09",
    month: "September",
    year: "2026",
  },
  {
    id: "feat-02",
    category: "FOOD SECURITY",
    title: "Barriers, Enablers and Pathways to Food Security and Economic Resilience in Coastal India",
    description: "Why coastal districts remain exposed to price shocks — and which institutional pathways restore resilience and maximise integration.",
    metadata: "Research article · 2026",
    volume: "Vol. III",
    issue: "Issue 09",
    month: "September",
    year: "2026",
  },
  {
    id: "feat-03",
    category: "GLOBAL POLICY",
    title: "The Globe Economist Survival Model for World Leaders",
    description: "An appeal to shift fiscal and industrial policy from output maximisation to balanced, shock-resistant optimisation.",
    metadata: "Open letter · 2026",
    volume: "Vol. III",
    issue: "Issue 09",
    month: "September",
    year: "2026",
  },
];

export const allAnalyses: AnalysisItemData[] = [
  {
    id: "analysis-01",
    category: "Coastal Policy",
    title: "Creation of an Economic Lifeline through Integrated Coastal Development",
    description: "The D.Litt. line of inquiry: developing-economy strategy built around ports, warehousing, energy, agriculture and human settlements as one corridor.",
    metadata: "D.Litt. Inquiry · Integrated Economics",
    volume: "Vol. III",
    issue: "Issue 08",
    month: "August",
    year: "2026",
  },
  {
    id: "analysis-02",
    category: "Logistics",
    title: "IMMWs — Integrated Multipurpose Multi-Level Warehouse Systems",
    description: "Why single-purpose storage fails coastal India, and how multi-level multipurpose design changes food security and trade resilience.",
    metadata: "Method-focused research programme",
    volume: "Vol. III",
    issue: "Issue 08",
    month: "August",
    year: "2026",
  },
  {
    id: "analysis-03",
    category: "Macro",
    title: "Five Stages: An Economy Travelling Towards Disaster",
    description: "A diagnostic sequence for policymakers who still treat fiscal stress as a cyclical inconvenience rather than a structural unravelling.",
    metadata: "Macroeconomic Diagnostic",
    volume: "Vol. III",
    issue: "Issue 08",
    month: "August",
    year: "2026",
  },
  {
    id: "analysis-04",
    category: "Geoeconomics",
    title: "Debt, Diplomacy and the Purchasing Power Trap",
    description: "How external liabilities transmit into household welfare — and why headline GDP can rise while the common citizen is impoverished.",
    metadata: "Geoeconomic Review",
    volume: "Vol. III",
    issue: "Issue 08",
    month: "August",
    year: "2026",
  },
];

export const editorDeskNote = {
  heading: "From the Editor's Desk",
  paragraphs: [
    "The Globe Economist is not a newslettery market noise. It is a publication devoted to one question: how should a developing economy — especially a coastal civilisation — organise production, warehousing, energy, food and human capital so that the common citizen's purchasing power is protected?",
    "Our working premise is simple. Any shastra can be repaired. If a system collapses — collapse, recovery becomes a generation's work. This review therefore privileges integration over isolated targets, and resilience over headline growth.",
  ],
  author: "Prof. Dr. GVR Shastri",
  roles: [
    "Editor-in-Chief, The Globe Economist",
    "Chairman, Coastal India Development Council",
  ],
};

export const briefingNames: BriefingNameItem[] = [
  {
    statement: "Purchasing power is not the same as the cost of living.",
    attribution: "Policy note to review leaders, 2026",
  },
  {
    statement: "Coastal economic lifeline through integrated development.",
    attribution: "D.Litt. thesis line of inquiry",
  },
  {
    statement: "IMMWs for India's coastal blue economy.",
    attribution: "Method-focused research programme",
  },
  {
    statement: "National resilience for the Global South.",
    attribution: "Optimum Integration Economics",
  },
];
