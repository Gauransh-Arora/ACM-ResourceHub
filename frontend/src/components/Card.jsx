import React from "react";

const Card = ({ name = "Subject Name", code = "Subject Code" }) => {
  return (
    <>
      <div className="border-2 border-[#15A6DD] flex items-center gap-96">
        <div className="flex flex-col mx-5 my-2 text-2xl gap-2">
          <span>{name}</span>
          <span className="text-[#434343]">({code})</span>
        </div>
        <div className="flex gap-4 text-xl text-[#434343]">
          <span>PYQs</span>
          <span>Tutorial Sheets</span>
          <span>YouTube channels</span>
          <span>Lab Manual</span>
          <span>Lecture Notes</span>
          <span>Books</span>
        </div>
      </div>
    </>
  );
};

export default Card;
