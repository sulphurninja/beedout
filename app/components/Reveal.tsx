"use client";

import { motion, type Variants } from "motion/react";
import type { ReactNode } from "react";

export const EASE = [0.16, 1, 0.3, 1] as const;
export const BOUNCE = [0.34, 1.56, 0.64, 1] as const;

export function FadeUp({
  children,
  delay = 0,
  className,
  y = 48,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 1, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

const lineParent: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const lineChild: Variants = {
  hidden: { y: "115%", rotate: 2 },
  visible: {
    y: 0,
    rotate: 0,
    transition: { duration: 1, ease: EASE },
  },
};

/** Reveals each line by sliding it up from behind an overflow mask. */
export function SplitLines({
  lines,
  className,
  lineClassName,
  as: Tag = "h2",
}: {
  lines: ReactNode[];
  className?: string;
  lineClassName?: string;
  as?: "h1" | "h2" | "h3" | "p" | "div";
}) {
  return (
    <motion.div
      variants={lineParent}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-15% 0px" }}
    >
      <Tag className={className}>
        {lines.map((line, i) => (
          <span
            key={i}
            className="block overflow-hidden pt-[0.18em] -mt-[0.18em] pb-[0.12em] -mb-[0.12em]"
          >
            <motion.span
              variants={lineChild}
              className={`block origin-bottom-left will-change-transform ${lineClassName ?? ""}`}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </Tag>
    </motion.div>
  );
}

/** Rotated sticker-style section label, e.g. "01 · The Social Layer" */
export function SectionLabel({
  index,
  text,
  invert = false,
}: {
  index: string;
  text: string;
  invert?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px" }}
      transition={{ duration: 0.8, ease: BOUNCE }}
      className="inline-block"
    >
      <span
        className={`sticker font-mono text-[10px] font-bold tracking-[0.22em] uppercase sm:text-[11px] ${
          invert ? "bg-sun text-ink" : "bg-cream-2 text-ink"
        }`}
      >
        <span className="text-mango">{index}</span>
        {text}
      </span>
    </motion.div>
  );
}

/** Hand-drawn scribble underline that draws itself in on view. */
export function Scribble({
  className = "text-mango",
  delay = 0.3,
}: {
  className?: string;
  delay?: number;
}) {
  return (
    <svg
      viewBox="0 0 220 14"
      fill="none"
      className={`absolute -bottom-[0.18em] left-0 w-full ${className}`}
      preserveAspectRatio="none"
      aria-hidden
    >
      <motion.path
        d="M3 10 C40 4, 80 3, 118 7 C150 10, 185 9, 217 5"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, margin: "-15% 0px" }}
        transition={{ duration: 0.8, ease: "easeOut", delay }}
      />
    </svg>
  );
}
