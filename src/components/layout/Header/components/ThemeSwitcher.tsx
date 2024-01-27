"use client"
import { ReactElement, useEffect } from "react";
import { useLocalStorage } from "react-use";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useTheme } from "next-themes";
import clsx from "clsx";

interface IProps {
  className?: string;
}

const ThemeSwitcher = ({ className }: IProps): ReactElement => {
  const [isDarkTheme, setDarkTheme] = useLocalStorage("isDarkTheme", true);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    if (isDarkTheme) {
      setTheme("dark");
    } else {
      setTheme("light");
    };

  }, [isDarkTheme, resolvedTheme])

  return (
    <DarkModeSwitch
      className={clsx("order-last", className)}
      checked={isDarkTheme || false}
      moonColor="#ADB7BE"
      onChange={(checked: boolean): void => setDarkTheme(checked)}
      size={40}
      sunColor="#334155"
    />
  );
};

export default ThemeSwitcher;
