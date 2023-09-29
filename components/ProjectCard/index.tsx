import Link from "next/link";
import { BsGithub } from "react-icons/bs";
import { BiLogoPlayStore } from "react-icons/bi";
import { CustomList } from "../CustomList";

export interface ProjectCardItem {
  id: string;
  name: string;
  description: string;
  contents?: string[];
  image: string;
  github?: string;
  storeLink?: string;
  projectLink: string;
}

export function ProjectCard({
  id,
  name,
  description,
  contents,
  image,
  github,
  storeLink,
  projectLink,
}: ProjectCardItem) {
  return (
    <Link href={projectLink}>
      <div
        key={id}
        className="my-8 dark:bg-slate-950 dark:rounded-2xl bg-white rounded-2xl hover:shadow-xl hover:shadow-blue-300 shadow-2xl dark:hover:shadow-blue-700 dark:hover:shadow-xl dark:shadow-blue-900 dark:shadow-xl transition duration-150 ease-out hover:ease-in"
      >
        <div className="flex flex-col md:flex-row">
          <div className=" md:w-1/2">
            <img
              src={image}
              className="hover:opacity-70 h-full w-full rounded-xl shadow-xl"
            />
          </div>
          <div className="md:mt-0 mt-8 md:w-1/2 md:py-12 text-start px-8 pb-4">
            <h1 className="text-2xl font-bold">{name}</h1>
            <p className="text-lg leading-7 mb-4 text-neutral-600 dark:text-neutral-400 mb-2">
              {description}
            </p>
            {contents ? <CustomList list={contents} /> : <></>}
            <div className=" mt-2 flex flex-row align-bottom">
              {github ? (
                <Link href={github}>
                  <BsGithub
                    size={24}
                    className="hover:-translate-y-1 transition-transform cursor-pointer"
                  />
                </Link>
              ) : (
                <></>
              )}
              {storeLink ? (
                <Link href={storeLink}>
                  <BiLogoPlayStore
                    size={24}
                    className="hover:-translate-y-1 transition-transform cursor-pointer"
                  />
                </Link>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
