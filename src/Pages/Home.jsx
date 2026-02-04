import AboutUs from "../Sections/AboutUs/AboutUs";
import VideoSection from "@/Sections/VideoSection/VideoSection";
import Hero from "../Sections/Hero/Hero";
import Gallery from "@/Sections/Gallery/Gallery";
import SpaceCraft from "@/Sections/SpaceCraft/SpaceCraft";
import Project from "@/Sections/Projects/Project";

const Home = () => {
  return (
    <div className="min-h-screen z-50 overflow-x-hidden">
      <div className="w-[90vw] mx-auto">
        <Hero />
      </div>
      <div className="w-screen ">
        {" "}
        <VideoSection />
      </div>
      <div className="w-[90vw] mx-auto">
        <AboutUs />
        <Project />
        <SpaceCraft />
      </div>
    </div>
  );
};

export default Home;
