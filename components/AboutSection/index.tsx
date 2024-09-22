import { EmphasisText } from "../EmphasisText";
import { ContactInfo } from "./types";

const contactList: ContactInfo[] = [
  {
    name: "email",
    url: "mailto:bamin0422@gmail.com",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/대인-민-7a8a0b143",
  },
  {
    name: "github",
    url: "https://github.com/bamin0422",
  },
];

// TODO : 각각의 CompanyCard > ProjectCard 컴포넌트로 컴포넌트화할 것!
export function ProjectsSection() {
  return (
    <section id="project" className="flex flex-col p-[2rem] mt-[3rem] mb-10">
      <h2 className="text-[3rem] text-black font-semibold pb-5">
        Contact
        <EmphasisText title="." />
      </h2>
      <ul className="ps-[2rem] sm:text-[1rem] text-sm font-normal text-slate-500 list-disc">
        {contactList.map((contactInfo) => (
          <li key={`li-${contactInfo.name}`}>
            <a href={contactInfo.url}>{contactInfo.name}</a>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default ProjectsSection;
