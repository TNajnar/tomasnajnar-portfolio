import { CONTACT_COORDINATES, COORDINATES } from "@/utils/consts";
import { EScrollTo } from "@/utils/enums";
import { THeaderLink } from "@/utils/types";

export const headerLinks: Array<THeaderLink> = [
  { coordinates: COORDINATES, id: 88, path: EScrollTo.ABOUT_ME, title: 'About Me' },
  { coordinates: COORDINATES, id: 89, path: EScrollTo.PROJECTS, title: 'Projects' },
  { coordinates: CONTACT_COORDINATES, id: 90, path: EScrollTo.CONTACT, title: 'Contact me' }
];
