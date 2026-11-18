import Reveal from "@web/components/motion/Reveal";
import { Viz, type Visual } from "@web/components/viz";

/** 2026년 회고에서 뽑은 숫자. 출처는 Claude Code 회고(2026-11-16) */
const SKILLS_BY_MONTH: Visual = {
  kind: "columns",
  title: "월별로 새로 만든 Claude Code 스킬",
  items: [
    { label: "5월", value: 2 },
    { label: "6월", value: 9 },
    { label: "7월", value: 4 },
    { label: "8월", value: 1 },
    { label: "9월", value: 3 },
    { label: "10월", value: 4 },
    { label: "11월", value: 5 },
  ],
};

const SKILLS_BY_AREA: Visual = {
  kind: "bars",
  title: "스킬 28개는 어디에 쓰이나",
  unit: "개",
  items: [
    { label: "이슈·PR 워크플로우", value: 7 },
    { label: "보고·문서", value: 5 },
    { label: "메신저", value: 4 },
    { label: "배포", value: 3 },
    { label: "브라우저 자동화", value: 3 },
    { label: "스펙 작성", value: 2 },
    { label: "디자인", value: 1 },
    { label: "기타", value: 3 },
  ],
};

const AI_SHARE = 95.6;

export default function OverviewSection() {
  return (
    <section id="overview" className="scroll-mt-24">
      <Reveal>
        <p className="section-eyebrow">2026 · 한눈에 보기</p>
        <h2 className="section-title">올해 일한 방식을 숫자로 보면</h2>
      </Reveal>
      <Reveal>
        <div className="grid gap-4 md:grid-cols-2">
          <div className="glass rounded-[var(--radius)] p-3">
            <Viz v={SKILLS_BY_MONTH} className="h-full [&>figure]:h-full" />
          </div>
          <div className="glass rounded-[var(--radius)] p-3">
            <Viz v={SKILLS_BY_AREA} className="h-full [&>figure]:h-full" />
          </div>
          <div className="glass rounded-[var(--radius)] p-6 md:col-span-2">
            <div className="flex items-baseline justify-between gap-4">
              <p className="text-[13px] font-semibold text-foreground">10월 커밋 중 AI와 함께 만든 커밋</p>
              <p className="text-[13px] font-semibold tabular-nums text-foreground">{AI_SHARE}%</p>
            </div>
            <div className="mt-3 h-2.5 rounded-full bg-muted" title={`AI 협업 커밋 ${AI_SHARE}%`}>
              <div className="h-full rounded-full bg-primary" style={{ width: `${AI_SHARE}%` }} />
            </div>
            <p className="mt-2 text-xs text-muted-foreground">머지 커밋을 뺀 기준</p>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
