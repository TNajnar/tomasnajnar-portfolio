import { ReactElement } from "react"
import Link from "next/link";
import { SOCIAL_ICONS } from "@/utils/consts";

const SocialIcons = (): ReactElement => (
  <div className="flex items-center gap-3 text-gray-light-mode dark:text-gray">
    {SOCIAL_ICONS.map((socialIcon) => {
      const { id, icon: SocialIcon, url } = socialIcon;

      return (
        <Link
          className="socialWrapper"
          href={url}
          key={id}
          target="_blank"
        >
          <SocialIcon className="w-6 h-6" />
        </Link>
      )
    })}
  </div>
);

export default SocialIcons;
