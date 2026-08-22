"use client";

import Image from "next/image";
import Link from "next/link";
import { BUSINESSES } from "../lib/data";
import { FadeUp, Scribble, SectionLabel, SplitLines } from "./Reveal";
import Marquee from "./Marquee";
import { useLang } from "../lib/i18n";

export default function BusinessStrip() {
  const { t } = useLang();

  return (
    <section className="relative overflow-hidden bg-tan py-24 sm:py-32">
      <div className="mx-auto max-w-[1500px] px-5 sm:px-10">
        <SectionLabel index="02" text={t.strip.label} />
        <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <SplitLines
            as="h2"
            className="display-tight max-w-3xl text-5xl font-black sm:text-7xl"
            lines={[
              <span key="a">
                {t.strip.h}{" "}
                <span className="relative inline-block">
                  {t.strip.hAccent}
                  <Scribble />
                </span>
              </span>,
            ]}
          />
          <FadeUp delay={0.15}>
            <Link
              href="/businesses"
              className="btn-pop inline-block rounded-full bg-cream-2 px-7 py-3.5 text-base font-black"
            >
              {t.strip.cta}
            </Link>
          </FadeUp>
        </div>
      </div>

      <FadeUp delay={0.2} className="mt-14">
        <Marquee duration={45}>
          {BUSINESSES.map((b, i) => (
            <Link
              key={b.name}
              href="/businesses"
              className="card-pop group mx-3 my-4 block w-[260px] shrink-0 overflow-hidden rounded-3xl bg-cream-2 sm:w-[300px]"
            >
              <div className="relative aspect-[3/2] overflow-hidden border-b border-line">
                <Image
                  src={b.image}
                  alt={b.name}
                  fill
                  sizes="300px"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
                <span className="sticker absolute top-3 left-3 bg-cream-2/90 font-mono text-[9px] font-bold tracking-[0.18em] uppercase backdrop-blur-sm">
                  {b.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="text-lg font-black tracking-tight">{b.name}</h3>
                <p className="mt-1 truncate text-sm font-semibold text-ink/55">
                  {b.tagline}
                </p>
              </div>
            </Link>
          ))}
        </Marquee>
      </FadeUp>
    </section>
  );
}
