import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

export default function GameButton({
  children,
  className,
  rainbow,
  theme,
  icon,
}) {
  let textColor = "";
  let iconColor = "";
  let backgroundColor = "";

  const buttonBase =
    "cursor-pointer group event-cursor relative rounded-full flex justify-center items-center overflow-hidden";

  const ref = useRef(null);
  const bgRef = useRef(null);

  // animator
  const animRaf = useRef(null);
  const hasPointer = useRef(false);

  // current smoothed values (drive BOTH shadows)
  const cur = useRef({ ix: 0, iy: 0, a: 0 }); // a = opacity [0..1]

  // target values updated by mouse / leave
  const tgt = useRef({ ix: 0, iy: 0, a: 0 });

  // tuning
  const LERP_POS = 0.18; // pos lerp (0.10–0.25)
  const LERP_ALPHA = 0.15; // alpha lerp (slightly slower looks nice)
  const EPS_POS = 0.06;
  const EPS_ALPHA = 0.03;

  // effect constants
  const OUT = 28; // (kept for feel—outer uses derived cx/cy)
  const IN = 18; // inner offset scale

  // max opacities for glows (multiplied by a)
  const OUTER_MAX = 0.7;
  const INNER_MAX = 0.75;

  const applyShadows = (ix, iy, a) => {
    const el = ref.current;
    const inEl = bgRef.current;
    if (!el || !inEl) return;

    // derive normalized direction for outer look
    const cx = -ix / IN;
    const cy = -iy / IN;
    const ox = cx * OUT; // kept for possible future tweaks
    const oy = cy * OUT;

    const outerAlpha = OUTER_MAX * a;
    const innerAlpha = INNER_MAX * a;

    // Outer subtle highlight follows pointer (fade via alpha)
    el.style.boxShadow = `${-ix / 20}px ${
      -iy / 20
    }px 5px 0px rgba(255,255,255,${outerAlpha})`;

    // Inner glows (fade via alpha), keep the subtle border always on
    inEl.style.boxShadow = [
      `inset ${ix}px ${iy}px 36px -20px rgba(255,255,255,${innerAlpha})`,
      `inset ${ix / 2}px ${
        iy / 2
      }px 15px -15px rgba(255,255,255,${innerAlpha})`,
      `inset 0 0 0 1px rgba(0,0,0,0.06)`,
    ].join(", ");
  };

  const applyCalm = () => {
    const el = ref.current;
    const inEl = bgRef.current;
    if (!el || !inEl) return;
    // final resting shadow (no white glow, just ambient + border)
    const calm =
      "0 8px 16px rgba(0,0,0,0.08), inset 0 0 0 1px rgba(0,0,0,0.06)";
    el.style.boxShadow = calm;
    inEl.style.boxShadow = calm;
  };

  const startAnim = () => {
    if (animRaf.current != null) return;

    const tick = () => {
      // Lerp position
      const dix = tgt.current.ix - cur.current.ix;
      const diy = tgt.current.iy - cur.current.iy;
      cur.current.ix += dix * LERP_POS;
      cur.current.iy += diy * LERP_POS;

      // Lerp alpha
      const dia = tgt.current.a - cur.current.a;
      cur.current.a += dia * LERP_ALPHA;

      applyShadows(cur.current.ix, cur.current.iy, cur.current.a);

      const atRestPos =
        Math.abs(tgt.current.ix - cur.current.ix) < EPS_POS &&
        Math.abs(tgt.current.iy - cur.current.iy) < EPS_POS;
      const atRestAlpha = Math.abs(tgt.current.a - cur.current.a) < EPS_ALPHA;

      if (atRestPos && atRestAlpha) {
        // snap to exact target to finish cleanly
        cur.current.ix = tgt.current.ix;
        cur.current.iy = tgt.current.iy;
        cur.current.a = tgt.current.a;
        applyShadows(cur.current.ix, cur.current.iy, cur.current.a);

        // when pointer is gone and everything is zero, switch to calm base
        if (
          !hasPointer.current &&
          cur.current.a === 0 &&
          cur.current.ix === 0 &&
          cur.current.iy === 0
        ) {
          applyCalm();
        }

        animRaf.current = null;
        return;
      }

      animRaf.current = requestAnimationFrame(tick);
    };

    animRaf.current = requestAnimationFrame(tick);
  };

  const updateTargetFromMouse = (clientX, clientY) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();

    // normalized -1..1
    const nx = (clientX - (r.left + r.width / 2)) / (r.width / 2);
    const ny = (clientY - (r.top + r.height / 2)) / (r.height / 2);

    const cx = Math.max(-1, Math.min(1, nx));
    const cy = Math.max(-1, Math.min(1, ny));

    // set target offsets
    tgt.current.ix = -cx * IN;
    tgt.current.iy = -cy * IN;

    // opacity target proportional to how off-center we are
    const mag = Math.min(1, Math.hypot(cx, cy)); // 0 at center, 1 near edges
    const floor = 0.35;
    tgt.current.a = Math.max(floor, mag);
  };

  const onMove = (e) => {
    hasPointer.current = true;
    updateTargetFromMouse(e.clientX, e.clientY);
    startAnim();
  };

  const onLeave = () => {
    hasPointer.current = false;
    // glide everything to zero (no snap)
    tgt.current.ix = 0;
    tgt.current.iy = 0;
    tgt.current.a = 0; // fade opacity to 0
    startAnim();
  };

  useEffect(() => {
    return () => {
      if (animRaf.current) cancelAnimationFrame(animRaf.current);
    };
  }, []);

  // theme colors
  switch (theme) {
    case "dark-blue":
      textColor = "#fff";
      iconColor = "#FF5353";
      backgroundColor = "#121132";
      break;
    case "light-blue":
      textColor = "#121132";
      iconColor = "#121132";
      backgroundColor = "#35D4DA";
      break;
    default:
      textColor = "#121132";
      iconColor = "#FF5353";
      backgroundColor = "#fff";
      break;
  }

  return (
    <button
      type="button"
      className={`m-10 ${buttonBase} ${className || ""}`}
      aria-label={typeof children === "string" ? children : undefined}
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <div
        ref={bgRef}
        style={{ color: textColor, backgroundColor }}
        className="relative px-12 py-12 flex items-center justify-center w-full h-full rounded-full btn-body text-[40px]"
      >
        <span>{children}</span>
      </div>
    </button>
  );
}
