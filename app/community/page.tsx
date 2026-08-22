import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import ClubsGrid from "../components/ClubsGrid";
import CTA from "../components/CTA";

export const metadata: Metadata = {
  title: "Community",
  description:
    "Beed's clubs — running, books, startups, creators, cycling, code. Find your people or start your own club.",
  alternates: { canonical: "/community" },
};

export default function CommunityPage() {
  return (
    <main>
      <PageHero pageKey="community" />
      <ClubsGrid />
      <CTA />
    </main>
  );
}
