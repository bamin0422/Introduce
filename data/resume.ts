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
    "하나의 기술을 배워 여러 환경에 녹여내는 데에서 개발자로서의 가치를 찾습니다. React와 Next.js를 중심으로 웹 개발을 이어가며, 이제는 웹과 앱, 데스크톱 등 다양한 플랫폼을 넘나들며 일관된 사용자 경험과 유지보수 가능한 구조를 추구하고 있습니다. 컴포넌트 중심의 UI 설계와 Feature-Sliced Design을 통해 명확한 역할 분리와 모듈화를 실현하며, 성능 최적화와 사용자 중심의 설계에 중점을 둡니다.",
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
      items: ["Jotai", "TanStack Query", "Context API", "Recoil"],
    },
    {
      category: "Development Tools",
      items: ["Vite", "pnpm", "Git", "ESLint", "Prettier"],
    },
    {
      category: "Architecture",
      items: ["Feature-Sliced Design", "MVVM", "Component Design", "Monorepo"],
    },
  ],
  experience: [
    {
      company: "다우기술",
      position: "Frontend Developer",
      period: "2023.07 ~ 현재",
      projects: [
        {
          title: "다우오피스 4.0 Frontend 운영",
          description:
            "다우오피스 4.0 프론트엔드 운영 및 유지보수 작업을 진행하고 있습니다.",
          tasks: [
            "다우오피스 4.0.0.0 ~ 부터 운영 및 유지보수 작업",
            "Bitbucket Webhook과 LLM 활용 코드리뷰 자동화",
            "IE, Chrome, Safari 등 다양한 브라우저 환경에서의 호환성 이슈 해결",
            "운영 중 발생하는 결함 건 해결 및 개선",
            "Electron 기반 PC 메신저 결함 건 해결 및 개선",
            "모바일 웹 브릿지 연동 및 모바일 웹 브릿지 결함 건 해결 및 개선",
          ],
          techStack: "Next.js, TypeScript, Electron",
        },
        {
          title: "다우오피스 4.0 Frontend 개발",
          description:
            "Backbone.js로 구성되어 있는 다우오피스 Frontend를 Next.js, TypeScript기반으로 모노레포로 구성하여 기존 다우오피스의 프론트엔드를 개선해 개발하는 프로젝트입니다.",
          tasks: [
            "공통 컴포넌트 개발: Calendar, DatePicker, Table, CheckBox, AddressDialog, Kakaomap 등",
            "Turbo Code Generator를 활용한 컴포넌트 자동 생성 시스템 구현",
            "기존 그룹웨어 컨텐츠 개선 및 Backbone.js 마이그레이션",
            "카카오맵 컴포넌트화 및 선언적 사용 방식 구현",
            "인증 및 사용자 정보: 로그인 로직, 간편 비밀번호 컴포넌트, Tanstack Query와 GraphQL 활용",
            "대시보드-가젯 포팅: 기존 Backbone.js 코드를 React 코드로 포팅",
            "통합설정: Tanstack Table을 활용한 관리 테이블 구현",
            "경영업무포탈-GNB: Jotai atomWithStorage, Tanstack Query, Fuse.js 활용한 검색 기능",
            "경영업무포탈-Tab: Jotai atomWithStorage를 활용한 탭 관리 시스템",
          ],
          techStack:
            "Next.js, TypeScript, StoryBook, Vite, Jotai, Context API, Tanstack Query, Tanstack Table, pnpm, tailwind CSS",
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
