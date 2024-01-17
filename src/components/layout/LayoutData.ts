import { ERoutes } from "@/utils/enums";
import { THeaderLinks, TSocialIcons } from "@/utils/types";

export const headerLinks: Array<THeaderLinks> = [
  { title: 'About Me', path: '#about' },
  { title: 'Projects', path: '#projects' },
  { title: 'Contact me', path: '#contact' }
];

export const socialIcons: Array<TSocialIcons> = [
  { icon: 'LinkedIn', url: ERoutes.LINKEDIN },
  { icon: 'Instagram', url: ERoutes.INSTAGRAM },
  { icon: 'GitHub', url: ERoutes.GIT_HUB },
]
