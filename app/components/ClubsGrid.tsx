"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { CLUBS } from "../lib/data";
import { EASE, FadeUp } from "./Reveal";
import Marquee from "./Marquee";
import { useLang } from "../lib/i18n";

export default function ClubsGrid() {
  const { t } = useLang();

  return (
    <>
      <div className="mx-auto max-w-[1500px] px-5 sm:px-10">
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {CLUBS.map((club, i) => (
            <motion.a
              key={club.name}
              href="#join"
              className="card-pop group block overflow-hidden rounded-3xl bg-cream-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{ duration: 0.8, ease: EASE, delay: (i % 3) * 0.1 }}
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-line">
                <Image
                  src={club.image}
                  alt={club.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
                <span className="sticker absolute top-4 left-4 bg-cream-2/90 font-mono text-[9px] font-bold tracking-[0.18em] uppercase backdrop-blur-sm">
                  {club.tag}
                </span>
                <span className="absolute right-4 bottom-3 font-marathi text-3xl text-cream-2 [text-shadow:1px_1px_0_rgba(25,20,16,0.8)]">
                  {club.marathi}
                </span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-black tracking-tight sm:text-2xl">
                  {club.name}
                </h3>
                <p className="mt-1.5 text-sm font-semibold text-ink/55">
                  {club.desc}
                </p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="font-mono text-[10px] font-bold tracking-[0.2em] text-ink/45 uppercase">
                    {club.members}
                  </span>
                  <span className="text-base font-black text-mango opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100">
                    Join →
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* start your own */}
        <FadeUp className="mt-7">
          <a
            href="#join"
            className="card-pop group flex flex-col justify-between gap-6 rounded-3xl bg-sun p-8 sm:flex-row sm:items-center sm:p-10"
          >
            <div>
              <h3 className="text-2xl font-black tracking-tight sm:text-3xl">
                {t.clubs.startTitle1}{" "}
                <em className="font-serif font-normal italic">
                  {t.clubs.startTitle2}
                </em>
              </h3>
              <p className="mt-2 max-w-lg text-lg font-semibold text-ink/65">
                {t.clubs.startSub}
              </p>
            </div>
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-line bg-cream-2 text-2xl font-black transition-all duration-300 group-hover:border-mango group-hover:bg-mango group-hover:text-cream-2">
              +
            </span>
          </a>
        </FadeUp>
      </div>

      <div className="mt-24 w-full bg-ink py-5">
        <Marquee duration={32} reverse>
          {t.clubs.features.map((f) => (
            <span
              key={f}
              className="flex items-center text-lg font-black tracking-tight text-cream uppercase"
            >
              <span className="px-6">{f}</span>
              <span className="h-2 w-2 rounded-full bg-mango" />
              <span className="w-6" />
            </span>
          ))}
        </Marquee>
      </div>
    </>
  );
}
