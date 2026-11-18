import { ArrowDown } from "lucide-react";

/** 영상 바탕색. 히어로 바탕을 같은 색으로 깔아 영상 테두리가 보이지 않게 한다 */
const VIDEO_BG = "#eceeef";

/**
 * 첫 화면. 영상은 원본 비율 그대로(object-contain) 히어로 오른쪽 전체 높이에 두고,
 * 글자는 JS 없이도 바로 보이게 정적으로 그린다.
 */
export default function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden" style={{ background: VIDEO_BG }} aria-label="소개">
      <video
        src="/images/hero.mp4"
        poster="/images/hero-poster.webp"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden
        className="absolute inset-x-0 bottom-14 -z-10 h-[34%] w-full object-contain md:inset-y-0 md:left-[40%] md:right-0 md:h-full md:w-auto"
      />
      <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-gradient-to-t from-background to-transparent" />

      <div className="mx-auto flex min-h-[100svh] max-w-5xl flex-col justify-between px-6 pb-10 pt-28 md:justify-center md:pt-16">
        <div className="max-w-xl">
          <div className="mb-6 inline-flex items-center gap-3 rounded-full bg-card py-1.5 pl-1.5 pr-4">
            <img
              src="/introduce-sm.png"
              alt="민대인 프로필 사진"
              width={36}
              height={36}
              className="h-9 w-9 rounded-full bg-white object-cover object-top"
            />
            <span className="text-[13px] font-semibold text-foreground">다우기술 · Frontend Developer</span>
          </div>

          <p className="text-[clamp(1.25rem,2.6vw,1.75rem)] font-bold tracking-tight text-primary">
            Learn once, write anywhere.
          </p>
          <h1 className="mt-2 text-[clamp(3rem,7vw,5.25rem)] font-extrabold leading-none tracking-[-0.04em] text-foreground">
            민대인
          </h1>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
            그룹웨어 다우오피스의 프론트엔드를 만들고 운영합니다.{" "}
            <br className="hidden sm:block" />
            보안과 안정성은 재현과 실측으로 챙기고, 반복되는 일은 AI 도구로 바꿉니다.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            <a href="#work" className="rounded-xl bg-primary px-5 py-3 text-[15px] font-semibold text-primary-foreground transition-colors hover:bg-[#2272eb]">
              경력 보기
            </a>
            <a href="#contact" className="rounded-xl bg-card px-5 py-3 text-[15px] font-semibold text-foreground transition-colors hover:bg-muted">
              연락하기
            </a>
          </div>
        </div>

        <a
          href="#overview"
          className="group mt-10 inline-flex w-fit items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground md:absolute md:bottom-10"
        >
          <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5 motion-safe:animate-bounce" />
          아래로
        </a>
      </div>
    </section>
  );
}
