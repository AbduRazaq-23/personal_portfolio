import React from "react";
import { MdEmail, MdPhone, MdLocationPin } from "react-icons/md";

const Footer = () => {
  return (
    <div className="w-full bg-[#2e424d] text-gray-300 p-1 border-t border-gray-300">
      <ul
        className="max-w-[1000px] mx-auto flex flex-col md:flex-row items-center justify-center md:space-x-8  p-5
      "
      >
        <li className="flex items-center space-x-1">
          <MdLocationPin />
          <span>Airline Society near UCP Lahore</span>
        </li>
        <li className="flex items-center space-x-1">
          <MdPhone />
          <span>+923065011190</span>
        </li>
        <li className="flex items-center space-x-1">
          <MdEmail /> <span>abdurazaq.dev23@gmail.com</span>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
