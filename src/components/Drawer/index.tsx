import { X } from "@phosphor-icons/react";
import { useRef } from "react";
import { useTranslation } from "react-i18next";
import { AiOutlineInstagram, AiOutlineWhatsApp } from "react-icons/ai";
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
        isOpen ? "left-0" : "-left-80"
      } flex lg:hidden fixed flex-col h-screen max-h-full overflow-hidden w-80 max-w-screen bg-[#001706] z-50 shadow-md p-8`}
    >
      <button
        className="transition-all text-xl absolute cursor-pointer right-2 top-2 hover:text-red-400"
        onClick={() => onClose()}
      >
        <X />
      </button>
      <h1 className="text-[#e2b328] text-2xl ml-auto mx-auto ">
        <span className="font-bold">LK Midia</span> 
      </h1>
      <div className="flex flex-col items-center space-y-2 mt-20">
        <NavItem href="https://drive.google.com/drive/folders/1-pIj6Uw7s7Ajt72DGZhzMEZNTfHwI9Fm" pageName={i18n.t("commons.header.tabs.home")} />
        <NavItem
          href="https://drive.google.com/drive/folders/1-pIj6Uw7s7Ajt72DGZhzMEZNTfHwI9Fm"
          pageName={i18n.t("commons.header.tabs.projects")}
        />
        <NavItem
          href="https://drive.google.com/drive/folders/1-pIj6Uw7s7Ajt72DGZhzMEZNTfHwI9Fm"
          pageName={i18n.t("commons.header.tabs.about")}
        />
      </div>
      <div className="flex flex-row mt-auto space-x-4">
        <SocialMediaButton
          href=""
          icon={<AiOutlineWhatsApp className="text-[#e2b328]" />}
          alt="WhatsApp"
        />
        <SocialMediaButton
          icon={<AiOutlineInstagram className="text-[#e2b328]" />}
          alt="Instagram"
          href=""
        />
      </div>
    </nav>
  );
};
