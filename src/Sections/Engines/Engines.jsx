import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import PlanetScene from "@/components/PlannetModel/PlanetScene";
import ShinyText from "@/components/TextAnimation/ShinyText";
import Button from "@/components/Buttons/Button";

gsap.registerPlugin(ScrollTrigger);

const Engines = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".engine-title", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "circ.out",
      });

      tl.from(
        ".engine-model-container",
        {
          y: 60,
          scale: 0.95,
          opacity: 0,
          duration: 1.5,
          ease: "circ.out",
        },
        "-=0.4",
      );
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="relative my-10 w-full min-h-screen z-20 text-white flex flex-col justify-center md:px-[10vw]"
    >
      <div className="engine-title mb-5 w-full px-5">
        <ShinyText
          text="Explore Prime (005)"
          speed={4}
          delay={0}
          color="#b5b5b5"
          shineColor="#ffffff"
          spread={120}
          direction="left"
          yoyo={false}
          pauseOnHover={false}
          disabled={false}
          className="lg:text-3xl sm:text-xl text-lg font4 tracking-widest uppercase"
        />
      </div>

      <div className="engine-model-container relative md:w-[80vw] w-full h-[80vh] border-2 border-white/30 md:rounded-3xl overflow-hidden shadow-[0_0_40px_rgba(255,255,255,0.05)] bg-black">
        <PlanetScene />
      </div>
      <div className="mt-10 px-5">
        <Button message={"Explore More"} />
      </div>
    </div>
  );
};

export default Engines;
