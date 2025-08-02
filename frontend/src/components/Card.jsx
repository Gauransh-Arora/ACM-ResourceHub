import React from "react";

const Card = ({
  name = "Subject Name",
  code = "Subject Code",
  resources = {},
}) => {
  return (
    <div className="border-2 border-[#15A6DD] flex flex-col lg:flex-row lg:items-center justify-between px-4 py-3 gap-4">
      <div className="flex flex-col text-xl sm:text-2xl">
        <span>{name}</span>
        <span className="text-[#434343]">({code})</span>
      </div>
      <div className="flex flex-wrap gap-5 text-lg sm:text-xl text-[#434343]">
        {Object.entries(resources).map(([key, items]) => {
          if (items.length > 0) {
            return (
              <a key={key} href="#">
                {key}
              </a>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Card;
