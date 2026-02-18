import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import ShinyText from "@/components/TextAnimation/ShinyText";
import {
  IoRocketOutline,
  IoGitCompareOutline,
  IoSearchOutline,
  IoColorWandOutline,
  IoGitBranchOutline,
  IoCodeSlashOutline,
  IoTerminalOutline,
  IoBulbOutline,
  IoCloudOutline,
} from "react-icons/io5";
import Button from "@/components/Buttons/Button";

const docsCards = [
  {
    title: "Getting Started",
    description:
      "Nebula is a language-independent tool for managing and migrating database schemas using modern DevOps principles.",
    icon: <IoRocketOutline />,
  },
  {
    title: "Nebula vs Others",
    description:
      "Nebula vs Classic Schema Migration Tools: Flyway, Liquibase, and ORMs. See how we compare in deep space.",
    icon: <IoGitCompareOutline />,
  },
  {
    title: "Schema Inspection",
    description:
      "Inspecting Existing Database Schemas and Export Database Schema to Code efficiently.",
    icon: <IoSearchOutline />,
  },
  {
    title: "Declarative Workflow",
    description:
      "With Nebula's declarative schema migrations, users don't need to manually craft SQL migration scripts.",
    icon: <IoColorWandOutline />,
  },
  {
    title: "Versioned Workflow",
    description:
      "This guide offers a high-level overview of the Nebula versioned migration workflow for collaborative teams.",
    icon: <IoGitBranchOutline />,
  },
  {
    title: "Schema as Code",
    description:
      "Treat your database architecture like standard application code with our HCL-based configurations.",
    icon: <IoCodeSlashOutline />,
  },
  {
    title: "Testing Framework",
    description:
      "The nebula schema test command lets you validate your database schema using familiar software testing paradigms.",
    icon: <IoTerminalOutline />,
  },
  {
    title: "Concepts",
    description:
      "Nebula uses a standard URL format to connect to databases and load schemas and migrations from various sources.",
    icon: <IoBulbOutline />,
  },
  {
    title: "Cloud",
    description:
      "Gain full visibility into the databases in your development and production environments directly from the cloud.",
    icon: <IoCloudOutline />,
  },
];

const DocsPage = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();

    // Hero animation
    tl.from(".hero-elem", {
      y: -40,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power3.out",
    });
  });

  return (
    <div
      ref={containerRef}
      className="relative bg-[#050505] text-white w-full min-h-screen z-10 pb-24 font-sans"
    >
      <div className="absolute top-0 left-0 w-full h-[500px] z-0 pointer-events-none">
        <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#050505]/80 to-[#050505] z-10" />
        <img
          className="object-cover h-full w-full opacity-60"
          src="../../Images/Bg1.jpg"
          alt="Space Background"
        />
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto flex flex-col items-center gap-6 pt-40 px-5 text-center">
        <h1 className="hero-elem text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight leading-tight">
          welcome to the <span className="text-cyan-200">nebula</span> <br />{" "}
          documentation
        </h1>

        <p className="hero-elem text-gray-400 leading-relaxed text-base md:text-lg w-full md:w-4/5 mt-2">
          Nebula is a language-independent tool for managing and migrating
          database schemas using modern DevOps principles. It offers two
          workflows:
        </p>

        <div className="hero-elem flex flex-col items-center gap-4 mt-6">
          <Button message={"Quick Start"} />
          <p className="text-gray-500 text-sm mt-2">
            Get started with Nebula in under 5 minutes.
          </p>
        </div>
      </div>

      <div className="relative z-10 w-full max-w-[1200px] mx-auto mt-24 px-5">
        <div className="docs-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {docsCards.map((card, index) => (
            <div
              key={index}
              className="doc-card bg-[#0f0f0f] border border-white/5 rounded-xl p-8 hover:border-white/20 hover:bg-[#141414] transition-all duration-300 cursor-pointer flex flex-col gap-4 group"
            >
              <div className="text-gray-400 text-2xl group-hover:text-cyan-200 transition-colors">
                {card.icon}
              </div>

              <h3 className="text-white font-semibold text-lg tracking-wide">
                <ShinyText
                  text={card.title}
                  speed={3}
                  delay={0}
                  color="#b5b5b5"
                  shineColor="#ffffff"
                  spread={120}
                  direction="left"
                  yoyo={true}
                  pauseOnHover={false}
                  disabled={false}
                />
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DocsPage;
