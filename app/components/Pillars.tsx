"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { PILLARS } from "../lib/data";
import { EASE, FadeUp, Scribble, SectionLabel, SplitLines } from "./Reveal";
import PhotoCard from "./PhotoCard";
import { useLang } from "../lib/i18n";

const TILTS = ["", "", ""];

export default function Pillars() {
  const { t } = useLang();

  return (
    <section className="relative">
      <div className="mx-auto max-w-[1500px] px-5 py-24 sm:px-10 sm:py-32">
        <SectionLabel index="01" text={t.pillars.label} />

        <div className="mt-10 flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <SplitLines
            as="h2"
            className="display-tight max-w-3xl text-5xl font-black sm:text-7xl"
            lines={[
              <span key="a">{t.pillars.h1}</span>,
              <span key="b" className="relative inline-block">
                {t.pillars.h2}
                <Scribble />
              </span>,
            ]}
          />
          <FadeUp delay={0.15} className="max-w-sm">
            <p className="text-lg font-semibold leading-relaxed text-ink/60">
              {t.pillars.sub}
            </p>
          </FadeUp>
        </div>

        <div className="mt-16 grid gap-7 md:grid-cols-3">
          {PILLARS.map((p, i) => {
            const item = t.pillars.items[i];
            return (
              <motion.div
                key={p.href}
                className={TILTS[i]}
                initial={{ opacity: 0, y: 56 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{ duration: 0.9, ease: EASE, delay: i * 0.12 }}
              >
                <Link
                  href={p.href}
                  className="card-pop group block overflow-hidden rounded-3xl bg-cream-2"
                >
                  <div className="border-b border-line">
                    <PhotoCard src={p.image} alt={item.title} />
                  </div>
                  <div className="p-7">
                    <span className="sticker bg-sun font-mono text-[10px] font-bold tracking-[0.2em]">
                      0{i + 1}
                    </span>
                    <h3 className="mt-4 text-2xl font-black tracking-tight sm:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-base font-semibold leading-relaxed text-ink/60">
                      {item.line}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-base font-black text-mango">
                      {item.cta}
                      <span className="transition-transform duration-300 group-hover:translate-x-1.5">
                        →
                      </span>
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
