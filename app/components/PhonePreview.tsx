"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { BOUNCE, EASE, FadeUp, Scribble, SectionLabel, SplitLines } from "./Reveal";
import { useLang } from "../lib/i18n";

const bubbleIn = {
  initial: { opacity: 0, y: 24, scale: 0.9 },
  whileInView: { opacity: 1, y: 0, scale: 1 },
};

export default function PhonePreview() {
  const ref = useRef<HTMLElement>(null);
  const { t } = useLang();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const phoneY = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={ref} className="relative overflow-hidden bg-ink py-24 text-cream sm:py-32">
      <div className="mx-auto grid max-w-[1500px] items-center gap-16 px-5 sm:px-10 lg:grid-cols-2 lg:gap-24">
        {/* copy */}
        <div>
          <SectionLabel index="02" text={t.phone.label} invert />
          <div className="mt-10">
            <SplitLines
              as="h2"
              className="display-tight text-5xl font-black text-cream sm:text-7xl"
              lines={[
                <span key="a">{t.phone.h1}</span>,
                <span key="b" className="relative inline-block text-mango">
                  {t.phone.h2}
                  <Scribble className="text-sun" />
                </span>,
              ]}
            />
          </div>
          <FadeUp delay={0.2}>
            <p className="mt-8 max-w-md text-lg font-semibold leading-relaxed text-cream/60 sm:text-xl">
              {t.phone.sub}
            </p>
          </FadeUp>
          <FadeUp delay={0.3}>
            <div className="mt-10 flex flex-wrap gap-3">
              {t.clubs.features.slice(0, 4).map((f, i) => (
                <span
                  key={f}
                  className={`sticker bg-transparent font-mono text-[10px] font-bold tracking-[0.18em] text-cream/80 uppercase shadow-none ${
                    i % 2 === 0 ? "border-cream/25" : "border-mango/50"
                  }`}
                >
                  {f}
                </span>
              ))}
            </div>
          </FadeUp>
        </div>

        {/* phone */}
        <motion.div style={{ y: phoneY }} className="relative mx-auto w-[300px] sm:w-[330px]">
          {/* floating stickers */}
          <motion.span
            className="sticker absolute -left-16 top-16 z-20 hidden -rotate-2 border-sun bg-sun font-mono text-[10px] font-bold tracking-[0.15em] text-ink uppercase sm:inline-flex"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.5, ease: BOUNCE }}
          >
            {t.phone.going}
          </motion.span>
          <motion.span
            className="sticker absolute -right-14 bottom-28 z-20 hidden rotate-2 border-mango bg-mango font-mono text-[10px] font-bold tracking-[0.15em] text-cream-2 uppercase sm:inline-flex"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.5, ease: BOUNCE }}
          >
            {t.phone.rsvp} →
          </motion.span>

          {/* frame */}
          <motion.div
            className="card-pop relative overflow-hidden rounded-[2.8rem] bg-cream text-ink"
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 1, ease: EASE }}
          >
            {/* status bar + notch */}
            <div className="flex items-center justify-between px-7 pt-4 pb-2">
              <span className="font-mono text-[10px] font-bold">9:41</span>
              <span className="h-5 w-20 rounded-full bg-ink" />
              <span className="font-mono text-[10px] font-bold">100%</span>
            </div>

            {/* club header */}
            <div className="flex items-center gap-3 border-b border-line bg-cream-2 px-5 py-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sun font-marathi text-lg">
                धाव
              </span>
              <div>
                <p className="text-sm font-black leading-tight">{t.phone.clubName}</p>
                <p className="text-[11px] font-semibold text-ink/50">
                  {t.phone.clubMeta}
                </p>
              </div>
              <span className="ml-auto h-2.5 w-2.5 rounded-full bg-leaf" />
            </div>

            {/* chat */}
            <div className="flex min-h-[340px] flex-col gap-3 bg-cream px-4 py-5">
              {t.phone.messages.map((m, i) => (
                <motion.div
                  key={i}
                  {...bubbleIn}
                  viewport={{ once: true, margin: "-15% 0px" }}
                  transition={{ delay: 0.5 + i * 0.25, duration: 0.55, ease: BOUNCE }}
                  className={`max-w-[85%] rounded-2xl border border-line px-4 py-2.5 shadow-sm ${
                    i % 2 === 0
                      ? "self-start rounded-bl-md bg-cream-2"
                      : "self-end rounded-br-md bg-sun"
                  }`}
                >
                  <p className="text-[10px] font-black text-mango">{m.from}</p>
                  <p className="text-[13px] font-bold leading-snug">{m.text}</p>
                </motion.div>
              ))}

              {/* event card */}
              <motion.div
                {...bubbleIn}
                viewport={{ once: true, margin: "-15% 0px" }}
                transition={{ delay: 1.35, duration: 0.55, ease: BOUNCE }}
                className="mt-1 rounded-2xl bg-mango p-4 text-cream-2 shadow-md"
              >
                <p className="font-mono text-[9px] font-bold tracking-[0.2em] uppercase opacity-80">
                  Event
                </p>
                <p className="mt-1 text-base font-black leading-tight">
                  {t.phone.eventTitle}
                </p>
                <p className="text-[12px] font-bold opacity-85">{t.phone.eventMeta}</p>
                <span className="btn-pop mt-3 inline-block rounded-full bg-cream-2 px-4 py-1.5 text-[12px] font-black text-ink">
                  {t.phone.rsvp}
                </span>
              </motion.div>

              {/* typing indicator */}
              <motion.div
                {...bubbleIn}
                viewport={{ once: true, margin: "-15% 0px" }}
                transition={{ delay: 1.7, duration: 0.5, ease: BOUNCE }}
                className="flex w-16 items-center justify-center gap-1 self-start rounded-2xl rounded-bl-md border border-line bg-cream-2 px-3 py-3 shadow-sm"
              >
                {[0, 1, 2].map((d) => (
                  <motion.span
                    key={d}
                    className="h-1.5 w-1.5 rounded-full bg-ink/60"
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      duration: 0.9,
                      repeat: Infinity,
                      delay: d * 0.15,
                      ease: "easeInOut",
                    }}
                  />
                ))}
              </motion.div>
            </div>

            {/* input bar */}
            <div className="border-t border-line bg-cream-2 px-4 py-3">
              <div className="flex items-center justify-between rounded-full border border-line bg-cream px-4 py-2.5">
                <span className="text-[12px] font-bold text-ink/40">
                  {t.phone.inputHint}
                </span>
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-mango text-[11px] font-black text-cream-2">
                  ↑
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
