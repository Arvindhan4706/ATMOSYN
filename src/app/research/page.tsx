import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { researchThemes } from "@/data/researchThemes";
import { JsonLd, breadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  alternates: { canonical: "/research" },
  title: "Research & Innovation — Climate Framework",
  description:
    "Explore Atmosyn's research agenda, technological frameworks, and open scientific inquiry protocols for climate solutions.",
};

const externalResources = [
  {
    title: "Open Climate Data Portals",
    items: [
      { name: "NOAA Climate Data Online", url: "https://www.ncei.noaa.gov/cdo-web/", desc: "Historical weather and climate data" },
      { name: "NASA Earth Data", url: "https://earthdata.nasa.gov/", desc: "Satellite observations and climate models" },
      { name: "Copernicus Climate Data Store", url: "https://cds.climate.copernicus.eu/", desc: "European climate reanalysis data" },
      { name: "IPCC Data Distribution Centre", url: "https://www.ipcc-data.org/", desc: "Climate projection datasets" },
    ],
  },
  {
    title: "Open Source Hardware & Firmware",
    items: [
      { name: "OpenTrons OT-2 Protocols", url: "https://github.com/Opentrons/opentrons", desc: "Lab automation protocols" },
      { name: "Sensor.Community", url: "https://sensor.community/", desc: "Citizen science air quality sensors" },
      { name: "Open Energy Monitor", url: "https://openenergymonitor.org/", desc: "Energy monitoring hardware" },
    ],
  },
  {
    title: "Scientific Computing Libraries",
    items: [
      { name: "xarray", url: "https://xarray.pydata.org/", desc: "N-dimensional labeled arrays for climate data" },
      { name: "climada", url: "https://climada.github.io/", desc: "Climate impact and risk assessment" },
      { name: "metpy", url: "https://unidata.github.io/MetPy/latest/", desc: "Meteorological calculations in Python" },
    ],
  },
];

