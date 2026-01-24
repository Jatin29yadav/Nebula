import HeroContent from "./HeroContent";
import DockNav from "../NavigationBar/Dock/DockNav";

const Hero = () => {
  return (
    <div className="h-full w-full">
      <HeroContent />
      <div className="absolute bottom-4 left-0 right-0 z-50 flex justify-center">
        <DockNav />
      </div>
    </div>
  );
};

export default Hero;
