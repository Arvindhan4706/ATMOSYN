"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Search, Home, FileText, Users, FlaskConical } from "lucide-react";

const popularLinks = [
  { href: "/", label: "Home", icon: Home, description: "Atmosyn overview & mission" },
  { href: "/about", label: "About Atmosyn", icon: FileText, description: "Mission, pillars & values" },
  { href: "/work", label: "Our Work", icon: FlaskConical, description: "Verified case studies & explorations" },
  { href: "/research", label: "Research & Tech", icon: FlaskConical, description: "Active themes & publications" },
  { href: "/collaboration", label: "People & Collaboration", icon: Users, description: "Leadership team & student opportunities" },
  { href: "/contact", label: "Contact", icon: FileText, description: "Direct channels & PGP key" },
];

export default function NotFound() {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/work?search=${encodeURIComponent(searchQuery.trim())}`;
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-36 pb-24 bg-[#fdfbf7]">
      <Container size="narrow">
        <div className="text-center space-y-8 max-w-2xl mx-auto">
          <div className="utility-label text-[#86b847]">
            404 Error
          </div>
          <h1 className="text-6xl sm:text-8xl font-black uppercase tracking-tighter leading-[0.85] text-ink-gradient">
            NOT FOUND.
          </h1>
          <p className="text-xl text-[#1e2622]/80 max-w-md mx-auto leading-relaxed font-normal">
            The page you requested could not be located in our publication framework.
          </p>

          {/* Search */}
          <form onSubmit={handleSearch} className="relative max-w-md mx-auto" role="search">
            <Search className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-[#1e2622]/40" aria-hidden="true" />
            <label htmlFor="404-search" className="sr-only">
              Search Atmosyn
            </label>
            <input
              id="404-search"
              type="search"
              placeholder="Search research, work, people..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 text-sm font-medium uppercase tracking-wider bg-[#f4f0e6] border border-[#1e2622]/10 rounded-full text-[#1e2622] placeholder-[#1e2622]/40 focus:outline-none focus:border-[#86b847]"
            />
          </form>

          {/* Popular Links */}
          <div className="pt-4 border-t border-[#1e2622]/10 text-left space-y-6">
            <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-[#86b847] text-center">
              Popular Destinations
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {popularLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-4 p-4 rounded-[12px] bg-[#f4f0e6] border border-[#1e2622]/10 hover:border-[#86b847] hover:bg-[#fdfbf7] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#86b847]"
                >
                  <link.icon className="w-5 h-5 text-[#86b847] flex-shrink-0" aria-hidden="true" />
                  <div className="text-left">
                    <p className="font-black text-[#1e2622] uppercase tracking-wide text-sm">{link.label}</p>
                    <p className="text-xs text-[#1e2622]/60">{link.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link
              href="/"
              className="px-8 py-4 rounded-full bg-[#86b847] hover:bg-[#75a33b] text-[#1e2622] font-extrabold text-[10px] tracking-[0.2em] uppercase transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#86b847] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fdfbf7]"
            >
              Return Home
            </Link>
            <Link
              href="/work"
              className="px-8 py-4 rounded-full bg-[#f4f0e6] hover:bg-[#eae4d8] text-[#1e2622] font-extrabold text-[10px] tracking-[0.2em] uppercase border border-[#1e2622]/10 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#86b847] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fdfbf7]"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
