'use client'
import { ReactElement } from "react"
import { TypeAnimation } from "react-type-animation"
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import { description, greeting } from "./IntroData";

interface IProps {
  handleScroll: () => void;
}

const Introduction = ({ handleScroll }: IProps): ReactElement => (
  <div className="flex flex-col items-center gap-20">
    <div className="grid gap-5 desktop:grid-cols-[2fr_1fr] desktop:gap-0">
      <div>
        <h1 className="flex flex-col gap-2 desktop:gap-4 pb-10 w-full font-semibold text-center sm:text-start text-custom-title sm:text-5xl desktop:text-8xl">
          <span className="bg-gradient-to-r from-yellow to-gray-light-1 to-70% text-transparent bg-clip-text">
            {greeting} <br/>
          </span>
          <TypeAnimation
            className="typeAnimation"
            sequence={[
              'Web developer',
              1000,
              'Mobile developer',
              1000,
              'Tomas',
              1000,
            ]}
            wrapper="span"
            speed={40}
            repeat={Infinity}
          />
        </h1>
        <p className="text-base sm:text-xl">
          {description}
        </p>
      </div>
  
      {/* TODO my image */}
      <img
        alt="memoji"
        className="justify-self-center h-auto"
        src="/memoji.png"
        width={350}
        height={150}
      />
    </div>

    <MdKeyboardDoubleArrowDown
      className="hidden desktop:block w-9 h-9 animate-bounce cursor-pointer"
      onClick={handleScroll}
      type="button"
    />
  </div>
);

export default Introduction;
