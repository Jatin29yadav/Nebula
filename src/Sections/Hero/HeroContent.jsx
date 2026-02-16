import ShortText from "../../Components/Hero/ShortText";
import { gsap } from "gsap";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import ShinyText from "@/components/TextAnimation/ShinyText";
import LogoLoop from "@/components/Loop/LogoLoop";

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

  const imageLogos = [
    { src: "../../../Images/logo1.png", alt: "Company 1" },
    { src: "../../../Images/logo2.png", alt: "Company 2" },
    { src: "../../../Images/logo3.png", alt: "Company 3" },
    { src: "../../../Images/logo4.png", alt: "Company 4" },
    { src: "../../../Images/logo1.png", alt: "Company 5" },
    { src: "../../../Images/logo2.png", alt: "Company 6" },
    { src: "../../../Images/logo3.png", alt: "Company 7" },
    { src: "../../../Images/logo4.png", alt: "Company 8" },
  ];

  return (
    <div
      ref={heroRef}
      className="flex flex-col gap-10 text-center items-center justify-center h-full relative pointer-events-none px-4"
    >
      <ShortText />

      <div className="font-semibold lg:text-[4.5rem] sm:text-[3.5rem] text-[2rem] font2 leading-tight">
        <div>
          <ShinyText
            text="Spiral Into The,"
            speed={2}
            delay={0}
            color="#b5b5b5"
            shineColor="#ffffff"
            spread={120}
            direction="left"
            yoyo={true}
            pauseOnHover={false}
            disabled={false}
          />
        </div>
        <div>
          <ShinyText
            text="Endless Unknown."
            speed={2}
            delay={0}
            color="#b5b5b5"
            shineColor="#ffffff"
            spread={120}
            direction="left"
            yoyo={true}
            pauseOnHover={false}
            disabled={false}
          />
        </div>
      </div>

      <div className="w-full max-w-[800px] h-32 relative overflow-hidden flex items-center justify-center mask-gradient ">
        <div className="absolute inset-0 z-10 pointer-events-none" />

        <LogoLoop
          logos={imageLogos}
          speed={100}
          direction="left"
          logoHeight={80}
          gap={60}
          hoverSpeed={50}
          scaleOnHover={true}
          fadeOut={false}
          ariaLabel="Technology partners"
        />
      </div>
      <div className="hidden sm:block sm:w-7/12 md:text-[1.5rem] text-base leading-relaxed text-gray-300">
        <p>
          Where gravity bends reality and light paints the darkness. Navigate a
          user experience built on the laws of physics and imagination.
        </p>
      </div>
    </div>
  );
};

export default HeroContent;
