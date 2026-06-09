import { useEffect, useRef, useState } from "react";
import { scheduling } from "../data/site";

// Brand-matched Calendly inline embed colors (cream bg, forest accent).
const PARAMS =
  "?hide_gdpr_banner=1&background_color=fbf9f2&text_color=081912&primary_color=03522d";

export default function Scheduler() {
  const [active, setActive] = useState(0);
  const containerRef = useRef(null);

  // Load the Calendly widget script once.
  useEffect(() => {
    const ID = "calendly-widget-js";
    if (!document.getElementById(ID)) {
      const s = document.createElement("script");
      s.id = ID;
      s.src = "https://assets.calendly.com/assets/external/widget.js";
      s.async = true;
      document.body.appendChild(s);
    }
  }, []);

  // (Re)initialise the inline widget whenever the selected meeting changes.
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let tries = 0;
    let cancelled = false;
    const render = () => {
      if (cancelled) return;
      if (window.Calendly && window.Calendly.initInlineWidget) {
        el.innerHTML = "";
        window.Calendly.initInlineWidget({
          url: scheduling.meetings[active].url + PARAMS,
          parentElement: el,
        });
      } else if (tries++ < 40) {
        setTimeout(render, 150);
      }
    };
    render();
    return () => {
      cancelled = true;
    };
  }, [active]);

  return (
    <div className="scheduler">
      <div className="scheduler-toggle" role="tablist" aria-label="Meeting length">
        {scheduling.meetings.map((m, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={active === i}
            className={`scheduler-tab ${active === i ? "is-active" : ""}`}
            onClick={() => setActive(i)}
          >
            {m.label}
          </button>
        ))}
      </div>
      <div ref={containerRef} className="scheduler-embed" />
    </div>
  );
}
