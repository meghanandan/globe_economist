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
    publisher?: string;
    place: string;
    address?: string;
    medium: string;
    language: string;
    issn: string;
  };
}

export const publicationData: PublicationInfo = {
  title: "GLOBAL ECONOMIST",
  subtitle: "Journal of International Economics, Sustainable Development, AI Economics & Policy Optimization and Redesign",
  tagline: "Integrated Economics Review",
  mastheadTagline: "A review of integrated economics, natural resilience and social development",
  currentIssue: {
    volume: "Vol. 1",
    issue: "Issue 1",
    month: "January–March",
    year: "2026",
    fullString: "Vol. 1 · Issue 1 · January–March 2026",
    topBarLeft: "DIGITAL SERIAL · NEW DELHI · ISSN APPLICATION NO. 76453",
    topBarRight: "VOL. 1 · ISSUE 1 · QUARTERLY REVIEW",
  },
  location: "New Delhi, India",
  domain: "globeeconomist.com",
  relatedSite: "https://profdrgvr.com",
  emails: {
    primary: "profdrgvr@gmail.com",
    alternate: "drgvr7@gmail.com",
  },
  issn: "Under process — Application No. 76453",
  editorInChief: {
    name: "Prof. Dr. GVR Shastri",
    shortName: "Prof. Dr. GVR Shastri",
    fullName: "Prof. Dr. Gadepalli Venkatarama Shastri",
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
      "Chairman, Coastal India Development Council (CIDC)",
      "Founder & Lifetime Chairman, Sri Hariom Shastri Charitable Trust",
    ],
  },
  imprint: {
    title: "Global Economist: Journal of International Economics, Sustainable Development, AI Economics & Policy Optimization and Redesign",
    publisher: "SRI HARIOM SHASTRI CHARITABLE TRUST",
    place: "New Delhi, India",
    address: "Flat No. 70, Anupam Apartments, Saket, New Delhi – 110 068, India",
    medium: "Online",
    language: "English",
    issn: "Under process — Application No. 76453",
  },
};
