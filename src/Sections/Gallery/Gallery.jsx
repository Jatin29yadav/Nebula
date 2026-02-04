import React from "react";
import DomeGallery from "@/components/Gallery/DomeGallery";

const Gallery = () => {
  return (
    <div className="my-10">
      <div style={{ width: "90vw", height: "100vh" }}>
        <DomeGallery
          fit={0.5}
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
