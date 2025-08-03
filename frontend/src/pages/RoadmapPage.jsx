import React from "react";
import RoadMap_Card from "../components/RoadMap_Card";

const RoadmapPage = () => {
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
          <RoadMap_Card
            name="Web Development"
            weeks="12"
            technologies={[
              "HTML",
              "CSS",
              "JavaScript",
              "React",
              "Node.js",
              "Express.js",
            ]}
          />
          <RoadMap_Card
            name="DSA"
            weeks="10"
            technologies={[
              "C++",
              "Java",
              "Python",
              "Data Structures",
              "Algorithms",
            ]}
          />
          <RoadMap_Card
            name="App Development"
            weeks="14"
            technologies={["Flutter", "Dart", "Firebase"]}
          />
          <RoadMap_Card
            name="UI/UX Design Classes"
            weeks="08"
            technologies={["Figma", "Adobe XD", "Sketch", "InVision"]}
          />
          <RoadMap_Card
            name="AI and Machine Learning"
            weeks="20"
            technologies={["Python", "TensorFlow", "PyTorch", "Scikit-learn"]}
          />
          <RoadMap_Card
            name="Game Development"
            weeks="16"
            technologies={["Unity", "C#", "Unreal Engine", "Blender"]}
          />
        </div>
      </div>
    </div>
  );
};

export default RoadmapPage;
