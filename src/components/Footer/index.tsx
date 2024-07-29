import { useTranslation } from "react-i18next";
import {
  AiOutlineGoogle,
  AiOutlineInstagram
} from "react-icons/ai";
import { SocialMediaButton } from "../Header/Nav/SocialMediaButtton";

export const Footer = () => {
  const { i18n } = useTranslation();
  return (
    <footer className="flex flex-col w-full bg-[#014513] px-8 mt-20">
      <div className="flex flex-col w-full max-w-6xl m-auto py-20 justify-between">
        <div className="flex flex-col md:flex-row md:space-x-10">
          <article>
            <h1 className="text-4xl font-tech flex-1 text-[#e2b328]">
              {i18n.t("commons.footer.phrase")}
            </h1>
            <h2 className="text-4xl mt-16 text-[#e2b328]">
              {i18n.t("commons.footer.startBy")}{" "}
              <a
                href="https://api.whatsapp.com/send/?phone=5511972506083&text&type=phone_number&app_absent=0"
                className="mt-8 text-green-400 underline cursor-pointer"
              >
                {i18n.t("commons.footer.sayingHi")}
              </a>
            </h2>
          </article>
          <article className="flex flex-col flex-1 mt-20 md:mt-0">
            <h3 className="text-[#e2b328]">
              {i18n.t("commons.footer.information.title")}
            </h3>
            <h2 className="text-[#e2b328] text-xl mt-10">
              {i18n.t("commons.footer.information.address")}
            </h2>
            <span className="text-xl sm:text-4xl font-tech mt-2 text-[#e2b328]">
              {i18n.t("commons.footer.information.email")}
            </span>
          </article>
        </div>
        <div className="flex flex-col-reverse md:justify-between md:flex-row mt-4 md:mt-40">
          <article className="flex flex-col md:flex-row justify-between md:w-1/2 items-baseline mt-20 md:mt-0">
            <h1 className="text-xl sm:text-2xl text-[#e2b328]">
              {i18n.t("commons.owner.firstName")}{" "}
              <span className="text-neutral-400">
                {i18n.t("commons.owner.lastName")}
              </span>
            </h1>
            <span className="text-sm text-[#e2b328]">
              &#169; {new Date().getFullYear()}.{" "}
              {i18n.t("commons.footer.rights")}
            </span>
          </article>
          <article className="flex space-x-2">
            <SocialMediaButton
              icon={<AiOutlineInstagram className="text-[#e2b328]" />}
              alt="Instagram"
              href="https://github.com/HeenriqueCDS"
            />
            <SocialMediaButton
              icon={<AiOutlineGoogle className="text-[#e2b328]" />}
              alt="Google"
              href="https://www.linkedin.com/in/henriquecds"
            />
          </article>
        </div>
      </div>
    </footer>
  );
};
