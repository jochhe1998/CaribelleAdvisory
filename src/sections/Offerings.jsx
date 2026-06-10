import Reveal from "../components/Reveal";
import { offerings } from "../data/site";

export default function Offerings() {
  return (
    <section id="services" className="section theme-paper offerings">
      <div className="container">
        <div className="section-head">
          <div>
            <Reveal>
              <p className="eyebrow">Ways to work together</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="h-section">Four ways we can work together.</h2>
            </Reveal>
          </div>
        </div>

        <div className="offer-grid">
          {offerings.map((o, i) => (
            <Reveal key={o.no} delay={0.08 * i} className="offer-card card">
              <span className="offer-no">{o.no}</span>
              <h3 className="h-card offer-title">{o.title}</h3>
              <p className="offer-summary">{o.summary}</p>
              {o.bestFor && (
                <p className="offer-best-for">
                  <span className="offer-best-label">Best for</span>
                  {o.bestFor}
                </p>
              )}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
