import Data from "../../components/AboutUs/Data";
import Button from "../../Components/Buttons/Button";
import ShinyText from "../../Components/TextAnimation/ShinyText";

const AboutUs = () => {
  return (
    <div className="text-white h-screen flex flex-col 2xl:gap-12 sm:gap-10 gap-7">
      <div className="flex flex-col justify-start gap-10">
        <ShinyText
          text="About NEBULA (001)"
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
        <p className="lg:text-[1.5rem] sm:text-[1.1rem] xl:w-3/4">
          A masterpiece of digital architecture, Nebula stands as a symbol of
          our relentless pursuit of innovation and design. Its fluid animations
          and deep-space aesthetics house the dreams of modern creators, all
          focused on a singular mission: to redefine the boundaries of the web.
        </p>
      </div>
      <div className="flex xl:flex-row flex-col mx-auto relative 2xl:gap-20 gap-10">
        <div className="flex flex-col justify-between gap-10">
          <div className="flex flex-col xl:items-start items-center xl:gap-10 gap-7">
            <div className="text-gray-300">
              As Nebula prepares to launch its next iteration, a symphony of
              code and creativity hums within its core. Precision-engineered
              components pulse with life, ready to propel this digital explorer
              through the vast cosmic ocean that separates imagination from
              reality
            </div>
            <Button message="Learn More" />
          </div>
          <div className="flex sm:flex-row flex-col justify-between gap-5 overflow-hidden">
            <Data
              Num="100+"
              Label="Projects launched across the digital cosmos."
            />
            <Data
              Num="99.9%"
              Label="Uptime reliability maintained in zero gravity."
            />
            <Data
              Num="24/7"
              Label="Mission control support for all deployed systems."
            />
          </div>
        </div>
        <div className="z-20 border-4 rounded-2xl">
          {/* <img
            className="rounded-2xl"
            src="../../../Images/Bg5.jpg"
            alt="Nebula Background"
          /> */}
          <video autoPlay muted loop className="rounded-2xl object-cover">
            <source src="../../../Video/Vid1.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
