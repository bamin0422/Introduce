"use client";
import AboutSection from "@web/components/AboutSection";
import IntroduceSection from "@web/components/IntroduceSection/index";
import ProjectsSection from "@web/components/ProjectsSection/index";
import WorkSection from "@web/components/WorkSection";

export default function Home() {
  return (
    <main>
      <style>
        {`
          ::selection {
            background-color: rgb(249 115 22);
            color: black; 
          }
        `}
      </style>
      <div className="flex justify-center">
        <div className="flex flex-col justify-center sm:w-[50rem]">
          <IntroduceSection />
          <WorkSection />
          <hr className="mx-[2rem] border-t-[0.01rem] border-slate-300" />
          <ProjectsSection />
          <hr className="mx-[2rem] border-t-[0.01rem] border-slate-300" />
          <AboutSection />
        </div>
      </div>
    </main>
  );
}
