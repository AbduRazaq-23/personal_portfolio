import React from "react";
import pic from "../assets/ar2.jpg";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-[80%] md:h-[80%] pb-10 bg-[#2e424d] mx-auto pt-20"
    >
      <div className="grid md:grid-cols-2 max-w-[80%] m-auto">
        <div className="flex flex-col justify-center items-center md:items-start w-full px-2 py-8">
          <p className=" text-[#98dad9] font-bold xs:pt-10">Hi, My Name is</p>
          <h1 className="py-3 text-3xl md:text-5xl font-bold text-[#eaebed]">
            ABDU RAZAQ
          </h1>
          <p className=" md:text-2xl text-[#eaebed]">MERN Stack Developer</p>
        </div>

        <div className=" w-[60%] md:h-[80%]  mx-auto bg-red-400  rotate-3 py-5 rounded-xl md:mt-14 h-100 relative ">
          <img
            className=" w-full h-full object-cover bg-cyan-400 rounded-xl -rotate-3"
            src={pic}
            alt="abdurazaq"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
