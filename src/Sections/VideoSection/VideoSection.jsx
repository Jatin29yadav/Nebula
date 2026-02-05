import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VideoSection = () => {
  const containerRef = useRef(null);
  const videoRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%",
          pin: true,
          scrub: 1,
        },
      });

      tl.to(videoRef.current, {
        scale: 1,
        duration: 3,
        ease: "power2.inOut",
      });

      tl.to({}, { duration: 1 });
    },
    { scope: containerRef },
  );

  return (
    <div
      ref={containerRef}
      className="w-full my-10 h-screen relative overflow-hidden "
    >
      <div
        ref={videoRef}
        className="w-full h-full flex items-center justify-center scale-[0.5]"
      >
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          src="../../../Video/Vid2.mp4"
        ></video>
      </div>
    </div>
  );
};

export default VideoSection;
