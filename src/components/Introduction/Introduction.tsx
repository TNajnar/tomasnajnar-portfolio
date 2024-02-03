"use client"
import { ReactElement } from "react"
import { TypeAnimation } from "react-type-animation"
import { IntroAnimation } from './components';
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { description, greeting } from "./IntroData";
import { EScrollTo } from "@/utils/enums";
import { Link } from "react-scroll";
import { COORDINATES, SCROLL_DURATION } from "@/utils/consts";

const zk = `</>`

const Introduction = (): ReactElement => (
  <section className="flex flex-col items-center gap-6 desktop:gap-20" id="intro">
    <div className="grid gap-5 desktop:grid-cols-[2fr_1fr] desktop:gap-0">
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
        <p className="text-base sm:text-xl text-gray-light-mode dark:text-gray">
          {description}
        </p>
      </div>
        
        <div className="relative w-full h-full">
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
            <span className="flex items-center justify-between animate-bounce" style={{ fontSize: 130 }}>
              {zk}
            </span>
          </div>
          <IntroAnimation />
        </div>
    </div>

    <Link duration={SCROLL_DURATION} offset={COORDINATES} smooth to={EScrollTo.ABOUT_ME}>
      <MdKeyboardDoubleArrowDown
        className="block w-9 h-9 animate-bounce cursor-pointer"
        type="button"
      />
    </Link>
  </section>
);

export default Introduction;
