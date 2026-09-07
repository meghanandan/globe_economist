export interface ArchiveIssue {
  id: string;
  volume: string;
  issue: string;
  date: string;
  title: string;
  summary: string;
  current?: boolean;
}

export const archiveIssues: ArchiveIssue[] = [
  {
    id: "vol-3-issue-9",
    volume: "Vol. III",
    issue: "Issue 09",
    date: "September 2026",
    title: "Optimum Integration; Coastal Warehousing; Food Security",
    summary: "Lead essay on economic policy redesign, AI-enabled multipurpose multilevel warehousing models for the blue economy, and coastal food-system resilience pathways.",
    current: true,
  },
  {
    id: "vol-3-issue-8",
    volume: "Vol. III",
    issue: "Issue 08",
    date: "August 2026",
    title: "Purchasing Power of the Common Citizen",
    summary: "Critical policy brief evaluating the divergence between headline cost-of-living metrics and actual household purchasing power across emerging economies.",
    current: false,
  },
  {
    id: "vol-3-issue-7",
    volume: "Vol. III",
    issue: "Issue 07",
    date: "July 2026",
    title: "Blue Economy Human-Capital Notes",
    summary: "Structural human-capital requirements for coastal infrastructure transformation and technology adoption in maritime and port networks.",
    current: false,
  },
  {
    id: "vol-3-issue-6",
    volume: "Vol. III",
    issue: "Issue 06",
    date: "June 2026",
    title: "Integrated Coastal Development",
    summary: "Foundational framework establishing the integrated coastal corridor paradigm across energy, ports, agriculture, and municipal resilience.",
    current: false,
  },
];

export const archiveCollationNotice =
  "Earlier digital briefs and open letters are being collated into the redesigned archive as the site migration completes.";
