import React from "react";
import {useNavigate, useParams , useSearchParams} from "react-router-dom";

const Card = ({
  name = "Subject Name",
  code = "Subject Code",
  resources = {},
}) => {

  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const {year} = useParams();
  const branch = searchParams.get('branch');

  const handleClick = (type) => {
    navigate(`/material/${year}?branch=${encodeURIComponent(branch)}&subject=${encodeURIComponent(name)}&type=${encodeURIComponent(type)}`)
  };

  return (
    <div className="border-2 border-[#15A6DD] flex flex-col lg:flex-row lg:items-center justify-between px-4 py-3 gap-4 cursor-pointer hover:shadow-lg transition-shadow duration-200">
      <div className="flex flex-col text-xl sm:text-2xl">
        <span>{name}</span>
        <span className="text-[#434343]">({code})</span>
      </div>
      <div className="flex flex-wrap gap-5 text-lg sm:text-xl text-[#434343]">
        {Object.entries(resources).map(([key, items]) => {
          if (items.length > 0) {
            return (
              <span key={key} className="hover:underline" onClick={() => {handleClick(`${key}`)}}>{key}</span>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Card;
