"use client";
import { EmphasisText } from "../EmphasisText";

export default function IntroduceSection() {
  return (
    <section id="home" className="p-[2rem]">
      <h1 className="text-black text-left sm:text-[5rem] text-[2.8rem] leading-[1.2] font-bold py-6">
        안녕하세요,
        <br />
        저는 민대인입니다
        <EmphasisText title="." className="sm:text-[5rem] text-[3rem]" />
      </h1>
      <p className="sm:text-[1.8rem] text-[1.3rem]">
        사소한 불편함을 편리하게 해결할 수 있는 솔루션을 찾는 일을 좋아하는
        2년차 주니어 프론트엔드 개발자입니다. 반복적인 업무에서 자동화 솔루션을
        찾기 위해 노력합니다. 항상 부족함을 느끼고 배움으로 한계를 극복하고자
        노력합니다.
      </p>
    </section>
  );
}
