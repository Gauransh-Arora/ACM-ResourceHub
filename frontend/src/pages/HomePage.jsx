import React from "react";
import { useNavigate } from "react-router-dom";
import Contributor from "../components/Contributor";
import Snorlax from "../assets/143.png";
import instagram from "../assets/instagram.png";
import linkedinUrl from "../assets/linkedin2.svg"
import github from "../assets/github.png";
import logo from "../assets/logo_ACM_Footer.png";
import diya from "../assets/diya.png"
import vansh from "../assets/vansh.jpg"

const HomePage = () => {
  const navigate = useNavigate();
  const yearItems = [
    { id: 1, subjects: 10 },
    { id: 2, subjects: 16 },
    { id: 3, subjects: 12 },
    { id: 4, subjects: 18 },
  ];

  const handleTimetableClick = () => {
    window.open("https://timetable.acmthapar.in/");
  };

  const handleCGPAClick = () => {
    navigate("/cgpa");
  };

  const handleYearClick = (year) => {
  const defaultBranch = year === 1 ? "Pool A" : "Computer Engineering";
  navigate(`/resources/${year}?branch=${encodeURIComponent(defaultBranch)}`);
};


  return (
    <div className=" bg-cover bg-no-repeat  m-0">
      <div className="flex flex-col justify-center items-center h-64 md:h-80 lg:h-96 px-4">
        <h1 className="font-bold text-5xl sm:text-5xl md:text-6xl lg:text-7xl text-center">
          <span className="">RESOURCE</span>{" "}
          <span className="text-[#15a6dd]">HUB</span>
        </h1>
        <span className="py-2 md:py-4 text-lg sm:text-xl md:text-2xl text-center">
          For all your Academic Needs
        </span>
      </div>
      <div className="flex flex-col justify-center mx-4 shadow-[0_0_20px_#4d4f4f] sm:shadow-none sm:mx-0  bg-[#D3F3FF]  h-auto py-6 md:py-8">
        <div className="flex items-center justify-center text-xl md:text-2xl py-2 md:py-4 px-4">
          <span className="text-[#434343] mr-1">Browse by</span>{" "}
          <span className="font-bold">YEAR</span>
        </div>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-6 py-2 md:py-4 px-4">
          {yearItems.map((item) => {
            return (
              <button
                key={item.id}
                className="bg-[#15a6dd7a] w-full sm:w-64 md:w-80 lg:w-96 flex flex-col justify-center items-center p-3 cursor-pointer shadow-xl hover:bg-[#15a6dd90] transition-colors duration-300"
                onClick={() => handleYearClick(item.id)}
              >
                <p className="text-xl md:text-2xl">Year {item.id}</p>
                <p className="text-lg md:text-xl text-[#434343]">
                  {item.subjects} Subjects
                </p>
              </button>
            );
          })}
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-screen justify-center items-center mt-6 md:mt-10 gap-5 max-w-screen px-4">
        <div className="border-3 bg-white border-[#15A6DD] w-full sm:w-96 md:w-3xl p-4 md:p-5 h-auto min-h-40 md:min-h-45 flex flex-col">
          <p className="text-xl md:text-2xl font-bold">CGPA Calculator</p>
          <p className="text-lg md:text-xl text-[#9aaebc] mb-4">
            Calculate your SGPA and CGPA easily with our intuitive calculator. Track your academic progress semester by semester.
          </p>
          <div className="flex justify-end mt-auto">
            <button 
              className="bg-[#85DAF5] w-40 sm:w-48 md:w-50 h-8 md:h-9 text-lg md:text-xl cursor-pointer hover:bg-[#7DD3F0] transition-colors duration-300"
              onClick={handleCGPAClick}
            >
              Calculate CGPA
            </button>
          </div>
        </div>
        <div className="border-3 bg-white border-[#15A6DD] w-full sm:w-96 md:w-3xl p-4 md:p-5 h-auto min-h-40 md:min-h-45 flex flex-col">
          <p className="text-xl md:text-2xl font-bold">Time Table</p>
          <p className="text-lg md:text-xl text-[#9aaebc] mb-4">
            Access your complete class schedule and stay organized with our comprehensive timetable system.
          </p>
          <div className="flex justify-end mt-auto">
            <button
              className="bg-[#85DAF5] w-40 sm:w-48 md:w-50 h-8 md:h-9 text-lg md:text-xl cursor-pointer hover:bg-[#7DD3F0] transition-colors duration-300"
              onClick={handleTimetableClick}
            >
              Get Time Table
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center gap-[1rem] mt-10 ">
        <div className="text-3xl font-extrabold flex justify-center">
          {" "}
          Contributors{" "}
        </div>
        <div className="flex flex-wrap justify-center gap-[7.7rem] mt-10 mb-10">
          <Contributor
            img_url={Snorlax}
            name="Gaurnash Arora"
            linkedinUrl="https://www.linkedin.com/in/Snorlax-arora-4ab83a330/"
            githubUrl="https://github.com/Gauransh-Arora"
          />
          <Contributor
            img_url={vansh}
            name="Vansh Wadhwa"
            instaUrl="https://www.instagram.com/vanshwadhwa_24/"
            linkedinUrl="https://www.linkedin.com/in/vansh-wadhwa-/"
            githubUrl="https://github.com/vanshwadhwa24"
          />
          <Contributor
            img_url={diya}
            name="Diya"
            instaUrl="www.instagram.com"
            linkedinUrl="https://www.linkedin.com/in/Snorlax-arora-4ab83a330/"
            githubUrl="https://github.com/Snorlax-Arora"
          />
          <Contributor
            img_url={Snorlax}
            name="Snorlax"
            linkedinUrl="https://www.linkedin.com/in/Snorlax-arora-4ab83a330/"
            githubUrl="https://github.com/Snorlax-Arora"
          />
        </div>
      </div>

      <div className="bg-[#D3f3ff] p-6 text-center md:shadow-none md:w-full md:ml-0 md:mb-0 sm:text-left">
        <div className="flex flex-col md:flex-row justify-between w-full gap-6">
          <div className="flex flex-col max-w-[32rem]">
            <div className="text-3xl font-extrabold">
              ACM Thapar Student Chapter
            </div>
            <div className="text-lg text-gray-400 mt-2">
              A vibrant community of tech enthusiasts, dedicated to exploring,
              tackling and connecting with all things tech.
            </div>
            <div className="flex flex-row gap-4 mt-4 justify-center sm:justify-start" >
             <a href="https://www.instagram.com/acmthapar/">
               <img src={instagram} alt="instagram" className="w-6 h-6" />
              </a>
             <a href="https://www.linkedin.com/company/thapar-acm-student-chapter/"> <img src={linkedinUrl} alt="linkedin" className="w-6 h-6 " /></a>
             <a href="https://github.com/ACM-Thapar"><img src={github} alt="github" className="w-6 h-6" /></a>
            </div>
          </div>

          <div className=" md:mt-5 flex justify-center md:justify-end">
           <a href="https://acmwebsite.vercel.app/">
           <img
              src={logo}
              alt="ACM Thapar"
              className="w-[150px] md:w-[350px] h-auto"
              />
              </a> 
          </div>
        </div>

        <div className="text-center text-gray-400 mt-6">
          Made with 💙 By ACM Thapar Team
        </div>
      </div>
    </div>
  );
};

export default HomePage;