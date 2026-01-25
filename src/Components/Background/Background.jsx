import React from "react";
import Galaxy from "./Galaxy";
const Background = () => {
  return (
    <div>
      <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <Galaxy
          mouseRepulsion
          mouseInteraction
          density={1}
          glowIntensity={0.3}
          saturation={0}
          hueShift={140}
          twinkleIntensity={0.3}
          rotationSpeed={0.1}
          repulsionStrength={2}
          autoCenterRepulsion={0}
          starSpeed={0.5}
          speed={1}
        />
      </div>
    </div>
  );
};

export default Background;
