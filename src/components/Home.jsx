import React from "react";
import { hero } from "../assets";

const Home = () => {
  return (
    <div className="container mx-auto flex justify-between py-4 px-4" >
      <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-7">
        <div className="flex flex-col">
          <h1 className="font-3xl font-bold">
            Tailwind Template for NFT Marketplace and Web3 Platforms
          </h1>
          <p className="text-gray-500 mt-4">
            {" "}
            Template for NFT, Token, and Web3 marketplace projects, based on
            Tailwind CSS. Comes with all the essential UI components and pages
            you need to build an NFT marketplace or all sorts of Web3 platforms.
          </p>

          <div className=" mt-6 flex gap-4">
            <button className="bg-blue-600 rounded p-2 hover:bg-blue-400 ">
              {" "}
              Explore Now
            </button>
            <button className="bg-gray-400 rounded p-2 hover:bg-blue-400 text-black">
              {" "}
              Upload Your Arts
            </button>
          </div>
        </div>
       {/* the second div */} 
       <div>
        <img src={hero} alt=''/>
       </div>

      </div>
    </div>
  );
};

export default Home;
