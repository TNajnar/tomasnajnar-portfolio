import { ReactElement } from "react";
import { TECHNOLOGIES } from "@/utils/consts";
import clsx from "clsx";

interface IProps {
  className?: string;
}

const TechStack = ({ className }: IProps): ReactElement => (
  <div className={clsx("flex gap-3 py-2", className)}>
    {TECHNOLOGIES.map((tech) => {
      const { color, id, icon: TechLogo } = tech;

      return (
        <TechLogo
          className={clsx(color, "flex-shrink-0 flex-grow-0 w-8 h-8")}
          key={id}
        />
      );
    })}
  </div>
);

export default TechStack;
