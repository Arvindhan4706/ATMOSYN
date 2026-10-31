import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/data/siteConfig";
import { JsonLd, breadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  alternates: { canonical: "/contact" },
  title: "Contact — Communications & Inquiries",
  description:
    "Official points of contact for Atmosyn, including the collaboration inquiry portal and channel provisioning status.",
};

export default function ContactPage() {
  return (
    <div className="pt-36 pb-32 bg-[#fdfbf7]">
      <JsonLd data={breadcrumbSchema("Contact", "/contact")} />
      <section className="pb-16 border-b border-[#1e2622]/10 mb-16">
        <Container size="wide">
          <div className="max-w-4xl space-y-4">
            <div className="utility-label text-[#4d7526]">
              Official Inquiries
            </div>
            <h1 className="text-6xl sm:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-ink-gradient">
              CONTACT <span className="font-accent lowercase text-[#6f9c39] text-[1.02em]">us.</span>
            </h1>
            <p className="text-xl sm:text-2xl text-[#1e2622]/80 max-w-2xl font-normal leading-relaxed pt-2">
              We welcome academic proposals, student inquiries, and institutional discussions focused
              on environmental technology and collaborative research.
            </p>
          </div>
        </Container>
      </section>

      <section>
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Primary Route */}
            <div className="p-10 sm:p-14 rounded-[24px] bg-[#f4f0e6] border border-[#1e2622]/10 space-y-6">
              <span className="utility-label text-[#4d7526]">
                Primary Inquiry Route
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#1e2622]">
                Collaboration & Research Proposals
              </h2>
              <p className="text-base text-[#1e2622]/80 leading-relaxed font-normal">
                For research proposals, mentorship questions, or exploratory technical discussions,
                please submit your details through our collaboration inquiry portal.
              </p>
              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  href="/collaboration#inquiry"
                  className="inline-block px-8 py-4 rounded-full bg-[#86b847] hover:bg-[#75a33b] text-[#1e2622] font-extrabold text-[10px] tracking-[0.2em] uppercase transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4d7526] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4f0e6]"
                >
                  Go to Collaboration Form &rarr;
                </Link>
                {siteConfig.bookingUrl ? (
                  <a
                    href={siteConfig.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block px-8 py-4 rounded-full border border-[#1e2622]/20 hover:bg-[#1e2622]/5 text-[#1e2622] font-extrabold text-[10px] tracking-[0.2em] uppercase transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4d7526] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4f0e6]"
                  >
                    Schedule Intro Call (Cal.com) &rarr;
                  </a>
                ) : (
                  <span className="inline-flex items-center text-[10px] font-black uppercase tracking-[0.2em] text-[#1e2622]/70 py-4">
                    Calls scheduled upon proposal review
                  </span>
                )}
              </div>
            </div>

            {/* Administrative Notice */}
            <div className="p-10 sm:p-14 rounded-[24px] bg-[#f4f0e6] border border-[#1e2622]/10 space-y-6">
              <span className="utility-label text-[#1e2622]/70">
                Administrative Channels
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#1e2622]">
                Official Channel Configuration
              </h2>
              <p className="text-base text-[#1e2622]/80 leading-relaxed font-normal">
                {siteConfig.contactConfig.channelNotice}
              </p>
              <div className="pt-4 border-t border-[#1e2622]/10 space-y-2">
                <span className="utility-label text-[#1e2622]/70">
                  Channel Provisioning Checklist:
                </span>
                <ul className="space-y-1.5 text-xs text-[#1e2622]/80 font-bold uppercase tracking-wider">
                  <li>· Official domain email accounts (@atmosyn.org)</li>
                  <li>· Registered physical communications address</li>
                  <li>· Verified institutional publications repository</li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Response Handling — no invented SLAs */}
      <section className="py-28 border-t border-[#1e2622]/10">
        <Container size="narrow">
          <div className="p-8 rounded-[20px] bg-[#f4f0e6] border border-[#1e2622]/10 text-center space-y-6">
            <div className="utility-label text-[#4d7526]">Response Handling</div>
            <h3 className="text-2xl font-black uppercase tracking-tight text-ink-gradient">
              How Inquiries Are Handled
            </h3>
            <p className="text-sm text-[#1e2622]/80 max-w-xl mx-auto leading-relaxed font-normal">
              Every submission goes directly to the functional leads. There is no
              automated ticketing system behind the form yet, so we do not publish
              a fixed response SLA — we would rather leave the timeline open than
              promise one we cannot guarantee.
            </p>
            <p className="text-xs text-[#1e2622]/70">
              All inquiries are reviewed by functional leads. Complex proposals may require additional review time.
            </p>
          </div>
        </Container>
      </section>
    </div>
  );
}
