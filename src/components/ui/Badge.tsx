import React from "react";
import { clsx } from "clsx";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "lime" | "forest" | "muted" | "outline";
  className?: string;
}

export function Badge({ children, variant = "lime", className }: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-mono tracking-wider uppercase font-medium",
        variant === "lime" && "bg-[#b7d96b]/15 text-[#c8ed79] border border-[#b7d96b]/30",
        variant === "forest" && "bg-[#123b32] text-[#f5f2e9] border border-[#28695b]/40",
        variant === "muted" && "bg-[#18221e] text-[#c5c0b4] border border-[#26342f]",
        variant === "outline" && "border border-[#b7d96b]/40 text-[#c8ed79]",
        className
      )}
    >
      {children}
    </span>
  );
}
