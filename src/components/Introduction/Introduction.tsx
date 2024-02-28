"use client";
import { ReactElement } from "react";
import { TypeAnimation } from "react-type-animation";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { contact, description, greeting } from "./IntroData";
import { EScrollTo } from "@/utils/enums";
import { Link } from "react-scroll";
import { CONTACT_COORDINATES, COORDINATES, SCROLL_DURATION } from "@/utils/consts";
import { SocialIcons } from "../shared";

const Introduction = (): ReactElement => (
  <section className="flex flex-col items-start gap-10 desktop:gap-20" id="intro">
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

      <p className="pb-10 desktop:w-9/12 text-base sm:text-xl text-gray-light-modeText dark:text-gray">
        {description}
      </p>

      <SocialIcons className="pb-9" classNameSize="w-6 h-6 md:w-8 md:h-8 desktop:w-10 desktop:h-10 hover:scale-110" />
      <Link
        className="buttonContact"
        duration={SCROLL_DURATION}
        offset={CONTACT_COORDINATES}
        smooth
        to={EScrollTo.CONTACT}
        type="button"
      >
        {contact}
      </Link>
    </div>

    <Link className="self-center" duration={SCROLL_DURATION} offset={COORDINATES} smooth to={EScrollTo.ABOUT_ME}>
      <MdKeyboardDoubleArrowDown
        className="w-9 h-9 animate-bounce cursor-pointer"
        type="button"
      />
    </Link>
  </section>
);

export default Introduction;
