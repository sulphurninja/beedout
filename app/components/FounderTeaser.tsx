"use client";

import Link from "next/link";
import { FadeUp } from "./Reveal";
import { useLang } from "../lib/i18n";

export default function FounderTeaser() {
  const { t } = useLang();

  return (
    <section className="relative bg-ink py-20 text-cream sm:py-24">
      <FadeUp>
        <Link
          href="/about"
          className="group mx-auto flex max-w-[1500px] flex-col justify-between gap-8 px-5 sm:px-10 md:flex-row md:items-center"
        >
          <div>
            <span className="sticker border-cream/25 bg-transparent font-mono text-[10px] font-bold tracking-[0.25em] text-sun uppercase shadow-none">
              {t.founderTeaser.label}
            </span>
            <p className="mt-6 text-3xl font-black tracking-tight sm:text-5xl">
              {t.founderTeaser.h1}{" "}
              <em className="font-serif font-normal italic text-mango">
                {t.founderTeaser.hAccent}
              </em>
            </p>
            <p className="mt-3 max-w-lg text-lg font-semibold text-cream/60">
              {t.founderTeaser.sub}
            </p>
          </div>
          <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-cream/30 text-xl font-black transition-all duration-500 group-hover:border-mango group-hover:bg-mango group-hover:text-cream-2 sm:h-20 sm:w-20">
            →
          </span>
        </Link>
      </FadeUp>
    </section>
  );
}
