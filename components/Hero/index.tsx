import { ArrowDown } from "lucide-react";

const TAGLINE = "Learn once, write anywhere.";

const PLATFORMS = [
  "React · Next.js",
  "Design System",
  "Electron",
  "WebView Bridge",
  "MCP · Claude Code",
  "Android",
];

/** 첫 화면은 JS 없이도 바로 보이도록 진입 애니메이션 없이 정적으로 그린다. */
export default function Hero() {
  return (
    <section id="home" className="relative" aria-label="소개">
      <div className="mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-between px-6 pb-10 pt-8">
        <header className="flex items-center justify-between text-sm text-muted-foreground">
          <span className="font-display text-foreground">Daein Min</span>
          <span className="hidden sm:inline">Frontend Developer · Seoul</span>
        </header>

        <div className="grid items-center gap-10 py-10 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-6">
          <div>
            <div className="glass glass-pill mb-6 inline-flex items-center gap-3 py-1.5 pl-1.5 pr-4 shadow-sm">
              <img
                src="/introduce-sm.png"
                alt="민대인 프로필 사진"
                width={40}
                height={40}
                className="h-10 w-10 rounded-full bg-white object-cover object-top"
              />
              <span className="text-xs font-semibold text-foreground">다우기술 · Frontend Developer</span>
            </div>

            <p className="font-display text-[clamp(1.4rem,3vw,2.1rem)] leading-[1.15] text-primary">
              {TAGLINE}
            </p>
            <h1 className="mt-3 text-[clamp(3.4rem,8vw,6rem)] font-extrabold leading-[0.95] tracking-[-0.04em] text-foreground">
              민대인
            </h1>
            <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-muted-foreground md:text-base">
              React·Next.js로 기업용 SaaS 그룹웨어의 프론트엔드를 설계하고
              운영합니다. 모노레포와 디자인 시스템, SSR부터 Electron 데스크톱,
              WebView 브릿지, MCP·Claude Code 스킬까지 — 한 번 익힌 원칙을
              어디서든 같은 밀도로 씁니다.
            </p>
            <ul className="mt-6 flex flex-wrap gap-2" aria-label="다뤄온 플랫폼">
              {PLATFORMS.map((p) => (
                <li key={p} className="glass glass-pill px-3 py-1 text-xs font-medium text-foreground/80">
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="overflow-hidden rounded-3xl bg-card shadow-sm">
            {/* 포스터가 먼저 보이고, 영상은 받아지는 대로 이어서 재생된다 */}
            <video
              src="/images/hero.mp4"
              poster="/images/hero-poster.webp"
              width={1280}
              height={720}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              aria-hidden
              className="aspect-video h-auto w-full object-cover"
            />
          </div>
        </div>

        <a
          href="#skills"
          className="group inline-flex w-fit items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground"
        >
          <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5 motion-safe:animate-bounce" />
          아래로
        </a>
      </div>
    </section>
  );
}
