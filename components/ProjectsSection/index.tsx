import { ProjectCard } from "../ProjectCard";
import { getProjectConfig } from "./mocks";

export default function ProjectsSection() {
  return (
    <section id="projects">
      <div className="my-4 md:mx-12 rounded-xl p-4 text-center animate-fade-down">
        <h1 className="text-2xl font-semibold pt-4 ">💁‍♂️ Projects</h1>
        <hr className="w-6 h-1 mx-auto my-8 bg-blue-500 border-0 rounded" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 place-content-center">
          {getProjectConfig.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}
