import ShinyText from "./TextAnimation/ShinyText";
import CircularText from "./TextAnimation/CircularText";

const HeroContent = () => {
  return (
    <div className="header text-white flex flex-col items-center justify-center h-screen text-center px-4">
      <div className="relative flex items-center justify-center">
        {/* <CircularText
          text="EXPLORE THE UNKNOWN * BEYOND *"
          onHover="speedUp"
          spinDuration={25}
          className="custom-class"
        /> */}

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
            className="text-4xl font-bold"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroContent;
