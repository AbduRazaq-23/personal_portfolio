import React, { useState } from "react";
import { Menu } from "./NavMenu";

import logo from "../../assets/ar.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const Nav = () => {
  const [Nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!Nav);
  };

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#2e424d] text-gray-300 z-10">
      <div className="z-10">
        <img src={logo} alt="logo" className="w-14 h-18 " />
      </div>
      <div>
        <ul className="hidden md:flex items-center text-sm font-semibold ">
          {Menu.map((item) => {
            return (
              <ScrollLink
                key={item.id}
                to={item.path}
                smooth={true}
                duration={500}
              >
                <li className="mx-3 hover:text-white cursor-pointer">
                  {item.title}
                </li>
              </ScrollLink>
            );
          })}
        </ul>
      </div>

      <ul className="hidden md:flex gap-4">
        <a href="https://github.com/AbduRazaq-23" target="_blank">
          <li className="  hover:scale-125 ">
            <FaGithub size={18} />
          </li>
        </a>
        <a
          href="https://www.linkedin.com/in/abdu-razaq-03a647277/"
          target="_blank"
        >
          <li className=" hover:scale-125">
            <FaLinkedin size={18} />
          </li>
        </a>
      </ul>

      {/* Mobile  */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!Nav ? <FaBars size={24} /> : <FaTimes size={24} />}
      </div>
      <ul
        className={
          !Nav
            ? "hidden"
            : "md:hidden absolute top-0 left-0 w-[80%] h-screen bg-[#2e424d] flex flex-col pt-24"
        }
      >
        {Menu.map((item) => {
          return (
            <ScrollLink
              key={item.id}
              to={item.path}
              smooth={true}
              duration={500}
            >
              <li className="text-sm  font-semibold ml-5 py-3 ">
                {item.title}
              </li>
            </ScrollLink>
          );
        })}

        <ul className="flex gap-4 ml-5">
          <a href="https://github.com/AbduRazaq-23" target="_blank">
            <li className=" hover:scale-125 ">
              <FaGithub size={18} />
            </li>
          </a>
          <a
            href="https://www.linkedin.com/in/abdu-razaq-03a647277/"
            target="_blank"
          >
            <li className=" hover:scale-125">
              <FaLinkedin size={18} />
            </li>
          </a>
        </ul>
      </ul>
    </div>
  );
};

export default Nav;
