import { EmphasisText } from "../EmphasisText";
import { WorkInfo } from "./types";
import WorkCard from "./WorkCard";

const workCardList: WorkInfo[] = [
  {
    title: "다우기술",
    role: "Frontend Developer",
    startDate: "2023.07",
    endDate: "2026.02",
    details: [
      {
        title: "dop-front 통합 프론트엔드 시스템 개발",
        info: "기업용 그룹웨어 SaaS 플랫폼인 다우오피스의 차세대 통합 프론트엔드를 설계·개발하고, Backbone.js 레거시 시스템을 Next.js와 TypeScript로 점진적으로 전환 중입니다.",
        myTaskList: [
          "모노레포 아키텍처 구축 참여: 코드 재사용성과 빌드 성능 향상을 위해 pnpm Workspace와 Turborepo 기반 모노레포 아키텍처 구축에 참여했습니다.",
          "서비스 앱 및 공유 패키지 관리: 4개의 서비스 앱과 7개의 공유 패키지를 통합 관리했습니다.",
          "대시보드 가젯 독립 패키지화: 40개 이상의 대시보드 가젯을 독립 패키지로 분리하여 개발·배포의 유연성을 확보했습니다.",
          "통합설정(GlobalConfig) 시스템 설계 및 구현: 다이얼로그 기반 SPA 형태로 5개 카테고리, 80개 이상의 설정 페이지를 구축. 기본관리, 보안관리, 앱별 관리, 데이터 관리, 멀티컴퍼니 관리 등 전체 관리자 설정 통합.",
          "관리자 권한 관리(RBAC) 시스템: 최고관리자/보안관리자/앱별 관리자 목록 CRUD API 연동, 권한 설정 정렬, 관리자 로그 다운로드(사유 항목 포함), AdminTable 공통 컴포넌트화.",
          "근태/연차 촉진 설정 구현: 부분 연차 촉진, 그룹별 설정, 휴일대체 등 기업별 정책을 유연하게 설정할 수 있는 UI 및 API 연동.",
          "공통 UI 컴포넌트 개발: Radix UI 기반 Headless 컴포넌트 위에 Select, Checkbox, Button, Dialog, Divider, ProgressBar, DateField, AddressField 등 구현. Turbo Code Generator로 mdx/stories 파일 자동 생성.",
          "다국어(i18n) 체계 구축: i18next 기반으로 한/영/일/중간체/중번체/베트남어 6개 언어 리소스 관리, 서버 사이드 로케일 쿠키 연동.",
          "인증 시스템: 로그인 로직 구성, 간편 비밀번호 컴포넌트 및 Provider 구현, TanStack Query와 GraphQL 활용 사용자 정보 fetch.",
          "ErrorBoundary 도입 및 에러 메시지 토스트 노출 로직 구현, Sentry 에러 트래킹 연동.",
        ],
        techStack:
          "Next.js 16 (App Router), React 19, TypeScript 5.5, Jotai, TanStack React Query, TanStack Table, TailwindCSS, Radix UI, Tiptap, GraphQL, i18next, Storybook",
      },
      {
        title: "대시보드 가젯 및 네비게이션 개발",
        info: "대시보드에 배치 가능한 가젯을 개발하고, GNB, SNB, 서비스맵 등 플랫폼 네비게이션 기능을 구현했습니다.",
        myTaskList: [
          "캘린더 가젯: API 연동, 선택일 일정 리스트, 이벤트 클릭 시 해당 일정 이동, 타임존 대응.",
          "Todo+ 가젯: 카드형/리스트형 보기 설정, Config 기능, 에러 처리.",
          "WorksChart 가젯: ECharts 기반 차트 렌더링, 옵션 설정 UI, 레거시(3.0) 차트 로직 마이그레이션.",
          "가젯 공통: Gadget Config Drag & Drop(Pragmatic DnD), Storybook 연동, 가젯 빌드 자동화.",
          "GNB: 경영업무포탈/임직원포탈 공통 GNB 구현, 더보기 팝업, z-index 관리. Jotai atomWithStorage로 최근 사용 목록 저장, Fuse.js 검색.",
          "오거나이저: 아이템 추가/수정 API 연동, 링크 추가(Enter 키 이벤트), 노출/비노출 토글.",
          "서비스맵: 앱 상태별 분기 로직, API 연동, 다국어 처리.",
          "SNB: 최근 본 메뉴, 즐겨찾기 기능(TanStack Query useMutation), PC 메신저 다운로드 버튼.",
          "퀵메뉴: CloseButton 컴포넌트 분리, 탭 기능 구현, 스크롤 버튼.",
        ],
        techStack:
          "React 19, TypeScript, ECharts, Pragmatic Drag and Drop, Jotai, TanStack Query, Fuse.js, Storybook",
      },
      {
        title: "배포 인프라 및 성능 최적화",
        info: "Docker 멀티스테이지 빌드, Nginx 캐싱 전략, 리소스 버저닝을 통한 서비스 안정성과 성능을 개선했습니다. v4.0.0 ~ v4.2.2까지 10회 이상의 릴리스를 안정적으로 배포했습니다.",
        myTaskList: [
          "Nginx Cache-Control 헤더 최적화 및 client_header_buffer 튜닝으로 브라우저 캐싱 전략 수립 (캐싱 시간 5분 단축).",
          "CSS/JS 리소스 revision 버저닝 시스템 구축으로 배포 시 캐시 무효화 자동화.",
          "Dockerfile Node.js 22 업그레이드, Next.js standalone 빌드 기반 Docker 멀티스테이지 최적화.",
          "Nginx 로그 포맷 재설계 및 정적 리소스 서빙 최적화.",
          "Turborepo 빌드 파이프라인 관리 및 모노레포 빌드 최적화.",
          "Bitbucket Webhook과 LLM 활용 코드리뷰 자동화.",
        ],
        techStack:
          "Docker, Nginx, Kubernetes, Turborepo, Next.js standalone, Sentry",
      },
      {
        title: "다우오피스 4.0 프론트엔드 운영",
        info: "다우오피스 4.0 프론트엔드 v4.0.0 ~ v4.2.2 운영 기간 동안 1,484건의 버그를 수정하고, 다양한 플랫폼(웹, PC 메신저, 모바일)에서의 안정성을 확보했습니다.",
        myTaskList: [
          "IE, Chrome, Safari 등 다양한 브라우저 환경에서의 호환성 이슈 해결.",
          "운영 중 발생하는 결함 건 해결 및 개선 (fix 1,484건).",
          "Electron 기반 PC 메신저 결함 건 해결 및 개선.",
          "모바일 웹 브릿지 연동 및 모바일 웹 브릿지 결함 건 해결 및 개선.",
          "Backbone.js 레거시 콘텐츠 스타일 및 기능 개선 후 로드.",
          "Firebase 기반 Push 알림 연동.",
        ],
        techStack: "Next.js, TypeScript, Electron, Firebase, MSW",
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
