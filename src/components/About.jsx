import React from "react";

const About = () => {
  return (
    <div name="about" className=" w-full py-20 bg-[#2e424d] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="sm:text-right pb-8 pl-4">
          <p className="text-2xl font-semibold inline border-b-4 border-[#98dad9]">
            About
          </p>
        </div>

        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="text-center md:text-start  font-semibold">
            <p>
              Hi. I'm Abdu Razaq, nice to meet you. Please take a look around.
            </p>
          </div>
          <div className="text-sm font-semibold">
            <p>
              I am a passionate and dedicated MERN stack developer. My expertise
              lies in developing efficient, scalable, and user-friendly
              solutions using MongoDB, Express.js, React.js, and Node.js. I have
              a strong command of front-end and back-end technologies, with a
              focus on creating seamless user experiences and robust backend
              systems.
            </p>
            <p>
              I'm excited to continue learning, growing, and contributing to
              innovative projects that make a real impact.
            </p>
          </div>
        </div>
        {/* education  */}
        <div className="text-center space-y-10 mt-10 text-gray-300 text-sm font-semibold">
          <h1 className="  text-xl text-[#98dad9]">Education</h1>
          <div>
            <h2>
              Bacheler of Science in{" "}
              <span className="text-[#98dad9] font-bold">
                {" "}
                Software Engineering{" "}
              </span>
            </h2>
            <h3>[2019 - 2023]</h3>
            <h4>Islamia College Peshawar</h4>
          </div>
          <div>
            <h2>
              Diploma of{" "}
              <span className="text-[#98dad9] font-bold">
                {" "}
                Information Technology (DIT)
              </span>
            </h2>
            <h3>[2018 - 2019]</h3>
            <h4>The Nation Hangu</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
