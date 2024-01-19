import { ReactElement, forwardRef } from "react";
import { aboutDescription, aboutTitle } from "./AboutData";

const AboutMe = forwardRef<HTMLDivElement>((_, ref): ReactElement => (
  <div className="grid desktop:grid-cols-2 gap-6" ref={ref}>
    <div className="border border-white h-96 text-center">
      Here will be my Image
    </div>
    <div>
      <h2 className="pb-4 bg-gradient-to-r from-yellow to-gray-light-1 to-70% text-transparent bg-clip-text text-3xl">
        {aboutTitle}
      </h2>
      <p>
        {aboutDescription}
      </p>
    </div>
  </div>
));

export default AboutMe;
