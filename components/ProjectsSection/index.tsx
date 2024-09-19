import { EmphasisText } from "../EmphasisText";

// TODO : 각각의 CompanyCard > ProjectCard 컴포넌트로 컴포넌트화할 것!
export function ProjectsSection() {
  return (
    <section id="project" className="flex flex-col p-[2rem] mt-[3rem]">
      <h2 className="text-[3rem] text-black font-semibold pb-10">
        Project
        <EmphasisText title="." />
      </h2>
      {/* // component divider */}
      <div className="sm:grid sm:items-stretch sm:grid-cols-3 gap-1">
        <div
          id="company"
          className="flex flex-col justify-start pe-1 sm:col-span-1"
        >
          <h3 className="text-[1.8rem] text-black font-semibold">
            Mission-UI
            <EmphasisText title="." />
          </h3>
          <a
            className="sm:text-[1.1rem] text-sm text-slate-500"
            id="role"
            href="https://github.com/mission-ui/mission-ui"
          >
            github
          </a>
          <span className="sm:text-[1rem] text-sm text-slate-500" id="datetime">
            2024.09 ~ 현재
          </span>
        </div>
        <div
          id="project"
          className="flex flex-col w-full sm:col-span-2 sm:gap-2 gap-1"
        >
          <span
            id="project-info"
            className="sm:text-[1.3rem] text-lg text-slate-800 font-semibold"
          >
            Info
            <EmphasisText title="." />
          </span>
          <span
            id="project-info-contents"
            className="sm:text-[1rem] text-sm text-slate-500 font-normal"
          >
            주니어 프론트엔드 개발자들이 UI 라이브러리를 개발해 npm 배포와,
            storybook showcase에 배포한다는 mission을 가지고 시작한
            프로젝트입니다
            <EmphasisText title="." />
          </span>
          <span
            id="project-"
            className="sm:text-[1.3rem] text-lg text-slate-800 font-semibold"
          >
            My Task
            <EmphasisText title="." />
          </span>
          <li className="custom-list-marker sm:text-[1rem] text-sm font-normal text-slate-500">
            프로젝트 전개 및 패키지 매니저 yarn berry 설정.
          </li>
          <li className="custom-list-marker sm:text-[1rem] text-sm font-normal text-slate-500">
            Storybook 기본 설정 (theme 등).
          </li>
          <li className="custom-list-marker sm:text-[1rem] text-sm font-normal text-slate-500">
            FSD 아키텍쳐 기반으로 프로젝트 구조 구성.
          </li>
          <li className="custom-list-marker sm:text-[1rem] text-sm font-normal text-slate-500">
            공통 컴포넌트 개발.
          </li>
          <span
            id="project-tech"
            className="sm:text-[1.3rem] text-lg text-slate-800 font-semibold"
          >
            Tech Stack
            <EmphasisText title="." />
          </span>
          <span
            id="project-info-contents"
            className="sm:text-[1rem] text-sm text-slate-500 font-normal"
          >
            React.js, TypeScript, StoryBook, Vite, yarn berry, tailwind CSS,
            framer-motion
            <EmphasisText title="." />
          </span>
        </div>
      </div>
      {/* component divider */}
      <hr className="border-t-[0.01rem] border-slate-300 my-10" />
      <div className="sm:grid sm:items-stretch sm:grid-cols-3 gap-1">
        <div
          id="company"
          className="flex flex-col justify-start pe-1 sm:col-span-1"
        >
          <h3 className="text-[1.8rem] text-black font-semibold">
            friendly-regex
            <EmphasisText title="." />
          </h3>
          <a
            className="sm:text-[1.1rem] text-sm text-slate-500"
            id="role"
            href="https://github.com/bamin0422/friendly-regex/tree/main"
          >
            github
          </a>
          <a
            className="sm:text-[1.1rem] text-sm text-slate-500"
            id="role"
            href="https://www.npmjs.com/package/friendly-regex"
          >
            npm
          </a>
          <span className="sm:text-[1rem] text-sm text-slate-500" id="datetime">
            2024.09 ~ 현재
          </span>
        </div>
        <div
          id="project"
          className="flex flex-col w-full sm:col-span-2 sm:gap-2 gap-1"
        >
          <span
            id="project-info"
            className="sm:text-[1.3rem] text-lg text-slate-800 font-semibold"
          >
            Info
            <EmphasisText title="." />
          </span>
          <span
            id="project-info-contents"
            className="sm:text-[1rem] text-sm text-slate-500 font-normal"
          >
            자주 사용하는 정규표현식을 잊고있다가 사용할 때 잘 기억이 나지 않는
            불편함때문에, npm 패키지로 배포해 편리하게 사용하고 싶어 시작한
            개인프로젝트입니다
            <EmphasisText title="." />
          </span>
          <span
            id="project-"
            className="sm:text-[1.3rem] text-lg text-slate-800 font-semibold"
          >
            My Task
            <EmphasisText title="." />
          </span>
          <li className="custom-list-marker sm:text-[1rem] text-sm font-normal text-slate-500">
            프로젝트 전개 및 패키지 매니저 npm 설정.
          </li>
          <li className="custom-list-marker sm:text-[1rem] text-sm font-normal text-slate-500">
            정규 표현식 추가
          </li>
          <li className="custom-list-marker sm:text-[1rem] text-sm font-normal text-slate-500">
            패키지 배포 및 버전 관리.
          </li>
          <span
            id="project-tech"
            className="sm:text-[1.3rem] text-lg text-slate-800 font-semibold"
          >
            Tech Stack
            <EmphasisText title="." />
          </span>
          <span
            id="project-info-contents"
            className="sm:text-[1rem] text-sm text-slate-500 font-normal"
          >
            JavaScript, Regex, npm, npm publish
            <EmphasisText title="." />
          </span>
        </div>
      </div>

      <hr className="border-t-[0.01rem] border-slate-300 my-10" />
      <div className="sm:grid sm:items-stretch sm:grid-cols-3 gap-1">
        <div
          id="company"
          className="flex flex-col justify-start pe-1 sm:col-span-1"
        >
          <h3 className="text-[1.8rem] text-black font-semibold">
            my-ticket-timer
            <EmphasisText title="." />
          </h3>
          <a
            className="sm:text-[1.1rem] text-sm text-slate-500"
            id="role"
            href="https://github.com/bamin0422/my-ticket-timer"
          >
            github
          </a>
          <a
            className="sm:text-[1.1rem] text-sm text-slate-500"
            id="role"
            href="https://my-ticket-timer.vercel.app/"
          >
            site URL
          </a>
          <span className="sm:text-[1rem] text-sm text-slate-500" id="datetime">
            2024.07 ~ 2024.09
          </span>
        </div>
        <div
          id="project"
          className="flex flex-col w-full sm:col-span-2 sm:gap-2 gap-1"
        >
          <span
            id="project-info"
            className="sm:text-[1.3rem] text-lg text-slate-800 font-semibold"
          >
            Info
            <EmphasisText title="." />
          </span>
          <span
            id="project-info-contents"
            className="sm:text-[1rem] text-sm text-slate-500 font-normal"
          >
            티켓팀을 할때, 사용자가 직접 시계를 커스텀하며 좀 더 재미있게
            티켓팅을 할 수 있도록 여러 애니메이션을 적용했습니다.
            <EmphasisText title="." />
          </span>
          <span
            id="project-"
            className="sm:text-[1.3rem] text-lg text-slate-800 font-semibold"
          >
            My Task
            <EmphasisText title="." />
          </span>
          <li className="custom-list-marker sm:text-[1rem] text-sm font-normal text-slate-500">
            프로젝트 전개 및 FSD 아키텍쳐 기반으로 구조 설정.
          </li>
          <li className="custom-list-marker sm:text-[1rem] text-sm font-normal text-slate-500">
            framer-motion 통한, SearchBar 컴포넌트 애니메이션 적용 및 구현.
          </li>
          <li className="custom-list-marker sm:text-[1rem] text-sm font-normal text-slate-500">
            framer-motion 통한, Timer 컴포넌트 애니메이션 적용 및 구현.
          </li>
          <li className="custom-list-marker sm:text-[1rem] text-sm font-normal text-slate-500">
            Timer 컴포넌트 사용 위한, useTimer 훅 구현.
          </li>
          <li className="custom-list-marker sm:text-[1rem] text-sm font-normal text-slate-500">
            color picker 라이브러리 활용해, color picker 구현.
          </li>
          <li className="custom-list-marker sm:text-[1rem] text-sm font-normal text-slate-500">
            Timer 컴포넌트 사용 위한, useTimer 훅 구현.
          </li>
          <li className="custom-list-marker sm:text-[1rem] text-sm font-normal text-slate-500">
            Next.js API Routes 사용해, CORS Error 방지.
          </li>
          <li className="custom-list-marker sm:text-[1rem] text-sm font-normal text-slate-500">
            Vercel Deploy.
          </li>
          <span
            id="project-tech"
            className="sm:text-[1.3rem] text-lg text-slate-800 font-semibold"
          >
            Tech Stack
            <EmphasisText title="." />
          </span>
          <span
            id="project-info-contents"
            className="sm:text-[1rem] text-sm text-slate-500 font-normal"
          >
            JavaScript, Regex, npm, npm publish
            <EmphasisText title="." />
          </span>
        </div>
      </div>
    </section>
  );
}

export default ProjectsSection;
