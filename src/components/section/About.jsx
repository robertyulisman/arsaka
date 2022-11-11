import React from "react";
import Ship from "../../assets/ship.png";

const About = () => {
  return (
    <div id="about" className="w-full h-[100vh] bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 py-20">
        <div className="flex flex-col justify-center">
          <p className="text-[#F38E16] font-bold text-2xl">TENTANG KAMI</p>
          <h1 className="md:text-5xl sm:text-4xl text-2xl font-bold py-4">
            One Stop Service Shipping Agency
          </h1>
          <p className="md:text-2xl sm:text-2xl text-xl text-gray-400">
          Perusahaan Ship Agency yang telah berdiri sejak tahun 2021, dan
            telah mengerjakan banyak Projek dan menjadi kepercayaan beberapa Klient kami dalam urusan Bongkar Muat, Pengurusan Dokumen dokumen serta Pengurusan Sertifikasi Kapal.
          </p>
          {/* <button className="bg-[#1E2734] text-[#F38E16] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3">
            Selengkapnya
          </button> */}
        </div>
        <img className="w-[500px] mx-auto my-4" src={Ship} alt="/" />
      </div>
    </div>
  );
};

export default About;
