import { ReactElement } from "react";
import clsx from "clsx";

interface IProps {
  children: ReactElement | Array<ReactElement>;
  className?: string;
  isOpen?: boolean;
};

const VerticalExpandabler = ({ children, className, isOpen = false }: IProps): ReactElement => (
  <div className={clsx('default-transition',
    "grid grid-rows-[0fr] transition-[grid-template-rows]",
    isOpen && "grid-rows-[1fr]"
  )}>
    <div className={clsx("overflow-hidden", className)}>
      {children}
    </div>
  </div>
);

export default VerticalExpandabler;
