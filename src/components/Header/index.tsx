import Image from "next/image";
import { Nav } from "./Nav";
import me from "@/assets/me.jpg";
import react from "@/assets/react.png";
import node from "@/assets/nodejs.png";
import python from "@/assets/python.png";

export const Header = () => {
  return (
    <header className=" bg-[#2D2E32] px-8">
      <Nav />
      <div className="flex flex-row max-w-6xl m-auto mt-8">
        <div className="flex flex-1 flex-col justify-between py-6">
          <section className="flex flex-col ml-auto w-80 gap-4">
            <span className="bg-green-400 w-fit p-1 rounded text-neutral-800">
              Fullstack Software Engineer
            </span>
            <h1 className="font-tech text-4xl">
              Falar é fácil, me mostre o código
            </h1>
            <p className="font-tech text-neutral-500">
              Programo desde os 12 anos de idade, desenvolvo aplicações
              escaláveis e com código limpo sempre com foco na entrega de valor
              para o negócio
            </p>
            <a className="mt-8 text-green-400 underline cursor-pointer font-tech">
              FALE COMIGO!
            </a>
          </section>
          <div className="flex flex-row mt-32 space-x-10 font-tech">
            <article className="flex flex-row items-center">
              <span className="text-4xl mr-4 font-medium">02</span>
              <p className="text-neutral-500">
                ANOS DE
                <br />
                EXPERIÊNCIA
              </p>
            </article>
            <article className="flex flex-row items-center">
              <span className="text-4xl mr-4 font-medium">36</span>
              <p className="text-neutral-500"> REPOS</p>
            </article>
          </div>
        </div>
        <div className="flex flex-1 relative items-center justify-center">
          <Image
            src={me}
            alt="Henrique"
            className="z-10 rounded-full h-[500px] w-[500px] border-2 border-green-400"
          />
          <div className="orbit1 absolute flex items-center justify-center h-24 w-24 z-50 bg-neutral-800 rounded-full m-auto">
            <Image src={react} alt="React icon" className=" h-[60%] w-fit" />
          </div>
          <div className="orbit2 absolute flex items-center justify-center h-24 w-24 z-50 bg-neutral-800 rounded-full m-auto">
            <Image
              src={node}
              alt="Node Icon"
              className="rotate-[-120deg] h-[60%] w-fit"
            />
          </div>
          <div className="orbit3 absolute flex items-center justify-center h-24 w-24 z-50 bg-neutral-800 rounded-full m-auto">
            <Image
              src={python}
              alt="Python icon"
              className="rotate-[-240deg]  h-[60%] w-fit"
            />
          </div>
        </div>
      </div>
    </header>
  );
};
