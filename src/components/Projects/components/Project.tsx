import { ReactElement } from "react";
import Link from "next/link";
import { TProject } from "@/utils/types";
import { used } from "../ProjectsData";
import { TechStack } from "@/components/shared";
import clsx from "clsx";

const styleAbout = "text-gray-light-modeText2 dark:text-gray";
const styleUsed = "font-semibold text-black dark:text-yellow";

const Project = ({
  about,
  alt,
  description,
  icon: ViewIcon,
  path,
  style,
  url,
}: TProject): ReactElement => url ? (
  <Link className={clsx("default-transition", "projectsWrapper")} href={url} target="_blank">
    <div className="imgWrapper">
      <img alt={alt} className="rounded-lg" src={path} />
      {!!ViewIcon && <ViewIcon className="viewIcon" />}
      <span className="description">{alt}</span>
      <div className="mask" />
    </div>

    <span className={clsx(styleAbout, "pt-1")}>
      {about}
    </span>

    <div>
      <span className={styleUsed}>{used}</span>
      <TechStack className="flex gap-3 py-2" />
    </div>
  </Link>
) : (
  <div className={clsx("default-transition", "projectsWrapper")}>
    <div className="imgWrapper">
      <img alt={alt} className={clsx(style, "rounded-lg")} src={path} />
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-black text-xl text-center font-bold">
        {description}
      </span>
      <span className="description">{alt}</span>
      <div className="mask" />
    </div>

    <span className={styleAbout}>
      {about}
    </span>

    <div className="mt-auto">
      <span className={styleUsed}>{used}</span>
      <TechStack className="flex gap-3 py-2" />
    </div>
  </div>
);

export default Project;
