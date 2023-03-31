import { useDrawerHandler } from "@/contexts/DrawerContext";

import { useTranslation } from "react-i18next";

import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";

import { LanguageSwitch } from "../LanguageSwitch";
import { NavItem } from "./Nav/NavItem";
import { SocialMediaButton } from "./Nav/SocialMediaButtton";

export const Header = () => {
  const { i18n } = useTranslation();
  const { onOpen } = useDrawerHandler();
  return (
    <header aria-label="Site Header" className="shadow-sm bg-neutral-800 px-4">
      <div className="mx-auto max-w-6xl py-4 bg-neutral-800">
        <div className="flex items-center justify-between gap-4 lg:gap-10">
          <h1 className="flex flex-row space-x-2 text-blue-50 text-3xl ">
            <span className="font-bold">
              {i18n.t("commons.owner.firstName")}
            </span>{" "}
            <span className="hidden sm:flex">
              {i18n.t("commons.owner.lastName")}
            </span>
          </h1>

          <nav
            aria-label="Site Nav"
            className="hidden gap-8 text-sm font-medium lg:flex"
          >
            <NavItem href="/" pageName={i18n.t("commons.header.tabs.home")} />
            <NavItem
              href="/projects"
              pageName={i18n.t("commons.header.tabs.projects")}
            />
            <NavItem
              href="/about-me"
              pageName={i18n.t("commons.header.tabs.about")}
            />
          </nav>

          <div className="hidden flex-1 items-center justify-end gap-4 lg:flex">
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

          <div className="flex space-x-4">
            <LanguageSwitch />
            <button
              className="rounded-lg bg-green-400 p-2 text-neutral-800 cursor-pointer lg:hidden"
              type="button"
              onClick={() => onOpen()}
            >
              <span className="sr-only">Open menu</span>
              <svg
                aria-hidden="true"
                className="h-5 w-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
