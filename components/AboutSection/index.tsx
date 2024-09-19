import { EmphasisText } from "../EmphasisText";

// TODO : 각각의 CompanyCard > ProjectCard 컴포넌트로 컴포넌트화할 것!
export function ProjectsSection() {
  return (
    <section id="project" className="flex flex-col p-[2rem] mt-[3rem] mb-10">
      <h2 className="text-[3rem] text-black font-semibold pb-10">
        Contact
        <EmphasisText title="." />
      </h2>
      <li className="sm:text-[1rem] text-sm font-normal text-slate-500">
        <a href="mailto:bamin0422@gmail.com">email</a>
      </li>
      <li className="sm:text-[1rem] text-sm font-normal text-slate-500">
        <a href="https://www.linkedin.com/in/대인-민-7a8a0b143">LinkedIn</a>
      </li>
      <li className="sm:text-[1rem] text-sm font-normal text-slate-500">
        <a href="https://github.com/bamin0422">github</a>
      </li>
    </section>
  );
}

export default ProjectsSection;
