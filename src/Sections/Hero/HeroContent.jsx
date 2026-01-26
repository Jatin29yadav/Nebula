import Button from "../../Components/Buttons/Button";
import ShortText from "../../Components/Hero/ShortText";
import { gsap } from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";

const HeroContent = () => {
  const heroRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      tl.from(heroRef.current.children, {
        scale: 1.3,
        y: 50,
        opacity: 0,
        duration: 1.5,
        stagger: 0.3,
        ease: "circ.out",
      });
    },
    { scope: heroRef },
  );

  return (
    <div
      ref={heroRef}
      className="flex flex-col gap-10 text-center items-center justify-center h-full relative pointer-events-none"
    >
      <ShortText />

      <div className="font-medium lg:text-[4.5rem] sm:text-[3.5rem] text-[2rem] font2 leading-tight">
        <div>Spiral Into The,</div>
        <div>Endless Unknown.</div>
      </div>

      <div className="sm:w-7/12 w-10/12 md:text-[1.5rem] text-gray-300">
        Where gravity bends reality and light paints the darkness. Navigate a
        user experience built on the laws of physics and imagination.
      </div>

      <div className="pointer-events-auto">
        <Button message="Enter the Rift" />
      </div>
    </div>
  );
};

export default HeroContent;
