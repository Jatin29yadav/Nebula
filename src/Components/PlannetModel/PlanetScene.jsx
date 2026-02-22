import * as THREE from "three";
import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Nebula from "./Nebula";
import Starfield from "./Starfield";
import EarthMaterial from "./EarthMaterial";
import AtmosphereMesh from "./AtmosphereMesh";

const sunDirection = new THREE.Vector3(-2, 0.5, 1.5);

function Earth() {
  const ref = React.useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.001;
    }
  });

  const axialTilt = (23.4 * Math.PI) / 180;

  return (
    <group rotation-z={axialTilt}>
      <mesh ref={ref}>
        <icosahedronGeometry args={[2, 48]} />
        <EarthMaterial sunDirection={sunDirection} />
        <AtmosphereMesh rimHex={0xd35b3d} />
      </mesh>
    </group>
  );
}

const PlanetScene = () => {
  const { x, y, z } = sunDirection;

  return (
    <Canvas
      className="w-full h-full"
      camera={{ position: [0, 0.1, 5] }}
      dpr={[1, 1.5]}
      gl={{
        toneMapping: THREE.NoToneMapping,
        powerPreference: "high-performance",
        antialias: false,
        stencil: false,
        alpha: true,
      }}
    >
      <hemisphereLight args={[0xffffff, 0x000000, 3.0]} />
      <directionalLight position={[x, y, z]} />

      <Earth />
      <Nebula />
      <Starfield />

      <OrbitControls enableZoom={false} />
    </Canvas>
  );
};

export default PlanetScene;
