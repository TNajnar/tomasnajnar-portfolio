import { ReactElement, ReactNode } from "react";
import { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import DarkThemeProvider from "./DarkThemeProvider";
import { Footer, Header } from "@/components";
import '@/styles/index.css';

export const metadata: Metadata = {
  title: "Tomáš Najnar",
  description: "Tomáš Najnar - frontend engineer specializing in the modern design and development of web and mobile applications.",
  keywords: ["Tomáš Najnar", "frontend engineer", "web development", "mobile applications", "React", "Next.js", "Angular", "Angular developer", "TypeScript", "JavaScript", "HTML", "CSS", "web design", "UI/UX", "software development"],
  authors: [{ name: "Tomáš Najnar" }],
  creator: "Tomáš Najnar",
  publisher: "Tomáš Najnar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/tn-logo.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" }
    ],
    shortcut: "/favicon.ico",
    apple: "/tn-logo.svg",
  },
  openGraph: {
    title: "Tomáš Najnar",
    description: "Tomáš Najnar - frontend engineer specializing in the modern design and development of web and mobile applications.",
    siteName: "Tomáš Najnar",
    type: "website",
    url: "https://tomasnajnar.com",
    images: [{
      url: "/tn-logo.svg",
      width: 1200,
      height: 630,
      alt: "Tomáš Najnar Logo",
    }],
    locale: "en",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tomáš Najnar",
    description: "Tomáš Najnar - frontend engineer specializing in the modern design and development of web and mobile applications.",
    images: ["/tn-logo.svg"],
  },
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
      <SpeedInsights />
    </body>
  </html>
);

export default RootLayout;
