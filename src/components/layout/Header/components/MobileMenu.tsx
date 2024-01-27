import { ReactElement } from "react"
import { useLockBodyScroll } from "react-use";
import { headerLinks } from "@/components/layout/LayoutData";
import { SCROLL_DURATION } from "@/utils/consts";
import { SocialIcons } from "@/components/shared";
import { Link } from "react-scroll";
import clsx from "clsx";

interface IProps {
  open: boolean;
  toggleMenu: () => void;
};

const MobileMenu = ({ open, toggleMenu }: IProps): ReactElement => {
  useLockBodyScroll(open);
  
  return (
    <>
      <nav className={clsx("default-transition mobileWrapper", open ? "isOpen" : "isClose")}>
        <div className={clsx("page-layout", "flex flex-col gap-8 justify-center")}>
          <div className="flex justify-between">
            <img alt="TN-logo" src="/logo.png" width={100} height={30} />
            <span onClick={toggleMenu}>Close</span>
          </div>

          <div className="flex flex-col justify-center items-center gap-3">
            {headerLinks.map(({coordinates, id, path, title}) =>
              <Link
                duration={SCROLL_DURATION}
                key={id}
                offset={coordinates} 
                onClick={toggleMenu}
                smooth
                spy={true} 
                to={path}
              >
                <span>
                  {title}
                </span>
              </Link>
            )}
          </div>
          <SocialIcons className="self-center" />
        </div>
      </nav>

      <div className={clsx(open && "absolute top-0 z-5 w-full h-dscreen backdrop-blur-sm")} />
    </>
  )};

export default MobileMenu;
