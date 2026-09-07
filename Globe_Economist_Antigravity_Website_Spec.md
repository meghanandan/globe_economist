# The Globe Economist --- Antigravity Website Build Specification

## 1. Project Objective

Build a complete, production-quality, responsive static website for:

**THE GLOBE ECONOMIST**\
**Integrated Economics Review**

Tagline:

> Journal of International Economics, Sustainable Development & Policy
> Redesign

Official domain:

`www.globeeconomist.com`

Publication location:

`New Delhi, India`

Current issue:

`Vol. III · Issue 09 · September 2026`

This specification is based on the supplied **Globe Economist Website
Clarification / Reply** PDF and its embedded screenshots. Treat that
source as the primary source of truth for the website's page structure,
approved content, terminology, and visual direction.

The PDF explicitly identifies these redesigned pages:

1.  Home / Masthead
2.  Current Issue
3.  About the Publication
4.  Analyses
5.  Editorial Board & Imprint
6.  Archives
7.  Contact / Editorial Office

Do not invent additional publication sections or unsupported claims.

------------------------------------------------------------------------

# 2. REQUIRED TECHNOLOGY STACK

Use:

-   React
-   Vite
-   TypeScript
-   Tailwind CSS
-   React Router
-   Lucide React only where an icon is genuinely useful

Do **not** use:

-   Bootstrap
-   Material UI
-   Chakra UI
-   a generic website template
-   a pre-built marketing theme
-   unnecessary UI component libraries

Tailwind is the styling framework, but the final visual result must
**not look like a generic Tailwind/SaaS website**.

The project must be runnable with:

``` bash
npm install
npm run dev
```

and must successfully build with:

``` bash
npm run build
```

No backend, database, CMS, authentication, or API is required.

------------------------------------------------------------------------

# 3. ROUTES

Implement exactly these routes:

``` text
/
 /current-issue
 /analyses
 /about
 /editorial-board
 /archives
 /contact
```

All navigation links must work.

Do not leave navigation links pointing to `#`.

Use React Router.

------------------------------------------------------------------------

# 4. DESIGN DIRECTION

The supplied screenshots establish a formal editorial publication
aesthetic.

The design should feel like:

-   a serious economics journal
-   an international policy review
-   an academic/editorial publication
-   institutional and credible
-   premium but restrained
-   contemporary without looking like a SaaS product

The visual language should combine:

**old-world editorial authority + modern responsive web design**

The supplied screenshots use:

-   deep navy header/navigation bands
-   warm ivory/paper content backgrounds
-   muted gold accents
-   serif typography
-   thin editorial rules
-   compact uppercase navigation
-   centered publication masthead
-   generous whitespace
-   restrained borders
-   structured editorial cards

Preserve this visual character while making the implementation
significantly better for the web.

------------------------------------------------------------------------

# 5. COLOR SYSTEM

Use these design tokens consistently.

``` text
Primary Navy:       #0B1D33
Deep Navy:          #07182C
Warm Ivory:         #F7F3E8
Paper:              #FBF9F3
Muted Gold:         #B79A58
Dark Gold:          #967B3F
Charcoal:           #252525
Muted Text:         #6D6A62
Border:             #DDD6C8
```

Create reusable Tailwind theme tokens where practical.

Do not scatter arbitrary colors throughout components.

Avoid:

-   bright gradients
-   neon colors
-   glassmorphism
-   excessive shadows
-   overly colorful cards
-   generic blue corporate styling

------------------------------------------------------------------------

# 6. TYPOGRAPHY

Typography is a major part of the identity.

Recommended serif choices:

-   Cormorant Garamond
-   Source Serif 4
-   Libre Baskerville
-   Playfair Display

Recommended sans-serif choices:

-   Source Sans 3
-   Inter
-   IBM Plex Sans

Preferred combination:

**Headings / publication identity:**\
Cormorant Garamond or Source Serif 4

**Body / UI / navigation:**\
Source Sans 3 or Inter

Use serif typography for:

-   THE GLOBE ECONOMIST
-   major page headings
-   article titles
-   issue titles
-   editorial statements

Use sans-serif typography for:

-   navigation
-   metadata
-   category labels
-   buttons
-   supporting UI

Navigation should use small uppercase typography with tasteful letter
spacing.

Do not make every element bold.

------------------------------------------------------------------------

# 7. GLOBAL PAGE SHELL

