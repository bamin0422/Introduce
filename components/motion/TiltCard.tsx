"use client";
import { useReducedMotion } from "framer-motion";
import { useRef, type ReactNode, type MouseEvent } from "react";
import { cn } from "@web/lib/utils";

interface Props {
  children: ReactNode;
  className?: string;
}

/**
 * 마우스 위치에 따라 살짝 기울고, 커서를 따라가는 스포트라이트가 비치는 카드 래퍼.
 * 터치·reduced-motion 환경에서는 정적 카드로 동작한다.
 */
export default function TiltCard({ children, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el || reduced) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
    el.style.setProperty("--rx", `${(0.5 - y) * 4}deg`);
    el.style.setProperty("--ry", `${(x - 0.5) * 4}deg`);
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", "0deg");
    el.style.setProperty("--ry", "0deg");
  };

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={cn("tilt-card", className)}
    >
      {children}
    </div>
  );
}
