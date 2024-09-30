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
    url: ERoutes.REGIOJET_HOTELS,
  },
  {
    about: "I was part of a team responsible for the development of the new-studentagency.cz website.",
    alt: "new-studentagency.cz",
    id: 45,
    icon: GrView,
    path: "/studentagency.png",
    url: ERoutes.STUDENT_AGENCY,
    // style: "bg-gray-dark-1 blur-sm"
  },
  {
    about: "I created the terrazavyhlidka.cz project, where I was responsible for creating the website.",
    alt: "terraza-vyhlidka.cz",
    id: 45,
    icon: GrView,
    path: "/terr.png",
    url: ERoutes.TERRAZA_VYHLIDKA,
  },
  {
    about: "I developed an internal application in React Native with Expo for check-in of RegioJet buses and trains. The app is multi-platform (iOS, Android) and simplifies the passenger check-in process.",
    alt: "odbaveni.sa.cz",
    id: 45,
    icon: GrView,
    path: "/odbaveni.png",
    url: ERoutes.ODBAVENI,
  },
];

export const used: string = 'What I use';

export const gitHub: string = 'My GitHub';
