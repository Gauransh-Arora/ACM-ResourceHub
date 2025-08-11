import React, { useState } from "react";
import CGPA_Input from "../components/CGPA_Input";
import SGPA_Input from "../components/SGPA_Input";

const GradePage = () => {
  const [activeCalc, setActiveCalc] = useState("sgpa");

  return (
    <div className="mt-10 mx-4 md:mx-10">
   
      <div className="flex items-center justify-between flex-wrap gap-2">
    
        <button
          onClick={() => setActiveCalc("sgpa")}
          className={`flex items-center gap-1 text-xl sm:text-3xl lg:text-4xl font-extrabold transition-colors ${
            activeCalc === "sgpa"
              ? "text-[#15A6DD]"
              : "text-gray-600 hover:text-[#15A6DD]"
          }`}
        >
          SGPA Calculator
        </button>

        <button
          onClick={() => setActiveCalc("cgpa")}
          className={`flex items-center gap-1 text-xl sm:text-3xl lg:text-4xl font-extrabold transition-colors ${
            activeCalc === "cgpa"
              ? "text-[#15A6DD]"
              : "text-gray-600 hover:text-[#15A6DD]"
          }`}
        >
          CGPA Calculator
        </button>
      </div>

      <hr className="my-3 border-t-2 border-[#9AAEBC] w-full" />

      <div className="mt-0">
        {activeCalc === "sgpa" ? <SGPA_Input /> : <CGPA_Input />}
      </div>
    </div>
  );
};

export default GradePage;
