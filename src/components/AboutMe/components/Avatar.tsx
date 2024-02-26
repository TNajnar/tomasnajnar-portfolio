import { ReactElement } from "react"
import { aboutWork, name } from '../AboutData';

const Avatar = (): ReactElement => (
  <div className="desktop:hidden flex gap-4">
    <div className="w-28 h-28 md:w-40 md:h-40 rounded-full overflow-hidden">
      <img src="/mezk.jpg" alt="me" className=" w-full h-full" />
    </div>
    <div className="flex flex-col justify-stretch gap-2 pt-3">
      <span>{name}</span>
      <span className="font-bold">{aboutWork}</span>
    </div>
  </div>
);

export default Avatar;
