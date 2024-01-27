import { ReactElement } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { TMyProject } from "@/utils/types";
import clsx from "clsx";

const Project = ({
  alt,
  description,
  icon: ViewIcon,
  path,
  style,
  url,
}: TMyProject): ReactElement => {
  const { push } = useRouter();
  
  return url ? (
    <Link className="projectsWrapper" href={url} target="_blank">
      <img alt={alt} className={clsx(style, "w-full h-full object-fill")} src={path} />
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-black text-xl font-bold">
        {description}
      </span>    
      {!!ViewIcon && <ViewIcon className="viewIcon" />}
      <span className="description">{alt}</span>
      <div className="mask" />
    </Link>
  ) : (
    <div className="projectsWrapper">
      <img alt={alt} className={clsx(style, "w-full h-full object-fill")} src={path} />
      <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-black text-xl font-bold">
        {description}
      </span>
      <span className="description">{alt}</span>
      <div className="mask" />
    </div>
  );
};

export default Project;
