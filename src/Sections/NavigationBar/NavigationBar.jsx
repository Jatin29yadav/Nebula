const NavigationBar = () => {
  return (
    <div>
      <div className=" flex justify-between px-7 py-5 items-center text-white">
        <div className="font3 font-bold text-5xl">S</div>
        <div>
          <ul className="flex gap-10 text-[1.2rem] font-medium cursor-pointer">
            <li>About</li>
            <li>Gallery</li>
            <li>Parts</li>
            <li>Sponsorships</li>
            <li>Insights</li>
            <li>Team</li>
            <li>Advantures</li>
            <li>||||||||</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
