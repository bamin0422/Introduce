"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@web/components/ui/card";
import Reveal from "@web/components/motion/Reveal";
import TiltCard from "@web/components/motion/TiltCard";

const highlights = [
  {
    icon: "security",
    title: "재현으로 원인 찾기",
    description:
      "보안 이슈 259건과 운영 로그 4xx 43,083건을 전부 들여다보고 위협 분석 보고서를 썼습니다. 140개사 장애와 하루 3,399건씩 뜨던 오류 화면도 Playwright로 재현하고 로그와 맞춰 보며 원인을 갈라냈습니다.",
  },
  {
    icon: "automation",
    title: "반복 업무 자동화",
    description:
      "Claude Code 스킬 28개를 만들었고, 퇴근 뒤 이슈를 처리해 PR까지 올리는 자동화가 지금까지 11건을 올렸습니다. 4~8시간 걸리던 리뷰 대기는 AI 코드리뷰 서버로 1~2분이 됐습니다.",
  },
  {
    icon: "components",
    title: "공통 컴포넌트 설계",
    description:
      "Radix UI 위에 Select, Dialog, DateField 같은 공통 컴포넌트를 올려 모노레포 공유 패키지로 관리합니다. Storybook stories는 코드 생성기로 찍어 냅니다.",
  },
  {
    icon: "layers",
    title: "로직과 화면 분리",
    description:
      "안드로이드에서 ViewModel을 떼어 내던 습관이 웹에서도 이어졌습니다. 비즈니스 로직은 Jotai·TanStack Query와 커스텀 훅에 두고, 화면은 FSD 구조로 나눕니다.",
  },
  {
    icon: "multiplatform",
    title: "웹 밖의 플랫폼",
    description:
      "Next.js SSR 서비스 말고도 Electron 데스크톱 앱, 모바일 WebView 브릿지, MCP 서버를 만들었습니다. 플랫폼이 바뀌어도 사용자가 겪는 흐름은 같게 맞춥니다.",
  },
  {
    icon: "admin",
    title: "운영 도구",
    description:
      "관리자 설정 페이지 80여 개를 한 패턴으로 묶고, 권한 관리와 로그 다운로드를 붙였습니다. 고객사 이슈 19,911건을 훑는 VOC 대시보드처럼 운영팀이 바로 쓰는 도구도 만듭니다.",
  },
];

export default function IntroduceSection() {
  return (
    <section id="skills" className="scroll-mt-24">
      <Reveal>
        <p className="section-eyebrow">Skills · 핵심 역량</p>
        <h2 className="section-title">이렇게 일합니다</h2>
      </Reveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {highlights.map((item, i) => (
          <Reveal key={item.title} delay={(i % 2) * 0.08}>
            <TiltCard className="h-full">
              <Card className="border-border/50 h-full">
                <CardHeader className="pb-3">
                  <img
                    src={`/images/icons/${item.icon}.webp`}
                    alt=""
                    width={56}
                    height={56}
                    loading="lazy"
                    className="mb-3 h-14 w-14"
                  />
                  <CardTitle className="text-base font-bold">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </CardContent>
              </Card>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
