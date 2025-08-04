import React from "react";
import { useNavigate } from "react-router-dom";

const RoadMap_Card = ({
  name = "Course Name",
  weeks = "08",
  technologies = [],
  param = "",
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/roadmaps/${param}`);
  };
  return (
    <div
      className="border-2 border-[#15A6DD] p-3 flex flex-col h-full cursor-pointer hover:shadow-lg transition-shadow duration-200"
      onClick={handleClick}
    >
      <div className="flex-grow">
        <p className="text-3xl font-bold ">{name}</p>
        <p className="text-2xl text-[#9AAEBC]">({weeks} Weeks)</p>
        <div className="text-xl text-[#15a6dd]">
          {technologies.map((tech, index) => (
            <span key={index}>
              <span>{tech}</span>
              {index < technologies.length - 1 && <span> | </span>}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-4 font-bold text-lg underline">
        <a onClick={handleClick} href="" className="">
          Start Now
        </a>
      </div>
    </div>
  );
};

export default RoadMap_Card;
