"use client"
import { ReactElement } from "react"
import { useToggle } from "react-use";
import { animateScroll, Link } from "react-scroll";
import { MobileMenu } from "./components";
import { SocialIcons } from "@/components/shared";
import ThemeSwitcher from "./components/ThemeSwitcher";
import { SCROLL_DURATION, SCROLL_OPTIONS } from "@/utils/consts";
import { LongLogo, ShortLogo } from "../logos";
import { FiMenu } from "react-icons/fi";
import { headerLinks } from "../LayoutData";
import clsx from "clsx";

const longLogo = "hidden md:block my-1 w-24 h-10 desktop:w-32 desktop:h-14 fill-black dark:fill-gray";
const shortLogo = "block md:hidden w-14 h-14 desktop:w-32 desktop:h-14 fill-black dark:fill-gray";

const Header = (): ReactElement => {
  const [open, toggleMenu] = useToggle(false);

  return (
    <header className="header">
      <div className={clsx("page-layout", "flex justify-between items-center")}>
        <div className="cursor-pointer" onClick={(): void => animateScroll.scrollToTop(SCROLL_OPTIONS)}>
          <LongLogo alt="TN-white" className={longLogo} />

          <ShortLogo alt="TN-white" className={shortLogo} />
        </div>

        <div className="flex gap-8 items-center">
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

            <SocialIcons />
          </nav>

          <FiMenu 
            className="block desktop:hidden w-8 h-8 text-gray-light-mode dark:text-gray"
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
