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
          사용자 관점에서 문제를 정의하고, 주도적으로 해결합니다.
        </span>
        <br />
        <br />
        불편함을 발견하면 직접 도구를 만들어 해결하는 것을 즐기는
        개발자입니다.
        <br />
        안드로이드 개발자로 커리어를 시작하며 모바일 앱 내 웹앱(WebView,
        WebBridge) 연동과 사용자 경험 설계를 경험했고, 이후 프론트엔드로
        전향하여 React와 Next.js를 중심으로 기업용 SaaS 그룹웨어의
        프론트엔드를 설계·개발·운영해 왔습니다. 80개 이상의 어드민 설정
        페이지, 대시보드 가젯 시스템, AI 코드리뷰 자동화 관리 대시보드 등
        사용자와 운영자 모두를 위한 시스템을 구축하며, 운영 효율성과 개발
        생산성을 동시에 높여 왔습니다.
        <br />
        <br />
        <section className="md:p-10 !md:pb-0 space-y-8">
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-orange-400 inline-block py-1 rounded-md">
              재사용 가능한 컴포넌트와 라이브러리 설계
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              팀 전체가 일관되게 사용할 수 있는 공통 UI 컴포넌트를 설계하고,
              모노레포 구조에서 공유 패키지로 관리해 왔습니다. Radix UI 기반
              Headless 컴포넌트 위에 Select, Dialog, DateField 등을 구현하고,
              Turbo Code Generator로 Storybook stories 파일을 자동 생성하여
              컴포넌트 개발 생산성을 높였습니다.
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
              SSR과 멀티 플랫폼 서비스 개발
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              Next.js App Router 기반 SSR 환경에서 서비스를 개발·운영하며,
              웹뿐 아니라 Electron PC 메신저, 모바일 앱 내 WebView/WebBridge
              연동까지 다양한 플랫폼에서 일관된 사용자 경험을 제공해 왔습니다.
              ErrorBoundary와 Sentry 연동으로 안정적인 에러 처리 체계를
              구축하고, 코드 스플리팅과 캐싱 전략으로 사용자 체감 성능을
              개선합니다.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-orange-400 inline-block py-1 rounded-md">
              어드민 및 운영 시스템 구축 경험
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              5개 카테고리, 80개 이상의 관리자 설정 페이지를 다이얼로그 기반
              SPA로 설계·구현하고, RBAC 권한 관리 시스템과 관리자 로그
              다운로드 기능을 개발했습니다. AI 코드리뷰 관리 대시보드에서는
              레포지토리 등록, 리뷰 이력 조회, 통계 리포트 기능을 구현하여
              비개발자도 시스템을 운영할 수 있도록 했습니다.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-orange-400 inline-block py-1 rounded-md">
              운영 효율성과 서비스 안정성 개선
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              Sentry 에러 모니터링 시스템을 선택적 로깅 방식으로 재설계하여,
              노이즈를 제거하고 실제 서비스 장애만 수집하는 구조를
              구축했습니다. 사용자/회사 컨텍스트 자동 주입으로 고객사별 에러를
              즉시 추적할 수 있게 하여, 운영 중 발생하는 문제의 근본 원인을
              빠르게 파악하고 대응할 수 있는 환경을 만들었습니다.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-orange-400 inline-block py-1 rounded-md">
              자동화 도구 개발을 통한 생산성 극대화
            </h3>
            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
              AI 코드리뷰 자동화 시스템을 직접 설계·구축하여 리뷰 응답 시간을
              99% 단축하고, 관리 대시보드까지 개발하여 비개발자도 운영할 수
              있도록 했습니다. 반복 작업을 발견하면 도구나 라이브러리를 만들어
              해결하는 것을 즐기며, 팀 전체의 생산성을 높이는 데 가치를 두고
              있습니다.
            </p>
          </div>
        </section>
        <br />
      </p>
    </section>
  );
}
