import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";

// Counts up from 0 when scrolled into view.
export default function StatCounter({ value, prefix = "", suffix = "", duration = 1.9 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-12% 0px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, value, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(v),
    });
    return () => controls.stop();
  }, [inView, value, duration]);

  const formatted = Math.round(display).toLocaleString("en-US");

  return (
    <span ref={ref} className="stat-num">
      {prefix}
      {formatted}
      {suffix}
    </span>
  );
}
