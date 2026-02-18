import DomeGallery from "@/components/Gallery/DomeGallery";
const Gallery = () => {
  return (
    <div className="w-screen min-h-screen">
      <div>
        <div className="mx-auto" style={{ width: "100vw", height: "100vh" }}>
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
    </div>
  );
};

export default Gallery;
