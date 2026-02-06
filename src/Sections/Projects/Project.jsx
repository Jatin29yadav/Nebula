import ShinyText from "@/components/TextAnimation/ShinyText";
import TiltedCard from "@/components/Cards/TiltedCard";
import React from "react";

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
  {
    id: 6,
    title: "Terraform Alpha",
    subtitle: "Atmosphere: Critical",
    image:
      "https://i.pinimg.com/1200x/40/63/b8/4063b831c74f2b85a09c1d19ad1e3be0.jpg",
  },
];

const ProjectCard = ({ data }) => {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <TiltedCard
        imageSrc={data.image}
        altText={data.title}
        captionText={data.title}
        containerWidth="100%"
        imageWidth="100%"
        containerHeight="400px"
        imageHeight="400px"
        rotateAmplitude={12}
        scaleOnHover={1.05}
        showMobileWarning={false}
        showTooltip
        displayOverlayContent={true}
        overlayContent={
          <p className="tilted-card-demo-text font-bold text-white bg-black/50 px-2 py-1 m-5 rounded">
            {data.subtitle}
          </p>
        }
      />
    </div>
  );
};

const Project = () => {
  return (
    <div className="my-10 w-full min-h-screen z-20 relative">
      <ShinyText
        text="OUR PROJECTS (003)"
        speed={4}
        delay={0}
        color="#b5b5b5"
        shineColor="#ffffff"
        spread={120}
        direction="left"
        yoyo={false}
        pauseOnHover={false}
        disabled={false}
        className="lg:text-3xl sm:text-xl text-lg font4"
      />
      <div className="w-full p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projectData.map((item) => (
          <div key={item.id} className="w-full">
            <ProjectCard data={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
