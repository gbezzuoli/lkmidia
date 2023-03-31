import { X } from "@phosphor-icons/react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineGithub, AiFillLinkedin } from "react-icons/ai";
import { useOnClickOutside } from "usehooks-ts";
import { NavItem } from "../Header/Nav/NavItem";
import { SocialMediaButton } from "../Header/Nav/SocialMediaButtton";

interface DrawerProps {
  isOpen: boolean;
  onClose: () => void;
}
export const Drawer = ({ isOpen, onClose }: DrawerProps) => {
  const { i18n } = useTranslation();
  const ref = useRef<HTMLElement>(null);
  useOnClickOutside(ref, () => onClose());
  return (
    <nav
      ref={ref}
      className={`transition-all ${
        isOpen ? " left-0 " : " -left-80 "
      } flex lg:hidden fixed flex-col h-screen max-h-full overflow-hidden w-80 max-w-screen bg-neutral-800 z-50 shadow-md p-8`}
    >
      <button
        className="transition-all text-xl absolute cursor-pointer right-2 top-2 hover:text-red-400"
        onClick={() => onClose()}
      >
        <X />
      </button>
      <h1 className="text-blue-50 text-2xl ml-auto mx-auto ">
        <span className="font-bold">Henrique</span> Carvalho
      </h1>
      <div className="flex flex-col items-center space-y-2 mt-20">
        <NavItem href="/" pageName={i18n.t("commons.header.tabs.home")} />
        <NavItem
          href="/projects"
          pageName={i18n.t("commons.header.tabs.projects")}
        />
        <NavItem
          href="/about-me"
          pageName={i18n.t("commons.header.tabs.about")}
        />
      </div>
      <div className="flex flex-row mt-auto space-x-4">
        <SocialMediaButton
          href="https://github.com/heenriquecds"
          icon={<AiOutlineGithub />}
          alt="GitHub"
        />
        <SocialMediaButton
          icon={<AiFillLinkedin className="text-[#0071B2]" />}
          alt="LinkedIn"
          href="https://www.linkedin.com/in/henriquecds"
        />
      </div>
    </nav>
  );
};
