import { ReactElement } from "react"
import Link from "next/link";
import { SOCIAL_ICONS } from "@/utils/consts";


const SocialIcons = (): ReactElement => (
  <div className="flex items-center gap-3">
    {SOCIAL_ICONS.map((socialIcon, index) => {
      const { id, icon: SocialIcon, url } = socialIcon;

      return (
        <Link
          className="p-2 border-gray border-2 bg-gray-dark-1 rounded-full hover:border-white hover:text-white"
          href={url}
          key={id}
          target="_blank"
        >
          <SocialIcon className="w-6 h-6 hover:fill-white" />
        </Link>
      )
    })}
  </div>
);

export default SocialIcons;
