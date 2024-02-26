"use client"
import { ReactElement } from "react";
import { AboutMe, Contact, Introduction, Projects } from "@/components";
import clsx from "clsx";

const Page = (): ReactElement => (
  <>
    <div className={clsx("page-layout", "flex flex-col gap-14 py-10 sm:gap-28 sm:py-24")}>
      <Introduction />
      {/* <Technologies /> */}
      <AboutMe />
      <Projects />
    </div>
    <Contact />
  </>
);

export default Page;