export default function ResearchPage() {
  const taxonomy = [
    {
      level: "01",
      name: "Hypothesis & Problem Framing",
      description: "Isolating theoretical questions with measurable physical variables.",
    },
    {
      level: "02",
      name: "Literature & Methodology Review",
      description: "Synthesizing prior academic work to eliminate duplicate effort.",
    },
    {
      level: "03",
      name: "Experimental Protocol Formulation",
      description: "Designing reproducible hardware, software, and testing benchmarks.",
    },
    {
      level: "04",
      name: "Empirical Testing & Calibration",
      description: "Field data logging with sensor drift monitoring and controls.",
    },
    {
      level: "05",
      name: "Peer Review & Open Publication",
      description: "Public dissemination of raw datasets, limitations, and findings.",
    },
  ];

  return (
    <div className="pt-36 pb-32 bg-[#fdfbf7]">
      <JsonLd data={breadcrumbSchema("Research & Innovation", "/research")} />
      {/* Header */}
      <section className="pb-16 border-b border-[#1e2622]/10 mb-16">
        <Container size="wide">
          <div className="max-w-4xl space-y-4">
            <div className="utility-label text-[#4d7526]">
              Pillar 3 · Research & Innovation
            </div>
            <h1 className="text-6xl sm:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-ink-gradient">
              OPEN <span className="font-accent lowercase text-atmosyn-name text-[1.02em]">research.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-[#1e2622]/80 max-w-2xl font-normal leading-relaxed pt-2">
              We apply rigorous computational modeling, telemetry architectures, and open protocols to
              explore scalable answers to urgent ecological challenges.
            </p>
          </div>
        </Container>
      </section>

      {/* Lifecycle Taxonomy */}
      <section className="py-20 border-b border-[#1e2622]/10 bg-[#f4f0e6]">
        <Container size="wide">
          <div className="max-w-3xl mb-16">
            <div className="utility-label text-[#4d7526] mb-3">
              Methodological Standards
            </div>
            <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-[0.85] text-ink-gradient">
              LIFECYCLE.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {taxonomy.map((stage) => (
              <div
                key={stage.level}
                className="p-8 rounded-[16px] bg-[#fdfbf7] border border-[#1e2622]/10 space-y-3"
              >
                <span className="text-3xl font-black italic tracking-tighter text-[#4d7526] block font-mono">
                  {stage.level}
                </span>
                <h3 className="text-sm font-black uppercase tracking-wider text-[#1e2622] leading-snug">
                  {stage.name}
                </h3>
                <p className="text-xs text-[#1e2622]/80 leading-relaxed font-normal">
                  {stage.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Active Research Themes */}
      <section className="py-28 border-b border-[#1e2622]/10">
        <Container size="wide">
          <div className="max-w-3xl mb-16">
            <div className="utility-label text-[#4d7526] mb-3">
              Active Focus
            </div>
            <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-[0.85] text-ink-gradient">
              THEMES.
            </h2>
          </div>

          <div className="space-y-8">
            {researchThemes.map((theme) => (
              <div
                key={theme.id}
                className="p-10 rounded-[20px] bg-[#f4f0e6] border border-[#1e2622]/10 space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#1e2622]/10">
                  <div>
                    <span className="utility-label text-[#4d7526]">
                      {theme.category}
                    </span>
                    <h3 className="text-3xl font-black uppercase tracking-tight text-[#1e2622] mt-1">
                      {theme.title}
                    </h3>
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider text-[#1e2622]/70">
                    Status: {theme.status}
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <h4 className="text-xs font-black uppercase tracking-widest text-[#1e2622]">
                      Scope & Abstract
                    </h4>
                    <p className="text-sm text-[#1e2622]/80 leading-relaxed font-normal">
                      {theme.abstract}
                    </p>
                  </div>

                  <div className="space-y-2">
                    <h4 className="text-xs font-black uppercase tracking-widest text-[#1e2622]">
                      Key Questions
                    </h4>
                    <ul className="space-y-2 text-sm text-[#1e2622]/80 font-medium">
                      {theme.keyQuestions.map((q, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <span className="text-[#4d7526] font-black">―</span>
                          <span className="leading-relaxed">{q}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#1e2622]/10 flex items-center justify-between text-xs text-[#1e2622]/70">
                  <span>{theme.scientificIntegrityNote}</span>
                  <Link
                    href="/collaboration#inquiry"
                    className="text-[10px] font-black uppercase tracking-[0.2em] text-[#4d7526] hover:text-[#1e2622] border-b border-[#86b847] pb-0.5 transition-colors"
                  >
                    Inquire to contribute &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* External Resources */}
      <section className="py-28 border-b border-[#1e2622]/10 bg-[#f4f0e6]">
        <Container size="wide">
          <div className="max-w-3xl mb-16">
            <div className="utility-label text-[#4d7526] mb-3">
              Curated Resources
            </div>
            <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-[0.85] text-ink-gradient">
              OPEN TOOLS.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {externalResources.map((category) => (
              <div key={category.title} className="space-y-6">
                <h3 className="text-xs font-black uppercase tracking-widest text-[#4d7526] border-b border-[#1e2622]/10 pb-3">
                  {category.title}
                </h3>
                <ul className="space-y-4">
                  {category.items.map((item) => (
                    <li key={item.name} className="p-4 rounded-[12px] bg-[#fdfbf7] border border-[#1e2622]/10 space-y-1">
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-bold text-[#1e2622] hover:text-[#4d7526] transition-colors"
                        aria-label={`Visit ${item.name}`}
                      >
                        {item.name} &rarr;
                      </a>
                      <p className="text-xs text-[#1e2622]/70 font-normal">
                        {item.desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Publications / Data Notice */}
      <section className="py-24 bg-[#f4f0e6]">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-3xl font-black uppercase tracking-tight text-[#1e2622]">
                Publications & Repositories
              </h2>
              <p className="text-base text-[#1e2622]/80 leading-relaxed font-normal">
                Atmosyn has not yet released formal peer-reviewed publications or datasets. As experimental
                protocols yield verified, reproducible results, open-access technical reports and git
                repositories will be published openly.
              </p>
              <p className="text-xs text-[#1e2622]/70">
                We adhere strictly to our policy against premature publication or unverified claims.
              </p>
            </div>
            <div className="lg:col-span-5 p-8 rounded-[16px] bg-[#fdfbf7] border border-[#1e2622]/10 space-y-4">
              <span className="utility-label text-[#4d7526]">Open Source Architecture</span>
              <h3 className="text-xl font-black uppercase tracking-tight text-[#1e2622]">
                GitHub Organization
              </h3>
              <p className="text-xs text-[#1e2622]/80 leading-relaxed">
                Source code, telemetry schemas, and hardware firmware blueprints are shared openly on our official GitHub organization as they pass internal validation.
              </p>
              <a
                href="https://github.com/atmosyn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest text-[#4d7526] hover:text-[#1e2622] transition-colors pt-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4d7526] rounded"
              >
                <span>Visit github.com/atmosyn</span>
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
