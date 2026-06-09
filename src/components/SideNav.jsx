import { useEffect, useState } from "react";
import { sections } from "../data/site";

export default function SideNav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observers = [];
    sections.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { rootMargin: "-45% 0px -50% 0px" }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const go = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="side-nav" aria-label="Section navigation">
      {sections.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className={`side-nav-item ${active === id ? "is-active" : ""}`}
          onClick={(e) => go(e, id)}
        >
          <span className="side-nav-tick" aria-hidden="true" />
          <span className="side-nav-label">{label}</span>
        </a>
      ))}
    </nav>
  );
}
