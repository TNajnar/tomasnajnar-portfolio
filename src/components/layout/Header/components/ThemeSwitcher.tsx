"use client"
import { ReactElement, useEffect } from "react";
import { useTheme } from "next-themes";
import { useLocalStorage } from "react-use";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const ThemeSwitcher = (): ReactElement => {
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
      className="order-last w-8 h-8 sm:w-9 sm:h-9 desktop:w-10 desktop:h-10 fill-gray-light-mode dark:fill-gray"
      checked={isDarkTheme || false}
      moonColor="#ADB7BE"
      onChange={(checked: boolean): void => setDarkTheme(checked)}
      sunColor="#334155"
    />
  );
};

export default ThemeSwitcher;
