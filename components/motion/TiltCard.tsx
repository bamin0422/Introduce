import type { ReactNode } from "react";
import { cn } from "@web/lib/utils";

/** 호버 시 살짝 떠오르는 카드 래퍼. 효과는 globals.css의 .tilt-card에 있다. */
export default function TiltCard({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("tilt-card", className)}>{children}</div>;
}
