import React, { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ShinyText from "@/components/TextAnimation/ShinyText";

gsap.registerPlugin(ScrollTrigger);

const projectData = [
  {
    id: 1,
    title: "Void Walker",
    subtitle: "Status: Drifting in the Abyss",
    image:
      "https://i.pinimg.com/736x/90/27/b3/9027b393b86447db45d20f59a20fb141.jpg",
  },
  {
    id: 2,
    title: "Neon Zenith",
    subtitle: "Sector 07: Urban Dystopia",
    image:
      "https://i.pinimg.com/736x/02/e5/f8/02e5f89d4775f70157a4ac3853905e30.jpg",
  },
  {
    id: 3,
    title: "The Singularity",
    subtitle: "Event Horizon Detected",
    image:
      "https://i.pinimg.com/736x/21/6a/f0/216af06ac8506e1b92eae0e75bac610f.jpg",
  },
  {
    id: 4,
    title: "Neural Cortex",
    subtitle: "Artificial Sentience: 98%",
    image:
      "https://i.pinimg.com/736x/8f/7a/e1/8f7ae10fea98a143599f382229cd34a4.jpg",
  },
  {
    id: 5,
    title: "Vanguard MK-IV",
    subtitle: "Hyperdrive Systems Online",
    image:
      "https://i.pinimg.com/736x/54/a5/8d/54a58da8151222a4faa219972686c01f.jpg",
  },
];

const ProjectCard = () => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      tl.from(".project-title", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out",
      });

      tl.from(
        ".accordion-container",
        {
          y: 60,
          opacity: 0,
          duration: 1.2,
          ease: "circ.out",
        },
        "-=0.4",
      );
    },
    { scope: sectionRef },
  );

  return (
    <div
      ref={sectionRef}
      className="xl:my-44 md:my-30 my-15 min-h-[80vh] z-20 relative px-5 md:px-0 flex flex-col"
    >
      <div className="project-title mb-10 w-[90vw] mx-auto">
        <ShinyText
          text="ACTIVE DIRECTIVES (003)"
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

      <div className="accordion-container w-[90vw] mx-auto h-[80vh] md:h-125 flex flex-col md:flex-row gap-2 md:gap-4">
        {projectData.map((item, index) => {
          const isActive = activeIndex === index;

          return (
            <div
              key={item.id}
              onClick={() => setActiveIndex(index)}
              onMouseEnter={() => setActiveIndex(index)}
              className={`relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] flex items-end
${isActive ? "flex-4 md:flex-5" : "flex-1"}
`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000"
                style={{
                  transform: isActive ? "scale(1.05)" : "scale(1)",
                  opacity: isActive ? 1 : 0.6,
                }}
              />

              <div
                className={`absolute inset-0 bg-linear-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-700 ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
              />

              <div
                className={`relative z-10 p-6 md:p-8 flex flex-col justify-end h-full w-full transition-all duration-700 delay-100 whitespace-nowrap
${isActive ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
`}
              >
                <h3 className="text-2xl md:text-4xl font-bold text-white mb-2 tracking-wide">
                  {item.title}
                </h3>
                <p className="text-cyan-400 font-mono text-sm tracking-widest uppercase">
                  {item.subtitle}
                </p>
              </div>

              <div
                className={`absolute inset-0 z-10 hidden md:flex items-center justify-center transition-opacity duration-500
${isActive ? "opacity-0 pointer-events-none" : "opacity-100"}
`}
              >
                <span className="text-white/70 font-bold tracking-widest uppercase whitespace-nowrap transform -rotate-90 text-xl">
                  {item.title}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectCard;
