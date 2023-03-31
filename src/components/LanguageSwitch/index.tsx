import uk from "@/assets/uk.png";
import br from "@/assets/br.png";
import { CaretDown } from "@phosphor-icons/react";
import Image from "next/image";
import { useRef, useState } from "react";

import useOnClickOutside from "@/hooks/useOnClickOutside";
import { useTranslation } from "react-i18next";

export const LanguageSwitch = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const handleLangue = (code: string) => {
    i18n.changeLanguage(code);
  };
  const languages = [
    { code: "en", icon: uk, name: i18n.t("commons.langs.enUS") },
    { code: "pt", icon: br, name: i18n.t("commons.langs.ptBR") },
  ];
  useOnClickOutside(ref, () => setIsOpen(false));

  return (
    <div
      ref={ref}
      onClick={() => setIsOpen(!isOpen)}
      className={`transition-all relative cursor-pointer ${
        !isOpen && "hover:brightness-75"
      } border-neutral-500 border-[1px] flex w-24 h-9 p-2 items-center text-neutral-300 justify-between rounded-md bg-neutral-700 before:absolute before:bg-neutral-500 before:h-9 before:w-[1px] before:right-8 `}
    >
      <Image
        src={languages.find((lang) => lang.code === i18n.language)!.icon}
        alt="English"
        className="w-8 h-5 object-fill"
      />

      <CaretDown size={18} />
      <div
        className={`${
          isOpen ? "flex w-max " : "hidden w-0 "
        } transition duration-300 ease-in-out absolute hover:brightness-1 p-2 border-neutral-500 border-[1px] shadow-lg bg-neutral-700 w-max rounded-md z-50 flex-col t space-y-2 top-10 right-0`}
      >
        {languages.map((lang) => {
          return (
            <button
              onClick={() => handleLangue(lang.code)}
              key={lang.code}
              className="flex transition-all rounded-md flex-row-reverse items-center gap-4 hover:bg-neutral-800 p-2"
            >
              <Image
                src={lang.icon}
                alt="English"
                className="w-8 h-5 object-fill"
              />
              <span>{lang.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};
