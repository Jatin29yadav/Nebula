import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ShinyText from "@/components/TextAnimation/ShinyText";
import InsightCard from "./InsightCard";

gsap.registerPlugin(ScrollTrigger);

const insightsData = [
  {
    id: 1,
    title: "Are there any plans for future crewed missions to the Saturn?",
    image:
      "https://i.pinimg.com/1200x/a4/30/34/a43034156fc5a94875e24ca2e7c21a40.jpg",
  },
  {
    id: 2,
    title:
      "Ascending the skies: Pioneering explorations into Mercur's enigmatic atmosphere",
    image:
      "https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?q=80&w=2072&auto=format&fit=crop",
  },
  {
    id: 3,
    title:
      "Unraveling cosmic enigmas: Venturing beyond known frontiers to explore strange space",
    image:
      "https://i.pinimg.com/1200x/d8/1a/0e/d81a0e4a01cb58636c8a8a59a8a62452.jpg",
  },
];

const Insight = () => {
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

      tl.from(".insight-title", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "circ.out",
      });

      tl.from(
        ".insight-card",
        {
          y: 60,
          opacity: 0,
          duration: 1.5,
          stagger: 0.3,
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
      className="text-white w-full min-h-screen py-20 sm:px-5 md:px-0"
    >
      <div className="insight-title mb-10 container mx-auto px-4 md:px-10">
        <ShinyText
          text="OUR INSIGHTS (004)"
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

      <div className="w-full max-w-7xl mx-auto flex flex-col">
        {insightsData.map((item) => (
          <div key={item.id} className="insight-card">
            <InsightCard data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Insight;