Create a reusable publication layout:

``` text
PublicationLayout
 ├── TopPublicationBar
 ├── PublicationMasthead
 ├── Navigation
 ├── PageContent
 └── SiteFooter
```

Reusable components should include:

``` text
SiteHeader
TopPublicationBar
PublicationMasthead
Navigation
MobileNavigation
PageContainer
SectionHeading
EditorialCard
IssueItem
AnalysisItem
ArchiveItem
EditorialNote
ProfileCard
SiteFooter
Divider
```

------------------------------------------------------------------------

# 8. TOP PUBLICATION BAR

Use a subtle information strip.

Left:

``` text
DIGITAL PUBLICATION · NEW DELHI · TUESDAY, 1 SEPTEMBER 2026
```

Right:

``` text
VOL. III · ISSUE 09 · INTEGRATED ECONOMICS REVIEW
```

On mobile, stack or simplify this information without causing overflow.

------------------------------------------------------------------------

# 9. MASTHEAD

Use a refined publication masthead.

Deep navy area:

-   small publication mark/logo
-   centered publication identity
-   understated institutional appearance

Main ivory masthead:

``` text
THE GLOBE ECONOMIST
```

Make `ECONOMIST` subtly gold-accented.

Underneath:

``` text
A review of integrated economics, natural resilience and social development
```

The masthead should feel like a serious printed journal adapted for
digital use.

If an approved logo asset exists in the project, use it.

If no logo asset exists, create a restrained temporary typographic mark
rather than an elaborate invented logo.

------------------------------------------------------------------------

# 10. MAIN NAVIGATION

Navigation items:

``` text
HOME
CURRENT ISSUE
ANALYSES
ABOUT THE PUBLICATION
EDITORIAL BOARD
ARCHIVES
CONTACT
```

Desktop:

-   horizontal
-   centered
-   compact
-   navy background
-   uppercase
-   generous tracking

Active/hover state:

-   subtle muted-gold accent
-   restrained underline or border treatment

Mobile:

-   hamburger button
-   accessible navigation menu/drawer
-   keyboard accessible
-   closes appropriately
-   no horizontal scrolling

------------------------------------------------------------------------

# 11. HOME PAGE

## Hero

Use a two-column editorial layout on desktop.

### Left column

Label:

``` text
COVER ESSAY · SEPTEMBER 2026
```

Headline:

``` text
From Maximisation to Optimum Integration:
Redesigning Economic Policy Architecture
```

Description:

``` text
GDP-first maximisation has produced fragile growth, compressed household purchasing power and exposed coastal and emerging economies to systemic shock. The Globe Economist advances a different operating system: optimum integration across production, logistics, human capital and planetary limits.
```

Author metadata:

``` text
By Prof. Dr. GVR Shastri
D.Litt. · Ph.D. IIT Delhi · SEP Stanford · SELP Harvard · FCMA
```

### Right column --- Current Issue

Label:

``` text
CURRENT ISSUE
```

Title:

``` text
September 2026
```

Description:

``` text
This issue examines food-system resilience in India's coast, AI-enabled multipurpose warehousing for the blue economy, and a public brief on protecting the purchasing power of the common citizen.
```

CTA:

``` text
READ THE ISSUE
```

Link to:

``` text
/current-issue
```

------------------------------------------------------------------------

# 12. HOME --- FEATURED ANALYSES

Heading:

``` text
Featured Analyses
```

Supporting label:

``` text
SELECTED FROM THE REVIEW
```

Create three editorial cards.

## Card 1

Category:

``` text
BLUE ECONOMY
```

Title:

``` text
AI-Enabled Integrated Multipurpose Multilevel Warehouse for Coastal India
```

Description:

``` text
A human-capital mediated adoption model for transforming coastal logistics into an economic lifeline rather than a cost centre.
```

Metadata:

``` text
Policy paper · 2026
```

## Card 2

Category:

``` text
FOOD SECURITY
```

Title:

``` text
Barriers, Enablers and Pathways to Food Security and Economic Resilience in Coastal India
```

Description:

``` text
Why coastal districts remain exposed to price shocks — and which institutional pathways restore resilience and maximise integration.
```

Metadata:

``` text
Research article · 2026
```

## Card 3

Category:

``` text
GLOBAL POLICY
```

Title:

``` text
The Globe Economist Survival Model for World Leaders
```

Description:

