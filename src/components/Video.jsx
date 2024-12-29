import React from "react";
import { shape } from "../assets";


const Video = () => {
  return (
    <div className="bg-[#090C34] py-14">
      <div className="container mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white">
            We are ready to help
          </h1>
          <p className="my-3 text-[#959CB1]">
            There are many variations of passages of Lorem Ipsum available but{" "}
            <br />
            the majority have suffered alteration in some form.
          </p>
        </div>
        <div
        style={{
            backgroundImage: `url(${shape})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className=" flex justify-center h-full mt-10 rounded-lg "
        >
          <iframe
            width="400"
            height="200"
            src="https://www.youtube.com/embed/mOFoh9FUR8w?si=7ENoly6K-4sxg-gR"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Video;
