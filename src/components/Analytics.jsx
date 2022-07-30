import React from "react";
import Ship from "../assets/ship.png";

const Analytics = () => {
  return (
    <div className="w-full  bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 py-20">
        <div className="flex flex-col justify-center items-center">
          <p className="text-[#F38E16] font-bold ">ABOUT US</p>
          <h1 className="md:text-5xl sm:text-4xl text-2xl font-bold py-4">
            One Stop Service Shipping Agent
          </h1>
          <p className="md:text-2xl sm:text-2xl text-xl text-gray-400">
            Affiliated company that have been establish company since 2002, and
            member of ship owner Indonesia association (INSA) Batam.
          </p>
          <button className="bg-black text-[#F38E16] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Read More
          </button>
        </div>
        <img className="w-[500px] mx-auto my-4" src={Ship} alt="/" />
      </div>
    </div>
  );
};

export default Analytics;
