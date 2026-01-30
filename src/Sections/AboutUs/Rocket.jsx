import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import rocketImg from "../../../Images/Rocket.png";

gsap.registerPlugin(ScrollTrigger);

const Rocket = () => {
  const containerRef = useRef(null);
  const rocketRef = useRef(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      // --- DESKTOP ANIMATION (Large Screens) ---
      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top", // Starts exactly when container hits top of screen
            end: "bottom bottom", // Ends when container scroll is done
            scrub: 1, // Smoothness
            pin: rocketRef.current, // Lock rocket in place
          },
        });

        // FIX 3: Changed scale from 0.3 to 0.65 so it doesn't get too small
        tl.to(rocketRef.current.querySelector("img"), {
          scale: 0.65,
          ease: "power1.inOut",
        });
      });

      // --- MOBILE ANIMATION (Tablets & Phones) ---
      mm.add("(max-width: 1023px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            pin: rocketRef.current,
          },
        });

        tl.to(rocketRef.current.querySelector("img"), {
          scale: 0.6, // Slightly smaller on mobile to make room
          y: -150, // Move up to let text flow under it
          ease: "power1.inOut",
        });
      });
    },
    { scope: containerRef },
  );

  return (
    // Increased height to 350vh to give more time for the content to scroll comfortably
    <div ref={containerRef} className="relative w-full h-[350vh] text-white">
      {/* FIX 1: Removed 'overflow-hidden'. 
         Added 'z-10' to keep rocket behind text if they overlap, or 'z-0' if you prefer.
         kept 'flex items-center' to vertically center the rocket initially.
      */}
      <div
        ref={rocketRef}
        className="h-screen w-full flex items-center justify-center z-10"
      >
        <img
          src={rocketImg}
          alt="Rocket"
          // FIX 1 & 3: Added 'max-h-[90vh]' to ensure tip isn't cut off on short screens.
          // increased base width slightly for better visibility.
          className="lg:w-[500px] w-[280px] max-h-[90vh] object-contain drop-shadow-[0_0_50px_rgba(100,0,255,0.5)]"
        />
      </div>

      {/* FIX 2: Content Positioning 
         - 'pointer-events-none': Allows scrolling even when mouse is over empty areas.
         - 'lg:items-end': Pushes content to the right side on desktop.
         - 'lg:pr-20': Adds safety padding from right edge so it doesn't overflow.
      */}
      <div className="absolute inset-0 z-20 flex flex-col justify-center pointer-events-none lg:items-end items-center lg:pr-20 pr-0">
        {/* Text Container 
           - 'lg:max-w-md': Restricts width so it doesn't stretch too wide and hit the rocket.
           - 'lg:mt-[50vh]': Starts scrolling in slightly earlier.
        */}
        <div className="lg:max-w-md w-11/12 lg:mt-[50vh] mt-[60vh] space-y-64 pointer-events-auto pb-32">
          <div className="p-8 bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl">
            <h2 className="text-3xl lg:text-4xl font-bold bg-clip-text text-transparent ">
              Launch Phase
            </h2>
            <p className="mt-4 text-gray-300 text-base lg:text-lg leading-relaxed">
              We begin by igniting the engines. The raw power propels us away
              from the ordinary, breaking the gravitational pull of conventional
              design.
            </p>
          </div>

          <div className="p-8 bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl">
            <h2 className="text-3xl lg:text-4xl font-bold bg-clip-text text-transparent">
              Orbit Stabilization
            </h2>
            <p className="mt-4 text-gray-300 text-base lg:text-lg leading-relaxed">
              Once in orbit, clarity is achieved. We analyze the trajectory,
              ensuring every pixel aligns with the mission parameters.
            </p>
          </div>

          <div className="p-8 bg-black/40 backdrop-blur-lg border border-white/10 rounded-2xl shadow-2xl">
            <h2 className="text-3xl lg:text-4xl font-bold bg-clip-text text-transparent ">
              Deep Space
            </h2>
            <p className="mt-4 text-gray-300 text-base lg:text-lg leading-relaxed">
              Venturing into the unknown. This is where innovation happens—where
              no user interface has gone before.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rocket;
