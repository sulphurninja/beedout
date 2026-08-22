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
  title: {
    default: "BEEDOUT — All of Beed. One app.",
    template: "%s — BEEDOUT",
  },
  description:
    "BEEDOUT is the community, business and network layer of Beed, Maharashtra. Clubs, businesses, creators and the next generation — connected. Starting from Beed. Going global.",
  applicationName: "BEEDOUT",
  category: "community",
  keywords: [
    "Beed",
    "Beed Maharashtra",
    "BeedOut",
    "Beed community app",
    "Beed businesses",
    "Beed clubs",
    "AI bootcamp Beed",
    "digital marketing Beed",
    "बीड",
  ],
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "BEEDOUT — All of Beed. One app.",
    description:
      "The community, business and network layer of Beed. Clubs, businesses, creators and the next generation — connected.",
    url: "https://beedout.com",
    siteName: "BEEDOUT",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "BEEDOUT — All of Beed. One app.",
    description:
      "The community, business and network layer of Beed. Clubs, businesses, creators and the next generation — connected.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://beedout.com/#org",
      name: "BEEDOUT",
      url: "https://beedout.com",
      logo: "https://beedout.com/icon.svg",
      description:
        "The community, business and network layer of Beed, Maharashtra.",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Beed",
        addressRegion: "Maharashtra",
        addressCountry: "IN",
      },
    },
    {
      "@type": "WebSite",
      "@id": "https://beedout.com/#website",
      name: "BEEDOUT",
      url: "https://beedout.com",
      publisher: { "@id": "https://beedout.com/#org" },
      inLanguage: ["en", "mr"],
    },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${instrument.variable} ${spaceMono.variable} ${tiro.variable} antialiased`}
    >
      <body className="grain min-h-screen bg-cream text-ink">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
