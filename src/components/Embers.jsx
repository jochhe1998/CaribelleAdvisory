import { useEffect, useRef } from "react";

// Subtle drifting embers — small warm glints that rise and twinkle.
// Canvas-based, low density / low opacity for a refined, quiet effect.
export default function Embers() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // gold-bright, antique gold, faint lime — the brand accents
    const COLORS = ["228,203,142", "194,161,91", "212,223,51"];
    const rand = (a, b) => a + Math.random() * (b - a);

    let w = 0, h = 0, dpr = 1, particles = [], raf = 0, running = true;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      const r = canvas.parentElement.getBoundingClientRect();
      w = Math.max(1, r.width);
      h = Math.max(1, r.height);
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      canvas.style.width = w + "px";
      canvas.style.height = h + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const make = () => ({
      x: rand(0, w),
      y: rand(0, h),
      r: rand(0.6, 2),
      vy: rand(-0.28, -0.05),
      vx: rand(-0.12, 0.12),
      base: rand(0.05, 0.32),
      tw: rand(0.003, 0.011),
      tp: Math.random() * Math.PI * 2,
      c: COLORS[Math.floor(Math.random() * COLORS.length)],
    });

    const init = () => {
      // density scales with area, capped low for subtlety
      const count = Math.min(34, Math.max(14, Math.round((w * h) / 42000)));
      particles = Array.from({ length: count }, make);
    };

    const draw = (animate) => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        if (animate) {
          p.x += p.vx;
          p.y += p.vy;
          p.tp += p.tw;
          if (p.y < -12) { p.y = h + 12; p.x = rand(0, w); }
          if (p.x < -12) p.x = w + 12;
          else if (p.x > w + 12) p.x = -12;
        }
        const alpha = p.base * (0.45 + 0.55 * Math.sin(p.tp));
        const rad = p.r * 6;
        const g = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, rad);
        g.addColorStop(0, `rgba(${p.c},${alpha})`);
        g.addColorStop(1, `rgba(${p.c},0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(p.x, p.y, rad, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const tick = () => {
      if (!running) return;
      draw(true);
      raf = requestAnimationFrame(tick);
    };

    resize();
    init();
    if (reduce) draw(false);
    else tick();

    const onResize = () => { resize(); init(); };
    window.addEventListener("resize", onResize);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="embers" aria-hidden="true" />;
}
