import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { JsonLd, breadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  alternates: { canonical: "/transparency" },
  title: "Transparency — What We Claim and What We Haven't Done",
  description:
    "Atmosyn's transparency record: how numbers are sourced, what is deliberately absent from this site, and how tracking and form data are handled.",
};

const commitments: { id: string; title: string; body: string }[] = [
  {
    id: "claims",
    title: "Every claim has a source",
    body: "Leadership names, roles, pillar structure, and all dates on this site trace back to the organization charter document or the live site itself. If we cannot point to a source, we do not publish the claim.",
  },
  {
    id: "absent",
    title: "What is deliberately absent",
    body: "No customer counts, partner logos, testimonials, funding figures, response-time SLAs, or performance metrics appear on this site — because none exist to publish yet. Each initiative carries a stage label (Exploration, Research Design, or Active Planning) instead of implied results.",
  },
  {
    id: "numbers",
    title: "How the numbers are derived",
    body: "The figures on our About page (11 leadership roles, 3 objective pillars, charter dates) are read directly from the charter file's document metadata: authored 18 January 2026, last revised 17 October 2026.",
  },
  {
    id: "news",
    title: "The news feed stays empty until it isn't",
    body: "Our news array publishes nothing until something real has happened. An honest empty state is preferred over placeholder announcements — see the live feed for proof.",
  },
  {
    id: "tracking",
    title: "Tracking on this site",
    body: "This site sets no cookies and runs no advertising or social-media trackers. If privacy-friendly analytics are enabled later, they will be cookie-free and disclosed here at that time.",
  },
  {
    id: "formdata",
    title: "What happens to form submissions",
    body: "Inquiry contents are validated server-side, forwarded over a single webhook to the team's internal channel, and never stored in third-party form services, analytics, or logs. Error logs record delivery status only — never message contents or contact details.",
  },
];

export default function TransparencyPage() {
  return (
    <div className="pt-36 pb-32 bg-[#fdfbf7]">
      <JsonLd data={breadcrumbSchema("Transparency", "/transparency")} />
      <section className="pb-16 border-b border-[#1e2622]/10 mb-16">
        <Container size="wide">
          <div className="max-w-4xl space-y-4">
            <div className="utility-label text-[#4d7526]">Accountability Record</div>
            <h1 className="text-6xl sm:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-ink-gradient">
              PROOF <span className="font-accent lowercase text-[#6f9c39] text-[1.02em]">over claims.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-[#1e2622]/80 max-w-2xl font-normal leading-relaxed pt-2">
              Scientific honesty is the brand. This page documents exactly how
              this site handles claims, numbers, and your data — including what
              we have not done yet.
            </p>
          </div>
        </Container>
      </section>

      <section className="pb-16">
        <Container size="wide">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {commitments.map((item, index) => (
              <article
                key={item.id}
                className="p-8 sm:p-10 rounded-[20px] bg-[#f4f0e6] border border-[#1e2622]/10 space-y-4"
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl font-black italic tracking-tighter text-[#4d7526] font-mono leading-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span
                    aria-hidden="true"
                    className="w-[7px] h-[7px] bg-[#86b847] rotate-45 shrink-0"
                  />
                </div>
                <h2 className="text-xl font-black uppercase tracking-tight text-ink-gradient leading-tight">
                  {item.title}
                </h2>
                <p className="text-sm text-[#1e2622]/70 leading-relaxed font-normal">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Corrections + record */}
      <section className="py-16 border-t border-[#1e2622]/10">
        <Container size="wide">
          <div className="max-w-3xl space-y-6 text-center mx-auto">
            <div className="utility-label text-[#4d7526]">Corrections</div>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-ink-gradient">
              Spot something wrong?
            </h2>
            <p className="text-sm text-[#1e2622]/70 leading-relaxed font-normal max-w-xl mx-auto">
              If any statement on this site is inaccurate, out of date, or
              unverifiable, tell us through the inquiry form and we will correct
              it or remove it. The dated progress record on our About page shows
              every documented change to the organization.
            </p>
            <div className="flex flex-wrap justify-center gap-4 pt-2">
              <Link
                href="/collaboration?intent=correction#inquiry"
                className="px-8 py-3.5 rounded-full bg-[#86b847] hover:bg-[#75a33b] text-[#1e2622] font-extrabold text-[10px] tracking-[0.2em] uppercase transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4d7526] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fdfbf7]"
              >
                Report a correction
              </Link>
              <Link
                href="/about#milestones"
                className="px-8 py-3.5 rounded-full border border-[#1e2622]/20 hover:bg-[#1e2622]/5 text-[#1e2622] font-extrabold text-[10px] tracking-[0.2em] uppercase transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4d7526] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fdfbf7]"
              >
                View progress record
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
