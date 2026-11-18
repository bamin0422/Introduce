import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@web/components/ui/card";
import { Badge } from "@web/components/ui/badge";
import { ParLabel, ParList } from "@web/components/ui/par";
import { Button } from "@web/components/ui/button";
import { ExternalLink } from "lucide-react";
import { ProjectInfo } from "../types";

export interface Props {
  projectInfo: ProjectInfo;
}

export function ProjectCard({ projectInfo }: Props) {
  return (
    <Card className="flex flex-col h-full overflow-hidden">
      {projectInfo.image && (
        <a
          href={projectInfo.urlList?.[0]?.href}
          target="_blank"
          rel="noopener noreferrer"
          className="project-thumb"
          tabIndex={-1}
          aria-hidden
        >
          <img
            src={projectInfo.image}
            alt={projectInfo.imageAlt ?? projectInfo.title}
            loading="lazy"
          />
        </a>
      )}
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
