import Button from "../../Components/Buttons/Button";

const HeroContent = () => {
  return (
    <>
      <div className="flex flex-col gap-10 text-center items-center">
        <div className="font-medium lg:text-[4.5rem] sm:text-[3.5rem] text-[2rem] font2 leading-tight">
          <div>Spiral Into The,</div>
          <div>Endless Unknown.</div>
        </div>
        <div className="sm:w-7/12 w-10/12 md:text-[1.5rem]">
          Where gravity bends reality and light paints the darkness. Navigate a
          user experience built on the laws of physics and imagination.
        </div>
        <Button />
      </div>
    </>
  );
};

export default HeroContent;
