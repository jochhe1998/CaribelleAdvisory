// ============================================================
// CARIBELLE ADVISORY — Content (source of truth)
// Single-page site. Edit copy here in one place.
// ============================================================

export const brand = {
  name: "Caribelle Advisory",
  principal: "Joseph",
  // TODO: confirm full name, LinkedIn, scheduling link
  email: "joseph.herrera@caribelleadvisory.com",
  location: "Caribbean & North America",
};

// Landing-page sections — drives the side nav and footer links.
export const sections = [
  { id: "about", label: "About" },
  { id: "what-we-do", label: "What we do" },
  { id: "services", label: "Work together" },
  { id: "track-record", label: "Track record" },
  { id: "clients", label: "Clients" },
  { id: "contact", label: "Contact" },
];

export const hero = {
  eyebrow: "Boutique strategy & operations consultant",
  headline: ["MBB performance,", "without the price."],
  sub: "Boston Consulting Group–trained freelance consultant & boutique consulting programs.",
};

export const about = {
  eyebrow: "About",
  title: "A Big-3 Operator, working 1:1 with your team.",
  paragraphs: [
    "Joseph spent his career at the Boston Consulting Group Houston — one of the world's “Big 3” strategy firms — leading large-scale organizational and operations transformations for some of the largest companies in energy, chemicals, and industrials.",
    "He left BCG to get married and start his family, and now provides international consulting services across North America and the Caribbean, both as an individual freelancer and leading small-team projects.",
  ],
};

export const stats = [
  { value: 150, prefix: "$", suffix: "M+", label: "In transformational initiatives" },
  { value: 10000, suffix: "+", label: "Roles updated and relocated" },
  { value: 4, suffix: "", label: "Years of BCG experience" },
];

// New "What we do" capability matrix (sits before the engagement models).
export const whatWeDo = {
  eyebrow: "Capabilities",
  title: "What we do.",
  groups: [
    {
      heading: "Strategy and Growth",
      items: [
        "Corporate & growth strategy",
        "Market entry and expansion",
        "Pricing strategy",
        "Customer experience transformation",
      ],
    },
    {
      heading: "Operations",
      items: [
        "Operation improvement programs",
        "Offshoring and Onshoring",
        "Shared Service Center Strategy",
        "Procurement diagnostics and transformation",
      ],
    },
    {
      heading: "Organization and People",
      items: [
        "Organizational redesign",
        "Workforce planning",
        "Comp & Ben Benchmarking",
      ],
    },
    {
      heading: "Digital, Data and Tech",
      items: [
        "Custom software build and implementation (Utilizes our digital partner)",
        "Digital transformation strategy",
        "AI / GenAI strategy",
      ],
    },
  ],
};

// Engagement models — four ways to work together.
export const offerings = [
  {
    no: "01",
    title: "Ad-hoc Support",
    summary:
      "Immediate full-time or part-time support with no contract — embed directly with your team and ramp up as we go.",
    bestFor: "High-impact projects with tight deadlines.",
  },
  {
    no: "02",
    title: "Weekly Retainers",
    summary:
      "Retainer-based hourly work — e.g. 10 hours per week, for 6 weeks.",
    bestFor:
      "Small–mid teams that can't commit to a new role, need flexible support, or want an outside perspective.",
  },
  {
    no: "03",
    title: "Caribelle Led Projects",
    summary: "Scoped projects with fixed deliverables.",
    bestFor:
      "Small–large businesses who want outside perspectives or capabilities not currently in-house.",
  },
  {
    no: "04",
    title: "Major Transformational Program",
    summary:
      "Major strategic business projects with a small 3–4 person team.",
    bestFor: "Major strategic transformations.",
  },
];

export const cases = [
  {
    metric: "$100M",
    title: "Centralized Shared Services",
    client: "Fortune 100 chemicals",
    type: "Operations Transformation",
  },
  {
    metric: "10,000+",
    title: "Employees unified under a single global reporting-line",
    client: "Fortune 10 oil & gas",
    type: "Org transformation",
  },
  {
    metric: "$34M",
    title: "Indirect procurement COGS reduction",
    client: "Fortune 200 refiner",
    type: "Cost & procurement",
  },
  {
    metric: "$15M",
    title: "VCO right-sizing",
    client: "Fortune 50 oil & gas",
    type: "Org transformation",
  },
  {
    metric: "$1B sale",
    title: "Commercial due diligence",
    client: "Top-10 PE firm",
    type: "Private equity",
  },
  {
    metric: "$500M sale",
    title: "Operational due diligence",
    client: "Top-10 PE firm",
    type: "Private equity",
  },
];

// Real engagements from Joseph's BCG career. Logos in /public/logos,
// with a graceful name-only fallback.
export const clients = [
  { name: "ExxonMobil", domain: "exxonmobil.com" },
  { name: "Chevron", domain: "chevron.com" },
  { name: "Phillips 66", domain: "phillips66.com" },
  { name: "ConocoPhillips", domain: "conocophillips.com" },
  { name: "CITGO", domain: "citgo.com" },
  { name: "LyondellBasell", domain: "lyondellbasell.com" },
  { name: "CenterPoint Energy", domain: "centerpointenergy.com" },
  { name: "Entergy", domain: "entergy.com" },
  { name: "NRG", domain: "nrg.com" },
  { name: "Goldman Sachs", domain: "goldmansachs.com" },
  { name: "Advent International", domain: "adventinternational.com" },
  { name: "Owens & Minor", domain: "owens-minor.com" },
  { name: "Humana", domain: "humana.com" },
  { name: "CVS Health", domain: "cvshealth.com" },
];
