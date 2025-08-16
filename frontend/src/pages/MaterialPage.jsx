import Material_Box from "../components/Material_Box";
import React, { useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import data from "../data/resources_hierarchical.json";

const MaterialPage = () => {
  const { year } = useParams();
  const [searchParams] = useSearchParams();
  const [selectedResource, setSelectedResource] = useState(null);
  const [iframeLoaded, setIframeLoaded] = useState(false);

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
      <div className="my-10 mx-4 md:mx-10 sm:flex-row sm:items-center gap-4">
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
        </div>
        <hr className="mt-3 mb-4 border-t-2 border-[#9AAEBC]" />

        <div className="md:grid md:grid-cols-3 gap-4 md:items-baseline flex flex-col w-full">
          {resources.map((resource, index) => (
            <div
              key={index}
              onClick={() => {
                setSelectedResource(resource);
                setIframeLoaded(false); // Reset loader state
              }}
              className="cursor-pointer"
            >
              <Material_Box
                name={resource.filename}
                type={detectFileType(resource.filename)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Full-screen overlay */}
      {selectedResource && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-80 flex flex-col items-center">
          {/* Loader (only visible before iframe loads) */}
          {!iframeLoaded && (
            <div className="flex flex-col justify-center items-center flex-grow text-white">
              <div className="loader border-4 border-white border-t-transparent rounded-full w-12 h-12 animate-spin"></div>
              <p className="mt-4 text-lg">Loading document...</p>
            </div>
          )}

          {/* Close button (only after iframe has loaded) */}
          {iframeLoaded && (
            <button
              onClick={() => setSelectedResource(null)} 
              className="absolute top-4 right-6 text-white text-3xl font-bold z-50"
            >
              ✕
            </button>
          )}

          {/* Iframe */}
          <iframe
            src={toPreviewLink(selectedResource.url)}
            className={`flex-grow border-0 w-full ${iframeLoaded ? "block" : "hidden"}`}
            allow="autoplay"
            title={selectedResource.filename}
            onLoad={() => setIframeLoaded(true)}
          ></iframe>
        </div>
      )}
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

const toPreviewLink = (viewUrl) => {
  const match = viewUrl.match(/\/d\/(.*)\/view/);
  if (match && match[1]) {
    return `https://drive.google.com/file/d/${match[1]}/preview`;
  }
  return viewUrl;
};

export default MaterialPage;
