import Reveal from "../components/Reveal";
import Aurora from "../components/Aurora";
import Embers from "../components/Embers";
import Scheduler from "../components/Scheduler";
import { brand } from "../data/site";

export default function ContactCTA() {
  return (
    <section id="contact" className="section theme-forest contact-cta">
      <Aurora variant="gold" />
      <Embers variant="soft" />
      <div className="container contact-cta-inner">
        <Reveal>
          <p className="eyebrow">Contact</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="display contact-cta-title">
            Let&rsquo;s talk about <em>the work.</em>
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="lede measure contact-cta-sub">
            Grab a time that works below, or email me directly.
          </p>
        </Reveal>

        <Reveal delay={0.16} className="contact-scheduler">
          <Scheduler />
        </Reveal>

        <Reveal delay={0.2} className="contact-cta-actions">
          <span className="contact-or">Prefer email?</span>
          <a href={`mailto:${brand.email}`} className="btn btn-gold">
            Contact me <span className="arrow">→</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
