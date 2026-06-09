import Reveal from "../components/Reveal";
import { whatWeDo } from "../data/site";

export default function WhatWeDo() {
  return (
    <section id="what-we-do" className="section theme-cream what-we-do">
      <div className="container">
        <div className="section-head">
          <div>
            <Reveal>
              <p className="eyebrow">{whatWeDo.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="h-section">{whatWeDo.title}</h2>
            </Reveal>
          </div>
        </div>

        <div className="capability-grid">
          {whatWeDo.groups.map((g, i) => (
            <Reveal key={g.heading} delay={0.07 * i} className="capability-col">
              <span className="capability-no">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="capability-heading">{g.heading}</h3>
              <ul className="capability-items">
                {g.items.map((it, j) => (
                  <li key={j}>{it}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
