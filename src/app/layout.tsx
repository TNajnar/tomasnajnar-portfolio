import { ReactElement, ReactNode } from "react";
import { Metadata } from "next";
import DarkThemeProvider from "./DarkThemeProvider";
import { Footer, Header } from "@/components";
import '@/styles/index.css';

export const metadata: Metadata = {
  description: "Tomáš Najnar - frontend engineer specializing in the modern design and development of web and mobile applications.",
  icons: "/tn-logo.svg",
  openGraph: {
    description: "Tomáš Najnar - frontend engineer specializing in the modern design and development of web and mobile applications.",
    siteName: "Tomáš Najnar",
    title: "Tomáš Najnar",
    type: "website",
    url: "tomasnajnar.com",
    images: [{
      url: "tn-logo.svg",
    }],
    locale:"en",
  },
  title: "Tomáš Najnar",
  robots: "index, follow",
};

interface IProps {
  children: ReactNode;
}

const RootLayout = ({ children }: IProps): ReactElement => (
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
