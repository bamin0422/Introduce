import { WorkInfo } from "./types";
import WorkCard from "./WorkCard";

const workCardList: WorkInfo[] = [
  {
    title: "다우기술",
    role: "Frontend Developer",
    startDate: "2023.07",
    endDate: "2026.02",
    details: [
      {
        title: "다우오피스 통합 프론트엔드 시스템 개발 및 운영",
        info: "기업용 그룹웨어 SaaS 플랫폼인 다우오피스의 차세대 통합 프론트엔드를 설계·개발했습니다. 80개 이상의 어드민 설정 페이지, RBAC 권한 관리, 대시보드 가젯 시스템 등 사용자와 운영자 모두를 위한 시스템을 구축하고, Backbone.js 레거시를 Next.js + TypeScript로 점진적으로 전환했습니다.",
        myTaskList: [
          "모노레포 아키텍처 구축 참여: 코드 재사용성과 빌드 성능 향상을 위해 pnpm Workspace와 Turborepo 기반 모노레포 아키텍처 구축에 참여했습니다.",
          "서비스 앱 및 공유 패키지 관리: 4개의 서비스 앱과 7개의 공유 패키지를 통합 관리했습니다.",
          "대시보드 가젯 독립 패키지화: 40개 이상의 대시보드 가젯을 독립 패키지로 분리하여 개발·배포의 유연성을 확보했습니다.",
          "통합설정(GlobalConfig) 시스템 설계 및 구현: 다이얼로그 기반 SPA 형태로 5개 카테고리, 80개 이상의 설정 페이지를 구축. 기본관리, 보안관리, 앱별 관리, 데이터 관리, 멀티컴퍼니 관리 등 전체 관리자 설정 통합.",
          "관리자 권한 관리(RBAC) 시스템: 최고관리자/보안관리자/앱별 관리자 목록 CRUD API 연동, 권한 설정 정렬, 관리자 로그 다운로드(사유 항목 포함), AdminTable 공통 컴포넌트화.",
          "근태/연차 촉진 설정 구현: 부분 연차 촉진, 그룹별 설정, 휴일대체 등 기업별 정책을 유연하게 설정할 수 있는 UI 및 API 연동.",
          "공통 UI 컴포넌트 개발: Radix UI 기반 Headless 컴포넌트 위에 Select, Checkbox, Button, Dialog, Divider, ProgressBar, DateField, AddressField 등 구현. Turbo Code Generator로 mdx/stories 파일 자동 생성.",
          "다국어(i18n) 체계 구축: i18next 기반으로 한/영/일/중간체/중번체/베트남어 6개 언어 리소스 관리, 서버 사이드 로케일 쿠키 연동.",
          "인증 시스템: 로그인 로직 구성, 간편 비밀번호 컴포넌트 및 Provider 구현, TanStack Query와 GraphQL 활용 사용자 정보 fetch.",
          "ErrorBoundary 도입 및 에러 메시지 토스트 노출 로직 구현, Sentry 에러 트래킹 연동.",
        ],
        techStack:
          "Next.js 16 (App Router), React 19, TypeScript 5.5, Jotai, TanStack React Query, TanStack Table, TailwindCSS, Radix UI, Tiptap, GraphQL, i18next, Storybook",
      },
      {
        title: "대시보드 가젯 및 네비게이션 개발",
        info: "사용자가 직접 배치하고 설정할 수 있는 대시보드 가젯(캘린더, 차트, Todo 등)을 개발하고, GNB·SNB·서비스맵 등 플랫폼 네비게이션을 구현하여 사용자 업무 효율을 높였습니다.",
        myTaskList: [
          "캘린더 가젯: API 연동, 선택일 일정 리스트, 이벤트 클릭 시 해당 일정 이동, 타임존 대응.",
          "Todo+ 가젯: 카드형/리스트형 보기 설정, Config 기능, 에러 처리.",
          "WorksChart 가젯: ECharts 기반 차트 렌더링, 옵션 설정 UI, 레거시(3.0) 차트 로직 마이그레이션.",
          "가젯 공통: Gadget Config Drag & Drop(Pragmatic DnD), Storybook 연동, 가젯 빌드 자동화.",
          "GNB: 경영업무포탈/임직원포탈 공통 GNB 구현, 더보기 팝업, z-index 관리. Jotai atomWithStorage로 최근 사용 목록 저장, Fuse.js 검색.",
          "오거나이저: 아이템 추가/수정 API 연동, 링크 추가(Enter 키 이벤트), 노출/비노출 토글.",
          "서비스맵: 앱 상태별 분기 로직, API 연동, 다국어 처리.",
          "SNB: 최근 본 메뉴, 즐겨찾기 기능(TanStack Query useMutation), PC 메신저 다운로드 버튼.",
          "퀵메뉴: CloseButton 컴포넌트 분리, 탭 기능 구현, 스크롤 버튼.",
        ],
        techStack:
          "React 19, TypeScript, ECharts, Pragmatic Drag and Drop, Jotai, TanStack Query, Fuse.js, Storybook",
      },
      {
        title: "프론트엔드 개발 환경 개선 및 배포 자동화",
        info: "Nginx 캐싱 전략, 리소스 버저닝 자동화, 모노레포 빌드 최적화를 통해 개발·배포 환경을 지속적으로 개선했습니다. v4.0.0 ~ v4.2.2까지 10회 이상의 릴리스를 안정적으로 배포했습니다.",
        myTaskList: [
          "Nginx Cache-Control 헤더 최적화 및 client_header_buffer 튜닝으로 브라우저 캐싱 전략 수립 (캐싱 시간 5분 단축).",
          "CSS/JS 리소스 revision 버저닝 시스템 구축으로 배포 시 캐시 무효화 자동화.",
          "Nginx 로그 포맷 재설계 및 정적 리소스 서빙 최적화.",
          "Turborepo 빌드 파이프라인 관리 및 모노레포 빌드 최적화.",
        ],
        techStack:
          "Nginx, Turborepo, Next.js standalone",
      },
      {
        title: "Sentry 에러 모니터링 시스템 설계 및 활성화",
        info: "장비 스펙 문제로 비활성화되어 있던 프론트엔드 에러 모니터링을 선택적 로깅 방식으로 재설계하여 재활성화했습니다. 불필요한 노이즈를 제거하고 실제 서비스 장애만 수집하도록 구성하여, 운영 중 발생하는 에러의 근본 원인을 빠르게 파악하고 고객사별로 추적할 수 있는 체계를 구축했습니다.",
        myTaskList: [
          "beforeSend 기반 선택적 로깅 설계: 화이트 페이지(렌더 실패), Unhandled Promise Rejection, 5xx API 에러, fatal/critical level 에러만 수집하고, 네트워크 일시적 실패·브라우저 확장 프로그램·ResizeObserver loop 등 노이즈를 필터링하는 전략 수립 및 구현.",
          "사용자/회사 컨텍스트 자동 주입: 로그인 시 Sentry User(id, loginId)와 회사 Tag(company.name, siteUrl, domain)를 자동 설정하여, 에러 발생 시 어떤 고객사의 어떤 사용자에서 문제가 발생했는지 즉시 파악 가능하도록 구성. sendDefaultPii: false로 민감 정보 보호.",
          "5xx API 에러 자동 리포팅: 공통 fetch 클라이언트(create-fetcher.ts)에 captureApiError 연동, Fingerprint(['api-error', status, url])로 동일 API 에러 자동 그룹화하여 프론트엔드-백엔드 크로스 모니터링 체계 구축.",
          "ErrorBoundary 렌더 에러 리포팅 강화: withScope로 componentStack 포함, level: fatal 태깅, Fingerprint(['render-crash', error.message])로 화이트 페이지 실시간 감지 및 그룹화.",
          "공통 Sentry 설정 모듈화(SHARED_SENTRY_CONFIG): tracesSampleRate: 0(로그 폭주 방지), replaysOnErrorSampleRate: 1.0(에러 발생 시 세션 리플레이 100% 수집으로 재현 용이), allowUrls로 자사 도메인만 수집, denyUrls로 외부 스크립트 차단.",
          "3개 앱(dop-chat-front, dop-employee-portal, dop-manage-portal)에 Client/Server/Edge 런타임별 Sentry 설정 분리 적용 및 환경별 DSN 관리.",
        ],
        techStack:
          "@sentry/react, @sentry/nextjs, Next.js (App Router), TypeScript, React ErrorBoundary",
      },
      {
        title: "AI 기반 PR 코드리뷰 자동화 시스템 구축",
        info: "코드리뷰 병목을 해결하기 위해 AI 자동 코드리뷰 시스템을 주도적으로 설계·개발했습니다. 리뷰 응답 시간을 평균 4~8시간에서 1~2분으로 단축(~99%)하고, 관리 대시보드까지 구축하여 비개발자도 시스템을 운영할 수 있도록 하여 팀 전체의 생산성을 극대화했습니다.",
        myTaskList: [
          "NestJS 기반 백엔드(pr-reviewer) 설계 및 구현: Webhook Controller → Webhook Service → Reviewer Service → Bitbucket Service 파이프라인 구성, Bitbucket PR Webhook(pr:opened, pr:modified, pr:comment:added) 수신 및 비동기 리뷰 처리.",
          "Claude Code CLI를 Primary AI 엔진으로 활용하고, Ollama(qwen2.5-coder)를 Fallback으로 구성하여 안정적인 이중화 AI 리뷰 체계 구축.",
          "RAG(Retrieval-Augmented Generation) 기반 리뷰 품질 개선: Supabase에 저장된 과거 리뷰에서 파일 경로 유사도 기반 상위 3개 리뷰를 컨텍스트로 주입하여, 프로젝트 컨벤션에 맞는 일관된 리뷰 제공.",
          "P1(심각)/P2(중요)/P3(경미) 심각도 분류 체계 도입으로 이슈 우선순위 자동 분류, PR 인라인 댓글 및 요약 테이블 자동 게시.",
          "React 19 + Vite 기반 관리 대시보드 개발: 레포지토리 등록/관리, 커스텀 프롬프트 편집, AI 프롬프트 자동 생성(프로젝트 구조 분석), 리뷰 이력 조회(P1/P2/P3 통계) 기능 구현. FSD 아키텍처 적용, driver.js 온보딩 가이드.",
          "Supabase PostgreSQL 기반 데이터 영속화: repos, prompts, reviews 테이블 설계로 레포별 커스텀 프롬프트 및 리뷰 이력 관리 체계 구축.",
        ],
        techStack:
          "NestJS 11, TypeScript 5.6, Claude Code CLI, Ollama, Supabase, React 19, Vite 5, TanStack Query v5, HeroUI, Tailwind CSS, driver.js",
      },
      {
        title: "다우오피스 4.0 프론트엔드 운영 및 기술부채 청산",
        info: "다우오피스 4.0 프론트엔드 v4.0.0 ~ v4.2.2 운영 기간 동안 1,484건의 버그를 주도적으로 수정하고, 웹·PC 메신저·모바일 앱 내 웹앱 등 다양한 플랫폼에서의 서비스 안정성을 확보했습니다.",
        myTaskList: [
          "IE, Chrome, Safari 등 다양한 브라우저 환경에서의 호환성 이슈 분석 및 근본 원인 해결.",
          "운영 중 발생하는 결함 건 주도적 해결 및 개선 (fix 1,484건).",
          "Electron 기반 PC 메신저 결함 건 해결 및 개선.",
          "모바일 앱 내 WebView/WebBridge 연동 및 모바일 웹 브릿지 결함 건 해결.",
          "Backbone.js 레거시 콘텐츠를 단계적으로 React로 마이그레이션하며 기술부채 청산.",
          "Firebase 기반 Push 알림 연동.",
        ],
        techStack: "Next.js, TypeScript, Electron, Firebase, MSW",
      },
    ],
  },
  {
    title: "다우기술",
    role: "Android Developer",
    startDate: "2022.11",
    endDate: "2023.07",
    details: [
      {
        title: "Enfax - 안드로이드 앱 유지보수",
        info: "모바일 팩스 - Enfax, 안드로이드 앱 유지보수 및 리뷰 이벤트 팝업 노출 개발 건입니다.",
        myTaskList: [
          "불필요한 의존성 주입 제거 및 Retrofit Base Url 로직 개선.",
          "앱 리뷰 이벤트 팝업 공지 노출 (useCase 생성).",
          "WebView 캐시모드 설정 통한, 이벤트 팝업 다이얼로그에 개발 완료 이전 페이지 보여지는 현상 해결.",
        ],
        techStack: "Android, Kotlin, Retrofit, WebView",
      },
      {
        title: "삐약삐약 안드로이드 앱 운영 및 2차 개발",
        info: "영양제 복용관리 및 추천 서비스, 삐약삐약 안드로이드 앱 운영 및 2차 개발. 모바일 앱 내 웹앱(WebBridge) 연동과 CI/CD 자동 배포를 구축했습니다.",
        myTaskList: [
          "Mobile Web과 WebBridge 연결: 앱 내 웹앱 화면 연동 (판매링크, 건강기록 수정 다이얼로그 등).",
          "KMM(Kotlin Multiplatform Mobile)로 MVVM 아키텍쳐에 맞춰, Android, iOS 공통 비즈니스 로직 작성.",
          "TripleT와 Jenkins 활용, 출시노트 포함 구글플레이 각 트랙별 자동 배포 파이프라인 구축.",
          "2차 개발 UI 및 기능 구현.",
        ],
        techStack: "Android, Kotlin, Ktor, KMP(Kotlin Multiplatform), WebView",
      },
    ],
  },
];

export function WorkSection() {
  return (
    <section id="work">
      <h2 className="text-2xl font-bold tracking-tight mb-8">Work Experience</h2>
      <div className="space-y-12">
        {workCardList.map((workInfo) => (
          <WorkCard key={workInfo.title + workInfo.startDate} workInfo={workInfo} />
        ))}
      </div>
    </section>
  );
}

export default WorkSection;
