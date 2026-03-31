import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@web/components/ui/card";
import { Badge } from "@web/components/ui/badge";
import { WorkInfo } from "../types";

export interface Props {
  workInfo: WorkInfo;
}

export function WorkCard({ workInfo }: Props) {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
        <h3 className="text-xl font-bold tracking-tight">{workInfo.title}</h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>{workInfo.role}</span>
          <span>·</span>
          <span>{workInfo.startDate} — {workInfo.endDate}</span>
        </div>
      </div>

      <div className="space-y-4">
        {workInfo.details.map((detail) => (
          <Card key={detail.title} className="border-border/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-base">{detail.title}</CardTitle>
              <CardDescription className="leading-relaxed">
                {detail.info}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="text-sm font-medium mb-2">My Task</h4>
                <ul className="space-y-1.5">
                  {detail.myTaskList.map((task, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted-foreground leading-relaxed pl-4 relative before:content-['·'] before:absolute before:left-0 before:text-muted-foreground/60"
                    >
                      {task}
                    </li>
                  ))}
                </ul>
              </div>
            </CardContent>
            <CardFooter className="flex-wrap gap-1.5">
              {detail.techStack.split(", ").map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs font-normal">
                  {tech}
                </Badge>
              ))}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default WorkCard;
