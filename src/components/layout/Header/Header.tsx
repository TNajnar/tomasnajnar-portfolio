"use client"
import { ReactElement } from "react"
import { useToggle } from "react-use";
import Link from "next/link";
import { HamburgerMenu, MobileMenu } from "./components";
import { SocialIcons } from "@/components/shared";
import { ERoutes } from "@/utils/enums";
import { headerLinks } from "../LayoutData";
import clsx from "clsx";
import ThemeSwitcher from "./components/ThemeSwitcher";

const Header = (): ReactElement => {
  const [open, toggleMenu] = useToggle(false);
  
  return (
    <header className={clsx("sticky top-0 z-10 bg-black py-4 border-b border-white")}>
      <div className={clsx("page-layout", "flex justify-between items-center")}>
        <Link href={ERoutes.INTRO}>
          <img alt="TN-logo" src="/logo.png" width={100} height={30} />
        </Link>

        <nav className="wrapper">
          {headerLinks.map(({id, path, title}) => 
            <Link className="hover:text-white" href={path} key={id}>
              <span className="bg-black w-full h-full p-2">
                {title}
              </span>
            </Link>
          )}

          <SocialIcons />
          <ThemeSwitcher className="order-last" />
        </nav>

        <HamburgerMenu open={open} toggleMenu={toggleMenu} />
      </div>

      <MobileMenu open={open} toggleMenu={toggleMenu} />
    </header>
  );
};

export default Header;
