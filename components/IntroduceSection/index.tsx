"use client";
import { EmphasisText } from "../EmphasisText";
export default function IntroduceSection() {
  return (
    <section id="home" className="px-[2rem] pt-[2rem]">
      <h1 className="text-black text-left sm:text-[3rem] text-[2.8rem] leading-[1.2] font-normal py-6">
        <img
          src="/introduce.png"
          alt=""
          className="bg-cover bg-slate-200 border-[8px] sm:rounded-sm border-white shadow-2xl rounded-full mb-8"
          width={167.25}
          height={209.625}
        />
        민대인 <span className="sm:text-[3rem] text-[1.5rem]">(bamin0422)</span>
        <EmphasisText title="." className="sm:text-[5rem] text-[3rem]" />
      </h1>
      <p className="sm:text-[1rem] text-[0.8rem] p-8 rounded-[8px] border-2 border-dotted text-gray-800">
        <span className="text-orange-500 font-semibold">
          Learn once, write anywhere.
        </span>
        <br />
        <br />
        하나의 기술을 배워 여러 환경에 녹여내는 데에서 개발자로서의 가치를
        찾습니다.
        <br />
        저는 처음엔 안드로이드 개발자로 커리어를 시작했습니다. 단말기 최적화,
        화면 구성, 다양한 해상도 대응 등 모바일 특유의 제약 속에서 사용성과
        안정성을 고려하며 UI를 다뤘습니다. 이 경험은 제가 프론트엔드로 전향한
        이후에도, "사용자 경험을 설계하는 눈"으로 그대로 이어졌습니다. React와
        Next.js를 중심으로 웹 개발을 이어가며, 이제는 웹과 앱, 데스크톱 등
        다양한 플랫폼을 넘나들며 일관된 사용자 경험과 유지보수 가능한 구조를
        추구하고 있습니다.
        <br />
        <br />
        <section className="md:p-10 !md:pb-0 space-y-8">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-orange-400 inline-block py-1 rounded-md">
              컴포넌트 중심의 UI 설계
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              디자인 시스템을 코드로 구현한다는 관점에서, 재사용 가능한
              컴포넌트를 설계하고 모노레포 구조로 관리해 왔습니다. 안드로이드
              개발 시기 배웠던 MVVM 아키텍처의 명확한 역할 분리와 모듈화 개념을,
              웹에서는 Feature-Sliced Design으로 재해석하고 적용하고 있습니다.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-orange-400 inline-block py-1 rounded-md">
              FSD를 통한, 비즈니스 로직과 프레젠테이션의 분리
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              로직이 UI를 침범하지 않도록, 상태 관리 도구 (Jotai, TanStack Query
              등)와 커스텀 훅을 활용해 핵심 로직을 명확하게 분리합니다. 이
              접근은 앱 개발 시 ViewModel을 분리하던 경험에서 출발했고, 현재는
              웹에서도 동일한 철학으로 적용하고 있습니다.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-orange-400 inline-block py-1 rounded-md">
              플랫폼 특성에 맞춘 성능 최적화
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              Lazy Loading, 코드 스플리팅, 이미지 최적화를 통해 사용자 체감
              성능을 개선하고, ErrorBoundary로 예외 상황에서도 안정적인 UI를
              유지합니다. 성능은 곧 사용자 경험의 품질이라 믿고, 이를 지속적으로
              개선합니다.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-orange-400 inline-block py-1 rounded-md">
              MCP 서버 개발 및 API 설계
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              Model Context Protocol (MCP) 서버를 개발하여 사업자등록번호 진위
              확인 및 정보 조회 기능을 구현했습니다. MVC 패턴을 적용한
              TypeScript 기반 서버로, REST API와 MCP 도구를 동시에 제공합니다.
              Docker 컨테이너화와 Smithery AI 배포를 지원하며, 공공데이터포털
              API 연동을 통해 실시간 사업자 정보를 조회할 수 있습니다.
            </p>
          </div>
        </section>
        <br />
      </p>
    </section>
  );
}
