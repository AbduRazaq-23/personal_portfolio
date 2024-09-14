import React from "react";

const ContactUs = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-[#2e424d] flex justify-center items-center p-4"
    >
      <form
        method="Email"
        action="irazaqr987@gmail.com"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb- text-center">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Contact
          </p>
          <p className="text-gray-300 py-4">
            Submit the form below or shoot me an email -
            abdurazaq.dev23@gmail.com
          </p>
        </div>
        <input
          className="bg-[#ccd6f6] p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-[#ccd6f6]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-[#ccd6f6] p-2"
          name="message"
          rows="10"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
          Let's Send
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
