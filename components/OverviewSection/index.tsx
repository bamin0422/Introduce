import Reveal from "@web/components/motion/Reveal";
import { Viz, type Visual } from "@web/components/viz";

/**
 * 프론트엔드 역량을 근거 수치로 보여 주는 요약.
 * 수치 출처는 2026년 Claude Code 회고(2026-11-16)와 아래 경력 항목이다.
 */
type Area = {
  icon: string;
  title: string;
  claim: string;
  visual: Visual;
  facts: { label: string; value: string }[];
};

const AREAS: Area[] = [
  {
    icon: "layers",
    title: "성능",
    claim: "\"느리다\"는 말을 MB 단위 원인으로 바꿉니다",
    visual: {
      kind: "bars",
      title: "모든 화면에 실리던 리소스",
      unit: "MB",
      items: [
        { label: "통합설정 iframe 이중 로드", value: 6.35, exact: "6.35MB", detail: "제거 완료" },
        { label: "ESS ExtJS", value: 5.8, exact: "5.8MB" },
        { label: "레거시 CSS 9개", value: 2.45, display: "2.4MB", exact: "2,448KB" },
        { label: "닫힌 다이얼로그 청크", value: 2.3, exact: "2.3MB" },
      ],
    },
    facts: [
      { label: "메모리 누수", value: "10회 왕복 측정, 누수 없음" },
      { label: "배포 뒤 남는 구버전", value: "revision 버저닝으로 자동 무효화" },
    ],
  },
  {
    icon: "security",
    title: "보안",
    claim: "로그를 끝까지 읽고 나서 막을 순서를 정합니다",
    visual: {
      kind: "stack",
      title: "운영 접근 로그 4xx 43,083건의 구성",
      total: 43083,
      unit: "건",
      items: [
        { label: "404 · 스캐너 정찰", value: 80.5 },
        { label: "그 밖의 404", value: 18.9 },
        { label: "404가 아닌 4xx", value: 0.6 },
      ],
    },
    facts: [
      { label: "대조한 보안 이슈", value: "259건 · 소스 12,542개" },
      { label: "넣은 방어", value: "CSP, nosniff, DOMPurify 상향" },
      { label: "콘솔 민감정보 차단", value: "레거시 번들 233개 전부" },
    ],
  },
  {
    icon: "components",
    title: "품질",
    claim: "재현해서 원인을 확인한 다음에 고칩니다",
    visual: {
      kind: "bars",
      title: "2026년에 처리한 결함과 QC",
      items: [
        { label: "커밋에 남은 이슈", value: 552, display: "552건", detail: "dop-front 커밋 3,498건 기준" },
        { label: "되살린 테스트", value: 126, display: "126개", detail: "develop에서 죽어 있던 메일 목록 테스트" },
        { label: "릴리스 QC", value: 63, display: "63건", detail: "4.5.5.0 25건 + 4.6.0.0 38건" },
        { label: "웹메일 결함", value: 44, display: "44건" },
      ],
    },
    facts: [
      { label: "다시 판정한 결함", value: "제외됐던 10건 중 5건이 실제 결함" },
      { label: "세 번 리오픈된 결함", value: "Radix 포털 원인까지 찾아 종료" },
    ],
  },
  {
    icon: "multiplatform",
    title: "아키텍처",
    claim: "덩치 큰 화면 묶음을 나눠 바뀐 곳만 빌드합니다",
    visual: {
      kind: "flow",
      title: "다우오피스 4.0 모노레포 빌드",
      steps: [
        { label: "코드 변경" },
        { label: "바뀐 패키지인가?", kind: "decision", branch: "캐시 사용" },
        { label: "그 패키지만 빌드" },
        { label: "가젯 단위 배포", kind: "end" },
      ],
    },
    facts: [
      { label: "어드민 설정 페이지", value: "80개 이상, 한 패턴으로 통일" },
      { label: "대시보드 가젯", value: "40개 이상, 독립 패키지" },
      { label: "다국어", value: "6개 언어" },
      { label: "릴리스", value: "v4.0.0 ~ v4.2.2, 10회 이상" },
    ],
  },
  {
    icon: "automation",
    title: "개발 생산성",
    claim: "팀이 기다리는 시간을 도구로 줄입니다",
    visual: {
      kind: "compare",
      title: "PR 리뷰 응답 시간",
      before: { value: "4~8시간", label: "사람 리뷰 대기" },
      after: { value: "1~2분", label: "AI 리뷰 서버" },
    },
    facts: [
      { label: "퇴근 뒤 무인 처리 PR", value: "11건" },
      { label: "직접 만든 Claude Code 스킬", value: "28개" },
      { label: "AI와 함께 만든 커밋(10월)", value: "95.6%" },
    ],
  },
  {
    icon: "admin",
    title: "운영",
    claim: "문제를 고객사 단위로 모아서 봅니다",
    visual: {
      kind: "flow",
      title: "이슈에서 위험 고객사를 찾는 과정",
      steps: [
        { label: "이슈 19,911건" },
        { label: "고객사 1,765곳", sub: "표기 정규화" },
        { label: "장애·재발 이력" },
        { label: "위험 54곳", kind: "end" },
      ],
    },
    facts: [
      { label: "오류 화면 진입", value: "하루 3,399건, 원인 찾아 해소" },
      { label: "운영 장애", value: "140개사 353명 영향, 원인 분리" },
    ],
  },
];

export default function OverviewSection() {
  return (
    <section id="overview" className="scroll-mt-24">
      <Reveal>
        
        <h2 className="section-title">2026 Highlights</h2>
      </Reveal>
      <div className="grid gap-4 md:grid-cols-2">
        {AREAS.map((a) => (
          <Reveal key={a.title} className="h-full">
            <article className="glass flex h-full flex-col rounded-[var(--radius)] p-6">
              <header className="mb-4 flex items-center gap-3">
                <img src={`/images/icons/${a.icon}.webp`} alt="" width={44} height={44} loading="lazy" className="h-11 w-11" />
                <div>
                  <h3 className="text-[17px] font-bold tracking-tight text-foreground">{a.title}</h3>
                  <p className="text-[13px] text-muted-foreground">{a.claim}</p>
                </div>
              </header>
              <Viz v={a.visual} />
              <dl className="mt-4 divide-y divide-border">
                {a.facts.map((f) => (
                  <div key={f.label} className="flex items-baseline justify-between gap-4 py-2.5 text-[13px]">
                    <dt className="shrink-0 text-muted-foreground">{f.label}</dt>
                    <dd className="text-right font-semibold text-foreground">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
