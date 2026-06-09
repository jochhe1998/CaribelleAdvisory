import PageHeader from "../components/PageHeader";
import Reveal from "../components/Reveal";
import { brand } from "../data/site";

export default function Contact() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Let&rsquo;s talk about <em>the work.</em>
          </>
        }
        intro="Tell me what you're trying to move. You'll hear back from me directly — not a coordinator, not a queue."
      />

      <section className="section theme-paper contact-page">
        <div className="container">
          <div className="contact-grid">
            {/* AI concierge — placeholder for the future bot */}
            <Reveal className="concierge card">
              <div className="concierge-head">
                <span className="ai-dot" aria-hidden="true" />
                <span className="concierge-tag">AI Concierge · Coming soon</span>
              </div>
              <div className="concierge-thread" aria-hidden="true">
                <div className="bubble bubble-ai">
                  Welcome to Caribelle Advisory. What are you trying to solve?
                </div>
                <div className="bubble bubble-user">
                  We need diligence support on a mid-market acquisition…
                </div>
                <div className="bubble bubble-ai">
                  Understood. A few quick questions so Joseph can come prepared —
                </div>
                <div className="bubble bubble-typing">
                  <span /><span /><span />
                </div>
              </div>
              <p className="concierge-note">
                A guided assistant is on the way — it will gather the right
                context up front so the first conversation starts on the real
                problem.
              </p>
            </Reveal>

            {/* Interim direct contact */}
            <Reveal delay={0.1} className="contact-direct stack-lg">
              <div>
                <p className="eyebrow">In the meantime</p>
                <h2 className="h-card contact-direct-title">
                  Reach out directly.
                </h2>
              </div>

              <div className="contact-lines stack">
                <a href={`mailto:${brand.email}`} className="contact-line">
                  <span className="contact-line-label">Email</span>
                  <span className="contact-line-value link-u">
                    {brand.email}
                    <span className="arrow">→</span>
                  </span>
                </a>
                <div className="contact-line">
                  <span className="contact-line-label">Based in</span>
                  <span className="contact-line-value">{brand.location}</span>
                </div>
                <div className="contact-line">
                  <span className="contact-line-label">LinkedIn</span>
                  <span className="contact-line-value muted">
                    To be added
                  </span>
                </div>
              </div>

              <a href={`mailto:${brand.email}`} className="btn btn-gold">
                Email Joseph <span className="arrow">→</span>
              </a>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
