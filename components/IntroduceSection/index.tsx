"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@web/components/ui/card";
import Reveal from "@web/components/motion/Reveal";
import TiltCard from "@web/components/motion/TiltCard";

const highlights = [
  {
    icon: "security",
    title: "재현과 실측으로 원인을 확정합니다",
    description:
      "보안 이슈 259건과 운영 로그 4xx 43,083건을 전수조사해 위협 분석 보고서를 썼고, 140개사 장애와 하루 3,399건의 오류 화면은 Playwright 재현과 로그 대조로 원인을 분리해 풀었습니다.",
  },
  {
    icon: "automation",
    title: "반복되는 일은 도구로 만듭니다",
    description:
      "Claude Code 스킬 28개, 퇴근 뒤 이슈를 처리해 PR 11건을 올린 무인 자동화, 리뷰 대기를 4~8시간에서 1~2분으로 줄인 AI 코드리뷰 서버를 만들어 팀 전체가 쓰고 있습니다.",
  },
  {
    icon: "components",
    title: "팀이 함께 쓰는 컴포넌트를 설계합니다",
    description:
      "Radix UI 위에 Select, Dialog, DateField 같은 공통 컴포넌트를 만들어 모노레포 공유 패키지로 관리하고, Storybook stories는 코드 생성기로 자동으로 만들게 했습니다.",
  },
  {
    icon: "layers",
    title: "로직과 화면을 나눠 둡니다",
    description:
      "안드로이드에서 ViewModel을 분리하던 습관을 웹에도 옮겨, Jotai·TanStack Query와 커스텀 훅으로 비즈니스 로직이 UI를 침범하지 않게 FSD 구조로 나눕니다.",
  },
  {
    icon: "multiplatform",
    title: "웹 너머의 플랫폼도 다룹니다",
    description:
      "Next.js SSR 서비스뿐 아니라 Electron 데스크톱 앱, 모바일 WebView 브릿지, MCP 서버까지 만들며 플랫폼이 달라도 같은 사용자 경험을 지켜 왔습니다.",
  },
  {
    icon: "admin",
    title: "운영자를 위한 화면을 만듭니다",
    description:
      "관리자 설정 페이지 80여 개를 한 패턴으로 묶고 권한 관리와 로그 다운로드를 만들었습니다. 고객사 이슈 19,911건을 분석하는 VOC 대시보드처럼 운영에 바로 쓰이는 도구도 만듭니다.",
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
                  <CardTitle className="text-sm font-semibold">
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
