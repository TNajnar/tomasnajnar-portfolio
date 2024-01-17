import Image from "next/image";
import { ReactElement } from "react";

const AboutMe = (): ReactElement => (
  <div className="grid desktop:grid-cols-2 gap-4 pb-20">
    <div className="border border-white h-96 text-center">
      Here will be my Image
      {/* <Image src="/me.jpeg" alt="Tomas Najnar" width={100} height={100} className="object-cover h-full" /> */}
    </div>
    <div>About me</div>
  </div>
);

export default AboutMe
