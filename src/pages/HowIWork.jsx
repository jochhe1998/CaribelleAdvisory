import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import ContactCTA from "../sections/ContactCTA";
import { approach } from "../data/site";

export default function HowIWork() {
  return (
    <>
      <PageHeader
        eyebrow="How I Work"
        title={
          <>
            Senior-led, <em>start to last mile.</em>
          </>
        }
        intro={approach.intro}
      />

      <section className="section theme-paper work-page">
        <div className="container">
          <div className="timeline">
            {approach.steps.map((s, i) => (
              <Reveal key={s.no} delay={0.05 * i} className="timeline-step">
                <div className="timeline-no">{s.no}</div>
                <div className="timeline-body">
                  <h2 className="timeline-title">{s.title}</h2>
                  <p className="lede">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section theme-forest partner-page">
        <div className="container">
          <Reveal>
            <p className="eyebrow">The Partner Model</p>
          </Reveal>
          <div className="partner-page-grid">
            <Reveal delay={0.06}>
              <h2 className="h-section">{approach.partner.title}</h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="lede">{approach.partner.body}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <ContactCTA />
    </>
  );
}