``` text
An appeal to shift fiscal and industrial policy from output maximisation to balanced, shock-resistant optimisation.
```

Metadata:

``` text
Open letter · 2026
```

Cards should feel like editorial publication entries, not SaaS feature
cards.

------------------------------------------------------------------------

# 13. HOME --- EDITOR'S DESK

Heading:

``` text
From the Editor's Desk
```

Text:

``` text
The Globe Economist is not a newslettery market noise. It is a publication devoted to one question: how should a developing economy — especially a coastal civilisation — organise production, warehousing, energy, food and human capital so that the common citizen's purchasing power is protected?

Our working premise is simple. Any shastra can be repaired. If a system collapses — collapse, recovery becomes a generation's work. This review therefore privileges integration over isolated targets, and resilience over headline growth.
```

Author:

``` text
— Prof. Dr. GVR Shastri
Editor-in-Chief, The Globe Economist
Chairman, Coastal India Development Council
```

Design treatment:

-   warm paper panel
-   subtle gold vertical rule
-   editorial typography
-   no heavy shadow

------------------------------------------------------------------------

# 14. HOME --- BRIEFING NAMES

Heading:

``` text
Briefing Names
```

Items:

``` text
Purchasing power is not the same as the cost of living.
Policy note to review leaders, 2026

Coastal economic lifeline through integrated development.
D.Litt. thesis line of inquiry

IMMWs for India's coastal blue economy.
Method-focused research programme

National resilience for the Global South.
Optimum Integration Economics
```

Present these as compact editorial references.

------------------------------------------------------------------------

# 15. CURRENT ISSUE PAGE

Page title:

``` text
September 2026
```

Metadata:

``` text
Integrated Economics Review · Digital Edition · New Delhi
```

Issue identifier:

``` text
VOL. III · ISSUE 09 · SEPTEMBER 2026
```

Contents:

## 1 --- COVER ESSAY

Title:

``` text
From Maximisation to Optimum Integration
```

Description:

``` text
Redesigning Indian and Global South economic policy architecture so that growth, logistics, food systems and household purchasing power move together rather than conflict.
```

## 2 --- RESEARCH

Title:

``` text
AI-Enabled Integrated Multipurpose Multilevel Warehousing for Coastal India
```

Description:

``` text
A human-capital mediated AI adoption model for blue-economy transformation. Accepted for presentation, ICAIR-2026.
```

## 3 --- RESEARCH

Title:

``` text
Barriers, Enablers and Pathways to Food Security and Economic Resilience in Coastal India
```

Description:

``` text
Findings prepared for the Global Journal of Flexible Systems Management (Springer Nature).
```

## 4 --- POLICY BRIEF

Title:

``` text
Protecting the Purchasing Power of the Common Citizen
```

Description:

``` text
Why cost-of-living management and purchasing-power protection are distinct policy problems — and why confusing them produces unrest.
```

## 5 --- OPEN LETTER

Title:

``` text
Note to World Leaders: The Survival Model
```

Description:

``` text
An argument for replacing maximisation doctrines with optimum integration before debt, climate and supply-chain shocks compound.
```

Each entry can have a subtle hover/focus treatment, but do not imply an
article exists if no article content is supplied.

------------------------------------------------------------------------

# 16. ANALYSES PAGE

Page title:

``` text
Analyses
```

Intro:

``` text
Selected lines of inquiry of The Globe Economist.
```

Create four entries.

## Coastal Policy

Title:

``` text
Creation of an Economic Lifeline through Integrated Coastal Development
```

Description:

``` text
The D.Litt. line of inquiry: developing-economy strategy built around ports, warehousing, energy, agriculture and human settlements as one corridor.
```

## Logistics

Title:

``` text
IMMWs — Integrated Multipurpose Multi-Level Warehouse Systems
```

Description:

``` text
Why single-purpose storage fails coastal India, and how multi-level multipurpose design changes food security and trade resilience.
```

## Macro

Title:

``` text
Five Stages: An Economy Travelling Towards Disaster
```

Description:

``` text
A diagnostic sequence for policymakers who still treat fiscal stress as a cyclical inconvenience rather than a structural unravelling.
```

## Geoeconomics

Title:

``` text
Debt, Diplomacy and the Purchasing Power Trap
```

Description:

``` text
How external liabilities transmit into household welfare — and why headline GDP can rise while the common citizen is impoverished.
```

Use thin horizontal rules between entries.

