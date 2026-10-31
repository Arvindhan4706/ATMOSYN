import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-[100px] pb-16 bg-[#fdfbf7] overflow-hidden">
      <Container size="wide">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Side: Massive headline at 14-15vw font-size, line-height 0.8 */}
          <div className="lg:col-span-7 space-y-8">
            <div className="flex items-center gap-4">
              <Image
                src="/logo-mark.png"
                alt=""
                width={64}
                height={64}
                priority
                className="w-14 h-14 rounded-2xl border border-[#1e2622]/10 shadow-sm"
              />
              <span className="utility-label text-[#1e2622]/60">
                Environmental Architecture · 2026
              </span>
            </div>

            <h1 className="text-[13vw] lg:text-[12vw] font-black tracking-tighter leading-[0.82] uppercase text-ink-gradient">
              CLIMATE<br />
              <span className="font-accent lowercase text-[#86b847] text-[1.02em] pr-2">practical</span><br />
              FUTURE.
            </h1>

            {/* Below headline: 2xl body text in #1e2622/80 for better contrast */}
            <p className="text-xl sm:text-2xl text-[#1e2622]/80 max-w-xl font-normal leading-relaxed pt-2">
              An early-stage climate research collective, built to bring students
              and experienced leads together on open environmental questions —
              with every claim published at its honest stage.
            </p>

            {/* Arrow-cta with a border-bottom-2px #86b847 */}
            <div className="pt-4">
              <Link
                href="/work"
                className="inline-flex items-center gap-3 text-sm font-extrabold tracking-[0.2em] uppercase text-[#1e2622] border-b-2 border-[#86b847] pb-2 hover:text-[#1e2622]/70 transition-colors"
              >
                <span>Explore Our Work</span>
                <ArrowRight className="w-4 h-4 text-[#86b847]" />
              </Link>
            </div>
          </div>

          {/* Right Side: Large card with 24px border-radius, containing grayscale-to-color image */}
          <div className="lg:col-span-5 relative">
            <div className="editorial-img-container rounded-[24px] aspect-[4/5] w-full shadow-2xl relative overflow-hidden bg-[#f4f0e6]">
              <Image
                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=1200&q=80"
                alt="Atmospheric forest ecosystem canopy"
                fill
                priority
                className="editorial-img object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-[#1e2622]/5 pointer-events-none" />
            </div>

            {/* Floating Circular Badge (160px diameter) in #86b847 with '01' italic text */}
            <div className="absolute -bottom-8 -left-8 sm:-bottom-10 sm:-left-10 w-[140px] h-[140px] sm:w-[160px] sm:h-[160px] rounded-full bg-[#86b847] text-[#1e2622] animate-bounce-slow flex flex-col items-center justify-center text-center p-3 shadow-xl z-20 pointer-events-none">
              <span className="text-4xl font-black italic tracking-tighter leading-none">
                01
              </span>
              <span className="text-[8px] font-black uppercase tracking-[0.3em] pt-1">
                Atmosyn Charter
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
