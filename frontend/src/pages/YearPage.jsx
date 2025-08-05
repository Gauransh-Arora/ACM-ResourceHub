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
      <div className="mt-10 mx-4 md:mx-10">
        <div className="flex items-center flex-wrap">
          <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">
            Select
          </span>
          <span className="font-extrabold text-[#15A6DD] text-2xl sm:text-3xl lg:text-4xl">
            Year
          </span>
        </div>
        <hr className="mt-3 mb-4 border-t-2 border-[#9AAEBC] " />
        <div>
          
        </div>
      </div>
    </>
  );
}

export default YearPage;
