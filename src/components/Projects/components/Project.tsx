import { ReactElement } from "react";
import Link from "next/link";
import { TProject } from "@/utils/types";
import clsx from "clsx";

const Project = ({
  alt,
  description,
  icon: ViewIcon,
  path,
  style,
  url,
}: TProject): ReactElement => url ? (
  <Link className="projectsWrapper" href={url} target="_blank">
    <img alt={alt} className={clsx(style, "w-full h-full object-fill")} src={path} />
    <span className="projectDescription">
      {description}
    </span>    
    {!!ViewIcon && <ViewIcon className="viewIcon" />}
    <span className="description">{alt}</span>
    <div className="mask" />
  </Link>
) : (
  <div className="projectsWrapper">
    <img alt={alt} className={clsx(style, "w-full h-full object-fill")} src={path} />
    <span className="projectDescription">
      {description}
    </span>
    <span className="description">{alt}</span>
    <div className="mask" />
  </div>
);

export default Project;
