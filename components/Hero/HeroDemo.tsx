"use client";
import { useEffect, useRef, useState } from "react";
import { cn } from "@web/lib/utils";

/**
 * 히어로 오른쪽 데모. 영상 대신 실제 UI를 코드로 그려 해상도와 상관없이 선명하다.
 * 흐름: 코드 작성 → AI 리뷰 댓글 → 검사 통과 → 배포. 화면에 보일 때만 돌고, 끝나면 처음부터 반복한다.
 */
type Tok = [string, string?];
const C = { kw: "text-[#3182f6]", str: "text-[#03a364]", fn: "text-[#f57800]", mute: "text-[#8b95a1]" };

const CODE: Tok[][] = [
  [["import ", C.kw], ["DOMPurify "], ["from ", C.kw], ['"dompurify"', C.str], [";"]],
  [],
  [["export function ", C.kw], ["sanitizeMail", C.fn], ["(html: "], ["string", C.kw], [") {"]],
  [["  const ", C.kw], ["clean = DOMPurify."], ["sanitize", C.fn], ["(html, {"]],
  [["    FORBID_ATTR: ["], ['"ontoggle"', C.str], ["],"]],
  [["  });"]],
  [["  return ", C.kw], ["clean;"]],
  [["}"]],
];

const CHECKS = ["빌드", "타입 검사", "테스트 126개"];

/** 단계별 시각(ms). 마지막 값이 지나면 처음으로 돌아간다 */
const LINE_GAP = 260;
const T_REVIEW = CODE.length * LINE_GAP + 400;
const T_CHECKS = T_REVIEW + 1500;
const T_DEPLOY = T_CHECKS + CHECKS.length * 450 + 300;
const T_END = T_DEPLOY + 2600;

export default function HeroDemo() {
  const [t, setT] = useState(0);
  const [running, setRunning] = useState(true);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setT(T_END - 1);
      setRunning(false);
      return;
    }
    const io = new IntersectionObserver(([e]) => setRunning(e.isIntersecting), { threshold: 0.2 });
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (!running) return;
    const start = performance.now() - t;
    const id = window.setInterval(() => setT((performance.now() - start) % T_END), 100);
    return () => window.clearInterval(id);
    // t는 재개 시점만 쓰므로 의존성에서 뺀다
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running]);

  const on = (at: number) => t >= at;

  return (
    <div ref={ref} aria-hidden className="relative mx-auto w-full min-w-0 max-w-[520px] select-none pb-[150px]">
      {/* 에디터 */}
      <div className="overflow-hidden rounded-2xl bg-card shadow-[0_20px_50px_-20px_rgba(25,31,40,0.25)]">
        <div className="flex items-center gap-2 border-b border-border px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
          <span className="ml-3 rounded-md bg-muted px-2 py-0.5 font-mono text-[11px] text-muted-foreground">sanitizeMail.ts</span>
        </div>
        <pre className="overflow-hidden px-4 py-4 font-mono text-[11px] leading-[1.75] sm:text-[13px]">
          {CODE.map((line, i) => (
            <div
              key={i}
              className={cn("flex transition-all duration-300", on(i * LINE_GAP) ? "opacity-100" : "translate-x-1 opacity-0")}
            >
              <span className="mr-4 w-4 shrink-0 text-right text-[#b0b8c1]">{i + 1}</span>
              <code className={cn("whitespace-pre text-foreground", i === 4 && on(T_REVIEW) && "rounded bg-secondary")}>
                {line.map(([text, cls], k) => (
                  <span key={k} className={cls}>
                    {text}
                  </span>
                ))}
                {line.length === 0 && " "}
              </code>
            </div>
          ))}
        </pre>
      </div>

      {/* AI 리뷰 댓글 */}
      <div
        className={cn(
          "absolute bottom-[78px] right-0 w-[52%] rounded-xl bg-card p-3 shadow-[0_12px_30px_-12px_rgba(25,31,40,0.35)] transition-all duration-500",
          on(T_REVIEW) ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        )}
      >
        <div className="flex items-center gap-2">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">AI</span>
          <span className="text-[12px] font-semibold text-foreground">코드 리뷰</span>
          <span className="ml-auto rounded-md bg-[#fff3e0] px-1.5 py-0.5 text-[10px] font-semibold text-[#f57800]">P2</span>
        </div>
        <p className="mt-2 text-[12px] leading-snug text-muted-foreground">
          v1 필터와 이벤트 핸들러 80종을 대조했어요. ontoggle 차단이 빠져 있던 걸 막았습니다.
        </p>
      </div>

      {/* 검사 + 배포 */}
      <div
        className={cn(
          "absolute bottom-0 left-0 w-[46%] rounded-xl bg-card p-3 shadow-[0_12px_30px_-12px_rgba(25,31,40,0.35)] transition-all duration-500",
          on(T_CHECKS) ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
        )}
      >
        <ul className="space-y-1.5">
          {CHECKS.map((c, i) => {
            const done = on(T_CHECKS + (i + 1) * 450);
            return (
              <li key={c} className="flex items-center gap-2 text-[12px]">
                <span
                  className={cn(
                    "flex h-4 w-4 items-center justify-center rounded-full text-[10px] font-bold transition-colors duration-300",
                    done ? "bg-[#03b26c] text-white" : "bg-muted text-transparent"
                  )}
                >
                  ✓
                </span>
                <span className={done ? "text-foreground" : "text-muted-foreground"}>{c}</span>
                <span className="ml-auto text-[11px] text-muted-foreground">{done ? "통과" : "확인 중"}</span>
              </li>
            );
          })}
        </ul>
        <div
          className={cn(
            "mt-2.5 rounded-lg px-2.5 py-1.5 text-center text-[12px] font-semibold transition-all duration-500",
            on(T_DEPLOY) ? "bg-primary text-white" : "bg-muted text-muted-foreground"
          )}
        >
          {on(T_DEPLOY) ? "검수 배포 완료" : "배포 대기"}
        </div>
      </div>
    </div>
  );
}
