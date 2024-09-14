import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javaScript from "../assets/javascript.png";
import react from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import bootstrap from "../assets/bootstrap.png";
import mongo from "../assets/mongo.png";
import node from "../assets/node.png";
import express from "../assets/express.png";

const data = [
  {
    id: 1,
    name: "HTML",
    img: html,
  },
  {
    id: 2,
    name: "CSS",
    img: css,
  },
  {
    id: 3,
    name: "TAILWINDCSS",
    img: tailwind,
  },
  {
    id: 4,
    name: "BOOTSTRAP",
    img: bootstrap,
  },
  {
    id: 5,
    name: "JAVASCRIPT",
    img: javaScript,
  },
  {
    id: 6,
    name: "REACT",
    img: react,
  },
  {
    id: 7,
    name: "NODE",
    img: node,
  },
  {
    id: 8,
    name: "EXPRESS",
    img: express,
  },
  {
    id: 9,
    name: "MONGODB",
    img: mongo,
  },
];

const Skills = () => {
  return (
    <div name="skills" className="w-full  bg-[#2e424d] text-gray-300 py-20 ">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="text-center">
          <p className="text-2xl font-semibold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4 text-sm font-semibold">
            {" "}
            These are the technologies I've worked with
          </p>
        </div>
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center py-8">
          {data?.map((d) => (
            <div
              key={d.id}
              className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
            >
              <img className="w-20 mx-auto" src={d.img} alt={d.name} />
              <p className="my-4 text-sm font-semibold">{d.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
