import type { Metadata } from "next";
import {
  Bricolage_Grotesque,
  Instrument_Serif,
  Space_Mono,
  Tiro_Devanagari_Marathi,
} from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { LanguageProvider } from "./lib/i18n";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
});

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const tiro = Tiro_Devanagari_Marathi({
  variable: "--font-tiro",
  weight: "400",
  subsets: ["devanagari"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://beedout.com"),
  title: "BEEDOUT — The heartbeat of Beed. Built for the world.",
  description:
    "BEEDOUT is the community, business and network layer of Beed, Maharashtra. Clubs, businesses, creators and the next generation — connected. Starting from Beed. Going global.",
  openGraph: {
    title: "BEEDOUT — The heartbeat of Beed. Built for the world.",
    description:
      "The community, business and network layer of Beed. Clubs, businesses, creators and the next generation — connected.",
    url: "https://beedout.com",
    siteName: "BEEDOUT",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${instrument.variable} ${spaceMono.variable} ${tiro.variable} antialiased`}
    >
      <body className="grain min-h-screen bg-cream text-ink">
        <LanguageProvider>
          <SmoothScroll>
            <Nav />
            {children}
            <Footer />
          </SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
