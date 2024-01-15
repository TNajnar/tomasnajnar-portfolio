import { ReactElement } from "react"
import Image from "next/image";
import Link from "next/link";
import { THeaderLinks } from "@/utils/types";

const headerLinks: Array<THeaderLinks> = [
  { title: 'About Me', path: '#about' },
  { title: 'Skills', path: '#skills' },
  { title: 'Projects', path: '#projects' }
];

const Header = (): ReactElement => (
  <header className="py-4 border-b border-white">
    <div className="page-layout flex justify-between items-center">
      <Link className="text-5xl" href='#'>
        <Image src="/logo.png" alt="TN-logo" width={135} height={30} />
      </Link>
      <nav className="flex gap-5 text-2xl text-gray">
        {headerLinks.map(({title, path}) => 
          <Link className="cursor-pointer hover:text-white" href={path}>
            {title}
          </Link>
        )}
      </nav>
    </div>
  </header>
);

export default Header;
