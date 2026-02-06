import Button from "../../components/Buttons/Button";
import ShinyText from "../../components/TextAnimation/ShinyText";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Data from "@/components/AboutUs/Data";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  const aboutRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 70%",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".about-content > *", {
        y: 50,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "circ.out",
      });

      tl.from(
        ".data-item",
        {
          y: 50,
          opacity: 0,
          duration: 1,
          stagger: 0.3,
          ease: "circ.out",
        },
        "-=0.5",
      );
    },
    { scope: aboutRef },
  );

  return (
    <div
      ref={aboutRef}
      className="text-white h-screen flex flex-col justify-center 2xl:gap-12 sm:gap-10 gap-7"
    >
      <div className="about-content flex flex-col justify-start gap-10">
        <ShinyText
          text="ABOUT NEBULA (001)"
          speed={4}
          delay={0}
          color="#b5b5b5"
          shineColor="#ffffff"
          spread={120}
          direction="left"
          yoyo={false}
          pauseOnHover={false}
          disabled={false}
          className="lg:text-3xl sm:text-xl text-lg font4"
        />
        <div className="lg:text-[1.5rem] sm:text-[1.1rem] xl:w-3/4">
          A masterpiece of digital architecture, Nebula stands as a symbol of
          our relentless pursuit of innovation and design. Its fluid animations
          and deep-space aesthetics house the dreams of modern creators, all
          focused on a singular mission: to redefine the boundaries of the web.
        </div>
        <div className="flex md:justify-start justify-center">
          <Button message="Learn More" />
        </div>
      </div>

      <div className="flex md:flex-row flex-wrap flex-col justify-between text-center sm:gap-10 gap-5 ">
        <Data Num="400M" Label="Edition Size" />
        <Data Num="98M" Label="Unique Components" />
        <Data Num="36" Label="Launch Phases" />
      </div>
    </div>
  );
};

export default AboutUs;
