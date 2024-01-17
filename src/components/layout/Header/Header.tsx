"use client"
import { ReactElement } from "react"
import { useToggle } from "react-use";
import Image from "next/image";
import Link from "next/link";
import { HamburgerMenu, MobileMenu } from "./components";
import { Icon, TIconType } from "@/components/shared";
import { headerLinks, socialIcons } from "../LayoutData";
import clsx from "clsx";

const Header = (): ReactElement => {
  const [open, toggleMenu] = useToggle(false);

  return (
    <header className={clsx("relative py-4 border-b border-white")}>
      <div className={clsx("page-layout", "flex justify-between items-center")}>
        <Link className="text-5xl" href="#">
          <Image src="/logo.png" alt="TN-logo" width={135} height={30} />
        </Link>

        <nav className="wrapper">
          {headerLinks.map(({title, path}) => 
            <Link key={title} className="cursor-pointer hover:text-white" href={path}>
              {title}
            </Link>
          )}
          <div className="iconWrapper">
            {socialIcons.map(({icon, url}) => 
              <Link key={icon} className="p-2 rounded-full border-gray border-2 bg-gray-dark-1 cursor-pointer" href={url}>
                <Icon className="w-6 h-6 fill-white" type={icon as TIconType} />
              </Link>
            )}
          </div>
        </nav>

        <HamburgerMenu open={open} toggleMenu={toggleMenu} />
      </div>

      <MobileMenu open={open} toggleMenu={toggleMenu} />
    </header>
  )
};

export default Header;
