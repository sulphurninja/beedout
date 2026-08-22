"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState, type FormEvent } from "react";
import { BOUNCE, EASE, FadeUp, SplitLines } from "./Reveal";
import Magnetic from "./Magnetic";
import { useLang } from "../lib/i18n";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);
  const { t } = useLang();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (email.trim()) setJoined(true);
  }

  return (
    <section
      id="join"
      className="relative overflow-hidden bg-mango"
    >
      <div className="relative z-10 mx-auto flex max-w-[1500px] flex-col items-center px-5 py-28 text-center sm:px-10 sm:py-40">
        <motion.span
          className="sticker bg-sun font-mono text-[10px] font-bold tracking-[0.25em] uppercase sm:text-xs"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.5, ease: BOUNCE }}
        >
          {t.cta.sticker}
        </motion.span>

        <div className="mt-8">
          <SplitLines
            as="h2"
            className="display-tight text-6xl font-black text-cream-2 sm:text-8xl lg:text-[9vw]"
            lines={[<span key="a">{t.cta.h}</span>]}
          />
        </div>

        <FadeUp delay={0.2}>
          <p className="mt-7 max-w-lg text-balance text-lg font-bold leading-relaxed text-cream-2/90 sm:text-xl">
            {t.cta.sub}
          </p>
        </FadeUp>

        <FadeUp delay={0.3} className="mt-12 w-full max-w-xl">
          <AnimatePresence mode="wait">
            {joined ? (
              <motion.div
                key="done"
                initial={{ opacity: 0, scale: 0.94 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, ease: BOUNCE }}
                className="card-pop rounded-3xl bg-cream-2 px-8 py-10"
              >
                <p className="font-marathi text-4xl text-mango">स्वागत आहे!</p>
                <p className="mt-3 text-xl font-black">{t.cta.doneTitle}</p>
                <p className="mt-2 text-base font-semibold text-ink/60">
                  {t.cta.doneSub}
                </p>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: EASE }}
                className="flex flex-col gap-4 sm:flex-row"
              >
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t.cta.placeholder}
                  className="card-pop h-15 flex-1 rounded-full bg-cream-2 px-7 py-4 text-lg font-bold text-ink placeholder:text-ink/40 focus:outline-none"
                />
                <Magnetic>
                  <button
                    type="submit"
                    className="btn-pop w-full rounded-full bg-ink px-9 py-4 text-lg font-black text-cream-2 sm:w-auto"
                  >
                    {t.cta.button}
                  </button>
                </Magnetic>
              </motion.form>
            )}
          </AnimatePresence>
        </FadeUp>

        <FadeUp delay={0.4}>
          <p className="mt-8 font-mono text-[10px] font-bold tracking-[0.3em] text-cream-2/70 uppercase">
            {t.cta.nospam}
          </p>
        </FadeUp>
      </div>
    </section>
  );
}
