import ProjectCard from "./ProjectCard";
import { ProjectInfo } from "./types";

const projects: ProjectInfo[] = [
  {
    title: "HW Monitor",
    urlList: [
      { name: "Website", href: "https://hw-monitor-website.vercel.app" },
      { name: "GitHub", href: "https://github.com/bamin0422/hw-monitor" },
      { name: "Download", href: "https://github.com/bamin0422/hw-monitor/releases/latest" },
    ],
    startDate: "2025.01",
    endDate: "현재",
    info: "Serial, TCP, UDP, BLE 하드웨어 통신을 실시간으로 모니터링하고, LLM 채팅으로 통신 데이터를 분석할 수 있는 Electron 기반 데스크톱 애플리케이션입니다.",
    taskList: [
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
  },
  {
    title: "사업자 등록번호 진위 여부 조회 MCP 서버",
    urlList: [
      { name: "GitHub", href: "https://github.com/bamin0422/mcp_business_check_server" },
      { name: "Smithery AI", href: "https://smithery.ai/server/@bamin0422/mcp_business_check_server" },
    ],
    startDate: "2024.07",
    endDate: "2024.09",
    info: "Model Context Protocol (MCP) 서버를 개발하여 사업자등록번호 진위 확인 및 정보 조회 기능을 구현했습니다.",
    taskList: [
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
  },
  {
    title: "friendly-regex",
    urlList: [
      { name: "GitHub", href: "https://github.com/bamin0422/friendly-regex" },
      { name: "npm", href: "https://www.npmjs.com/package/friendly-regex" },
    ],
    startDate: "2024.09",
    endDate: "현재",
    info: "자주 사용하는 정규표현식을 npm 패키지로 배포해 편리하게 사용할 수 있도록 만든 개인 프로젝트입니다.",
    taskList: [
      "프로젝트 전개 및 패키지 매니저 npm 설정",
      "정규 표현식 추가",
      "패키지 배포 및 버전 관리",
    ],
    techStack: "JavaScript, Regex, npm, npm publish",
  },
  {
    title: "my-ticket-timer",
    urlList: [
      { name: "GitHub", href: "https://github.com/bamin0422/my-ticket-timer" },
      { name: "Live", href: "https://my-ticket-timer.vercel.app" },
    ],
    startDate: "2024.07",
    endDate: "2024.09",
    info: "사용자가 직접 시계를 커스텀하며 티켓팅을 할 수 있도록 여러 애니메이션을 적용한 웹 앱입니다.",
    taskList: [
      "프로젝트 전개 및 FSD 아키텍쳐 기반으로 구조 설정",
      "framer-motion 통한 SearchBar, Timer 컴포넌트 애니메이션 구현",
      "useTimer 커스텀 훅 구현",
      "color picker 라이브러리 활용한 커스텀 기능",
      "Next.js API Routes로 CORS Error 방지",
      "Vercel 배포",
    ],
    techStack:
      "Next.js, React.js, TypeScript, pnpm, framer-motion, Tailwind CSS",
  },
];

export function ProjectsSection() {
  return (
    <section id="project">
      <h2 className="text-2xl font-bold tracking-tight mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((projectInfo) => (
          <ProjectCard key={projectInfo.title} projectInfo={projectInfo} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
