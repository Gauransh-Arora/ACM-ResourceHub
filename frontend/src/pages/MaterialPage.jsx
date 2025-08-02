import Material_Box from "../components/Material_Box";
import React from "react";
import { useNavigate } from "react-router-dom";

const MaterialPage = () => {
  return (
    <>
      <div className="mt-10 mx-4 md:mx-10 sm:flex-row  sm:items-center gap-4">
        <div className="flex items-center gap-4 flex-wrap">
          <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">
            Year 1 -
          </span>
          <span className="font-extrabold text-[#15A6DD] text-2xl sm:text-3xl lg:text-4xl">
            Physics
          </span>

        </div>
          <hr className="mt-3 mb-4 border-t-2 border-[#9AAEBC] " />
          <div className="flex flex-col gap-4 w-full ">
            <Material_Box name="Tutorial sheets" items="4 sheets" />
            <Material_Box name="PYQs" items=" 3 papers" />
            <Material_Box name="Lecture notes" items="4 modules" />
            <Material_Box name="Video Lectures" items="14 playlists" />
          </div>
      </div>
    </>
  );
};
export default MaterialPage;
