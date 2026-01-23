import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <div className="h-full w-full">
      <canvas></canvas>
      <HeroContent />
      <div className="hero-image-cont"></div>
    </div>
  );
};

export default Hero;
