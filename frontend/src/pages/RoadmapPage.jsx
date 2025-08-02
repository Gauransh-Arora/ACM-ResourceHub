import React from "react";

const RoadmapPage = () => {
  return (
    <div className="mt-10 mx-4 md:mx-10 flex flex-col sm:flex-row sm:items-center gap-4">
      <div className="flex items-center flex-wrap">
        <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">
          Road
        </span>
        <span className="font-extrabold text-[#15A6DD] text-2xl sm:text-3xl lg:text-4xl">
          Maps
        </span>
      </div>
      <hr className="my-3 mx-4 md:mx-10 border-t-2 border-[#9AAEBC]" />
    </div>
  );
};

export default RoadmapPage;
