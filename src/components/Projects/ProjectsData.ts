import { ERoutes } from "@/utils/enums";
import { TProject } from "@/utils/types";
import { GrView } from "react-icons/gr";

export const projectTitle: string = 'Projects';

export const myProjects: Array<TProject> = [
  {
    about: "I worked on the regiojethotels.cz project, where I was responsible for creating the website and now I'm doing the maintenance.",
    alt: "regiojethotels.cz",
    id: 44,
    icon: GrView,
    path: "/hotels.png",
    url: ERoutes.REGIOJET_HOTELS
  },
  {
    about: "I am working on the new-studentagency.cz project, where I am responsible for creating the website.",
    alt: "new-studentagency.cz",
    description: "Comming soon...",
    id: 45,
    path: "/sa.png",
    style: "bg-gray-dark-1 blur-sm"
  },
];

export const used: string = 'What I use';

export const gitHub: string = 'My GitHub';
