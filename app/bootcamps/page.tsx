import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import BootcampContent from "../components/BootcampContent";
import CTA from "../components/CTA";

export const metadata: Metadata = {
  title: "AI Bootcamps — BEEDOUT",
  description:
    "AI bootcamps and workshops in Beed — online and offline. Learn AI, learn to build, learn to earn.",
};

export default function BootcampsPage() {
  return (
    <main>
      <PageHero pageKey="bootcamps" />
      <BootcampContent />
      <CTA />
    </main>
  );
}
