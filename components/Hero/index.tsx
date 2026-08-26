"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { PLATFORMS } from "./SignalField";
import SignalFieldGate from "./SignalFieldGate";

const TAGLINE = "Learn once, write anywhere.";

export default function Hero() {
  const reduced = useReducedMotion() ?? false;
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section
      id="home"
      className="relative min-h-[100svh] overflow-hidden"
      aria-label="소개"
    >
      <div className="absolute inset-0 opacity-50 md:opacity-90">
        <SignalFieldGate reduced={reduced} />
      </div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-background" />

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-between px-6 pb-10 pt-8">
        <header className="flex items-center justify-between text-sm text-muted-foreground">
          <span className="font-display text-foreground">Daein Min</span>
          <span className="hidden sm:inline">Frontend Developer · Seoul</span>
        </header>

        <div className="grid items-center gap-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.25fr)] md:gap-16">
          {/* 사진 */}
          <motion.figure
            initial={{ opacity: 0, scale: 0.92, rotate: -3 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, ease }}
            className="relative mx-auto w-[min(72vw,320px)] md:w-full md:max-w-[380px]"
          >
            <div className="ring-gradient absolute -inset-[3px] rounded-[2rem] opacity-90 blur-[1px]" />
            <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-[hsl(var(--accent))] to-white shadow-[0_30px_60px_-30px_hsl(var(--blue)/0.45)]">
              <img
                src="/introduce.png"
                alt="민대인 프로필 사진"
                className="aspect-[4/5] w-full object-cover object-top"
              />
            </div>
            <motion.figcaption
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.5 }}
              className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-border bg-white/90 px-3 py-1 text-[11px] font-semibold sm:px-4 sm:py-1.5 sm:text-xs text-foreground shadow-sm backdrop-blur"
            >
              다우기술 · Frontend Developer
            </motion.figcaption>
          </motion.figure>

          {/* 텍스트 */}
          <div>
            <motion.p
              className="font-display text-gradient text-[clamp(1.5rem,3.4vw,2.4rem)] leading-[1.1] tracking-tight"
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
                          delay: reduced ? 0 : 0.3 + (offset + ci) * 0.025,
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
              transition={{ delay: reduced ? 0 : 0.1, duration: 0.7, ease }}
              className="mt-3 text-[clamp(3.4rem,9vw,6.5rem)] font-black leading-[0.95] tracking-[-0.04em] text-foreground"
            >
              민대인
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: reduced ? 0 : 1, duration: 0.6 }}
              className="mt-6 max-w-lg text-[15px] leading-relaxed text-muted-foreground md:text-base"
            >
              하나의 기술을 배워 여러 환경에 녹여냅니다. 안드로이드에서 시작해
              React·Next.js 기반 기업용 SaaS 그룹웨어를 설계·운영하고, 지금은
              Electron 앱과 MCP·Claude Code 스킬까지 같은 원칙으로 만듭니다.
            </motion.p>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="다뤄온 플랫폼">
              {PLATFORMS.map((p, i) => (
                <motion.li
                  key={p.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: reduced ? 0 : 1.2 + i * 0.1 }}
                  className="rounded-full border border-[hsl(var(--teal)/0.35)] bg-white/70 px-3 py-1 text-xs font-medium text-[hsl(var(--teal-deep))] backdrop-blur"
                >
                  {p.label}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        <motion.a
          href="#skills"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: reduced ? 0 : 1.8 }}
          className="group inline-flex w-fit items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground"
        >
          <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5 motion-safe:animate-bounce" />
          아래로
        </motion.a>
      </div>
    </section>
  );
}
