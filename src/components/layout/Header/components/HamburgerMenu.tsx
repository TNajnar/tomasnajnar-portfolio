import { ReactElement } from "react";
import clsx from "clsx";

const styles = {
  icon: "relative w-14 h-0.5 bg-black black:bg-white " +
    "before:absolute before:top-2 before:left-0 before:w-full before:h-full " +
    "before:bg-black dark:before:bg-white before:transition-all before:duration-300 before:ease-out " +
    "after:absolute after:-top-2 after:left-0 after:w-full after:h-full " +
    "after:bg-black dark:after:bg-white after:transition-all after:duration-300 after:ease-out",
  opened: "bg-[#FFFFFF00] before:top-0 before:-rotate-45 before:bg-white after:top-0 after:rotate-45",
};

interface IProps {
  open: boolean;
  toggleMenu: () => void;
};

const HamburgerMenu = ({ open, toggleMenu }: IProps): ReactElement => (
  <button
    className="flex desktop:hidden items-center justify-center w-5 h-6"
    onClick={toggleMenu}
    type="button"
  >
    <span className={clsx(styles.icon, open && styles.opened)} />
  </button>
);

export default HamburgerMenu;
