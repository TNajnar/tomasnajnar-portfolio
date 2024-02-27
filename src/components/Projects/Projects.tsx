"use client"
import { ReactElement, useRef } from "react";
import Link from "next/link";
import { Project } from "./components";
import { TCardVariant } from "@/utils/types";
import { ERoutes } from "@/utils/enums";
import { gitHub, myProjects, projectTitle } from "./ProjectsData";
import { FaArrowRightLong } from "react-icons/fa6";
import { motion, useInView } from "framer-motion";

const cardVariants: Record<string, TCardVariant> = {
  initial: { y: 50, opacity: 0 },
  animate: { y: 0, opacity: 1 },
};

const Projects = (): ReactElement => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <section id="projects">
      <h2 className="pb-8 text-black dark:text-yellow text-3xl">
        {projectTitle}
      </h2>

      <div className="grid desktop:grid-cols-3 gap-4" ref={ref}>
        {myProjects.map((projectItem, index) =>
          <motion.div
            animate={isInView ? "animate" : "initial"}
            key={index}
            initial="initial"
            variants={cardVariants}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <Project key={projectItem.id} {...projectItem} />
          </motion.div>
        )}
      </div>

      <Link
        className="flex items-center gap-5 w-fit pt-8 text-gray-modeText dark:text-yellow text-xl border-b border-transparent hover:border-black dark:hover:border-yellow"
        href={ERoutes.GIT_HUB}
        target="_blank"
      >
        {gitHub} <FaArrowRightLong />
      </Link>
    </section>
  );
};

export default Projects;
