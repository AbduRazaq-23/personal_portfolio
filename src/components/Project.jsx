import React from "react";
import ecom from "../assets/project/ecommerce.png";
import spog from "../assets/project/spogmai.png";
import youtube from "../assets/project/youtube.jpg";
import insta from "../assets/project/instagram.jpg";
import finance from "../assets/project/finance.jpg";
import goFood from "../assets/project/gofood.png";
import book from "../assets/project/book.jpg";
import ecompic from "../assets/project/ecompic.png";

const Project = () => {
  const mernStack = [
    {
      id: 1,
      name: "SpogmaiFoundation",
      img: spog,
      dLink: "https://spogmai-foundation.vercel.app/",
      cLink: "https://github.com/wasimhaider55/spogmaiFoundation",
    },

    {
      id: 2,
      name: "E-Commerce",
      img: ecom,
      dLink: "https://e-commerce-frontend-eosin-delta.vercel.app/",
      cLink: "https://github.com/AbduRazaq-23/E-Commerce_Frontend",
    },
    {
      id: 3,
      name: "FoodDelivery",
      img: goFood,
      dLink: "https://github.com/AbduRazaq-23/MERN-goFood",
      cLink: "https://github.com/AbduRazaq-23/MERN-goFood",
    },
  ];
  const frontend = [
    {
      id: 1,
      name: "SpogmaiFoundation",
      img: spog,
      dLink: "https://spogmai-foundation.vercel.app/",
      cLink: "https://github.com/wasimhaider55/spogmaiFoundation.git",
    },
    {
      id: 2,
      name: "E-Commerce",
      img: ecom,
      dLink: "https://e-commerce-frontend-eosin-delta.vercel.app/",
      cLink: "",
    },
    {
      id: 3,
      name: "E-Commerce UI",
      img: ecompic,
      dLink: "https://eccomerece-ruddy.vercel.app/",
      cLink: "https://github.com/AbduRazaq-23/eccomerece",
    },
  ];
  const backend = [
    {
      id: 1,
      name: "YouTube",
      img: youtube,
      dLink: "https://github.com/AbduRazaq-23/YouTubeBackend",
      cLink: "https://github.com/AbduRazaq-23/YouTubeBackend",
    },
    {
      id: 2,
      name: "Instagram",
      img: insta,
      dLink: "https://github.com/AbduRazaq-23/InstagramBackend",
      cLink: "https://github.com/AbduRazaq-23/InstagramBackend",
    },
    {
      id: 3,
      name: "PersonalFinanceTracker",
      img: finance,
      dLink: "https://github.com/AbduRazaq-23/personalFinanceTracker",
      cLink: "https://github.com/AbduRazaq-23/personalFinanceTracker",
    },
    {
      id: 4,
      name: "BookStore",
      img: book,
      dLink: "https://github.com/AbduRazaq-23/bookStore",
      cLink: "https://github.com/AbduRazaq-23/bookStore",
    },
  ];

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
              <img className="h-44 w-full rounded-md" src={d.img} alt="img" />
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
