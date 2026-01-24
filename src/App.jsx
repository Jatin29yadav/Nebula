import Hero from "./Sections/Hero/Hero";
import Galaxy from "./Sections/Background/Galaxy";

const App = () => {
  return (
    <div>
      <div className="absolute inset-0 z-0">
        <Galaxy />
      </div>
      <Hero />
    </div>
  );
};

export default App;
