import React, { useState } from "react";
import Card from "../components/Card";
import { ChevronDown } from "lucide-react";

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
      <div className="mt-10 mx-10 flex justify-between">
        <div>
          <span className="text-4xl font-extrabold">Resources</span>{" "}
          <span className="font-extrabold text-[#15A6DD] text-4xl">Year 1</span>
        </div>
        <div className="relative">
          <button
            className={`w-96 px-4 py-2 text-left z-20 bg-[#8FDAF5] flex justify-between items-center ${isOpen ? 'border-2 border-[#15A6DD]' : ''}`}
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
            <div className="absolute z-10 w-full bg-[#8FDAF5]">
              {options.map((option, index) => (
                <>
                  <button
                    key={index}
                    onClick={() => {
                      setSelectedOption(option);
                      setIsOpen(false);
                    }}
                    className="w-full px-4 py-2 text-left bg-[#8FDAF5] hover:bg-[#7DCAE5]"
                  >
                    {option}
                  </button>
                  <hr className="mx-3 border border-[#15A6DD]"/>
                </>
              ))}
            </div>
          )}
        </div>
      </div>
      <hr className="my-3 mx-10 border-t-2 border-[#9AAEBC]" />
      <div className="mx-10 flex flex-col gap-4">
        <Card name="Calculus for engineers" code="UMA023"></Card>
        <Card name="Calculus for engineers 1" code="UMA023"></Card>
        <Card name="Calculus for engineers 2" code="UMA023"></Card>
        <Card name="Calculus for engineers 4" code="UMA023"></Card>
      </div>
    </>
  );
};

export default ResourcePage;
