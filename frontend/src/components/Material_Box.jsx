import React from "react";
import PDF from "../assets/PDF.png";
import Photo from "../assets/Photo.png";
import PPT from "../assets/PPT.png";
import Video from "../assets/Video.png";
import Doc from "../assets/Doc.png";

const Material_Box = ({ name = "Resource Name", type = "PDF", link = "" }) => {
  const getIcon = (type) => {
    switch (type) {
      case "PDF":
        return PDF;
      case "Photo":
        return Photo;
      case "PPT":
        return PPT;
      case "Video":
        return Video;
      case "Doc":
        return Doc;
      default:
        return PDF;
    }
  };
  return (
   <div className="border-2 border-[#15A6DD] bg-[#d3f3ff] flex items-center px-4 py-3 h-16 sm:h-20 md:h-24 overflow-hidden">
  <img
    src={getIcon(type)}
    alt={`${type} icon`}
    className="w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 flex-shrink-0"
  />
  <span className="text-base sm:text-lg md:text-xl ml-3 sm:ml-4 md:ml-6 truncate">
    {name}
  </span>
</div>

  );
};
export default Material_Box;
