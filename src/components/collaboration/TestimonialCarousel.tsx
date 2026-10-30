"use client";

import React, { useState, useEffect, useCallback } from "react";

interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  affiliation: string;
  project?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Working on the microclimate telemetry project gave me hands-on experience with sensor calibration and data validation that I never got in my coursework. The mentorship structure meant I always had guidance but also ownership over my contributions.",
    name: "Sarah Chen",
    role: "Undergraduate Researcher",
    affiliation: "Environmental Engineering, Class of 2026",
    project: "Microclimate & Canopy Telemetry Framework",
  },
  {
    id: 2,
    quote: "The multidisciplinary sprint format forced me to think beyond pure software. Collaborating with hardware engineers and environmental scientists on the resource auditing framework changed how I approach problem-solving entirely.",
    name: "Marcus Rodriguez",
    role: "Graduate Student",
    affiliation: "Computer Science & Sustainability",
    project: "Institutional Resource Efficiency Benchmarking",
  },
  {
    id: 3,
    quote: "Atmosyn's emphasis on scientific integrity — documenting limitations openly, not overstating results — aligns with how I want to practice research. The student climate mentorship protocol gave me a template for ethical engineering.",
    name: "Aisha Okonkwo",
    role: "PhD Candidate",
    affiliation: "Climate Science & Policy",
    project: "Student Climate Innovation & Mentorship Protocol",
  },
  {
    id: 4,
    quote: "Building the sensor node prototypes taught me more about power management and embedded systems in three months than two years of lectures. The open hardware philosophy means our work enables others, not just ourselves.",
    name: "James Liu",
    role: "Hardware Engineering Intern",
    affiliation: "Electrical Engineering, Class of 2025",
    project: "Microclimate & Canopy Telemetry Framework",
  },
  {
    id: 5,
    quote: "The collaborative culture here is unique — senior researchers genuinely treat students as peers in the scientific process. My contributions to the data schema design were reviewed with the same rigor as any team member's work.",
    name: "Elena Petrov",
    role: "Data Science Intern",
    affiliation: "Applied Mathematics & Statistics",
    project: "Microclimate & Canopy Telemetry Framework",
  },
];

export function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  const goTo = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(next, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, next]);

  const handleMouseEnter = () => setIsAutoPlaying(false);
  const handleMouseLeave = () => setIsAutoPlaying(true);

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
    testimonials[(currentIndex + 2) % testimonials.length],
  ];

  return (
    <div
      className="space-y-8"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      role="region"
      aria-label="Student testimonials"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {visibleTestimonials.map((testimonial, idx) => (
          <article
            key={testimonial.id}
            className={`p-8 rounded-[16px] bg-[#fdfbf7] border border-[#1e2622]/10 space-y-4 transition-all duration-300 ${
              idx === 1
                ? "ring-2 ring-[#86b847] shadow-lg scale-[1.02] z-10"
                : "hover:ring-2 hover:ring-[#86b847]/50"
            }`}
          >
            <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-[#86b847]">
              <span className="w-6 h-6 rounded-full bg-[#86b847]/10 flex items-center justify-center">
                <span className="text-[8px] font-bold">{idx + 1}</span>
              </span>
              <span>{testimonial.project}</span>
            </div>
            <blockquote className="text-base text-[#1e2622]/80 leading-relaxed font-normal italic">
              &ldquo;{testimonial.quote}&rdquo;
            </blockquote>
            <footer className="pt-4 border-t border-[#1e2622]/10 space-y-1">
              <cite className="not-italic font-bold text-[#1e2622]">{testimonial.name}</cite>
              <p className="text-xs text-[#1e2622]/60">{testimonial.role}</p>
              <p className="text-xs text-[#1e2622]/50">{testimonial.affiliation}</p>
            </footer>
          </article>
        ))}
      </div>

      <div className="flex items-center justify-center gap-3">
        <button
          onClick={prev}
          className="p-2 rounded-full bg-[#fdfbf7] border border-[#1e2622]/10 hover:bg-[#86b847] hover:border-[#86b847] hover:text-[#1e2622] text-[#1e2622]/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#86b847]"
          aria-label="Previous testimonial"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <div className="flex items-center gap-2" role="tablist" aria-label="Testimonial navigation">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === currentIndex
                  ? "bg-[#86b847] w-6"
                  : "bg-[#1e2622]/30 hover:bg-[#1e2622]/50"
              }`}
              role="tab"
              aria-selected={i === currentIndex}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="p-2 rounded-full bg-[#fdfbf7] border border-[#1e2622]/10 hover:bg-[#86b847] hover:border-[#86b847] hover:text-[#1e2622] text-[#1e2622]/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#86b847]"
          aria-label="Next testimonial"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}