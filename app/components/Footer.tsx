"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { EASE } from "./Reveal";
import { useLang } from "../lib/i18n";

export default function Footer() {
  const { t } = useLang();

  const columns = [
    {
      title: t.footer.platform,
      links: [
        { label: t.nav.businesses, href: "/businesses" },
        { label: t.nav.community, href: "/community" },
        { label: t.nav.bootcamps, href: "/bootcamps" },
        { label: t.nav.about, href: "/about" },
      ],
    },
    {
      title: t.footer.connect,
      links: [
        { label: "Instagram", href: "https://instagram.com" },
        { label: "WhatsApp", href: "https://whatsapp.com" },
        { label: "hello@beedout.com", href: "mailto:hello@beedout.com" },
      ],
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-ink text-cream">
      <div className="mx-auto max-w-[1500px] px-5 pt-20 sm:px-10">
        <div className="flex flex-col justify-between gap-14 pb-20 md:flex-row">
          <div className="max-w-sm">
            <p className="text-xl font-black tracking-tight">
              BEEDOUT<span className="text-mango">.</span>
            </p>
            <p className="mt-4 text-base font-semibold leading-relaxed text-cream/55">
              {t.footer.tagline}
            </p>
            <p className="mt-6 font-mono text-[10px] font-bold tracking-[0.3em] text-cream/40 uppercase">
              18.99° N, 75.76° E · beedout.com
            </p>
          </div>

          <div className="flex gap-16 sm:gap-24">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="font-mono text-[10px] font-bold tracking-[0.3em] text-sun uppercase">
                  {col.title}
                </p>
                <ul className="mt-5 flex flex-col gap-3">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      {l.href.startsWith("/") ? (
                        <Link
                          href={l.href}
                          className="link-line text-base font-bold text-cream/65 transition-colors hover:text-cream"
                        >
                          {l.label}
                        </Link>
                      ) : (
                        <a
                          href={l.href}
                          target={l.href.startsWith("http") ? "_blank" : undefined}
                          rel={l.href.startsWith("http") ? "noopener noreferrer" : undefined}
                          className="link-line text-base font-bold text-cream/65 transition-colors hover:text-cream"
                        >
                          {l.label}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-start justify-between gap-4 border-t border-cream/15 py-6 font-mono text-[10px] font-bold tracking-[0.25em] text-cream/40 uppercase sm:flex-row sm:items-center">
          <span>© 2026 BEEDOUT — All rights reserved</span>
          <span>
            {t.footer.madeIn}{" "}
            <span className="font-marathi text-mango normal-case">बीड</span>
          </span>
        </div>

        {/* giant cropped wordmark */}
        <div className="relative -mb-[3.5vw] select-none overflow-hidden" aria-hidden>
          <motion.p
            className="display-tight whitespace-nowrap text-center text-[18.5vw] font-black leading-[0.78] text-mango"
            initial={{ y: "45%" }}
            whileInView={{ y: "12%" }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, ease: EASE }}
          >
            BEEDOUT
          </motion.p>
        </div>
      </div>
    </footer>
  );
}
