"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { Container } from "@/components/ui/Container";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const toggleButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  const closeMenu = useCallback(() => setMobileMenuOpen(false), []);

  // Escape closes the drawer.
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen, closeMenu]);

  // Close on navigation.
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Drawer lifecycle: lock background scroll, move focus in on open,
  // trap Tab inside while open, restore focus to the toggle on close.
  useEffect(() => {
    if (!mobileMenuOpen) {
      document.body.style.overflow = "";
      return;
    }

    document.body.style.overflow = "hidden";
    const toggleButton = toggleButtonRef.current;
    const drawer = drawerRef.current;
    const getFocusable = () =>
      drawer
        ? Array.from(drawer.querySelectorAll<HTMLElement>("a[href], button:not([disabled])"))
        : [];

    getFocusable()[0]?.focus();

    const handleTabTrap = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;
      const focusable = getFocusable();
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", handleTabTrap);
    return () => {
      document.removeEventListener("keydown", handleTabTrap);
      document.body.style.overflow = "";
      toggleButton?.focus();
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 z-50 px-4 py-2 bg-[#86b847] text-[#1e2622] font-bold text-xs uppercase tracking-widest rounded shadow-md"
      >
        Skip to main content
      </a>

      {/* Fixed top navigation, 80px height, glassmorphism */}
      <header className="fixed top-0 left-0 right-0 z-40 h-[80px] bg-[rgba(253,251,247,0.85)] backdrop-blur-[12px] border-b border-[#1e2622]/5 flex items-center">
        <Container size="wide">
          <div className="flex items-center justify-between">
            {/* Left: ATMOSYN in bold uppercase */}
            <Link
              href="/"
              className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#1e2622] hover:opacity-80 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-[#86b847] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fdfbf7] rounded"
              aria-label="Atmosyn Homepage"
            >
              ATMOSYN
            </Link>

            {/* Center Menu: 12px uppercase tracking-widest (0.2em) */}
            <nav id="main-navigation" className="hidden lg:flex items-center space-x-8" aria-label="Main Navigation">
              {siteConfig.navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-[12px] uppercase font-bold tracking-[0.2em] transition-colors py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#86b847] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fdfbf7] rounded ${
                      isActive
                        ? "text-[#1e2622] border-b-2 border-[#86b847]"
                        : "text-[#1e2622]/80 hover:text-[#1e2622]"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Far Right: Pill-shaped CTA button in #86b847 */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/collaboration#inquiry"
                className="px-8 py-3 rounded-full bg-[#86b847] hover:bg-[#75a33b] text-[#1e2622] font-extrabold text-[12px] tracking-[0.2em] uppercase transition-all duration-300 hover:scale-[1.02] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#86b847] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fdfbf7]"
              >
                Collaborate
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              ref={toggleButtonRef}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-[#1e2622] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#86b847] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fdfbf7] rounded"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </Container>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            ref={drawerRef}
            className="lg:hidden absolute top-[80px] inset-x-0 bg-[#fdfbf7] border-b border-[#1e2622]/10 px-6 py-8 space-y-4 shadow-xl"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <nav className="flex flex-col space-y-3" aria-label="Mobile Navigation">
              {siteConfig.navLinks.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`text-[13px] uppercase tracking-[0.2em] font-bold py-2 border-b border-[#1e2622]/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#86b847] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fdfbf7] rounded ${
                      isActive ? "text-[#1e2622] border-b-2 border-[#86b847]" : "text-[#1e2622]/80"
                    }`}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <div className="pt-4">
                <Link
                  href="/collaboration#inquiry"
                  className="w-full block text-center px-8 py-3.5 rounded-full bg-[#86b847] text-[#1e2622] font-extrabold text-[13px] tracking-[0.2em] uppercase focus:outline-none focus-visible:ring-2 focus-visible:ring-[#86b847] focus-visible:ring-offset-2 focus-visible:ring-offset-[#fdfbf7]"
                >
                  Collaborate
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
