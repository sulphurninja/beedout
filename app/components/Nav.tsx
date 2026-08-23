"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { useState } from "react";
import { EASE } from "./Reveal";
import { useLang, type Lang } from "../lib/i18n";

const ROUTES = [
  { key: "businesses", href: "/businesses" },
  { key: "community", href: "/community" },
  { key: "bootcamps", href: "/bootcamps" },
  { key: "about", href: "/about" },
] as const;

function LangToggle({ className = "" }: { className?: string }) {
  const { lang, setLang } = useLang();
  return (
    <div
      className={`flex items-center overflow-hidden rounded-full border border-line bg-cream-2 shadow-sm ${className}`}
    >
      {(
        [
          { id: "en", label: "EN" },
          { id: "mr", label: "मराठी" },
        ] as { id: Lang; label: string }[]
      ).map((o) => (
        <button
          key={o.id}
          onClick={() => setLang(o.id)}
          className={`relative px-3 py-1.5 text-xs font-black transition-colors duration-300 ${
            o.id === "mr" ? "font-marathi text-sm leading-none" : ""
          } ${lang === o.id ? "text-cream-2" : "text-ink/60 hover:text-ink"}`}
          aria-pressed={lang === o.id}
        >
          {lang === o.id && (
            <motion.span
              layoutId="lang-pill"
              className="absolute inset-0 bg-ink"
              transition={{ duration: 0.4, ease: EASE }}
            />
          )}
          <span className="relative z-10">{o.label}</span>
        </button>
      ))}
    </div>
  );
}

export default function Nav() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const { t } = useLang();

  useMotionValueEvent(scrollY, "change", (y) => {
    const prev = scrollY.getPrevious() ?? 0;
    setHidden(y > prev && y > 180 && !open);
    setScrolled(y > 40);
  });

  return (
    <>
      <motion.header
        className={`fixed inset-x-0 top-0 z-[200] transition-colors duration-500 ${
          scrolled && !open
            ? "border-b border-line bg-cream/85 backdrop-blur-md"
            : "border-b border-transparent"
        }`}
        animate={{ y: hidden ? "-100%" : "0%" }}
        transition={{ duration: 0.5, ease: EASE }}
      >
        <nav className="mx-auto flex max-w-[1500px] items-center justify-between px-5 py-4 sm:px-10">
          <Link href="/" className="group flex items-center gap-2.5">
            <Image
              src="/brand/beedout-mark.png"
              alt="BeedOut"
              width={45}
              height={32}
              priority
              className="h-8 w-auto transition-transform duration-300 group-hover:-rotate-3"
            />
            <span className="flex items-baseline gap-2">
              <span className="text-xl font-black tracking-tight">
                BEEDOUT
                <span className="text-mango">.</span>
              </span>
              <span className="font-marathi text-sm text-ink/50 transition-colors group-hover:text-mango">
                
              </span>
            </span>
          </Link>

          <ul className="hidden items-center gap-7 md:flex">
            {ROUTES.map((r) => {
              const active = pathname === r.href;
              return (
                <li key={r.href}>
                  <Link
                    href={r.href}
                    className={`link-line text-sm font-bold tracking-tight transition-colors ${
                      active ? "text-mango" : "text-ink/70 hover:text-ink"
                    }`}
                  >
                    {t.nav[r.key]}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3">
            <LangToggle className="hidden sm:flex" />
            <a
              href="#join"
              className="btn-pop hidden rounded-full bg-mango px-6 py-2.5 text-sm font-black text-cream-2 md:block"
            >
              {t.nav.join}
            </a>

            <button
              onClick={() => setOpen(!open)}
              className="btn-pop flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full bg-cream-2 md:hidden"
              aria-label="Toggle menu"
            >
              <motion.span
                className="block h-0.5 w-5 rounded-full bg-ink"
                animate={open ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
              />
              <motion.span
                className="block h-0.5 w-5 rounded-full bg-ink"
                animate={open ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
              />
            </button>
          </div>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[190] flex flex-col bg-cream px-6 pt-24 pb-10 md:hidden"
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.65, ease: EASE }}
          >
            <ul className="flex flex-col gap-2 border-t border-line pt-8">
              {[{ key: "home", href: "/" } as const, ...ROUTES].map((r, i) => (
                <motion.li
                  key={r.href}
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.22 + i * 0.06, duration: 0.6, ease: EASE }}
                >
                  <Link
                    href={r.href}
                    onClick={() => setOpen(false)}
                    className={`flex items-baseline justify-between py-3 text-4xl font-black tracking-tight ${
                      pathname === r.href ? "text-mango" : ""
                    }`}
                  >
                    {t.nav[r.key]}
                    <span className="font-mono text-xs text-mango">
                      0{i + 1}
                    </span>
                  </Link>
                </motion.li>
              ))}
            </ul>

            <motion.div
              className="mt-8 flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.5 }}
            >
              <LangToggle />
            </motion.div>

            <motion.a
              href="#join"
              onClick={() => setOpen(false)}
              className="btn-pop mt-auto flex items-center justify-center rounded-full bg-mango py-4 text-lg font-black text-cream-2"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6, ease: EASE }}
            >
              {t.nav.join}
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
