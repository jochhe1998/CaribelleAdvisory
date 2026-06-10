import Marquee from "../components/Marquee";
import ClientLogo from "../components/ClientLogo";
import Reveal from "../components/Reveal";
import { clients } from "../data/site";

export default function Clients() {
  const half = Math.ceil(clients.length / 2);
  const row1 = clients.slice(0, half);
  const row2 = clients.slice(half);

  return (
    <section id="clients" className="section theme-paper clients">
      <div className="container">
        <Reveal className="clients-head">
          <p className="eyebrow">Experience Across</p>
          <h2 className="h-section">Trusted on the work that mattered most.</h2>
          <p className="lede measure">
            Engagements delivered during Joseph's BCG career — spanning energy,
            chemicals, industrials, healthcare, and private equity.
          </p>
        </Reveal>
      </div>

      <div className="clients-marquees">
        <Marquee items={row1} render={(c) => <ClientLogo {...c} />} speed={48} />
        <Marquee
          items={row2}
          render={(c) => <ClientLogo {...c} />}
          speed={56}
          reverse
        />
      </div>
    </section>
  );
}
