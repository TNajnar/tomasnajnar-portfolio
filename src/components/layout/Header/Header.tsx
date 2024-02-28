"use client";
import { ReactElement } from "react";
import { useToggle } from "react-use";
import { animateScroll, Link } from "react-scroll";
import { MobileMenu } from "./components";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { SCROLL_DURATION, SCROLL_OPTIONS } from "@/utils/consts";
import { LongLogo, ShortLogo } from "../logos";
import { FiMenu } from "react-icons/fi";
import { headerLinks } from "../LayoutData";
import clsx from "clsx";

const longLogo = "hidden md:block w-24 h-10 sm:h-14 desktop:w-28 desktop:h-12 fill-black dark:fill-gray";
const shortLogo = "block md:hidden w-14 h-11 sm:h-14 desktop:w-32 desktop:h-14 fill-black dark:fill-gray";

const Header = (): ReactElement => {
  const [open, toggleMenu] = useToggle(false);

  return (
    <header className="header">
      <div className={clsx("page-layout", "flex justify-between items-center")}>
        <div className="cursor-pointer" onClick={(): void => animateScroll.scrollToTop(SCROLL_OPTIONS)}>
          <LongLogo alt="TN-white" className={longLogo} />

          <ShortLogo alt="TN-white" className={shortLogo} />
        </div>

        <div className="flex items-center gap-4 sm:gap-6 desktop:gap-8">
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

            {/* TODO?  <SocialIcons withBorder /> */}
          </nav>

          <FiMenu 
            className="block desktop:hidden w-7 h-7 text-gray-light-modeText dark:text-gray"
            onClick={toggleMenu}
          />
          <ThemeSwitcher />
        </div>
      </div>

      <MobileMenu open={open} toggleMenu={toggleMenu} />
    </header>
  );
};

export default Header;
