import React from "react";

const yearItems = [
  { id: 1, subjects: 10 },
  { id: 2, subjects: 16 },
  { id: 3, subjects: 12 },
  { id: 4, subjects: 18 },
];

function YearPage() {
  return (
    <>
      <div>
        <div className="flex items-center gap-4 flex-wrap">
          <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">
            Select
          </span>
          <span className="font-extrabold text-[#15A6DD] text-2xl sm:text-3xl lg:text-4xl">
            Year
          </span>
        </div>
        <hr className="mt-3 mb-4 border-t-2 border-[#9AAEBC] " />
        <div className="flex flex-col justify-center mx-4 shadow-[0_0_20px_#4d4f4f] sm:shadow-none sm:mx-0  bg-[#D3F3FF]  h-auto py-6 md:py-8 ">
          <div className="flex items-center justify-center text-xl md:text-2xl py-2 md:py-4 px-4">
            <span className="text-[#434343] mr-1">Browse by</span>{" "}
            <span className="font-bold">YEAR</span>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 py-2 md:py-4 px-4">
            {yearItems.map((item) => {
              return (
                <button
                  key={item.id}
                  className="bg-[#15a6dd7a] w-full sm:w-64 md:w-80 lg:w-96 flex flex-col justify-center items-center p-3 cursor-pointer shadow-xl"
                  onClick={() => yearClick(item.id)}
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
      </div>
    </>
  );
}

export default YearPage;
