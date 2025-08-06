import { EmphasisText } from "../EmphasisText";
import ProjectCard from "./ProjectCard";
import { ProjectInfo } from "./types";

const projects: ProjectInfo[] = [
  {
    title: "사업자 등록번호 진위 여부 조회 MCP 서버",
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
    info: "Model Context Protocol (MCP) 서버를 개발하여 사업자등록번호 진위 확인 및 정보 조회 기능을 구현했습니다. 공공데이터포털 API를 활용한 실시간 사업자 정보 조회 서비스입니다.",
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
      {
        name: "github",
        href: "https://github.com/bamin0422/friendly-regex",
      },
      {
        name: "npm",
        href: "https://www.npmjs.com/package/friendly-regex",
      },
    ],
    startDate: "2024.09",
    endDate: "현재",
    info: "자주 사용하는 정규표현식을 잊고있다가 사용할 때 잘 기억이 나지 않는 불편함때문에, npm 패키지로 배포해 편리하게 사용하고 싶어 시작한 개인프로젝트입니다",
    taskList: [
      "프로젝트 전개 및 패키지 매니저 npm 설정.",
      "정규 표현식 추가.",
      "패키지 배포 및 버전 관리.",
    ],
    techStack: "JavaScript, Regex, npm, npm publish",
  },
  {
    title: "my-ticket-timer",
    urlList: [
      {
        name: "github",
        href: "https://github.com/bamin0422/my-ticket-timer",
      },
      {
        name: "site URL",
        href: "https://my-ticket-timer.vercel.app",
      },
    ],
    startDate: "2024.07",
    endDate: "2024.09",
    info: "티켓팀을 할때, 사용자가 직접 시계를 커스텀하며 좀 더 재미있게 티켓팅을 할 수 있도록 여러 애니메이션을 적용했습니다.",
    taskList: [
      "프로젝트 전개 및 FSD 아키텍쳐 기반으로 구조 설정.",
      "framer-motion 통한, SearchBar 컴포넌트 애니메이션 적용 및 구현.",
      "framer-motion 통한, Timer 컴포넌트 애니메이션 적용 및 구현.",
      "Timer 컴포넌트 사용 위한, useTimer 훅 구현.",
      "color picker 라이브러리 활용해, color picker 구현.",
      "Timer 컴포넌트 사용 위한, useTimer 훅 구현.",
      "Next.js API Routes 사용해, CORS Error 방지.",
      "Vercel Deploy.",
    ],
    techStack:
      "Next.js, React.js, TypeScript, pnpm, framer-motion, tailwind CSS",
  },
];

export function ProjectsSection() {
  return (
    <section id="project" className="flex flex-col p-[2rem] mt-[3rem]">
      <h2 className="text-[3rem] text-black font-semibold pb-10">
        Project
        <EmphasisText title="." />
      </h2>
      <div className="sm:grid sm:items-stretch sm:grid-cols-3 gap-1">
        {projects.map((projectInfo) => (
          <ProjectCard projectInfo={projectInfo} />
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
