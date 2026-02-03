import React from "react";
import DomeGallery from "@/components/Gallery/DomeGallery";

const Gallery = () => {
  return (
    <div className="mt-20">
      <div style={{ width: "90vw", height: "100vh" }}>
        <DomeGallery
          fit={0.7}
          minRadius={1000}
          maxVerticalRotationDeg={0}
          segments={34}
          dragDampening={2}
          grayscale={false}
        />
      </div>
    </div>
  );
};

export default Gallery;
