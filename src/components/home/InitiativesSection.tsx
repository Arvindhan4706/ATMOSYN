"use client";

import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { projects } from "@/data/projects";

const projectImages = [
  "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=900&q=80",
  "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=900&q=80",
];

export function InitiativesSection() {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section className={`py-32 bg-[#fdfbf7] ${isVisible ? "reveal-up" : "reveal-init"}`} ref={ref}>
      <Container size="wide">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-20">
          <div>
            <div className="utility-label text-[#86b847] mb-3">
              Portfolio & Explorations
            </div>
            <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-[0.85] text-ink-gradient">
              SELECTED WORK.
            </h2>
          </div>
          <Link
            href="/work"
            className="text-[10px] font-black uppercase tracking-[0.2em] text-[#1e2622] border-b-2 border-[#86b847] pb-1 hover:text-[#1e2622]/60 transition-colors"
          >
            All Explorations &rarr;
          </Link>
        </div>

        {/* Two-column grid layout where every even item (right column) is offset downwards by 100px */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-20 md:pb-24">
          {projects.map((project, index) => {
            const isEven = index % 2 === 1;
            const imageSrc = projectImages[index % projectImages.length];

            return (
              <div
                key={project.slug}
                className={`group cursor-pointer ${isEven ? "md:translate-y-[100px]" : ""}`}
              >
                <Link href={`/work/${project.slug}`} className="block space-y-6">
                  {/* 3:4 aspect-ratio image with 16px border-radius */}
                  <div className="editorial-img-container aspect-[3/4] rounded-[16px] overflow-hidden relative shadow-lg bg-[#f4f0e6]">
                    <Image
                      src={imageSrc}
                      alt={project.title}
                      fill
                      className="editorial-img object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />

                    {/* On hover: centered 96px black circle with white 'View Project' */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-[96px] h-[96px] rounded-full bg-[#1e2622] text-white flex items-center justify-center font-bold text-[10px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-2xl">
                        View Project
                      </div>
                    </div>
                  </div>

                  {/* Below images: category label in 10px #86b847 bold tracking-widest */}
                  <div className="space-y-2 pt-2">
                    <div className="text-[10px] text-[#86b847] font-black uppercase tracking-[0.25em]">
                      {project.pillarName}
                    </div>

                    {/* 3xl title */}
                    <h3 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#1e2622] group-hover:text-[#1e2622]/80 transition-colors leading-tight">
                      {project.title}
                    </h3>

                    {/* Tag metadata separated by bullet points */}
                    <div className="text-xs text-[#1e2622]/60 font-medium tracking-wide flex items-center gap-2 pt-1">
                      <span>{project.stage}</span>
                      <span>·</span>
                      <span>Exploratory Research</span>
                      <span>·</span>
                      <span>Scope Documented</span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
