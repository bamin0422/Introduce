import { ArrowDown } from "lucide-react";
import HeroDemo from "./HeroDemo";

/** 첫 화면. 글자는 JS 없이도 바로 보이게 정적으로 그리고, 오른쪽에는 코드로 그린 데모 UI를 둔다. */
export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden" aria-label="소개">
      <div className="mx-auto flex min-h-[100svh] max-w-5xl flex-col justify-center px-6 pb-16 pt-28 md:pt-20">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-8">
          <div>
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
              보안과 안정성은 직접 재현하고 측정해서 챙기고, 반복되는 일은 AI 도구에 맡깁니다.
            </p>
            <div className="mt-8 flex flex-wrap gap-2">
              <a
                href="#work"
                className="rounded-xl bg-primary px-5 py-3 text-[15px] font-semibold text-primary-foreground transition-colors hover:bg-[#2272eb]"
              >
                경력 보기
              </a>
              <a
                href="#contact"
                className="rounded-xl bg-card px-5 py-3 text-[15px] font-semibold text-foreground transition-colors hover:bg-muted"
              >
                연락하기
              </a>
            </div>
          </div>
          <HeroDemo />
        </div>

        <a
          href="#overview"
          className="group mt-12 inline-flex w-fit items-center gap-2 text-xs font-semibold text-muted-foreground hover:text-foreground"
        >
          <ArrowDown className="h-3.5 w-3.5 transition-transform group-hover:translate-y-0.5 motion-safe:animate-bounce" />
          아래로
        </a>
      </div>
    </section>
  );
}
