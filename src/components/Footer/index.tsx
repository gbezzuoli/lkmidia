import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import {
  AiFillLinkedin,
  AiOutlineGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { SocialMediaButton } from "../Header/Nav/SocialMediaButtton";

export const Footer = () => {
  return (
    <footer className="flex flex-col w-full bg-neutral-800 px-8 mt-20">
      <div className="flex flex-col w-full max-w-6xl m-auto py-20 justify-between">
        <div className="flex flex-col md:flex-row md:space-x-10">
          <article>
            <h1 className="text-4xl font-tech flex-1">
              Vamos construir algo incrível juntos.
            </h1>
            <h2 className="text-4xl mt-16">
              Comece{" "}
              <a
                href="https://wa.me/5511964780550"
                className="mt-8 text-green-400 underline cursor-pointer"
              >
                dizendo olá!
              </a>
            </h2>
          </article>
          <article className="flex flex-col flex-1 mt-20 md:mt-0">
            <h3 className="text-neutral-500">Informação</h3>
            <h2 className="text-neutral-500 text-xl mt-10">
              Franco da Rocha, SP - Brasil
            </h2>
            <span className="text-xl sm:text-4xl font-tech mt-2">
              heenriquecds@gmail.com
            </span>
          </article>
        </div>
        <div className="flex flex-col-reverse md:justify-between md:flex-row mt-4 md:mt-40">
          <article className="flex flex-col md:flex-row justify-between md:w-1/2 items-baseline mt-20 md:mt-0">
            <h1 className="text-xl sm:text-2xl">
              Henrique <span className="text-neutral-400">Carvalho</span>
            </h1>
            <span className="text-sm text-neutral-500">
              &#169; {new Date().getFullYear()}. Todos o direitos reservados
            </span>
          </article>
          <article className="flex space-x-2">
            <SocialMediaButton
              icon={<AiOutlineGithub />}
              alt=""
              href="https://github.com/HeenriqueCDS"
            />
            <SocialMediaButton
              icon={<AiFillLinkedin className="text-[#0071B2]" />}
              alt=""
              href="https://www.linkedin.com/in/henriquecds"
            />
            <SocialMediaButton
              icon={<AiOutlineTwitter className="text-[#1A8CD8]" />}
              alt=""
              href="https://twitter.com/henriquecdsx"
            />
          </article>
        </div>
      </div>
    </footer>
  );
};
