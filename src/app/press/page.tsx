import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { JsonLd, breadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  alternates: { canonical: "/press" },
  title: "Press & Media — Brand Assets & Boilerplate",
  description:
    "Official Atmosyn boilerplate, verifiable organization facts, and downloadable logo assets for media and partners.",
};

const boilerplateLong =
  "Atmosyn is an early-stage climate research collective that brings students and experienced leads together on open environmental questions. Its work is organized around three pillars — climate action, collaborative growth, and research & innovation — defined in an organization charter first authored on 18 January 2026. Atmosyn publishes every initiative at its honest stage and states plainly what has not yet been achieved.";

const boilerplateShort =
  "Atmosyn is an early-stage climate research collective connecting students with experienced leads on open environmental questions — with every claim published at its honest stage.";

const facts: { label: string; value: string }[] = [
  { label: "Organization charter first authored", value: "18 January 2026" },
  { label: "Charter last revised", value: "17 October 2026" },
  { label: "Leadership roles defined in charter", value: "11" },
  { label: "Objective pillars", value: "3 (Climate Action, Collaborative Growth, Research & Innovation)" },
  { label: "Current stage", value: "Early exploration and planning — no deployed field hardware or published datasets" },
  { label: "Founder & CEO", value: "Jesi Anumitha Solomon" },
];

