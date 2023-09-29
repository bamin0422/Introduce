"use client";
import Image from "next/image";
import { CustomList } from "../CustomList";
import { ContactList } from "../ContactList";

const CustomListConfig = {
  list: ["Android : 삐약삐약, 엔팩스", "Front-End : 다우오피스 통합 FE"],
};

export default function IntroduceSection() {
  return (
    <section id="home">
      <div className="md:bg-slate-100 bg-white md:mx-24 mx-4 dark:black md:shadow-none shadow-2xl dark:bg-black rounded-xl mt-24 flex flex-col text-center items-center justify-center py-12 md:flex-row md:text-left animate-fade-down">
        <div>
          <Image
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
          <CustomList {...CustomListConfig} />
          <p className="my-4">
            Android App 개발과 Front-End 개발을 좋아하는{" "}
            <span className="font-semibold text-blue-600">Client 개발자</span>
            입니다. 🥳
          </p>
          <ContactList />
        </div>
      </div>
    </section>
  );
}