------------------------------------------------------------------------

# 17. ABOUT THE PUBLICATION PAGE

Page title:

``` text
About the Publication
```

Opening:

``` text
The Globe Economist is an independent digital review of integrated economics, coastal and blue-economy policy, food-system resilience, and national economic architecture for the Global South.
```

Second paragraph:

``` text
The publication is edited from New Delhi and presents original essays, policy briefs, research summaries and open letters by Prof. Dr. GVR Shastri and associated researchers. It is the official web publication associated with the Globe Economist platform.
```

## Purpose

``` text
The review exists to move public debate from maximisation of isolated targets — GDP, throughput, headline investment — toward optimum integration: a design of policy in which livelihoods, coastal infrastructure, human capital and household purchasing power are treated as one system.
```

## Scope

``` text
Integrated / Optimum Integration Economics
Coastal India and blue-economy development
Multipurpose multilevel warehousing and food security
Purchasing power of the common citizen
Geoeconomic resilience and Global South policy
```

## Frequency and format

``` text
The Globe Economist is published as a digital edition with monthly issue packaging and rolling analyses. Print compilation of selected papers is reserved for later volumes. ISSN registration is in process.
```

## Publisher / Editorial office

``` text
Editorial office: New Delhi, India

Editor-in-Chief:
Prof. Dr. Gadepalli Venkatarama Sastry
(Prof. Dr. GVR Shastri)
D.Litt. (Integrated Economics), Ph.D. (IIT Delhi)

Correspondence:
drgvr7@gmail.com

Domain:
globeeconomist.com
```

------------------------------------------------------------------------

# 18. EDITORIAL BOARD PAGE

Page title:

``` text
Editorial Board
```

## Editor-in-Chief

``` text
Prof. Dr. Gadepalli Venkatarama Sastry
(Prof. Dr. GVR Shastri)
```

Credentials:

``` text
D.Litt. in Integrated Economics (Tumkur University)

Ph.D., Indian Institute of Technology Delhi

Stanford Executive Program, Stanford Graduate School of Business

Senior Executive Leadership Program, Harvard Business School

FCMA — The Institute of Cost Accountants of India, Kolkata

FCMA / CIMA — London
```

Additional roles:

``` text
Senior Economist, Author and International Arbitrator

Chairman, Coastal India Development Council (CICD)

Founder & Lifetime Chairman, Sri Hariom Shastri Charitable Trust
```

## Publication Imprint

``` text
The Globe Economist — Integrated Economics Review

Place of publication:
New Delhi, India

Medium:
Digital

Language:
English (with selected regional commentary)

ISSN:
Application in process
```

Use elegant profile/information cards, but avoid modern dashboard
aesthetics.

------------------------------------------------------------------------

# 19. ARCHIVES PAGE

Page title:

``` text
Archives
```

Subtitle:

``` text
Volume III issues, June–September 2026
```

Archive entries:

``` text
Vol. III, Issue 09 — September 2026
Optimum Integration; Coastal Warehousing; Food Security

Vol. III, Issue 08 — August 2026
Purchasing Power of the Common Citizen

Vol. III, Issue 07 — July 2026
Blue Economy Human-Capital Notes

Vol. III, Issue 06 — June 2026
Integrated Coastal Development
```

Additional note:

``` text
Earlier digital briefs and open letters are being collated into the redesigned archive as the site migration completes.
```

Use clear issue metadata and thin editorial separators.

------------------------------------------------------------------------

# 20. CONTACT PAGE

Page title:

``` text
Contact the Editorial Office
```

Publication:

``` text
The Globe Economist
Integrated Economics Review
```

Editorial office:

``` text
New Delhi, India
```

Email:

``` text
drgvr7@gmail.com
```

Alternate:

``` text
profdrgvr@gmail.com
```

Telephone:

``` text
+91 98999 77731
```

Editor-in-Chief:

``` text
Prof. Dr. GVR Shastri
```

Related site:

``` text
https://profdrgvr.com
```

The related site should open in a new tab.

Email addresses must use `mailto:`.

Telephone must use `tel:`.

Correspondence instruction:

``` text
For ISSN, indexing, media accreditation and institutional listing correspondence, write with the subject line:

Publication Verification — The Globe Economist
```

Do not create a fake contact form unless there is a real submission
mechanism. The source only establishes correspondence details.

------------------------------------------------------------------------

