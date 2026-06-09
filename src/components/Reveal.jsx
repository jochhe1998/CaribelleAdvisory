import { motion } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1];

// Scroll-triggered reveal. Defaults to a gentle rise + fade.
export default function Reveal({
  children,
  as = "div",
  delay = 0,
  y = 26,
  duration = 0.85,
  once = true,
  className,
  style,
}) {
  const M = motion[as] || motion.div;
  return (
    <M
      className={className}
      style={style}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-8% 0px -8% 0px" }}
      transition={{ duration, ease: EASE, delay }}
    >
      {children}
    </M>
  );
}
