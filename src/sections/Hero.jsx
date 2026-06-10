import { useRef } from "react";
import { motion } from "framer-motion";
import Aurora from "../components/Aurora";
import Embers from "../components/Embers";
import joseph from "../assets/joseph.jpeg";
import { hero, brand } from "../data/site";

const EASE = [0.22, 1, 0.36, 1];

export default function Hero() {
  const ref = useRef(null);

  // mouse-reactive spotlight inside the hero
  const onMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--hx", `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty("--hy", `${((e.clientY - r.top) / r.height) * 100}%`);
  };

  return (
    <section ref={ref} className="hero theme-dark" onPointerMove={onMove}>
      <Aurora variant="teal" />
      <Embers variant="soft" />
      <div className="hero-spot" aria-hidden="true" />

      <div className="container hero-inner">
        <div className="hero-copy">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
          >
            {hero.eyebrow}
          </motion.p>

          <h1 className="display hero-headline">
            {hero.headline.map((line, i) => (
              <span className="hero-line" key={i}>
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.95, ease: EASE, delay: 0.22 + i * 0.11 }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            className="lede measure hero-sub"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.7 }}
          >
            {hero.sub}
          </motion.p>

          <motion.div
            className="hero-cta flex gap wrap"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 0.85 }}
          >
            <a href={`mailto:${brand.email}`} className="btn btn-gold">
              Contact me <span className="arrow">→</span>
            </a>
            <a href="#now" className="btn btn-ghost">
              See what I&rsquo;m working on now <span className="arrow">→</span>
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-portrait"
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: EASE, delay: 0.35 }}
        >
          <div className="hero-portrait-frame">
            <img src={joseph} alt="Joseph, principal of Caribelle Advisory" />
            <span className="hero-portrait-glow" aria-hidden="true" />
          </div>
          <motion.div
            className="hero-portrait-card"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE, delay: 1 }}
          >
            <span className="serif-accent hero-portrait-name">Joseph</span>
            <span className="hero-portrait-role">Freelancer · ex–BCG</span>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="hero-scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.3 }}
      >
        <span className="hero-scroll-label">Scroll</span>
        <span className="hero-scroll-line" />
      </motion.div>
    </section>
  );
}
