export interface ResumeData {
  personalInfo: PersonalInfo;
  summary: string;
  skills: Skill[];
  experience: Experience[];
  projects: Project[];
  contact: ContactInfo[];
}

export interface PersonalInfo {
  name: string;
  githubUsername: string;
  title: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  projects: ProjectDetail[];
}

export interface ProjectDetail {
  title: string;
  problem: string;
  actions: string[];
  results: string[];
  techStack: string;
}

export interface Project {
  title: string;
  period: string;
  problem: string;
  actions: string[];
  results: string[];
  techStack: string;
  links: { name: string; url: string }[];
}

export interface ContactInfo {
  name: string;
  url: string;
}

export const resumeData: ResumeData = {
  personalInfo: {
    name: "민대인",
    githubUsername: "bamin0422",
    title: "Frontend Developer",
  },
  summary:
    "Learn once, write anywhere. 하나의 기술을 배워 여러 환경에 녹여내는 데에서 개발자로서의 가치를 찾습니다. React와 Next.js 기반으로 기업용 SaaS 그룹웨어의 프론트엔드를 설계·개발·운영하며, 80개 이상의 어드민 설정 페이지 구축, AI 코드리뷰 자동화 시스템 개발, Sentry 에러 모니터링 재설계 등 서비스 품질과 운영 효율성을 동시에 개선해 왔습니다. 반복 작업을 자동화하고, 라이브러리와 도구를 만들어 팀 생산성을 높이는 일에 즐거움을 느낍니다.",
  skills: [
    {
      category: "Frontend Core",
      items: ["React", "Next.js", "TypeScript", "JavaScript", "HTML/CSS"],
    },
    {
      category: "Styling & UI",
      items: [
        "Tailwind CSS",
        "Storybook",
        "Framer Motion",
        "Responsive Design",
      ],
    },
    {
      category: "State Management",
      items: ["Jotai", "Zustand", "TanStack Query", "Context API"],
    },
    {
      category: "Development Tools",
      items: ["Vite", "Webpack", "pnpm", "Turborepo", "Git", "ESLint", "Prettier"],
    },
    {
      category: "Architecture & Infra",
      items: [
        "Feature-Sliced Design",
        "Monorepo",
        "SSR (Next.js App Router)",
        "Docker",
        "Nginx",
        "Sentry",
      ],
    },
  ],
  experience: [
    {
      company: "다우기술",
      position: "Frontend Developer",
      period: "2023.07 ~ 현재",
      projects: [
        {
          title: "다우오피스 4.0 Frontend 모노레포 아키텍처 설계 및 구축",
          problem:
            "기존 다우오피스는 단일 번들 구조로 80개 이상의 어드민 설정 페이지와 대시보드 가젯이 결합되어 있었습니다. 페이지·가젯 간 의존성 충돌이 잦고 빌드 시간이 길었으며, 권한 체계가 산발적으로 관리되어 신규 메뉴 추가 시 권한 누락이 반복됐습니다.",
          actions: [
            "모노레포(pnpm Workspace + Turborepo) 구조로 전환하고, 가젯을 독립 패키지로 분리했습니다.",
            "Turborepo 빌드 캐싱으로 변경된 패키지만 재빌드되도록 파이프라인을 구성했습니다.",
            "어드민 설정 페이지 공통 레이아웃·훅을 추상화하여 개발 패턴을 일원화했습니다 (5개 카테고리, 80개+ 설정 페이지).",
            "GNB·SNB·서비스맵 등 플랫폼 네비게이션을 신규 구현하고, Jotai·TanStack Query 기반 상태 관리 체계를 정립했습니다.",
            "i18next 기반으로 6개 언어 리소스를 관리하고, 서버 사이드 로케일 쿠키와 연동했습니다.",
          ],
          results: [
            "가젯 단위 독립 빌드·배포가 가능해졌고, 빌드 캐시 히트로 전체 빌드 시간이 단축됐습니다.",
            "신규 설정 페이지를 추가할 때 권한 누락 없이 일관 적용되었습니다.",
            "v4.0.0 ~ v4.2.2까지 10회 이상 안정적으로 릴리스했습니다.",
          ],
          techStack:
            "Next.js (App Router), TypeScript, Jotai, TanStack Query, TanStack Table, Storybook, Vite, pnpm, Turborepo, Tailwind CSS",
        },
        {
          title: "대시보드 가젯 및 네비게이션 개발",
          problem:
            "사용자가 직접 배치하고 설정할 수 있는 대시보드 가젯과 검색·즐겨찾기 등 사용성을 갖춘 플랫폼 네비게이션이 부재했고, 레거시 3.0 차트 로직과 새 가젯 구조 간 호환성 정리도 필요했습니다.",
          actions: [
            "캘린더·Todo+·WorksChart 등 40개 이상의 가젯을 독립 패키지로 분리하고, Pragmatic DnD 기반 Drag & Drop을 구현했습니다.",
            "ECharts 기반 차트 렌더링과 옵션 설정 UI를 구현하고, 레거시(3.0) 차트 로직을 마이그레이션했습니다.",
            "GNB·오거나이저·서비스맵·SNB·퀵메뉴를 구현하면서 Jotai atomWithStorage와 Fuse.js를 적용했습니다.",
          ],
          results: [
            "가젯을 독립 패키지화하고 Storybook과 연동해 가젯 단위 개발·검증이 가능해졌습니다.",
            "사용자 정의가 가능한 대시보드와 검색·즐겨찾기·DnD 기능을 정상 운영하고 있습니다.",
            "레거시 차트 로직 마이그레이션을 완료해 기술부채를 줄였습니다.",
          ],
          techStack:
            "React 19, TypeScript, ECharts, Pragmatic Drag and Drop, Jotai, TanStack Query, Fuse.js, Storybook",
        },
        {
          title: "401 토큰 갱신 Race Condition - 화이트 페이지 해소",
          problem:
            "레거시 XHR 레이어에서 토큰 만료 시 여러 요청이 동시에 401을 수신해 각자 갱신을 시도하는 race condition이 발생했고, 갱신 완료 후에도 컨텐츠가 재로드되지 않아 화이트 페이지가 남았습니다. 모듈별로 각기 다른 형태로 증상이 나타났습니다.",
          actions: [
            "개발 환경 전용 디버깅 도구로 실 환경의 토큰 만료 시나리오를 재현한 뒤 디버깅했습니다.",
            "갱신 중 유입되는 요청을 큐에 보류하는 lock 메커니즘을 도입하고, 갱신 완료 후 현재 라우트를 재로드했습니다.",
            "부작용을 유발하던 히스토리 재로드 코드를 제거하고, 각 모듈별로 401을 인라인 처리했습니다.",
            "비표준 에러 코드 발생 시 갱신 재시도 방어 로직을 추가했습니다.",
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
            "그룹웨어 특성상 실시간 알림이 필수였으나 웹 환경에 푸시 알림 인프라가 없었습니다. foreground/background 수신 방식이 다르고, 일부 모바일 브라우저나 HTTP 환경 등 FCM을 지원하지 않는 케이스도 다수였으며, 로그아웃 후 토큰 정리가 미흡해 알림 오발송 가능성이 있었습니다.",
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
            "3개 앱에 Client/Server/Edge 런타임별 Sentry 설정을 분리 적용했습니다.",
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
            "NestJS 백엔드 서버와 Claude Code CLI를 연동한 자동 리뷰 파이프라인을 구축하고, Bitbucket Webhook 기반 비동기 처리를 구성했습니다.",
            "Ollama(qwen2.5-coder)를 Fallback으로 두어 안정적인 이중화 AI 리뷰 체계를 구축했습니다.",
            "프로젝트 컨벤션 문서를 RAG로 제공해 코드베이스 맥락을 반영한 리뷰 품질을 확보했습니다.",
            "P1/P2/P3 심각도 분류와 PR 인라인 댓글·요약 테이블 자동 게시를 구현했습니다.",
            "React 19 기반 관리 대시보드에서 레포지토리 등록·커스텀 프롬프트·리뷰 이력을 관리할 수 있도록 했습니다.",
          ],
          results: [
            "리뷰 응답 시간을 4~8시간에서 1~2분으로 단축했습니다 (약 99% 감소).",
            "반복적인 컨벤션 피드백이 자동화되어 리뷰어가 로직 중심 리뷰에 집중할 수 있게 됐습니다.",
          ],
          techStack:
            "NestJS 11, TypeScript, Claude Code CLI, Ollama, Supabase, React 19, Vite, TanStack Query, HeroUI, Tailwind CSS",
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
      company: "다우기술",
      position: "Android Developer",
      period: "2022.11 ~ 2023.07",
      projects: [
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
            "KMM 기반 MVVM 아키텍처로 Android·iOS 공통 비즈니스 로직을 작성했습니다.",
            "TripleT와 Jenkins를 활용하여 출시노트를 포함한 구글플레이 트랙별 자동 배포 파이프라인을 구축했습니다.",
            "2차 개발 UI와 기능을 구현했습니다.",
          ],
          results: [
            "WebBridge 연동으로 모바일 웹과 네이티브가 통합된 사용자 경험을 제공했습니다.",
            "공통 로직을 KMM으로 분리해 양 플랫폼의 중복 코드를 줄였습니다.",
            "구글플레이 자동 배포로 릴리스 작업 시간을 단축했고, 1.0.0.0 ~ 1.0.2.4 버전을 운영했습니다.",
          ],
          techStack:
            "Android, Kotlin, Ktor, KMP(Kotlin Multiplatform), WebView",
        },
      ],
    },
  ],
  projects: [
    {
      title: "HW Monitor",
      period: "2025.01 ~ 현재",
      problem:
        "Serial, TCP, UDP, BLE 등 다양한 프로토콜로 연결되는 하드웨어 장비의 통신 데이터를 실시간 모니터링할 수 있는 범용 데스크톱 툴이 없어, 프로토콜별로 별도 도구를 사용하거나 직접 스크립트를 작성해야 했습니다.",
      actions: [
        "Electron 기반 크로스플랫폼 앱으로 Serial·TCP·UDP·BLE 멀티 프로토콜을 통합 지원했습니다.",
        "LangChain 기반 다중 LLM(Anthropic, OpenAI, Gemini, Groq, Ollama)을 연동하여 수신 데이터를 자동 분석하도록 구현했습니다.",
        "Supabase + Google OAuth 인증과 클라우드 설정 동기화를 구성하고, electron-updater 기반 자동 업데이트를 구현했습니다.",
        "GitHub Actions로 macOS·Windows·Linux 크로스 플랫폼 빌드를 자동화했습니다.",
      ],
      results: [
        "단일 앱에서 프로토콜 전환과 실시간 데이터 시각화가 동작함을 확인했습니다.",
        "LLM 분석 결과로 이상 패턴을 탐지할 수 있는지 실사용 검증을 진행 중입니다.",
      ],
      techStack:
        "Electron, React, TypeScript, electron-vite, Tailwind CSS, Radix UI, Zustand, LangChain, serialport, Supabase, electron-updater",
      links: [
        { name: "Website", url: "https://hw-monitor-website.vercel.app" },
        { name: "GitHub", url: "https://github.com/bamin0422/hw-monitor" },
        {
          name: "Download",
          url: "https://github.com/bamin0422/hw-monitor/releases/latest",
        },
      ],
    },
    {
      title: "사업자 등록번호 진위 여부 조회 MCP 서버",
      period: "2024.07 ~ 2024.09",
      problem:
        "공공데이터포털의 사업자 정보 조회 API를 LLM 에이전트에서 바로 활용하려면 API 래핑 서버가 필요했고, 반복적인 환경 설정 없이 누구나 쉽게 배포할 수 있어야 했습니다.",
      actions: [
        "Model Context Protocol(MCP) 서버 규격으로 구현하여 Claude 등 MCP 호환 LLM과 바로 연동할 수 있도록 설계했습니다.",
        "MVC 패턴 기반 TypeScript 서버 아키텍처를 설계하고, REST API와 MCP 도구를 동시에 제공하는 구조로 구현했습니다.",
        "Docker 컨테이너화로 원클릭 배포가 가능하도록 만들고, Smithery AI 마켓플레이스에 등록했습니다.",
        "API 인증키를 관리하고 보안 처리를 적용하면서, 에러 핸들링·로깅 시스템도 함께 구축했습니다.",
      ],
      results: [
        "MCP 클라이언트에서 자연어 쿼리로 사업자 진위 조회가 동작함을 확인했습니다.",
        "Smithery AI 배포 후 외부 사용자가 접근 가능한 상태를 유지하고 있습니다.",
      ],
      techStack:
        "TypeScript, Node.js, Express.js, Docker, MCP, REST API, 공공데이터포털 API",
      links: [
        {
          name: "GitHub",
          url: "https://github.com/bamin0422/mcp_business_check_server",
        },
        {
          name: "Smithery AI",
          url: "https://smithery.ai/server/@bamin0422/mcp_business_check_server",
        },
      ],
    },
    {
      title: "friendly-regex",
      period: "2024.09 ~ 현재",
      problem:
        "프로젝트마다 이메일·전화번호·URL 등 공통 정규표현식을 반복 작성하거나 복사해 쓰는 비효율이 있었습니다. 가독성이 낮은 정규식 리터럴은 유지보수도 어려웠습니다.",
      actions: [
        "자주 쓰는 패턴을 네이밍된 함수로 제공하는 경량 유틸리티 라이브러리로 추상화했습니다.",
        "npm 패키지로 배포해 어느 프로젝트에서나 즉시 설치·사용할 수 있도록 공개했습니다.",
        "패키지 버전을 관리하면서 정규식 패턴을 점진적으로 추가했습니다.",
      ],
      results: [
        "npm 배포 후 실제 프로젝트에 적용해 정규식 중복 작성을 제거했음을 확인했습니다.",
        "이메일·전화번호·URL 등 자주 쓰는 정규식을 함수 호출로 치환할 수 있게 됐습니다.",
      ],
      techStack: "JavaScript, Regex, npm, npm publish",
      links: [
        { name: "GitHub", url: "https://github.com/bamin0422/friendly-regex" },
        { name: "npm", url: "https://www.npmjs.com/package/friendly-regex" },
      ],
    },
    {
      title: "my-ticket-timer",
      period: "2024.07 ~ 2024.09",
      problem:
        "티켓팅 시 일반적인 타이머는 정형화된 UI라서 시각적 즐거움이 부족했습니다. 사용자가 직접 시계를 커스터마이징하며 티켓팅 경험을 더 재미있게 만들 수 있는 도구가 필요했습니다.",
      actions: [
        "FSD(Feature-Sliced Design) 아키텍처를 기반으로 프로젝트 구조를 설정했습니다.",
        "framer-motion을 활용해 SearchBar·Timer 컴포넌트의 애니메이션을 구현하고, useTimer 커스텀 훅을 작성했습니다.",
        "color picker 라이브러리를 활용해 사용자가 시계 색상을 커스터마이징할 수 있는 기능을 구현했습니다.",
        "Next.js API Routes로 CORS 이슈를 우회하고, Vercel에 배포했습니다.",
      ],
      results: [
        "Vercel 배포 후 라이브 운영을 이어가고 있습니다.",
        "사용자가 시계 색상·애니메이션을 커스터마이징하며 티켓팅에 사용할 수 있게 됐습니다.",
      ],
      techStack:
        "Next.js, React.js, TypeScript, pnpm, framer-motion, Tailwind CSS",
      links: [
        { name: "GitHub", url: "https://github.com/bamin0422/my-ticket-timer" },
        { name: "site URL", url: "https://my-ticket-timer.vercel.app" },
      ],
    },
  ],
  contact: [
    { name: "Email", url: "mailto:bamin0422@gmail.com" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/대인-민-7a8a0b143" },
    { name: "GitHub", url: "https://github.com/bamin0422" },
  ],
};
