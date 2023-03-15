import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";

import { SocialMediaButton } from "./SocialMediaButtton";
import { NavItem } from "./NavItem";

export const Nav = () => {
  return (
    <div className="max-w-6xl m-auto py-4 flex flex-row items-center justify-between">
      <h1 className="text-blue-50 text-3xl ">
        <span className="font-bold">Henrique</span> Carvalho
      </h1>
      <nav className="flex flex-row space-x-8 items-center">
        <NavItem href="/" pageName="Início" />
        <NavItem href="/projects" pageName="Projetos" />
        <NavItem href="/about-me" pageName="Biografia" />
      </nav>
      <div className="flex flex-row space-x-4">
        <SocialMediaButton
          href="https://github.com/heenriquecds"
          icon={<GithubLogo />}
          alt="GitHub"
        />
        <SocialMediaButton
          href="https://linkedin.com/in/henriquecds"
          icon={<LinkedinLogo color="#0072B1" />}
          alt="LinkedIn"
        />
      </div>
      <section className="flex flex-row space-x-4"></section>
      {/* <IconButton>
        <Envelope />
      </IconButton> */}
    </div>
  );
};
