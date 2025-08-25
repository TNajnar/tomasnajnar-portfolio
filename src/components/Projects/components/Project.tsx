import { ReactElement } from "react";
import Link from "next/link";
import { TProject } from "@/utils/types";
import { used } from "../ProjectsData";
import { TechStack } from "@/components/shared";
import clsx from "clsx";
import Image from "next/image";
import { ERoutes } from "@/utils/enums";
import OtherTechStack from "@/components/shared/OtherTechStack";

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
  id,
}: TProject): ReactElement => url ? (
  <Link className={clsx("default-transition", "projectsWrapper")} href={url} target="_blank">
    <div className="imgWrapper">
      <Image alt={alt} className="object-cover w-full h-full rounded-lg" src={path} fill />
      {!!ViewIcon && <ViewIcon className="viewIcon" />}
      <span className="description">{alt}</span>
      <div className="mask" />
    </div>

    <span className={clsx(styleAbout, "pt-1")}>
      {about}
    </span>

    <div className="mt-auto">
      <span className={styleUsed}>{used}</span>
      {url === ERoutes.ODBAVENI ? <OtherTechStack /> : <TechStack isDifferentStack={id === 48} />}
    </div>
  </Link>
) : (
  <div className={clsx("default-transition", "projectsWrapper")}>
    <div className="imgWrapper">
      <Image alt={alt} className={clsx(style, "object-cover w-full h-full rounded-lg")} src={path}fill  />
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
      <TechStack />
    </div>
  </div>
);

export default Project;
