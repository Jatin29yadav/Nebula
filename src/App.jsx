import Home from "./Pages/Home";
import Galaxy from "./Components/Background/Galaxy";
import { Route, Routes, Link } from "react-router-dom";
import Logo from "./Components/NavigationBar/Logo";
import DocsPage from "./Pages/DocsPage";
import Explore from "./Pages/ExplorePage";
import Blogs from "./Pages/Blogs";
import Enlist from "./Pages/Enlist";
import Gallery from "./Pages/Gallery";
import BlogPage from "./Sections/Blog/BlogPage";

import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import CircularMenu from "./components/NavigationBar/CircularNav/CircularMenu";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });

    lenis.on("scroll", (e) => {});

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-black">
      <div className="fixed z-50 lg:p-7 p-4 text-center w-full pointer-events-none">
        <Link to="/" className="pointer-events-auto inline-block">
          <Logo />
        </Link>
      </div>

      <div className="fixed inset-0 z-0 pointer-events-none">
        <Galaxy
          mouseRepulsion
          mouseInteraction
          density={0.5}
          glowIntensity={0.5}
          saturation={1}
          hueShift={110}
          twinkleIntensity={0.5}
          rotationSpeed={0.15}
          repulsionStrength={3.5}
          autoCenterRepulsion={0}
          starSpeed={0.5}
          speed={0.5}
        />
      </div>

      <div className="z-50">
        <CircularMenu />
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/docs" element={<DocsPage />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/Blogs" element={<Blogs />} />
        <Route path="/enlist" element={<Enlist />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/Blogs/:id" element={<BlogPage />} />
      </Routes>
    </div>
  );
};

export default App;
