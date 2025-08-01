import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();
  const yearItems = [
    { id: 1, subjects: 10 },
    { id: 2, subjects: 16 },
    { id: 3, subjects: 12 },
    { id: 4, subjects: 18 },
  ];

  const handleTimetableClick = () => {
    window.open("https://timetable.acmthapar.in/");
  };

  return (
    <div className="bg-[url('./src/assets/bg_image.png')]">
      <div className="flex flex-col justify-center items-center h-64 md:h-80 lg:h-96 px-4">
        <h1 className="font-bold text-5xl sm:text-5xl md:text-6xl lg:text-7xl text-center">
          <span className="">RESOURCE</span>{" "}
          <span className="text-[#2041B5]">HUB</span>
        </h1>
        <span className="py-2 md:py-4 text-lg sm:text-xl md:text-2xl text-center">
          For all your Academic Needs
        </span>
      </div>
      <div className="flex flex-col justify-center mx-4 shadow-[0_0_20px_#4d4f4f] sm:shadow-none sm:mx-0  bg-[#D3F3FF]  h-auto py-6 md:py-8">
        <div className="flex items-center justify-center text-xl md:text-2xl py-2 md:py-4 px-4">
          <span className="text-[#434343]">Browse by</span>{" "}
          <span className="font-bold">YEAR</span>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 py-2 md:py-4 px-4">
          {yearItems.map((item) => {
            return (
              <button
                key={item.id}
                className="bg-[#15a6dd7a] w-full sm:w-64 md:w-80 lg:w-96 flex flex-col justify-center items-center p-3 cursor-pointer shadow-xl"
              >
                <p className="text-xl md:text-2xl">Year {item.id}</p>
                <p className="text-lg md:text-xl text-[#434343]">
                  {item.subjects} Subjects
                </p>
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-screen justify-center items-center mt-6 md:mt-10 gap-5 max-w-screen px-4">
        <div className="border-3 bg-white border-[#15A6DD] w-full sm:w-96 md:w-3xl p-4 md:p-5 h-auto min-h-40 md:min-h-45 flex flex-col">
          <p className="text-xl md:text-2xl font-bold">CGPA Calculator</p>
          <p className="text-lg md:text-xl text-[#9aaebc] mb-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum fugit
            sed ex, est rerum alias!
          </p>
          <div className="flex justify-end mt-auto">
            <button className="bg-[#85DAF5] w-40 sm:w-48 md:w-50 h-8 md:h-9 text-lg md:text-xl cursor-pointer">
              Calculate CGPA
            </button>
          </div>
        </div>
        <div className="border-3 bg-white border-[#15A6DD] w-full sm:w-96 md:w-3xl p-4 md:p-5 h-auto min-h-40 md:min-h-45 flex flex-col">
          <p className="text-xl md:text-2xl font-bold">Time Table</p>
          <p className="text-lg md:text-xl text-[#9aaebc] mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
            maiores veritatis nesciunt, aut iure maxime!
          </p>
          <div className="flex justify-end mt-auto">
            <button
              className="bg-[#85DAF5] w-40 sm:w-48 md:w-50 h-8 md:h-9 text-lg md:text-xl cursor-pointer"
              onClick={handleTimetableClick}
            >
              Get Time Table
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
