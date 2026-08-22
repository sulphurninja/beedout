"use client";

import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";
import type { ReactNode } from "react";

/** Infinite marquee that skews with scroll velocity for a live, physical feel. */
export default function Marquee({
  children,
  duration = 30,
  reverse = false,
  className = "",
}: {
  children: ReactNode;
  duration?: number;
  reverse?: boolean;
  className?: string;
}) {
  const { scrollY } = useScroll();
  const velocity = useVelocity(scrollY);
  const skewRaw = useTransform(velocity, [-1200, 1200], [5, -5]);
  const skewX = useSpring(skewRaw, { stiffness: 300, damping: 50 });

  return (
    <div className={`flex overflow-hidden ${className}`}>
      <motion.div style={{ skewX }} className="flex w-max shrink-0">
        <div
          className={`animate-marquee flex w-max shrink-0 items-center ${
            reverse ? "marquee-reverse" : ""
          }`}
          style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
        >
          {children}
          {children}
        </div>
      </motion.div>
    </div>
  );
}
