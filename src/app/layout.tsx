import { ReactElement, ReactNode } from "react";
import { Metadata } from "next";
import DarkThemeProvider from "./DarkThemeProvider";
import { Footer, Header } from "@/components";
import '@/styles/index.css';
import { NextSeo } from "next-seo";

export const metadata: Metadata = {
  title: "Tomáš Najnar",
  description: "Tomáš Najnar - frontend engineer specializing in the modern design and development of web and mobile applications.",
  icons: "/tn-logo.svg"
};

interface IProps {
  children: ReactNode;
}

const RootLayout = ({ children }: IProps): ReactElement => (
  <html lang="en" suppressHydrationWarning>
    <body>
      <NextSeo
        title="Tomáš Najnar"
        description="Tomáš Najnar - frontend engineer specializing in the modern design and development of web and mobile applications."
      />
      <DarkThemeProvider>
        <Header />
        <main className="mainComponent">
          {children}
        </main>
        <Footer />
      </DarkThemeProvider>
    </body>
  </html>
);

export default RootLayout;
