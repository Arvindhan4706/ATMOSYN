import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { projects } from "@/data/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const projectGalleries: Record<string, string[]> = {
  "microclimate-telemetry-framework": [
    "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80",
  ],
  "collaborative-climate-mentorship": [
    "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1501504905252-473c87e044b3?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1497633762245-5b9ef8e6a914?auto=format&fit=crop&w=1200&q=80",
  ],
  "resource-circularity-benchmarking": [
    "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=1200&q=80",
  ],
};

export async function generateStaticParams() {
  return projects.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Initiative Not Found" };

  return {
    title: `${project.title} — Technical Scope`,
    description: project.summary,
  };
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const galleryImages = projectGalleries[slug] || [];

  return (
    <div className="pt-36 pb-32 bg-[#fdfbf7]">
      <section className="pb-16 border-b border-[#1e2622]/10 mb-16">
        <Container size="wide">
          <Link
            href="/work"
            className="text-[10px] font-black uppercase tracking-[0.2em] text-[#86b847] hover:text-[#1e2622] transition-colors mb-8 inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#86b847] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fdfbf7] rounded"
          >
            &larr; Back to Portfolio
          </Link>

          <div className="max-w-4xl space-y-6">
            <div className="utility-label text-[#1e2622]/50">
              {project.pillarName} · {project.stage}
            </div>

            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black uppercase tracking-tighter leading-[0.88] text-[#1e2622]">
              {project.title}
            </h1>

            <p className="text-xl sm:text-2xl text-[#1e2622]/80 leading-relaxed font-normal">
              {project.summary}
            </p>
          </div>
        </Container>
      </section>

      {/* Gallery Section */}
      {galleryImages.length > 0 && (
        <section className="mb-16">
          <Container size="wide">
            <div className="space-y-8">
              <div className="utility-label text-[#86b847]">Visual Documentation</div>
              <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#1e2622]">
                Project Gallery
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {galleryImages.map((imageSrc, idx) => (
                  <div
                    key={idx}
                    className="editorial-img-container aspect-[4/3] rounded-[16px] overflow-hidden relative shadow-lg bg-[#f4f0e6] group"
                  >
                    <Image
                      src={imageSrc}
                      alt={`${project.title} - Documentation ${idx + 1}`}
                      fill
                      className="editorial-img object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>
      )}

      <section>
        <Container size="wide">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left 8 cols */}
            <div className="lg:col-span-8 space-y-12">
              <div className="space-y-4 pb-10 border-b border-[#1e2622]/10">
                <span className="utility-label text-[#86b847]">
                  Context & Friction Point
                </span>
                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#1e2622]">
                  Problem Being Explored
                </h2>
                <p className="text-base text-[#1e2622]/80 leading-relaxed font-normal">
                  {project.problem}
                </p>
              </div>

              <div className="space-y-4 pb-10 border-b border-[#1e2622]/10">
                <span className="utility-label text-[#86b847]">
                  Technical Methodology
                </span>
                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#1e2622]">
                  Proposed Engineering Architecture
                </h2>
                <p className="text-base text-[#1e2622]/80 leading-relaxed font-normal">
                  {project.proposedApproach}
                </p>
              </div>

              <div className="space-y-4">
                <span className="utility-label text-[#86b847]">
                  Verified Deliverables
                </span>
                <h2 className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-[#1e2622]">
                  Target Deliverables
                </h2>
                <ul className="space-y-3 pt-2">
                  {project.expectedOutcomes.map((outcome, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-[#1e2622]/80 font-medium">
                      <span className="text-[#86b847] font-black">―</span>
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right 4 cols */}
            <div className="lg:col-span-4 space-y-8">
              <div className="p-8 rounded-[20px] bg-[#f4f0e6] border border-[#1e2622]/10 space-y-4">
                <span className="utility-label text-[#1e2622]/60">
                  Current Milestone Status
                </span>
                <p className="text-base text-[#1e2622] font-bold leading-snug">
                  {project.currentStatus}
                </p>
                <p className="text-xs text-[#1e2622]/50 pt-3 border-t border-[#1e2622]/10">
                  {project.verifiedNotes}
                </p>
              </div>

              <div className="p-8 rounded-[20px] bg-[#f4f0e6] border border-[#1e2622]/10 space-y-4">
                <span className="utility-label text-[#86b847]">
                  Inquiry Portal
                </span>
                <h3 className="text-xl font-black uppercase tracking-tight text-[#1e2622]">
                  Inquire to Collaborate
                </h3>
                <p className="text-xs text-[#1e2622]/80 leading-relaxed">
                  We welcome academic proposals and student collaboration inquiries related to this initiative.
                </p>
                <Link
                  href="/collaboration#inquiry"
                  className="w-full block text-center px-6 py-3.5 rounded-full bg-[#86b847] hover:bg-[#75a33b] text-[#1e2622] font-extrabold text-[10px] tracking-[0.2em] uppercase transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#86b847] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4f0e6]"
                >
                  Submit Inquiry
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
