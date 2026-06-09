import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import StatCounter from "../components/StatCounter";
import Clients from "../sections/Clients";
import ContactCTA from "../sections/ContactCTA";
import { cases, stats } from "../data/site";

export default function TrackRecord() {
  return (
    <>
      <PageHeader
        eyebrow="Track Record"
        title={
          <>
            Outcomes, <em>not slideware.</em>
          </>
        }
        intro="A selection of engagements led during Joseph's BCG career. Clients are anonymized by size and sector to respect confidentiality."
      />

      <section className="section theme-paper track-page">
        <div className="container">
          <div className="stats-strip stats-strip-top">
            {stats.map((s, i) => (
              <Reveal key={i} delay={0.06 * i} className="stat">
                <StatCounter value={s.value} prefix={s.prefix} suffix={s.suffix} />
                <span className="stat-label">{s.label}</span>
              </Reveal>
            ))}
          </div>

          <div className="case-grid case-grid-lg">
            {cases.map((c, i) => (
              <Reveal key={i} delay={0.05 * i} className="case-card card">
                <div className="case-top">
                  <span className="case-metric">{c.metric}</span>
                  <span className="case-type">{c.type}</span>
                </div>
                <h3 className="case-title">{c.title}</h3>
                <p className="case-client">{c.client}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <Clients />
      <ContactCTA />
    </>
  );
}
