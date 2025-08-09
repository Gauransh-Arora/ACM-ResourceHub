import React from "react";
import notfound from "../assets/notfound.svg";
function Notfound() {
  return (
    <>
      <div className="flex justify-center  items-center">
        <img src={notfound} alt="notfound" className="w-90 h-140" />
      </div>
      <div className=" text-[#15a6dd] md:text-3xl font-extrabold flex justify-center ">
        We’re running a little late — but we’ll be there soon
      </div>
      <div className="mt-5 flex justify-center flex-col md:flex-row">
      <span className="text-[#15A6DD] text-center ">Got what we’re missing? Share it and help us deliver to everyone.</span>
      <button className="bg-[#15A6dd] text-white font-bold px-2 rounded-sm md:mx-1 md:my-0 my-4"><a href="https://forms.gle/Xb5qtA6gNRbCu5b77">Contribute here</a></button>
      </div>
    </>
  );
}

export default Notfound;
