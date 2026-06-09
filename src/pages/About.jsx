import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import StatCounter from "../components/StatCounter";
import ContactCTA from "../sections/ContactCTA";
import joseph from "../assets/joseph.jpeg";
import { about, stats } from "../data/site";

const principles = [
  {
    no: "01",
    title: "Senior hands, start to finish",
    body: "The person you meet is the person doing the work — no analyst relay, no diluted thinking.",
  },
  {
    no: "02",
    title: "Lean by design",
    body: "No legacy overhead, no fly-in teams on the clock. You pay for outcomes, not infrastructure.",
  },
  {
    no: "03",
    title: "Built to hand back",
    body: "Capability stays with your team. The goal is a model you can run, not a dependency.",
  },
];

export default function About() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title={
          <>
            A Big-3 operator,
            <br />
            <em>partner-direct.</em>
          </>
        }
        intro="Boston Consulting Group–trained, family-grounded, and built for the kind of work that actually changes how a company runs."
      />

      <section className="section theme-paper about-page">
        <div className="container">
          <div className="about-split">
            <div className="about-portrait">
              <div className="about-portrait-frame">
                <img src={joseph} alt="Joseph, principal of Caribelle Advisory" />
              </div>
              <Reveal delay={0.1} className="about-portrait-meta">
                <span className="serif-accent">Joseph</span>
                <span className="muted">Principal · ex–BCG (US)</span>
              </Reveal>
            </div>

            <div className="about-prose stack-lg">
              {about.paragraphs.map((p, i) => (
                <Reveal key={i} delay={0.05 * i}>
                  <p className="lede">{p}</p>
                </Reveal>
              ))}
              <Reveal delay={0.1}>
                <p className="lede">
                  His work has freed up over $100M in in-year cash flow, unified
                  10,000+ employees across 50+ countries under a single global
                  operating structure, and consolidated multi-function
                  organizations of 3,000+ people.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <blockquote className="about-pull">
                  “Strategy is only as good as the operating model that carries
                  it. I build both — and stay until they hold.”
                </blockquote>
              </Reveal>
            </div>
          </div>

          <div className="stats-strip">
            {stats.map((s, i) => (
              <Reveal key={i} delay={0.07 * i} className="stat">
                <StatCounter value={s.value} prefix={s.prefix} suffix={s.suffix} />
                <span className="stat-label">{s.label}</span>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section theme-dark principles">
        <div className="container">
          <Reveal>
            <p className="eyebrow">Why partner-direct</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="h-section principles-title">
              The same firepower. None of the friction.
            </h2>
          </Reveal>
          <div className="principles-grid">
            {principles.map((p, i) => (
              <Reveal key={p.no} delay={0.07 * i} className="principle card">
                <span className="offer-no">{p.no}</span>
                <h3 className="h-card">{p.title}</h3>
                <p className="offer-summary">{p.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
