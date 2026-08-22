"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { EASE, FadeUp, Scribble, SectionLabel, SplitLines } from "./Reveal";

const CREDENTIALS = [
  { label: "Work", value: "CTO @ Zaptick", href: "https://zaptick.io" },
  { label: "Home", value: "Beed, Maharashtra" },
  { label: "Now", value: "Building BEEDOUT" },
];

export default function Founder() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section ref={ref} className="relative overflow-hidden">
      {/* oversized watermark */}
      <motion.span
        aria-hidden
        style={{ y: bgY }}
        className="pointer-events-none absolute -right-8 top-1/2 -translate-y-1/2 select-none font-marathi text-[46vw] leading-none text-ink/[0.045] sm:text-[30vw]"
      >
        बीड
      </motion.span>

      <div className="relative z-10 mx-auto max-w-[1500px] px-5 pt-40 pb-24 sm:px-10 sm:pt-48 sm:pb-32">
        <SectionLabel index="01" text="The Person Behind It" />

        <div className="mt-12 grid gap-16 lg:grid-cols-[1.4fr_1fr] lg:gap-24">
          <div>
            <SplitLines
              as="h2"
              className="display-tight text-5xl font-black sm:text-7xl lg:text-8xl"
              lines={[
                <span key="a">Aditya</span>,
                <span key="b">Balasaheb</span>,
                <span key="c" className="relative inline-block">
                  Pingle.
                  <Scribble />
                </span>,
              ]}
            />

            <FadeUp delay={0.2}>
              <p className="mt-8 text-lg font-bold text-ink/60">
                CTO @{" "}
                <a
                  href="https://zaptick.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-line text-mango"
                >
                  Zaptick
                </a>{" "}
                · From Beed, Maharashtra
              </p>
            </FadeUp>

            <FadeUp delay={0.3}>
              <blockquote className="card-pop mt-10 max-w-2xl rounded-3xl bg-sun p-8 font-serif text-2xl italic leading-snug sm:p-10 sm:text-3xl">
                &ldquo;I&apos;ve spent years building tech for other places.
                Felt like it was time to build some for home. That&apos;s it —
                that&apos;s the whole story. Beed deserves to be{" "}
                <span className="marker marker-mango not-italic font-sans font-black">seen</span>.&rdquo;
              </blockquote>
            </FadeUp>

            <FadeUp delay={0.4}>
              <div className="mt-10 flex max-w-xl flex-col gap-5 text-lg font-semibold leading-relaxed text-ink/65">
                <p>
                  Born and raised in Beed. Works in tech — currently CTO at
                  Zaptick, with years spent building startups and products
                  before that.
                </p>
                <p>
                  BEEDOUT is a simple idea: put every Beed business online,
                  give every club a home, and make AI and tech skills something
                  you learn here — not something you leave for.
                </p>
                <p>It starts at home. That&apos;s the whole plan.</p>
              </div>
            </FadeUp>

            <FadeUp delay={0.5}>
              <p className="mt-12 font-serif text-4xl italic text-ink/75 sm:text-5xl">
                — Aditya
              </p>
            </FadeUp>
          </div>

          <div className="flex flex-col justify-end gap-5">
            {CREDENTIALS.map((c, i) => (
              <motion.div
                key={c.label}
                className="card-pop flex items-baseline justify-between gap-6 rounded-2xl bg-cream-2 px-6 py-5"
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.8, ease: EASE, delay: i * 0.08 }}
              >
                <span className="font-mono text-[10px] font-bold tracking-[0.25em] text-ink/45 uppercase">
                  {c.label}
                </span>
                {c.href ? (
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-line text-right text-lg font-black tracking-tight text-mango"
                  >
                    {c.value} ↗
                  </a>
                ) : (
                  <span className="text-right text-lg font-black tracking-tight">
                    {c.value}
                  </span>
                )}
              </motion.div>
            ))}

            <FadeUp delay={0.4} className="mt-5">
              <p className="text-base font-bold text-ink/50">
                No big speeches. Just work.
              </p>
            </FadeUp>
          </div>
        </div>
      </div>
    </section>
  );
}
