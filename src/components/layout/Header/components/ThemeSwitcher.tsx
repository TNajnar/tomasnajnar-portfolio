import { ReactElement } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useToggle } from "react-use";

interface IProps {
  className: string;
}

const ThemeSwitcher = ({ className }: IProps): ReactElement => {
  const [isDarkMode, setToggleDarkMode] = useToggle(false);

  return (
    <DarkModeSwitch
      className={className}
      checked={isDarkMode}
      onChange={setToggleDarkMode}
      size={40}
    />
  );
};
export default ThemeSwitcher
