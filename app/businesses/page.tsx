import type { Metadata } from "next";
import PageHero from "../components/PageHero";
import BusinessGrid from "../components/BusinessGrid";
import GetOnline from "../components/GetOnline";
import CTA from "../components/CTA";

export const metadata: Metadata = {
  title: "Businesses",
  description:
    "Beed's shops, cafes, gyms and services — online. See who's on BEEDOUT and put your own business on the map.",
  alternates: { canonical: "/businesses" },
};

export default function BusinessesPage() {
  return (
    <main>
      <PageHero pageKey="businesses" />
      <BusinessGrid />
      <GetOnline />
      <CTA />
    </main>
  );
}
