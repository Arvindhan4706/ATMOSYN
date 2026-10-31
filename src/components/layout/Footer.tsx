import React from "react";
import Link from "next/link";
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
              className="text-3xl font-black uppercase tracking-tight text-[#1e2622] hover:opacity-80 transition-opacity inline-block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#86b847] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4f0e6] rounded"
            >
              ATMOSYN
            </Link>
            <p className="text-base text-[#1e2622]/80 leading-relaxed max-w-md font-medium">
              Atmosyn brings people, research, and emerging technologies together to explore practical
              solutions for environmental and climate challenges.
            </p>
            <div className="utility-label text-[#1e2622]/40 pt-2">
              Status: Early Exploration & Research Planning
            </div>
          </div>

          {/* Right 7 columns split into 3 sub-columns */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8">
            {/* Sub-col 1: Navigation */}
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#86b847] underline underline-offset-8 decoration-2 decoration-[#86b847]">
                NAVIGATION
              </h4>
              <ul className="space-y-2.5 text-xs font-bold uppercase tracking-wider text-[#1e2622]/80 pt-2">
                <li>
                  <Link href="/about" className="hover:text-[#86b847] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#86b847] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4f0e6] rounded">
                    About Atmosyn
                  </Link>
                </li>
                <li>
                  <Link href="/work" className="hover:text-[#86b847] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#86b847] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4f0e6] rounded">
                    Our Work
                  </Link>
                </li>
                <li>
                  <Link href="/research" className="hover:text-[#86b847] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#86b847] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4f0e6] rounded">
                    Research & Tech
                  </Link>
                </li>
                <li>
                  <Link href="/collaboration#team" className="hover:text-[#86b847] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#86b847] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4f0e6] rounded">
                    Leadership Team
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="hover:text-[#86b847] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#86b847] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4f0e6] rounded">
                    News &amp; Updates
                  </Link>
                </li>
              </ul>
            </div>

            {/* Sub-col 2: Social / Inquiries */}
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#86b847] underline underline-offset-8 decoration-2 decoration-[#86b847]">
                ENGAGEMENT
              </h4>
              <ul className="space-y-2.5 text-xs font-bold uppercase tracking-wider text-[#1e2622]/80 pt-2">
                <li>
                  <Link href="/collaboration#students" className="hover:text-[#86b847] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#86b847] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4f0e6] rounded">
                    Student Mentorship
                  </Link>
                </li>
                <li>
                  <Link href="/collaboration#inquiry" className="hover:text-[#86b847] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#86b847] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4f0e6] rounded">
                    Collaboration Portal
                  </Link>
                </li>
                <li>
                  <Link href="/collaboration#careers" className="hover:text-[#86b847] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#86b847] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4f0e6] rounded">
                    Careers &amp; Joining
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-[#86b847] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#86b847] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4f0e6] rounded">
                    Official Inquiries
                  </Link>
                </li>
              </ul>
            </div>

            {/* Sub-col 3: Governance & Locations */}
            <div className="space-y-4">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#86b847] underline underline-offset-8 decoration-2 decoration-[#86b847]">
                GOVERNANCE
              </h4>
              <ul className="space-y-2.5 text-xs font-bold uppercase tracking-wider text-[#1e2622]/80 pt-2">
                <li>
                  <Link href="/privacy" className="hover:text-[#86b847] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#86b847] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4f0e6] rounded">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-[#86b847] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#86b847] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4f0e6] rounded">
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link href="/about#integrity" className="hover:text-[#86b847] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#86b847] focus-visible:ring-offset-2 focus-visible:ring-offset-[#f4f0e6] rounded">
                    Scientific Integrity
                  </Link>
                </li>
                <li>
                  <span className="text-[10px] font-medium text-[#1e2622]/50 block leading-normal pt-1 lowercase">
                    wcag 2.2 aa accessible
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[#1e2622]/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[9px] font-bold uppercase tracking-[0.25em] text-[#1e2622]/40">
          <p>© {currentYear} ATMOSYN. ALL RIGHTS RESERVED.</p>
          <p className="text-center sm:text-right">
            CLIMATE ACTION · SUSTAINABILITY · RESEARCH
          </p>
        </div>
      </Container>
    </footer>
  );
}
