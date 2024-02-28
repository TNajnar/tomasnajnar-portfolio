"use client";
import { ReactElement } from "react";
import { Link, animateScroll } from "react-scroll";
import { SocialIcons } from "../shared";
import { LongLogo } from "./logos";
import { SCROLL_DURATION, SCROLL_OPTIONS } from "@/utils/consts";
import { headerLinks } from "./LayoutData";
import clsx from "clsx";

const Footer = (): ReactElement => (
  <div className="border-t border-gray">
    <div className={clsx("page-layout", "footerWrapper")}>
      <div className="flex flex-col items-start gap-4 text-xl desktop:flex-row desktop:items-center">
        <div className="pr-3 cursor-pointer" onClick={(): void => animateScroll.scrollToTop(SCROLL_OPTIONS)}>
          <LongLogo className="w-24 h-10 sm:h-14 desktop:w-28 desktop:h-12 fill-black dark:fill-gray" />
        </div>

        {headerLinks.map(({coordinates, id, path, title}) => 
          <Link
            className="headerItem text-gray-light-modeText dark:text-gray"
            duration={SCROLL_DURATION}
            key={id}
            offset={coordinates} 
            smooth
            spy={true} 
            to={path}
          >
            {title}
          </Link> 
        )}
      </div>

      <SocialIcons classNameSize="hover:scale-110" defaultSize />
    </div>
  </div>
);

export default Footer;
