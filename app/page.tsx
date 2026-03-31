"use client";
import IntroduceSection from "@web/components/IntroduceSection/index";
import WorkSection from "@web/components/WorkSection";
import ProjectsSection from "@web/components/ProjectsSection/index";
import AboutSection from "@web/components/AboutSection";
import { Separator } from "@web/components/ui/separator";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-6 py-16">
        <IntroduceSection />
        <Separator className="my-12" />
        <WorkSection />
        <Separator className="my-12" />
        <ProjectsSection />
        <Separator className="my-12" />
        <AboutSection />
      </div>
    </main>
  );
}
