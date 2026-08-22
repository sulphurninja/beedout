"use client";

import { motion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef } from "react";
import { SectionLabel } from "./Reveal";
import { useLang } from "../lib/i18n";

function Word({
  word,
  progress,
  range,
}: {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.13, 1]);
  const isAccent = word.startsWith("Beed") || word.includes("बीड");
  return (
    <motion.span
      style={{ opacity }}
      className={isAccent ? "text-mango" : undefined}
    >
      {word}{" "}
    </motion.span>
  );
}

export default function Manifesto() {
  const ref = useRef<HTMLDivElement>(null);
  const { t } = useLang();
  const words = t.manifesto.text.split(" ");
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.85", "end 0.45"],
  });

  return (
    <section id="story" className="relative">
      <div className="mx-auto max-w-[1500px] px-5 py-28 sm:px-10 sm:py-40">
        <SectionLabel index="00" text={t.manifesto.label} />
        <div ref={ref} className="mt-12 max-w-5xl">
          <p className="text-3xl font-extrabold leading-[1.22] tracking-tight sm:text-5xl">
            {words.map((word, i) => (
              <Word
                key={`${i}-${word}`}
                word={word}
                progress={scrollYProgress}
                range={[i / words.length, (i + 1) / words.length]}
              />
            ))}
          </p>
        </div>
        <p className="mt-12 font-serif text-xl italic text-ink/55 sm:text-2xl">
          {t.manifesto.signoff}
        </p>
      </div>
    </section>
  );
}
