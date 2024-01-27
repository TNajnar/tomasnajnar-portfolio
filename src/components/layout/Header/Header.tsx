"use client"
import { ReactElement } from "react"
import { useToggle } from "react-use";
import { animateScroll, Link } from "react-scroll";
import { HamburgerMenu, MobileMenu } from "./components";
import { SocialIcons } from "@/components/shared";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { SCROLL_DURATION, SCROLL_OPTIONS } from "@/utils/consts";
import { headerLinks } from "../LayoutData";
import clsx from "clsx";

const Header = (): ReactElement => {
  const [open, toggleMenu] = useToggle(false);

  return (
    <header className="header">
      <div className={clsx("page-layout", "flex justify-between items-center")}>
        <div className="cursor-pointer" onClick={(): void => animateScroll.scrollToTop(SCROLL_OPTIONS)}>
          <img alt="TN-logo" src="/logo.png" width={100} height={30} />
        </div>

        <nav className="wrapper">
          {headerLinks.map(({coordinates, id, path, title}) => 
            <Link
              className="headerItem"
              duration={SCROLL_DURATION}
              key={id}
              offset={coordinates} 
              smooth
              spy={true} 
              to={path}
            >
              <span className="w-full h-full p-2 bg-white dark:bg-black">
                {title}
              </span>
            </Link>
          )}

          <ThemeSwitcher />
          <SocialIcons />
        </nav>

          <HamburgerMenu open={open} toggleMenu={toggleMenu} /> 
      </div>

      <MobileMenu open={open} toggleMenu={toggleMenu} />
    </header>
  );
};

export default Header;
