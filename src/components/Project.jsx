import React from "react";
import { Link } from "react-router-dom";
import { mernStack, backend, frontend } from "../projectData/ProjectData";

const Project = () => {
  return (
    <div name="experience" className=" w-full py-20 bg-[#2e424d] text-gray-300">
      <div className="max-w-[1000px] mx-auto justify-center">
        <div className="text-center mb-10">
          <h1 className="text-2xl font-semibold inline border-b-4 border-[#98dad9]">
            Projects
          </h1>
        </div>

        {/* frontend title  */}

        <div className="text-center my-5">
          <h1 className="text-center my-10 font-bold inline text-[#98dad9]">
            Frontend
          </h1>
        </div>
        <div className="p-3 lg:p-0 grid grid-cols-2 md:grid-cols-4 gap-2 mb-10 justify-center mx-auto">
          {frontend.map((d) => (
            <div
              key={d.id}
              className="shadow-2xl shadow-[#040c16] rounded-md overflow-hidden hover:scale-105 duration-500"
            >
              <h1 className="text-center font-semibold">{d.name}</h1>
              <img className="h-44 w-full rounded-md" src={d.img} alt="img" />
              <a href={d.dLink} target="_blank" rel="noopener noreferrer">
                <button className="w-full bg-[#344853] my-1 py-2 text-sm font-semibold hover:font-bold">
                  Demo
                </button>
              </a>
              <a href={d.cLink} target="_blank" rel="noopener noreferrer">
                <button className="w-full bg-[#344853] py-2 text-sm font-semibold hover:font-bold">
                  Code
                </button>
              </a>
            </div>
          ))}
        </div>

        {/* backend   */}
        <div className="text-center my-5">
          <h1 className="text-center my-10 font-bold inline text-[#98dad9]">
            Backend
          </h1>
        </div>
        <div className="w-full p-3 lg:p-0 grid grid-cols-2 md:grid-cols-4  justify-center gap-2 mb-10">
          {backend.map((d) => (
            <div
              key={d.id}
              className=" shadow-2xl shadow-[#040c16] rounded-md overflow-hidden hover:scale-105 duration-500 "
            >
              <h1 className="text-center font-semibold">{d.name}</h1>
              <img className="h-44 w-full rounded-md" src={d.img} alt="img" />

              <a href={d.cLink} target="_blank">
                <button className="w-full   bg-[#344853] py-2  text-sm font-semibold hover:font-bold">
                  Code
                </button>
              </a>
            </div>
          ))}
        </div>

        {/* mern stack  */}
        <div className="text-center my-5">
          <h1 className="text-center my-10 font-bold text-[#98dad9]">
            MERN Stack
          </h1>
        </div>
        <div className="w-full p-3 lg:p-0 grid grid-cols-2 md:grid-cols-4  justify-center gap-2">
          {mernStack.map((d) => (
            <div
              key={d.id}
              className=" shadow-2xl shadow-[#040c16] rounded-md overflow-hidden hover:scale-105 duration-500 "
            >
              <h1 className="text-center font-semibold">{d.name}</h1>
              <Link to={`/pdetails/${d.id}`}>
                {" "}
                <img className="h-44 w-full rounded-md" src={d.img} alt="img" />
              </Link>
              <a href={d.dLink} target="_blank">
                <button className="w-full   bg-[#344853] my-1 py-2 text-sm font-semibold hover:font-bold">
                  Demo
                </button>
              </a>
              <a href={d.cLink} target="_blank">
                <button className="w-full   bg-[#344853] py-2  text-sm font-semibold hover:font-bold">
                  Code
                </button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
