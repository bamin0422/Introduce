import { WorkInfo } from "./types";
import WorkCard from "./WorkCard";

const workCardList: WorkInfo[] = [
  {
    title: "다우기술",
    role: "Frontend Developer",
    startDate: "2023.07",
    endDate: "현재",
    details: [
      {
        title: "다우오피스 4.0 Frontend 모노레포 아키텍처 설계 및 구축",
        problem:
          "기존 다우오피스는 단일 번들 구조로 80개 이상의 어드민 설정 페이지와 대시보드 가젯이 결합되어 있었습니다. 페이지·가젯 간 의존성 충돌이 잦고 빌드 시간이 길었으며, 권한 체계가 산발적으로 관리되어 신규 메뉴 추가 시 권한 누락이 반복됐습니다. 4.0 리뉴얼을 통해 아키텍처 전반을 개선할 필요가 있었습니다.",
        actions: [
          "모노레포(pnpm Workspace + Turborepo) 구조로 전환하고, 가젯을 독립 패키지로 분리하여 변경 범위를 격리했습니다.",
          "Turborepo 빌드 캐싱으로 변경된 패키지만 재빌드되도록 파이프라인을 구성했습니다.",
          "어드민 설정 페이지 공통 레이아웃·훅을 추상화하여 개발 패턴을 일원화했습니다 (5개 카테고리, 80개+ 설정 페이지).",
          "GNB·SNB·서비스맵 등 플랫폼 네비게이션을 신규 구현하고, Jotai·TanStack Query 기반 상태 관리 체계를 정립했습니다.",
          "i18next 기반으로 6개 언어(한/영/일/중간체/중번체/베트남어) 리소스를 관리하고, 서버 사이드 로케일 쿠키와 연동했습니다.",
        ],
        results: [
          "가젯 단위 독립 빌드·배포가 가능해졌고, 빌드 캐시 히트로 전체 빌드 시간이 단축됐습니다.",
          "신규 설정 페이지를 추가할 때 권한 누락 없이 일관 적용되었고, 보일러플레이트도 최소화했습니다.",
          "v4.0.0 ~ v4.2.2까지 10회 이상 안정적으로 릴리스했습니다.",
        ],
        techStack:
          "Next.js (App Router), TypeScript, Jotai, TanStack Query, TanStack Table, Storybook, Vite, pnpm, Turborepo, Tailwind CSS",
      },
      {
        title: "대시보드 가젯 및 네비게이션 개발",
        problem:
          "사용자가 직접 배치하고 설정할 수 있는 대시보드 가젯과 검색·즐겨찾기 등 사용성을 갖춘 플랫폼 네비게이션이 부재했습니다. 또한 레거시 3.0 차트 로직과 새 가젯 구조 간 호환성도 정리해야 했습니다.",
        actions: [
          "캘린더·Todo+·WorksChart 등 40개 이상의 가젯을 독립 패키지로 분리하고, Pragmatic DnD 기반 Config Drag & Drop을 구현했습니다.",
          "ECharts 기반 차트 렌더링과 옵션 설정 UI를 구현하고, 레거시(3.0) 차트 로직을 마이그레이션했습니다.",
          "GNB·오거나이저·서비스맵·SNB·퀵메뉴를 구현하면서 Jotai atomWithStorage로 최근 사용 목록을 저장하고, Fuse.js 검색을 적용했습니다.",
          "TanStack Query useMutation으로 즐겨찾기·메뉴 노출 토글 등 비동기 상태를 관리했습니다.",
        ],
        results: [
          "가젯을 독립 패키지화하고 Storybook과 연동하여 가젯 단위로 개발·검증할 수 있게 됐습니다.",
          "사용자 정의가 가능한 대시보드와 검색·즐겨찾기·DnD 등 사용성 기능을 정상적으로 운영하고 있습니다.",
          "레거시 차트 로직 마이그레이션을 완료하여 기술부채를 줄였습니다.",
        ],
        techStack:
          "React 19, TypeScript, ECharts, Pragmatic Drag and Drop, Jotai, TanStack Query, Fuse.js, Storybook",
      },
      {
        title: "401 토큰 갱신 Race Condition - 화이트 페이지 해소",
        problem:
          "레거시 XHR 레이어에서 토큰 만료 시 여러 요청이 동시에 401을 수신해 각자 갱신을 시도하는 race condition이 발생했습니다. 갱신 완료 후에도 컨텐츠가 재로드되지 않아 화이트 페이지가 남았고, 각 모듈별로 각기 다른 형태로 증상이 나타났습니다.",
        actions: [
          "개발 환경 전용 디버깅 도구를 추가해 실 환경에서 토큰 만료 시나리오를 재현할 수 있는 환경을 구축한 뒤 디버깅했습니다.",
          "갱신 중 유입되는 요청을 큐에 보류하는 lock 메커니즘을 도입하고, 갱신 완료 후 현재 라우트를 재로드했습니다.",
          "부작용을 유발하던 히스토리 재로드 코드를 제거하고, 각 모듈별로 401을 인라인 처리했습니다.",
          "비표준 에러 코드 발생 시에는 갱신 재시도 방어 로직을 추가했습니다.",
        ],
        results: [
          "모듈별 재현 시나리오를 전수 확인한 뒤 디버깅 도구를 제거했습니다.",
          "다수 요청 동시 유입 시 단일 갱신 후 일괄 재시도되는 동작을 확인했습니다.",
        ],
        techStack: "TypeScript, XHR, Fetch API, JWT",
      },
      {
        title: "FCM + ServiceWorker 웹 푸시 알림 연동",
        problem:
          "그룹웨어 특성상 실시간 알림이 필수였으나 웹 환경에서 푸시 알림 인프라가 없었습니다. foreground/background 알림 수신 방식이 다르고, 일부 모바일 브라우저나 HTTP 환경 등 FCM을 지원하지 않는 예외 케이스도 다수였습니다. 또한 로그아웃 후 토큰 정리가 미흡해 알림이 의도치 않게 발송될 가능성이 있었습니다.",
        actions: [
          "Firebase ServiceWorker 기반 백그라운드 알림을 구현하고, foreground 알림 컴포넌트를 개발했습니다.",
          "FCM 미지원 브라우저와 HTTP 환경에 대한 예외 처리를 추가하고, push token API 중복 호출 방어 로직을 적용했습니다.",
          "알림 클릭 시 해당 링크로 이동하도록 인터페이스 구조를 수정했습니다.",
          "로그아웃 시 FCM 토큰을 삭제하고 ServiceWorker를 해제하도록 처리했습니다.",
        ],
        results: [
          "foreground·background 알림 수신과 클릭 동작을 확인했습니다.",
          "로그아웃 후 토큰 정리와 알림 오발송 차단을 확인했습니다.",
          "FCM 미지원 환경에서도 예외 처리 후 오류 없이 동작함을 확인했습니다.",
        ],
        techStack:
          "Firebase Cloud Messaging, ServiceWorker, Next.js, TypeScript",
      },
      {
        title: "Sentry 에러 모니터링 재설계",
        problem:
          "전체 JS 오류를 무차별 수집하다 보니 Sentry 이슈 목록이 노이즈로 가득 차 실제 고객 영향 에러를 식별하기 어려웠습니다. 알림 피로도로 인해 운영팀의 대응 우선순위 판단이 불가능한 상태였습니다.",
        actions: [
          "beforeSend 훅 기반 선택적 로깅을 도입해, 화이트 페이지를 유발하는 에러와 API 5xx만 수집하도록 필터를 설계했습니다.",
          "테넌트 식별자를 태그로 추가하여 고객사별 에러를 즉시 추적할 수 있도록 컨텍스트를 보강했습니다.",
          "공통 fetch 클라이언트에 captureApiError를 연동하고, Fingerprint로 동일 API 에러를 자동 그룹화했습니다.",
          "ErrorBoundary 렌더 에러 리포팅을 강화했습니다 (componentStack 포함, level: fatal 태깅).",
          "3개 앱(dop-chat-front, dop-employee-portal, dop-manage-portal)에 Client/Server/Edge 런타임별 Sentry 설정을 분리 적용했습니다.",
        ],
        results: [
          "도입 단계지만 수집 이벤트 수가 대폭 감소했고, 실제 서비스 장애에 해당하는 이슈만 대시보드에 노출됩니다.",
          "고객사별 필터 조회로 CS 인입 건의 원인 추적 시간을 단축했습니다.",
        ],
        techStack:
          "@sentry/react, @sentry/nextjs, Next.js (App Router), TypeScript, React ErrorBoundary",
      },
      {
        title: "AI 기반 PR 코드리뷰 자동화 시스템 구축",
        problem:
          "PR 코드 리뷰가 리뷰어 가용 시간에 의존하여 평균 4~8시간의 대기가 발생했습니다. 리뷰 품질도 리뷰어마다 편차가 있어 일관된 피드백이 어려웠습니다.",
        actions: [
          "NestJS 백엔드 서버와 Claude Code CLI를 연동한 자동 리뷰 파이프라인을 구축하고, Bitbucket Webhook 기반으로 비동기 처리를 구성했습니다.",
          "Ollama(qwen2.5-coder)를 Fallback으로 두어 안정적인 이중화 AI 리뷰 체계를 구축했습니다.",
          "프로젝트 컨벤션 문서를 RAG로 제공해 코드베이스 맥락을 반영한 리뷰 품질을 확보했습니다 (Supabase 기반 과거 리뷰 유사도 검색).",
          "P1/P2/P3 심각도 분류와 PR 인라인 댓글·요약 테이블 자동 게시를 구현했습니다.",
          "React 19 기반 관리 대시보드에서 레포지토리 등록·커스텀 프롬프트·리뷰 이력을 관리할 수 있도록 했습니다.",
        ],
        results: [
          "리뷰 응답 시간을 4~8시간에서 1~2분으로 단축했습니다 (약 99% 감소).",
          "도입 단계지만 반복적인 컨벤션 피드백이 자동화되어, 리뷰어가 로직 중심 리뷰에 집중할 수 있게 됐습니다.",
        ],
        techStack:
          "NestJS 11, TypeScript 5.6, Claude Code CLI, Ollama, Supabase, React 19, Vite 5, TanStack Query v5, HeroUI, Tailwind CSS, driver.js",
      },
      {
        title: "프론트엔드 개발 환경 개선 및 배포 자동화",
        problem:
          "정적 리소스 캐시 무효화가 수동이라 배포 후 사용자 브라우저에 구버전이 남는 사례가 잦았고, Nginx 캐시 정책도 정리되지 않아 캐싱 효율이 낮았습니다. 모노레포 빌드 시간도 지속적으로 증가해 릴리스 사이클이 길어지고 있었습니다.",
        actions: [
          "Nginx Cache-Control 헤더를 최적화하고 client_header_buffer를 튜닝하여 브라우저 캐싱 전략을 수립했습니다.",
          "CSS/JS 리소스 revision 버저닝 시스템을 구축해 배포 시 캐시 무효화를 자동화했습니다.",
          "Nginx 로그 포맷을 재설계하고 정적 리소스 서빙을 최적화했습니다.",
          "Turborepo 빌드 파이프라인을 관리하면서 모노레포 빌드를 최적화했습니다.",
        ],
        results: [
          "캐시 무효화 자동화로 배포 후 구버전 잔존 이슈를 제거했고, 캐싱 시간을 5분 단축했습니다.",
          "Turborepo 캐시 활용으로 변경된 패키지만 재빌드되어 빌드 시간이 단축됐습니다.",
          "v4.0.0 ~ v4.2.2까지 10회 이상 안정적으로 릴리스를 운영했습니다.",
        ],
        techStack: "Nginx, Turborepo, Next.js standalone",
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
        title: "Enfax 안드로이드 앱 유지보수",
        problem:
          "기존 Enfax 앱은 의존성 주입 구조가 정돈되지 않아 신규 기능 추가 시 사이드이펙트 위험이 컸습니다. 또한 리뷰 이벤트 팝업 노출 시 WebView 캐시 모드로 인해 개발 완료 이전 페이지가 노출되는 다이얼로그 이슈가 있었습니다.",
        actions: [
          "불필요한 의존성 주입을 제거하고 Retrofit Base URL 로직을 개선했습니다.",
          "앱 리뷰 이벤트 팝업 공지를 노출하는 useCase를 생성했습니다.",
          "WebView 캐시 모드 설정을 통해 이벤트 팝업 다이얼로그 이슈를 해결했습니다.",
        ],
        results: [
          "의존성을 정리하여 코드 가독성과 테스트 용이성을 개선했습니다.",
          "리뷰 이벤트 팝업이 정상 노출되었고, 캐시 다이얼로그 이슈 재현을 차단했습니다.",
        ],
        techStack: "Android, Kotlin, Retrofit, WebView",
      },
      {
        title: "삐약삐약 안드로이드 앱 운영 및 2차 개발",
        problem:
          "영양제 복용관리 서비스 삐약삐약은 모바일 웹과 네이티브 앱이 함께 동작해야 했고, Android/iOS 양쪽에서 비즈니스 로직이 중복으로 작성되어 있었습니다. 출시 자동화도 미비해 매 릴리스마다 수동 배포 작업이 반복됐습니다.",
        actions: [
          "Mobile Web과 WebBridge를 연결했습니다 (판매링크, 건강기록 화면 수정 다이얼로그 등).",
          "KMM(Kotlin Multiplatform Mobile) 기반 MVVM 아키텍처로 Android·iOS 공통 비즈니스 로직을 작성했습니다.",
          "TripleT와 Jenkins를 활용하여 출시노트를 포함해 구글플레이 트랙별 자동 배포 파이프라인을 구축했습니다.",
          "2차 개발 UI와 기능을 구현했습니다.",
        ],
        results: [
          "WebBridge 연동으로 모바일 웹과 네이티브가 통합된 사용자 경험을 제공했습니다.",
          "공통 로직을 KMM으로 분리하여 양 플랫폼의 중복 코드를 줄였습니다.",
          "구글플레이 자동 배포로 릴리스 작업 시간을 단축했고, 1.0.0.0 ~ 1.0.2.4 버전을 운영했습니다.",
        ],
        techStack: "Android, Kotlin, Ktor, KMP(Kotlin Multiplatform), WebView",
      },
    ],
  },
];

export function WorkSection() {
  return (
    <section id="work">
      <h2 className="text-2xl font-bold tracking-tight mb-8">
        Work Experience
      </h2>
      <div className="space-y-12">
        {workCardList.map((workInfo) => (
          <WorkCard
            key={workInfo.title + workInfo.startDate}
            workInfo={workInfo}
          />
        ))}
      </div>
    </section>
  );
}

export default WorkSection;
