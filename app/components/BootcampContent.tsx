"use client";

import Image from "next/image";
import { animate, motion, useInView } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { BOOTCAMP_IMAGES } from "../lib/data";
import { EASE, FadeUp, Scribble, SectionLabel, SplitLines } from "./Reveal";
import Magnetic from "./Magnetic";
import { useLang } from "../lib/i18n";

function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 2,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref}>
      {value.toLocaleString("en-IN")}
      {suffix}
    </span>
  );
}

const FORMAT_IMAGES = [BOOTCAMP_IMAGES.offline, BOOTCAMP_IMAGES.online];
const STAT_NUMBERS = [
  { to: 1000, suffix: "+" },
  { to: 4, suffix: "" },
  { to: 100, suffix: "%" },
];

export default function BootcampContent() {
  const { t } = useLang();

  return (
    <>
      <div className="mx-auto max-w-[1500px] px-5 sm:px-10">
        {/* formats */}
        <div className="grid gap-7 md:grid-cols-2">
          {t.bootcamp.formats.map((f, i) => (
            <motion.div
              key={i}
              className="card-pop group relative overflow-hidden rounded-3xl bg-cream-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{ duration: 0.9, ease: EASE, delay: i * 0.12 }}
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-line">
                <Image
                  src={FORMAT_IMAGES[i]}
                  alt={f.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                />
                <span className="sticker absolute top-4 left-4 border-mango bg-mango font-mono text-[10px] font-bold tracking-[0.18em] text-cream-2 uppercase">
                  {f.tag}
                </span>
              </div>
              <div className="p-7 sm:p-9">
                <h3 className="text-3xl font-black tracking-tight sm:text-4xl">
                  {f.title}
                </h3>
                <p className="mt-2 max-w-md text-lg font-semibold leading-relaxed text-ink/60">
                  {f.line}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* stats */}
        <div className="mt-16 grid gap-7 sm:grid-cols-3">
          {t.bootcamp.stats.map((label, i) => (
            <FadeUp key={label} delay={i * 0.08}>
              <div
                className="card-pop rounded-3xl bg-cream-2 px-6 py-8 text-center"
              >
                <p className="text-4xl font-black text-mango sm:text-6xl">
                  <Counter to={STAT_NUMBERS[i].to} suffix={STAT_NUMBERS[i].suffix} />
                </p>
                <p className="mt-2 font-mono text-[10px] font-bold tracking-[0.2em] text-ink/50 uppercase">
                  {label}
                </p>
              </div>
            </FadeUp>
          ))}
        </div>

        {/* tracks */}
        <div className="mt-28 grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
          <div>
            <SectionLabel index="02" text={t.bootcamp.trackLabel} />
            <div className="mt-8">
              <SplitLines
                as="h2"
                className="display-tight text-4xl font-black sm:text-6xl"
                lines={[
                  <span key="a">{t.bootcamp.h1}</span>,
                  <span key="b" className="relative inline-block">
                    {t.bootcamp.h2}
                    <Scribble />
                  </span>,
                ]}
              />
            </div>
            <FadeUp delay={0.2}>
              <p className="mt-6 max-w-md text-lg font-semibold leading-relaxed text-ink/60">
                {t.bootcamp.sub}
              </p>
            </FadeUp>
          </div>

          <div className="flex flex-col justify-center">
            {t.bootcamp.tracks.map((track, i) => (
              <motion.div
                key={i}
                className="group cursor-default border-b border-line py-7 first:border-t"
                initial={{ opacity: 0, x: 48 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.8, ease: EASE, delay: i * 0.08 }}
              >
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-2xl font-black tracking-tight transition-colors duration-300 group-hover:text-mango sm:text-3xl">
                    {track.name}
                  </h3>
                  <span className="font-mono text-sm font-bold text-ink/40 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-x-2 group-hover:text-mango">
                    →
                  </span>
                </div>
                <p className="mt-2 max-w-md text-base font-semibold leading-relaxed text-ink/55">
                  {track.detail}
                </p>
              </motion.div>
            ))}

            <FadeUp delay={0.3} className="mt-10">
              <Magnetic>
                <a
                  href="#join"
                  className="btn-pop inline-block rounded-full bg-ink px-9 py-4 text-lg font-black text-cream-2"
                >
                  {t.bootcamp.button}
                </a>
              </Magnetic>
            </FadeUp>
          </div>
        </div>
      </div>
    </>
  );
}
