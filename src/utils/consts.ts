import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { TSocialIcons } from "./types";
import { ERoutes } from "./enums";

export const SOCIAL_ICONS: Array<TSocialIcons> = [
  { id: 55, icon: FaLinkedinIn, url: ERoutes.LINKEDIN },
  { id: 56, icon: FaInstagram, url: ERoutes.INSTAGRAM },
  { id: 57, icon: FaGithub, url: ERoutes.GIT_HUB },
];
