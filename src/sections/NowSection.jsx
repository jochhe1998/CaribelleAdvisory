import Reveal from "../components/Reveal";
import Embers from "../components/Embers";
import { now } from "../data/site";

export default function NowSection() {
  return (
    <section id="now" className="section theme-dark now-section">
      <Embers />
      <div className="container now-inner">
        <div className="now-head">
          <Reveal>
            <p className="eyebrow now-eyebrow">
              <span className="now-dot" aria-hidden="true" />
              {now.eyebrow}
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="h-section now-title">{now.title}</h2>
          </Reveal>
        </div>

        <div className="now-grid">
          {now.modules.map((m, i) => (
            <Reveal key={m.no} delay={0.08 * i} className="now-card card">
              <div className="now-card-head">
                <span className="now-no">{m.no}</span>
                <h3 className="now-card-title">{m.label}</h3>
              </div>
              <ul className="now-points">
                {m.points.map((p, j) => (
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
