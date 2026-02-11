import React from "react";

const InsightCard = ({ data }) => {
  return (
    <div className="group flex flex-col md:flex-row items-center gap-10 md:gap-16 py-12 border-b border-gray-800 last:border-none px-4 md:px-10 cursor-pointer">
      <div className="w-full md:w-5/12 overflow-hidden rounded-lg">
        <div className="w-full aspect-video relative">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            src={data.image}
            alt="Insight Thumbnail"
          />
        </div>
      </div>

      <div className="w-full md:w-7/12 flex flex-col justify-center items-start gap-6">
        <h3 className="text-xl md:text-3xl lg:text-4xl font-light leading-tight text-gray-100">
          {data.title}
        </h3>

        <button className="text-xs font-mono tracking-[0.2em] text-gray-500 group-hover:text-white uppercase mt-2 flex items-center gap-2 transition-colors duration-300">
          Read More
          <span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
            →
          </span>
        </button>
      </div>
    </div>
  );
};

export default InsightCard;
