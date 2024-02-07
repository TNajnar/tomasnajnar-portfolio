"use client"
import { ReactElement } from "react";
import { AboutMe, Contact, Introduction, Projects, Technologies } from "@/components";
import clsx from "clsx";

const Page = (): ReactElement => (
  <>
    <div className={clsx("page-layout", "flex flex-col gap-28 py-24")}>
      <Introduction />
      <Technologies />
      <AboutMe />
      <Projects />
    </div>
    <Contact />
  </>
);

export default Page;
