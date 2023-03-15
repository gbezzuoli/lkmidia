import { CaretLeft, CaretRight } from "@phosphor-icons/react";
import { useRouter } from "next/router";

interface NavItemProps {
  pageName: string;
  href: string;
}

export const NavItem = ({ pageName, href }: NavItemProps) => {
  const router = useRouter();
  const isActive = router.pathname === href;

  const ActiveNavItem = () => {
    return (
      <a
        className="w-28 text-base flex flex-row justify-center items-center transition-all text-green-400 cursor-default"
        onClick={() => router.push(href)}
      >
        <CaretLeft className="" />
        {pageName}
        <CaretRight />
      </a>
    );
  };

  const NavItem = () => {
    return (
      <a
        className="text-neutral-50 w-28 text-base flex flex-row justify-center items-center transition-all cursor-pointer hover:brightness-110 hover:text-green-300"
        onClick={() => router.push(href)}
      >
        {pageName}
      </a>
    );
  };

  return isActive ? <ActiveNavItem /> : <NavItem />;
};
