"use client";
import { ReactElement, ReactNode } from "react";
import { ThemeProvider } from "next-themes";

interface IProps {
  children: ReactNode;
}

const DarkThemeProvider = ({ children }: IProps): ReactElement => (
  <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
    {children}
  </ThemeProvider>
);

export default DarkThemeProvider;
