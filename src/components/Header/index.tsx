import { useDrawerHandler } from "@/contexts/DrawerContext";
import { AiFillLinkedin, AiOutlineGithub } from "react-icons/ai";
import { NavItem } from "./Nav/NavItem";
import { SocialMediaButton } from "./Nav/SocialMediaButtton";

export const Header = () => {
  const { onOpen } = useDrawerHandler();
  return (
    <header aria-label="Site Header" className="shadow-sm bg-neutral-800">
      <div className="mx-auto max-w-6xl py-4 bg-neutral-800">
        <div className="flex items-center justify-between gap-4 lg:gap-10">
          <div className="flex lg:w-0 lg:flex-1">
            <h1 className="text-blue-50 text-3xl ">
              <span className="font-bold">Henrique</span> Carvalho
            </h1>
          </div>
          <nav
            aria-label="Site Nav"
            className="hidden gap-8 text-sm font-medium lg:flex"
          >
            <NavItem href="/" pageName="Início" />
            <NavItem href="/projects" pageName="Projetos" />
            <NavItem href="/about-me" pageName="Biografia" />
          </nav>

          <div className="hidden flex-1 items-center justify-end gap-4 sm:flex">
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

          <div className="lg:hidden">
            <button
              className="rounded-lg bg-green-400 p-2 text-neutral-800 cursor-pointer"
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
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
