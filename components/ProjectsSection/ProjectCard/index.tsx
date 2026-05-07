import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@web/components/ui/card";
import { Badge } from "@web/components/ui/badge";
import { Button } from "@web/components/ui/button";
import { ExternalLink } from "lucide-react";
import { ProjectInfo } from "../types";

export interface Props {
  projectInfo: ProjectInfo;
}

const PAR_LABEL: Record<"P" | "A" | "R", string> = {
  P: "P | 문제 상황",
  A: "A | 해결 방안",
  R: "R | 적용 및 검증",
};

const PAR_TONE: Record<"P" | "A" | "R", string> = {
  P: "text-rose-600 dark:text-rose-400",
  A: "text-blue-600 dark:text-blue-400",
  R: "text-emerald-600 dark:text-emerald-400",
};

function ParLabel({ kind }: { kind: "P" | "A" | "R" }) {
  return (
    <h4
      className={`text-xs font-semibold tracking-wide uppercase mb-2 ${PAR_TONE[kind]}`}
    >
      {PAR_LABEL[kind]}
    </h4>
  );
}

function ParList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1">
      {items.map((item, i) => (
        <li
          key={i}
          className="text-sm text-muted-foreground leading-relaxed pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-muted-foreground/60"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function ProjectCard({ projectInfo }: Props) {
  return (
    <Card className="border-border/50 flex flex-col">
      <CardHeader>
        <div className="flex items-baseline justify-between">
          <CardTitle className="text-base">{projectInfo.title}</CardTitle>
          <span className="text-xs text-muted-foreground whitespace-nowrap ml-2">
            {projectInfo.startDate} — {projectInfo.endDate}
          </span>
        </div>
      </CardHeader>
      <CardContent className="flex-1 space-y-5">
        <div>
          <ParLabel kind="P" />
          <p className="text-sm text-muted-foreground leading-relaxed">
            {projectInfo.problem}
          </p>
        </div>
        <div>
          <ParLabel kind="A" />
          <ParList items={projectInfo.actions} />
        </div>
        <div>
          <ParLabel kind="R" />
          <ParList items={projectInfo.results} />
        </div>
        <div className="flex flex-wrap gap-1.5 pt-1">
          {projectInfo.techStack.split(", ").map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="text-xs font-normal"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      {projectInfo.urlList && projectInfo.urlList.length > 0 && (
        <CardFooter className="flex-wrap gap-2">
          {projectInfo.urlList.map((link) => (
            <Button key={link.name} variant="outline" size="sm" asChild>
              <a href={link.href} target="_blank" rel="noopener noreferrer">
                {link.name}
                <ExternalLink className="ml-1.5 h-3 w-3" />
              </a>
            </Button>
          ))}
        </CardFooter>
      )}
    </Card>
  );
}

export default ProjectCard;
