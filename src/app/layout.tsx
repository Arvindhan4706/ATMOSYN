import type { Metadata, Viewport } from "next";
import { League_Spartan, Instrument_Serif } from "next/font/google";
import "@/styles/globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { siteConfig } from "@/data/siteConfig";

const leagueSpartan = League_Spartan({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-league-spartan",
  display: "swap",
});

// Editorial italic serif used for accent words in headlines — the
// contrast against League Spartan's geometric sans is the site's
// signature type detail.
const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: "400",
  variable: "--font-instrument-serif",
  display: "swap",
});

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  description: siteConfig.description,
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
  description: siteConfig.description,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} — Climate Action, People & Research`,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Atmosyn",
    "Climate Action",
    "Sustainability",
    "Environmental Research",
    "Climate Technology",
    "Collaborative Growth",
  ],
  authors: [{ name: "Atmosyn Core Team" }],
  creator: "Atmosyn",
  publisher: "Atmosyn",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} — Climate Action & Environmental Research`,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  alternates: {
    types: {
      "application/rss+xml": [
        { url: "/rss.xml", title: `${siteConfig.name} News` },
      ],
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#fdfbf7",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* Marks the document as JS-enabled so scroll-reveal sections can start
            hidden. Without JS this never runs and all content stays visible. */}
        <script
          dangerouslySetInnerHTML={{
            __html: "document.documentElement.classList.add('js')",
          }}
        />
      </head>
      <body className={`${leagueSpartan.variable} ${instrumentSerif.variable} bg-[#fdfbf7] text-[#1e2622] font-sans antialiased selection:bg-[#86b847] selection:text-[#1e2622]`}>
        <Navbar />
        <main id="main-content" className="min-h-screen pt-[80px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
