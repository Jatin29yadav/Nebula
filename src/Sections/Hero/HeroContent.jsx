const HeroContent = () => {
  return (
    <>
      <div className="relative w-full h-screen text-white overflow-hidden">
        <video
          className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-center"
          autoPlay
          muted
          loop
          playsInline
          src="../video/Vid2.mp4"
        />
        <div className="absolute z-10 inset-0 py-10 lg:mx-20 md:mx-14 sm:mx-10 mx-5 bg-cover bg-center flex flex-col md:justify-center justify-end h-full">
          <div className="uppercase sm:text-xl font-semibold">
            new mission to the space with
          </div>
          <div className="font1 uppercase lg:text-[10rem] sm:text-[6rem] text-[4rem] lg:leading-40 md:leading-30 font-bold">
            Nebula
          </div>
          <div className="sm:text-lg text-md mt-5 max-w-4xl">
            Leave the atmosphere behind. Nebula transforms raw cosmic data into
            a cinematic, visceral odyssey. Don't just observe the universe—step
            into it. Your legacy begins at the edge of the unknown.
          </div>
          <div>
            <button className="px-5 py-2 mt-5 border-2 rounded-xl border-white transition-colors duration-500 ease-linear hover:bg-white hover:text-black font-semibold">
              Explore
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroContent;
