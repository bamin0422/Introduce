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
        
        <h2 className="section-title">Experience</h2>
      </Reveal>
      <Reveal>
        <a
          href="https://daouoffice.gitbook.io/4.0"
          target="_blank"
          rel="noopener noreferrer"
          className="glass group mb-12 grid overflow-hidden rounded-[var(--radius)] md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]"
        >
          <img
            src="/images/daouoffice-40-banner.png"
            alt="다우오피스 4.0 출시"
            width={1200}
            height={630}
            loading="lazy"
            className="aspect-[1200/630] h-auto w-full object-cover"
          />
          <div className="flex flex-col justify-center gap-3 p-6 md:p-8">
            <DaouLogo />
            <p className="text-sm leading-relaxed text-muted-foreground">
              6년 만의 대규모 업데이트. 모노레포 아키텍처부터 대시보드 가젯·네비게이션까지
              프론트엔드 핵심 축을 설계하고 v4.0.0 ~ v4.2.2를 릴리스했습니다.
            </p>
            <span className="text-sm font-semibold text-primary group-hover:underline">출시 안내 보기 →</span>
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
