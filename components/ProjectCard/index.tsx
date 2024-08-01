import Link from "next/link";

export interface ProjectCardItem {
  id: string;
  name: string;
  description: string;
  contents?: string[];
  image: string;
  github?: string;
  storeLink?: string;
  projectLink: string;
  linkUrl?: string;
}

export function ProjectCard({
  id,
  name,
  description,
  contents,
  image,
  github,
  storeLink,
  linkUrl,
}: ProjectCardItem) {
  return (
    <Link
      href={linkUrl ?? ""}
      key={id}
      className="md:h-[174px] h-[138px] dark:bg-slate-950 dark:rounded-2xl rounded-2xl hover:shadow-xl hover:shadow-blue-300 shadow-2xl dark:hover:shadow-blue-700 dark:hover:shadow-xl dark:shadow-blue-900 dark:shadow-xl transition duration-150 ease-out hover:ease-in"
    >
      <img src={image} className="w-full h-full rounded-xl shadow-xl" alt="" />
    </Link>
  );
}
