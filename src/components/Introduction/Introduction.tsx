"use client"
import { ReactElement } from "react"
import { TypeAnimation } from "react-type-animation"
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { description, greeting } from "./IntroData";
import { EScrollTo } from "@/utils/enums";
import { Link } from "react-scroll";
import { COORDINATES, SCROLL_DURATION, TECHNOLOGIES } from "@/utils/consts";
import clsx from "clsx";

const Introduction = (): ReactElement => (
  <section className="flex flex-col items-center gap-6 desktop:gap-20" id="intro">
      <div>
        <h1 className="introWrapper">
          <span className="greeting">
            {greeting} <br/>
          </span>
          <TypeAnimation
            className="typeAnimation"
            sequence={[
              'Tomas',
              1000,
              'Web developer',
              1000,
              'Mobile developer',
              1000,
            ]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
          />
        </h1>

        <p className="pb-10 w-9/12 text-base sm:text-xl text-gray-light-modeText dark:text-gray">
          {description}
        </p>

        {/* <div className="flex gap-8">
          {TECHNOLOGIES.map((tech) => {
            const {color, id, icon: TechLogo} = tech;
      
            return (
              <TechLogo
                className={clsx(color, "flex-shrink-0 flex-grow-0 w-24 h-24 desktop:w-20 desktop:h-20")}
                key={id}
              />
            );
          })}
        </div> */}
      </div>

    <Link duration={SCROLL_DURATION} offset={COORDINATES} smooth to={EScrollTo.ABOUT_ME}>
      <MdKeyboardDoubleArrowDown
        className="w-9 h-9 animate-bounce cursor-pointer"
        type="button"
      />
    </Link>
  </section>
);

export default Introduction;
