"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { EASE, FadeUp, SectionLabel, SplitLines } from "./Reveal";
import { useLang } from "../lib/i18n";

export default function FAQ() {
  const { t } = useLang();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="relative">
      <div className="mx-auto max-w-[1500px] px-5 py-24 sm:px-10 sm:py-32">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-24">
          <div>
            <SectionLabel index="04" text={t.faq.label} />
            <div className="mt-8">
              <SplitLines
                as="h2"
                className="display-tight text-4xl font-black sm:text-6xl"
                lines={[
                  <span key="a">{t.faq.h1}</span>,
                  <em
                    key="b"
                    className="font-serif font-normal italic text-mango"
                  >
                    {t.faq.h2}
                  </em>,
                ]}
              />
            </div>
          </div>

          <FadeUp delay={0.15}>
            <div className="flex flex-col gap-4">
              {t.faq.items.map((item, i) => {
                const open = openIndex === i;
                return (
                  <div
                    key={i}
                    className={`card-pop overflow-hidden rounded-2xl transition-colors duration-300 ${
                      open ? "bg-cream-2" : "bg-cream-2/60"
                    }`}
                  >
                    <button
                      onClick={() => setOpenIndex(open ? null : i)}
                      className="flex w-full items-center justify-between gap-6 px-7 py-5 text-left"
                      aria-expanded={open}
                    >
                      <span className="text-lg font-black tracking-tight sm:text-xl">
                        {item.q}
                      </span>
                      <motion.span
                        animate={{ rotate: open ? 45 : 0 }}
                        transition={{ duration: 0.35, ease: EASE }}
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-lg font-black transition-colors duration-300 ${
                          open ? "bg-mango text-cream-2" : "border border-line"
                        }`}
                      >
                        +
                      </motion.span>
                    </button>
                    <AnimatePresence initial={false}>
                      {open && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.45, ease: EASE }}
                          className="overflow-hidden"
                        >
                          <p className="px-7 pb-6 text-base font-semibold leading-relaxed text-ink/60 sm:text-lg">
                            {item.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
