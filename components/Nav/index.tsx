"use client";
import { useEffect, useState } from "react";
import { cn } from "@web/lib/utils";

const SECTIONS = [
  { id: "overview", label: "2026" },
  { id: "skills", label: "일하는 방식" },
  { id: "work", label: "경력" },
  { id: "project", label: "프로젝트" },
];

/** 항상 보이는 상단 메뉴. 현재 보고 있는 섹션만 진하게 표시한다 */
export default function Nav() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    const els = SECTIONS.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-40% 0px -55% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 bg-card transition-shadow",
        scrolled && "shadow-[0_1px_0_hsl(var(--border))]"
      )}
    >
      <nav className="mx-auto flex h-16 max-w-5xl items-center gap-6 px-6">
        <a href="#home" className="text-[17px] font-bold tracking-tight text-foreground">
          민대인
        </a>
        <ul className="flex flex-1 gap-1 overflow-x-auto text-[15px] sm:gap-2">
          {SECTIONS.map((s) => (
            <li key={s.id} className="shrink-0">
              <a
                href={`#${s.id}`}
                className={cn(
                  "rounded-lg px-2.5 py-2 transition-colors hover:bg-muted",
                  active === s.id ? "font-semibold text-foreground" : "text-muted-foreground"
                )}
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          className="hidden shrink-0 rounded-lg bg-primary px-3.5 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-[#2272eb] sm:inline-block"
        >
          연락하기
        </a>
      </nav>
    </header>
  );
}
