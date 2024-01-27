import { ReactElement } from "react"
import Link from "next/link";
import Image from "next/image";
import { ERoutes } from "@/utils/enums";
import { headerLinks } from "@/components/layout/LayoutData";
import clsx from "clsx";
import { useLockBodyScroll } from "react-use";

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
          <div className="flex justify-between" onClick={toggleMenu}>
            <Link className="text-5xl" href={ERoutes.INTRO}>
              <Image src="/logo.png" alt="TN-logo" width={135} height={30} />
            </Link>
            <div>Close</div>
          </div>

          <div className="flex flex-col justify-center items-center gap-3">
            {headerLinks.map(({id, path, title}) =>
              <Link key={id} href={path}>
                {title}
              </Link>
            )}
          </div>
        </div>
      </nav>

      <div className={clsx(open && "absolute top-0 z-5 w-full h-dscreen backdrop-blur-sm")} />
    </>
  )};

export default MobileMenu;
