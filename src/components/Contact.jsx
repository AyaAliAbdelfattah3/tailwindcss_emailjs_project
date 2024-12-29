import React, { useRef } from "react";
// import emailjs from 'emailjs-com';
import emailjs from "@emailjs/browser";






const Contact = () => {
  const form = useRef(null);
  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs
    .sendForm('service_dann6tj',
       'template_nr08r5b',
        form.current, 
      'dIZ-L0wVDZJsXABy-',
    )
    .then(
    (result) => {
      console.log(result.text);
      alert("Message send successfully")
    },
    (error) => {
      console.error(error.text);
      alert("Failed to send message")
      console.log(error)

      }
      );
    }
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-7">
      <div className="bg-[#1D2144] w-full">
        <div className="my-10 px-10">
          <h1 className="text-3xl mb-4 font-bold">Need Help? Open a Ticket</h1>
          <p className="text-gray-400">
            {" "}
            Our support team will get back to you ASAP via email.
          </p>

          <form ref={form}  onSubmit={sendEmail}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="mb-4">
                <label className="text-sm mb-2 text-gray-600 font-medium">
                  Your Name
                </label>
                <input
                name="user_name"
                  id="name"
                  required
                  className="w-full bg-[#242B51] py-3 px-3 rounded-md text-white text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none transition duration-200"
                  type="text"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label className="text-sm mb-2 text-gray-600 font-medium">
                  {" "}
                  YourEmail
                </label>
                <input
                  name="user_email"
                  id="email"
                  required
                  className="w-full bg-[#242B51] py-3 px-3 rounded-md text-white text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none transition duration-200"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="my-4">
              <textarea
                id="message"
                name="message"
                required
                rows="5"
                placeholder="Write your message here "
                className="w-full p-4 rounded-lg bg-[#242B51] text-white focus:outline-none focus:ring-2 focus:ring-blue-500
                   focus:border-blue-500"
              ></textarea>
            </div>
            <button
              type="submit"
              className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition duration-300"
            >
              Submit Ticket
            </button>
          </form>
        </div>
      </div>
      <div className="bg-[#1D2144] w-full">
        <div className="px-6 my-7">
          <h1 className="text-3xl mb-4 font-bold">
            {" "}
            Subscribe to receive future updates
          </h1>
          <p className=" text-gray-700 text-sm">
            {" "}
            Lorem ipsum dolor sited Sed ullam corper consectur adipiscing Mae
            ornare massa quis lectus.
          </p>
          <p className="h-[1px] w-full my-4 bg-gray-700"></p>
        </div>
        <div>
          <input
            type="text"
            placeholder="Enter Your Name"
            className="w-[280px] ml-[25px] bg-[#242B51] py-3 px-3 rounded-md text-gray-700 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none transition duration-200"
          />
           <input
            type="email"
            placeholder="Enter Your Email"
            className="w-[280px] ml-[25px] mt-5 bg-[#242B51] py-3 px-3 rounded-md text-gray-700 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-400 outline-none transition duration-200"
          />
          <button 
          type="submit"
          className="w-[280px] ml-[25px] mt-5 py-1 px-3 rounded-md hover:bg-blue-400 bg-[#2563EB] text-white">
            submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