export default function PressPage() {
  return (
    <div className="pt-36 pb-32 bg-[#fdfbf7]">
      <JsonLd data={breadcrumbSchema("Press & Media", "/press")} />
      <section className="pb-16 border-b border-[#1e2622]/10 mb-16">
        <Container size="wide">
          <div className="max-w-4xl space-y-4">
            <div className="utility-label text-[#4d7526]">Media & Partners</div>
            <h1 className="text-6xl sm:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-ink-gradient">
              PRESS <span className="font-accent lowercase text-atmosyn-name text-[1.02em]">kit.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-[#1e2622]/80 max-w-2xl font-normal leading-relaxed pt-2">
              Everything required to reference Atmosyn accurately: official
              boilerplate, verifiable facts, and logo assets.
            </p>
          </div>
        </Container>
      </section>

      {/* Boilerplate */}
      <section className="py-20 border-b border-[#1e2622]/10">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 space-y-3">
              <div className="utility-label text-[#4d7526]">01 · Boilerplate</div>
              <h2 className="text-3xl font-black uppercase tracking-tight text-ink-gradient">
                Describe us accurately
              </h2>
              <p className="text-sm text-[#1e2622]/70 leading-relaxed font-normal">
                Use these verbatim. If a statement about Atmosyn is not in the
                facts table below, it has not been verified.
              </p>
            </div>
            <div className="lg:col-span-8 space-y-6">
              <div className="p-8 rounded-[20px] bg-[#f4f0e6] border border-[#1e2622]/10 space-y-3">
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#4d7526]">
                  Full boilerplate
                </div>
                <p className="text-sm text-[#1e2622]/80 leading-relaxed font-normal">
                  {boilerplateLong}
                </p>
              </div>
              <div className="p-8 rounded-[20px] bg-[#f4f0e6] border border-[#1e2622]/10 space-y-3">
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#4d7526]">
                  One-liner
                </div>
                <p className="text-sm text-[#1e2622]/80 leading-relaxed font-normal">
                  {boilerplateShort}
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Facts */}
      <section className="py-20 border-b border-[#1e2622]/10 bg-[#f4f0e6]">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 space-y-3">
              <div className="utility-label text-[#4d7526]">02 · Facts</div>
              <h2 className="text-3xl font-black uppercase tracking-tight text-ink-gradient">
                Verifiable only
              </h2>
              <p className="text-sm text-[#1e2622]/70 leading-relaxed font-normal">
                Every figure traces back to the organization charter document or
                the live site itself. No estimates, no projections.
              </p>
            </div>
            <div className="lg:col-span-8">
              <dl className="divide-y divide-[#1e2622]/10 border-y border-[#1e2622]/10">
                {facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="grid grid-cols-1 sm:grid-cols-3 gap-2 py-5"
                  >
                    <dt className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1e2622]/70 sm:pt-1">
                      {fact.label}
                    </dt>
                    <dd className="sm:col-span-2 text-sm font-semibold text-[#1e2622]">
                      {fact.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </Container>
      </section>

      {/* Assets + contact */}
      <section className="py-20">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <div className="lg:col-span-4 space-y-3">
              <div className="utility-label text-[#4d7526]">03 · Assets</div>
              <h2 className="text-3xl font-black uppercase tracking-tight text-ink-gradient">
                Logos & contact
              </h2>
            </div>
            <div className="lg:col-span-8 space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                <a
                  href="/logo.png"
                  download
                  className="group p-6 rounded-[20px] bg-[#f4f0e6] border border-[#1e2622]/10 hover:border-[#4d7526] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4d7526] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fdfbf7]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logo.png" alt="Atmosyn full logo" className="w-full h-12 object-contain mb-4" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#4d7526] block">
                    Full Logo · PNG
                  </span>
                </a>
                <a
                  href="/logo.svg"
                  download
                  className="group p-6 rounded-[20px] bg-[#f4f0e6] border border-[#1e2622]/10 hover:border-[#4d7526] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4d7526] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fdfbf7]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logo.svg" alt="Atmosyn vector logo" className="w-full h-12 object-contain mb-4" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#4d7526] block">
                    Vector Logo · SVG
                  </span>
                </a>
                <a
                  href="/logo-mark.png"
                  download
                  className="group p-6 rounded-[20px] bg-[#f4f0e6] border border-[#1e2622]/10 hover:border-[#4d7526] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4d7526] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fdfbf7]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logo-mark.png" alt="Atmosyn logo mark" className="w-12 h-12 mx-auto mb-4" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#4d7526] block text-center">
                    Mark · PNG 512
                  </span>
                </a>
                <a
                  href="/logo-monochrome.svg"
                  download
                  className="group p-6 rounded-[20px] bg-[#f4f0e6] border border-[#1e2622]/10 hover:border-[#4d7526] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4d7526] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fdfbf7]"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/logo-monochrome.svg" alt="Atmosyn monochrome mark" className="w-12 h-12 mx-auto mb-4" />
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#4d7526] block text-center">
                    Monochrome · SVG
                  </span>
                </a>
              </div>

              {/* Brand mini-guide */}
              <div className="p-8 rounded-[20px] bg-[#f4f0e6] border border-[#1e2622]/10 space-y-4">
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#4d7526]">
                  Brand Colors &amp; Typography Guide
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-1">
                  <div className="p-3 bg-[#fdfbf7] rounded-xl border border-[#1e2622]/10">
                    <div className="w-full h-8 rounded bg-[#fdfbf7] border border-[#1e2622]/10 mb-2" />
                    <p className="text-[10px] font-black uppercase tracking-wider text-[#1e2622]">Cream Canvas</p>
                    <p className="text-[9px] font-mono text-[#1e2622]/70">#fdfbf7</p>
                  </div>
                  <div className="p-3 bg-[#fdfbf7] rounded-xl border border-[#1e2622]/10">
                    <div className="w-full h-8 rounded bg-[#86b847] mb-2" />
                    <p className="text-[10px] font-black uppercase tracking-wider text-[#1e2622]">Atmosyn Green</p>
                    <p className="text-[9px] font-mono text-[#1e2622]/70">#86b847</p>
                  </div>
                  <div className="p-3 bg-[#fdfbf7] rounded-xl border border-[#1e2622]/10">
                    <div className="w-full h-8 rounded bg-[#4d7526] mb-2" />
                    <p className="text-[10px] font-black uppercase tracking-wider text-[#1e2622]">Accessible Leaf</p>
                    <p className="text-[9px] font-mono text-[#1e2622]/70">#4d7526</p>
                  </div>
                  <div className="p-3 bg-[#fdfbf7] rounded-xl border border-[#1e2622]/10">
                    <div className="w-full h-8 rounded bg-[#1e2622] mb-2" />
                    <p className="text-[10px] font-black uppercase tracking-wider text-[#1e2622]">Forest Ink</p>
                    <p className="text-[9px] font-mono text-[#1e2622]/70">#1e2622</p>
                  </div>
                </div>
                <p className="text-xs text-[#1e2622]/70 leading-relaxed font-normal pt-2">
                  Typography: League Spartan (primary display and body sans-serif) paired with Instrument Serif italic for signature accent words.
                </p>
              </div>

              <div className="p-8 rounded-[20px] bg-[#f4f0e6] border border-[#1e2622]/10 space-y-4">
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#4d7526]">
                  Media inquiries
                </div>
                <p className="text-sm text-[#1e2622]/80 leading-relaxed font-normal">
                  A dedicated press email channel is being configured. Until
                  then, media inquiries reach the team through the official
                  inquiry form — select &ldquo;General Institutional
                  Inquiry&rdquo; and mention your publication.
                </p>
                <Link
                  href="/collaboration?intent=press#inquiry"
                  className="inline-block px-8 py-3.5 rounded-full bg-[#86b847] hover:bg-[#75a33b] text-[#1e2622] font-extrabold text-[10px] tracking-[0.2em] uppercase transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4d7526] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4f0e6]"
                >
                  Open inquiry form
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
