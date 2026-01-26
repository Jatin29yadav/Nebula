import AboutUs from "../Sections/AboutUs/AboutUs";
import Hero from "../Sections/Hero/Hero";

const Home = () => {
  return (
    <div className="min-h-screen w-[90vw] mx-auto z-10">
      <Hero />
      <AboutUs />
    </div>
  );
};

export default Home;
