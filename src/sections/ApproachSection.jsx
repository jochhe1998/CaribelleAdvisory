import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import { approach } from "../data/site";

export default function ApproachSection() {
  return (
    <section className="section theme-paper approach">
      <div className="container">
        <div className="section-head">
          <div>
            <Reveal>
              <p className="eyebrow">{approach.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="h-section">{approach.title}</h2>
            </Reveal>
          </div>
          <Reveal delay={0.12} className="section-head-aside">
            <p className="lede measure-sm">{approach.intro}</p>
          </Reveal>
        </div>

        <div className="steps">
          {approach.steps.map((s, i) => (
            <Reveal key={s.no} delay={0.06 * i} className="step">
              <span className="step-no">{s.no}</span>
              <div className="step-body">
                <h3 className="step-title">{s.title}</h3>
                <p className="step-text">{s.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="partner-card">
            <div className="partner-mark" aria-hidden="true">✦</div>
            <div className="partner-content">
              <h3 className="h-card">{approach.partner.title}</h3>
              <p className="lede">{approach.partner.body}</p>
              <Link to="/how-i-work" className="link-u">
                How I work <span className="arrow">→</span>
              </Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
