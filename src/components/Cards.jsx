import React from "react";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-[#1E2734]">
      <p className="text-[#00df9a] font-bold p-2 text-center mb-10">
        OUR GROUP
      </p>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-4 gap-8">
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img className="w-20 mx-auto  bg-transparent" src={Double} alt="/" />
          <h2 className="text-2xl font-bold text-center py-8">Pt. Arsaka</h2>
          <p className="text-center text-xl text-gray-700">
            The company is engaged in ship agency services include the
            maintenance needs of the ship that will sail and which will be
          </p>
          <button className="bg-[#F38E16] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black">
            Selengkapnya
          </button>
        </div>
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img className="w-20 mx-auto  bg-transparent" src={Double} alt="/" />
          <h2 className="text-2xl font-bold text-center py-8">Pt. Madiha</h2>
          <p className="text-center text-xl text-gray-700">
            The company is engaged in ship agency services include the
            maintenance needs of the ship that will sail and which will be
          </p>
          <button className="bg-black text-[#F38E16] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3">
            Selengkapnya
          </button>
        </div>
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img className="w-20 mx-auto  bg-transparent" src={Double} alt="/" />
          <h2 className="text-2xl font-bold text-center py-8">Pt. Arsaka</h2>
          <p className="text-center text-xl text-gray-700">
            The company is engaged in ship agency services include the
            maintenance needs of the ship that will sail and which will be
          </p>
          <button className="bg-[#F38E16] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black">
            Selengkapnya
          </button>
        </div>
        <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300">
          <img className="w-20 mx-auto  bg-transparent" src={Double} alt="/" />
          <h2 className="text-2xl font-bold text-center py-8">
            Pt. trimitra mandiri logistic
          </h2>
          <p className="text-center text-xl text-gray-700">
            The company is engaged in ship agency services include the
            maintenance needs of the ship that will sail and which will be
          </p>
          <button className="bg-[#F38E16] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black">
            Selengkapnya
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
