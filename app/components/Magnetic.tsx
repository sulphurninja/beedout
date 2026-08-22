"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import type { MouseEvent, ReactNode } from "react";

/** Element gently follows the cursor while hovered, snaps back on leave. */
export default function Magnetic({
  children,
  strength = 18,
  className = "",
}: {
  children: ReactNode;
  strength?: number;
  className?: string;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 220, damping: 16 });
  const sy = useSpring(y, { stiffness: 220, damping: 16 });

  function onMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(((e.clientX - rect.left) / rect.width - 0.5) * strength);
    y.set(((e.clientY - rect.top) / rect.height - 0.5) * strength);
  }

  function onLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      style={{ x: sx, y: sy }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`inline-block ${className}`}
    >
      {children}
    </motion.div>
  );
}
