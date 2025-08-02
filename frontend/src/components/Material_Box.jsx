import React from "react";
import arrow from "../assets/arrow.png";

const Material_Box = ({ name = "Resource Name", items = "no of items" }) => {
  return (
    <div className="border-2 border-[#15A6DD] flex flex-col lg:flex-row lg:items-center  px-4 py-3 gap-4">
      
      
    <div className="flex gap-2 text-xl sm:text-2xl items-baseline">
        <img src= {arrow} alt="arrow" className="w-2 h-auto"/>
  <span>{name}</span>
  <span className="text-[#434343] text-xl">({items})</span>
</div>

      <div className="flex flex-wrap gap-4 text-lg sm:text-xl text-[#434343]">
      </div>
    </div>
  );
};

export default Material_Box;