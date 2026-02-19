import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { blogPageData } from "../Sections/Blog/BlogPageData";

const categories = [
  "All Logs",
  "Expeditions",
  "Fleet Ops",
  "Astro-Tech",
  "Discoveries",
];

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState("All Logs");
  const navigate = useNavigate();

  const filteredBlogs =
    activeCategory === "All Logs"
      ? blogPageData
      : blogPageData.filter((post) => post.category === activeCategory);

  return (
    <div className="relative text-white min-h-screen w-full font-sans pt-32 pb-24 z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col items-center">
        <div className="text-center max-w-3xl mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white ">
            Our Latest Blog Posts on{" "}
            <span className="text-cyan-400">Space </span>
            Adventure
          </h1>
          <p className="text-gray-400 text-lg">
            Access the latest mission briefings, technical specifications, and
            planetary discoveries from the Vanguard deep space fleet.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all border border-cyan-400 duration-300 ${
                activeCategory === cat
                  ? "bg-cyan-400 text-black shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                  : "bg-white/20 backdrop-blur-md text-gray-300 hover:bg-cyan-950 hover:text-white shadow-sm"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 w-full">
          {filteredBlogs.map((post) => (
            <div
              key={post.id}
              onClick={() => navigate(`/Blogs/${post.id}`)}
              className="group cursor-pointer flex flex-col gap-4 transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="w-full aspect-square md:aspect-4/3 rounded-3xl overflow-hidden shadow-sm transition-shadow duration-300 group-hover:shadow-[0_0_25px_rgba(34,211,238,0.15)] border border-white/5 relative">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
              </div>

              <div className="flex flex-col gap-2 mt-2 px-2">
                <span className="text-cyan-400 text-sm font-medium tracking-wider uppercase">
                  {post.category}
                </span>

                <h3 className="text-xl font-bold leading-tight group-hover:text-cyan-200 transition-colors duration-200">
                  {post.title}
                </h3>

                <span className="text-gray-500 text-sm mt-1 font-mono">
                  {post.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {filteredBlogs.length === 0 && (
          <div className="text-gray-500 text-xl mt-10 font-mono">
            No transmissions found in this sector.
          </div>
        )}
      </div>
    </div>
  );
};

export default Blogs;
