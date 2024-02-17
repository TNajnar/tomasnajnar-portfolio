import { ReactElement } from "react";
import { aboutTitle, education, aboutSchool, aboutHeading, aboutMyLife, middleDescription } from "./AboutData";

const AboutMe = (): ReactElement => (
  <section className="grid desktop:grid-cols-2 gap-6" id="about">
    <div className="flex justify-center justify-self-center w-fit max-h-aboutMeImg overflow-hidden text-center rounded-md shadow-lg">
    {/* TODO */}
      <img src="/mezk.jpg" alt="me" className=" object-contain w-full h-full" />
    </div>

    <div>
      <h2 className="pb-4 bg-gradient-to-r from-yellow to-gray-light-1 to-70% text-black dark:text-transparent bg-clip-text text-3xl">
        {aboutTitle}
      </h2>
      <div className="text-gray-light-mode dark:text-gray">
        <p>{aboutHeading}</p> <br/>
        <p>{middleDescription}</p> <br/>
        <p>{aboutMyLife}</p>
      </div>

      <ul className="pt-4 list-disc">
        <h4 className="mb-2 w-fit text-lg">
          {education}
        </h4>
        <li className="ml-4 text-gray-light-mode dark:text-gray">
          {aboutSchool}
        </li>
      </ul>
    </div>
  </section>
);

export default AboutMe;
