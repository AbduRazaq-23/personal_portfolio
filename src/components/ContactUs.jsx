import React from "react";

const ContactUs = () => {
  return (
    <div
      name="contact"
      className="w-full  bg-[#2e424d] flex flex-col justify-center items-center py-20 text-gray-300 font-semibold"
    >
      <p className="text-2xl  inline border-b-4 border-[#98dad9] ">Contact</p>
      <p className=" text-sm py-4 text-center">
        Submit the form below or shoot me an email - abdurazaq.dev23@gmail.com
      </p>

      <form className="flex flex-col max-w-[600px] w-full">
        <input
          className="bg-[#2e424d] text-sm border border-gray-300 p-2 rounded-md m-1 focus:outline-none"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="bg-[#2e424d] text-sm  border border-gray-300 p-2 rounded-md m-1 focus:outline-none"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#2e424d] text-sm  border border-gray-300 p-2 rounded-md m-1 focus:outline-none"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className=" border border-gray-300 rounded-md hover:text-[#2e424d] hover:bg-[#98dad9] hover:border-gray-300 px-4 py-1  m-1 ">
          Let's Send
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