# 21. GLOBAL FOOTER

Every page must use the same footer.

Deep navy background.

Three desktop columns.

## Publication

``` text
PUBLICATION

The Globe Economist
Integrated Economics Review
Digital edition published from New Delhi
Website: globeeconomist.com
ISSN: Application in process
```

## Editor-in-Chief

``` text
EDITOR-IN-CHIEF

Prof. Dr. Gadepalli Venkatarama Sastry
(Prof. Dr. GVR Shastri)
D.Litt. — Integrated Economics
Ph.D. — Indian Institute of Technology Delhi
Stanford Executive Program
Senior Executive Leadership Program, Harvard Business School
FCMA / CIMA
```

## Scope

``` text
SCOPE

Integrated / Optimum economics
Coastal India and blue-economy development
Food security and resilience
Purchasing power of the common citizen
Geoeconomics and Global South policy
```

Footer bottom:

``` text
© 2026 The Globe Economist · globeeconomist.com

Editorial office: New Delhi, India
```

Mobile footer becomes stacked.

------------------------------------------------------------------------

# 22. RESPONSIVE DESIGN

The supplied screenshots are desktop-oriented, but the website must be
genuinely responsive.

Do not simply shrink the desktop layout.

## Desktop

At approximately 1280px and above:

-   centered publication container
-   generous margins
-   editorial grid
-   two-column hero
-   three-column featured analysis section
-   three-column footer
-   strong hierarchy

## Tablet

Approximately 768px--1199px:

-   reduce gutters
-   intelligently collapse grids
-   preserve editorial hierarchy
-   avoid cramped text

## Mobile

Approximately 320px--767px:

-   hamburger navigation
-   single-column content
-   stacked cards
-   stacked footer
-   scaled masthead
-   readable serif headings
-   wrapped metadata
-   touch-friendly controls
-   no horizontal overflow

Use Tailwind responsive utilities intentionally.

Use `clamp()` for important responsive typography where useful.

Example:

``` css
font-size: clamp(2rem, 5vw, 4rem);
```

Do not rely on fixed desktop dimensions.

------------------------------------------------------------------------

# 23. TAILWIND DESIGN RULES

Tailwind is an implementation framework, not the visual identity.

Do NOT let the design become:

``` text
rounded-xl
shadow-lg
bg-white
p-6
text-blue-600
```

everywhere.

Prefer:

-   square or minimally rounded surfaces
-   thin borders
-   editorial rules
-   serif headings
-   ivory paper backgrounds
-   deep navy bands
-   muted gold accents
-   generous whitespace
-   asymmetrical editorial composition
-   restrained transitions

Avoid:

-   SaaS-style rounded cards
-   gradient hero sections
-   glassmorphism
-   floating blobs
-   pill-shaped buttons
-   dashboard layouts
-   excessive icons
-   excessive animations
-   oversized CTA buttons

Recommended border radius:

``` text
0px to 4px
```

Buttons should generally be compact, uppercase, editorial, and bordered.

------------------------------------------------------------------------

# 24. ACCESSIBILITY

Use semantic HTML.

Requirements:

-   proper heading hierarchy
-   keyboard-accessible navigation
-   visible focus states
-   sufficient contrast
-   meaningful link labels
-   accessible mobile navigation
-   ARIA labels where needed
-   decorative images appropriately marked
-   minimum comfortable touch targets

Do not sacrifice accessibility for visual similarity.

------------------------------------------------------------------------

# 25. SEO

Implement page-specific metadata.

Homepage title:

``` text
The Globe Economist | Integrated Economics Review
```

Homepage description:

``` text
The Globe Economist is an independent digital review covering integrated economics, sustainable development, coastal and blue-economy policy, food-system resilience and Global South economic policy.
```

Create appropriate titles/descriptions for the other pages.

Use:

-   semantic HTML
-   proper heading hierarchy
-   Open Graph metadata
-   clean URLs
-   canonical-friendly structure

Do not make unsupported claims about:

-   search rankings
-   indexing
-   ISSN approval
-   impact factor
-   readership
-   awards
-   affiliations

------------------------------------------------------------------------

# 26. CONTENT ACCURACY --- CRITICAL

The source document is the authority.

Do not invent:

-   additional editors
-   additional authors
-   additional issues
-   ISSN numbers
-   awards
-   impact factors
-   readership statistics
-   testimonials
-   social media accounts
-   indexing claims
-   fake articles
-   fake downloads
-   fake subscriptions
-   fake comments
-   fake analytics

