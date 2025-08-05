import React, { useState } from "react";
import Card from "../components/Card";
import { ChevronDown, Filter } from "lucide-react";
import { useSearchParams, useParams } from "react-router-dom";
import data1 from "../data/year_1.json";

const ResourcePage = () => {
  const { year } = useParams();
  const [searchParams] = useSearchParams();

  const defaultBranch = searchParams.get("branch") || (year === "1" ? "Pool A" : "Computer Engineering");

  const [selectedOption, setSelectedOption] = useState(defaultBranch);
  const [isOpen, setIsOpen] = useState(false);

  const yearOptions = {
    1: ["Pool A", "Pool B", "CSBS", "BioTechnology", "Data Science and AI"],
    2: [
      "Computer Engineering",
    "Computer Science & Engineering (Patiala Campus)",
    "Computer Science and Business systems",
    "Artificial Intelligence and Machine Learning",
    "Electrical and Computer Engineering",
    "Electronics & Communication Engineering",
    "Electronics and Computer Engineering",
    "Robotics and Artificial Intelligence",
    "Electronics Engineering (VLSI Design and Technology)",
    "Electronics (Instrumentation & Control) Engineering",
    "Mechanical Engineering",
    "Mechatronics Engineering",
    "Chemical Engineering",
    "Civil Engineering",
    "Civil Engineering with Computer Applications",
    "Electrical Engineering",
    "Biomedical Engineering",
    "Biotechnology",
    ],
    3: [
      "Computer Engineering",
    "Computer Science & Engineering (Patiala Campus)",
    "Computer Science and Business systems",
    "Artificial Intelligence and Machine Learning",
    "Electrical and Computer Engineering",
    "Electronics & Communication Engineering",
    "Electronics and Computer Engineering",
    "Robotics and Artificial Intelligence",
    "Electronics Engineering (VLSI Design and Technology)",
    "Electronics (Instrumentation & Control) Engineering",
    "Mechanical Engineering",
    "Mechatronics Engineering",
    "Chemical Engineering",
    "Civil Engineering",
    "Civil Engineering with Computer Applications",
    "Electrical Engineering",
    "Biomedical Engineering",
    "Biotechnology",
    ],
    4: [
      "Computer Engineering",
    "Computer Science & Engineering (Patiala Campus)",
    "Computer Science and Business systems",
    "Artificial Intelligence and Machine Learning",
    "Electrical and Computer Engineering",
    "Electronics & Communication Engineering",
    "Electronics and Computer Engineering",
    "Robotics and Artificial Intelligence",
    "Electronics Engineering (VLSI Design and Technology)",
    "Electronics (Instrumentation & Control) Engineering",
    "Mechanical Engineering",
    "Mechatronics Engineering",
    "Chemical Engineering",
    "Civil Engineering",
    "Civil Engineering with Computer Applications",
    "Electrical Engineering",
    "Biomedical Engineering",
    "Biotechnology",
    ],
  };

  const options = yearOptions[year] || [];

  const branchMap = {
    "Pool A": data1.Pool_A,
    "Pool B": data1.Pool_B,
    "CSBS": data1.CSBS,
    "BioTechnology": data1.BioTechnology,
    "Data Science and AI": data1.DSAI,
    "Computer Science": data1.Computer_Science,
    "Electrical and Electronics": data1.Electrical_and_Electronics,
    "Electronics and communication": data1.Electronics_and_communication,
    "Chemical": data1.Chemical,
    "Mechanical": data1.Mechanical,
    "Biotechnology": data1.Biotechnology,
  };

  const branch = branchMap[selectedOption] || data1.Pool_A;

  return (
    <>
      <div className="mt-10 mx-4 md:mx-10 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">
            Resources
          </span>
          <span className="font-extrabold text-[#15A6DD] text-2xl sm:text-3xl lg:text-4xl">
            Year {year}
          </span>
        </div>

        <div className="relative hidden sm:block w-full sm:w-80 md:w-96">
          <button
            className={`w-full px-4 py-2 text-left bg-[#8FDAF5] flex justify-between items-center ${
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
                    className="w-full px-4 py-2 text-left text-[#434343] hover:bg-[#7DCAE5] transition-colors cursor-pointer"
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
            className="flex gap-4 items-center px-5 py-2 border-2 border-[#15A6DD] bg-[#8FDAF5] shadow-md"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="ml-2 text-[#434343]">{selectedOption}</span>
            <ChevronDown
              className={`w-5 h-5 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />{" "}
          </button>

          {isOpen && (
            <div className="absolute top-full right-0 mt-1 w-64 bg-[#8FDAF5] border-2 border-[#15A6DD] shadow-lg z-20">
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
                      className="w-full px-3 py-2 text-left text-[#434343] hover:bg-[#7DCAE5] transition-colors text-sm cursor-pointer"
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

      <div className="mx-4 mb-5 md:mx-10 flex flex-col gap-4">
        {branch?.map((subject, index) => (
          <Card
            key={index}
            name={subject.subject_name}
            code={subject.subject_code}
            resources={data1[subject.subject_name]}
            onClick={() => {
              
            }}
          />
        ))}
      </div>
    </>
  );
};

export default ResourcePage;
