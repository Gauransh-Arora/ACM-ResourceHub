import React from "react";

const RoadmapTimeline = ({ weeks = [] }) => {
  return (
    <div className="overflow-x-auto scrollbar-hidden">
      <div className="relative flex gap-16 px-8 py-30 w-max ">
        {/* Main horizontal line */}
        <div className="absolute top-1/2 left-0 w-full bg-black z-0 h-1" />

        {weeks.map((item, index) => {
          const isAbove = index % 2 === 0;

          return (
            <div
              key={index}
              className="relative flex flex-col items-center min-w-[200px]"
            >
              {/* Card */}
              <div
                className={`z-10 w-48 p-4 shadow-lg bg-[#8FDAF5] border border-gray-200 transition-transform duration-300 hover:scale-105 ${
                  isAbove ? "mb-6 -translate-y-28" : "mt-6 translate-y-28"
                }`}
              >
                <h4 className="font-bold">{item.week}</h4>
                <p className="text-sm mt-1 text-black">{item.title}</p>
                <a
                  href={item.link}
                  className="inline-block mt-2 text-sm text-black underline italic"
                >
                  Start Learning →
                </a>
              </div>

              {/* Dot */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-4 h-4 bg-[#8FDAF5] rounded-full border-2 border-[#434343] shadow-md" />
              </div>

              {/* Connector line */}
              <div
                className={`absolute left-1/2 transform -translate-x-1/2 w-px bg-[#9aaebc] ${
                  !isAbove
                    ? "top-1/2 h-28"
                    : "bottom-1/2 h-28"
                }`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RoadmapTimeline;
