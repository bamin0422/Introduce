"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@web/components/ui/card";

const highlights = [
  {
    title: "재사용 가능한 컴포넌트와 라이브러리 설계",
    description:
      "팀 전체가 일관되게 사용할 수 있는 공통 UI 컴포넌트를 설계하고, 모노레포 구조에서 공유 패키지로 관리해 왔습니다. Radix UI 기반 Headless 컴포넌트 위에 Select, Dialog, DateField 등을 구현하고, Turbo Code Generator로 Storybook stories 파일을 자동 생성하여 컴포넌트 개발 생산성을 높였습니다.",
  },
  {
    title: "FSD를 통한 비즈니스 로직과 프레젠테이션의 분리",
    description:
      "로직이 UI를 침범하지 않도록, 상태 관리 도구(Jotai, TanStack Query 등)와 커스텀 훅을 활용해 핵심 로직을 명확하게 분리합니다. 앱 개발 시 ViewModel을 분리하던 경험에서 출발했고, 현재는 웹에서도 동일한 철학으로 적용하고 있습니다.",
  },
  {
    title: "SSR과 멀티 플랫폼 서비스 개발",
    description:
      "Next.js App Router 기반 SSR 환경에서 서비스를 개발·운영하며, 웹뿐 아니라 Electron PC 메신저, 모바일 앱 내 WebView/WebBridge 연동까지 다양한 플랫폼에서 일관된 사용자 경험을 제공해 왔습니다.",
  },
  {
    title: "어드민 및 운영 시스템 구축 경험",
    description:
      "5개 카테고리, 80개 이상의 관리자 설정 페이지를 다이얼로그 기반 SPA로 설계·구현하고, RBAC 권한 관리 시스템과 관리자 로그 다운로드 기능을 개발했습니다. AI 코드리뷰 관리 대시보드에서는 레포지토리 등록, 리뷰 이력 조회, 통계 리포트 기능을 구현했습니다.",
  },
  {
    title: "운영 효율성과 서비스 안정성 개선",
    description:
      "Sentry 에러 모니터링 시스템을 선택적 로깅 방식으로 재설계하여, 노이즈를 제거하고 실제 서비스 장애만 수집하는 구조를 구축했습니다. 사용자/회사 컨텍스트 자동 주입으로 고객사별 에러를 즉시 추적할 수 있게 했습니다.",
  },
  {
    title: "자동화 도구 개발을 통한 생산성 극대화",
    description:
      "AI 코드리뷰 자동화 시스템을 직접 설계·구축하여 리뷰 응답 시간을 99% 단축하고, 관리 대시보드까지 개발하여 비개발자도 운영할 수 있도록 했습니다. 반복 작업을 발견하면 도구나 라이브러리를 만들어 해결하는 것을 즐깁니다.",
  },
];

export default function IntroduceSection() {
  return (
    <section id="home">
      <div className="flex items-center gap-6 mb-8">
        <img
          src="/introduce.png"
          alt="프로필 사진"
          className="w-24 h-24 rounded-full object-cover border-2 border-border shadow-sm"
        />
        <div>
          <h1 className="text-3xl font-bold tracking-tight">민대인</h1>
          <p className="text-muted-foreground mt-1">Frontend Developer</p>
        </div>
      </div>

      <p className="text-muted-foreground text-base leading-relaxed mb-10">
        <span className="text-primary font-semibold">Learn once, write anywhere.</span>
        <br /><br />
        하나의 기술을 배워 여러 환경에 녹여내는 데에서 개발자로서의 가치를
        찾습니다. 안드로이드 개발자로 커리어를 시작하며 모바일 앱 내 웹앱
        연동과 사용자 경험 설계를 경험했고, 이후 프론트엔드로 전향하여 React와
        Next.js를 중심으로 기업용 SaaS 그룹웨어의 프론트엔드를
        설계·개발·운영해 왔습니다.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {highlights.map((item) => (
          <Card key={item.title} className="border-border/50">
            <CardHeader className="pb-3">
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
        ))}
      </div>
    </section>
  );
}
