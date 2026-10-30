import React from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Container } from "@/components/ui/Container";

export function ApproachSection() {
  const { ref, isVisible } = useScrollAnimation();
  const steps = [
    {
      step: "01",
      title: "Real-World Problem Definition",
      description:
        "Isolating specific environmental friction points—such as localized microclimate shifts and resource leakage—where practical engineering delivers measurable impact.",
    },
    {
      step: "02",
      title: "Architecture & Low-Power Design",
      description:
        "Developing open-standard, low-power telemetry topologies and reproducible data models tailored for ecological conditions without operational overhead.",
    },
    {
      step: "03",
      title: "Mentorship & Sprint Collaboration",
      description:
        "Pairing students with multidisciplinary leads to build real-world capability, analyze baseline datasets, and develop testable exploratory frameworks.",
    },
    {
      step: "04",
      title: "Empirical Validation & Open Dissemination",
      description:
        "Evaluating outcomes with strict scientific rigor. Documenting telemetry logs, methodologies, and limitations openly without exaggerated claims.",
    },
  ];

  return (
    <section className={`py-28 bg-[#f4f0e6] border-y border-[#1e2622]/10 ${isVisible ? "reveal-up" : "opacity-0 translate-y-8"}`} ref={ref}>
      <Container size="wide">
        <div className="max-w-3xl mb-16">
          <div className="utility-label text-[#86b847] mb-3">
            Operating Methodology
          </div>
          <h2 className="text-5xl sm:text-7xl font-black uppercase tracking-tighter leading-[0.85] text-[#1e2622]">
            OUR PROCESS.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((item) => (
            <div
              key={item.step}
              className="p-8 rounded-[16px] bg-[#fdfbf7] border border-[#1e2622]/10 hover:border-[#86b847] transition-colors duration-500 space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <span className="text-4xl font-black italic tracking-tighter text-[#86b847] block font-mono">
                  {item.step}
                </span>
                <h3 className="text-xl font-black uppercase tracking-tight text-[#1e2622] leading-tight">
                  {item.title}
                </h3>
                <p className="text-sm text-[#1e2622]/80 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#1e2622]/5">
                <span className="utility-label text-[#1e2622]/40">
                  Phase {item.step}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
