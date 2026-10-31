"use client";

import React, { useEffect, useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Container } from "@/components/ui/Container";

export interface Metric {
  value: number;
  label: string;
}

/**
 * Honest metric band — only ever pass numbers that are true today.
 * Counts up when scrolled into view; jumps straight to the final value
 * when the visitor prefers reduced motion.
 */
export function MetricsBand({ metrics }: { metrics: Metric[] }) {
  const { ref, isVisible } = useScrollAnimation();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setProgress(1);
      return;
    }
    let raf = 0;
    const start = performance.now();
    const duration = 1400;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      setProgress(1 - Math.pow(1 - t, 3)); // ease-out cubic
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [isVisible]);

  return (
    <section ref={ref} className="py-20 bg-[#f4f0e6] border-b border-[#1e2622]/10">
      <Container size="wide">
        <div className="utility-label text-[#4d7526] mb-10 text-center">
          Atmosyn Today · Verified Numbers Only
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <div className="text-5xl sm:text-6xl font-black italic tracking-tighter text-[#1e2622] font-mono leading-none">
                {Math.round(metric.value * progress)}
              </div>
              <div className="utility-label text-[#1e2622]/70 mt-3">{metric.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
