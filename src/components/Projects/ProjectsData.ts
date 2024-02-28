import { ERoutes } from "@/utils/enums";
import { TProject } from "@/utils/types";
import { GrView } from "react-icons/gr";

export const projectTitle: string = 'Projects';

export const myProjects: Array<TProject> = [
  {
    about: "I have been working on project RegioJet Hotels. On my responsibility was",
    alt: "regiojethotels.cz",
    id: 44,
    icon: GrView,
    path: "/hotels.png",
    url: ERoutes.REGIOJET_HOTELS
  },
  {
    about: "I have been working on project RegioJet Hotels. On my responsibility was",
    alt: "new-studentagency.cz",
    description: "Comming soon...",
    id: 45,
    path: "/sa.png",
    style: "bg-gray-dark-1 blur-sm"
  },
];

export const used: string = 'What I use';

export const gitHub: string = 'My GitHub';
