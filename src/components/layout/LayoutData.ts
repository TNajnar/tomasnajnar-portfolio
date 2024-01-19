import { ERoutes } from "@/utils/enums";
import { THeaderLinks, } from "@/utils/types";

export const headerLinks: Array<THeaderLinks> = [
  { id: 88, path: ERoutes.ABOUT_ME, title: 'About Me' },
  { id: 89, path: ERoutes.PROJECTS, title: 'Projects' },
  { id: 90, path: ERoutes.CONTACT, title: 'Contact me' }
];
