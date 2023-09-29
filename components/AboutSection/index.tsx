"use client";

import { CustomList } from "../CustomList";
import { SkillProps, SkillTree, SkillType } from "../SkillTree";

const academicBackgroundProps = {
  list: [
    "2017.03 ~ 2023.02 : 국민대학교 SW학부 졸업",
    "2014.03 ~ 2017.02 : 인천만수고등학교 졸업",
  ],
};

const companyProps = {
  list: [
    "2022.11 ~ 2023.07 : 모바일개발팀 (삐약삐약, Enfax Android 앱 유지보수 및 개발)",
    "2023.07 ~ : 다우오피스 통합 FE 개발",
  ],
};

const prizeProps = {
  list: [
    "2020 정보통신 아이디어 경진대회 우수상",
    "2020 하계 키움증권 모의투자대회 입선",
    "2021 임베디드 SW 경진대회 4차 산업에너지 분야 우수상",
    "2021 KSC 논문대회 학생부문 장려상",
    "2022 KMUCS 다학제간캡스톤디자인 인기상",
  ],
};

const skillTreeProps: SkillProps = {
  skillArray: [
    { type: SkillType.LANGUAGE, title: "Kotlin" },
    { type: SkillType.LANGUAGE, title: "TypeScript" },
    { type: SkillType.LANGUAGE, title: "Java" },
    { type: SkillType.LANGUAGE, title: "JavaScript" },
    { type: SkillType.ANDRIOD, title: "Android" },
    { type: SkillType.ANDRIOD, title: "KMM" },
    { type: SkillType.ANDRIOD, title: "Coroutine" },
    { type: SkillType.ANDRIOD, title: "Koin" },
    { type: SkillType.ANDRIOD, title: "Dagger Hilt" },
    { type: SkillType.ANDRIOD, title: "Glide" },
    { type: SkillType.ANDRIOD, title: "Ktor" },
    { type: SkillType.ANDRIOD, title: "Retrofit" },
    { type: SkillType.ANDRIOD, title: "Kotlinx-Serialization" },
    { type: SkillType.ANDRIOD, title: "WorkManager" },
    { type: SkillType.ANDRIOD, title: "Service" },
    { type: SkillType.ANDRIOD, title: "SharedPreference" },
    { type: SkillType.WEB, title: "React" },
    { type: SkillType.WEB, title: "Next.js" },
    { type: SkillType.WEB, title: "Context API" },
    { type: SkillType.WEB, title: "Jotai" },
    { type: SkillType.WEB, title: "StoryBook" },
    { type: SkillType.WEB, title: "tailwind CSS" },
    { type: SkillType.TOOLS, title: "Jira" },
    { type: SkillType.TOOLS, title: "BitBucket" },
    { type: SkillType.TOOLS, title: "Figma" },
    { type: SkillType.TOOLS, title: "Zenkins" },
    { type: SkillType.TOOLS, title: "Zeplin" },
    { type: SkillType.FIREBASE, title: "Firebase" },
    { type: SkillType.FIREBASE, title: "App-Distribution" },
    { type: SkillType.FIREBASE, title: "Crashlytics" },
    { type: SkillType.FIREBASE, title: "GA Logging" },
    { type: SkillType.FIREBASE, title: "DebugView" },
    { type: SkillType.FIREBASE, title: "FCM" },
    { type: SkillType.FIREBASE, title: "Dynamic Links" },
  ],
};

export default function AboutSection() {
  return (
    <section id="about">
      <div className="bg-white dark:bg-black my-4 md:mx-24 shadow-xl rounded-xl mx-4 p-4 text-center animate-fade-down">
        <h1 className="text-2xl font-semibold pt-4 ">🧐 About Me</h1>
        <hr className="w-6 h-1 mx-auto my-8 bg-blue-500 border-0 rounded" />
        <div className="pb-4">
          <CustomList {...academicBackgroundProps} />
          <div>
            <CustomList {...companyProps} />
            <CustomList {...prizeProps} />
          </div>
          <div>
            <h1></h1>
            <p></p>
          </div>
          <SkillTree {...skillTreeProps} />
        </div>
      </div>
    </section>
  );
}
