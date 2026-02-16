import React, { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ShinyText from "@/components/TextAnimation/ShinyText";
import BlogCard from "../../components/Cards/BlogCard"; // Adjust import path if necessary

gsap.registerPlugin(ScrollTrigger);

// Dummy Data for the Blogs
const blogData = [
  {
    id: 1,
    tag: "Engineering",
    title: "Designing the Spacer's Core Drive",
    description:
      "A deep dive into the magnetic confinement systems that power our latest interstellar propulsion engines, pushing the boundaries of known physics.",
    image:
      "https://i.pinimg.com/1200x/f4/b1/46/f4b1462e52bcbb1fbeb332d7e3e03b39.jpg", // Space/Earth view
  },
  {
    id: 2,
    tag: "Exploration",
    title: "The Anatomy of a Black Hole",
    description:
      "What happens when you cross the event horizon? Our probes have transmitted groundbreaking telemetry from Sector 4's newest anomaly.",
    image:
      "https://i.pinimg.com/736x/4a/01/86/4a0186c6167f0d6f6964f807922c1d59.jpg", // Nebula/Stars
  },
  {
    id: 3,
    tag: "Crew Logs",
    title: "Psychology of Deep Space Isolation",
    description:
      "Understanding the mental fortitude required for multi-year drifts. How our crews maintain peak performance when Earth is just a pale blue dot.",
    image:
      "https://i.pinimg.com/1200x/fd/c6/ae/fdc6aebaeb70e807bc6dfa018a3bb9e0.jpg", // Space station interior
  },
];

const Blog = () => {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse",
        },
      });

      // 1. Animate Title
      tl.from(".blog-title", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: "circ.out",
      });

      // 2. Animate Cards (Staggered fade-up)
      tl.from(
        ".blog-card",
        {
          y: 80,
          opacity: 0,
          duration: 1.5,
          stagger: 0.3,
          ease: "circ.out",
        },
        "-=0.4",
      );
    },
    { scope: sectionRef },
  );

  return (
    // Changed to min-h-screen to prevent layout breaking on shorter screens
    <div
      ref={sectionRef}
      className="min-h-screen w-full py-20 flex flex-col justify-center relative bg-black"
    >
      {/* Title Section */}
      <div className="blog-title w-[90vw] mx-auto mb-10 md:mb-16">
        <ShinyText
          text="OUR BLOGS (006)"
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

      {/* Grid Layout Section */}
      {/* Using CSS Grid: 1 column on mobile, 3 columns on large screens */}
      <div className="w-[90vw] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
        {blogData.map((item) => (
          <div key={item.id} className="blog-card">
            <BlogCard data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
