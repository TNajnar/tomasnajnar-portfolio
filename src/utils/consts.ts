import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { TScrollOpt, TSocialIcon } from "./types";
import { ERoutes } from "./enums";

{/* Constants below are for scrolling */}
export const CONTACT_COORDINATES: number = 30;
export const COORDINATES: number = -210;
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
