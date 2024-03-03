"use client";
import { ReactElement } from "react";
import { AboutMe, Contact, Introduction, Projects } from "@/components";
import { NextSeo } from "next-seo";
import clsx from "clsx";

const Page = (): ReactElement => (
  <>
    <NextSeo
      title="Tomáš Najnar"
      description="Tomáš Najnar - frontend engineer specializing in the modern design and development of web and mobile applications."
    />
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
