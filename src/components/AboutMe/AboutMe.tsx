import { ReactElement } from "react";
import { aboutTitle, education, aboutSchool, aboutHeading, aboutMyLife, middleDescription } from "./AboutData";
import { Avatar } from "./components";

const AboutMe = (): ReactElement => (
  <section className="grid desktop:grid-cols-2 gap-6" id="about">
    {/* TODO */}
    <div className="hidden desktop:flex justify-center justify-self-center w-fit max-h-aboutMeImg overflow-hidden text-center rounded-md shadow-lg">
      <img src="/mezk.jpg" alt="me" className=" object-contain w-full h-full" />
    </div>

    <div>
      <h2 className="pb-4 text-black dark:text-yellow text-3xl">
        {aboutTitle}
      </h2>

      <Avatar />

      <div className="pt-5 text-gray-light-modeText2 dark:text-gray">
        <p>{aboutHeading}</p> <br/>
        <p>{middleDescription}</p> <br/>
        <p>{aboutMyLife}</p>
      </div>

      <ul className="pt-4 list-disc">
        <h4 className="mb-2 w-fit text-lg font-semibold">
          {education}
        </h4>
        <li className="ml-4 text-gray-light-modeText2 dark:text-gray">
          {aboutSchool}
        </li>
      </ul>
    </div>
  </section>
);

export default AboutMe;
