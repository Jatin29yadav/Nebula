import ShortText from "../../Components/Hero/ShortText";
import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <div className="h-screen w-full text-white flex flex-col justify-center gap-10 items-center">
      <ShortText />
      <HeroContent />
    </div>
  );
};

export default Hero;
