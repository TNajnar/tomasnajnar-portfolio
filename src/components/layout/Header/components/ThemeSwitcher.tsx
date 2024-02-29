"use client";
import { ReactElement, useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import clsx from "clsx";

const ThemeSwitcher = (): ReactElement => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex items-center w-10">
      {mounted &&  
        <button
          onClick={(): void => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
          className={clsx("default-transition", "hover:scale-110")}
        >
          {resolvedTheme === 'dark' ? (
            <MdLightMode className="w-8 h-8 sm:w-9 sm:h-9 desktop:w-10 desktop:h-10" />
          ) : (
            <MdDarkMode className="w-8 h-8 sm:w-9 sm:h-9 desktop:w-10 desktop:h-10 fill-gray-modeText" />
          )}
        </button>
      }
    </div>
  );
};

export default ThemeSwitcher;
