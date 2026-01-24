import ShinyText from "./TextAnimation/ShinyText";

const HeroContent = () => {
  return (
    <div className="header text-white flex flex-col h-screen">
      <div className="relative flex p-6">
        <div className="absolute pointer-events-none">
          <ShinyText
            text="NEBULA"
            speed={3}
            delay={0}
            color="#b5b5b5"
            shineColor="#ffffff"
            spread={120}
            direction="left"
            yoyo={false}
            pauseOnHover={false}
            disabled={false}
            className="text-4xl font-bold font4"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
