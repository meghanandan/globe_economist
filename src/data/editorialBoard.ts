export interface EditorialBoardMember {
  id: string;
  name: string;
  honorific?: string;
  designation: string;
  fullTitle?: string;
  department: string;
  institution: string;
  location?: string;
  address?: string;
  email?: string;
  institutionalEmail?: string;
  profileLink?: string;
  secondaryProfileLink?: string;
  imageUrl?: string;
  academicBackground?: string;
  areasOfContribution?: string[];
  professionalHighlights?: string;
  appointmentEffective?: string;
  appointmentRef?: string;
  category: 'Core' | 'Foreign' | 'Research';
}

export const editorialBoardMembers: EditorialBoardMember[] = [
  // =========================================================================
  // I. INTERNATIONAL MEMBERS (Foreign Members of the Editorial Board)
  // Ordered strictly according to Official Consolidated Profile:
  // 1. Sturle Harald Pedersen
  // 2. Diana Daniels
  // 3. Sri Irshad Contractor
  // =========================================================================
  {
    id: "sturle-harald-pedersen",
    name: "Sturle Harald Pedersen",
    designation: "International Member, Editorial Board",
    fullTitle: "Chairman, Greenstat Asia · Former Chairman and Founder, Greenstat Hydrogen India · Honorary Consul of Sri Lanka in Bergen–Vestland, Norway",
    department: "Green Hydrogen, Renewable Energy & Energy Transition",
    institution: "Greenstat Asia / Greenstat Group (Norway) & Greenstat Hydrogen India",
    location: "Bergen, Norway",
    address: "Greenstat Asia / Greenstat Group — Bergen–Vestland and Arendal, Norway; Greenstat Hydrogen operations in Asia",
    email: "sturle.h.pedersen@outlook.com",
    institutionalEmail: "sturle@greenstat.no",
    profileLink: "https://www.linkedin.com/in/sturlepedersen",
    secondaryProfileLink: "https://greenstat.lk/about-us-2/",
    imageUrl: "/sturle_harald_pedersen.png",
    academicBackground: "Global leader in green hydrogen and the energy transition, with over 35 years of leadership in renewable energy, GH2 technology and industrial safety. Currently Chairman, Greenstat Asia. Former Chairman and Founder of Greenstat Hydrogen India. Director of Gexcon India and related hydrogen and materials ventures. Former President & CEO, Gexcon (process safety and explosion research, Bergen).",
    areasOfContribution: [
      "Green Hydrogen, Ammonia and the Global Energy Transition",
      "Industrial Safety, Process Risk and Operational Excellence",
      "Renewable Energy Markets in India, Sri Lanka and Asia",
      "Norway–India–Sri Lanka Economic and Energy Cooperation",
      "Hydrogen Education, Centres of Excellence and Skills Policy",
      "Industrial Decarbonisation and Sustainable Infrastructure",
      "Editorial Review of Energy, Climate and Development Commentary"
    ],
    professionalHighlights: "Has led government alliances, policy negotiations and cross-border energy initiatives. Established and formerly chaired Greenstat Hydrogen India and the Centre of Excellence–Hydrogen (Mumbai); partnerships including PHDCCI, NISE and ISA; green hydrogen pilots in Karnataka and Gujarat. Presently chairs Greenstat Asia. In Sri Lanka: hydrogen Master's programme MoUs (University of Peradeniya and others); dialogue with the Prime Minister on hydrogen education.",
    category: "Foreign"
  },
  {
    id: "diana-daniels",
    name: "Diana Daniels",
    designation: "International Member, Editorial Board",
    fullTitle: "CEO and Founder, Cronos Group | net2chain · Chair, SEP Alumni Scholarship Foundation, Palo Alto, CA",
    department: "Digital Economy, Financial Technology & Inclusive Markets",
    institution: "Cronos Group / net2chain · SEP Alumni Scholarship Foundation",
    location: "Barcelona · New York · Mexico City",
    address: "Cronos Group / net2chain — Barcelona, Spain; New York, USA; Mexico City, Mexico; SEP Alumni Scholarship Foundation, Palo Alto, CA, USA",
    email: "ddaniels@cronosgroup.net",
    profileLink: "https://www.linkedin.com/in/dianadaniels",
    secondaryProfileLink: "https://alumnischolarship.org/dianadaniels",
    imageUrl: "/diana_daniels.png",
    academicBackground: "Stanford Executive Program (SEP, 2018). Executive education: Stanford, IPADE, Kellogg and ITAM. Two decades in global telecommunications. Co-founder and Chairwoman of Cronos Group, a multinational carrier-of-carriers with presence in Hong Kong, Switzerland, Mexico, Israel, Spain and the USA. Founder, net2chain and Tinkerlink. YPO Greater Europe; Forbes Business Council.",
    areasOfContribution: [
      "Global Telecommunications, Connectivity and Digital Infrastructure",
      "Fintech, Inclusive Finance and the Unbanked Economy",
      "Blockchain, Digital Assets and Cross-Border Payments",
      "Multicultural Markets, Trade Corridors and the Global South",
      "Entrepreneurship, Venture Building and Social Impact",
      "Leadership Development and Stanford SEP Alumni Networks",
      "Editorial Review of International Economic and Policy Commentary"
    ],
    professionalHighlights: "Originally from Mexico City; career across the United States, Europe and Asia. Cronos Group delivers unified communications and financial solutions into multicultural and niche markets. Chair of the SEP Alumni Scholarship Foundation. Impact Officer, YPO Greater Europe; founder of the YNG Incubator for young founders.",
    category: "Foreign"
  },
  {
    id: "irshad-contractor",
    name: "Sri Irshad Contractor",
    designation: "International Member, Editorial Board",
    fullTitle: "Alumnus, Harvard Business School (SELP) · Founder & Managing Director, Technosat",
    department: "Satellite Communications, Broadcast & Media Markets",
    institution: "Technosat · Dubai, UAE",
    location: "Dubai, UAE",
    address: "Frond M, Villa 52, Palm Jumeirah, Dubai, United Arab Emirates",
    email: "Irshad@technosat.com",
    imageUrl: "/irshad_contractor.png",
    academicBackground: "Harvard Business School, Senior Executive Leadership Program. CPA (AICPA). Built Technosat across the MENA region in satellite receivers, broadcast platforms and connected-home media; earlier finance and audit career with Arthur Andersen and EY. Group finance and delivery-services leadership in the UAE.",
    areasOfContribution: [
      "Gulf Markets, UAE Economy and India–Middle East Corridors",
      "Satellite Communications, Broadcast and Digital Media Markets",
      "Entrepreneurship, Scale-up and Family–Royal Capital Partnerships",
      "Consumer Electronics and Connected-Home Infrastructure",
      "Corporate Finance, Audit and Group Strategy",
      "Executive Leadership and Cross-Border Business",
      "Editorial Review of Market, Media and Strategy Papers"
    ],
    professionalHighlights: "Founded and led Technosat Trading LLC and ICHD from Dubai, building a MENA satellite-receiver and HD-platform business (including MBC HD / Irdeto connected-home work). Earlier served as Finance Director associated with the Al Saud family enterprise before acquiring Technosat. Manufacturing partnerships in Korea and China. HBS SELP classmate network with The Globe Economist’s Founder.",
    category: "Foreign"
  },

  // =========================================================================
  // II. INDIAN MEMBERS (Indian Members of the Editorial Board)
  // Ordered strictly according to Official Consolidated Profile & Appt. Listing:
  // 1. Dr. Anil Singh
  // 2. Prof. Dr. Ravindra Kumar B.
  // 3. Prof. B. P. Veerabhadrappa
  // 4. Prof. (Dr.) Sat Prakash Bansal
  // 5. Shri Rakesh Asthana
  // 6. Prof. Ch. Ramakrishna
  // 7. Senior Advocate Vikas Singh
  // =========================================================================
  {
    id: "dr-anil-singh",
    name: "Dr. Anil Singh",
    designation: "Distinguished Member, Indian Editorial Board",
    fullTitle: "Senior Editor · Political Journalist · Author · Public Policy & Strategic Affairs Commentator",
    department: "Strategic Affairs & Public Policy",
    institution: "Former Executive Editor, News24 & Aaj Tak / TV Today Network",
    location: "New Delhi",
    email: "anil.singh.dr@gmail.com",
    imageUrl: "/dr_anil_singh.png",
    academicBackground: "Ph.D., International Politics, University of Delhi (2002). Former Executive Editor, News24 (2015–2020); Aaj Tak / TV Today Network (2013–2015); STAR News / ABP News (2004–2013). Author of The Prime Minister: Discourses in Indian Polity (2025); Bihar: Chaos to Chaos (2013); Military and Media (2007); India’s Security Concerns in the Indian Ocean Region (2003).",
    areasOfContribution: [
      "International Relations and Strategic Affairs",
      "Global & Indian Political Economy",
      "Governance, Public Policy and Policy Redesign",
      "Parliament and Democratic Institutions",
      "Defence and National Security",
      "Sustainable Development and Development Policy",
      "Media, Society and Election Analysis",
      "Editorial Review and Long-form Commentary"
    ],
    professionalHighlights: "PIB-accredited journalist (Editor category) with long-standing Parliament coverage. Member, IIPA; Manohar Parrikar Institute for Defence Studies and Analyses; United Service Institution of India; India International Centre. Presently Editor, STAR Views and Editorial Advisor, Top Story. Led major political and election programming including 'Kaun Banega Mukhya Mantri' (STAR News) and 'Raj Tilak' (Aaj Tak).",
    category: "Core"
  },
  {
    id: "prof-dr-ravindra-kumar-b",
    name: "Prof. Dr. Ravindra Kumar B.",
    designation: "Distinguished Member, Indian Editorial Board",
    fullTitle: "Senior Professor and Chairman, Department of Studies and Research in Economics",
    department: "Department of Studies and Research in Economics",
    institution: "Tumkur University, Tumkur, Karnataka – 572103",
    location: "Tumkur, Karnataka",
    address: "Tumkur University, Tumkur, Karnataka – 572103",
    email: "ravivani69@gmail.com",
    imageUrl: "/prof_dr_ravindra_kumar_b.png",
    academicBackground: "Ph.D., Economics, University of Pune (2003). M.A. Economics (Pune, 1992); M.A. English; M.B.A. (Marketing). Professor since 2014; Chairman of the Department (2013–15, 2019–21, 2025–present). 32 years of teaching; 13 Ph.D.s awarded; 8 scholars pursuing. Author/editor of 17 books and 17 international journal papers. Visiting Professor, S.V. University, Tirupati.",
    areasOfContribution: [
      "Agricultural Economics, Commodity Markets and Minimum Support Policy",
      "Rural Development and Regional Political Economy",
      "Indian Economic Thought, Teaching and Curriculum",
      "Environmental Economics and Sustainable Development",
      "Higher Education Policy, Research Supervision and Academic Governance",
      "Development Practice and Government–University Linkages",
      "Editorial Review of Economic Research and Policy Papers"
    ],
    professionalHighlights: "Academic Council Member and Director, PME Board, Tumkur University. Chairman, NAAC Peer Team Visit; Coordinator, SWAYAM course on Environmental Economics; Director, Dr. G.S. Paramashivaihya Study Centre. Member, All India Economic Association. Doctoral thesis on Production and Marketing of Arecanut (South Canara) was referred for Minimum Support Policy by CAMPCO and Government in 2004. Best Ph.D. Award, Akhila Havyaka Mahasabha, Bengaluru (2003).",
    category: "Core"
  },
  {
    id: "prof-bp-veerabhadrappa",
    name: "Prof. B. P. Veerabhadrappa",
    designation: "Distinguished Member, Indian Editorial Board",
    fullTitle: "Former Vice Chancellor, Kuvempu University, Shivamogga",
    department: "Public Economics & Development Economics",
    institution: "Former Vice Chancellor, Kuvempu University, Shivamogga",
    location: "Bengaluru, Karnataka",
    address: "Flat no. 2028, Bristol 'B' Block, Prestige Kensington Gardens, No. 17, HMT Main road, Jalahalli, Bangalore, Karnataka - 560013",
    email: "drbpv58@gmail.com",
    institutionalEmail: "vc@kuvempu.ac.in",
    imageUrl: "/prof_bp_veerabhadrappa.png",
    academicBackground: "Ph.D., Economics, Kuvempu University (2000). M.A. Economics, University of Mysore (1980) — First Rank, two Gold Medals. Vice Chancellor, Kuvempu University (2 August 2019–1 August 2023). In-charge Vice Chancellor, Finance Officer, Dean and Professor of Economics, Davangere University. About 100 scholarly publications. Editor, Southern Economist; former Editor-in-Chief, Kuvempu University Journal.",
    areasOfContribution: [
      "Indian Political Economy and Public Finance",
      "Agricultural Economics and Rural Development",
      "Regional, Inter-State and Intra-State Disparities",
      "Higher-Education Governance, NEP and University Administration",
      "Labour, Poverty and Social Policy",
      "SAARC and Regional Economic Cooperation",
      "Editorial Review of Economic Research and Policy Papers"
    ],
    professionalHighlights: "Teaching and academic service from 1980. Visiting Fellow, IIAS Shimla and NIPFP New Delhi. Resource person associated with the London School of Economics; academic visits to Oxford and Cambridge (2014–15). Life member, Indian Economic Association. Led NEP introduction at university level; MoUs with Lund University and Athens University.",
    category: "Core"
  },
  {
    id: "prof-sat-prakash-bansal",
    name: "Prof. (Dr.) Sat Prakash Bansal",
    designation: "Distinguished Member, Indian Editorial Board",
    fullTitle: "Vice Chancellor, Central University of Himachal Pradesh, Dharamshala",
    department: "University Governance & Services Economy",
    institution: "Central University of Himachal Pradesh, Dharamshala",
    location: "Dharamshala, Himachal Pradesh",
    email: "spbansal.vc@gmail.com",
    imageUrl: "/prof_sat_prakash_bansal.png",
    academicBackground: "M.Com., M.Phil., Ph.D., DCO, SCHE (Switzerland), D.Litt. Former Vice Chancellor of H.P. University, H.P. Technical University, IGU Rewari, BPS Mahila Vishwavidyalaya; Founder VC, Maharaja Agrasen University. Governing Council, Association of Indian Universities. Body Member, AIIMS Bilaspur; Governing Council, ICMR. 25 books; 95 papers; 23 Ph.D.s guided; 11 national research projects; 12+ patents.",
    areasOfContribution: [
      "Higher-Education Policy, NEP-2020 and University Governance",
      "Tourism, Hospitality and the Services Economy",
      "Management Education and e-Learning Public Goods",
      "Himalayan and Hill-State Development",
      "Institutional Building and Quality Assurance (UGC, NAAC, AICTE, AIU)",
      "International Academic Collaboration",
      "Editorial Review of Education, Tourism and Policy Papers"
    ],
    professionalHighlights: "President, Indian Tourism & Hospitality Congress; SAARC President, THERAA. Former Chairperson, All India Board of Tourism and Hospitality Management, AICTE. Visitor’s Nominee, JNU, IIM Amritsar and LNIPE Gwalior. Principal Investigator, e-PG Pathshala. Awards include Malviya Pragya Samman (BHU, 2022) and Most Iconic Vice Chancellor Award (2021).",
    category: "Core"
  },
  {
    id: "rakesh-asthana",
    name: "Shri Rakesh Asthana",
    honorific: "I.P.S. (Retd.)",
    designation: "Distinguished Member, Indian Editorial Board",
    fullTitle: "Former DG, Border Security Force · Former CP, Delhi Police · Arbitrator, Indian Council of Arbitration · Special Monitor, NHRC",
    department: "Security, Governance & Dispute Resolution",
    institution: "Former Commissioner of Police, Delhi & Director General, BSF",
    location: "New Delhi",
    address: "FF, Front Side, 18 Link Road, Block J, Jangpura Extension, New Delhi - 110014",
    email: "asthaanarakesh@gmail.com",
    profileLink: "https://www.linkedin.com/in/rakesh-asthana-6b4463153",
    imageUrl: "/rakesh_asthana.png",
    academicBackground: "M.A. History, Agra University (1982). Former Director General, BSF; DG, Bureau of Civil Aviation Security; DG, Narcotics Control Bureau; Special Director, CBI; Commissioner of Police, New Delhi (2021–22). Empanelled arbitrator with ICA, NTPC and ONGC Outside Expert Committee. President’s Police Medal for Distinguished Service (2009); Police Medal for Meritorious Service (2001).",
    areasOfContribution: [
      "National Security, Border Management and Counter-Terrorism",
      "Economic Offences, Financial Crime and Institutional Integrity",
      "Aviation Security and Narcotics Policy",
      "Urban Safety, Safe City Systems and Cyber Crime",
      "BFSI Regulation, Corporate Governance and Vigilance",
      "Arbitration and Institutional Dispute Resolution",
      "Editorial Review of Security, Governance and Policy Papers"
    ],
    professionalHighlights: "Commanded BSF, the world’s largest border-guarding force. As CP Delhi, restructured the Force into functional verticals and introduced Anubhuti, e-Chittha Munshi, Vehiscan and e-FIR. As CP Surat, implemented a PPP Safe City project. Special Monitor, NHRC, on terrorism, counter-insurgency, LWE and communal riots.",
    category: "Core"
  },
  {
    id: "prof-ch-ramakrishna",
    name: "Prof. Ch. Ramakrishna",
    designation: "Distinguished Member, Indian Editorial Board",
    fullTitle: "Distinguished Professor, GITAM Institute of Science",
    department: "Geology, Geochemistry & Natural-Resource Economics",
    institution: "GITAM (Deemed-to-be University), Visakhapatnam, Andhra Pradesh",
    location: "Visakhapatnam, Andhra Pradesh",
    email: "chrk2020@gmail.com",
    imageUrl: "/prof_ch_ramakrishna.png",
    academicBackground: "Ph.D., Geology, Andhra University (1995); thesis on mineralogy, PGE-REE geochemistry and tectonics of chromite ores, Orissa. Distinguished Professor since 2017. Former Director, UGC Affairs & Research Activities, GITAM (2009–2020). 30+ years of teaching and research; 75 publications; 576 Scopus citations; h-index 14; 9 doctoral degrees awarded and 3 ongoing.",
    areasOfContribution: [
      "Geology, Geochemistry and Natural-Resource Economics",
      "Groundwater, Water Resources and Coastal Environmental Science",
      "Higher-Education Governance, NAAC and UGC Policy",
      "Research Funding, Institutional Quality and Accreditation",
      "Environmental Management and Sustainable Development",
      "Doctoral Supervision and Interdisciplinary Research Review",
      "Editorial Review of Science–Policy and Development Papers"
    ],
    professionalHighlights: "Coordinated NAAC A grade (3.20/4.00, 2011) and A+ grade (3.53/4.00, 2017); UGC 12B status; Category-I graded autonomy. Facilitated 227 sponsored projects (~Rs. 68 crore) and the DST Centre for Water Technology Initiatives. Former Member, Board of Management and Academic Council, GITAM.",
    category: "Core"
  },
  {
    id: "senior-advocate-vikas-singh",
    name: "Senior Advocate Vikas Singh",
    honorific: "LL.D. (Honoris Causa)",
    designation: "Distinguished Member, Indian Editorial Board",
    fullTitle: "Senior Advocate, Supreme Court of India · Four-term President, Supreme Court Bar Association · Former Additional Solicitor General of India",
    department: "Constitutional Law, Supreme Court Practice & Jurisprudence",
    institution: "Supreme Court of India, New Delhi",
    location: "New Delhi",
    imageUrl: "/vikas_singh.png",
    academicBackground: "Designated Senior Advocate in 2004 with over 36 years at the Bar. Former Additional Solicitor General of India (2005–2008); Special Prosecutor for the Government of NCT of Delhi in the Abu Salem extradition and criminal trial. Conferred the degree of Doctor of Laws (LL.D.) Honoris Causa by Amity University on 12 November 2022.",
    areasOfContribution: [
      "Constitutional Law, Supreme Court Practice and Institutional Jurisprudence",
      "Public Law, Governance and High-Stakes Public Interest Litigation",
      "Religious, Cultural and Heritage Property Disputes",
      "Legislative Drafting, Parliamentary Practice and Legal Education",
      "Social Justice — Disability Inclusion, Girl-Child Education and Community Equity",
      "Editorial Review of Law, Constitutional Policy and Public-Affairs Papers",
      "National Institutional Leadership and the Ethics of the Bar"
    ],
    professionalHighlights: "Four-term President of the Supreme Court Bar Association (2017–18, 2021–22, 2022–23 and 2025–26). Additional Solicitor General of India (2005–2008), representing the Union in matters of national import. Appointed Special Prosecutor by the Government of NCT of Delhi in the Abu Salem extradition and criminal trial. Successfully navigated three of India’s most complex religious-property disputes: the Ayodhya Ram Mandir case, the Guru Ravidas Temple matter in Tughlaqabad, and the Balayogi Shri Sadanand Maharaj Ashram case in Maharashtra. Visiting faculty at the Bureau of Parliamentary Studies and Training (BPST), addressing international delegates, jurists and legislators on legislative drafting, constitutional mechanisms and legal education. Chief Patron of the Delhi Foundation of Deaf Women; Patron of Tamana (founded by Padma Bhushan Dr. Shayama Chona); Chairman of Respect India; Trustee of the Sai Temple, Greater Noida. Conferred Doctor of Laws (LL.D.) Honoris Causa by Amity University on 12 November 2022.",
    category: "Core"
  },

  // =========================================================================
  // III. ACADEMIC DEPARTMENTS (RESEARCH & STUDIES)
  // Studies & Research Faculty in Economics
  // =========================================================================
  {
    id: "rvgangshetty",
    name: "Dr. R.V. GANGSHETTY",
    designation: "Professor & Chairman",
    department: "Department of Economics",
    institution: "Karnataka State Akkamahadevi Women's University, Vijayapura",
    email: "rvgshetty@gmail.com",
    category: "Research"
  },
  {
    id: "dnpatil",
    name: "Prof. D. N. Patil",
    designation: "Professor",
    department: "Department of Economics",
    institution: "Rani Chennamma University, Belgauvi",
    email: "dr.dnpatil@rediffmail.com",
    category: "Research"
  },
  {
    id: "hruma",
    name: "Dr. H.R. Uma",
    designation: "Professor",
    department: "Department of Economics",
    institution: "Sir.M.V P.G. Centre, Mysore University, Mandya",
    email: "umahr_mahesh@yahoo.co.in",
    category: "Research"
  },
  {
    id: "kumudad",
    name: "Dr. Kumuda D",
    designation: "Professor",
    department: "Department of Economics",
    institution: "Bangalore North University, Kolar",
    email: "kumuda.07@gmail.com",
    category: "Research"
  },
  {
    id: "dmmadari",
    name: "Dr. D.M. Madari",
    designation: "Professor and Chairman",
    department: "Dept of Economics",
    institution: "Karnataka State women's University, Vijayapura",
    email: "madaridm@gmail.com",
    category: "Research"
  },
  {
    id: "hucchegowda",
    name: "Dr. Hucche Gowda",
    designation: "Professor",
    department: "Department of Economics",
    institution: "Davanagere University, Davanagere",
    email: "hgowada_smtd@rediffmail.com",
    category: "Research"
  },
  {
    id: "dsangamithra",
    name: "Prof. D Sangamithra",
    designation: "Professor",
    department: "Department of Economics",
    institution: "Bharatiar University, Tamil Nadu",
    email: "sangamithra@gmail.com",
    category: "Research"
  },
  {
    id: "glparvathamma",
    name: "Prof. Parvathamma G L",
    designation: "Professor of Economics",
    department: "DOSR in Economics",
    institution: "Bangalore University",
    email: "glparvathi@gmail.com",
    category: "Research"
  },
  {
    id: "hhbharadi",
    name: "Prof. H. H. Bharadi",
    designation: "Senior Professor",
    department: "Department of Economics",
    institution: "Karnatak University, Dharwad",
    email: "hhbharadikud@gmail.com",
    category: "Research"
  },
  {
    id: "shivakumara",
    name: "Prof. Shivakumara Swamy",
    designation: "Professor",
    department: "Department of Economics",
    institution: "Karnataka State Open University",
    email: "shivakumareconomics@gmail.com",
    category: "Research"
  }
];
