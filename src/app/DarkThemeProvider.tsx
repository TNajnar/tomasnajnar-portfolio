"use client"
import { ReactNode } from "react";
import { ThemeProvider } from "next-themes";

interface IProps {
  children: ReactNode;
};

const DarkThemeProvider = ({ children }: IProps) => (
  <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
    {children}
  </ThemeProvider>
);

export default DarkThemeProvider;
