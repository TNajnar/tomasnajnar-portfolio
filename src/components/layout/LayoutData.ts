import { CONTACT_COORDINATES, COORDINATES } from "@/utils/consts";
import { ERoutes } from "@/utils/enums";
import { THeaderLink } from "@/utils/types";

export const headerLinks: Array<THeaderLink> = [
  { coordinates: COORDINATES, id: 88, path: ERoutes.ABOUT_ME, title: 'About Me' },
  { coordinates: COORDINATES, id: 89, path: ERoutes.PROJECTS, title: 'Projects' },
  { coordinates: CONTACT_COORDINATES, id: 90, path: ERoutes.CONTACT, title: 'Contact me' }
];
