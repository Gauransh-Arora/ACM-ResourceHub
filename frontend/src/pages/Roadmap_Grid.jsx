import React from "react";
import RoadMap_Card from "../components/RoadMap_Card";
import { useNavigate } from "react-router-dom";
import roadmap from "../data/roadmaps.json";

const Roadmap_Grid = () => {
  const navigate = useNavigate();
  const cardClick = (title) => {
    navigate(`/roadmaps/${title}`);
  };

  return (
    <div className="mt-10 mx-4 md:mx-10">
      <div className="flex items-center flex-wrap">
        <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">
          Road
        </span>
        <span className="font-extrabold text-[#15A6DD] text-2xl sm:text-3xl lg:text-4xl">
          Maps
        </span>
      </div>
      <hr className="my-3 border-t-2 border-[#9AAEBC] w-full" />
      <div className="mt-4 mb-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {Object.entries(roadmap).map(([key,data])=> (
            <RoadMap_Card
            key={key}
            name = {data.title}
            technologies={data.subheading1}
            weeks={data.weeks.length}
            param={key}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Roadmap_Grid;
