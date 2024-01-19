"use client"
import { ReactElement } from "react";
import { useRouter } from 'next/navigation'
import Link from "next/link";
import { ERoutes } from "@/utils/enums";
import { gitHub, myProjects, projectTitle } from "./ProjectsData";
import { FaArrowRightLong } from "react-icons/fa6";
import clsx from "clsx";

const Projects = (): ReactElement => {
  const { push } = useRouter();

  return (
    <div>
      <h2 className="pb-8 bg-gradient-to-r from-yellow from-70% to-gray-light-1 text-transparent bg-clip-text text-center text-3xl">
        {projectTitle}
      </h2>

      <div className="flex gap-5 overflow-x-auto">
        {myProjects.map(({alt, description, id, icon: ViewIcon, path, style, url}, index) =>
          <div className="projectsWrapper" key={id}>
            <img alt={alt} className={clsx(style, "w-full h-full object-fill")} src={path} />
            <span className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 text-black text-xl font-bold">
              {description}
            </span>    
            {!!ViewIcon && !!url && <ViewIcon className="viewIcon" onClick={(): void => push(url)} />}
            <div className="mask" />
          </div>
        )}
      </div>

      <Link
        className="flex items-center gap-5 w-fit pt-8 text-yellow border-b border-transparent hover:border-yellow text-xl"
        href={ERoutes.GIT_HUB}
        target="_blank"
      >
        {gitHub} <FaArrowRightLong />
      </Link>
    </div>
  );
};

export default Projects;
