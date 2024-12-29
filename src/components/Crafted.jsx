import React from "react";
import { about } from "../assets";

const Crafted = () => {
  return (
    <div className="bg-[#090E34] mt-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 ">
        <div className="text-white mt-7">
          <h1 className="text-4xl">
            {" "}
            Crafted for Startup, SaaS and Business Sites.
          </h1>
          <p className="mb-8 text-gray-500">
            {" "}
            The main ‘thrust’ is to focus on educating attendees on how to best
            protect highly vulnerable business applications with interactive
            panel discussions and roundtables.
          </p>
          {/* القوائم */}
          <div className="grid grid-cols-2 text-sm">
            <div>
              <p className="mb-2">✅ Premium quality</p>
              <p className="mb-2">✅ No code required</p>
              <p>✅ Use for lifetime</p>
            </div>
            <div data-aos="fade-up">
              <p className="mb-2">✅ Regular updates</p>
              <p className="mb-2">✅ Rich documentation</p>
              <p>✅ Developer friendly</p>
            </div>
          </div>
        </div>
        {/* the right div */}
        <div className=" flex justify-center ">
            <img src={about} alt=''className="mx-w-full h-auto rounded"/>
        </div>
      </div>
    </div>
  );
};

export default Crafted;
