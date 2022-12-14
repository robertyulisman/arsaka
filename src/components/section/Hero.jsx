import React from "react";
import Typed from "react-typed";
import Logo from "../../assets/logo.png";
import Madiha from "../../assets/logoMadiha.png";
import { useTranslation } from "react-i18next";
import TrimitraWhite from "../../assets/logoTrimitraWhite.png";

const Hero = () => {
  const { t } = useTranslation();
  return (
    <div id="home">
      <div className="text-white bg-gradient-to-t from-[#12171f] to-[rgba(0, 0, 0, 0.2)]">
        <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <div className="flex justify-center items-center gap-4 mb-4">
            <img
              className="w-auto h-[70px] md:h-[90px]  bg-transparent hover:scale-110 hover:duration-200 hover:ease-in-out"
              src={Logo}
              alt="/"
            />
            <img
              className="w-auto h-[70px] md:h-[90px]  bg-transparent  p-1 hover:scale-110 hover:duration-200 hover:ease-in-out"
              src={Madiha}
              alt="/"
            />
            <img
              className="w-auto h-[70px] md:h-[90px]   rounded-md p-1 hover:scale-110 hover:duration-200 hover:ease-in-out"
              src={TrimitraWhite}
              alt="/"
            />
          </div>

          <div className="block md:flex justify-center items-center w-full ">
            <Typed
              className="md:text-5xl sm:text-4xl text-2xl font-bold md:pl-4 pl-2"
              strings={[
                "PT. Arsaka Lintas Samudra",
                "PT. Madiha Kastara Sejahtera",
                "PT. Trimitra Mandiri Logistik",
              ]}
              typeSpeed={120}
              backSpeed={10}
              loop
            />
          </div>
          <p className="md:text-2xl text-xl text-white p-5">
            {t("hero_title")}
          </p>
          {/* <button className="bg-[#F38E16] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
            Get Started
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
