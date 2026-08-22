import Preloader from "./components/Preloader";
import Hero from "./components/Hero";
import Manifesto from "./components/Manifesto";
import Pillars from "./components/Pillars";
import PhonePreview from "./components/PhonePreview";
import BusinessStrip from "./components/BusinessStrip";
import FounderTeaser from "./components/FounderTeaser";
import FAQ from "./components/FAQ";
import CTA from "./components/CTA";

export default function Home() {
  return (
    <main>
      <Preloader />
      <Hero />
      <Manifesto />
      <Pillars />
      <PhonePreview />
      <BusinessStrip />
      <FounderTeaser />
      <FAQ />
      <CTA />
    </main>
  );
}
