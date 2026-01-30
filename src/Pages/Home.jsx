import AboutUs from "../Sections/AboutUs/AboutUs";
import Rocket from "../Sections/AboutUs/Rocket";
import Hero from "../Sections/Hero/Hero";

const Home = () => {
  return (
    <div className="min-h-screen w-[90vw] mx-auto z-10">
      <Hero />
      <AboutUs />
      {/* <Rocket /> */}
    </div>
  );
};

export default Home;
