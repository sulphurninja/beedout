"use client";

import { motion } from "motion/react";
import { EASE, FadeUp, Scribble, SectionLabel, SplitLines } from "./Reveal";
import Magnetic from "./Magnetic";
import { useLang } from "../lib/i18n";

/** Visual config per step; copy comes from the i18n dictionary. */
const STEP_STYLE = [
  { marathi: "पान", bg: "bg-cream-2" },
  { marathi: "प्रसार", bg: "bg-sun" },
  { marathi: "ग्राहक", bg: "bg-cream-2" },
  { marathi: "स्वप्न", bg: "bg-mango" },
];

export default function GetOnline() {
  const { t } = useLang();

  return (
    <section className="relative mt-24 bg-tan py-24 sm:mt-32 sm:py-32">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-10">
        <SectionLabel index="02" text={t.getOnline.label} />

        <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SplitLines
            as="h2"
            className="display-tight max-w-3xl text-5xl font-black sm:text-7xl"
            lines={[
              <span key="a">{t.getOnline.h1}</span>,
              <span key="b" className="relative inline-block">
                {t.getOnline.h2}
                <Scribble />
              </span>,
            ]}
          />
          <FadeUp delay={0.15} className="max-w-sm">
            <p className="text-lg font-semibold leading-relaxed text-ink/60">
              {t.getOnline.sub}
            </p>
          </FadeUp>
        </div>

        <div className="mt-16 grid gap-7 sm:grid-cols-2">
          {t.getOnline.steps.map((s, i) => {
            const style = STEP_STYLE[i];
            return (
              <motion.div
                key={i}
                className={`card-pop group relative overflow-hidden rounded-3xl p-8 sm:p-11 ${style.bg} ${
                  style.bg === "bg-mango" ? "text-cream-2" : ""
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{ duration: 0.8, ease: EASE, delay: (i % 2) * 0.1 }}
              >
                <span
                  aria-hidden
                  className={`pointer-events-none absolute -right-4 -bottom-8 select-none font-marathi text-[9rem] leading-none ${
                    style.bg === "bg-mango" ? "text-cream-2/15" : "text-ink/[0.06]"
                  }`}
                >
                  {style.marathi}
                </span>
                <span
                  className={`sticker font-mono text-xs font-bold tracking-[0.2em] ${
                    style.bg === "bg-sun" ? "bg-cream-2" : "bg-sun text-ink"
                  }`}
                >
                  0{i + 1}
                </span>
                <h3 className="mt-6 text-3xl font-black tracking-tight sm:text-4xl">
                  {s.title}
                </h3>
                <p
                  className={`mt-3 max-w-md text-lg font-semibold leading-relaxed ${
                    style.bg === "bg-mango" ? "text-cream-2/85" : "text-ink/60"
                  }`}
                >
                  {s.line}
                </p>
              </motion.div>
            );
          })}
        </div>

        <FadeUp className="mt-16 flex flex-col items-center gap-7 text-center">
          <p className="max-w-md text-xl font-bold text-ink/70">
            {t.getOnline.bottom}
          </p>
          <Magnetic>
            <a
              href="#join"
              className="btn-pop block rounded-full bg-mango px-10 py-5 text-xl font-black text-cream-2"
            >
              {t.getOnline.button}
            </a>
          </Magnetic>
        </FadeUp>
      </div>
    </section>
  );
}
