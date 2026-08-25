"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { PLATFORMS } from "./SignalField";

import SignalFieldGate from "./SignalFieldGate";

const TAGLINE = "Learn once, write anywhere.";

export default function Hero() {
  const reduced = useReducedMotion() ?? false;

  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden"
      aria-label="소개"
    >
      <div className="absolute inset-0 opacity-60 md:opacity-100">
        <SignalFieldGate reduced={reduced} />
      </div>
      {/* 하단 페이드로 본문과 자연스럽게 연결 */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-5xl flex-col justify-between px-6 pb-10 pt-8">
        <header className="flex items-center justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
          <span>Daein Min — Frontend</span>
          <span className="hidden sm:inline">Seoul · since 2022</span>
        </header>

        <div className="grid items-end gap-10 md:grid-cols-[1.1fr_1fr]">
          <div>
            <motion.p
              className="font-display text-[clamp(1.6rem,3.6vw,2.6rem)] leading-[1.05] tracking-tight text-foreground"
              aria-label={TAGLINE}
            >
              {TAGLINE.split(" ").map((word, wi, words) => {
                const offset = words.slice(0, wi).join(" ").length + (wi ? 1 : 0);
                return (
                  <span key={wi} className="inline-block whitespace-nowrap">
                    {word.split("").map((ch, ci) => (
                      <motion.span
                        key={ci}
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          delay: reduced ? 0 : 0.35 + (offset + ci) * 0.028,
                          duration: 0.35,
                        }}
                        className="inline-block"
                      >
                        {ch}
                      </motion.span>
                    ))}
                    {wi < words.length - 1 && <span className="inline-block w-[0.3em]" />}
                  </span>
                );
              })}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduced ? 0 : 0.1, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 text-[clamp(4rem,14vw,9.5rem)] font-black leading-[0.9] tracking-[-0.04em] text-foreground"
            >
              민대인
            </motion.h1>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: reduced ? 0 : 1.2, duration: 0.6 }}
            className="md:justify-self-end md:text-right"
          >
            <p className="max-w-md text-[15px] leading-relaxed text-muted-foreground md:ml-auto">
              하나의 기술을 배워 여러 환경에 녹여냅니다. 안드로이드에서 시작해
              React·Next.js 기반 기업용 SaaS 그룹웨어를 설계·운영하고, 지금은
              Electron 앱과 MCP·Claude Code 스킬까지 같은 원칙으로 만듭니다.
            </p>
            <ul className="mt-5 flex flex-wrap gap-2 md:justify-end" aria-label="다뤄온 플랫폼">
              {PLATFORMS.map((p, i) => (
                <motion.li
                  key={p.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: reduced ? 0 : 1.4 + i * 0.12 }}
                  className="rounded-full border border-border bg-background/70 px-3 py-1 font-mono text-[11px] tracking-wider text-foreground backdrop-blur"
                >
                  {p.label}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.a
          href="#skills"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reduced ? 0 : 2 }}
          className="group inline-flex w-fit items-center gap-2 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground hover:text-foreground"
        >
          <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5 motion-safe:animate-bounce" />
          Scroll
        </motion.a>
      </div>
    </section>
  );
}
