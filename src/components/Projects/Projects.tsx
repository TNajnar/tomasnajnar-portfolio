"use client"
import { ReactElement } from "react";
import Link from "next/link";
import { Project } from "./components";
import { ERoutes } from "@/utils/enums";
import { gitHub, myProjects, projectTitle } from "./ProjectsData";
import { FaArrowRightLong } from "react-icons/fa6";

const Projects = (): ReactElement => (
  <section id="projects">
    <h2 className="pb-8 bg-gradient-to-r from-yellow from-70% to-black text-gray-light-mode dark:text-transparent bg-clip-text text-center text-3xl">
      {projectTitle}
    </h2>

    <div className="flex gap-5 p-3 overflow-x-auto">
      {myProjects.map((projectItem) =>
        <Project key={projectItem.id} {...projectItem} />,
      )}
    </div>

    <Link
      className="flex items-center gap-5 w-fit pt-8 text-gray-light-mode dark:text-yellow text-xl border-b border-transparent hover:border-gray-light-mode dark:hover:border-yellow"
      href={ERoutes.GIT_HUB}
      target="_blank"
    >
      {gitHub} <FaArrowRightLong />
    </Link>
  </section>
);

export default Projects;
