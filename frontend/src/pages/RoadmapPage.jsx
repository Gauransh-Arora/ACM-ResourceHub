import React from "react";

import RoadmapTimeline from "../components/RoadmapTimeline.jsx";
const weeks = [
  { week: "Week 01", title: "HTML/CSS and Git", link: "#" },
  { week: "Week 02", title: "JavaScript Basics", link: "#" },
  { week: "Week 03", title: "Advanced JS", link: "#" },
  { week: "Week 04", title: "React Fundamentals", link: "#" },
  { week: "Week 05", title: "Node & Express", link: "#" },
  { week: "Week 06", title: "MongoDB & APIs", link: "#" },
];
const RoadmapPage = () => {
  return (
    <>
      <div className="mt-10 mx-4 md:mx-10 sm:flex-row  sm:items-center gap-4">
        <div className="flex items-center flex-wrap">
          <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">
            Road
          </span>
          <span className="font-extrabold text-[#15A6DD] text-2xl sm:text-3xl lg:text-4xl">
            Maps
          </span>
        </div>
        <hr className="mt-3 mb-4 border-t-2 border-[#9AAEBC] " />
        <div className="mb-10 mt-7">
          <div className="text-3xl font-extrabold">What you’ll learn?</div>
          <div className="text-[#15A6DD] my-1">
            HTML | CSS | JavaScript | React | Node.js | Express.js
          </div>
          <div className="text-[#9aaebc]">
            Students embark on a dynamic journey into web development with our
            MERN Stack Roadmap. This immersive experience takes participants
            from the basics of front-end design to the complexities of back-end
            development through hands on projects.
          </div>
        </div>

        <div className="mb-10">
          <div className="text-3xl font-extrabold">Important Resources</div>
          <div className="text-[#15A6DD] font-extrabold my-1">
            Master the web
          </div>
          <div className="text-[#9aaebc] flex flex-wrap gap-6 text-[#9aaebc} text-2xl">
            <div>HTML</div>
            <div>HTML</div>
            <div>HTML</div>
            <div>HTML</div>
            <div>HTML</div>
          </div>
        </div>

        <div>
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
