import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "@/Sections/Footer/Footer";
import Button from "@/components/Buttons/Button";
import TiltedCard from "@/components/Cards/TiltedCard";
import { planetData } from "../Sections/PlanetModel/PlanetData";

const ExplorePage = () => {
  const navigate = useNavigate();

  return (
    <div className="relative w-full min-h-screen text-white pt-32 z-10 flex flex-col justify-between">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-10 grow min-h-screen">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 uppercase">
            Explore <span className="text-cyan-400">Worlds</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Select a destination to initiate telemetry and view real-time
            orbital scans of the sector.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 justify-items-center mb-20">
          {planetData.map((planet) => (
            <div
              key={planet.id}
              className="flex flex-col items-center gap-6 w-full max-w-[400px]"
            >
              <TiltedCard
                imageSrc={planet.image}
                altText={planet.title}
                captionText={planet.title}
                containerWidth="100%"
                imageWidth="100%"
                containerHeight="400px"
                imageHeight="400px"
                rotateAmplitude={12}
                scaleOnHover={1.05}
                showMobileWarning={false}
                showTooltip={true}
                displayOverlayContent={true}
                overlayContent={
                  <p className="tilted-card-demo-text font-bold text-white bg-black/60 backdrop-blur-md px-4 py-2 m-5 rounded-lg border border-white/10">
                    {planet.subtitle}
                  </p>
                }
              />

              <div className="w-full flex justify-center mt-2">
                <div onClick={() => navigate(`/explore/${planet.id}`)}>
                  <Button message={`Scan ${planet.title}`} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ExplorePage;
