import { ReactElement } from "react"
import { AboutMe, Introduction } from "@/components";

const Page = (): ReactElement => (
  <div className="flex flex-col pt-24">
    <Introduction />
    <AboutMe />
  </div>
);

export default Page;
