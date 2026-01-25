import { useRef } from "react";

const Button = () => {
  const buttonRef = useRef(null);

  return (
    <div>
      <div>
        <button
          ref={buttonRef}
          className="group relative overflow-hidden backdrop-blur-md bg-white/10 px-10 py-4 border-l-2 border-r-2 cursor-pointer font-medium text-md text-white"
        >
          <span className="absolute inset-y-0 left-0 w-0.5 bg-white/30 transition-all duration-700 ease-out group-hover:w-full"></span>
          <span className="relative z-10">Enter the Rift</span>
        </button>
      </div>
    </div>
  );
};

export default Button;
