import React, { useState } from "react";
import CGPA_Input from "../components/CGPA_Input";



const CGPAPage = () => {
  const [selectedYear, setSelectedYear] = useState("Year 1");
  const years = ["Year 1", "Year 2", "Year 3", "Year 4"];
  return (
    <div className="mt-10 mx-4 md:mx-10">
      <div className="flex items-center flex-wrap gap-2">
        <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">
          CGPA
        </span>
        <span className="font-extrabold text-[#15A6DD] text-2xl sm:text-3xl lg:text-4xl">
          Calculator
        </span>
      </div>
      <hr className="my-3 border-t-2 border-[#9AAEBC] w-full" />
      <div className="mt-8">
       <CGPA_Input/>
      </div>
      
    </div>
  );
};

export default CGPAPage;
