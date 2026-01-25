import ShinyText from "../TextAnimation/ShinyText";

const Logo = () => {
  return (
    <div>
      <ShinyText
        text="NEBULA"
        speed={4}
        delay={0}
        color="#b5b5b5"
        shineColor="#ffffff"
        spread={120}
        direction="left"
        yoyo={false}
        pauseOnHover={false}
        disabled={false}
        className="lg:text-4xl sm:text-2xl text-xl font4"
      />
    </div>
  );
};

export default Logo;
