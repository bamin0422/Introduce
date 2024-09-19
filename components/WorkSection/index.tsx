import { EmphasisText } from "../EmphasisText";

// TODO : 각각의 CompanyCard > ProjectCard 컴포넌트로 컴포넌트화할 것!
export function WorkSection() {
  return (
    <section id="work" className="flex flex-col p-[2rem] mt-[3rem]">
      <h2 className="text-[3rem] text-black font-semibold pb-10">
        Work
        <EmphasisText title="." />
      </h2>
      {/* // component divider */}
      <div className="sm:grid sm:items-stretch sm:grid-cols-3 gap-1">
        <div
          id="company"
          className="flex flex-col justify-start pe-1 sm:col-span-1"
        >
          <h3 className="text-[1.8rem] text-black font-semibold">
            다우기술
            <EmphasisText title="." />
          </h3>
          <span className="sm:text-[1.3rem] text-sm text-slate-500" id="role">
            Frontend Developer
          </span>
          <span className="sm:text-[1rem] text-sm text-slate-500" id="datetime">
            2023.07 ~ 현재
          </span>
        </div>
        <div
          id="project"
          className="flex flex-col w-full sm:col-span-2 sm:gap-2 gap-1"
        >
          <h4
            id="project-emp"
            className="sm:text-[1.8rem] text-[18px] text-black font-semibold"
          >
            다우오피스 차세대 Front-End
            <EmphasisText title="." />
          </h4>
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
            Next.js, TypeScript기반으로 모노레포로 구성하여 기존 다우오피스의
            프론트엔드를 개선해 개발하는 프로젝트입니다
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
            공통 컴포넌트 개발: Calendar, DatePicker, Table, CheckBox 등.
          </li>
          <li className="custom-list-marker sm:text-[1rem] text-sm font-normal text-slate-500">
            공통 컴포넌트 개발: Turbo Code Generator를 활용해, 불필요하게
            컴포넌트를 생성할 필요없이 mdx와 stories 파일과 공통 컴포넌트 구성
            파일을 Generating한다.
          </li>
          <li className="custom-list-marker sm:text-[1rem] text-sm font-normal text-slate-500">
            인증 및 사용자 정보: 로그인 로직 구성, 간편 비밀번호 컴포넌트 및
            Provider 구현, Tanstack Query와 GraphQL 활용 사용자 정보 fetch.
          </li>
          <li className="custom-list-marker sm:text-[1rem] text-sm font-normal text-slate-500">
            대시보드-가젯 포팅: 기존 Backbone.js 코드로 작성되어 있는 가젯
            코드들을 리액트 코드로 포팅하는 작업. (캘린더, Works 차트형, ToDo+,
            예약 바로가기 가젯 등)
          </li>
          <li className="custom-list-marker sm:text-[1rem] text-sm font-normal text-slate-500">
            통합설정: 통합으로 환경설정하는 부분으로, 관리에 나타나는 여러
            Table을 Tanstack Table을 활용해 구현.
          </li>
          <li className="custom-list-marker sm:text-[1rem] text-sm font-normal text-slate-500">
            경영업무포탈-GNB : jotai의 atomWithStorage 사용해, cookieStorage에
            최근 사용한 목록 정보 저장. 즐겨찾기는 Tanstack Query의 useMutation
            사용해 구현. 검색 기능은 Fuse.js를 활용해 구현.
          </li>
          <li className="custom-list-marker sm:text-[1rem] text-sm font-normal text-slate-500">
            경영업무포탈-Tab : jotai의 atomWithStorage를 활용해 sessionStorage에
            선택된 탭들을 저장하는 로직 구현. Tab 컴포넌트 구현.
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
            Next.js, TypeScript, StoryBook, Vite, Jotai, Context API, Tanstack
            Query, Tanstack Table, pnpm, tailwind CSS
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
            다우기술
            <EmphasisText title="." />
          </h3>
          <span className="sm:text-[1.3rem] text-sm text-slate-500" id="role">
            Android Developer
          </span>
          <span className="sm:text-[1rem] text-sm text-slate-500" id="datetime">
            2023.07 ~ 현재
          </span>
        </div>
        <div
          id="project"
          className="flex flex-col w-full sm:col-span-2 sm:gap-2 gap-1"
        >
          <h4
            id="project-emp"
            className="sm:text-[1.8rem] text-[18px] text-black font-semibold"
          >
            Enfax - 안드로이드 앱 유지보수
            <EmphasisText title="." />
          </h4>
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
            모바일 팩스 - Enfax, 안드로이드 앱 유지보수 및 리뷰 이벤트 팝업 노출
            개발 건입니다.
          </span>
          <span
            id="project-"
            className="sm:text-[1.3rem] text-lg text-slate-800 font-semibold"
          >
            My Task
            <EmphasisText title="." />
          </span>
          <li className="custom-list-marker sm:text-[1rem] text-sm font-normal text-slate-500">
            불필요한 의존성 주입 제거 및 Retrofit Base Url 로직 개선.
          </li>
          <li className="custom-list-marker sm:text-[1rem] text-sm font-normal text-slate-500">
            앱 리뷰 이벤트 팝업 공지 노출 (useCase 생성).
          </li>
          <li className="custom-list-marker sm:text-[1rem] text-sm font-normal text-slate-500">
            WebView 캐시모드 설정 통한, 이벤트 팝업 다이얼로그에 개발 완료 이전
            페이지 보여지는 현상 해결.
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
            Android, Kotlin, Retrofit, WebView
            <EmphasisText title="." />
          </span>
          <h4
            id="project-emp"
            className="mt-10 sm:text-[1.8rem] text-[18px] text-black font-semibold"
          >
            삐약삐약 안드로이드 앱 운영 및 2차 개발
            <EmphasisText title="." />
          </h4>
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
            영양제 복용관리 및 추천 서비스, 삐약삐약 안드로이드 앱 1.0.0.0 ~
            1.0.2.4 버전 관리 및 운영, 2차 개발.
          </span>
          <span
            id="project-"
            className="sm:text-[1.3rem] text-lg text-slate-800 font-semibold"
          >
            My Task
            <EmphasisText title="." />
          </span>
          <li className="custom-list-marker sm:text-[1rem] text-sm font-normal text-slate-500">
            Mobile Web과 WebBridge 연결 (판매링크, 건강기록 화면 수정 다이얼로그
            등).
          </li>
          <li className="custom-list-marker sm:text-[1rem] text-sm font-normal text-slate-500">
            KMM(Kotlin Multiplatform Mobile)로 MVVM 아키텍쳐에 맞춰, Android,
            iOS 공통 비즈니스 로직 작성.
          </li>
          <li className="custom-list-marker sm:text-[1rem] text-sm font-normal text-slate-500">
            TripleT와 Jenkins 활용, 출시노트 포함해 구글플레이 각 트랙별 자동
            배포할 수 있도록 구현.
          </li>
          <li className="custom-list-marker sm:text-[1rem] text-sm font-normal text-slate-500">
            2차 개발 UI 및 기능 구현.
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
            Android, Kotlin, Ktor, KMP(Kotlin Multiplatform), WebView
            <EmphasisText title="." />
          </span>
        </div>
      </div>
    </section>
  );
}

export default WorkSection;
