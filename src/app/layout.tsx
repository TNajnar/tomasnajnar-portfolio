import { ReactNode } from "react";
import { Metadata } from "next";
import { Footer, Header } from "@/components";
import '@/styles/index.css'

export const metadata: Metadata = {
  title: 'Tomáš Najnar',
  description: 'My portfolio',
}

interface IProps {
  children: ReactNode;
}

const RootLayout = ({ children }: IProps) => {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="mainComponent" suppressHydrationWarning>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
