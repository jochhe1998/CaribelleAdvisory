import Reveal from "./Reveal";
import Aurora from "./Aurora";

export default function PageHeader({ eyebrow, title, intro, kicker }) {
  return (
    <header className="page-header theme-dark">
      <Aurora variant="teal" />
      <div className="hero-grid-lines" aria-hidden="true" />
      <div className="container">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h1 className="display page-title">{title}</h1>
        </Reveal>
        {intro && (
          <Reveal delay={0.12}>
            <p className="lede measure page-intro">{intro}</p>
          </Reveal>
        )}
        {kicker && (
          <Reveal delay={0.16}>
            <p className="page-kicker">{kicker}</p>
          </Reveal>
        )}
      </div>
    </header>
  );
}
