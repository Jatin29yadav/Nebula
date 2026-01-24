import React from "react";
import Dock from "./Dock";
import { HiHome } from "react-icons/hi";
import { SiGoogledocs } from "react-icons/si";
import { RiTeamFill, RiGalleryFill } from "react-icons/ri";

const items = [
  { icon: <HiHome size={18} />, label: "Home", onClick: () => alert("Home!") },
  {
    icon: <RiGalleryFill size={18} />,
    label: "Gallery",
    onClick: () => alert("Gallery"),
  },
  {
    icon: <RiTeamFill size={18} />,
    label: "Team",
    onClick: () => alert("Team"),
  },
  {
    icon: <SiGoogledocs size={18} />,
    label: "Docs",
    onClick: () => alert("Docs"),
  },
];

const DockNav = () => {
  return (
    <div>
      <Dock
        items={items}
        panelHeight={60}
        baseItemSize={40}
        magnification={70}
      />
    </div>
  );
};

export default DockNav;
