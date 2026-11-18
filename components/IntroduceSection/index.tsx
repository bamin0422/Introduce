"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@web/components/ui/card";
import Reveal from "@web/components/motion/Reveal";
import TiltCard from "@web/components/motion/TiltCard";

const highlights = [
  {
    icon: "components",
    title: "재사용 가능한 컴포넌트와 라이브러리 설계",
    description:
      "팀 전체가 일관되게 사용할 수 있는 공통 UI 컴포넌트를 설계하고, 모노레포 구조에서 공유 패키지로 관리해 왔습니다. Radix UI 기반 Headless 컴포넌트 위에 Select, Dialog, DateField 등을 구현하고, Turbo Code Generator로 Storybook stories 파일을 자동 생성하여 컴포넌트 개발 생산성을 높였습니다.",
  },
  {
    icon: "layers",
    title: "FSD를 통한 비즈니스 로직과 프레젠테이션의 분리",
    description:
      "로직이 UI를 침범하지 않도록, 상태 관리 도구(Jotai, TanStack Query 등)와 커스텀 훅을 활용해 핵심 로직을 명확하게 분리합니다. 앱 개발 시 ViewModel을 분리하던 경험에서 출발했고, 현재는 웹에서도 동일한 철학으로 적용하고 있습니다.",
  },
  {
    icon: "multiplatform",
    title: "SSR과 멀티 플랫폼 서비스 개발",
    description:
      "Next.js App Router 기반 SSR 환경에서 서비스를 개발·운영하며, 웹뿐 아니라 Electron PC 메신저, 모바일 앱 내 WebView/WebBridge 연동까지 다양한 플랫폼에서 일관된 사용자 경험을 제공해 왔습니다.",
  },
  {
    icon: "admin",
    title: "어드민 및 운영 시스템 구축 경험",
    description:
      "5개 카테고리, 80개 이상의 관리자 설정 페이지를 다이얼로그 기반 SPA로 설계·구현하고, RBAC 권한 관리 시스템과 관리자 로그 다운로드 기능을 개발했습니다. AI 코드리뷰 관리 대시보드에서는 레포지토리 등록, 리뷰 이력 조회, 통계 리포트 기능을 구현했습니다.",
  },
  {
    icon: "security",
    title: "보안과 운영 안정성, 실측으로 원인 확정",
    description:
      "보안 이슈 259건과 운영 로그 4xx 43,083건을 전수조사해 위협 분석 보고서를 쓰고, CSP·DOMPurify·콘솔 전역 차단까지 프론트 방어를 일괄 도입했습니다. 140개사 장애와 하루 3,399건의 오류 화면 같은 운영 문제는 Playwright 재현과 로그 대조로 원인을 분리해 풀었습니다.",
  },
  {
    icon: "automation",
    title: "자동화 도구 개발을 통한 생산성 극대화",
    description:
      "2026년 한 해 Claude Code 스킬 28개, 퇴근 후 이슈를 무인 처리해 PR 11건을 올린 자동화, 리뷰 응답을 99% 단축한 AI 코드리뷰 서버, 기획자용 디자인 MCP를 직접 만들었습니다. 반복 작업을 발견하면 도구로 만들어 팀 전체가 쓰게 하는 것을 즐깁니다.",
  },
];

export default function IntroduceSection() {
  return (
    <section id="skills" className="scroll-mt-24">
      <Reveal>
        <p className="section-eyebrow">Skills · 핵심 역량</p>
        <h2 className="section-title">한 번 배운 원칙을 어디서든 같은 밀도로.</h2>
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
