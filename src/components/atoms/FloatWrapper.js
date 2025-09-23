// BalloonFloat.jsx
import { useRef, useMemo } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";

/**
 * Balloon-like floating wrapper with organic drift.
 *
 * How it feels natural:
 * - Multi-axis drift (x & y) using several incommensurate oscillations
 * - Tiny rotation & scale breathing
 * - Per-instance random phases so multiple balloons don't sync
 * - Nonlinear blend to avoid perfect sine motion
 */
export default function FloatWrapper({
  children,
  className = "",
  // Tweakables
  amplitude = 16, // base vertical travel in px
  drift = 10, // horizontal wander in px
  rotateDeg = 3, // gentle rotation range (±deg)
  breathe = 0.015, // scale “breathing” magnitude
  speed = 1, // global speed multiplier
  hoverBoost = 1.15, // slight livelier motion on hover
  reduceMotion = false,
  style,
}) {
  // Motion values
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const r = useMotionValue(0);
  const s = useMotionValue(1);

  // Stable random seeds per instance
  const seeds = useMemo(
    () => ({
      p1: Math.random() * Math.PI * 2,
      p2: Math.random() * Math.PI * 2,
      p3: Math.random() * Math.PI * 2,
      p4: Math.random() * Math.PI * 2,
    }),
    []
  );

  // Hover state (pure CSS class toggling multiplier)
  const hoverRef = useRef(false);

  useAnimationFrame((tMs) => {
    if (reduceMotion) return;

    const t = (tMs / 1000) * speed;
    const boost = hoverRef.current ? hoverBoost : 1;

    // Build “imperfect wind” from several low-frequency oscillations.
    // Slightly different periods keep it desynchronized forever.
    const y1 = Math.sin(t * 0.8 + seeds.p1);
    const y2 = Math.sin(t * 0.53 + seeds.p2) * 0.6;
    const y3 = Math.cos(t * 0.31 + seeds.p3) * 0.4;

    const x1 = Math.sin(t * 0.42 + seeds.p2);
    const x2 = Math.cos(t * 0.67 + seeds.p4) * 0.5;

    // Nonlinear blend to soften the peaks (avoids perfect sinusoid)
    const ny = (y1 + y2 + y3) / 2.0; // ~[-1, 1]
    const nx = (x1 + x2) / 1.5; // ~[-1, 1]
    const easedY = ny * (0.7 + 0.3 * Math.abs(ny)); // gentle ease-in-out feel

    // Apply
    y.set(easedY * amplitude * boost);
    x.set(nx * drift * boost);

    // Tiny rotation & breathing
    const rot = (y1 * 0.6 + x1 * 0.4) * rotateDeg * boost;
    r.set(rot);
    s.set(1 + (y2 * 0.5 + x2 * 0.5) * breathe * boost);
  });

  // Pure CSS hover to flip the ref; avoid re-renders
  const onHoverStart = () => (hoverRef.current = true);
  const onHoverEnd = () => (hoverRef.current = false);

  return (
    <motion.div
      className={className}
      style={{
        x,
        y,
        rotate: r,
        scale: s,
        willChange: "transform",
        ...style,
      }}
      onHoverStart={onHoverStart}
      onHoverEnd={onHoverEnd}
    >
      {children}
    </motion.div>
  );
}
