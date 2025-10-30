"use client";

import { Suspense } from "react";
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
// import { SkillsSection } from "@/components/skills-section";
import { ContactSection } from "@/components/contact-section";
import { LoadingSkeleton } from "@/components/loading-skeleton";
import { ProjectsSection } from "@/components/projects-section";
import { ResearchSection } from "@/components/research-section";
import { ExperienceSection } from "@/components/experience-section";
import { PublicationsSection } from "@/components/publications-section";

export default function HomePage() {
  return (
    <Suspense fallback={<LoadingSkeleton />}>
      <main className="relative overflow-hidden">
        <Navigation />
        <HeroSection />
        <AboutSection />
        <ResearchSection />
        <ExperienceSection />
        <ProjectsSection />
        {/* <SkillsSection /> */}
        <PublicationsSection />
        <ContactSection />
        <Footer />
      </main>
    </Suspense>
  );
}
