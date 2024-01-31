import { ReactElement } from "react";
import { aboutDescription, aboutTitle } from "./AboutData";

const AboutMe = (): ReactElement => (
  <section className="grid desktop:grid-cols-2 gap-6" id="about">
    <div className="flex justify-center w-full h-96 overflow-hidden text-center rounded-md shadow-lg">
      <img src="/beach.jpg" className="object-cover w-full h-full" />
    </div>

    <div>
      <h2 className="pb-4 bg-gradient-to-r from-yellow to-gray-light-1 to-70% text-black dark:text-transparent bg-clip-text text-3xl">
        {aboutTitle}
      </h2>
      <p className="text-gray-light-mode dark:text-gray">
        {aboutDescription}
      </p>

      <ul className="pt-4 list-disc">
        <h4 className="mb-2 w-fit text-lg border-b">Education</h4>
        <li className="ml-4">
          Bachelor's degree from Mendel University in Brno with a specialization in Information Technology
        </li>
      </ul>
    </div>
  </section>
);

export default AboutMe;
