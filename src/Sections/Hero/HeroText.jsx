import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const HeroText = () => {
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    gsap.from("#a1", {
      y: "100%",
      opacity: 0,
      duration: 1.5,
      delay: 1,
      stagger: 0.2,
      ease: "expoScale(0.5,7, none)",
    });
  });
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="overflow-hidden uppercase">
        <div
          id="a1"
          className="font-sans font-black lg:text-[10rem] sm:text-[6rem] text-[4rem] text-center lg:leading-36 sm:leading-20 leading-13"
        >
          Nebula
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          id="a1"
          className="font-sans font-black lg:text-[10rem] sm:text-[6rem] text-[4rem] text-center lg:leading-36 sm:leading-20 leading-13"
        >
          Nebula
        </div>
      </div>

      <div className="overflow-hidden">
        <div
          id="a1"
          className="font-sans font-black lg:text-[10rem] sm:text-[6rem] text-[4rem] text-center lg:leading-36 sm:leading-20 leading-13"
        >
          Nebula
        </div>
      </div>
    </div>
  );
};

export default HeroText;
