import { EmphasisText } from "../EmphasisText";
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
        title: "다우오피스 4.0 Frontend 운영",
        info: "다우오피스 4.0 프론트엔드 운영 및 유지보수 작업을 진행하고 있습니다.",
        myTaskList: [
          "다우오피스 4.0.0.0 ~ 부터 운영 및 유지보수 작업.",
          "Bitbucket Webhook과 LLM 활용 코드리뷰 자동화.",
          "IE, Chrome, Safari 등 다양한 브라우저 환경에서의 호환성 이슈 해결.",
          "운영 중 발생하는 결함 건 해결 및 개선.",
          "Electron 기반 PC 메신저 결함 건 해결 및 개선.",
          "모바일 웹 브릿지 연동 및 모바일 웹 브릿지 결함 건 해결 및 개선.",
        ],
        techStack: "Next.js, TypeScript, Electron",
      },
      {
        title: "다우오피스 4.0 Frontend 개발",
        info: "Backbone.js로 구성되어 있는 다우오피스 Frontend를 Next.js, TypeScript기반으로 모노레포로 구성하여 기존 다우오피스의 프론트엔드를 개선해 개발하는 프로젝트입니다.",
        myTaskList: [
          "공통 컴포넌트 개발: Calendar, DatePicker, Table, CheckBox, AddressDialog, Kakaomap 등.",
          "공통 컴포넌트 개발: Turbo Code Generator를 활용해, 불필요하게 컴포넌트를 생성할 필요없이 mdx와 stories 파일과 공통 컴포넌트 구성 파일을 Generating할 수 있게 구현.",
          "기존 그룹웨어 컨텐츠 개선 : Backbone.js로 되어있는 프로젝트를 모두 migration하지 못해 기존 컨텐츠의 스타일 및 기능을 개선해 로드.",
          "기존 스크립트 방식으로 로드해 사용할 수 밖에 없는 카카오맵을 선언적으로 사용할 수 있도록 컴포넌트화해 구성.",
          "인증 및 사용자 정보: 로그인 로직 구성, 간편 비밀번호 컴포넌트 및 Provider 구현, Tanstack Query와 GraphQL 활용 사용자 정보 fetch.",
          "대시보드-가젯 포팅: 기존 Backbone.js 코드로 작성되어 있는 가젯 코드들을 리액트 코드로 포팅하는 작업. (캘린더, Works 차트형, ToDo+, 예약 바로가기 가젯 등)",
          "통합설정: 통합으로 환경설정하는 부분으로, 관리에 나타나는 여러 Table을 Tanstack Table을 활용해 구현.",
          "경영업무포탈-GNB : jotai의 atomWithStorage 사용해, cookieStorage에 최근 사용한 목록 정보 저장. 즐겨찾기는 Tanstack Query의 useMutation 사용해 구현. 검색 기능은 Fuse.js를 활용해 구현.",
          "경영업무포탈-Tab : jotai의 atomWithStorage를 활용해 sessionStorage에 선택된 탭들을 저장하는 로직 구현. Tab 컴포넌트 구현.",
        ],
        techStack:
          "Next.js, TypeScript, StoryBook, Vite, Jotai, Context API, Tanstack Query, Tanstack Table, pnpm, tailwind CSS",
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
        title: "Enfax - 안드로이드 앱 유지보수",
        info: "모바일 팩스 - Enfax, 안드로이드 앱 유지보수 및 리뷰 이벤트 팝업 노출 개발 건입니다.",
        myTaskList: [
          "불필요한 의존성 주입 제거 및 Retrofit Base Url 로직 개선.",
          "앱 리뷰 이벤트 팝업 공지 노출 (useCase 생성).",
          "WebView 캐시모드 설정 통한, 이벤트 팝업 다이얼로그에 개발 완료 이전 페이지 보여지는 현상 해결.",
        ],
        techStack: "Android, Kotlin, Retrofit, WebView",
      },
      {
        title: "삐약삐약 안드로이드 앱 운영 및 2차 개발",
        info: "영양제 복용관리 및 추천 서비스, 삐약삐약 안드로이드 앱 1.0.0.0 ~ 1.0.2.4 버전 관리 및 운영, 2차 개발.",
        myTaskList: [
          "Mobile Web과 WebBridge 연결 (판매링크, 건강기록 화면 수정 다이얼로그 등).",
          "KMM(Kotlin Multiplatform Mobile)로 MVVM 아키텍쳐에 맞춰, Android, iOS 공통 비즈니스 로직 작성.",
          "TripleT와 Jenkins 활용, 출시노트 포함해 구글플레이 각 트랙별 자동 배포할 수 있도록 구현.",
          "2차 개발 UI 및 기능 구현.",
        ],
        techStack: "Android, Kotlin, Ktor, KMP(Kotlin Multiplatform), WebView",
      },
    ],
  },
];

// TODO : 각각의 CompanyCard > ProjectCard 컴포넌트로 컴포넌트화할 것!
export function WorkSection() {
  return (
    <section id="work" className="flex flex-col p-[2rem] mt-[3rem]">
      <h2 className="text-[3rem] text-black font-semibold pb-10">
        Work
        <EmphasisText title="." />
      </h2>
      <div className="flex flex-col gap-10">
        {workCardList.map((workInfo) => (
          <WorkCard workInfo={workInfo} />
        ))}
      </div>
    </section>
  );
}

export default WorkSection;
