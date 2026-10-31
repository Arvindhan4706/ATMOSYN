import React from "react";
import { HeroSection } from "@/components/home/HeroSection";
import { PillarsSection } from "@/components/home/PillarsSection";
import { ApproachSection } from "@/components/home/ApproachSection";
import { InitiativesSection } from "@/components/home/InitiativesSection";
import { CollaborationCTA } from "@/components/home/CollaborationCTA";

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
