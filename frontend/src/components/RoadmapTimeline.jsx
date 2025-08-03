import React from "react";

const RoadmapTimeline = ({ weeks }) => {
  return (
    <div className="overflow-x-auto scrollbar-hide">
      <div className="relative flex gap-16 px-8 py-30 w-max scroll-snap-x scroll-smooth">
        {/* Center Timeline Line */}
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-black z-0" />

        {weeks.map((item, index) => {
          const isAbove = index % 2 === 0;

          return (
            <div
              key={index}
              className="relative flex flex-col items-center scroll-snap-start min-w-[200px]"
            >
              {/* Card */}
              <div
                className={`z-10 w-48 p-4 shadow-lg bg-[#8FDAF5] border border-gray-200 transition-transform duration-300 hover:scale-105 ${
                  isAbove ? "mb-6 -translate-y-28" : "mt-6 translate-y-28"
                }`}
              >
                <h4 className="font-bold text-blue-600">{item.week}</h4>
                <p className="text-sm mt-1 text-gray-800">{item.title}</p>
                <a
                  href={item.link}
                  className="inline-block mt-2 text-sm text-blue-500 hover:underline"
                >
                  Start Learning →
                </a>
              </div>

              {/* Dot & Connector line */}
              <div className="relative w-full">
                {/* Dot on center timeline */}
                <div className="absolute bottom-[50px] left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                  <div className="w-4 h-4 bg-blue-500 rounded-full border-2 border-white shadow-md" />
                </div>

                {/* Connector line from card to dot */}
                <div
                  className={`absolute left-1/2 transform -translate-x-1/2 w-px bg-black ${
                    isAbove ? "bottom-15 h-16" : "bottom-2 h-16"
                  }`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RoadmapTimeline;
