"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import Link from "next/link";
import { EASE } from "./Reveal";
import Marquee from "./Marquee";
import Magnetic from "./Magnetic";
import { useLang } from "../lib/i18n";

/** Delay so the hero choreography starts as the preloader curtain lifts. */
const T = 1.95;

const STAT_ACCENTS = ["text-mango", "text-ink", "text-mango"];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { t } = useLang();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "26%"]);
  const fade = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-svh flex-col justify-between overflow-hidden pt-36 sm:pt-44"
    >
      {/* soft mango glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[-20%] h-[70vmin] w-[110vmin] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(ellipse,rgba(255,77,0,0.08)_0%,transparent_65%)]"
      />

      <motion.div
        style={{ y: titleY, opacity: fade }}
        className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center px-5 text-center"
      >
        {/* eyebrow */}
        <motion.span
          className="sticker font-mono text-[10px] font-bold tracking-[0.22em] uppercase sm:text-[11px]"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: T + 0.1, duration: 0.8, ease: EASE }}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-leaf" />
          {t.hero.eyebrow}
        </motion.span>

        {/* headline */}
        <h1 className="display-tight mt-8 text-balance text-6xl font-black sm:text-8xl lg:text-[7vw]">
          <span className="block overflow-hidden pt-[0.18em] -mt-[0.18em] pb-[0.12em] -mb-[0.12em]">
            <motion.span
              className="block will-change-transform"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ delay: T + 0.2, duration: 1, ease: EASE }}
            >
              {t.hero.punch1}
            </motion.span>
          </span>
          <span className="block overflow-hidden pt-[0.18em] -mt-[0.18em] pb-[0.14em] -mb-[0.14em]">
            <motion.span
              className="block will-change-transform"
              initial={{ y: "110%" }}
              animate={{ y: 0 }}
              transition={{ delay: T + 0.32, duration: 1, ease: EASE }}
            >
              <span className="marker">{t.hero.punch2}</span>
            </motion.span>
          </span>
        </h1>

        {/* sub */}
        <motion.p
          className="mt-7 max-w-lg text-balance text-lg leading-relaxed font-semibold text-ink/60 sm:text-xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: T + 0.55, duration: 0.9, ease: EASE }}
        >
          {t.hero.sub}{" "}
          <em className="font-serif italic text-ink">{t.hero.subEm}</em>
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: T + 0.7, duration: 0.9, ease: EASE }}
        >
          <Magnetic>
            <a
              href="#join"
              className="btn-pop block rounded-full bg-mango px-9 py-4 text-lg font-black text-cream-2"
            >
              {t.hero.ctaPrimary}
            </a>
          </Magnetic>
          <Magnetic>
            <Link
              href="/businesses"
              className="btn-pop block rounded-full border border-line bg-cream-2 px-9 py-4 text-lg font-black"
            >
              {t.hero.ctaSecondary}
            </Link>
          </Magnetic>
        </motion.div>

        {/* stats — clean divider row, TagMango style */}
        <motion.div
          className="mt-16 grid w-full max-w-3xl grid-cols-3 divide-x divide-line"
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: T + 0.85, duration: 0.9, ease: EASE }}
        >
          {t.hero.stats.map((s, i) => (
            <div key={i} className="px-3 sm:px-8">
              <p
                className={`text-2xl font-black tracking-tight sm:text-4xl ${STAT_ACCENTS[i]}`}
              >
                {s.big}
              </p>
              <p className="mt-1.5 text-xs font-semibold text-ink/50 sm:text-sm">
                {s.small}
              </p>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* chip marquee */}
      <motion.div
        className="relative z-10 mt-20 border-t border-line py-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: T + 1, duration: 1 }}
      >
        <Marquee
          duration={30}
          className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
        >
          {t.hero.ribbon.map((item) => (
            <span
              key={item}
              className="sticker mx-2.5 text-sm font-bold whitespace-nowrap text-ink/70"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-mango" />
              {item}
            </span>
          ))}
        </Marquee>
      </motion.div>
    </section>
  );
}
