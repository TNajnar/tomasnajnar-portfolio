import { ERoutes } from "@/utils/enums";
import { TProject } from "@/utils/types";
import { GrView } from "react-icons/gr";

export const projectTitle: string = 'Projects'

export const myProjects: Array<TProject> = [
  {
    alt: "regiojethotels.cz",
    id: 44,
    icon: GrView,
    path: "/hotels.png",
    url: ERoutes.REGIOJET_HOTELS
  },
  {
    alt: "studentagency.cz",
    description: "Comming soon...",
    id: 45,
    path: "/hotels.png",
    style: "bg-gray-dark-1 blur-sm"
  },
];

export const gitHub: string = 'My GitHub';
