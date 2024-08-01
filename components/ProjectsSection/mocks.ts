import { ProjectCardItem } from "../ProjectCard";

export const getProjectConfig: ProjectCardItem[] = [
  {
    id: "dop-front",
    name: "다우오피스 통합 FE",
    description:
      "MonoRepo TurboRepo를 Next.js로 프로젝트를 전개하여, StoryBook으로 UI 테스팅하는 프로젝트에서 통합 로그인 파트를 담당하고 있습니다.",
    contents: [
      "TurboRepo 통한 StoryBook 템플릿 자동 생성 및 UI 테스팅",
      "통합 로그인 구현 진행 중",
    ],
    image: "images/daouoffice.png",
    github: "",
    storeLink: "",
    projectLink:
      "https://bald-sloth-614.notion.site/FE-f6184a4146c04c338e8d3d7ca92a5c49?pvs=4",
    linkUrl:
      "https://bald-sloth-614.notion.site/Front-End-5b0e13df01234f969d041577c0e175e8?pvs=4",
  },
  {
    id: "ppiyak",
    name: "삐약삐약",
    description:
      "삐약삐약 안드로이드 앱 1.0.0.0 ~ 1.0.2.4 유지보수 및 2차 개발",
    contents: [
      "삐약삐약 안드로이드 앱 1.0.0.0 ~1.0.2.4 버전 유지보수 및 2차 개발",
      "KMM 활용 프로젝트 개발",
      "복용관리 히스토리, 복용관리 건강데이터, 뱃지 로직 밎 UI 개발",
      "젠킨스 구글 플레이 자동 배포 파이프라인 작성",
    ],
    image: "/images/bbiyak.png",
    github: "",
    storeLink:
      "https://play.google.com/store/apps/details?id=com.daou.hc.kmm.android",
    projectLink: "https://www.notion.so/54226a39bd774ff7b89e34203cac00cf?pvs=4",
    linkUrl:
      "https://bald-sloth-614.notion.site/f58d59da0ee942e488fea7daf118ca7d?pvs=4",
  },
  {
    id: "enfax",
    name: "엔팩스",
    description: "엔팩스 앱 유지보수",
    contents: [
      "SharedPreference 로직 개선",
      "불필요한 로직 제거",
      "이벤트 팝업 노출 API 추가",
    ],
    image: "/images/enfax.png",
    github: "",
    storeLink:
      "https://play.google.com/store/apps/details?id=daou.enFax&hl=ko&gl=US",
    projectLink:
      "https://bald-sloth-614.notion.site/aca8bd2f3fb24d3b9c1f9f746078faa5?pvs=4",
    linkUrl:
      "https://bald-sloth-614.notion.site/enfax-2623eef95032495aa025aeae1ecaf596?pvs=4",
  },
  {
    id: "good_mask",
    name: "크리니얼가드",
    description: "스마트 마스크 컨트롤러 앱 개발 프로젝트",
    contents: [
      "BLE 통한 마스크 마스크 제어 앱 개발",
      "Foreground Service 통한 마스크와 BLE 통신",
      "Retrofit 활용 현재 미세먼지 정보 API 통신",
      "Room DB 활용 마스크 사용데이터 CRUD 로직 구현",
    ],
    image: "images/guard.png",
    github: "https://github.com/bamin0422/GoodMask",
    storeLink:
      "https://play.google.com/store/apps/details?id=com.intention.android.goodmask",
    projectLink:
      "https://bald-sloth-614.notion.site/bebd1833d0294734a21098b17421ce63?pvs=4",
    linkUrl:
      "https://bald-sloth-614.notion.site/6a54b5cd2228460393bf9dfcf7c15204?pvs=4",
  },
  {
    id: "gasos",
    name: "GASOS",
    description: "사회 취약계층 가스안전관리 통합 솔루션.",
    contents: [
      "Retrofit 활용 API 통신",
      "카카오맵 SDK 사용",
      "FCM 활용 알림 기능 구현",
    ],
    image: "images/gasos.png",
    github:
      "https://github.com/kmu-kobot/gasos-mobile/tree/a18204ad576447c6846a38c99934fa47cee09148",
    storeLink: "",
    projectLink:
      "https://bald-sloth-614.notion.site/GASOS-2021-SW-5bcfbbe3e51a4c62a3d22a9bbf32d105?pvs=4",
    linkUrl:
      "https://bald-sloth-614.notion.site/GASOS-6f7569a5cc52466b94e27a7e3b15e688?pvs=4",
  },
  {
    id: "onego",
    name: "OneGo",
    description:
      "자필 원고지 인식 및 교정 모바일 어플리케이션을 개발해, 해당 기술을 바탕으로 2021 KSC 논문대회에 '자필 원고지 인식률 향상을 위한 원고지 특화 OCR 모델에 관한 연구'라는 주제로 논문을 투고해 장려상 수상.",
    contents: ["이미지 편집 툴 구현"],
    image: "images/onego.png",
    github: "https://github.com/Onego2021/onego-mobile",
    storeLink: "",
    projectLink:
      "https://bald-sloth-614.notion.site/One-go-7b539e37bb034f7d83663abf55f3f411?pvs=4",
    linkUrl:
      "https://bald-sloth-614.notion.site/One-Go-0c4ce2629c5a4ee2844d421110a1a4cf?pvs=4",
  },
  {
    id: "bj",
    name: "방구석전시회",
    description: "온라인 영상작품 NFT 아트페어 플랫폼",
    contents: [
      "Klaytn, KIP-17 토큰 기반 BJ NFT 토큰 민팅",
      "스마트 컨트랙트 구현",
    ],
    image: "images/exhibit.png",
    github: "https://github.com/bamin0422/exhibit",
    storeLink: "",
    projectLink:
      "https://bald-sloth-614.notion.site/352094e9b8c74e4889b847bbdeb0ac3c?pvs=4",
    linkUrl:
      "https://bald-sloth-614.notion.site/0122c2aec85a460e836cd321400c0c49?pvs=4",
  },
  {
    id: "withfi",
    name: "withfi",
    description: "wifi ID, PW 스캔 시 자동 접속 및 QR로 공유할 수 있는 앱",
    contents: [
      "wifiManager 통해, wifi 스캔 및 연결 기능 구현",
      "Zxing 활용 wifi URI 담긴 QR 코드 생성",
    ],
    image: "images/withfi.png",
    github: "",
    storeLink:
      "https://play.google.com/store/apps/details?id=com.CVproject.wifi_solution",
    projectLink:
      "https://bald-sloth-614.notion.site/withfi-c08b9628df684076a6b66d9dc0c898b2?pvs=4",
    linkUrl:
      "https://bald-sloth-614.notion.site/Withfi-3ed28f89e67e4ac8b0cb2002e17952a0?pvs=4",
  },
];