Keep:

``` text
ISSN: Application in process
```

exactly as established by the source.

Keep the publication location:

``` text
New Delhi, India
```

Keep the official domain:

``` text
globeeconomist.com
```

Keep the related site:

``` text
profdrgvr.com
```

------------------------------------------------------------------------

# 27. DATA ARCHITECTURE

Keep publication content separate from components.

Suggested:

``` text
src/
├── assets/
│   └── images/
│
├── components/
│   ├── layout/
│   │   ├── SiteHeader.tsx
│   │   ├── PublicationMasthead.tsx
│   │   ├── Navigation.tsx
│   │   ├── MobileNavigation.tsx
│   │   └── SiteFooter.tsx
│   │
│   ├── editorial/
│   │   ├── SectionHeading.tsx
│   │   ├── EditorialCard.tsx
│   │   ├── IssueItem.tsx
│   │   ├── AnalysisItem.tsx
│   │   ├── ArchiveItem.tsx
│   │   ├── EditorialNote.tsx
│   │   └── ProfileCard.tsx
│   │
│   └── ui/
│       ├── Divider.tsx
│       └── Button.tsx
│
├── data/
│   ├── publication.ts
│   ├── issue.ts
│   ├── analyses.ts
│   └── archives.ts
│
├── layouts/
│   └── PublicationLayout.tsx
│
├── pages/
│   ├── Home.tsx
│   ├── CurrentIssue.tsx
│   ├── Analyses.tsx
│   ├── About.tsx
│   ├── EditorialBoard.tsx
│   ├── Archives.tsx
│   └── Contact.tsx
│
├── App.tsx
├── main.tsx
└── index.css
```

Do not put the entire website into one component.

------------------------------------------------------------------------

# 28. IMAGE / ASSET POLICY

The source screenshots should be used as a design reference, not as a
single website image.

Everything must be real:

-   HTML
-   React
-   CSS
-   Tailwind
-   selectable text
-   functional navigation

Do not implement a screenshot as one giant background image.

If no appropriate image assets are supplied, the design should remain
typography-led.

Do not fill the website with generic stock photos just to make it look
"modern."

------------------------------------------------------------------------

# 29. INTERACTION

Implement only useful interactions:

-   active navigation state
-   mobile navigation
-   subtle hover states
-   keyboard focus states
-   restrained transitions
-   external-link behavior
-   accessible menu behavior

Do not create:

-   fake login
-   fake subscription
-   fake search
-   fake article comments
-   fake analytics
-   fake social feeds
-   fake downloads
-   fake loading screens

This is a static publication website.

------------------------------------------------------------------------

# 30. PERFORMANCE

Keep the site lightweight.

Prefer:

-   local/static content
-   optimized assets
-   minimal dependencies
-   reusable components
-   CSS-based effects
-   no unnecessary client-side libraries

Avoid unnecessary JavaScript.

------------------------------------------------------------------------

# 31. VISUAL QUALITY BAR

Before declaring the project finished, inspect the website as an
experienced editorial web designer.

Ask:

-   Does it look like a credible economics publication?
-   Does it feel like an academic/editorial journal?
-   Does it preserve the visual character of the supplied screenshots?
-   Does the navy/ivory/gold palette feel refined?
-   Does the typography feel authoritative?
-   Does the homepage have a strong editorial hierarchy?
-   Does mobile feel intentionally designed?
-   Is whitespace generous?
-   Are cards restrained?
-   Does the site avoid generic AI-generated website aesthetics?
-   Are all seven pages visually coherent?

If not, refine the implementation.

------------------------------------------------------------------------

# 32. REFERENCE FIDELITY

The PDF screenshots are the primary visual reference.

Preserve their overall:

-   publication proportions
-   centered masthead
-   navy header
-   ivory content area
-   serif typography
-   compact navigation
-   thin separators
-   restrained gold accent
-   formal editorial appearance

However, do not reproduce the PDF's surrounding page whitespace
literally.

The website itself should naturally fill the viewport.

The PDF's large surrounding white areas are part of the document/annex
presentation. The actual web implementation should use sensible viewport
spacing and responsive containers.

------------------------------------------------------------------------

# 33. FINAL QA CHECKLIST

Before finishing:

### Functional

