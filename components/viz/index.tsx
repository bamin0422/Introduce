"use client";
import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { cn } from "@web/lib/utils";

/**
 * 경력·요약에 붙는 작은 도표들. 라이브러리 없이 CSS로 그린다.
 * - 처음 화면에 들어오면 막대가 차오르고 흐름도가 순서대로 나타난다(.viz[data-in], globals.css)
 * - 마우스를 올리거나 키보드로 포커스하면 정확한 수치를 말풍선으로 보여 준다
 */
export type Visual =
  | { kind: "bars"; title: string; unit?: string; max?: number; items: BarItem[] }
  | { kind: "columns"; title: string; unit?: string; items: { label: string; value: number; detail?: string }[] }
  | { kind: "stack"; title: string; total?: number; unit?: string; items: { label: string; value: number }[] }
  | { kind: "flow"; title: string; steps: FlowStep[] }
  | { kind: "compare"; title: string; before: Tile; after: Tile; note?: string };

type BarItem = { label: string; value: number; display?: string; exact?: string; detail?: string };
type FlowStep = { label: string; sub?: string; kind?: "step" | "decision" | "end"; branch?: string };
type Tile = { value: string; label: string };

/** 누적 막대 조각 색. 큰 조각부터 진하게 */
const RAMP = ["#1b64da", "#3182f6", "#90c2ff", "#c9e2ff"];

const delay = (k: number, step = 70): CSSProperties => ({ transitionDelay: `${k * step}ms` });

/** 처음 화면에 들어온 순간 data-in을 붙인다(한 번만) */
function useInView<T extends Element>() {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, inView };
}

/** 마우스 오버·포커스 때 뜨는 말풍선 */
function Tip({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <span
      role="tooltip"
      className={cn(
        "pointer-events-none absolute bottom-full left-1/2 z-20 mb-2 w-max max-w-[16rem] -translate-x-1/2 translate-y-1 rounded-lg bg-[#191f28] px-2.5 py-1.5 text-[11px] leading-snug text-white opacity-0 shadow-lg transition duration-150 group-hover:translate-y-0 group-hover:opacity-100 group-focus-visible:translate-y-0 group-focus-visible:opacity-100",
        className
      )}
    >
      {children}
    </span>
  );
}

function Frame({ title, children, className }: { title: string; children: ReactNode; className?: string }) {
  const { ref, inView } = useInView<HTMLElement>();
  return (
    <figure ref={ref} data-in={inView || undefined} className={cn("viz rounded-2xl bg-muted p-5", className)}>
      <figcaption className="mb-4 text-[13px] font-semibold text-foreground">{title}</figcaption>
      {children}
    </figure>
  );
}

