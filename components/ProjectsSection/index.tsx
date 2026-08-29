import ProjectCard from "./ProjectCard";
import Reveal from "@web/components/motion/Reveal";
import TiltCard from "@web/components/motion/TiltCard";
import { ProjectInfo } from "./types";

const projects: ProjectInfo[] = [
  {
    title: "Portfolio — 로컬 포트 관리 IDE형 데스크톱 앱",
    image: "/images/projects/portfolio-demo.gif",
    imageAlt: "Portfolio 앱에서 포트 목록과 미리보기, Claude 명령을 사용하는 데모",
    urlList: [
      { name: "GitHub", href: "https://github.com/bamin0422/portfolio" },
      {
        name: "Download",
        href: "https://github.com/bamin0422/portfolio/releases/latest",
      },
      { name: "LinkedIn", href: "https://lnkd.in/p/gBYs3ZRH" },
    ],
    startDate: "2026.07",
    endDate: "현재",
    problem:
      "로컬에서 개발 서버와 프론트를 여러 개 띄우다 보면 어느 포트가 무엇이었는지 헷갈리고, 종료도 번거로우며, 미리보기와 로그가 여기저기 흩어졌습니다. AI에게 화면 조작을 시키려면 별도 브라우저 자동화 도구를 띄워야 하는 점도 불편했습니다.",
    actions: [
      "lsof로 LISTEN 중인 포트를 3초마다 감지해 포트·PID·프로세스·경로를 표시하고, HTTP 프로브로 web/srv 타입을 판별해 필터·검색·별칭·상단 고정을 지원하는 포트 관리 UI를 구현했습니다.",
      "탭 UI로 여러 포트를 동시에 관리하며, 웹 포트는 앱 내 임베드 미리보기(주소창·뒤로/앞으로·개발자도구)로, 앱에서 실행한 서버는 실시간 stdout/stderr 로그로 보여주도록 했습니다.",
      "앱 자체에 MCP 서버를 내장해 portfolio_snapshot·portfolio_click 등 도구로 Claude가 앱 안 미리보기 화면을 별도 브라우저 없이 직접 조작하는 \"AI 내부 화면 제어\"를 구현했습니다.",
      "런타임 의존성 0의 순수 JS/HTML/CSS로 작성하고, macOS(Apple Silicon·Intel)·Windows 빌드와 Homebrew tap 배포를 구성했습니다.",
    ],
    results: [
      "v0.1.2까지 릴리스해 GitHub Releases와 brew install --cask bamin0422/tap/portfolio로 설치할 수 있으며, LinkedIn과 사내 AI 라운지에 공개했습니다.",
      "\"3000번 포트 화면에서 메일쓰기 눌러줘\" 같은 자연어 명령으로 앱 안 화면이 조작되는 것을 확인했습니다.",
    ],
    techStack:
      "Electron, JavaScript, HTML/CSS, MCP, Claude Code CLI, electron-builder, Homebrew",
  },
  {
    title: "Dr Serial (구 HW Monitor)",
    image: "/images/projects/hw-monitor.jpg",
    imageAlt: "Dr Serial 소개 사이트 — 연결·분석·디버깅 히어로와 앱 화면",
    urlList: [
      { name: "Website", href: "https://dr-serial-website.vercel.app" },
      { name: "GitHub", href: "https://github.com/bamin0422/dr-serial" },
      {
        name: "Download",
        href: "https://github.com/bamin0422/dr-serial/releases/latest",
      },
    ],
    startDate: "2025.01",
    endDate: "현재",
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
  },
  {
    title: "사업자 등록번호 진위 여부 조회 MCP 서버",
    image: "/images/projects/mcp-business-check.jpg",
    imageAlt: "mcp_business_check_server GitHub 저장소 미리보기",
    urlList: [
      {
        name: "GitHub",
        href: "https://github.com/bamin0422/mcp_business_check_server",
      },
      {
        name: "Smithery AI",
        href: "https://smithery.ai/server/@bamin0422/mcp_business_check_server",
      },
    ],
    startDate: "2024.07",
    endDate: "2024.09",
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
  },
  {
    title: "friendly-regex",
    image: "/images/projects/friendly-regex.jpg",
    imageAlt: "friendly-regex GitHub 저장소 미리보기",
    urlList: [
      { name: "GitHub", href: "https://github.com/bamin0422/friendly-regex" },
      { name: "npm", href: "https://www.npmjs.com/package/friendly-regex" },
    ],
    startDate: "2024.09",
    endDate: "현재",
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
  },
  {
    title: "my-ticket-timer",
    image: "/images/projects/my-ticket-timer.jpg",
    imageAlt: "my-ticket-timer 라이브 화면 — 검은 배경의 날짜와 시:분:초 타이머",
    urlList: [
      { name: "GitHub", href: "https://github.com/bamin0422/my-ticket-timer" },
      { name: "Live", href: "https://my-ticket-timer.vercel.app" },
    ],
    startDate: "2024.07",
    endDate: "2024.09",
    problem:
      "티켓팅 시 일반적인 타이머는 정형화된 UI라서 시각적 즐거움이 부족했습니다. 사용자가 직접 시계를 커스터마이징하며 티켓팅 경험을 더 재미있게 만들 수 있는 도구가 필요했습니다.",
    actions: [
      "FSD(Feature-Sliced Design) 아키텍처를 기반으로 프로젝트 구조를 설정했습니다.",
      "framer-motion을 활용해 SearchBar·Timer 컴포넌트의 애니메이션을 구현하고, useTimer 커스텀 훅을 작성했습니다.",
      "color picker 라이브러리를 활용해 사용자가 시계 색상을 커스터마이징할 수 있는 기능을 구현했습니다.",
      "Next.js API Routes로 CORS 이슈를 우회하고, Vercel에 배포했습니다.",
    ],
    results: [
      "Vercel 배포 후 라이브 운영을 이어가고 있습니다 (https://my-ticket-timer.vercel.app).",
      "사용자가 시계 색상·애니메이션을 커스터마이징하며 티켓팅에 사용할 수 있게 됐습니다.",
    ],
    techStack:
      "Next.js, React.js, TypeScript, pnpm, framer-motion, Tailwind CSS",
  },
];

export function ProjectsSection() {
  return (
    <section id="project" className="scroll-mt-24">
      <Reveal>
        <p className="section-eyebrow">Projects · {projects.length}</p>
        <h2 className="section-title">사이드 프로젝트</h2>
      </Reveal>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((projectInfo, i) => (
          <Reveal key={projectInfo.title} delay={(i % 2) * 0.08}>
            <TiltCard className="h-full">
              <ProjectCard projectInfo={projectInfo} />
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
