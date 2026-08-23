"use client";

import { AnimatePresence, animate, motion } from "motion/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { EASE } from "./Reveal";

const LETTERS = "BEEDOUT".split("");
const DURATION = 1.7;

export default function Preloader() {
  const [done, setDone] = useState(false);
  const [pct, setPct] = useState(0);

  useEffect(() => {
    document.documentElement.style.overflow = "hidden";
    const controls = animate(0, 100, {
      duration: DURATION,
      ease: [0.65, 0, 0.35, 1],
      onUpdate: (v) => setPct(Math.round(v)),
    });
    const doneTimer = setTimeout(() => {
      setDone(true);
      document.documentElement.style.overflow = "";
    }, DURATION * 1000 + 350);
    return () => {
      controls.stop();
      clearTimeout(doneTimer);
      document.documentElement.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[400] flex flex-col items-center justify-center bg-cream"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <div className="flex w-[min(440px,82vw)] flex-col gap-9">
            {/* mark + wordmark reveal */}
            <div className="flex items-center gap-4">
              <motion.div
                initial={{ scale: 0, rotate: -14 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{
                  delay: 0.1,
                  type: "spring",
                  stiffness: 260,
                  damping: 18,
                }}
              >
                <Image
                  src="/brand/beedout-mark.png"
                  alt=""
                  width={63}
                  height={45}
                  priority
                  className="h-11 w-auto"
                />
              </motion.div>

              <div className="flex overflow-hidden pb-1 text-4xl font-black tracking-tight text-ink sm:text-5xl">
                {LETTERS.map((ch, i) => (
                  <motion.span
                    key={i}
                    className="inline-block will-change-transform"
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    transition={{
                      delay: 0.25 + i * 0.045,
                      duration: 0.7,
                      ease: EASE,
                    }}
                  >
                    {ch}
                  </motion.span>
                ))}
                <motion.span
                  className="inline-block text-mango"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                >
                  .
                </motion.span>
              </div>
            </div>

            {/* progress */}
            <div className="flex items-center gap-5">
              <div className="h-0.5 flex-1 overflow-hidden rounded-full bg-ink/10">
                <motion.div
                  className="h-full origin-left bg-mango"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: DURATION, ease: [0.65, 0, 0.35, 1] }}
                />
              </div>
              <span className="w-10 text-right font-mono text-xs tabular-nums text-ink/50">
                {pct}%
              </span>
            </div>
          </div>

          <p className="absolute bottom-10 font-mono text-[10px] tracking-[0.4em] text-ink/35 uppercase">
            Beed, Maharashtra — 18.99° N / 75.76° E
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
