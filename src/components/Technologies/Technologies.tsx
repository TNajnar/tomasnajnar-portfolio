import { ReactElement } from "react"
import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { TTechStack } from "@/utils/types";
import clsx from "clsx";

const technologies: Array<TTechStack> = [
  { color: 'text-yellow', id: 77, icon: IoLogoJavascript },
  { color: 'text-next', id: 78, icon: TbBrandNextjs },
  { color: 'text-react', id: 79, icon: FaReact },
  { color: 'text-css', id: 80, icon: SiTailwindcss },
  { color: 'text-ts', id: 81, icon: SiTypescript },
];

const Technologies = (): ReactElement => (
  <section className="flex gap-16 desktop:justify-around p-4 w-full overflow-x-auto bg-gray-light-mode-2 dark:bg-gray-dark-1 rounded-2xl shadow-md">
    {technologies.map((tech) => {
      const {color, id, icon: TechLogo} = tech;
      
      return (
        <TechLogo
          className={clsx(color, "flex-shrink-0 flex-grow-0 w-24 h-24 desktop:w-32 desktop:h-32")}
          key={id}
        />
      );
    })}
  </section>
);

export default Technologies;
