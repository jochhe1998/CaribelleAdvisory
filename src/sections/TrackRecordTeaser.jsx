import Reveal from "../components/Reveal";
import { cases } from "../data/site";

export default function TrackRecordTeaser() {
  return (
    <section id="track-record" className="section theme-cream track">
      <div className="container">
        <div className="section-head">
          <div>
            <Reveal>
              <p className="eyebrow">Track Record</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="h-section">Outcomes, not slideware.</h2>
            </Reveal>
          </div>
        </div>

        <div className="case-grid">
          {cases.map((c, i) => (
            <Reveal key={i} delay={0.05 * i} className="case-card card">
              <span className="case-type">{c.type}</span>
              <span className="case-metric">{c.metric}</span>
              <h3 className="case-title">{c.title}</h3>
              <p className="case-client">{c.client}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
