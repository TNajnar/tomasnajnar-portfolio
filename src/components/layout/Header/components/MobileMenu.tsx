import { ReactElement } from "react"
import Link from "next/link";
import Image from "next/image";
import { headerLinks } from "@/components/layout/LayoutData";
import clsx from "clsx";

interface IProps {
  open: boolean;
  toggleMenu: () => void;
}

const MobileMenu = ({ open, toggleMenu }: IProps): ReactElement => (
  <nav className={clsx("default-transition mobileWrapper", open ? "isOpen" : "isClose")}>
    <div className={clsx("page-layout", "flex flex-col gap-8 justify-center")}>
      <div className="flex justify-between" onClick={toggleMenu}>
        <Link className="text-5xl" href="#">
          <Image src="/logo.png" alt="TN-logo" width={135} height={30} />
        </Link>
        <div>Close</div>
      </div>

      <div className="flex flex-col justify-center items-center gap-3">
        {headerLinks.map(({title, path}) =>
          <Link key={title} href={path}>
            {title}
          </Link>
        )}
      </div>
    </div>
  </nav>
);

export default MobileMenu

  // <nav className={clsx(
  //   "default-transition",
  //   "grid grid-rows-[0fr] transition-[grid-template-rows]",
  //   open && "grid-rows-[1fr] h-screen"
  // )}>
  //   <div className="flex flex-col gap-3 overflow-hidden">
  //     {headerLinks.map(({title, path}) =>
  //       <Link key={title} href={path}>
  //         {title}
  //       </Link>
  //     )}
  //   </div>
  // </nav>
