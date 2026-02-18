import React, { useState } from "react";

const categories = [
  "All Logs",
  "Expeditions",
  "Fleet Ops",
  "Astro-Tech",
  "Discoveries",
];

const blogData = [
  {
    id: 1,
    category: "Expeditions",
    title: "Navigating the Orion Spur: Best practices for deep space routing",
    date: "Feb 15, 2026",
    image:
      "https://i.pinimg.com/736x/12/52/e1/1252e193387fc96423b890980244e0c4.jpg",
  },
  {
    id: 2,
    category: "Fleet Ops",
    title: "Optimizing plasma thruster efficiency for interstellar cargo runs",
    date: "Jan 28, 2026",
    image:
      "https://i.pinimg.com/1200x/f6/2b/20/f62b207f7378541b1b0d982588347d79.jpg",
  },
  {
    id: 3,
    category: "Discoveries",
    title:
      "Exoplanet Proxima-9: Unveiling atmospheric anomalies and dense nebulae",
    date: "Jan 03, 2026",
    image:
      "https://i.pinimg.com/736x/3b/9f/17/3b9f17c9b9c80dcb689806d961faa0b0.jpg",
  },
  {
    id: 4,
    category: "Astro-Tech",
    title:
      "Quantum communication arrays: Bridging the lightyear transmission gap",
    date: "Dec 19, 2025",
    image:
      "https://i.pinimg.com/736x/e0/1f/a4/e01fa46cbe7df7e05476e515f438412c.jpg",
  },
  {
    id: 5,
    category: "Expeditions",
    title: "Encounters at the edge: Day 400 of the Vanguard Nebula Initiative",
    date: "Nov 14, 2025",
    image:
      "https://i.pinimg.com/736x/7a/0c/15/7a0c15c4a97a8ae2f409c4af4cd4e24b.jpg",
  },
  {
    id: 6,
    category: "Astro-Tech",
    title: "Shield harmonics: Deflecting micro-meteorites at warp velocities",
    date: "Oct 05, 2025",
    image:
      "https://i.pinimg.com/1200x/e3/78/b7/e378b78a847c22e3253c5174e6629e96.jpg",
  },
  {
    id: 7,
    category: "Expeditions",
    title: "The Trappist-1 mapping project: Charting new habitable zones",
    date: "Sep 11, 2025",
    image:
      "https://i.pinimg.com/1200x/88/91/df/8891dfdd549b9b633252b86c9b9d9752.jpg",
  },
  {
    id: 8,
    category: "Discoveries",
    title: "Echoes of the void: Decoding unidentified radio bursts in Sector 4",
    date: "Aug 22, 2025",
    image:
      "https://i.pinimg.com/736x/61/c0/5a/61c05af2921d4123323b520b78c9b152.jpg",
  },
  {
    id: 9,
    category: "Fleet Ops",
    title:
      "Sustainable hydroponics: Feeding a Vanguard crew on 5-year missions",
    date: "Jul 08, 2025",
    image:
      "https://i.pinimg.com/736x/bf/9a/35/bf9a3527d8953c5f49030a9a033b9159.jpg",
  },
];

const Blogs = () => {
  const [activeCategory, setActiveCategory] = useState("All Logs");

  const filteredBlogs =
    activeCategory === "All Logs"
      ? blogData
      : blogData.filter((post) => post.category === activeCategory);

  return (
    <div className="relative text-white min-h-screen w-full font-sans pt-32 pb-24 z-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col items-center">
        <div className="text-center max-w-3xl mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-white ">
            Our Latest Blog Posts on{" "}
            <span className="text-cyan-400">Space </span>
            Advanture
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
                  : "bg-white/20 backdrop-blur-md  text-gray-300 hover:bg-cyan-950 hover:text-white shadow-sm"
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
              className="group cursor-pointer flex flex-col gap-4 transition-transform duration-300 "
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
