import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@web/components/ui/card";
import { Badge } from "@web/components/ui/badge";
import { WorkInfo } from "../types";

export interface Props {
  workInfo: WorkInfo;
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
    <ul className="space-y-1.5">
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

export function WorkCard({ workInfo }: Props) {
  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
        <h3 className="text-xl font-bold tracking-tight">{workInfo.title}</h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>{workInfo.role}</span>
          <span>·</span>
          <span>
            {workInfo.startDate} — {workInfo.endDate}
          </span>
        </div>
      </div>

      <div className="space-y-4">
        {workInfo.details.map((detail) => (
          <Card key={detail.title} className="border-border/50">
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
        ))}
      </div>
    </div>
  );
}

export default WorkCard;
