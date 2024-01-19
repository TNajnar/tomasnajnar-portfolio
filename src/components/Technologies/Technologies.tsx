import { ReactElement } from "react"
import { FaReact } from "react-icons/fa";
import { SiTailwindcss, SiTypescript } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { TTechStack } from "@/utils/types";
import clsx from "clsx";

const technologies: Array<TTechStack> = [
  { color: 'text-yellow', id: 77, icon: IoLogoJavascript },
  { color: 'text-[#000]', id: 78, icon: TbBrandNextjs },
  { color: 'text-[#087ea4]', id: 79, icon: FaReact },
  { color: 'text-[#38bdf8]', id: 80, icon: SiTailwindcss },
  { color: 'text-[#2f74c0]', id: 81, icon: SiTypescript },
];

const Technologies = (): ReactElement => (
  <div className="flex gap-16 desktop:justify-around p-4 w-full overflow-x-auto bg-gray-dark-1 rounded-2xl">
    {technologies.map((tech) => {
      const {color, id, icon: TechLogo} = tech;
      
      return (
        <TechLogo
          className={clsx(color, "flex-shrink-0 flex-grow-0 w-32 h-32")}
          key={id}
        />
      );
    })}
  </div>
);

export default Technologies;
