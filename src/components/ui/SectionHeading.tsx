import React from "react";
import { clsx } from "clsx";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={clsx(
        "space-y-4 max-w-3xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {eyebrow && (
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#b7d96b]">
          <span className="inline-block w-2 h-2 rounded-full bg-[#b7d96b] animate-pulse" />
          <span>{eyebrow}</span>
        </div>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#f5f2e9] leading-[1.15]">
        {title}
      </h2>
      {description && (
        <p className="text-base sm:text-lg text-[#c5c0b4] leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}
