import * as THREE from "three";
import React, { useMemo } from "react";
import { useLoader } from "@react-three/fiber";

function PlanetMaterial({ textureUrl = "./textures/alien-planet.jpg" }) {
  const map = useLoader(THREE.TextureLoader, textureUrl);
  const cloudsMap = useLoader(
    THREE.TextureLoader,
    "./textures/earth-clouds-4k.jpg",
  );

  const material = useMemo(() => {
    const uniforms = {
      dayTexture: { value: map },
      cloudsTexture: { value: cloudsMap },
    };

    const vs = `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        // Calculate standard position
        gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4(position, 1.0);
      }
    `;

    const fs = `
      uniform sampler2D dayTexture;
      uniform sampler2D cloudsTexture;
      varying vec2 vUv;

      void main() {
        // 1. Get the base color of your planet (Fully lit, no shadows)
        vec3 color = texture(dayTexture, vUv).rgb;

        // 2. Add the clouds over it (Fully lit)
        vec2 specularCloudsColor = texture(cloudsTexture, vUv).rg;
        float cloudsMix = smoothstep(0.0, 1.0, specularCloudsColor.g);
        
        // Mix the planet surface with white clouds
        color = mix(color, vec3(1.0), cloudsMix);
        
        // 3. Output the final bright color
        gl_FragColor = vec4(color, 1.0);
      }
    `;

    return new THREE.ShaderMaterial({
      uniforms: uniforms,
      vertexShader: vs,
      fragmentShader: fs,
    });
  }, [map, cloudsMap]);

  return <primitive object={material} />;
}

export default PlanetMaterial;
