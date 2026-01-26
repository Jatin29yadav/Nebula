const ShortText = () => {
  return (
    <div>
      <div
        className="relative 
        flex items-center justify-center 
        px-4 py-2 gap-4 
        rounded-full 
        backdrop-blur-md          
        bg-white/5                
        border border-white/10   
        shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
      >
        <div className="relative z-10 flex items-center justify-center py-1 xl:gap-3 gap-2 xl:text-lg lg:text-md text-sm">
          <div className="relative rounded-full w-7 h-7 overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src="../../../Images/Bg5.jpg"
              alt=""
            />
          </div>
          <div className="text-xl">→</div>
          <div className="font-medium whitespace-nowrap">Stellar-Forge</div>
          <div className="text-xl">→</div>
          <div className="relative rounded-full w-7 h-7 overflow-hidden">
            <img
              className="object-cover w-full h-full"
              src="../../../Images/Bg4.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShortText;
