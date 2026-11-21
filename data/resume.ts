import type { Visual } from "@web/components/viz";

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
  problem: string;
  actions: string[];
  results: string[];
  techStack: string;
  /** 본문 아래에 붙는 도표 */
  visuals?: Visual[];
}

export interface Project {
  title: string;
  period: string;
  problem: string;
  actions: string[];
  results: string[];
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
    "Learn once, write anywhere. 한 번 익힌 원칙은 웹이든 데스크톱이든 모바일이든 같은 밀도로 씁니다. 다우기술에서 그룹웨어 다우오피스의 프론트엔드를 설계하고 운영합니다. 2026년에는 커밋 3,498건과 이슈 552건을 처리했습니다. 맡은 일은 웹 보안 방어, 레거시 화면 안정화, 운영 장애 원인 규명입니다. Claude Code 스킬 28개와 무인 이슈 처리 자동화를 만들어 팀이 일하는 방식도 바꿨습니다. 원인은 추정하지 않고 재현과 실측으로 확정합니다.",
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
      items: ["Jotai", "Zustand", "TanStack Query", "Context API"],
    },
    {
      category: "Development Tools",
      items: ["Vite", "Webpack", "pnpm", "Turborepo", "Git", "ESLint", "Prettier"],
    },
    {
      category: "Architecture & Infra",
      items: [
        "Feature-Sliced Design",
        "Monorepo",
        "SSR (Next.js App Router)",
        "Docker",
        "Nginx",
        "Sentry",
      ],
    },
    {
      category: "AI & Automation",
      items: [
        "Claude Code Skills",
        "MCP Server",
        "Playwright / CDP",
        "Orca Automation",
        "GitHub Actions",
      ],
    },
  ],
  experience: [
    {
      company: "다우기술",
      position: "Frontend Developer",
      period: "2023.07 ~ 현재",
      projects: [
        {
          title: "웹 보안 위협 분석과 프론트 방어 일괄 도입",
          problem:
            "외부 침해 사고가 잇따르면서 보안 우선순위를 정할 근거가 필요했습니다. 보안 이슈는 여러 출처에 흩어져 있었습니다. 프론트엔드에는 CSP와 보안 헤더가 없어 메일 본문 필터 하나가 사실상 유일한 방어선이었습니다.",
          actions: [
            "한 해 보안 이슈 259건을 소스 12,542개와 대조하고 운영 접근 로그 4xx 43,083건을 전수조사해 위협 분석 보고서를 썼습니다. 4xx의 80.5%는 스캐너 정찰이었고 실제 계정 탈취 시도는 따로 분리해 냈습니다.",
            "신규 메일 필터가 레거시보다 이벤트 핸들러 일부를 빠뜨린 회귀는 node로 재현해 증명했습니다. 이어서 CSP Report-Only·nosniff·리다이렉트 검증·DOMPurify 상향을 한 번에 도입했습니다.",
            "운영 콘솔의 민감정보 노출은 파일 67개를 고치는 대신 빌드 단계(removeConsole, esbuild banner)에서 전역으로 막았습니다.",
          ],
          results: [
            "보고서는 조직이 보안 우선순위를 정하는 근거가 됐습니다. 후속 방어 작업 여러 건도 여기서 나왔습니다.",
            "배포 전에 CDP로 응답 헤더를 주입해 CSP 효과를 미리 재는 검증법을 팀에 남겼습니다.",
          ],
          techStack: "DOMPurify, CSP, Chrome DevTools Protocol, Grafana Loki, Next.js, esbuild",
          visuals: [{"kind": "stack", "title": "운영 접근 로그 4xx 43,083건의 구성", "total": 43083, "unit": "건", "items": [{"label": "404 · 스캐너 정찰(.env 등)", "value": 80.5}, {"label": "그 밖의 404", "value": 18.9}, {"label": "404가 아닌 4xx", "value": 0.6}]}, {"kind": "flow", "title": "보안 이슈를 방어로 옮긴 순서", "steps": [{"label": "이슈 259건 수집", "sub": "KISA·모의해킹·감사 등"}, {"label": "소스 12,542개 대조"}, {"label": "운영 로그 전수조사"}, {"label": "우선순위 결정", "sub": "프론트 담당 미조치 항목", "kind": "decision", "branch": "서버 담당으로 이관"}, {"label": "CSP·DOMPurify·콘솔 차단", "kind": "end"}]}],
        },
        {
          title: "레거시 화면 오류 해소와 운영 장애 원인 규명",
          problem:
            "레거시 프론트에 넣은 렌더 가드가 정상 화면까지 빈 화면으로 판정해, 고객사 4곳에서 하루 3,399건의 오류 화면이 떴습니다. 같은 시기 이관 핫픽스 뒤에는 140개사 353명이 영향받은 캘린더·전자결재 장애가 났습니다.",
          actions: [
            "빈 화면 판정이 깨지는 세 경로를 찾았습니다. 판정을 더 정교하게 고치기보다 자동 이동 경로 자체를 없애는 쪽으로 설계를 바꿨습니다.",
            "Playwright로 세션 응답 변조·청크 차단을 재현해 운영 로그와 맞춰 보며 겹쳐 있던 장애 원인을 하나씩 분리했습니다.",
          ],
          results: [
            "핫픽스 반영 뒤 실앱 체크리스트 18건을 모두 통과했습니다.",
            "19자리 숫자가 재직렬화로 오염되는 잠복 결함도 함께 찾아냈습니다.",
          ],
          techStack: "JavaScript, Playwright, Grafana, Backbone, Next.js",
          visuals: [{"kind": "flow", "title": "오류 화면이 생기던 경로와 바꾼 설계", "steps": [{"label": "서버 200 정상 응답"}, {"label": "렌더 가드: 빈 화면인가?", "sub": "세 경로에서 오판", "kind": "decision", "branch": "화면 유지"}, {"label": "기존: 공통 500으로 이동", "sub": "하루 3,399건"}, {"label": "변경: 자동 이동 경로 제거", "kind": "end"}]}],
        },
        {
          title: "신규 웹메일 품질 안정화와 릴리스 QC",
          problem:
            "웹메일을 v1에서 v2로 옮기면서 빠진 가드와 계약이 결함으로 쏟아졌습니다. 합성 이벤트로는 재현되지 않는 결함은 몇 번씩 리오픈됐습니다.",
          actions: [
            "첨부 드롭 오버레이 고착은 실제 Chrome 드래그 로그를 심어 원인 세 가지를 차례로 확정하고 PR 3건으로 고쳤습니다.",
            "3회 리오픈된 태그 패널은 Radix 포털의 pointer-events, FocusScope, 초기 데이터 참조 순으로 추적해 끝냈습니다.",
            "4.5.5.0(25건)과 4.6.0.0(38건) 릴리스 QC는 이슈별 브랜치·PR로 나눠 처리했습니다. 반복되는 패턴은 후속 티켓으로 묶었습니다.",
          ],
          results: [
            "웹메일 결함만 44건을 처리했고, '결함 아님'으로 제외됐던 10건 중 5건이 실제 결함임을 밝혀 판정을 바로잡았습니다.",
            "develop에서 죽어 있던 메일 목록 테스트 126건을 되살렸습니다.",
          ],
          techStack: "React, TypeScript, Radix UI, TanStack Query, Vitest",
          visuals: [{"kind": "bars", "title": "처리한 결함·QC 건수", "unit": "건", "items": [{"label": "웹메일 결함", "value": 44, "detail": "웹메일 테마 전체 처리 건수"}, {"label": "4.6.0.0 QC", "value": 38, "detail": "담당 미완료 38건 분류·일괄 PR"}, {"label": "4.5.5.0 QC", "value": 25, "detail": "PR 18개, Jira 댓글 28건"}]}, {"kind": "flow", "title": "첨부 드롭 오버레이 고착 — 세 번에 걸친 원인", "steps": [{"label": "1차", "sub": "유휴 타이머가 발화 못 함"}, {"label": "2차", "sub": "레거시가 drop 전파 차단"}, {"label": "3차", "sub": "Chrome relatedTarget null"}, {"label": "실제 드래그 로그로 확정", "kind": "end"}]}],
        },
        {
          title: "다우오피스 4.0 프론트엔드 아키텍처와 대시보드",
          problem:
            "단일 번들에 어드민 설정 페이지 80여 개와 대시보드 가젯이 얽혀 있어 의존성 충돌이 잦고 빌드가 길었습니다. 권한도 화면마다 따로 관리돼 새 메뉴를 만들 때마다 누락이 생겼습니다.",
          actions: [
            "pnpm Workspace와 Turborepo로 모노레포를 구성하고 가젯 40여 개를 독립 패키지로 나눴습니다. 그래서 바뀐 패키지만 다시 빌드됩니다.",
            "어드민 설정 페이지의 공통 레이아웃·훅·권한 처리는 한 패턴으로 묶었고 GNB·SNB·서비스맵 등 네비게이션은 새로 만들었습니다.",
            "드래그로 배치하는 대시보드와 ECharts 차트를 붙이면서 레거시 차트 로직도 옮겨 왔습니다.",
          ],
          results: [
            "새 설정 페이지에는 권한이 빠짐없이 적용되고 개발·검증은 가젯 단위로 합니다.",
            "6년 만의 대규모 업데이트인 v4.0.0부터 v4.2.2까지 10회 넘게 안정적으로 릴리스했습니다.",
          ],
          techStack: "Next.js (App Router), TypeScript, Jotai, TanStack Query, Turborepo, Storybook, ECharts",
        },
        {
          title: "Claude Code 스킬 28개와 무인 이슈 처리",
          problem:
            "배포, 이슈 등록, PR, 주간 보고, 번역 시트 반영처럼 매일 반복되는 절차가 사람 손을 거쳤고, 퇴근 뒤에는 리오픈 이슈가 그대로 쌓였습니다.",
          actions: [
            "배포·이슈·PR·보고·메신저·번역 영역에서 쓰는 Claude Code 스킬 28개를 만들었습니다. Sentry 에러 조회부터 Jira 등록·PR까지 한 세션에서 끝내는 흐름, 다국어 키를 번역해 사내 시트에 검증까지 마쳐 올리는 흐름이 대표적입니다.",
            "'퇴근'이라고 입력하면 에이전트가 리오픈·다음 버전 이슈를 분석·수정·검증합니다. 근거가 확실한 것만 PR로 올리고 결과는 메일로 보냅니다.",
          ],
          results: [
            "무인 자동화가 PR 11건을 올렸고, 10월 커밋의 95.6%가 AI와 함께 만든 커밋입니다.",
            "설치 패키지를 만들고 사내에 공유 글을 올렸습니다. 팀원도 같은 도구를 바로 쓸 수 있습니다.",
          ],
          techStack: "Claude Code (Skills, Hooks), Sentry MCP, Jira·Bitbucket REST API, Playwright, GitHub Actions",
          visuals: [{"kind": "flow", "title": "퇴근 뒤 무인 이슈 처리 흐름", "steps": [{"label": "'퇴근' 입력"}, {"label": "훅이 에이전트 2개 실행", "sub": "리오픈 · 다음 버전"}, {"label": "분석·수정·검증"}, {"label": "근거가 확실한가?", "kind": "decision", "branch": "사람 확인 필요로 보고"}, {"label": "PR 생성", "sub": "결과는 메일로", "kind": "end"}]}],
        },
        {
          title: "AI PR 코드리뷰 시스템",
          problem:
            "리뷰가 리뷰어의 시간에 기대다 보니 PR마다 4~8시간을 기다렸고 리뷰어마다 피드백 품질도 달랐습니다.",
          actions: [
            "NestJS 서버와 관리 대시보드를 만들었습니다. 서버는 Bitbucket 웹훅을 받아 Claude Code CLI로 리뷰하고 인라인 댓글과 요약을 남깁니다.",
            "프로젝트 컨벤션 문서와 과거 리뷰를 함께 넣어 코드베이스 맥락을 반영했습니다. 지적은 P1~P3 심각도로 나눴습니다.",
            "변경 규모·핵심 경로·테스트 부재 등 7가지 축으로 PR 영향도에 점수를 매기고 위험한 PR은 단독 머지를 막았습니다.",
          ],
          results: [
            "리뷰 응답 시간이 4~8시간에서 1~2분으로 줄었습니다.",
            "반복되던 컨벤션 지적은 자동화가 맡고 리뷰어는 로직에 집중합니다.",
          ],
          techStack: "NestJS, TypeScript, Claude Code CLI, Ollama, Supabase, React 19, TanStack Query",
          visuals: [{"kind": "compare", "title": "PR 리뷰 응답 시간", "before": {"value": "4~8시간", "label": "사람 리뷰 대기"}, "after": {"value": "1~2분", "label": "AI 리뷰"}}, {"kind": "flow", "title": "리뷰 파이프라인", "steps": [{"label": "Bitbucket 웹훅"}, {"label": "Claude Code 리뷰", "sub": "컨벤션·과거 리뷰 참고"}, {"label": "영향도 50점 초과?", "sub": "7축 100점", "kind": "decision", "branch": "인라인 댓글만"}, {"label": "단독 머지 보류", "sub": "NEEDS_WORK", "kind": "end"}]}],
        },
        {
          title: "기획자용 다우오피스 디자인 MCP",
          problem:
            "기획자가 AI로 화면을 그리면 실제 다우오피스를 모르는 AI가 색과 클래스명을 지어냈습니다. 그래서 개발 단계에서 시안을 다시 맞춰야 했습니다.",
          actions: [
            "웹 화면 518개, 클래스 3,012종, 디자인 토큰 624개를 담은 MCP 서버를 만들었습니다. npx 한 줄이면 설치됩니다.",
            "이 MCP를 불러 쓰는 검수 서비스로 넓혀 디자인과 구현의 규격 차이를 미리 찾아냅니다.",
          ],
          results: ["개발 파트 밖에서도 기획 직군이 AI를 쓰는 방식이 바뀌었습니다."],
          techStack: "MCP SDK, TypeScript, Node.js, Next.js, SQLite",
        },
        {
          title: "Sentry 에러 모니터링 재설계",
          problem:
            "모든 JS 오류를 수집하다 보니 이슈 목록이 노이즈로 가득했습니다. 고객에게 실제 영향이 있는 에러는 찾기 어려웠습니다.",
          actions: [
            "화이트 페이지를 만드는 에러와 API 5xx만 남기도록 수집 필터를 다시 짰습니다.",
            "고객사 식별자를 태그로 붙이고 같은 API 에러는 fingerprint로 묶었습니다.",
          ],
          results: [
            "실제 장애에 해당하는 이슈만 대시보드에 남았습니다.",
            "이제 고객사별로 걸러 보며 CS 인입 건의 원인을 빠르게 찾습니다.",
          ],
          techStack: "@sentry/nextjs, @sentry/react, Next.js, React ErrorBoundary",
          visuals: [{"kind": "flow", "title": "수집 기준을 바꾼 뒤의 흐름", "steps": [{"label": "모든 JS 오류"}, {"label": "흰 화면·API 5xx인가?", "kind": "decision", "branch": "수집하지 않음"}, {"label": "고객사 태그 · fingerprint"}, {"label": "실제 장애만 대시보드에", "kind": "end"}]}],
        },
        {
          title: "토큰 갱신 경쟁 상태로 생긴 흰 화면 해소",
          problem:
            "토큰이 만료되면 여러 요청이 동시에 401을 받아 각자 갱신을 시도했습니다. 갱신이 끝나도 화면이 다시 그려지지 않아 흰 화면이 남았습니다.",
          actions: [
            "잠금을 넣어 갱신 중 들어오는 요청을 큐에 잡아 두고 갱신이 끝나면 현재 화면을 다시 불러옵니다.",
            "비표준 에러 코드에서 갱신이 반복되지 않도록 방어 로직을 더했습니다.",
          ],
          results: ["동시에 몰린 요청이 한 번 갱신된 뒤 한꺼번에 재시도되는지 모듈별로 확인했습니다."],
          techStack: "TypeScript, XHR, Fetch API, JWT",
        },
        {
          title: "FCM 웹 푸시 알림",
          problem:
            "그룹웨어에 실시간 알림이 필요했지만 웹에는 푸시 인프라가 없었습니다. FCM을 지원하지 않는 브라우저도 많았습니다.",
          actions: [
            "ServiceWorker 기반 백그라운드 알림과 포그라운드 알림을 붙였습니다. 미지원 환경에서는 오류 없이 건너뜁니다.",
            "로그아웃할 때 토큰과 ServiceWorker를 정리해 잘못된 알림 발송을 막았습니다.",
          ],
          results: ["포그라운드·백그라운드 수신과 클릭 이동, 로그아웃 뒤 발송 차단을 모두 확인했습니다."],
          techStack: "Firebase Cloud Messaging, ServiceWorker, Next.js, TypeScript",
        },
        {
          title: "성능 진단과 캐시 전략",
          problem:
            "임직원포탈이 무겁다는 피드백이 있었지만 메모리 누수인지 기본 적재량 문제인지 구분되지 않았습니다. 배포 뒤에는 브라우저에 구버전이 남는 일도 잦았습니다.",
          actions: [
            "홈과 메일함을 10회 왕복하며 힙을 재 누수가 아님을 확인했습니다. 이어서 전 화면에 실리는 리소스 4건(닫힌 다이얼로그 청크 2.3MB, ExtJS 5.8MB 등)을 줄 단위로 따져 봤습니다.",
            "리소스에 revision 버저닝을 붙이고 Nginx Cache-Control을 정리했습니다. 이제 배포할 때 캐시가 자동으로 무효화됩니다.",
          ],
          results: [
            "'느리다'는 체감을 측정 가능한 개선 순서로 바꿨습니다.",
            "배포 뒤 구버전이 남는 문제가 사라졌습니다.",
          ],
          techStack: "Chrome DevTools, Nginx, Turborepo, Next.js standalone",
          visuals: [{"kind": "bars", "title": "모든 화면에 실리던 리소스 크기", "unit": "MB", "items": [{"label": "통합설정 iframe 이중 로드(제거)", "value": 6.35, "exact": "6.35MB", "detail": "선행 작업으로 제거"}, {"label": "ESS ExtJS", "value": 5.8}, {"label": "레거시 CSS 9개", "value": 2.45, "display": "2.4MB", "exact": "2,448KB"}, {"label": "닫힌 다이얼로그 청크", "value": 2.3}, {"label": "Dext5", "value": 0.35, "exact": "352KB"}]}],
        },
        {
          title: "VOC 레이더 — 고객사 이슈 분석 대시보드",
          problem:
            "고객사 정보가 이슈 제목의 대괄호에만 있어서, 같은 고객사에서 반복되는 문제를 보려면 매번 Jira를 검색해야 했습니다.",
          actions: [
            "이슈 19,911건을 수집해 제목에서 고객사를 뽑고 표기 변형을 정규화했습니다.",
            "장애·재발 이력이 있는 고객사는 따로 표시하고 이슈가 많은 고객사는 AI가 이력을 요약합니다.",
          ],
          results: ["고객사 1,765곳을 자동으로 추출하고 위험 신호가 있는 54곳을 찾아 사내에 공개했습니다."],
          techStack: "Jira REST API, Claude Code, Vanilla JS, nginx, Docker, Coolify",
          visuals: [{"kind": "flow", "title": "이슈에서 위험 고객사를 찾는 과정", "steps": [{"label": "Jira 이슈 19,911건"}, {"label": "고객사 1,765곳 추출", "sub": "표기 변형 정규화"}, {"label": "장애·재발 이력 표시"}, {"label": "위험 신호 54곳", "kind": "end"}]}],
        },
      ],
    },
    {
      company: "다우기술",
      position: "Android Developer",
      period: "2022.11 ~ 2023.07",
      projects: [
        {
          title: "삐약삐약 안드로이드 앱 운영과 2차 개발",
          problem:
            "영양제 복용관리 서비스라 모바일 웹과 네이티브가 함께 돌아야 했습니다. 그런데 Android와 iOS에 같은 로직이 따로 작성돼 있었고 출시도 수동이었습니다.",
          actions: [
            "WebBridge로 모바일 웹과 네이티브 화면을 연결했습니다.",
            "KMM으로 Android·iOS 공통 비즈니스 로직을 한 곳에 모았습니다.",
            "구글플레이 트랙별 배포를 출시노트까지 포함해 Jenkins로 자동화했습니다.",
          ],
          results: ["두 플랫폼에 겹치던 코드를 줄였고 1.0.0.0부터 1.0.2.4까지 운영했습니다."],
          techStack: "Android, Kotlin, KMP, Ktor, WebView",
        },
        {
          title: "Enfax 안드로이드 앱 유지보수",
          problem:
            "의존성 주입 구조가 정리되지 않아 기능을 더할 때마다 부작용 위험이 컸습니다. 이벤트 팝업은 캐시 때문에 개발 중인 페이지를 보여 줬습니다.",
          actions: [
            "불필요한 의존성 주입을 걷어내고 Retrofit Base URL 로직을 정리했습니다.",
            "WebView 캐시 모드를 바로잡아 팝업 문제를 해결했습니다.",
          ],
          results: ["코드는 읽기도 테스트하기도 쉬워졌고 팝업은 의도대로 노출됐습니다."],
          techStack: "Android, Kotlin, Retrofit, WebView",
        },
      ],
    },
  ],
  projects: [
    {
      title: "Portfolio — 로컬 포트 관리 IDE형 데스크톱 앱",
      period: "2026.07 ~ 현재",
      problem:
        "로컬에서 개발 서버와 프론트를 여러 개 띄우다 보면 어느 포트가 무엇이었는지 헷갈리고 종료도 번거로웠습니다. 미리보기와 로그도 여기저기 흩어졌습니다. AI에게 화면 조작을 시키려면 브라우저 자동화 도구를 따로 띄워야 하는 것도 불편했습니다.",
      actions: [
        "포트 관리 UI를 만들었습니다. lsof로 LISTEN 중인 포트를 3초마다 감지해 포트·PID·프로세스·경로를 보여 줍니다. HTTP 프로브로 web/srv 타입을 판별하고 필터·검색·별칭·상단 고정도 넣었습니다.",
        "여러 포트는 탭 UI로 동시에 관리합니다. 웹 포트는 앱 내 임베드 미리보기(주소창·뒤로/앞으로·개발자도구)로, 앱에서 실행한 서버는 실시간 stdout/stderr 로그로 보여 줍니다.",
        "앱 자체에 MCP 서버를 내장했습니다. Claude가 portfolio_snapshot·portfolio_click 등의 도구로 별도 브라우저 없이 앱 안 미리보기 화면을 직접 조작하는 \"AI 내부 화면 제어\"까지 넣었습니다.",
        "런타임 의존성 0, 순수 JS/HTML/CSS로 작성했습니다. macOS(Apple Silicon·Intel)·Windows 빌드와 Homebrew tap 배포도 갖췄습니다.",
      ],
      results: [
        "v0.1.2까지 릴리스했고 GitHub Releases와 brew install --cask bamin0422/tap/portfolio로 설치할 수 있습니다. LinkedIn과 사내 AI 라운지에도 공개했습니다.",
        "\"3000번 포트 화면에서 메일쓰기 눌러줘\" 같은 자연어 명령으로 앱 안 화면이 조작되는 것을 확인했습니다.",
      ],
      techStack:
        "Electron, JavaScript, HTML/CSS, MCP, Claude Code CLI, electron-builder, Homebrew",
      links: [
        { name: "GitHub", url: "https://github.com/bamin0422/portfolio" },
        {
          name: "Download",
          url: "https://github.com/bamin0422/portfolio/releases/latest",
        },
        { name: "LinkedIn", url: "https://lnkd.in/p/gBYs3ZRH" },
      ],
    },
    {
      title: "Dr Serial (구 HW Monitor)",
      period: "2025.01 ~ 현재",
      problem:
        "Serial, TCP, UDP, BLE 등 여러 프로토콜로 연결되는 하드웨어 장비의 통신 데이터를 실시간으로 모니터링할 범용 데스크톱 툴이 없었습니다. 그래서 프로토콜마다 도구를 따로 쓰거나 스크립트를 직접 작성해야 했습니다.",
      actions: [
        "Electron 크로스플랫폼 앱 하나가 Serial·TCP·UDP·BLE 멀티 프로토콜을 모두 지원합니다.",
        "LangChain으로 다중 LLM(Anthropic, OpenAI, Gemini, Groq, Ollama)을 붙여 수신 데이터를 자동으로 분석합니다.",
        "인증은 Supabase + Google OAuth로 하고 클라우드 설정 동기화도 넣었습니다. 자동 업데이트는 electron-updater로 붙였습니다.",
        "GitHub Actions로 macOS·Windows·Linux 크로스 플랫폼 빌드를 자동화했습니다.",
      ],
      results: [
        "앱 하나에서 프로토콜을 전환하고 데이터를 실시간으로 시각화하는 것까지 확인했습니다.",
        "LLM 분석 결과로 이상 패턴을 탐지할 수 있는지 실사용으로 검증하고 있습니다.",
      ],
      techStack:
        "Electron, React, TypeScript, electron-vite, Tailwind CSS, Radix UI, Zustand, LangChain, serialport, Supabase, electron-updater",
      links: [
        { name: "Website", url: "https://dr-serial-website.vercel.app" },
        { name: "GitHub", url: "https://github.com/bamin0422/dr-serial" },
        {
          name: "Download",
          url: "https://github.com/bamin0422/dr-serial/releases/latest",
        },
      ],
    },
    {
      title: "사업자 등록번호 진위 여부 조회 MCP 서버",
      period: "2024.07 ~ 2024.09",
      problem:
        "공공데이터포털의 사업자 정보 조회 API를 LLM 에이전트에서 바로 쓰려면 API 래핑 서버가 필요했습니다. 환경 설정을 반복하지 않고도 누구나 쉽게 배포할 수 있어야 했습니다.",
      actions: [
        "Model Context Protocol(MCP) 서버 규격에 맞춰 만들어 Claude 등 MCP 호환 LLM에 바로 연동됩니다.",
        "서버는 MVC 패턴의 TypeScript 아키텍처로 짰고 REST API와 MCP 도구를 동시에 제공합니다.",
        "Docker로 컨테이너화해 원클릭 배포를 지원하고 Smithery AI 마켓플레이스에 등록했습니다.",
        "API 인증키 관리와 보안 처리를 넣었고 에러 핸들링·로깅 시스템도 함께 갖췄습니다.",
      ],
      results: [
        "MCP 클라이언트에서 자연어 쿼리로 사업자 진위 조회가 되는 것을 확인했습니다.",
        "Smithery AI에 배포한 뒤로 외부 사용자가 계속 접근할 수 있습니다.",
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
      problem:
        "프로젝트마다 이메일·전화번호·URL 등 공통 정규표현식을 매번 다시 작성하거나 복사해 썼습니다. 읽기 어려운 정규식 리터럴은 유지보수도 힘들었습니다.",
      actions: [
        "자주 쓰는 패턴을 이름 붙은 함수로 감싸 경량 유틸리티 라이브러리로 묶었습니다.",
        "npm 패키지로 공개했습니다. 어느 프로젝트에서나 바로 설치해 쓸 수 있습니다.",
        "패키지 버전을 관리하면서 정규식 패턴을 조금씩 추가했습니다.",
      ],
      results: [
        "npm에 배포한 뒤 실제 프로젝트에 적용해 정규식을 중복 작성하던 부분을 없앴습니다.",
        "이메일·전화번호·URL 등 자주 쓰는 정규식은 이제 함수 호출로 치환됩니다.",
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
      problem:
        "티켓팅할 때 쓰는 타이머는 대개 UI가 정형화돼 있어 보는 재미가 부족했습니다. 사용자가 시계를 직접 커스터마이징해 티켓팅을 더 재미있게 할 수 있는 도구가 필요했습니다.",
      actions: [
        "프로젝트 구조는 FSD(Feature-Sliced Design) 아키텍처로 잡았습니다.",
        "framer-motion으로 SearchBar·Timer 컴포넌트 애니메이션을 넣고 useTimer 커스텀 훅을 작성했습니다.",
        "color picker 라이브러리를 붙여 시계 색상도 사용자가 커스터마이징하도록 했습니다.",
        "Next.js API Routes로 CORS 이슈를 우회하고 Vercel에 배포했습니다.",
      ],
      results: [
        "Vercel에 배포한 뒤 지금도 라이브로 운영하고 있습니다.",
        "사용자가 시계 색상·애니메이션을 커스터마이징하며 티켓팅에 쓸 수 있습니다.",
      ],
      techStack:
        "Next.js, React.js, TypeScript, pnpm, framer-motion, Tailwind CSS",
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
