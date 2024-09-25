import { EmphasisText } from "../../EmphasisText";
import { WorkInfo } from "../types";

export interface Props {
  workInfo: WorkInfo;
}

export function WorkCard({ workInfo }: Props) {
  return (
    <div className="sm:grid sm:items-stretch sm:grid-cols-3 gap-1">
      <div
        id="company"
        className="flex flex-col justify-start pe-1 sm:col-span-1"
      >
        <h3 className="text-[1.8rem] text-black font-semibold">
          {workInfo.title}
          <EmphasisText title="." />
        </h3>
        <span className="sm:text-[1.3rem] text-sm text-slate-500" id="role">
          {workInfo.role}
        </span>
        <span className="sm:text-[1rem] text-sm text-slate-500" id="datetime">
          {`${workInfo.startDate} ~ ${workInfo.endDate}`}
        </span>
      </div>
      <div className="flex flex-col gap-10 sm:col-span-2">
        {workInfo.details.map((detailInfo) => (
          <div
            key={`project-${detailInfo.title}`}
            id="project"
            className="flex flex-col w-full sm:gap-2 gap-1"
          >
            <h4
              id="project-emp"
              className="sm:text-[1.8rem] text-[18px] text-black font-semibold"
            >
              {detailInfo.title}
              <EmphasisText title="." />
            </h4>
            <span
              id="project-info-contents"
              className="bg-orange-500 px-4 py-2 rounded-xl sm:text-[1rem] text-sm text-white font-normal leading-7"
            >
              {detailInfo.info}
            </span>
            <span
              id="project-"
              className="sm:text-[1.3rem] text-lg text-slate-800 font-semibold"
            >
              My Task
              <EmphasisText title="." />
            </span>
            <ul className="ps-[1rem] sm:text-[1rem] text-sm font-normal text-slate-500 list-disc leading-7">
              {detailInfo.myTaskList.map((taskInfo) => (
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
              {detailInfo.techStack}
              <EmphasisText title="." />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WorkCard;
