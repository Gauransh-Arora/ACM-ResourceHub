import React, { useState } from "react";
import CGPA_Input from "../components/CGPA_Input";

const CGPAPage = () => {
  const [selectedYear, setSelectedYear] = useState("Year 1");
  const years = ["Year 1", "Year 2", "Year 3", "Year 4"];

  return (
    <div className="mt-10 mx-4 md:mx-10">
      <div className="flex items-center flex-wrap gap-2">
        <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">
          SGPA
        </span>
        <span className="font-extrabold text-[#15A6DD] text-2xl sm:text-3xl lg:text-4xl">
          Calculator
        </span>
      </div>
      <hr className="my-3 border-t-2 border-[#9AAEBC] w-full" />

      <nav className="mt-4 mb-6 w-full">
        <ul className="flex text-lg font-semibold">
          {years.map((year) => (
            <li
              key={year}
              className={`flex-1 text-center cursor-pointer border border-[#15A6DD] px-4 py-2 transition-colors duration-300 ${
                selectedYear === year
                  ? "bg-[#8FDAF5]"
                  : "bg-white hover:bg-gray-50"
              }`}
              onClick={() => setSelectedYear(year)}
            >
              {year}
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-8">
        <CGPA_Input selectedYear={selectedYear} />
      </div>
    </div>
  );
};

export default CGPAPage;
