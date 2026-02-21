import React, { Suspense } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { IoArrowBack } from "react-icons/io5";
import PlanetMaterial from "@/components/PlannetModel/EarthMaterial";
import { planetData } from "./PlanetData";

const PlanetModel = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const planet = planetData.find((p) => p.id === parseInt(id));

  if (!planet) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-black text-cyan-400 font-mono text-2xl z-50 relative">
        Planet coordinates not found.
      </div>
    );
  }

  return (
    <div className="w-screen h-screen relative bg-[#050505] overflow-hidden z-50">
      <button
        onClick={() => navigate("/explore")}
        className="absolute top-8 left-8 z-50 flex items-center gap-2 text-cyan-400 hover:text-white transition-colors font-mono uppercase tracking-widest bg-black/40 px-5 py-2.5 rounded-full border border-cyan-400/30 backdrop-blur-md cursor-pointer"
      >
        <IoArrowBack className="text-xl" />
        Back to Sector Map
      </button>

      <div className="absolute bottom-10 left-10 z-50 pointer-events-none">
        <h1 className="text-5xl font-bold text-white tracking-widest uppercase opacity-80">
          {planet.title}
        </h1>
        <p className="text-cyan-400 font-mono mt-2 tracking-wider">
          {planet.subtitle}
        </p>
      </div>

      <Canvas camera={{ position: [0, 0, 3], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 3, 5]} intensity={1.5} />

        <Suspense
          fallback={
            <Html center>
              <div className="text-cyan-400 font-mono tracking-widest animate-pulse whitespace-nowrap">
                LOADING TELEMETRY...
              </div>
            </Html>
          }
        >
          <mesh>
            <sphereGeometry args={[1, 64, 64]} />
            <PlanetMaterial textureUrl={planet.image} />
          </mesh>
        </Suspense>

        <OrbitControls enableZoom={true} autoRotate autoRotateSpeed={0.5} />
      </Canvas>
    </div>
  );
};

export default PlanetModel;
