import { cloneElement, ReactElement } from "react";
import { useRouter } from "next/router";

interface SkillCardProps {
  name: string;
  description: string;
  icon: ReactElement;
}

export const SkillCard = ({ description, icon, name }: SkillCardProps) => {
  const router = useRouter();

  return (
    <section className="transition-all group hover:shadow-2xl   flex flex-col justify-between relative bg-neutral-800 h-48 p-8 rounded-lg w-full">
      <article>
        <h1 className="transition-all text-2xl mb-1 group-hover:text-green-300">
          {name}
        </h1>
        <p className="font-tech text-neutral-500">{description}</p>
      </article>
      <a
        className="font-tech underline cursor-pointer"
        onClick={() => router.push("/projects")}
      >
        VER PROJETOS
      </a>
      {cloneElement(icon, {
        className: "absolute top-8 right-8 text-green-300 text-3xl",
      })}
    </section>
  );
};
