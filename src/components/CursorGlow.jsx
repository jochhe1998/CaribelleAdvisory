import { useEffect, useRef } from "react";

// A soft light that trails the cursor — the "splash that moves with the mouse".
// Smoothed with a rAF lerp so it glides rather than snaps.
export default function CursorGlow() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const target = { x: window.innerWidth / 2, y: window.innerHeight * 0.32 };
    const pos = { ...target };
    let raf;

    const onMove = (e) => {
      target.x = e.clientX;
      target.y = e.clientY;
      el.style.opacity = "1";
    };
    const tick = () => {
      pos.x += (target.x - pos.x) * 0.12;
      pos.y += (target.y - pos.y) * 0.12;
      el.style.setProperty("--mx", `${pos.x}px`);
      el.style.setProperty("--my", `${pos.y}px`);
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return <div ref={ref} className="cursor-glow" aria-hidden="true" />;
}
