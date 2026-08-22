import type { Metadata } from "next";
import Founder from "../components/Founder";
import CTA from "../components/CTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Aditya Balasaheb Pingle — CTO @ Zaptick, from Beed, Maharashtra. Building BEEDOUT to bring a tech revolution to his hometown.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main>
      <Founder />
      <CTA />
    </main>
  );
}
