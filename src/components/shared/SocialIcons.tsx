import { ReactElement } from "react";
import Link from "next/link";
import { SOCIAL_ICONS } from "@/utils/consts";
import clsx from "clsx";

interface IProps {
  className?: string;
  classNameSize?: string;
  defaultSize?: boolean;
  withBorder?: boolean;
}

const SocialIcons = ({ className, classNameSize, defaultSize, withBorder = false }: IProps): ReactElement => (
  <div className={clsx(
      "flex items-center text-gray-modeText dark:text-gray",
      withBorder ? "gap-3" : "gap-10",
      className,
    )}
  >
    {SOCIAL_ICONS.map((socialIcon) => {
      const { id, icon: SocialIcon, url } = socialIcon;

      return (
        <Link
          className={clsx(withBorder && "socialWrapper", "default-transition desktop:hover:scale-105")}
          href={url}
          key={id}
          target="_blank"
        >
          <SocialIcon className={clsx(classNameSize, defaultSize && "w-6 h-6", "socialIcon")} />
        </Link>
      );
    })}
  </div>
);

export default SocialIcons;
