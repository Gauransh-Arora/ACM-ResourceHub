import React from "react";
import RoadmapTimeline from "../components/RoadmapTimeline.jsx";
import { useParams } from "react-router-dom";
import roadmaps from "../data/roadmaps.json";


const RoadmapPage = ({ name = "", technologies = [] }) => {
  const { param } = useParams();
  const data = roadmaps[param];
  const weeks = data.weeks;

  console.log(weeks)

  return (
    <>
      <div className="mt-10 mx-4 md:mx-10 sm:flex-row  sm:items-center gap-4">
        <div className="flex items-center flex-wrap">
          <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">
            {data.title.split(" ").slice(0, -1).join(" ")}
          </span>
          <span className="font-extrabold text-[#15A6DD] text-2xl sm:text-3xl lg:text-4xl">
            {data.title.split(" ").slice(-1)}
          </span>
        </div>
        <hr className="mt-3 mb-4 border-t-2 border-[#9AAEBC] " />
        <div className="mb-10 mt-7">
          <div className="text-3xl font-extrabold">What you’ll learn?</div>
          <div className="text-[#15A6DD] my-1">{data.subheading1}</div>
          <div className="text-[#9aaebc]">{data.description1}</div>
        </div>

        <div className="mb-10">
          <div className="text-3xl font-extrabold">Important Resources</div>
          <div className="text-[#15A6DD] font-bold my-1">
            {data.subheading2}
          </div>
          <div className="text-[#9aaebc] flex flex-wrap gap-6 text-[#9aaebc} text-2xl">
            {data.description2.map((item, index) => (
              <a
                key={index}
                href=""
                className="hover:text-[#15A6DD] transition-colors duration-200"
              >
                {item}
              </a>
            ))}
          </div>
        </div>

        <div className="mb-10">
          <div className="text-3xl font-extrabold mb-15">Roadmap</div>
          <div>
            {" "}
            <RoadmapTimeline weeks={weeks} />
          </div>
        </div>
      </div>
    </>
  );
};

export default RoadmapPage;
