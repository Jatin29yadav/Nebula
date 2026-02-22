import AboutUs from "../Sections/AboutUs/AboutUs";
import VideoSection from "@/Sections/VideoSection/VideoSection";
import Hero from "../Sections/Hero/Hero";
import SpaceCraft from "@/Sections/SpaceCraft/SpaceCraft";
import Insight from "@/Sections/Insight/Insight";
import Engines from "@/Sections/Engines/Engines";
import Blog from "@/Sections/Blog/Blog";
import Footer from "@/Sections/Footer/Footer";
import ProjectCard from "@/Sections/Projects/ProjectCard";

const Home = () => {
  return (
    <div className="min-h-screen z-50 overflow-x-hidden">
      <div id="hero" className="w-[90vw] mx-auto">
        <Hero />
      </div>
      <div id="about" className="w-[90vw] mx-auto">
        <AboutUs />
      </div>
      <div className="w-screen">
        <VideoSection />
      </div>
      <div className="w-[90vw] mx-auto">
        <div id="log">
          <SpaceCraft />
        </div>
        <div id="imagination">
          <ProjectCard />
        </div>
        <div id="insights">
          <Insight />
        </div>
      </div>
      <div className="w-screen">
        <div id="prime">
          <Engines />
        </div>
        <Blog />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
