import Home from "./Pages/Home";
import Galaxy from "./Components/Background/Galaxy";
import DockNav from "./Components/NavigationBar/Dock/DockNav";
import { Route, Routes, Link } from "react-router-dom";
import Logo from "./Components/NavigationBar/Logo";
import DocsPage from "./Pages/DocsPage";
import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

const App = () => {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
    });

    lenis.on("scroll", (e) => {
      console.log(e);
    });

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
        <Galaxy />
      </div>
      <div className="fixed bottom-4 left-0 right-0 flex justify-center z-50">
        <DockNav />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Docs" element={<DocsPage />} />
      </Routes>
    </div>
  );
};

export default App;
