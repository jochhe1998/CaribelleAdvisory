import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import ContactCTA from "../sections/ContactCTA";
import { offerings } from "../data/site";

export default function WhatIDo() {
  return (
    <>
      <PageHeader
        eyebrow="What I Do"
        title={
          <>
            Senior firepower,
            <br />
            <em>scoped to the job.</em>
          </>
        }
        intro="From an extra pair of expert hands to a full delivery team — three engagement models, one standard of thinking."
      />

      <section className="section theme-paper offer-detail">
        <div className="container stack-lg">
          {offerings.map((o, i) => (
            <Reveal key={o.no} delay={0.04 * i}>
              <article className="offer-row">
                <div className="offer-row-head">
                  <span className="offer-row-no">{o.no}</span>
                  <h2 className="offer-row-title">{o.title}</h2>
                </div>
                <div className="offer-row-body">
                  <p className="lede">{o.summary}</p>
                  <ul className="offer-row-points">
                    {o.points.map((p, j) => (
                      <li key={j}>
                        <span className="point-tick" aria-hidden="true">
                          ✦
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
