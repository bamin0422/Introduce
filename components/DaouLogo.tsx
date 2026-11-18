import { cn } from "@web/lib/utils";

/** 다우오피스 4.0 로고 — 아이콘 이미지 + 워드마크 텍스트 */
export default function DaouLogo({ className, size = "md" }: { className?: string; size?: "sm" | "md" }) {
  const icon = size === "sm" ? "h-5 w-5" : "h-9 w-9";
  const text = size === "sm" ? "text-sm" : "text-2xl";
  return (
    <span className={cn("inline-flex items-center gap-2", className)} aria-label="다우오피스 4.0">
      <img src="/images/daouoffice-40-icon.png" alt="" width={48} height={48} className={cn("shrink-0 object-contain", icon)} />
      <span className={cn("font-sans font-semibold tracking-tight text-foreground", text)}>
        다우오피스 <b className="font-black">4.0</b>
      </span>
    </span>
  );
}
