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
      <div className="mt-10 mx-4 md:mx-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-4 flex-wrap">
          <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">
            Resources
          </span>
          <span className="font-extrabold text-[#15A6DD] text-2xl sm:text-3xl lg:text-4xl">
            Year 1
          </span>
        </div>

        <div className="relative hidden sm:block w-full sm:w-80 md:w-96">
          <button
            className={`w-full px-4 py-2 text-left bg-[#8FDAF5] flex justify-between items-center  ${
              isOpen
                ? "border-2 border-[#15A6DD]"
                : "border-2 border-transparent"
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

          {isOpen && (
            <div className="absolute top-full left-0 right-0 bg-[#8FDAF5] border-2 border-[#15A6DD] border-t-0 shadow-lg z-20">
              {options.map((option, index) => (
                <div key={index}>
                  <button
                    onClick={() => {
                      setSelectedOption(option);
                      setIsOpen(false);
                    }}
                    className="w-full px-4 py-2 text-left text-[#434343] hover:bg-[#7DCAE5] transition-colors"
                  >
                    {option}
                  </button>
                  {index < options.length - 1 && (
                    <hr className="mx-3 border border-[#15A6DD]" />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="sm:hidden w-full flex justify-end relative">
          <button
            className="flex items-center px-3 py-2 border-2 border-[#15A6DD] bg-[#8FDAF5] shadow-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Filter className="w-5 h-5 text-[#434343]" />
            <span className="ml-2 text-[#434343]">Filter</span>
          </button>

          {isOpen && (
            <div className="absolute top-full right-0 mt-1 w-64 bg-[#8FDAF5] border-2 border-[#15A6DD]  shadow-lg z-20">
              <div className="p-2">
                <div className="text-sm font-medium text-[#434343] mb-2 px-2">
                  Select Branch:
                </div>
                {options.map((option, index) => (
                  <div key={index}>
                    <button
                      onClick={() => {
                        setSelectedOption(option);
                        setIsOpen(false);
                      }}
                      className="w-full px-3 py-2 text-left text-[#434343] hover:bg-[#7DCAE5] transition-colors text-sm"
                    >
                      {option}
                    </button>
                    {index < options.length - 1 && (
                      <hr className="mx-2 my-1 border border-[#15A6DD]" />
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <hr className="my-3 mx-4 md:mx-10 border-t-2 border-[#9AAEBC]" />

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
