import ShinyText from "@/components/TextAnimation/ShinyText";
import LightRays from "@/components/Background/LightRays";

const Footer = () => {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else {
      console.warn(`Could not find section with ID: ${targetId}`);
    }
  };

  return (
    <footer className="relative w-full bg-black text-white py-24 overflow-hidden border-t border-white/10">
      <div className="absolute bottom-0 left-0 w-full h-[600px] pointer-events-none z-0">
        <div className="absolute inset-0 z-10" />
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1}
          lightSpread={1}
          rayLength={3}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          className="custom-rays"
          pulsating={false}
          fadeDistance={1}
          saturation={2}
        />
      </div>

      <div className="relative z-10 w-[90vw] max-w-7xl mx-auto flex flex-col gap-16">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-8">
          <div className="w-full lg:w-5/12 flex flex-col gap-8">
            <div className="flex items-center gap-2">
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

            <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-md">
              As we continue to reach for the stars, we're committed to
              promoting space exploration, education, and a deeper understanding
              of our place in the universe.
            </p>
          </div>

          <div className="w-full lg:w-6/12 flex flex-col gap-8">
            <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm text-gray-400">
              {["About", "Prime", "Imagination", "Log", "Insights"].map(
                (link) => {
                  const targetId = link.toLowerCase();
                  return (
                    <a
                      key={link}
                      href={`#${targetId}`}
                      onClick={(e) => handleScroll(e, targetId)}
                      className="hover:text-cyan-400 transition-colors font7 cursor-pointer"
                    >
                      {link}
                    </a>
                  );
                },
              )}
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-10 pt-8 border-t border-white/15 text-xs text-white font7">
          <div className="flex items-center gap-6">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms & Conditions</a>
          </div>
          <p>© {new Date().getFullYear()} Nebula. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
