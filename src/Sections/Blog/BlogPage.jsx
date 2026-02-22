import React from "react";
import Footer from "../Footer/Footer";
import { useParams, useNavigate } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import { blogData } from "./BlogData";

const BlogPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const post = blogData.find((blog) => blog.id === parseInt(id));

  if (!post) {
    return (
      <div className="min-h-screen relative flex flex-col items-center justify-center text-white">
        <h1 className="text-4xl font-bold mb-4 text-cyan-400">
          Transmission Lost
        </h1>
        <p className="mb-8 text-gray-400">
          The log you are looking for does not exist or has been corrupted.
        </p>
        <button
          onClick={() => navigate("/Blogs")}
          className="bg-cyan-900 text-cyan-400 px-6 py-2 rounded-full hover:bg-cyan-800 transition"
        >
          Return to Archives
        </button>
      </div>
    );
  }

  const similarPosts = blogData.filter((b) => b.id !== post.id).slice(0, 3);

  return (
    <div className="w-full text-white relative pt-28  font-sans ">
      <header className="max-w-4xl mx-auto px-6 lg:px-0 mb-16">
        <button
          onClick={() => navigate("/Blogs")}
          className="group flex items-center gap-2 text-gray-400 hover:text-cyan-400 cursor-pointer transition-colors mb-10 font-mono text-sm uppercase tracking-widest"
        >
          <IoArrowBack className="text-xl group-hover:-translate-x-1 transition-transform" />
          Back to Archives
        </button>

        <div className="mb-6 inline-block bg-cyan-900/50 text-cyan-400 px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase border border-cyan-400/30">
          {post.category}
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
          {post.title}
        </h1>

        <p className="text-gray-400 text-lg md:text-xl mb-8 leading-relaxed">
          {post.description}
        </p>

        <div className="flex items-center gap-6 text-sm text-cyan-200/70 mb-10 font-mono">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>

        <div className="w-full aspect-video md:aspect-21/9 rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_30px_rgba(34,211,238,0.1)]">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      </header>

      <article className="max-w-3xl mx-auto px-6 lg:px-0 text-gray-300 text-lg leading-relaxed space-y-12">
        {post.content.map((section, index) => (
          <section key={index}>
            {section.heading && (
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {section.heading}
              </h2>
            )}

            {section.paragraph && (
              <p className="mb-8 text-gray-400">{section.paragraph}</p>
            )}

            {section.image && (
              <div className="w-full rounded-2xl overflow-hidden border border-white/10 mb-8">
                <img
                  src={section.image}
                  alt={section.heading}
                  className="w-full h-auto object-cover"
                />
              </div>
            )}

            {section.quote && (
              <blockquote className="border-l-4 border-cyan-400 pl-6 py-2 my-12 text-xl md:text-2xl font-medium italic text-cyan-100 bg-cyan-950/20 p-6 rounded-r-xl">
                "{section.quote}"
              </blockquote>
            )}
          </section>
        ))}
      </article>

      <section className="max-w-6xl mx-auto px-6 lg:px-8 mt-32 border-t border-white/10 pt-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Similar Transmissions
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto">
            Access related mission logs from the Vanguard archives.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {similarPosts.map((simPost) => (
            <div
              key={simPost.id}
              className="group cursor-pointer"
              onClick={() => {
                navigate(`/Blogs/${simPost.id}`);
                window.scrollTo(0, 0);
              }}
            >
              <div className="w-full aspect-4/3 rounded-2xl overflow-hidden border border-white/5 mb-5 relative">
                <img
                  src={simPost.image}
                  alt={simPost.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-300" />
              </div>

              <div className="text-sm text-cyan-400 font-mono mb-2">
                {simPost.date} • {simPost.readTime}
              </div>

              <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-200 transition-colors">
                {simPost.title}
              </h3>

              <p className="text-gray-500 text-sm line-clamp-2">
                {simPost.description}
              </p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BlogPage;
