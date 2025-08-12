import Material_Box from "../components/Material_Box";
import React from "react";
import { useNavigate } from "react-router-dom";

const MaterialPage = () => {
  return (
    <>
      <div className="mt-10 mx-4 md:mx-10 sm:flex-row  sm:items-center gap-4">
        <div className="flex items-center gap-4 flex-wrap">
          <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">
            Year - 1
          </span>
          <span className="font-extrabold text-[#15A6DD] text-2xl sm:text-3xl lg:text-4xl">
            Notes
          </span>
          <span className="font-extrabold text-[#15A6DD] text-2xl sm:text-3xl lg:text-4xl"></span>
        </div>
        <hr className="mt-3 mb-4 border-t-2 border-[#9AAEBC] " />
        <div className="flex flex-wrap gap-4">
          <Material_Box name="Differential Equations" type="PDF"/>
          <Material_Box name="Vectors" type="PPT"/>
          <Material_Box name="Linear Algebra" type="Video"/>
          <Material_Box name="Calculus" type="Doc"/>
          <Material_Box name="Statistics" type="Photo"/>
          <Material_Box name="Discrete Mathematics" type="PDF"/>          
        </div>
      </div>
      <div></div>
    </>
  );
};
export default MaterialPage;
