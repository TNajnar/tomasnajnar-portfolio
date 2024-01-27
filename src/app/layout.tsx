import { ReactNode } from "react";
import { Metadata } from "next";
import { Footer, Header } from "@/components";
import '@/styles/index.css'
import DarkThemeProvider from "./DarkThemeProvider";

export const metadata: Metadata = {
  title: 'Tomáš Najnar',
  description: 'My portfolio',
}

interface IProps {
  children: ReactNode;
}

const RootLayout = ({ children }: IProps) => (
  <html lang="en" suppressHydrationWarning>
    <body>
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
