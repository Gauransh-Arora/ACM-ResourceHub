import React, { useState } from "react";
import Card from "../components/Card";
import { ChevronDown, Filter } from "lucide-react";

const ResourcePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select filter");

  const options = [
    "Computer Science",
    "Electrical and Electronics",
    "Electronics and communication",
    "Chemical",
    "Mechanical",
    "Biotechnology",
  ];

  return (
    <>
      {/* Top Bar with Heading + Filter */}
      <div className="mt-10 mx-4 md:mx-10 flex flex-row justify-between items-center gap-4 flex-wrap">
        {/* Heading */}
        <div className="flex items-center gap-4">
          <span className="text-4xl font-extrabold">Resources</span>
          <span className="font-extrabold text-[#15A6DD] text-4xl">Year 1</span>

          {/* Funnel icon (only on small screens) */}
          <button
            className="sm:hidden flex items-center px-3 py-2 border-2 border-[#15A6DD] bg-[#8FDAF5] rounded-md shadow-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Filter className="w-5 h-5 text-[#434343]" />
          </button>
        </div>

        {/* Full Dropdown (on sm and up) */}
        <div className="relative hidden sm:block w-full sm:w-80 md:w-96">
          <button
            className={`w-full px-4 py-2 text-left z-20 bg-[#8FDAF5] flex justify-between items-center ${
              isOpen ? "border-2 border-[#15A6DD]" : ""
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="text-[#434343]">{selectedOption}</span>
            <ChevronDown
              className={`w-5 h-5 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* Dropdown Options */}
        {isOpen && (
          <div className="absolute top-28 right-4 sm:static z-10 w-[calc(100%-2rem)] sm:w-full bg-[#8FDAF5]">
            {options.map((option, index) => (
              <div key={index}>
                <button
                  onClick={() => {
                    setSelectedOption(option);
                    setIsOpen(false);
                  }}
                  className="w-full px-4 py-2 text-left hover:bg-[#7DCAE5]"
                >
                  {option}
                </button>
                <hr className="mx-3 border border-[#15A6DD]" />
              </div>
            ))}
          </div>
        )}
      </div>

      <hr className="my-3 mx-4 md:mx-10 border-t-2 border-[#9AAEBC]" />

      {/* Cards */}
      <div className="mx-4 md:mx-10 flex flex-col gap-4">
        <Card name="Calculus for engineers" code="UMA023" />
        <Card name="Calculus for engineers 1" code="UMA023" />
        <Card name="Calculus for engineers 2" code="UMA023" />
        <Card name="Calculus for engineers 4" code="UMA023" />
      </div>
    </>
  );
};

export default ResourcePage;