-   [ ] `/` works
-   [ ] `/current-issue` works
-   [ ] `/analyses` works
-   [ ] `/about` works
-   [ ] `/editorial-board` works
-   [ ] `/archives` works
-   [ ] `/contact` works
-   [ ] navigation works
-   [ ] mobile menu works
-   [ ] email links work
-   [ ] phone link works
-   [ ] external related-site link works

### Responsive

Test approximately:

-   [ ] 1440px desktop
-   [ ] 1280px desktop
-   [ ] 1024px tablet
-   [ ] 768px tablet
-   [ ] 390px mobile
-   [ ] 320px mobile

Check for:

-   [ ] no horizontal overflow
-   [ ] no clipped headings
-   [ ] no broken navigation
-   [ ] no cramped footer
-   [ ] readable text
-   [ ] appropriate card stacking

### Visual

-   [ ] correct navy
-   [ ] correct ivory
-   [ ] muted gold used sparingly
-   [ ] serif editorial typography
-   [ ] compact navigation
-   [ ] thin rules
-   [ ] restrained borders
-   [ ] minimal shadows
-   [ ] minimal border radius
-   [ ] strong whitespace
-   [ ] consistent page shell

### Code

-   [ ] TypeScript compiles
-   [ ] no unused imports
-   [ ] no console errors
-   [ ] no placeholder text
-   [ ] no broken routes
-   [ ] `npm run build` succeeds

------------------------------------------------------------------------

# 34. FIRST BUILD INSTRUCTION

Do not merely explain how to build this website.

Actually implement the entire project.

Start by inspecting the existing project structure.

If the project is empty, initialize the React + Vite + TypeScript +
Tailwind project.

Then:

1.  establish the design tokens
2.  establish typography
3.  build the global publication shell
4.  build reusable components
5.  create the seven pages
6.  add all source-approved content
7.  implement responsive behavior
8.  implement navigation
9.  implement accessibility
10. implement SEO metadata
11. run the application
12. inspect every route
13. refine visual inconsistencies
14. run `npm run build`
15. fix all build errors

Do not stop at a wireframe.

Do not return a partial implementation.

Deliver the complete polished website.

------------------------------------------------------------------------

# 35. SECOND-PASS INSTRUCTION

After the first implementation is complete, perform a full visual QA
pass.

Inspect:

``` text
/
/current-issue
/analyses
/about
/editorial-board
/archives
/contact
```

Compare the implementation against the supplied Globe Economist
reference.

Focus on:

1.  Typography hierarchy
2.  Masthead proportions
3.  Navy/ivory/gold balance
4.  Navigation spacing
5.  Editorial whitespace
6.  Content width
7.  Heading sizes
8.  Card proportions
9.  Footer structure
10. Mobile navigation
11. Mobile typography
12. Tablet layout
13. 320px layout
14. Alignment consistency
15. Borders and editorial rules
16. Accessibility
17. Broken links
18. Overflow
19. Visual consistency across all pages

Do not just report problems.

Fix them directly in the code.

Do not introduce unsupported content.

Run the production build again after the fixes.

------------------------------------------------------------------------

# 36. FINAL PREMIUM REFINEMENT

Perform one final refinement pass.

Do not change:

-   information architecture
-   approved content
-   route structure
-   publication identity

Improve only visual execution.

The final site should feel:

-   authoritative
-   sophisticated
-   editorial
-   intentional
-   restrained
-   premium
-   credible
-   less template-like
-   less AI-generated

Pay particular attention to:

-   serif typography
-   optical spacing
-   line length
-   section rhythm
-   navy masthead
-   muted gold accents
-   thin rules
-   editorial cards
-   whitespace
-   responsive behavior
-   subtle hover interactions

Avoid:

-   trendy SaaS design
-   excessive rounded corners
-   gradients
-   glassmorphism
-   excessive shadows
-   oversized UI
-   unnecessary animations
-   generic stock imagery

Run the final production build and ensure all seven routes work.

------------------------------------------------------------------------

# SOURCE REFERENCE

The supplied document is:

**GlobeEconomist Website Clarification Reply --- 1 September 2026**

The document states that the official publication is:

**The Globe Economist --- Integrated Economics Review**

and identifies the redesigned website pages as Home, Current Issue,
About, Analyses, Editorial Board, Archives, and Contact.

Use the supplied PDF screenshots as the visual source of truth for the
publication's approved visual direction.
