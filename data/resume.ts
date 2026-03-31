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
  description: string;
  tasks: string[];
  techStack: string;
}

export interface Project {
  title: string;
  period: string;
  description: string;
  tasks: string[];
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
      items: ["Feature-Sliced Design", "Monorepo", "SSR (Next.js App Router)", "Docker", "Nginx", "Sentry"],
    },
  ],
  experience: [
    {
      company: "다우기술",
      position: "Frontend Developer",
      period: "2023.07 ~ 현재",
      projects: [
        {
          title: "다우오피스 4.0 Frontend 운영 및 자동화",
          description:
            "다우오피스 4.0 프론트엔드 운영, 1,484건 버그 수정, AI 코드리뷰 자동화 시스템 구축, Sentry 에러 모니터링 재설계를 주도했습니다.",
          tasks: [
            "v4.0.0 ~ v4.2.2 운영 기간 동안 1,484건 결함 주도적 해결",
            "AI 기반 PR 코드리뷰 자동화 시스템 설계·개발 (리뷰 응답 시간 99% 단축)",
            "Sentry 선택적 로깅 시스템 설계 및 3개 앱 적용",
            "모바일 앱 내 WebView/WebBridge 연동 및 결함 해결",
            "Electron 기반 PC 메신저 결함 건 해결 및 개선",
            "Backbone.js 레거시 기술부채 단계적 청산",
          ],
          techStack: "Next.js, TypeScript, Electron, Sentry, NestJS",
        },
        {
          title: "다우오피스 4.0 Frontend 개발",
          description:
            "기업용 그룹웨어의 차세대 프론트엔드를 Next.js + TypeScript 모노레포로 설계·개발. 80개 이상의 어드민 설정 페이지, 대시보드 가젯, RBAC 권한 관리 등 운영 시스템을 구축했습니다.",
          tasks: [
            "통합설정(GlobalConfig) 어드민 시스템: 5개 카테고리, 80개+ 설정 페이지 구축",
            "RBAC 권한 관리 시스템: 관리자 목록 CRUD, 권한 설정, 관리자 로그 다운로드",
            "공통 UI 컴포넌트 라이브러리: Radix UI 기반 Select, Dialog, DateField 등 개발",
            "대시보드 가젯 시스템: 캘린더, 차트(ECharts), Todo 등 40개+ 가젯 독립 패키지화",
            "Turbo Code Generator로 컴포넌트 Storybook stories 자동 생성",
            "인증 시스템: 로그인, 간편 비밀번호, TanStack Query + GraphQL 사용자 정보 fetch",
            "다국어(i18n) 6개 언어 리소스 관리, 서버 사이드 로케일 쿠키 연동",
          ],
          techStack:
            "Next.js (App Router), TypeScript, Jotai, TanStack Query, TanStack Table, Storybook, Vite, pnpm, Turborepo, Tailwind CSS",
        },
      ],
    },
    {
      company: "다우기술",
      position: "Android Developer",
      period: "2022.11 ~ 2023.07",
      projects: [
        {
          title: "Enfax - 안드로이드 앱 유지보수",
          description:
            "모바일 팩스 - Enfax, 안드로이드 앱 유지보수 및 리뷰 이벤트 팝업 노출 개발 건입니다.",
          tasks: [
            "불필요한 의존성 주입 제거 및 Retrofit Base Url 로직 개선",
            "앱 리뷰 이벤트 팝업 공지 노출 (useCase 생성)",
            "WebView 캐시모드 설정 통한, 이벤트 팝업 다이얼로그 이슈 해결",
          ],
          techStack: "Android, Kotlin, Retrofit, WebView",
        },
        {
          title: "삐약삐약 안드로이드 앱 운영 및 2차 개발",
          description:
            "영양제 복용관리 및 추천 서비스, 삐약삐약 안드로이드 앱 1.0.0.0 ~ 1.0.2.4 버전 관리 및 운영, 2차 개발.",
          tasks: [
            "Mobile Web과 WebBridge 연결 (판매링크, 건강기록 화면 수정 다이얼로그 등)",
            "KMM(Kotlin Multiplatform Mobile)로 MVVM 아키텍쳐에 맞춰, Android, iOS 공통 비즈니스 로직 작성",
            "TripleT와 Jenkins 활용, 출시노트 포함해 구글플레이 각 트랙별 자동 배포할 수 있도록 구현",
            "2차 개발 UI 및 기능 구현",
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
      description:
        "Serial, TCP, UDP, BLE 하드웨어 통신을 실시간으로 모니터링하고, LLM 채팅으로 통신 데이터를 분석할 수 있는 Electron 기반 데스크톱 애플리케이션입니다. GitHub Actions CI/CD를 통해 macOS, Windows, Linux 크로스 플랫폼 빌드 및 자동 업데이트를 지원합니다.",
      tasks: [
        "Electron + React + TypeScript 기반 데스크톱 앱 설계 및 구현",
        "Serial, TCP (Client/Server), UDP, BLE 멀티 프로토콜 통신 지원",
        "LangChain 기반 멀티 LLM 연동 (Anthropic, OpenAI, Gemini, Groq, Ollama)",
        "RAG 기반 통신 데이터 AI 분석 기능 구현",
        "Supabase + Google OAuth 인증 및 클라우드 설정 동기화",
        "GitHub Actions CI/CD로 OS별 크로스 플랫폼 빌드 자동화",
        "electron-updater를 활용한 앱 자동 업데이트 기능",
        "i18n 다국어 지원 (한국어/영어)",
      ],
      techStack:
        "Electron, React, TypeScript, electron-vite, Tailwind CSS, Radix UI, Zustand, LangChain, serialport, Supabase, electron-updater",
      links: [
        { name: "Website", url: "https://hw-monitor-website.vercel.app" },
        { name: "GitHub", url: "https://github.com/bamin0422/hw-monitor" },
        { name: "Download", url: "https://github.com/bamin0422/hw-monitor/releases/latest" },
      ],
    },
    {
      title: "사업자 등록번호 진위 여부 조회 MCP 서버",
      period: "2024.07 ~ 2024.09",
      description:
        "Model Context Protocol (MCP) 서버를 개발하여 사업자등록번호 진위 확인 및 정보 조회 기능을 구현했습니다. 공공데이터포털 API를 활용한 실시간 사업자 정보 조회 서비스입니다.",
      tasks: [
        "MVC 패턴 기반 TypeScript 서버 아키텍처 설계 및 구현",
        "REST API와 MCP 도구 동시 제공 구조 설계",
        "공공데이터포털 API 연동 및 사업자등록번호 검증 로직 구현",
        "Docker 컨테이너화 및 Smithery AI 배포 설정",
        "사업자 정보 조회 및 진위 확인 기능 개발",
        "API 인증키 관리 및 보안 처리",
        "에러 핸들링 및 로깅 시스템 구축",
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
      description:
        "자주 사용하는 정규표현식을 잊고있다가 사용할 때 잘 기억이 나지 않는 불편함때문에, npm 패키지로 배포해 편리하게 사용하고 싶어 시작한 개인프로젝트입니다.",
      tasks: [
        "프로젝트 전개 및 패키지 매니저 npm 설정",
        "정규 표현식 추가",
        "패키지 배포 및 버전 관리",
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
      description:
        "티켓팀을 할때, 사용자가 직접 시계를 커스텀하며 좀 더 재미있게 티켓팅을 할 수 있도록 여러 애니메이션을 적용했습니다.",
      tasks: [
        "프로젝트 전개 및 FSD 아키텍쳐 기반으로 구조 설정",
        "framer-motion 통한, SearchBar 컴포넌트 애니메이션 적용 및 구현",
        "framer-motion 통한, Timer 컴포넌트 애니메이션 적용 및 구현",
        "Timer 컴포넌트 사용 위한, useTimer 훅 구현",
        "color picker 라이브러리 활용해, color picker 구현",
        "Next.js API Routes 사용해, CORS Error 방지",
        "Vercel Deploy",
      ],
      techStack:
        "Next.js, React.js, TypeScript, pnpm, framer-motion, tailwind CSS",
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
