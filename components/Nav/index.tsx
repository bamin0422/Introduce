"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@web/lib/utils";

const SECTIONS = [
  { id: "skills", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "project", label: "Projects" },
  { id: "contact", label: "Contact" },
];

/** 상단 고정 네비 — 스크롤 진행 바 + 현재 섹션 하이라이트 */
export default function Nav() {
  const { scrollYProgress } = useScroll();
  const width = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  const [active, setActive] = useState<string>("");
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-transform duration-300",
        visible ? "translate-y-0" : "-translate-y-full"
      )}
    >
      <div className="border-b border-border/60 bg-background/80 backdrop-blur">
        <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
          <a href="#home" className="font-display text-sm tracking-tight">
            Daein Min
          </a>
          <ul className="flex gap-1 text-xs font-semibold">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <a
                  href={`#${s.id}`}
                  className={cn(
                    "rounded-full px-3 py-1 transition-colors",
                    active === s.id
                      ? "bg-gradient-to-r from-[hsl(var(--blue))] to-[hsl(var(--teal))] text-white"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      <motion.div
        style={{ scaleX: width, transformOrigin: "0 0" }}
        className="h-[2px] bg-gradient-to-r from-[hsl(var(--blue))] to-[hsl(var(--teal))]"
      />
    </div>
  );
}
