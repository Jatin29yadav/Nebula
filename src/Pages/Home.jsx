import AboutUs from "../Sections/AboutUs/AboutUs";
import VideoSection from "@/Sections/VideoSection/VideoSection";
import Hero from "../Sections/Hero/Hero";
import Gallery from "@/Sections/Gallery/Gallery";
import SpaceCraft from "@/Sections/SpaceCraft/SpaceCraft";

const Home = () => {
  return (
    <div className="min-h-screen w-[90vw] mx-auto z-50">
      <Hero />
      <AboutUs />
      <VideoSection />
      <SpaceCraft />
      <Gallery />
    </div>
  );
};

export default Home;
