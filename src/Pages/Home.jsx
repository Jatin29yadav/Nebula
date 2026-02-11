import AboutUs from "../Sections/AboutUs/AboutUs";
import VideoSection from "@/Sections/VideoSection/VideoSection";
import Hero from "../Sections/Hero/Hero";
import SpaceCraft from "@/Sections/SpaceCraft/SpaceCraft";
import Project from "@/Sections/Projects/Project";
import MidImg from "@/Sections/Mind-Logo-Img/MidImg";
import Insight from "@/Sections/Insight/Insight";

const Home = () => {
  return (
    <div className="min-h-screen z-50 overflow-x-hidden">
      <div className="w-[90vw] mx-auto">
        <Hero />
      </div>
      <div className="w-[90vw] mx-auto">
        <AboutUs />
      </div>
      <div className="w-screen ">
        {" "}
        <VideoSection />
      </div>
      <div className="w-[90vw] mx-auto">
        <SpaceCraft />
        {/* <MidImg /> */}
        <Project />
        <Insight />
      </div>
    </div>
  );
};

export default Home;
