import { ReactElement } from "react";
import LoaderSvg from './loader.svg';
import clsx from "clsx";

interface IProps {
  className?: string;
}

const Loader = ({ className }: IProps): ReactElement => (
  <div className={clsx("defaultSize", className)}>
    <LoaderSvg className="svg" />
  </div>
);

export default Loader;
