import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white bg-gradient-to-t from-[#1E2734] to-[rgba(0, 0, 0, 0.2)]">
      <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
        <p className="text-[#F38E16] font-bold p-2">
          GROWING WITH DATA ANALYTICS
        </p>
        <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">
          PROJECT MOBILIZATION
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-5xl sm:text-4xl text-xl font-bold py-4">
            Fast, flexible financing for
          </p>
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <p className="md:text-2xl text-xl text-gray-400">
          We have such a experience to handle Project Mobilization within 10
          year, specially to handling Oil and Gas material to mobilize it goods
          for supporting local and foreign company partners..
        </p>
        <button className="bg-[#F38E16] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
