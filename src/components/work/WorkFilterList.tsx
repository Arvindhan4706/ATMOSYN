"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { projects } from "@/data/projects";

const projectImages = [
  "/images/photo-1470071459604-3b5ec3a7fe05.jpg",
  "/images/photo-1448375240586-882707db888b.jpg",
  "/images/photo-1497435334941-8c899ee9e8e9.jpg",
];

export function WorkFilterList() {
  // Supports deep-linked searches such as /work?search=telemetry (used by the
  // 404 page's search box). Only the initial value is read from the URL.
  const searchParams = useSearchParams();
  const [selectedPillar, setSelectedPillar] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>(
    searchParams.get("search") ?? ""
  );

  const filteredProjects = projects.filter((project) => {
    const matchesPillar =
      selectedPillar === "all" || project.pillarId === selectedPillar;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.problem.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesPillar && matchesSearch;
  });

  return (
    <div className="space-y-12">
      {/* Search and Category Filter Bar */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-6 pb-8 border-b border-[#1e2622]/10">
        <div className="relative flex-1 max-w-md">
          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-[#1e2622]/70" />
          <input
            type="text"
            placeholder="Search explorations & research designs..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3 text-xs uppercase tracking-wider font-bold bg-[#f4f0e6] border border-[#1e2622]/10 rounded-full text-[#1e2622] placeholder-[#1e2622]/70 focus:outline-none focus:border-[#86b847]"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter initiatives by pillar">
          {[
            { id: "all", label: "All Work" },
            { id: "climate-action", label: "Climate Action" },
            { id: "people-growth", label: "Collaborative Growth" },
            { id: "research-innovation", label: "Research & Tech" },
          ].map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setSelectedPillar(tab.id)}
              aria-pressed={selectedPillar === tab.id}
              className={`px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4d7526] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fdfbf7] ${
                selectedPillar === tab.id
                  ? "bg-[#86b847] text-[#1e2622]"
                  : "bg-transparent text-[#1e2622]/70 hover:text-[#1e2622] border border-[#1e2622]/10"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      {filteredProjects.length === 0 ? (
        <div className="p-16 text-center rounded-[20px] bg-[#f4f0e6] border border-[#1e2622]/10 space-y-3">
          <p className="text-base text-[#1e2622]/80 font-medium">
            No initiatives found matching your search query.
          </p>
          <button
            onClick={() => {
              setSelectedPillar("all");
              setSearchQuery("");
            }}
            className="text-xs font-black uppercase tracking-widest text-[#4d7526] hover:underline"
          >
            Reset Filters &rarr;
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((item, idx) => {
            const imageSrc = projectImages[idx % projectImages.length];

            return (
              <article key={item.slug} className="group">
                <Link href={`/work/${item.slug}`} className="block space-y-5">
                  {/* 3:4 aspect-ratio image with 16px border-radius */}
                  <div className="editorial-img-container aspect-[3/4] rounded-[16px] overflow-hidden relative shadow-md bg-[#f4f0e6]">
                    <Image
                      src={imageSrc}
                      alt={item.title}
                      fill
                      className="editorial-img object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />

                    {/* Centered 96px black circle with white 'View Project' */}
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <div className="w-[96px] h-[96px] rounded-full bg-[#1e2622] text-white flex items-center justify-center font-bold text-[10px] tracking-widest uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-2xl">
                        View Project
                      </div>
                    </div>
                  </div>

                  {/* Below image details */}
                  <div className="space-y-2 pt-2">
                    <div className="text-[10px] text-[#4d7526] font-black uppercase tracking-[0.25em]">
                      {item.pillarName}
                    </div>

                    <h3 className="text-2xl font-black uppercase tracking-tight text-[#1e2622] group-hover:text-[#1e2622]/80 transition-colors leading-tight">
                      {item.title}
                    </h3>

                    <p className="text-sm text-[#1e2622]/80 leading-relaxed font-normal line-clamp-2">
                      {item.summary}
                    </p>

                    <div className="text-xs text-[#1e2622]/70 font-medium tracking-wide flex items-center gap-2 pt-1">
                      <span>{item.stage}</span>
                      <span>·</span>
                      <span>Exploratory</span>
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
