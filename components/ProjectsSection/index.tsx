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
      "개발 서버를 여러 개 띄우면 어느 포트가 무엇인지 헷갈리고, 미리보기와 로그가 여기저기 흩어졌습니다. AI에게 화면을 조작시키려면 브라우저 자동화 도구를 따로 띄워야 했습니다.",
    actions: [
      "열린 포트를 3초마다 감지해 프로세스·경로와 함께 보여 주고, 웹 포트는 앱 안에서 바로 미리보기, 직접 띄운 서버는 실시간 로그로 보여 줍니다.",
      "앱에 MCP 서버를 내장해 Claude가 별도 브라우저 없이 앱 안 미리보기 화면을 직접 조작하게 했습니다.",
      "런타임 의존성 없이 만들고 macOS·Windows 빌드와 Homebrew 배포를 구성했습니다.",
    ],
    results: [
      "v0.1.2를 릴리스해 brew 한 줄로 설치할 수 있습니다.",
      "\"3000번 포트에서 메일쓰기 눌러줘\" 같은 말로 앱 안 화면이 움직입니다.",
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
      "Serial, TCP, UDP, BLE로 연결된 장비의 통신을 한 번에 볼 수 있는 데스크톱 도구가 없어, 프로토콜마다 다른 도구를 쓰거나 스크립트를 짜야 했습니다.",
    actions: [
      "Electron 앱 하나에서 네 가지 프로토콜을 지원했습니다.",
      "여러 LLM(Anthropic, OpenAI, Gemini, Ollama 등)을 연결해 받은 데이터를 자동으로 분석하게 했습니다.",
      "Google 로그인과 설정 동기화, 자동 업데이트, 3개 OS 빌드 자동화를 구성했습니다.",
    ],
    results: [
      "한 앱에서 프로토콜을 바꿔 가며 데이터를 실시간으로 볼 수 있습니다.",
      "LLM 분석으로 이상 패턴을 잡는지 실사용 검증 중입니다.",
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
      "공공데이터포털의 사업자 조회 API를 AI 에이전트에서 바로 쓰려면 감싸 주는 서버가 필요했고, 누구나 설정 없이 띄울 수 있어야 했습니다.",
    actions: [
      "MCP 규격으로 구현해 Claude 같은 MCP 클라이언트에 바로 붙게 했습니다.",
      "REST API와 MCP 도구를 함께 제공하고, Docker로 한 번에 배포되게 했습니다.",
    ],
    results: [
      "자연어로 사업자 진위를 조회할 수 있고, Smithery 마켓플레이스에 공개했습니다.",
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
      "프로젝트마다 이메일·전화번호·URL 정규식을 다시 쓰거나 복사했고, 읽기 어려운 정규식은 유지보수도 힘들었습니다.",
    actions: [
      "자주 쓰는 패턴을 이름 붙은 함수로 감싼 가벼운 라이브러리를 만들었습니다.",
      "npm에 공개하고 패턴을 꾸준히 더하고 있습니다.",
    ],
    results: [
      "정규식 리터럴 대신 함수 호출 한 줄로 바꿔 쓸 수 있게 됐습니다.",
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
      "티켓팅에 쓰는 타이머가 다 비슷하게 생겨 보는 재미가 없었습니다. 직접 꾸밀 수 있는 시계가 있으면 좋겠다고 생각했습니다.",
    actions: [
      "FSD 구조로 프로젝트를 잡고, framer-motion으로 타이머 애니메이션을 만들었습니다.",
      "색상을 직접 고를 수 있게 하고, Next.js API Routes로 CORS 문제를 우회했습니다.",
    ],
    results: [
      "Vercel에 배포해 지금도 운영 중입니다.",
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
        <h2 className="section-title">업무 밖에서 만든 것들</h2>
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
