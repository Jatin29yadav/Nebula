import Home from "./Pages/Home";
import Galaxy from "./Components/Background/Galaxy";
import DockNav from "./Components/NavigationBar/Dock/DockNav";
import { Route, Routes, Link } from "react-router-dom";
import Logo from "./Components/NavigationBar/Logo";
import DocsPage from "./Pages/DocsPage";

const App = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-black">
      <div className="fixed z-10 lg:p-7 p-4 text-center w-full">
        <Link to="/">
          <Logo />
        </Link>
      </div>
      <div className="fixed inset-0 z-0">
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
