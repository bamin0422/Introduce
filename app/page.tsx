"use client";
import Hero from "@web/components/Hero";
import Nav from "@web/components/Nav";
import IntroduceSection from "@web/components/IntroduceSection/index";
import WorkSection from "@web/components/WorkSection";
import ProjectsSection from "@web/components/ProjectsSection/index";
import AboutSection from "@web/components/AboutSection";
import OverviewSection from "@web/components/OverviewSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <div className="mx-auto max-w-5xl space-y-28 px-6 pb-24 pt-24">
        <OverviewSection />
        <IntroduceSection />
        <WorkSection />
        <ProjectsSection />
        <AboutSection />
      </div>
    </main>
  );
}