function Bars({ v }: { v: Extract<Visual, { kind: "bars" }> }) {
  const max = v.max ?? Math.max(...v.items.map((i) => i.value));
  return (
    <Frame title={v.title}>
      <ul className="space-y-2.5">
        {v.items.map((i, k) => {
          const text = i.display ?? `${i.value.toLocaleString()}${v.unit ?? ""}`;
          return (
            <li
              key={i.label}
              tabIndex={0}
              className="group relative grid grid-cols-[minmax(0,8.5rem)_1fr_auto] items-center gap-3 rounded-md text-xs outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
            >
              <span className="truncate text-muted-foreground">{i.label}</span>
              <span className="relative h-2.5 rounded-full bg-card">
                <span
                  data-grow-x
                  style={{ width: `${Math.max(3, (i.value / max) * 100)}%`, ...delay(k) }}
                  className="block h-full rounded-full bg-primary transition-colors group-hover:bg-[#1b64da]"
                />
                <Tip>
                  <b className="font-semibold">{i.label}</b> · {i.exact ?? text}
                  {i.detail && <span className="mt-0.5 block text-white/70">{i.detail}</span>}
                </Tip>
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
  const total = v.items.reduce((a, i) => a + i.value, 0);
  return (
    <Frame title={v.title}>
      <div className="flex h-44 items-end gap-2">
        {v.items.map((i, k) => (
          <div
            key={i.label}
            tabIndex={0}
            className="group relative flex h-full flex-1 flex-col items-center justify-end gap-1.5 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
          >
            <span data-fade style={delay(k, 80)} className="text-xs font-semibold tabular-nums text-foreground">
              {i.value}
            </span>
            <span
              data-grow-y
              className={cn(
                "w-full max-w-9 rounded-t-md transition-colors group-hover:bg-[#1b64da]",
                i.value === max ? "bg-primary" : "bg-[#90c2ff]"
              )}
              style={{ height: `${(i.value / max) * 100}%`, ...delay(k, 80) }}
            />
            <span className="text-[11px] text-muted-foreground">{i.label}</span>
            <Tip className="bottom-[calc(100%-1rem)]">
              <b className="font-semibold">{i.label}</b> · {i.value}
              {v.unit ?? ""} (전체 {total}
              {v.unit ?? ""} 중 {Math.round((i.value / total) * 100)}%)
              {i.detail && <span className="mt-0.5 block text-white/70">{i.detail}</span>}
            </Tip>
          </div>
        ))}
      </div>
    </Frame>
  );
}

function Stack({ v }: { v: Extract<Visual, { kind: "stack" }> }) {
  const sum = v.items.reduce((a, i) => a + i.value, 0);
  const count = (pct: number) =>
    v.total ? ` · 약 ${Math.round((v.total * pct) / 100).toLocaleString()}${v.unit ?? ""}` : "";
  return (
    <Frame title={v.title}>
      <div className="flex h-3.5 gap-[2px] rounded-full">
        {v.items.map((i, k) => (
          <span
            key={i.label}
            tabIndex={0}
            data-grow-x
            className={cn(
              "group relative outline-none transition-[filter] hover:brightness-110 focus-visible:brightness-110",
              k === 0 && "rounded-l-full",
              k === v.items.length - 1 && "rounded-r-full"
            )}
            style={{ width: `${(i.value / sum) * 100}%`, background: RAMP[k], ...delay(k, 120) }}
          >
            <Tip>
              <b className="font-semibold">{i.label}</b> · {i.value}%{count(i.value)}
            </Tip>
          </span>
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

function Marker({ s, n }: { s: FlowStep; n: number }) {
  return (
    <span
      className={cn(
        "relative z-10 flex h-9 w-9 shrink-0 items-center justify-center text-sm font-bold",
        s.kind === "decision"
          ? "rotate-45 rounded-lg border-2 border-primary bg-card text-primary"
          : s.kind === "end"
            ? "rounded-full bg-primary text-primary-foreground shadow-[0_0_0_6px_hsl(var(--primary)/0.15)]"
            : "rounded-full border-2 border-primary bg-card text-primary"
      )}
    >
      <span className={s.kind === "decision" ? "-rotate-45" : undefined}>
        {s.kind === "decision" ? "?" : s.kind === "end" ? "✓" : n}
      </span>
    </span>
  );
}

function Flow({ v }: { v: Extract<Visual, { kind: "flow" }> }) {
  return (
    <Frame title={v.title}>
      <ol
        className="relative grid gap-4 sm:gap-3"
        style={{ gridTemplateColumns: `repeat(${v.steps.length}, minmax(0, 1fr))` }}
      >
        {/* 진행선: 처음 보일 때 왼쪽부터 그려지고, 점 하나가 흐름을 따라 계속 흐른다 */}
        <span aria-hidden className="absolute left-[calc(50%/var(--n))] right-[calc(50%/var(--n))] top-[17px] hidden h-[3px] rounded-full bg-border sm:block" style={{ "--n": v.steps.length } as CSSProperties}>
          <span data-grow-x className="block h-full rounded-full bg-primary" style={{ transitionDuration: "1.4s" }} />
          <span data-flow-dot className="absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-primary shadow-[0_0_0_4px_hsl(var(--primary)/0.2)]" />
        </span>
        {v.steps.map((s, k) => (
          <li
            key={s.label}
            data-rise
            style={delay(k, 160)}
            className="relative col-span-full flex items-start gap-3 sm:col-span-1 sm:flex-col sm:items-center sm:text-center"
          >
            {/* 모바일 세로 진행선 */}
            {k < v.steps.length - 1 && (
              <span aria-hidden className="absolute left-[17px] top-9 h-[calc(100%-1.25rem)] w-[3px] rounded-full bg-primary/30 sm:hidden" />
            )}
            <Marker s={s} n={k + 1} />
            <div
              className={cn(
                "flex-1 rounded-xl px-3 py-2.5 text-xs leading-snug transition-transform hover:-translate-y-0.5 sm:w-full",
                s.kind === "decision" && "border border-dashed border-primary/60 bg-secondary text-secondary-foreground",
                s.kind === "end" && "bg-primary text-primary-foreground shadow-[0_6px_16px_-6px_hsl(var(--primary)/0.6)]",
                (!s.kind || s.kind === "step") && "bg-card text-foreground shadow-sm"
              )}
            >
              <span className="block font-semibold">{s.label}</span>
              {s.sub && (
                <span className={cn("mt-0.5 block text-[11px]", s.kind === "end" ? "text-white/80" : "text-muted-foreground")}>
                  {s.sub}
                </span>
              )}
              {s.branch && (
                <span className="mt-1.5 inline-flex items-center gap-1 rounded-md bg-card px-1.5 py-0.5 text-[10px] font-semibold text-muted-foreground">
                  아니오 → {s.branch}
                </span>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Frame>
  );
}

function Compare({ v }: { v: Extract<Visual, { kind: "compare" }> }) {
  return (
    <Frame title={v.title}>
      <div className="flex items-center gap-3">
        <div data-rise className="flex-1 rounded-xl bg-card px-4 py-3">
          <p className="text-[11px] text-muted-foreground">{v.before.label}</p>
          <p className={cn("mt-1 font-extrabold tracking-tight [overflow-wrap:anywhere] text-muted-foreground line-through decoration-1", v.before.value.length > 14 ? "font-mono text-sm" : "text-xl")}>{v.before.value}</p>
        </div>
        <span data-rise style={delay(2, 120)} aria-hidden className="text-lg text-primary">→</span>
        <div data-rise style={delay(4, 120)} className="flex-1 rounded-xl bg-primary px-4 py-3 text-primary-foreground shadow-[0_6px_16px_-6px_hsl(var(--primary)/0.6)]">
          <p className="text-[11px] text-white/80">{v.after.label}</p>
          <p className="mt-1 text-xl font-extrabold tracking-tight [overflow-wrap:anywhere]">{v.after.value}</p>
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
