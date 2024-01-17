'use client'
import { ReactElement } from "react"
import Image from "next/image"
import { TypeAnimation } from "react-type-animation"
import clsx from "clsx"

const Introduction = (): ReactElement => (
  <div className={clsx("page-layout", "grid gap-5 desktop:grid-cols-[2fr_1fr] desktop:gap-0 h-screen")}>
    <div>
      <h1 className="flex flex-col gap-2 desktop:gap-4 pb-10 w-full font-semibold text-center sm:text-start text-custom-title sm:text-5xl desktop:text-8xl">
        <span className="bg-gradient-to-r from-yellow to-gray-light-1 to-70% text-transparent bg-clip-text">
          Hello, I am <br/>
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
      <h2 className="text-gray text-base sm:text-xl">
        I shape the digital future as an expert Front-End Engineer. Through the use of modern coding standards and cutting-edge technologies, I actively develop efficient, resilient, and user-friendly front-end solutions. My commitment lies in providing seamless user interactions and establishing a solid digital foundation to support your business.
      </h2>
    </div>

    {/* TODO my image */}
    <Image
      alt="memoji"
      className="justify-self-center"
      src="/memoji.png"
      width={350}
      height={150}
    />
  </div>
);

export default Introduction
