"use client";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import { PLATFORMS } from "./GlassField";
import SignalFieldGate from "./SignalFieldGate";

const TAGLINE = "Learn once, write anywhere.";

export default function Hero() {
  const reduced = useReducedMotion() ?? false;
  const ease = [0.22, 1, 0.36, 1] as const;

  return (
    <section id="home" className="relative overflow-hidden" aria-label="소개">
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-between px-6 pb-10 pt-8">
        <header className="flex items-center justify-between text-sm text-muted-foreground">
          <span className="font-display text-foreground">Daein Min</span>
          <span className="hidden sm:inline">Frontend Developer · Seoul</span>
        </header>

        <div className="grid items-center gap-10 py-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:gap-6">
          {/* 텍스트 */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease }}
              className="glass glass-pill mb-6 inline-flex items-center gap-3 py-1.5 pl-1.5 pr-4"
            >
              <img
                src="/introduce.png"
                alt="민대인 프로필 사진"
                className="h-10 w-10 rounded-full border border-white bg-white object-cover object-top"
              />
              <span className="text-xs font-semibold text-foreground">다우기술 · Frontend Developer</span>
            </motion.div>

            <motion.p
              className="font-display text-[clamp(1.5rem,3.2vw,2.3rem)] leading-[1.1] tracking-tight text-primary"
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
                        transition={{ delay: reduced ? 0 : 0.3 + (offset + ci) * 0.025, duration: 0.35 }}
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
              className="mt-3 text-[clamp(3.4rem,8vw,6rem)] font-black leading-[0.95] tracking-[-0.04em] text-foreground"
            >
              민대인
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: reduced ? 0 : 1, duration: 0.6 }}
              className="mt-6 max-w-lg text-[15px] leading-relaxed text-muted-foreground md:text-base"
            >
              React·Next.js로 기업용 SaaS 그룹웨어의 프론트엔드를 설계하고
              운영합니다. 모노레포와 디자인 시스템, SSR부터 Electron 데스크톱,
              WebView 브릿지, MCP·Claude Code 스킬까지 — 한 번 익힌 원칙을
              어디서든 같은 밀도로 씁니다.
            </motion.p>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="다뤄온 플랫폼">
              {PLATFORMS.map((p, i) => (
                <motion.li
                  key={p.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: reduced ? 0 : 1.2 + i * 0.1 }}
                  className="glass glass-pill px-3 py-1 text-xs font-medium text-foreground/85"
                >
                  {p.label}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Liquid Glass 3D */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease }}
            className="relative -mx-6 h-[340px] sm:h-[420px] md:mx-0 md:h-[560px]"
            aria-hidden
          >
            <SignalFieldGate reduced={reduced} />
          </motion.div>
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
