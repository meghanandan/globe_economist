export interface PublicationInfo {
  title: string;
  subtitle: string;
  tagline: string;
  mastheadTagline: string;
  currentIssue: {
    volume: string;
    issue: string;
    month: string;
    year: string;
    fullString: string;
    topBarLeft: string;
    topBarRight: string;
  };
  location: string;
  domain: string;
  relatedSite: string;
  emails: {
    primary: string;
    alternate: string;
  };
  phone: string;
  issn: string;
  editorInChief: {
    name: string;
    shortName: string;
    fullName: string;
    credentials: string[];
    honorificDegrees: string;
    roles: string[];
  };
  imprint: {
    title: string;
    place: string;
    medium: string;
    language: string;
    issn: string;
  };
}

export const publicationData: PublicationInfo = {
  title: "THE GLOBE ECONOMIST",
  subtitle: "Integrated Economics Review",
  tagline: "Journal of International Economics, Sustainable Development & Policy Redesign",
  mastheadTagline: "A review of integrated economics, natural resilience and social development",
  currentIssue: {
    volume: "Vol. III",
    issue: "Issue 09",
    month: "September",
    year: "2026",
    fullString: "Vol. III · Issue 09 · September 2026",
    topBarLeft: "DIGITAL PUBLICATION · NEW DELHI · TUESDAY, 1 SEPTEMBER 2026",
    topBarRight: "VOL. III · ISSUE 09 · INTEGRATED ECONOMICS REVIEW",
  },
  location: "New Delhi, India",
  domain: "globeeconomist.com",
  relatedSite: "https://profdrgvr.com",
  emails: {
    primary: "drgvr7@gmail.com",
    alternate: "profdrgvr@gmail.com",
  },
  phone: "+91 98999 77731",
  issn: "Application in process",
  editorInChief: {
    name: "Prof. Dr. GVR Shastri",
    shortName: "Prof. Dr. GVR Shastri",
    fullName: "Prof. Dr. Gadepalli Venkatarama Sastry",
    honorificDegrees: "D.Litt. · Ph.D. IIT Delhi · SEP Stanford · SELP Harvard · FCMA",
    credentials: [
      "D.Litt. in Integrated Economics (Tumkur University)",
      "Ph.D., Indian Institute of Technology Delhi",
      "Stanford Executive Program, Stanford Graduate School of Business",
      "Senior Executive Leadership Program, Harvard Business School",
      "FCMA — The Institute of Cost Accountants of India, Kolkata",
      "FCMA / CIMA — London",
    ],
    roles: [
      "Senior Economist, Author and International Arbitrator",
      "Chairman, Coastal India Development Council (CICD)",
      "Founder & Lifetime Chairman, Sri Hariom Shastri Charitable Trust",
    ],
  },
  imprint: {
    title: "The Globe Economist — Integrated Economics Review",
    place: "New Delhi, India",
    medium: "Digital",
    language: "English (with selected regional commentary)",
    issn: "Application in process",
  },
};
