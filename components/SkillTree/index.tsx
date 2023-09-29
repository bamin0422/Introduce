export enum SkillType {
  LANGUAGE = "bg-red-500",
  ANDRIOD = "bg-green-500",
  WEB = "bg-blue-500",
  TOOLS = "bg-yellow-500",
  FIREBASE = "bg-orange-500",
}

export interface SkillItem {
  type: SkillType;
  title: string;
  contents?: string;
}

export interface SkillProps {
  skillArray: Array<SkillItem>;
}

export function SkillTree({ skillArray }: SkillProps) {
  return (
    <div className="text-center">
      <div className="flex flex-wrap flex-row justify-center">
        {skillArray.map((skill) => {
          return (
            <p
              key={skill.type}
              className={
                skill.type +
                " px-4 py-2 mr-2 mt-2 text-slate-700 dark:text-black rounded font-semibold"
              }
            >
              {skill.title}
            </p>
          );
        })}
      </div>
    </div>
  );
}
