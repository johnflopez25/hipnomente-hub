"use client";

import { motion, useReducedMotion } from "framer-motion";

// Traces the same double-spiral geometry as the Hipnomente logo (public/logo.webp),
// abstracted into a large, low-opacity mark for section backgrounds.
function spiralPath(
  turns: number,
  steps: number,
  rStart: number,
  rEnd: number,
  cx: number,
  cy: number
) {
  const points: string[] = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const angle = t * turns * Math.PI * 2;
    const radius = rStart + (rEnd - rStart) * t;
    const x = cx + radius * Math.cos(angle);
    const y = cy + radius * Math.sin(angle);
    points.push(`${i === 0 ? "M" : "L"}${x.toFixed(2)},${y.toFixed(2)}`);
  }
  return points.join(" ");
}

interface DepthRingsProps {
  size?: number;
  opacity?: number;
  className?: string;
  spin?: boolean;
  gradientId?: string;
}

export default function DepthRings({
  size = 640,
  opacity = 0.14,
  className = "",
  spin = true,
  gradientId = "depth-rings-gradient",
}: DepthRingsProps) {
  const reduceMotion = useReducedMotion();
  const cy = size / 2;
  const leftCx = size * 0.32;
  const rightCx = size * 0.68;
  const r0 = size * 0.02;
  const r1 = size * 0.24;

  const left = spiralPath(2.5, 120, r0, r1, leftCx, cy);
  const right = spiralPath(2.5, 120, r0, r1, rightCx, cy);
  const shouldSpin = spin && !reduceMotion;

  return (
    <svg
      viewBox={`0 0 ${size} ${size}`}
      width={size}
      height={size}
      className={className}
      style={{ opacity }}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#5B3FE0" />
          <stop offset="100%" stopColor="#22C4B0" />
        </linearGradient>
      </defs>
      <motion.g
        stroke={`url(#${gradientId})`}
        strokeWidth={size * 0.012}
        fill="none"
        strokeLinecap="round"
        style={{ transformOrigin: "50% 50%" }}
        animate={shouldSpin ? { rotate: 360 } : undefined}
        transition={
          shouldSpin
            ? { duration: 90, repeat: Infinity, ease: "linear" }
            : undefined
        }
      >
        <path d={left} />
        <path d={right} />
      </motion.g>
    </svg>
  );
}
