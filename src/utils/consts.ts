import { FaGithub, FaInstagram, FaLinkedinIn, FaReact } from "react-icons/fa";
import { TScrollOpt, TSocialIcon, TTechStack } from "./types";
import { ERoutes } from "./enums";
import { IoLogoJavascript } from "react-icons/io";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss, SiTypescript } from "react-icons/si";

{/* Constants below are for scrolling */ }
export const CONTACT_COORDINATES: number = 0;
export const COORDINATES: number = -140;
export const SCROLL_DURATION: number = 200;
export const SCROLL_OPTIONS: TScrollOpt = {
  duration: SCROLL_DURATION,
  smooth: true,
};

export const SOCIAL_ICONS: Array<TSocialIcon> = [
  { id: 55, icon: FaLinkedinIn, url: ERoutes.LINKEDIN },
  { id: 56, icon: FaInstagram, url: ERoutes.INSTAGRAM },
  { id: 57, icon: FaGithub, url: ERoutes.GIT_HUB },
];

export const TECHNOLOGIES: Array<TTechStack> = [
  { color: 'text-yellow', id: 77, icon: IoLogoJavascript },
  { color: 'text-next', id: 78, icon: TbBrandNextjs },
  { color: 'text-react', id: 79, icon: FaReact },
  { color: 'text-css', id: 80, icon: SiTailwindcss },
  { color: 'text-ts', id: 81, icon: SiTypescript },
];

