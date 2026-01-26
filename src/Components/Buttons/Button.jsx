const Button = ({ message }) => {
  return (
    <div>
      <div>
        <button className="group relative overflow-hidden backdrop-blur-md bg-white/10 px-10 py-4 border-l-2 border-r-2 cursor-pointer font-medium text-md text-white">
          <span className="absolute inset-y-0 left-0 w-0.5 bg-white/30 transition-all duration-700 ease-out group-hover:w-full group-active:w-full"></span>
          <span className="relative z-10">{message}</span>
        </button>
      </div>
    </div>
  );
};

export default Button;
