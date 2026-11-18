import { cn } from "@web/lib/utils";

const LABEL = { P: "문제", A: "해결", R: "결과" } as const;
const TONE = {
  P: "bg-muted text-muted-foreground",
  A: "bg-secondary text-secondary-foreground",
  R: "bg-[#f0faf6] text-[#03a364]",
} as const;

/** 문제·해결·결과 구분 태그 */
export function ParLabel({ kind }: { kind: keyof typeof LABEL }) {
  return (
    <span className={cn("mb-2 inline-flex rounded-lg px-2 py-0.5 text-xs font-semibold", TONE[kind])}>
      {LABEL[kind]}
    </span>
  );
}

export function ParList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-1.5">
      {items.map((item, i) => (
        <li
          key={i}
          className="relative pl-4 text-sm leading-relaxed text-muted-foreground before:absolute before:left-0 before:top-[0.7em] before:h-1 before:w-1 before:rounded-full before:bg-muted-foreground/50"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}
