import React from "react";
import ecom from "../assets/project/ecommerce.png";
import spog from "../assets/project/spogmai.png";
import youtube from "../assets/project/youtube.jpg";
import insta from "../assets/project/instagram.jpg";
import finance from "../assets/project/finance.jpg";

const Project = () => {
  const mernStack = [
    {
      id: 1,
      img: spog,
      dLink: "https://spogmai-foundation.vercel.app/",
      cLink: "https://github.com/wasimhaider55/spogmaiFoundation.git",
    },

    {
      id: 2,
      img: ecom,
      dLink: "https://e-commerce-frontend-eosin-delta.vercel.app/",
      cLink: "https://github.com/AbduRazaq-23/E-Commerce_Frontend",
    },
  ];
  const frontend = [
    {
      id: 1,
      img: spog,
      dLink: "https://spogmai-foundation.vercel.app/",
      cLink: "https://github.com/wasimhaider55/spogmaiFoundation.git",
    },
    {
      id: 2,
      img: ecom,
      dLink: "https://e-commerce-frontend-eosin-delta.vercel.app/",
      cLink: "",
    },
    {
      id: 3,
      img: ecom,
      dLink: "https://e-commerce-frontend-eosin-delta.vercel.app/",
      cLink: "",
    },
    {
      id: 4,
      img: ecom,
      dLink: "https://e-commerce-frontend-eosin-delta.vercel.app/",
      cLink: "https://github.com/AbduRazaq-23/E-Commerce_Frontend",
    },
  ];
  const backend = [
    {
      id: 1,
      img: youtube,
      dLink: "https://github.com/AbduRazaq-23/YouTubeBackend",
      cLink: "https://github.com/AbduRazaq-23/YouTubeBackend",
    },
    {
      id: 2,
      img: insta,
      dLink: "https://github.com/AbduRazaq-23/InstagramBackend",
      cLink: "https://github.com/AbduRazaq-23/InstagramBackend",
    },
    {
      id: 3,
      img: finance,
      dLink: "https://github.com/AbduRazaq-23/personalFinanceTracker",
      cLink: "https://github.com/AbduRazaq-23/personalFinanceTracker",
    },
  ];

  return (
    <div name="experience" className=" w-full py-20 bg-[#2e424d] text-gray-300">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-2xl font-semibold inline border-b-4 border-pink-600">
            Projects
          </h1>
        </div>
        {/* ///////////////////////////// */}
        {/* frontend title  */}
        <div className="text-center my-5">
          <h1 className="text-center my-10 font-semibold inline border-b-2 border-pink-600">
            Frontend
          </h1>
        </div>
        {/* frontend project  */}
        <div className="w-full p-3 lg:p-0 grid grid-cols-2 md:grid-cols-4  justify-center gap-2 mb-10">
          {frontend.map((d) => (
            <div
              key={d.id}
              className=" shadow-2xl shadow-[#040c16] rounded-md overflow-hidden hover:scale-105 duration-500 h-60"
            >
              <img className="h-[65%] w-full" src={d.img} alt="img" />
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
        {/* //////////////////////////////////////////// */}
        {/* backend title  */}
        <div className="text-center my-5">
          <h1 className="text-center my-10 font-semibold inline border-b-2 border-pink-600">
            Backend
          </h1>
        </div>
        {/* backend project  */}
        <div className="w-full p-3 lg:p-0 grid grid-cols-2 md:grid-cols-4  justify-center gap-2 mb-10">
          {backend.map((d) => (
            <div
              key={d.id}
              className=" shadow-2xl shadow-[#040c16] rounded-md overflow-hidden hover:scale-105 duration-500 h-60"
            >
              <img className="h-[65%] w-full" src={d.img} alt="img" />
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

        {/* /////////////////////////////////////// */}
        {/* mern title  */}
        <div className="text-center my-5">
          <h1 className="text-center my-10 font-semibold inline border-b-2 border-pink-600">
            MERN Stack
          </h1>
        </div>
        {/* MERN STACK PROJECT  */}
        <div className="w-full p-3 lg:p-0 grid grid-cols-2 md:grid-cols-4  justify-center gap-2">
          {mernStack.map((d) => (
            <div
              key={d.id}
              className=" shadow-2xl shadow-[#040c16] rounded-md overflow-hidden hover:scale-105 duration-500 h-60"
            >
              <img className="h-[65%] w-full" src={d.img} alt="img" />
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
        {/* ///////////////////////////////// */}
      </div>
    </div>
  );
};

export default Project;
