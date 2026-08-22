"use client";

import { motion } from "motion/react";
import { BOUNCE, FadeUp, SplitLines } from "./Reveal";
import { useLang, type Dict } from "../lib/i18n";

export default function PageHero({
  pageKey,
}: {
  pageKey: keyof Dict["pages"];
}) {
  const { t } = useLang();
  const page = t.pages[pageKey];

  return (
    <div className="mx-auto max-w-[1500px] px-5 pt-36 pb-14 sm:px-10 sm:pt-44 sm:pb-18">
      <motion.span
        className="sticker bg-sun font-mono text-[10px] font-bold tracking-[0.25em] uppercase sm:text-xs"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: BOUNCE, delay: 0.15 }}
      >
        {page.label}
      </motion.span>
      <div className="mt-7">
        <SplitLines
          as="h1"
          className="display-tight text-5xl font-black sm:text-7xl lg:text-8xl"
          lines={[
            <span key="a">{page.line1}</span>,
            <em key="b" className="font-serif font-normal italic text-mango">
              {page.line2}
            </em>,
          ]}
        />
      </div>
      <FadeUp delay={0.25}>
        <p className="mt-7 max-w-xl text-xl font-semibold leading-relaxed text-ink/60 sm:text-2xl">
          {page.sub}
        </p>
      </FadeUp>
    </div>
  );
}
