import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@web/components/ui/card";
import { Badge } from "@web/components/ui/badge";
import { ParLabel, ParList } from "@web/components/ui/par";
import { WorkInfo } from "../types";
import Reveal from "@web/components/motion/Reveal";
import TiltCard from "@web/components/motion/TiltCard";
import DaouLogo from "@web/components/DaouLogo";
import { Viz } from "@web/components/viz";

export interface Props {
  workInfo: WorkInfo;
}

export function WorkCard({ workInfo }: Props) {
  return (
    <div className="space-y-8">
      <Reveal>
        <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
          <h3 className="font-display text-xl tracking-tight">{workInfo.role}</h3>
          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            {workInfo.role === "Frontend Developer" && (
              <span className="glass glass-pill inline-flex items-center px-2.5 py-1">
                <DaouLogo size="sm" />
              </span>
            )}
            <span>{workInfo.title}</span>
            <span>·</span>
            <span>
              {workInfo.startDate} — {workInfo.endDate}
            </span>
          </div>
        </div>
      </Reveal>

      <div className="timeline space-y-4">
        {workInfo.details.map((detail) => (
          <Reveal key={detail.title} className="timeline-item">
          <TiltCard>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="text-base">{detail.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-5">
              <div>
                <ParLabel kind="P" />
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {detail.problem}
                </p>
              </div>
              <div>
                <ParLabel kind="A" />
                <ParList items={detail.actions} />
              </div>
              <div>
                <ParLabel kind="R" />
                <ParList items={detail.results} />
              </div>
              {detail.visuals && (
                <div className="grid gap-3 md:grid-cols-2">
                  {detail.visuals.map((v) => (
                    <Viz key={v.title} v={v} className={detail.visuals!.length === 1 || v.kind === "flow" ? "md:col-span-2" : undefined} />
                  ))}
                </div>
              )}
            </CardContent>
            <CardFooter className="flex-wrap gap-1.5">
              {detail.techStack.split(", ").map((tech) => (
                <Badge
                  key={tech}
                  variant="secondary"
                  className="text-xs font-normal"
                >
                  {tech}
                </Badge>
              ))}
            </CardFooter>
          </Card>
          </TiltCard>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default WorkCard;
