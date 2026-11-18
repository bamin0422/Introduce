import { WorkInfo } from "./types";
import WorkCard from "./WorkCard";
import Reveal from "@web/components/motion/Reveal";
import DaouLogo from "@web/components/DaouLogo";
import { resumeData } from "@web/data/resume";

const workCardList: WorkInfo[] = resumeData.experience.map((e) => {
  const [startDate, endDate] = e.period.split(" ~ ");
  return { title: e.company, role: e.position, startDate, endDate, details: e.projects };
});

export function WorkSection() {
  return (
    <section id="work" className="scroll-mt-24">
      <Reveal>
        <p className="section-eyebrow">Work · 다우기술</p>
        <h2 className="section-title">문제 → 해결 → 검증으로 적어 둔 경력</h2>
      </Reveal>
      <Reveal>
        <a
          href="https://daouoffice.gitbook.io/4.0"
          target="_blank"
          rel="noopener noreferrer"
          className="group relative mb-12 block overflow-hidden rounded-2xl border border-white/70"
        >
          <img
            src="/images/daouoffice-40-banner.png"
            alt="다우오피스 4.0 출시"
            className="h-40 w-full object-cover object-right transition-transform duration-700 group-hover:scale-[1.02] sm:h-52"
          />
          <div className="glass absolute inset-y-4 left-4 flex max-w-md flex-col justify-center gap-3 rounded-xl p-5 sm:inset-y-6 sm:left-6 sm:p-6">
            <DaouLogo />
            <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
              6년 만의 대규모 업데이트. 모노레포 아키텍처부터 대시보드 가젯·네비게이션까지
              프론트엔드 핵심 축을 설계하고 v4.0.0 ~ v4.2.2를 릴리스했습니다.
            </p>
          </div>
        </a>
      </Reveal>
      <div className="space-y-16">
        {workCardList.map((workInfo) => (
          <WorkCard key={`${workInfo.title}-${workInfo.role}`} workInfo={workInfo} />
        ))}
      </div>
    </section>
  );
}

export default WorkSection;
