import React from "react";
import Typed from "react-typed";
import Logo from "../../assets/logo.png";
import Madiha from "../../assets/logoMadiha.png";
import Trimitra from "../../assets/logoTrimitra.png";

const Hero = () => {
  return (
    <div id="home">
      <div className="text-white bg-gradient-to-t from-[#12171f] to-[rgba(0, 0, 0, 0.2)]">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <div className="flex justify-center items-center gap-4">
            <img
              className="w-auto h-[70px]  bg-transparent "
              src={Logo}
              alt="/"
            />
            <img
              className="w-auto h-[70px]  bg-transparent bg-white rounded-md p-1"
              src={Madiha}
              alt="/"
            />
            <img
              className="w-auto h-[70px]  bg-white rounded-md p-1"
              src={Trimitra}
              alt="/"
            />
          </div>

          <div className="block md:flex justify-center items-center w-full ">
            {/* <p className="md:text-5xl sm:text-4xl text-3xl font-bold py-4 ">
              Fast, flexible financing for
            </p> */}
            <Typed
              className="md:text-5xl sm:text-4xl text-4xl font-bold md:pl-4 pl-2"
              strings={[
                "PT. Arsaka Lintas Samudra",
                "PT. Madiha Kastara Sejahtera",
                "PT. Trimitra Mandiri Logistik",
              ]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </div>
          <p className="md:text-2xl text-xl text-white p-5 ">
            Berpengalaman Dalam Mobilisasi Proyek, Bongkar Muat serta Pengurusan
            Sertifikasi Kapal ( Endorsment ) untuk mendukung Mitra Perusahaan
            Lokal dan Asing.
          </p>
          <button className="bg-[#F38E16] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
