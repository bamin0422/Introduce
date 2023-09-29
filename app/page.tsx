import AboutSection from "@web/components/AboutSection/index";
import IntroduceSection from "@web/components/IntroduceSection/index";
import ProjectsSection from "@web/components/ProjectsSection/index";

export default function Home() {
  return (
    <main>
      <IntroduceSection />
      <AboutSection />
      <ProjectsSection />
    </main>
  );
}
