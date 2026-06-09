import Reveal from "../components/Reveal";
import Aurora from "../components/Aurora";
import { brand } from "../data/site";

export default function ContactCTA() {
  return (
    <section id="contact" className="section theme-forest contact-cta">
      <Aurora variant="gold" />
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
            Tell me what you&rsquo;re trying to move — a stalled workstream, a
            diligence on the clock, an operating model that&rsquo;s outgrown
            itself. You&rsquo;ll hear back from me directly.
          </p>
        </Reveal>

        <Reveal delay={0.18} className="contact-cta-actions flex gap wrap">
          <a href={`mailto:${brand.email}`} className="btn btn-gold">
            Start a conversation <span className="arrow">→</span>
          </a>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="ai-stub" role="note">
            <span className="ai-dot" aria-hidden="true" />
            <span>
              <strong>AI concierge — coming soon.</strong> A guided assistant
              that asks the right questions up front, so our first call starts
              with the real problem.
            </span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
