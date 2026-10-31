"use client";

import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Link from "next/link";
import { Container } from "@/components/ui/Container";

export function CollaborationCTA() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section className={`py-32 bg-[#fdfbf7] ${isVisible ? "reveal-up" : "reveal-init"}`} ref={ref}>
      <Container size="wide">
        <div className="rounded-[24px] p-12 sm:p-20 bg-[#f4f0e6] border border-[#1e2622]/10 text-center space-y-8 max-w-5xl mx-auto shadow-sm">
          <div className="utility-label text-[#86b847]">
            Open Collaboration & Mentorship
          </div>

          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.85] text-[#1e2622] max-w-3xl mx-auto">
            BUILD WITH <span className="lowercase italic font-normal text-[#86b847]">atmosyn</span>.
          </h2>

          <p className="text-lg sm:text-xl text-[#1e2622]/80 max-w-2xl mx-auto leading-relaxed font-normal">
            Whether you are a student seeking practical engineering experience or an academic
            researcher interested in environmental telemetry, we welcome structured collaboration.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-5 pt-4">
            <Link
              href="/collaboration#inquiry"
              className="px-8 py-4 rounded-full bg-[#86b847] hover:bg-[#75a33b] text-[#1e2622] font-extrabold text-xs uppercase tracking-[0.2em] transition-transform duration-300 hover:scale-[1.03]"
            >
              Submit Collaboration Inquiry
            </Link>
            <Link
              href="/about"
              className="px-8 py-4 rounded-full bg-transparent hover:bg-[#1e2622]/5 text-[#1e2622] font-extrabold text-xs uppercase tracking-[0.2em] border border-[#1e2622]/20 transition-colors"
            >
              Read Our Mission
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
