"use client";

import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Link from "next/link";
import { Leaf, Users, Cpu, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { pillars } from "@/data/pillars";

export function PillarsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Leaf":
        return <Leaf className="w-10 h-10 text-[#4d7526] group-hover:text-[#1e2622] transition-colors duration-500" />;
      case "Users":
        return <Users className="w-10 h-10 text-[#4d7526] group-hover:text-[#1e2622] transition-colors duration-500" />;
      case "Cpu":
        return <Cpu className="w-10 h-10 text-[#4d7526] group-hover:text-[#1e2622] transition-colors duration-500" />;
      default:
        return <Leaf className="w-10 h-10 text-[#4d7526] group-hover:text-[#1e2622] transition-colors duration-500" />;
    }
  };

  return (
    <section id="pillars" ref={ref} className={`py-28 bg-[#f4f0e6] ${isVisible ? "reveal-up" : "reveal-init"}`}>
      <Container size="wide">
        {/* Utility Label */}
        <div className="utility-label text-[#1e2622]/70 mb-4">
          Core Operating Pillars
        </div>

        {/* Headline: 8xl font-size */}
        <h2 className="text-6xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-ink-gradient mb-16">
          THE PILLARS.
        </h2>

        {/* Grid of 3 columns separated by 1px borders, 40px padding */}
        <div className="grid grid-cols-1 md:grid-cols-3 border border-[#1e2622]/10 divide-y md:divide-y-0 md:divide-x divide-[#1e2622]/10">
          {pillars.map((pillar) => (
            <div
              key={pillar.id}
              className="group p-10 bg-[#fdfbf7] hover:bg-[#86b847] transition-colors duration-500 flex flex-col justify-between min-h-[440px]"
            >
              <div className="space-y-8">
                {/* Icon & Pillar Number */}
                <div className="flex items-center justify-between">
                  <div className="transition-transform duration-500 group-hover:scale-110">
                    {getIcon(pillar.iconName)}
                  </div>
                  <span className="text-3xl font-black italic tracking-tighter text-[#1e2622]/25 group-hover:text-[#1e2622] transition-colors">
                    {pillar.number}
                  </span>
                </div>

                {/* h3 bold uppercase */}
                <div className="space-y-2">
                  <span className="utility-label text-[#1e2622]/70 group-hover:text-[#1e2622]/80 transition-colors">
                    {pillar.subtitle}
                  </span>
                  <h3 className="text-2xl font-black uppercase tracking-tight text-[#1e2622] leading-tight">
                    {pillar.title}
                  </h3>
                </div>

                {/* p small leading-relaxed */}
                <p className="text-sm leading-relaxed text-[#1e2622]/80 group-hover:text-[#1e2622] transition-colors">
                  {pillar.description}
                </p>

                {/* Objectives */}
                <div className="pt-4 border-t border-[#1e2622]/10 space-y-2">
                  <span className="utility-label text-[#1e2622]/70">Documented:</span>
                  <ul className="space-y-1.5 text-xs text-[#1e2622]/80 group-hover:text-[#1e2622] transition-colors font-medium">
                    {pillar.objectives.map((obj, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="font-bold">·</span>
                        <span className="leading-snug">{obj}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-8">
                <Link
                  href={`/about#${pillar.id}`}
                  className="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#1e2622] border-b border-[#1e2622] pb-1 hover:opacity-70 transition-opacity"
                >
                  <span>Explore Pillar</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
