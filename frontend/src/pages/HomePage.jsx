import React from "react";

const HomePage = () => {
  const yearItems = [
    { id: 1, subjects: 10 },
    { id: 2, subjects: 16 },
    { id: 3, subjects: 12 },
    { id: 4, subjects: 18 },
  ];
  return (
    <>
      <div className="flex flex-col justify-center items-center h-96">
        <h1 className="font-bold  text-7xl">
          <span className="">RESOURCE</span>{" "}
          <span className="text-[#2041B5]">HUB</span>
        </h1>
        <span className="py-4 text-2xl">For all your Academic Needs</span>
      </div>
      <div className="flex flex-col justify-center w-screen bg-[#15A6DD] h-50">
        <div className="flex items-center justify-center text-2xl py-4">
          <span className="text-[#434343]">Browse by</span>{" "}
          <span className="font-bold">YEAR</span>
        </div>
        <div className="flex justify-center items-center gap-3 py-4">
          {yearItems.map((item) => {
            return (
              <button
                key={item.id}
                className="bg-[#8FDAF5] w-96 flex flex-col justify-center items-center p-3 cursor-pointer"
              >
                <p className="text-2xl">Year {item.id}</p>
                <p className="text-xl text-[#434343]">
                  {item.subjects} Subjects
                </p>
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex w-screen justify-center items-center mt-10 gap-5">
        <div className="border-3 border-[#15A6DD] w-3xl p-5 h-45 flex flex-col">
          <p className="text-2xl font-bold">CGPA Calculator</p>
          <p className="text-xl text-[#9aaebc]">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum fugit
            sed ex, est rerum alias!
          </p>
          <div className="flex justify-end">
            <button className="bg-[#85DAF5] w-50 h-9 text-xl cursor-pointer mt-4">Calculate CGPA</button>
          </div>
        </div>
        <div className="border-3 border-[#15A6DD] w-3xl p-5 h-45 flex flex-col">
            <p className="text-2xl font-bold">
                Time Table
            </p>
            <p className="text-xl text-[#9aaebc]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta maiores veritatis nesciunt, aut iure maxime!
            </p>
            <div className="flex justify-end">
                <button className="bg-[#85DAF5] w-50 h-9 text-xl cursor-pointer mt-4">Get Time Table</button>
            </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
