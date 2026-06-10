import { useEffect, useRef } from "react";

// Subtle drifting embers — small warm glints that rise and twinkle.
// variant "default": smaller, brighter, quicker twinkle (the Now section).
// variant "soft":    bigger, duller, slow to light up and cool down (hero, contact).
const VARIANTS = {
  default: { rMin: 0.6, rMax: 2, aMin: 0.05, aMax: 0.32, twMin: 0.003, twMax: 0.011, vyMin: -0.28, vyMax: -0.05, glow: 6, area: 42000, cap: 34 },
  soft: { rMin: 1.4, rMax: 4.2, aMin: 0.02, aMax: 0.14, twMin: 0.0009, twMax: 0.0032, vyMin: -0.16, vyMax: -0.02, glow: 8, area: 70000, cap: 26 },
};

export default function Embers({ variant = "default" }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const cfg = VARIANTS[variant] || VARIANTS.default;

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
      r: rand(cfg.rMin, cfg.rMax),
      vy: rand(cfg.vyMin, cfg.vyMax),
      vx: rand(-0.1, 0.1),
      base: rand(cfg.aMin, cfg.aMax),
      tw: rand(cfg.twMin, cfg.twMax),
      tp: Math.random() * Math.PI * 2,
      c: COLORS[Math.floor(Math.random() * COLORS.length)],
    });

    const init = () => {
      const count = Math.min(cfg.cap, Math.max(10, Math.round((w * h) / cfg.area)));
      particles = Array.from({ length: count }, make);
    };

    const draw = (animate) => {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        if (animate) {
          p.x += p.vx;
          p.y += p.vy;
          p.tp += p.tw;
          if (p.y < -14) { p.y = h + 14; p.x = rand(0, w); }
          if (p.x < -14) p.x = w + 14;
          else if (p.x > w + 14) p.x = -14;
        }
        const alpha = p.base * (0.45 + 0.55 * Math.sin(p.tp));
        const rad = p.r * cfg.glow;
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
  }, [variant]);

  return <canvas ref={canvasRef} className="embers" aria-hidden="true" />;
}
