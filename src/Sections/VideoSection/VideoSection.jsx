import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const VideoSection = () => {
  const containerRef = useRef(null);
  const wrapperRef = useRef(null);
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

      tl.fromTo(
        wrapperRef.current,
        { scale: 0.5 },
        { scale: 1, duration: 3, ease: "none" },
      );
    },
    { scope: containerRef },
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(() => {});
        } else {
          videoRef.current?.pause();
        }
      },
      { threshold: 0 },
    );

    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-full h-screen relative overflow-hidden bg-black"
    >
      <div
        ref={wrapperRef}
        className="w-full h-full flex items-center justify-center will-change-transform"
      >
        <video
          ref={videoRef}
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
