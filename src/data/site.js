// ============================================================
// CARIBELLE ADVISORY — Content (source of truth)
// Pulled from the client brief. Edit copy here in one place.
// ============================================================

export const brand = {
  name: "Caribelle Advisory",
  principal: "Joseph",
  // TODO: confirm full name, LinkedIn, location, scheduling link
  email: "joseph.herrera@caribelleadvisory.com",
  location: "Caribbean & North America",
};

export const hero = {
  eyebrow: "Boutique Strategy & Operations",
  // The punch line (slide 5)
  headline: [
    "MBB performance.",
    "Without the price.",
  ],
  sub: "Boston Consulting Group–trained freelance consultant & boutique consultancy.",
};

export const about = {
  eyebrow: "About",
  title: "A Big-3 operator, partner-direct.",
  paragraphs: [
    "Joseph spent his career at the Boston Consulting Group (US) — one of the world's “Big 3” strategy firms — leading large-scale operating-model and organizational transformations for some of the largest companies in energy, chemicals, and industrials.",
    "He left BCG to get married and start his family, and now provides international consulting services across the Caribbean and North America — individual freelance and small-team projects.",
  ],
  pull:
    "Freed up $150M+ across transformational initiatives · unified 10,000+ employees across 50+ countries · four years inside the Boston Consulting Group.",
};

export const stats = [
  { value: 150, prefix: "$", suffix: "M+", label: "In transformational initiatives" },
  { value: 10000, suffix: "+", label: "Org moves" },
  { value: 50, suffix: "+", label: "Countries under one operating model" },
  { value: 4, suffix: "", label: "Years of BCG experience" },
];

export const offerings = [
  {
    no: "01",
    title: "Consulting Horsepower",
    summary:
      "Immediate ramp-up for your team's high-impact projects that need additional senior support.",
    points: [
      "Senior, BCG-trained capacity on demand",
      "Embeds with your team — no spin-up tax",
      "Best for stretched workstreams, tight deadlines, or to reduce project overheads",
    ],
  },
  {
    no: "02",
    title: "Caribelle Led Projects",
    summary:
      "Discrete, well-defined mandates priced to outcome — diligence to delivery.",
    groups: [
      {
        heading: "Corporate Strategy",
        items: [
          "Due diligences",
          "Operating model redesign",
          "Procurement strategy",
          "Tech & AI roadmap design",
        ],
      },
      {
        heading: "Operational work",
        items: [
          "Custom software build & implementation — partnered with Silver Tongue Contracting",
        ],
      },
    ],
  },
  {
    no: "03",
    title: "Full-Program Delivery",
    summary:
      "We can support larger mandates for up to 3–4 person teams.",
    points: [
      "End-to-end business transformation",
      "Strategy and implementation",
    ],
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
    metric: "PE",
    title: "Commercial due diligence",
    client: "Top-10 PE firm",
    type: "Private equity",
  },
  {
    metric: "PE",
    title: "Operational due diligence",
    client: "Top-10 PE firm",
    type: "Private equity",
  },
];

// Real engagements from Joseph's BCG career. Logos sourced live with a
// graceful monochrome-wordmark fallback; swap in official assets later.
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

export const approach = {
  eyebrow: "How I Work",
  title: "Senior-led from first call to last mile.",
  intro:
    "No analyst telephone game, no fly-in-fly-out teams. You work directly with the person doing the thinking — backed by a partner network when scale demands it.",
  steps: [
    {
      no: "01",
      title: "Scope",
      body: "A tight, honest conversation about the problem, the prize, and what “done” looks like. Fixed scope where it helps you.",
    },
    {
      no: "02",
      title: "Mobilize",
      body: "Embed fast. For larger programs, stand up a vetted team through the partner model — calibrated to the mandate, not a staffing pyramid.",
    },
    {
      no: "03",
      title: "Deliver",
      body: "Senior hands on the work. Crisp analysis, real recommendations, and the implementation muscle to get them over the line.",
    },
    {
      no: "04",
      title: "Transition",
      body: "Capability left behind, not dependency. You keep the model, the tools, and the team that can run it.",
    },
  ],
  partner: {
    title: "The partner model",
    body: "For full programs, Caribelle Advisory fields an entire team through a network of trusted consultants and delivery partners — including Silver Tongue Contracting for custom software and implementation. You get scale and seniority without a legacy firm's overhead.",
  },
};

export const nav = [
  { label: "About", to: "/about" },
  { label: "What I Do", to: "/what-i-do" },
  { label: "Track Record", to: "/track-record" },
  { label: "How I Work", to: "/how-i-work" },
  { label: "Contact", to: "/contact" },
];
