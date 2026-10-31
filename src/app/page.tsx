import React from "react";
import type { Metadata } from "next";
import { HeroSection } from "@/components/home/HeroSection";
import { PillarsSection } from "@/components/home/PillarsSection";
import { ApproachSection } from "@/components/home/ApproachSection";
import { InitiativesSection } from "@/components/home/InitiativesSection";
import { CollaborationCTA } from "@/components/home/CollaborationCTA";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <PillarsSection />
      <ApproachSection />
      <InitiativesSection />
      <CollaborationCTA />
    </>
  );
}
