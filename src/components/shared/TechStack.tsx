import { ReactElement } from "react";
import { ANGULAR_TECH, TECHNOLOGIES } from "@/utils/consts";
import clsx from "clsx";

interface IProps {
  className?: string;
  isDifferentStack?: boolean;
}

const TechStack = ({ className, isDifferentStack }: IProps): ReactElement => {
  const techStack = isDifferentStack ? ANGULAR_TECH : TECHNOLOGIES;

  return (
    <div className={clsx("flex gap-3 py-2", className)}>
      {techStack.map((tech) => {
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
};

export default TechStack;
