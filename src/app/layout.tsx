import type { Metadata, Viewport } from "next";
import { League_Spartan } from "next/font/google";
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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  url: siteConfig.url,
  logo: `${siteConfig.url}/logo.png`,
  sameAs: [
    "https://github.com/atmosyn",
    "https://twitter.com/atmosyn",
    "https://linkedin.com/company/atmosyn",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+1-XXX-XXX-XXXX",
    contactType: "customer service",
    availableLanguage: "English",
  },
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
      </head>
      <body className={`${leagueSpartan.variable} bg-[#fdfbf7] text-[#1e2622] font-sans antialiased selection:bg-[#86b847] selection:text-[#1e2622]`}>
        <Navbar />
        <main id="main-content" className="min-h-screen pt-[80px]">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
