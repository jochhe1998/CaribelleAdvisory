import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import { offerings } from "../data/site";

export default function Offerings() {
  return (
    <section className="section theme-dark offerings">
      <div className="container">
        <div className="section-head">
          <div>
            <Reveal>
              <p className="eyebrow">What I Do</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="h-section">
                Three ways to put senior firepower on your problem.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.12} className="section-head-aside">
            <Link to="/what-i-do" className="link-u">
              Explore the offerings <span className="arrow">→</span>
            </Link>
          </Reveal>
        </div>

        <div className="offer-grid">
          {offerings.map((o, i) => (
            <Reveal key={o.no} delay={0.08 * i} className="offer-card card">
              <span className="offer-no">{o.no}</span>
              <h3 className="h-card offer-title">{o.title}</h3>
              <p className="offer-summary">{o.summary}</p>
              <ul className="offer-points">
                {o.points.map((p, j) => (
                  <li key={j}>{p}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
