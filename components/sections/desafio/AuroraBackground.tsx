"use client";

import { motion, useReducedMotion } from "framer-motion";

// Same "aurora" look as the animated-gradient hero backgrounds you see on component
// galleries, but built on a cheap technique: a few blurred blobs drifting via
// transform (translate/scale) instead of animating `background-position`. Blur is
// computed once per blob and then just moved/scaled by the compositor — animating
// backgroundPosition on a huge blurred gradient instead would force a repaint (and
// re-blur) on every single frame, which is what makes that version feel heavy on
// mid-range phones. Colors are the brand's own violet -> teal gradient (from the logo).
const BLOBS = [
  { color: "#5B3FE0", size: 560, top: "-15%", left: "10%", duration: 26 },
  { color: "#22C4B0", size: 460, top: "5%", left: "58%", duration: 32 },
  { color: "#7c3aed", size: 420, top: "42%", left: "28%", duration: 22 },
] as const;

export default function AuroraBackground({
  className = "",
}: {
  className?: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      {BLOBS.map((blob, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: blob.size,
            height: blob.size,
            top: blob.top,
            left: blob.left,
            background: blob.color,
            filter: "blur(90px)",
            opacity: 0.32,
            willChange: "transform",
          }}
          animate={
            reduceMotion
              ? undefined
              : {
                  x: [0, 60, -40, 0],
                  y: [0, -40, 30, 0],
                  scale: [1, 1.15, 0.95, 1],
                }
          }
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      {/* Vignette so text stays legible regardless of where the blobs drift */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 45%, rgba(5,3,8,0.85) 100%)",
        }}
      />
    </div>
  );
}
