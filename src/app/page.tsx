"use client"
import { ReactElement, useRef } from "react"
import { AboutMe, Contact, Introduction, Projects, Technologies } from "@/components";
import clsx from "clsx";

const Page = (): ReactElement => {
  const introRef = useRef<HTMLDivElement>(null);

  const handleScroll = (): void => {
    introRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  return (
    <>
      <div className={clsx("page-layout", "flex flex-col gap-28 py-24")}>
        <Introduction handleScroll={handleScroll} />
        <Technologies />
        <AboutMe ref={introRef} />
        <Projects />
      </div>
      <Contact />
    </>
  );
};

export default Page;
