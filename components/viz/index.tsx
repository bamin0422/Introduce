import { Fragment } from "react";
import { cn } from "@web/lib/utils";

/**
 * 경력·요약에 붙는 작은 도표들. 라이브러리 없이 CSS로 그린다.
 * 한 도표는 한 가지 값만 보여 주고, 색은 파랑 한 계열만 쓴다.
 */
export type Visual =
  | { kind: "bars"; title: string; unit?: string; items: { label: string; value: number; display?: string }[] }
  | { kind: "columns"; title: string; items: { label: string; value: number }[] }
  | { kind: "stack"; title: string; items: { label: string; value: number }[] }
  | { kind: "flow"; title: string; steps: FlowStep[] }
  | { kind: "compare"; title: string; before: Tile; after: Tile; note?: string };

type FlowStep = { label: string; sub?: string; kind?: "step" | "decision" | "end" };
type Tile = { value: string; label: string };

/** 진한 순서. 누적 막대는 큰 조각부터 진하게 칠한다 */
const RAMP = ["#1b64da", "#3182f6", "#90c2ff", "#c9e2ff"];

function Frame({ title, children, className }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <figure className={cn("rounded-2xl bg-muted p-5", className)}>
      <figcaption className="mb-4 text-[13px] font-semibold text-foreground">{title}</figcaption>
      {children}
    </figure>
  );
}

function Bars({ v }: { v: Extract<Visual, { kind: "bars" }> }) {
  const max = Math.max(...v.items.map((i) => i.value));
  return (
    <Frame title={v.title}>
      <ul className="space-y-2.5">
        {v.items.map((i) => {
          const text = i.display ?? `${i.value.toLocaleString()}${v.unit ?? ""}`;
          return (
            <li key={i.label} className="grid grid-cols-[minmax(0,8.5rem)_1fr_auto] items-center gap-3 text-xs" title={`${i.label}: ${text}`}>
              <span className="truncate text-muted-foreground">{i.label}</span>
              <span className="h-2.5 rounded-full bg-card">
                <span className="block h-full rounded-full bg-primary" style={{ width: `${Math.max(3, (i.value / max) * 100)}%` }} />
              </span>
              <span className="font-semibold tabular-nums text-foreground">{text}</span>
            </li>
          );
        })}
      </ul>
    </Frame>
  );
}

function Columns({ v }: { v: Extract<Visual, { kind: "columns" }> }) {
  const max = Math.max(...v.items.map((i) => i.value));
  return (
    <Frame title={v.title}>
      <div className="flex h-40 items-end gap-2">
        {v.items.map((i) => (
          <div key={i.label} className="flex h-full flex-1 flex-col items-center justify-end gap-1.5" title={`${i.label}: ${i.value}`}>
            <span className="text-xs font-semibold tabular-nums text-foreground">{i.value}</span>
            <span
              className={cn("w-full max-w-9 rounded-t-md", i.value === max ? "bg-primary" : "bg-[#90c2ff]")}
              style={{ height: `${(i.value / max) * 100}%` }}
            />
            <span className="text-[11px] text-muted-foreground">{i.label}</span>
          </div>
        ))}
      </div>
    </Frame>
  );
}

function Stack({ v }: { v: Extract<Visual, { kind: "stack" }> }) {
  const total = v.items.reduce((a, i) => a + i.value, 0);
  return (
    <Frame title={v.title}>
      <div className="flex h-3 gap-[2px] overflow-hidden rounded-full">
        {v.items.map((i, k) => (
          <span key={i.label} title={`${i.label}: ${i.value}%`} style={{ width: `${(i.value / total) * 100}%`, background: RAMP[k] }} />
        ))}
      </div>
      <ul className="mt-4 space-y-1.5">
        {v.items.map((i, k) => (
          <li key={i.label} className="flex items-center gap-2 text-xs">
            <span className="h-2.5 w-2.5 rounded-sm" style={{ background: RAMP[k] }} />
            <span className="text-muted-foreground">{i.label}</span>
            <span className="ml-auto font-semibold tabular-nums text-foreground">{i.value}%</span>
          </li>
        ))}
      </ul>
    </Frame>
  );
}

function Flow({ v }: { v: Extract<Visual, { kind: "flow" }> }) {
  return (
    <Frame title={v.title}>
      <ol className="flex flex-col items-stretch gap-1.5 sm:flex-row sm:flex-wrap sm:items-center">
        {v.steps.map((s, k) => (
          <Fragment key={s.label}>
            {k > 0 && (
              <li aria-hidden className="self-center text-muted-foreground/60">
                <span className="hidden sm:inline">→</span>
                <span className="sm:hidden">↓</span>
              </li>
            )}
            <li
              className={cn(
                "rounded-xl px-3 py-2 text-xs leading-snug",
                s.kind === "decision" && "border border-dashed border-primary/50 bg-secondary text-secondary-foreground",
                s.kind === "end" && "bg-primary text-primary-foreground",
                (!s.kind || s.kind === "step") && "bg-card text-foreground"
              )}
            >
              <span className="font-semibold">{s.label}</span>
              {s.sub && <span className={cn("block text-[11px]", s.kind === "end" ? "text-white/80" : "text-muted-foreground")}>{s.sub}</span>}
            </li>
          </Fragment>
        ))}
      </ol>
    </Frame>
  );
}

function Compare({ v }: { v: Extract<Visual, { kind: "compare" }> }) {
  return (
    <Frame title={v.title}>
      <div className="flex items-center gap-3">
        <div className="flex-1 rounded-xl bg-card px-4 py-3">
          <p className="text-[11px] text-muted-foreground">{v.before.label}</p>
          <p className="mt-1 text-xl font-extrabold tracking-tight text-muted-foreground">{v.before.value}</p>
        </div>
        <span aria-hidden className="text-muted-foreground/60">→</span>
        <div className="flex-1 rounded-xl bg-primary px-4 py-3 text-primary-foreground">
          <p className="text-[11px] text-white/80">{v.after.label}</p>
          <p className="mt-1 text-xl font-extrabold tracking-tight">{v.after.value}</p>
        </div>
      </div>
      {v.note && <p className="mt-3 text-xs text-muted-foreground">{v.note}</p>}
    </Frame>
  );
}

export function Viz({ v, className }: { v: Visual; className?: string }) {
  const body =
    v.kind === "bars" ? <Bars v={v} /> :
    v.kind === "columns" ? <Columns v={v} /> :
    v.kind === "stack" ? <Stack v={v} /> :
    v.kind === "flow" ? <Flow v={v} /> :
    <Compare v={v} />;
  return <div className={className}>{body}</div>;
}
