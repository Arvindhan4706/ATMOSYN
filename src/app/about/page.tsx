import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { pillars } from "@/data/pillars";

export const metadata: Metadata = {
  title: "About Atmosyn — Climate Mission & Pillars",
  description:
    "Learn about Atmosyn's mission to connect climate action, continuous multidisciplinary learning, and emerging technology.",
};

export default function AboutPage() {
  const values = [
    {
      title: "Scientific & Data Integrity",
      desc: "We stand firmly against environmental greenwashing and unverified metrics. We communicate our exact stage of development and verify every claim empirically.",
    },
    {
      title: "Shared Responsibility & Mentorship",
      desc: "Meaningful climate solutions emerge when diverse thinkers—engineers, scientists, designers, and students—collaborate under mutual respect and continuous mentorship.",
    },
    {
      title: "Pragmatic, Testable Innovation",
      desc: "Rather than pursuing speculative complexity, we focus on scalable, low-power, testable architectures that address real resource bottlenecks.",
    },
    {
      title: "Practical Student Opportunities",
      desc: "Creating avenues for university and secondary students to acquire hands-on engineering, research, and project delivery experience on real problems.",
    },
  ];

  return (
    <div className="pt-36 pb-32 bg-[#fdfbf7]">
      {/* Hero Section */}
      <section className="pb-16 border-b border-[#1e2622]/10 mb-16">
        <Container size="wide">
          <div className="max-w-4xl space-y-4">
            <div className="utility-label text-[#86b847]">
              About the Organization
            </div>
            <h1 className="text-6xl sm:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-[#1e2622]">
              ATMOSYN.
            </h1>
            <p className="text-xl sm:text-2xl text-[#1e2622]/80 max-w-2xl font-normal leading-relaxed pt-2">
              Atmosyn brings people, research, and emerging technologies together to explore
              practical solutions for environmental and climate challenges.
            </p>
          </div>
        </Container>
      </section>

      {/* Purpose & Mission */}
      <section className="py-20 border-b border-[#1e2622]/10 bg-[#f4f0e6]">
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="utility-label text-[#86b847]">
                Organizational Purpose
              </div>
              <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-[#1e2622] leading-tight">
                Bridging Environmental Science and Emerging Technology
              </h2>
              <p className="text-base text-[#1e2622]/80 leading-relaxed font-normal">
                Many environmental initiatives remain disconnected from modern computational tools, while
                emerging technical talent often lacks structured opportunities to address tangible ecological
                needs. Atmosyn creates the collaborative space where these domains intersect.
              </p>
              <p className="text-base text-[#1e2622]/80 leading-relaxed font-normal">
                We believe that long-term sustainability requires both technical rigor and continuous human
                investment. By involving students in genuine exploratory research alongside experienced
                practitioners, we build lasting capability.
              </p>
            </div>

            <div className="lg:col-span-5 p-10 rounded-[20px] bg-[#fdfbf7] border border-[#1e2622]/10 space-y-4 shadow-sm">
              <span className="utility-label text-[#86b847]">
                Positioning Statement
              </span>
              <p className="text-xl sm:text-2xl font-bold text-[#1e2622] leading-relaxed italic">
                &ldquo;Atmosyn brings people, research, and emerging technologies together to explore practical
                solutions for environmental and climate challenges.&rdquo;
              </p>
              <p className="text-xs text-[#1e2622]/50 pt-3 border-t border-[#1e2622]/10">
                This working positioning statement guides our internal research protocols and external collaborations
                as approved by project development leadership.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* The 3 Pillars Detailed */}
      <section id="pillars" className="py-28 border-b border-[#1e2622]/10">
        <Container size="wide">
          <div className="max-w-3xl mb-16">
            <div className="utility-label text-[#86b847] mb-3">
              Official Pillars
            </div>
            <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-[0.85] text-[#1e2622]">
              THREE PILLARS.
            </h2>
          </div>

          <div className="space-y-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.id}
                id={pillar.id}
                className="p-10 rounded-[20px] bg-[#f4f0e6] border border-[#1e2622]/10 scroll-mt-28 space-y-6"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#1e2622]/10">
                  <div>
                    <span className="utility-label text-[#86b847]">
                      Pillar {pillar.number} · {pillar.subtitle}
                    </span>
                    <h3 className="text-3xl font-black uppercase tracking-tight text-[#1e2622] mt-1">
                      {pillar.title}
                    </h3>
                  </div>
                  <span className="text-xs font-black uppercase tracking-wider text-[#1e2622]/40">
                    Documented Commitment
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <h4 className="text-xs font-black uppercase tracking-widest text-[#1e2622]">
                      Official Documented Objectives
                    </h4>
                    <ul className="space-y-2 text-sm text-[#1e2622]/80 font-medium">
                      {pillar.objectives.map((obj, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="text-[#86b847] font-black">―</span>
                          <span className="leading-relaxed">{obj}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-xs font-black uppercase tracking-widest text-[#1e2622]">
                      Current Exploration Focus
                    </h4>
                    <ul className="space-y-2 text-sm text-[#1e2622]/80 font-medium">
                      {pillar.focusAreas.map((area, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <span className="text-[#1e2622]/40 font-black">―</span>
                          <span className="leading-relaxed">{area}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Core Values */}
      <section className="py-28 bg-[#f4f0e6] border-b border-[#1e2622]/10">
        <Container size="wide">
          <div className="max-w-3xl mb-16">
            <div className="utility-label text-[#86b847] mb-3">
              Governance & Culture
            </div>
            <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-[0.85] text-[#1e2622]">
              CORE VALUES.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((v) => (
              <div
                key={v.title}
                className="p-8 rounded-[16px] bg-[#fdfbf7] border border-[#1e2622]/10 space-y-3"
              >
                <h3 className="text-2xl font-black uppercase tracking-tight text-[#1e2622]">{v.title}</h3>
                <p className="text-sm text-[#1e2622]/80 leading-relaxed font-normal">{v.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Scientific Integrity */}
      <section id="integrity" className="py-24">
        <Container size="wide">
          <div className="max-w-3xl space-y-6">
            <div className="utility-label text-[#86b847]">
              Policy & Disclosure
            </div>
            <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-[#1e2622]">
              Scientific Integrity Standards
            </h2>
            <div className="space-y-4 text-base text-[#1e2622]/80 leading-relaxed font-normal">
              <p>
                Atmosyn does not publish simulated metrics, unmeasured carbon credits, or hypothetical
                commercial claims as verified achievements. When an initiative is in the exploratory phase,
                it is clearly labeled as such.
              </p>
              <p>
                All research findings, telemetry architectures, and data frameworks developed by our team
                are subject to peer critique and empirical validation before any public claims of efficacy
                are made.
              </p>
            </div>
            <div className="pt-4">
              <Link
                href="/collaboration#team"
                className="text-[10px] font-black uppercase tracking-[0.2em] text-[#86b847] hover:text-[#1e2622] border-b border-[#86b847] pb-1 transition-colors"
              >
                View Leadership and Core Team &rarr;
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
