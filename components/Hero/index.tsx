import { ArrowDown } from "lucide-react";

const TAGLINE = "Learn once, write anywhere.";

const STATS = [
  { value: "3,498", label: "2026년 커밋" },
  { value: "552", label: "처리한 이슈" },
  { value: "28", label: "직접 만든 AI 스킬" },
  { value: "1~2분", label: "AI 리뷰 응답 시간" },
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
              그룹웨어 다우오피스의 프론트엔드를 만들고 운영합니다.
              보안과 안정성은 재현과 실측으로 챙기고, 반복되는 일은 AI 도구로 바꿉니다.
            </p>
            <dl className="mt-8 grid max-w-lg grid-cols-2 gap-3 sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label} className="glass rounded-2xl px-4 py-3">
                  <dt className="text-[11px] text-muted-foreground">{s.label}</dt>
                  <dd className="mt-1 text-lg font-extrabold tracking-tight text-foreground">{s.value}</dd>
                </div>
              ))}
            </dl>
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
