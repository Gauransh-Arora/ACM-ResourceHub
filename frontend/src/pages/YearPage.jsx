import React from "react";
import { useNavigate } from "react-router-dom";

const yearItems = [
  { id: 1, branches: 10 },
  { id: 2, branches: 18 },
  { id: 3, branches: 18 },
  { id: 4, branches: 18 },
];

const branches = {
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
    "Chemical Engineering",
    "Civil Engineering",
    "Civil Engineering with Computer Applications",
    "Electrical Engineering",
    "Biomedical Engineering",
    "Biotechnology",
  ],
};

function YearPage() {
  const navigate = useNavigate();

  const handleYearClick = (year) => {
    navigate(`/resources/${year}`);
  };

  const handleBranchClick = (year,branch) => {
  navigate(`/resources/${year}?branch=${encodeURIComponent(branch)}`);
};


  return (
    <div className="mt-10 mx-4 md:mx-10">
      <div className="flex items-center flex-wrap gap-2">
        <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">
          Select
        </span>
        <span className="font-extrabold text-[#15A6DD] text-2xl sm:text-3xl lg:text-4xl">
          Year
        </span>
      </div>
      <hr className="mt-3 mb-4 border-t-2 border-[#9AAEBC] w-full" />
      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {yearItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleYearClick(item.id)}
              className="bg-white p-6 shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer border border-gray-200 hover:border-[#15A6DD]"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-extrabold mb-2 text-[#434343]">
                  Year {item.id}
                </h3>
                <p className="text-[#15A6DD] font-semibold">
                  Branches: {item.branches}
                </p>
              </div>

              <div>
                <h4 className="text-lg font-semibold mb-3 text-gray-800">
                  Available Branches:
                </h4>
                <ul className="space-y-2 max-h-48 overflow-y-auto">
                  {branches[item.id]?.map((branch, index) => (
                    <li
                      key={index}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleBranchClick(item.id, branch);
                      }}
                      className="text-sm text-gray-700 bg-gray-50 px-3 py-2 rounded-md hover:bg-[#8FDAF5] hover:text-[#15A6DD] transition-colors duration-200"
                    >
                      • {branch}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default YearPage;
