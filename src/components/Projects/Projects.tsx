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
      <h2 className="pb-8 bg-gradient-to-r from-yellow from-70% to-black text-gray-light-mode dark:text-transparent bg-clip-text text-center text-3xl">
        {projectTitle}
      </h2>

      <div className="flex flex-col desktop:flex-row" ref={ref}>
        {myProjects.map((projectItem, index) =>
          <motion.div
            animate={isInView ? "animate" : "initial"}
            className="flex gap-5 p-3"
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
        className="flex items-center gap-5 w-fit pt-8 text-gray-light-mode dark:text-yellow text-xl border-b border-transparent hover:border-gray-light-mode dark:hover:border-yellow"
        href={ERoutes.GIT_HUB}
        target="_blank"
      >
        {gitHub} <FaArrowRightLong />
      </Link>
    </section>
  );
};

export default Projects;
