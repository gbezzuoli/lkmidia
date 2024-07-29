import { useRouter } from "next/router";
import { cloneElement, ReactElement } from "react";
import { useTranslation } from "react-i18next";

interface SkillCardProps {
  name: string;
  description: string;
  icon: ReactElement;
}

export const SkillCard = ({ description, icon, name }: SkillCardProps) => {
  const router = useRouter();
  const { i18n } = useTranslation();

  return (
    <section className="transition-all group hover:shadow-2xl flex flex-col justify-between relative bg-[#001706] h-48 p-8 rounded-lg w-full border-2 border-[#e2b328]">
      <article>
        <h1 className="transition-all text-2xl mb-1 text-[#e2b328] group-hover:text-green-300">
          {name}
        </h1>
        <p className="font-tech text-[#e2b328]">{description}</p>
      </article>
      <a
        className="font-tech text-[#e2b328] underline cursor-pointer"
        onClick={() => router.push("/projects")}
      >
        {i18n.t("pages.main.seeProjects")}
      </a>
      {cloneElement(icon, {
        className: "absolute top-8 right-8 text-green-300 text-3xl",
      })}
    </section>
  );
};
