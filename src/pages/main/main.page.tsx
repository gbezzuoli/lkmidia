import me from "@/assets/me.jpg";
import node from "@/assets/nodejs.png";
import aws from "@/assets/aws.png";
import react from "@/assets/react.png";
import { SkillCard } from "@/components/SkillCard";
import { Brain, Code, Monitor } from "@phosphor-icons/react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

export const MainPage = () => {
  const { i18n } = useTranslation();
  return (
    <>
      <div className="bg-[#001706] px-8">
        <div className="flex flex-row max-w-6xl m-auto">
          <div className="flex flex-1 flex-col justify-between py-6">
            <section className="flex flex-col md:ml-auto w-80 gap-4">
              <span className="bg-[#e2b328] w-fit p-1 rounded text-neutral-800">
                {i18n.t("commons.owner.title")}
              </span>
              <h1 className="font-tech text-4xl text-white">
                {i18n.t("pages.main.talkIsCheap")}
              </h1>
              <p className="font-tech text-gray-300">
                {i18n.t("pages.main.sinceTwelve")}
              </p>
              <a
                href="https://api.whatsapp.com/send/?phone=5511972506083&text&type=phone_number&app_absent=0"
                className="mt-8 text-[#e2b328] underline cursor-pointer font-tech"
              >
                {i18n.t("pages.main.letsChat")}
              </a>
            </section>
            <div className="flex flex-col sm:flex-row mt-32 space-y-8 sm:space-y-0 sm:space-x-10 font-tech">
              <article className="flex flex-row items-center">
                <span className="text-4xl mr-4 font-medium text-white">
                  {new Date().getFullYear() - new Date('01/01/2021').getFullYear()}
                </span>
                <p className="text-gray-300">
                  {i18n.t("pages.main.yearsOf")}
                  <br />
                  {i18n.t("pages.main.experience")}
                </p>
              </article>
              <article className="flex flex-row items-center">
                <span className="text-4xl mr-4 font-medium text-white">+30</span>
                <p className="text-gray-300">
                  {i18n.t("pages.main.projects")}
                </p>
              </article>
            </div>
          </div>
          <div className="flex flex-1 relative items-center justify-center">
            <Image
              src={me}
              alt="lk"
              className="hidden md:flex z-10 rounded-full min-h-[300px] min-w-[300px]  lg:h-[500px] md:w-[500px] border-2 border-[#e2b328] object-cover"
            />
            <div className="hidden orbit1 absolute lg:flex items-center justify-center h-24 w-24 z-30 bg-[#001706] rounded-full m-auto">
              <Image
                src={react}
                alt="React icon"
                className="flex h-[60%] w-fit"
              />
            </div>
            <div className="hidden orbit2 absolute lg:flex items-center justify-center h-24 w-24 z-30 bg-[#001706] rounded-full m-auto">
              <Image
                src={node}
                alt="Node Icon"
                className="rotate-[-120deg] h-[60%] w-fit"
              />
            </div>
            <div className="hidden orbit3 absolute lg:flex  items-center justify-center h-24 w-24 z-30 bg-[#001706] rounded-full m-auto">
              <Image
                src={aws}
                alt="Amazon Web Services Icon"
                className="rotate-[-240deg] rounded-full  h-[90%] w-fit"
              />
            </div>
          </div>
        </div>
      </div>
      <main className="overflow-auto pt-40 flex flex-col bg-[#014513]">
        <div className="flex max-w-6xl m-auto px-8 xl:px-0 flex-col md:flex-row">
          <div className="flex flex-1 flex-col gap-4">
            <SkillCard
              name="Pensamento de Mercado"
              icon={<Brain />}
              description={i18n.t("pages.main.designThinkingDescription")}
            />
            <SkillCard
              name="Divulgação e Marketing"
              icon={<Monitor />}
              description={i18n.t("pages.main.frontEndDescription")}
            />
            <SkillCard
              name=""
              icon={<Code />}
              description={i18n.t("pages.main.backEndDescription")}
            />
          </div>
          <div className="flex flex-1 flex-col mt-20 md:mt-0 px-8 lg:px-32 space-y-8">
            <h5 className="font-tech text-gray-300">
              {i18n.t("pages.main.shortAboutMe.title")}
            </h5>
            <h1 className="text-4xl font-medium font-tech text-white">
              {i18n.t("pages.main.shortAboutMe.heading")}
            </h1>
            <h2 className="text-xl font-medium text-white">
              {i18n.t("pages.main.shortAboutMe.niceQuote")}
            </h2>
            <p className="font-tech text-gray-300">
              {i18n.t("pages.main.shortAboutMe.description")}
            </p>
          </div>
        </div>
      </main>
    </>
  );
};
