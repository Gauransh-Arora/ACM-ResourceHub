import Material_Box from "../components/Material_Box";
import React from "react";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import data from "../data/resources_hierarchical.json";

const MaterialPage = () => {
  const { year } = useParams();
  const [searchParams] = useSearchParams();

  const branch = searchParams.get("branch")?.trim();
  const subject = searchParams.get("subject")?.trim();
  const type = searchParams.get("type")?.trim();

  const yearKey = Object.keys(data).find(
    (key) => key.trim() === `Year ${year}`
  );

  const resources =
    data[yearKey]?.[branch]?.[subject]?.[type] || [];

  return (
    <>
      <div className="mt-10 mx-4 md:mx-10 sm:flex-row  sm:items-center gap-4">
        <div className="flex items-center gap-4 flex-wrap">
          <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">
            Year - {year}
          </span>
          <span className="text-2xl sm:text-3xl lg:text-4xl font-extrabold">
            {subject}
          </span>
          <span className="font-extrabold text-[#15A6DD] text-2xl sm:text-3xl lg:text-4xl">
            {type}
          </span>
          <span className="font-extrabold text-[#15A6DD] text-2xl sm:text-3xl lg:text-4xl"></span>
        </div>
        <hr className="mt-3 mb-4 border-t-2 border-[#9AAEBC] " />
        <div className="flex flex-wrap gap-4">
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Material_Box
                name={resource.filename}
                type={detectFileType(resource.filename)}
              />
            </a>
          ))}
        </div>
      </div>
      <div></div>
    </>
  );
};

const detectFileType = (filename) => {
  const ext = filename.split(".").pop().toLowerCase();
  if (ext === "pdf") return "PDF";
  if (["ppt", "pptx", "ppsx"].includes(ext)) return "PPT";
  if (["jpg", "jpeg", "png", "gif", "bmp", "webp"].includes(ext))
    return "Photo";
  if (["mp4", "mov", "avi", "mkv"].includes(ext)) return "Video";
  if (["doc", "docx"].includes(ext)) return "Doc";
  return "PDF";
};

export default MaterialPage;
