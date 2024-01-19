import Link from "next/link"
import { SocialIcons } from "../shared";
import { headerLinks } from "./LayoutData";
import clsx from "clsx";

const Footer = () => (
  <div className="border-t border-gray">
    <div className={clsx("page-layout", "footerWrapper")}>
      <div className="flex flex-col items-start gap-4 text-xl desktop:flex-row desktop:items-center">
        <Link className="pr-3" href="#">
          <img alt="TN-logo" src="/logo.png" width={100} height={30} />
        </Link>
        {headerLinks.map(({path, title}) => 
          <Link className="hover:text-white" href={path} key={title}>
            {title}
          </Link>
        )}
      </div>

      <SocialIcons />
    </div>
  </div>
);

export default Footer;
