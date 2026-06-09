import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import { cases } from "../data/site";

export default function TrackRecordTeaser() {
  return (
    <section className="section theme-cream track">
      <div className="container">
        <div className="section-head">
          <div>
            <Reveal>
              <p className="eyebrow">Track Record</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="h-section">
                Outcomes, not slideware.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.12} className="section-head-aside">
            <Link to="/track-record" className="link-u">
              Prior projects delivered <span className="arrow">→</span>
            </Link>
          </Reveal>
        </div>

        <div className="case-grid">
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
  );
}
