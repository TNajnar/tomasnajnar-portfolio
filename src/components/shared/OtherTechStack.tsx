import { TTechStack } from "@/utils/types";
import clsx from "clsx";
import { ReactElement } from "react";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiTypescript } from "react-icons/si";

export const TECHNOLOGIES: Array<TTechStack> = [
  { color: 'text-yellow', id: 77, icon: IoLogoJavascript },
  { color: 'text-react', id: 79, icon: FaReact },
  { color: 'text-ts', id: 81, icon: SiTypescript },
];

const OtherTechStack = (): ReactElement => (
  <div className="flex gap-3 py-2">
    {TECHNOLOGIES.map((tech) => {
      const { color, id, icon: TechLogo } = tech;

      return (
        <TechLogo
          className={clsx(color, "flex-shrink-0 flex-grow-0 w-8 h-8")}
          key={id} />
      );
    })}
  </div>
);

export default OtherTechStack;
