import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@web/components/ui/card";
import { Badge } from "@web/components/ui/badge";
import { Button } from "@web/components/ui/button";
import { ExternalLink } from "lucide-react";
import { ProjectInfo } from "../types";

export interface Props {
  projectInfo: ProjectInfo;
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
        <CardDescription className="leading-relaxed">
          {projectInfo.info}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1 space-y-4">
        <div>
          <h4 className="text-sm font-medium mb-2">My Task</h4>
          <ul className="space-y-1">
            {projectInfo.taskList.map((task, i) => (
              <li
                key={i}
                className="text-sm text-muted-foreground leading-relaxed pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-muted-foreground/60"
              >
                {task}
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {projectInfo.techStack.split(", ").map((tech) => (
            <Badge key={tech} variant="secondary" className="text-xs font-normal">
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
