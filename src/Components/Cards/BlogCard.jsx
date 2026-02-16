import React from "react";

const BlogCard = ({ data }) => {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden group cursor-pointer border border-white/10 shadow-lg">
      <img
        src={data.image}
        alt={data.title}
        className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500 group-hover:opacity-80" />

      <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col justify-end">
        <span className="text-cyan-400 text-xs font-mono tracking-[0.2em] uppercase mb-3">
          {data.tag}
        </span>
        <h3 className="text-white text-2xl md:text-3xl font-semibold mb-3 leading-tight">
          {data.title}
        </h3>
        <p className="text-gray-300 text-sm md:text-base leading-relaxed line-clamp-3 opacity-90">
          {data.description}
        </p>

        <div className="mt-5 overflow-hidden">
          <p className="text-xs font-mono text-white tracking-widest uppercase translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
            Read Article →
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
