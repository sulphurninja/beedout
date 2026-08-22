"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { BUSINESSES, BUSINESS_CATEGORIES } from "../lib/data";
import { EASE } from "./Reveal";
import { useLang } from "../lib/i18n";

export default function BusinessGrid() {
  const [active, setActive] = useState<(typeof BUSINESS_CATEGORIES)[number]>("All");
  const { t } = useLang();

  const shown =
    active === "All"
      ? BUSINESSES
      : BUSINESSES.filter((b) => b.category === active);

  return (
    <div className="mx-auto max-w-[1500px] px-5 sm:px-10">
      {/* category chips */}
      <div className="flex flex-wrap gap-3">
        {BUSINESS_CATEGORIES.map((cat) => {
          const isActive = cat === active;
          return (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`btn-pop rounded-full px-6 py-2.5 text-base font-black transition-colors ${
                isActive ? "bg-ink text-cream-2" : "bg-cream-2 text-ink"
              }`}
            >
              {t.categories[cat]}
            </button>
          );
        })}
      </div>

      {/* grid */}
      <motion.div layout className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {shown.map((b, i) => (
            <motion.a
              layout
              key={b.name}
              href="#join"
              className="card-pop group block overflow-hidden rounded-3xl bg-cream-2"
              initial={{ opacity: 0, scale: 0.92, y: 24 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 24 }}
              transition={{ duration: 0.55, ease: EASE }}
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-line">
                <Image
                  src={b.image}
                  alt={b.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
                <span className="sticker absolute top-4 left-4 bg-cream-2/90 font-mono text-[9px] font-bold tracking-[0.18em] uppercase backdrop-blur-sm">
                  {t.categories[b.category]}
                </span>
                <span className="absolute right-4 bottom-3 font-marathi text-2xl text-cream-2 [text-shadow:1px_1px_0_rgba(25,20,16,0.8)]">
                  {b.marathi}
                </span>
              </div>
              <div className="flex items-center justify-between gap-4 p-6">
                <div>
                  <h3 className="text-xl font-black tracking-tight sm:text-2xl">
                    {b.name}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-ink/55">
                    {b.tagline}
                  </p>
                </div>
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line text-base font-black transition-all duration-300 group-hover:border-mango group-hover:bg-mango group-hover:text-cream-2">
                  →
                </span>
              </div>
            </motion.a>
          ))}
        </AnimatePresence>
      </motion.div>

      <p className="mt-12 text-center font-mono text-[10px] font-bold tracking-[0.3em] text-ink/40 uppercase">
        {t.sampleNote}
      </p>
    </div>
  );
}
