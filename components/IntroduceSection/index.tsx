"use client";
import Image from "next/image";
import { CustomList } from "../CustomList";
import { ContactList } from "../ContactList";

const CustomListConfig = {
  list: [
    "새로운 공통 컴포넌트를 개발해서 공유할 때 즐거움을 느껴요! 😆",
    "컴포넌트의 리렌더링을 최대한 방지하기 위해, Context API의 Scope를 고려하고 효율적인 전역 상태 관리 라이브러리 도입을 지향해요. 🛠",
    "서비스만의 디자인시스템을 중시해, Storybook을 적극적으로 활용하기 위해 노력하고 있어요! 🙇‍♂️",
  ],
};

export default function IntroduceSection() {
  return (
    <section id="home">
      <div className="md:bg-slate-100 bg-white md:mx-24 mx-4 dark:black md:shadow-none shadow-2xl dark:bg-black rounded-xl mt-24 flex flex-col text-center items-center justify-center py-12 md:flex-row md:text-left animate-fade-down">
        <div>
          <img
            className="rounded-full shadow-blue-300 shadow-2xl dark:shadow-blue-700 dark:shadow-2xl dark:bg-white"
            src="/introduce.png"
            alt=""
            width={240}
            height={240}
          />
        </div>
        <div className="px-8 md:px-12">
          <h1 className="font-bold text-2xl md:text-3xl mt-8">
            안녕하세요. 민대인입니다. 😄
          </h1>
          <CustomList className="mb-4" {...CustomListConfig} />
          <ContactList />
        </div>
      </div>
    </section>
  );
}
