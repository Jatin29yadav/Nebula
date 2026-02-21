import React, { useState, useEffect, useRef } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import {
  IoSearchOutline,
  IoMenuOutline,
  IoCloseOutline,
  IoArrowBack,
  IoChevronBack,
  IoChevronForward,
} from "react-icons/io5";
import Footer from "@/Sections/Footer/Footer";
import { docsData } from "./DocsData";

const Docs = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef(null);

  const currentDocId = id || "getting-started";
  const doc = docsData.find((d) => d.id === currentDocId);

  const filteredDocs = docsData.filter((d) =>
    d.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === "k") {
        e.preventDefault();
        searchInputRef.current?.focus();
        if (window.innerWidth < 1024) setIsSidebarOpen(true);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    setIsSidebarOpen(false);
    window.scrollTo(0, 0);
  }, [id]);

  if (!doc) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white bg-[#050505]">
        <h1 className="text-3xl text-cyan-400 mb-4">Document Not Found</h1>
        <button
          onClick={() => navigate("/docs")}
          className="text-gray-400 hover:text-white underline"
        >
          Return to Docs Hub
        </button>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-[#050505] text-white font-sans flex flex-col pt-24 z-10 relative">
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      <div className="flex flex-1 max-w-[1400px] w-full mx-auto relative">
        <aside
          className={`fixed lg:sticky top-24 left-0 h-[calc(100vh-6rem)] w-72 lg:w-80 bg-[#0a0a0a] lg:bg-transparent border-r border-white/5 p-6 z-50 transform transition-transform duration-300 ease-in-out overflow-y-auto ${
            isSidebarOpen
              ? "translate-x-0"
              : "-translate-x-full lg:translate-x-0"
          }`}
        >
          <div className="flex items-center justify-between lg:hidden mb-6">
            <span className="font-bold tracking-widest uppercase text-cyan-400">
              Menu
            </span>
            <button
              onClick={() => setIsSidebarOpen(false)}
              className="text-2xl text-gray-400 hover:text-white"
            >
              <IoCloseOutline />
            </button>
          </div>

          <div className="relative mb-8 group">
            <IoSearchOutline className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-cyan-400 transition-colors" />
            <input
              ref={searchInputRef}
              type="text"
              placeholder="Search docs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#111] border border-white/10 rounded-lg py-2.5 pl-10 pr-16 text-sm text-gray-200 focus:outline-none focus:border-cyan-400/50 transition-colors"
            />
            <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
              <kbd className="bg-black border border-white/20 rounded px-1.5 py-0.5 text-[10px] text-gray-500 font-mono">
                CTRL
              </kbd>
              <kbd className="bg-black border border-white/20 rounded px-1.5 py-0.5 text-[10px] text-gray-500 font-mono">
                K
              </kbd>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <div className="text-xs font-bold text-gray-600 uppercase tracking-widest mb-2">
              Sections
            </div>
            {filteredDocs.length > 0 ? (
              filteredDocs.map((item) => (
                <Link
                  key={item.id}
                  to={`/docs/read/${item.id}`}
                  className={`px-3 py-2 rounded-lg text-sm transition-all ${
                    currentDocId === item.id
                      ? "bg-cyan-900/30 text-cyan-400 font-medium border border-cyan-400/20"
                      : "text-gray-400 hover:text-gray-200 hover:bg-white/5"
                  }`}
                >
                  {item.title}
                </Link>
              ))
            ) : (
              <div className="text-sm text-gray-600 italic px-3">
                No results found.
              </div>
            )}
          </div>
        </aside>

        <main className="flex-1 w-full max-w-4xl mx-auto px-6 lg:px-12 py-8 flex flex-col min-h-[calc(100vh-6rem)]">
          <div className="flex items-center gap-4 mb-10">
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="lg:hidden p-2 bg-[#111] border border-white/10 rounded-lg text-gray-400 hover:text-white"
            >
              <IoMenuOutline className="text-xl" />
            </button>

            <button
              onClick={() => navigate("/docs")}
              className="group flex items-center gap-2 text-gray-500 hover:text-cyan-400 transition-colors font-mono text-sm uppercase tracking-widest"
            >
              <IoArrowBack className="text-lg group-hover:-translate-x-1 transition-transform" />
              Docs Hub
            </button>
          </div>

          <div className="flex-1">
            <div className="mb-6 inline-block text-cyan-400 text-xs font-bold tracking-widest uppercase">
              {doc.category}
            </div>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-tight mb-12 border-b border-white/10 pb-8">
              {doc.title}
            </h1>

            <div className="space-y-10 text-gray-300 text-lg leading-relaxed">
              {doc.content.map((section, idx) => (
                <section key={idx}>
                  {section.heading && (
                    <h2 className="text-2xl font-semibold text-white mb-4 mt-8">
                      {section.heading}
                    </h2>
                  )}
                  {section.paragraph && (
                    <p className="text-gray-400 mb-6">{section.paragraph}</p>
                  )}
                </section>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-20 pt-8 border-t border-white/10">
            {doc.prev ? (
              <Link
                to={`/docs/read/${doc.prev.id}`}
                className="flex flex-col items-start p-4 border border-white/5 rounded-xl hover:border-cyan-400/30 hover:bg-cyan-950/10 transition-all group"
              >
                <span className="text-xs text-gray-500 uppercase tracking-widest mb-1 flex items-center gap-1">
                  <IoChevronBack className="group-hover:-translate-x-1 transition-transform" />{" "}
                  Previous
                </span>
                <span className="font-medium text-cyan-200 group-hover:text-cyan-400 transition-colors">
                  {doc.prev.title}
                </span>
              </Link>
            ) : (
              <div />
            )}{" "}
            {doc.next && (
              <Link
                to={`/docs/read/${doc.next.id}`}
                className="flex flex-col items-end text-right p-4 border border-white/5 rounded-xl hover:border-cyan-400/30 hover:bg-cyan-950/10 transition-all group"
              >
                <span className="text-xs text-gray-500 uppercase tracking-widest mb-1 flex items-center gap-1">
                  Next{" "}
                  <IoChevronForward className="group-hover:translate-x-1 transition-transform" />
                </span>
                <span className="font-medium text-cyan-200 group-hover:text-cyan-400 transition-colors">
                  {doc.next.title}
                </span>
              </Link>
            )}
          </div>
        </main>
      </div>

      <Footer />
    </div>
  );
};

export default Docs;
