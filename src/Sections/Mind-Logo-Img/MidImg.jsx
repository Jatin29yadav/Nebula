import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const MidImg = () => {
  const containerRef = useRef(null);
  const imgRef = useRef(null);

  useGSAP(
    () => {
      gsap.to(imgRef.current, {
        scale: 1.3,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=100%",
          pin: true,
          scrub: true,
          pinSpacing: true,
        },
      });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="w-[90vw] mx-auto h-screen flex justify-center items-center"
    >
      <div className="w-1/2 h-1/2 flex justify-center items-center">
        <img
          ref={imgRef}
          className="w-full h-full object-contain drop-shadow-[0_0_100px_rgba(255,204,0,0.4)]"
          src="../../../Images/Frame 4.png"
          alt="Mind Logo Image"
        />
      </div>
    </div>
  );
};

export default MidImg;
