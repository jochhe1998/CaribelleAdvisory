import Reveal from "../components/Reveal";
import StatCounter from "../components/StatCounter";
import { about, stats } from "../data/site";

export default function AboutBand() {
  return (
    <section className="section theme-paper about-band">
      <div className="container">
        <div className="about-grid">
          <div className="about-head">
            <Reveal>
              <p className="eyebrow">{about.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="h-section about-title">{about.title}</h2>
            </Reveal>
          </div>

          <div className="about-body stack">
            {about.paragraphs.map((p, i) => (
              <Reveal key={i} delay={0.05 * i}>
                <p className="lede">{p}</p>
              </Reveal>
            ))}
            <Reveal delay={0.1}>
              <blockquote className="about-pull">{about.pull}</blockquote>
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
  );
}
