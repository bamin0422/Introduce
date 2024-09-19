import clsx from "clsx";

interface Props {
  title: string;
  className?: string;
}

export function EmphasisText({ title, className }: Props) {
  return <span className={clsx("text-orange-500", className)}>{title}</span>;
}
