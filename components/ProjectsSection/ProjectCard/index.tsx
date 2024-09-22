import { EmphasisText } from "@web/components/EmphasisText";
import { ProjectInfo } from "../types";

export interface Props {
  projectInfo: ProjectInfo;
}

export function ProjectCard({ projectInfo }: Props) {
  return (
    <div className="sm:grid sm:items-stretch sm:grid-cols-3 gap-1">
      <div
        id="company"
        className="flex flex-col justify-start pe-1 sm:col-span-1"
      >
        <h3 className="text-[1.8rem] text-black font-semibold">
          {projectInfo.title}
          <EmphasisText title="." />
        </h3>
        {projectInfo.urlList?.map((urlInfo) => (
          <a
            className="sm:text-[1.1rem] text-sm text-slate-500"
            id="role"
            href={urlInfo.href}
          >
            {urlInfo.name}
          </a>
        ))}
        <span className="sm:text-[1rem] text-sm text-slate-500" id="datetime">
          {`${projectInfo.startDate} ~ ${projectInfo.endDate}`}
        </span>
      </div>
      <div
        id="project"
        className="flex flex-col w-full sm:col-span-2 sm:gap-2 gap-1"
      >
        <span
          id="project-info"
          className="sm:text-[1.3rem] text-lg text-slate-800 font-semibold"
        >
          Info
          <EmphasisText title="." />
        </span>
        <span
          id="project-info-contents"
          className="sm:text-[1rem] text-sm text-slate-500 font-normal"
        >
          {projectInfo.info}
          <EmphasisText title="." />
        </span>
        <span
          id="project-"
          className="sm:text-[1.3rem] text-lg text-slate-800 font-semibold"
        >
          My Task
          <EmphasisText title="." />
        </span>
        <ul className="custom-list-marker sm:text-[1rem] text-sm font-normal text-slate-500 list-disc">
          {projectInfo.taskList.map((taskInfo) => (
            <li>{taskInfo}</li>
          ))}
        </ul>
        <span
          id="project-tech"
          className="sm:text-[1.3rem] text-lg text-slate-800 font-semibold"
        >
          Tech Stack
          <EmphasisText title="." />
        </span>
        <span
          id="project-info-contents"
          className="sm:text-[1rem] text-sm text-slate-500 font-normal"
        >
          {projectInfo.techStack}
          <EmphasisText title="." />
        </span>
      </div>
    </div>
  );
}

export default ProjectCard;
