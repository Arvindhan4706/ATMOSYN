import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { CollaborationForm } from "@/components/collaboration/CollaborationForm";
import { teamMembers } from "@/data/team";
import { faqs } from "@/data/faq";
import { JsonLd, breadcrumbSchema } from "@/components/seo/JsonLd";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export const metadata: Metadata = {
  title: "People & Collaboration — Leadership & Student Mentorship",
  description:
    "Discover Atmosyn's core leadership team, student mentorship opportunities, and collaborative research initiatives.",
};

export default function CollaborationPage() {
  const leadership = teamMembers.filter((m) => m.category === "Leadership");
  const techAndResearch = teamMembers.filter((m) => m.category === "Technology & Research");
  const operations = teamMembers.filter((m) => m.category === "Operations & Strategy");

  return (
    <div className="pt-36 pb-32 bg-[#fdfbf7]">
      <JsonLd data={breadcrumbSchema("People & Collaboration", "/collaboration")} />
      <JsonLd data={faqSchema} />
      {/* Header */}
      <section className="pb-16 border-b border-[#1e2622]/10 mb-16">
        <Container size="wide">
          <div className="max-w-4xl space-y-4">
            <div className="utility-label text-[#86b847]">
              Pillar 2 · Collaborative Growth
            </div>
            <h1 className="text-6xl sm:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-[#1e2622]">
              PEOPLE.
            </h1>
            <p className="text-xl sm:text-2xl text-[#1e2622]/80 max-w-2xl font-normal leading-relaxed pt-2">
              We cultivate a culture of continuous learning, cross-disciplinary mentorship,
              and tangible opportunities for students and professionals to build real-world environmental solutions.
            </p>
          </div>
        </Container>
      </section>

      {/* Student & Learning Section */}
      <section id="students" className="py-20 border-b border-[#1e2622]/10 bg-[#f4f0e6]">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="utility-label text-[#86b847]">
                Student Learning
              </div>
              <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-[#1e2622] leading-tight">
                Practical Engineering Through Real Challenges
              </h2>
              <p className="text-base text-[#1e2622]/80 leading-relaxed font-normal">
                Rather than working on simulated classroom exercises, students engaging with Atmosyn explore
                open-source environmental data, calibrate telemetry prototypes, and participate in multidisciplinary
                design reviews alongside experienced functional leads.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                <div className="p-6 rounded-[16px] bg-[#fdfbf7] border border-[#1e2622]/10 space-y-2">
                  <h3 className="text-base font-black uppercase tracking-tight text-[#1e2622]">
                    Multidisciplinary Sprints
                  </h3>
                  <p className="text-xs text-[#1e2622]/80 font-normal">Software, hardware telemetry, data modeling, and environmental policy.</p>
                </div>
                <div className="p-6 rounded-[16px] bg-[#fdfbf7] border border-[#1e2622]/10 space-y-2">
                  <h3 className="text-base font-black uppercase tracking-tight text-[#1e2622]">
                    Direct Mentorship
                  </h3>
                  <p className="text-xs text-[#1e2622]/80 font-normal">Structured pairing with functional and technical leadership.</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 p-10 rounded-[20px] bg-[#fdfbf7] border border-[#1e2622]/10 space-y-4 shadow-sm">
              <span className="utility-label text-[#86b847]">
                Collaborative Culture
              </span>
              <h3 className="text-2xl font-black uppercase tracking-tight text-[#1e2622]">
                Shared Responsibility & Transparency
              </h3>
              <p className="text-sm text-[#1e2622]/80 leading-relaxed font-normal">
                We believe that environmental solutions require multidisciplinary collaboration. Every team
                member and student contributor shares responsibility for the scientific integrity and transparency of
                our work.
              </p>
              <p className="text-xs text-[#1e2622]/50 pt-3 border-t border-[#1e2622]/10 font-bold uppercase tracking-wider">
                &ldquo;Creating opportunities for students to gain practical experience.&rdquo; — Atmosyn Charter
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Leadership Directory */}
      <section id="team" className="py-28 border-b border-[#1e2622]/10">
        <Container size="wide">
          <div className="max-w-3xl mb-16">
            <div className="utility-label text-[#86b847] mb-3">
              Organization
            </div>
            <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-[0.85] text-[#1e2622]">
              LEADERSHIP.
            </h2>
            <p className="text-base text-[#1e2622]/80 pt-2 font-normal">
              The core team documented in Atmosyn&apos;s approved organizational charter.
            </p>
          </div>

          <div className="space-y-16">
            {/* Executive Leadership */}
            <div className="space-y-6">
              <div className="utility-label text-[#1e2622]/50 border-b border-[#1e2622]/10 pb-2">
                Executive Leadership
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {leadership.map((member) => (
                  <div key={member.id} className="p-8 rounded-[16px] bg-[#f4f0e6] border border-[#1e2622]/10 space-y-2">
                    <h4 className="text-xl font-black uppercase tracking-tight text-[#1e2622]">{member.name}</h4>
                    <p className="text-xs text-[#86b847] font-black uppercase tracking-wider leading-relaxed">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Technology & Research */}
            <div className="space-y-6">
              <div className="utility-label text-[#1e2622]/50 border-b border-[#1e2622]/10 pb-2">
                Technology, Research & Platforms
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {techAndResearch.map((member) => (
                  <div key={member.id} className="p-8 rounded-[16px] bg-[#f4f0e6] border border-[#1e2622]/10 space-y-2">
                    <h4 className="text-xl font-black uppercase tracking-tight text-[#1e2622]">{member.name}</h4>
                    <p className="text-xs text-[#86b847] font-black uppercase tracking-wider leading-relaxed">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Operations & Strategy */}
            <div className="space-y-6">
              <div className="utility-label text-[#1e2622]/50 border-b border-[#1e2622]/10 pb-2">
                Operations, Strategy & Creative
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {operations.map((member) => (
                  <div key={member.id} className="p-8 rounded-[16px] bg-[#f4f0e6] border border-[#1e2622]/10 space-y-2">
                    <h4 className="text-xl font-black uppercase tracking-tight text-[#1e2622]">{member.name}</h4>
                    <p className="text-xs text-[#86b847] font-black uppercase tracking-wider leading-relaxed">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Careers / Join */}
      <section id="careers" className="py-28 bg-[#f4f0e6] border-b border-[#1e2622]/10">
        <Container size="wide">
          <div className="max-w-3xl mb-16">
            <div className="utility-label text-[#86b847] mb-3">
              Careers &amp; General Applications
            </div>
            <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-[0.85] text-[#1e2622]">
              JOIN US.
            </h2>
            <p className="text-base text-[#1e2622]/80 pt-4 font-normal">
              Atmosyn is in its early exploration phase, and we describe our hiring
              situation the same way we describe everything else.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-8 rounded-[16px] bg-[#fdfbf7] border border-[#1e2622]/10 space-y-3">
              <span className="utility-label text-[#86b847]">Students</span>
              <h3 className="text-xl font-black uppercase tracking-tight text-[#1e2622]">
                Mentorship Track
              </h3>
              <p className="text-sm text-[#1e2622]/80 leading-relaxed font-normal">
                Our student climate mentorship protocol is in internal review. Pilot
                cohort scheduling will be announced on this site and in our news feed
                once confirmed — we will not list roles that do not exist yet.
              </p>
            </div>
            <div className="p-8 rounded-[16px] bg-[#fdfbf7] border border-[#1e2622]/10 space-y-3">
              <span className="utility-label text-[#86b847]">Early-Career</span>
              <h3 className="text-xl font-black uppercase tracking-tight text-[#1e2622]">
                General Applications
              </h3>
              <p className="text-sm text-[#1e2622]/80 leading-relaxed font-normal">
                There are no open paid positions at this time. As projects and funding
                solidify, open roles will be published here first, with real
                requirements and honest compensation details. General applications are
                always welcome.
              </p>
            </div>
            <div className="p-8 rounded-[16px] bg-[#fdfbf7] border border-[#1e2622]/10 space-y-3">
              <span className="utility-label text-[#86b847]">Experienced</span>
              <h3 className="text-xl font-black uppercase tracking-tight text-[#1e2622]">
                Practitioner Network
              </h3>
              <p className="text-sm text-[#1e2622]/80 leading-relaxed font-normal">
                If you would like to contribute expertise as a reviewer, mentor, or
                collaborator before formal roles exist, send a general inquiry. We are
                building this network deliberately, not as a mailing list.
              </p>
            </div>
          </div>

          <div className="pt-10">
            <Link
              href="/collaboration#inquiry"
              className="inline-block px-8 py-3.5 rounded-full bg-[#86b847] hover:bg-[#75a33b] text-[#1e2622] font-extrabold text-[10px] tracking-[0.2em] uppercase transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#86b847] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4f0e6]"
            >
              Send a General Application
            </Link>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-28 border-b border-[#1e2622]/10">
        <Container size="narrow">
          <div className="mb-16">
            <div className="utility-label text-[#86b847] mb-3">
              Common Questions
            </div>
            <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-[0.85] text-[#1e2622]">
              FAQ.
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((item) => (
              <details
                key={item.question}
                className="group p-6 rounded-[16px] bg-[#f4f0e6] border border-[#1e2622]/10 open:border-[#86b847] transition-colors"
              >
                <summary className="flex items-start justify-between gap-6 cursor-pointer list-none marker:content-none focus:outline-none focus-visible:ring-2 focus-visible:ring-[#86b847] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fdfbf7] rounded">
                  <h3 className="text-base sm:text-lg font-black uppercase tracking-tight text-[#1e2622]">
                    {item.question}
                  </h3>
                  <span
                    aria-hidden="true"
                    className="shrink-0 text-[#86b847] font-black text-xl leading-none transition-transform duration-200 group-open:rotate-45"
                  >
                    +
                  </span>
                </summary>
                <p className="text-sm text-[#1e2622]/80 leading-relaxed font-normal pt-4 mt-4 border-t border-[#1e2622]/10">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </Container>
      </section>

      {/* Collaboration Form Section */}
      <section id="inquiry" className="py-28 bg-[#f4f0e6]">
        <Container size="narrow">
          <CollaborationForm />
        </Container>
      </section>
    </div>
  );
}
