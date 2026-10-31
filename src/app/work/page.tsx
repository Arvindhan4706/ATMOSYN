import React, { Suspense } from "react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { WorkFilterList } from "@/components/work/WorkFilterList";
import { JsonLd, breadcrumbSchema } from "@/components/seo/JsonLd";

export const metadata: Metadata = {
  title: "Our Work — Editorial Case Studies & Explorations",
  description:
    "Explore Atmosyn's verified research frameworks, early-stage exploratory initiatives, and student collaborative projects.",
};

export default function WorkPage() {
  return (
    <div className="pt-36 pb-32 bg-[#fdfbf7]">
      <JsonLd data={breadcrumbSchema("Our Work", "/work")} />
      <section className="pb-16 border-b border-[#1e2622]/10 mb-16">
        <Container size="wide">
          <div className="max-w-4xl space-y-4">
            <div className="utility-label text-[#86b847]">
              Portfolio Index
            </div>
            <h1 className="text-6xl sm:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-[#1e2622]">
              OUR WORK.
            </h1>
            <p className="text-xl sm:text-2xl text-[#1e2622]/80 max-w-2xl font-normal leading-relaxed pt-2">
              We document our early-stage research questions, hardware architectures, and mentorship
              frameworks with complete technical clarity.
            </p>
          </div>
        </Container>
      </section>

      <section>
        <Container size="wide">
          {/* Suspense is required because WorkFilterList reads ?search= via useSearchParams */}
          <Suspense fallback={null}>
            <WorkFilterList />
          </Suspense>
        </Container>
      </section>
    </div>
  );
}
