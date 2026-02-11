import React, { useRef } from "react";
import LogData from "./LogData";
import ShinyText from "@/components/TextAnimation/ShinyText";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const flightLogData = [
  {
    id: 1,
    sector: "SECTOR 01 // THE LAUNCH",
    status: "Thrusters Online",
    statusColor: "text-blue-300",
    colorHex: "#93c5fd",
    log: "Atmospheric breach successful. We have left the safety of terra firma and entered the vacuum. Gravity stabilizers are holding at 98%. The horizon is now behind us.",
  },
  {
    id: 2,
    sector: "SECTOR 02 // ASTEROID BELT",
    status: "Navigation Active",
    statusColor: "text-orange-300",
    colorHex: "#fdba74",
    log: "Navigating dense debris fields. Shields are holding against micro-impacts. We are weaving through the chaos, charting a path where no vessel has flown before.",
  },
  {
    id: 3,
    sector: "SECTOR 03 // HYPERSPACE JUMP",
    status: "Light Speed",
    statusColor: "text-purple-300",
    colorHex: "#d8b4fe",
    log: "Coordinates locked. The warp drive is spinning up to maximum RPM. Visuals are blurring into streaks of starlight. We are bending space to bridge the gap between worlds.",
  },
  {
    id: 4,
    sector: "SECTOR 04 // DEEP SPACE",
    status: "Drifting",
    statusColor: "text-green-400",
    colorHex: "#4ade80",
    log: "We have reached the edge of the known chart. Sensors detect no life, only the hum of the engine and the endless beauty of the void. The real exploration begins now.",
  },
];

const SpaceCraft = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 70%",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".header-section > *", {
        y: 50,
        opacity: 0,
        duration: 1.5,
        stagger: 0.2,
        ease: "circ.out",
      });

      tl.from(
        ".log-item",
        {
          y: 100,
          opacity: 0,
          duration: 2,
          stagger: 0.5,
          ease: "circ.out",
        },
        "-=0.5",
      );
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="xl:my-44 md:my-30 my-15 text-white w-full min-h-screen flex flex-col justify-start py-20 gap-20"
    >
      {/* Added 'header-section' class for GSAP targeting */}
      <div className="header-section flex flex-col gap-10 px-5 md:px-0">
        <ShinyText
          text="TRAJECTORY LOG (002)"
          speed={4}
          delay={0}
          color="#b5b5b5"
          shineColor="#ffffff"
          spread={120}
          direction="left"
          yoyo={false}
          pauseOnHover={false}
          disabled={false}
          className="lg:text-3xl sm:text-xl text-lg font4 tracking-widest"
        />
        <p className="lg:text-[1.5rem] sm:text-[1.1rem] leading-relaxed xl:w-3/4 ">
          System checks complete. The Nebula-Class cruiser has left the orbital
          dock and is currently traversing the outer rim. Below is the automated
          navigation log detailing our journey through the treacherous sectors
          of deep space.
        </p>
      </div>

      <div className="flex flex-col lg:gap-16 gap-10 items-center relative w-full px-5 md:px-0">
        {flightLogData.map((item) => (
          <div key={item.id} className="log-item w-full flex justify-center">
            <LogData data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SpaceCraft;
