import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="site-footer" className="bg-[#f4f0e6] text-[#1e2622] pt-24 pb-12 border-t border-[#1e2622]/10">
      <Container size="wide">
        {/* 12-column split: left 5 columns for brand and mission; right 7 columns split into 3 sub-columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 pb-16">
          {/* Left 5 columns */}
          <div className="lg:col-span-5 space-y-6">
            <Link
              href="/"
              className="flex items-center gap-4 group inline-flex focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4d7526] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4f0e6] rounded"
            >
              <Image
                src="/logo-mark.png"
                alt=""
                width={72}
                height={72}
                className="w-16 h-16 rounded-2xl border border-[#1e2622]/10 shadow-sm group-hover:border-[#e2aa38]/60 group-hover:shadow-[0_2px_14px_rgba(226,170,56,0.3)] transition-all duration-500"
              />
              {/* Matching cinematic wordmark: same atmo/syn split and lozenge */}
              <span className="flex items-baseline text-[30px] font-semibold tracking-[-0.015em] text-[#1e2622] leading-none">
                <span aria-hidden="true" className="flex items-baseline">
                  {["a", "t", "m", "o"].map((letter, i) => (
                    <span
                      key={letter}
                      className="wm-rise wm-atmo inline-block"
                      style={{ animationDelay: `${i * 55}ms` }}
                    >
                      {letter}
                    </span>
                  ))}
                  <span
                    className="wm-rise wm-atmo inline-block"
                    style={{ animationDelay: "235ms" }}
                  >
                    <span className="font-accent text-[1.12em] wm-shine">syn</span>
                  </span>
                </span>
                <span
                  aria-hidden="true"
                  className="wm-mark ml-[7px] mb-[3px] h-[7px] w-[7px] shrink-0 rotate-45 transition-transform duration-500 group-hover:rotate-[225deg] rounded-[1px]"
                  style={{ animationDelay: "520ms" }}
                />
              </span>
            </Link>
            <p className="text-base text-[#1e2622]/80 leading-relaxed max-w-md font-medium">
              An early-stage climate research collective bringing students and
              experienced leads together on open environmental questions —
              every claim published at its honest stage.
            </p>
            <div className="utility-label text-[#1e2622]/70 pt-2">
              Status: Early Exploration & Research Planning
            </div>
          </div>

          {/* Right 7 columns split into 3 sub-columns */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Sub-col 1: Navigation */}
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#4d7526] underline underline-offset-8 decoration-2 decoration-[#86b847]">
                NAVIGATION
              </h4>
              <ul className="space-y-2.5 text-xs font-bold uppercase tracking-wider text-[#1e2622]/80 pt-2">
                <li>
                  <Link href="/about" className="hover:text-[#4d7526] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4d7526] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4f0e6] rounded">
                    About Atmosyn
                  </Link>
                </li>
                <li>
                  <Link href="/work" className="hover:text-[#4d7526] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4d7526] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4f0e6] rounded">
                    Our Work
                  </Link>
                </li>
                <li>
                  <Link href="/research" className="hover:text-[#4d7526] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4d7526] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4f0e6] rounded">
                    Research & Tech
                  </Link>
                </li>
                <li>
                  <Link href="/collaboration#team" className="hover:text-[#4d7526] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4d7526] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4f0e6] rounded">
                    Leadership Team
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="hover:text-[#4d7526] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4d7526] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4f0e6] rounded">
                    News &amp; Updates
                  </Link>
                </li>
              </ul>
            </div>

            {/* Sub-col 2: Social / Inquiries */}
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#4d7526] underline underline-offset-8 decoration-2 decoration-[#86b847]">
                ENGAGEMENT
              </h4>
              <ul className="space-y-2.5 text-xs font-bold uppercase tracking-wider text-[#1e2622]/80 pt-2">
                <li>
                  <Link href="/collaboration#students" className="hover:text-[#4d7526] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4d7526] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4f0e6] rounded">
                    Student Mentorship
                  </Link>
                </li>
                <li>
                  <Link href="/collaboration#inquiry" className="hover:text-[#4d7526] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4d7526] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4f0e6] rounded">
                    Collaboration Portal
                  </Link>
                </li>
                <li>
                  <Link href="/collaboration#careers" className="hover:text-[#4d7526] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4d7526] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4f0e6] rounded">
                    Careers &amp; Joining
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#4d7526] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4d7526] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4f0e6] rounded">
                    Official Inquiries
                  </Link>
                </li>
              </ul>
            </div>

            {/* Sub-col 3: Governance & Locations */}
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#4d7526] underline underline-offset-8 decoration-2 decoration-[#86b847]">
                GOVERNANCE
              </h4>
              <ul className="space-y-2.5 text-xs font-bold uppercase tracking-wider text-[#1e2622]/80 pt-2">
                <li>
                  <Link href="/privacy" className="hover:text-[#4d7526] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4d7526] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4f0e6] rounded">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-[#4d7526] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4d7526] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4f0e6] rounded">
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link href="/about#integrity" className="hover:text-[#4d7526] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4d7526] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4f0e6] rounded">
                    Scientific Integrity
                  </Link>
                </li>
                <li>
                  <Link href="/transparency" className="hover:text-[#4d7526] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4d7526] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4f0e6] rounded">
                    Transparency Record
                  </Link>
                </li>
                <li>
                  <Link href="/press" className="hover:text-[#4d7526] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#4d7526] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4f0e6] rounded">
                    Press &amp; Media Kit
                  </Link>
                </li>
                <li>
                  <span className="text-[10px] font-medium text-[#1e2622]/70 block leading-normal pt-1 lowercase">
                    wcag 2.2 aa accessible
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#1e2622]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[9px] font-bold uppercase tracking-[0.25em] text-[#1e2622]/70">
          <p>© {currentYear} ATMOSYN. ALL RIGHTS RESERVED.</p>
          <p className="text-center sm:text-right">
            CLIMATE ACTION · SUSTAINABILITY · RESEARCH
          </p>
        </div>
      </Container>
    </footer>
  );
}
