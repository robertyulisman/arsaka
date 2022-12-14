import React from "react";
import { Fade } from "react-reveal";
import { useTranslation } from "react-i18next";

const AboutCompany = ({ data }) => {
  const { t } = useTranslation();

  return (
    <>
      <div
        id="about_company"
        className="w-full pt-[100px] h-[400px] flex items-center justify-center"
      >
        <Fade right>
          <h1 className="text-white text-6xl text-center font-bold drop-shadow-lg ">
            {t("about_tag")}
          </h1>
        </Fade>
      </div>
      <div>
        <Fade bottom>
          <img
            className="h-[200px] w-auto m-auto mt-10 "
            src={data.logo}
            alt=""
          />
        </Fade>

        {/* paragraf */}
        <div className="py-10 px-5 md:px-20 max-w-[1240px] m-auto ">
          {/* history */}
          <Fade up>
            <div>
              <h1 className="text-2xl font-bold text-secondary-one mb-4 ">
                SEJARAH
              </h1>
              {data.tentang.map((item) => (
                <div key={item._id}>
                  <p className="text-[18px] text-slate-600 mb-6">{item.teks}</p>
                </div>
              ))}
            </div>
          </Fade>

          {/* vision */}
          <Fade up delay={200}>
            <div className="mt-20">
              <h1 className="text-2xl font-bold text-secondary-one mb-4 ">
                VISI
              </h1>
              <p className="text-[18px] text-slate-600 mb-6">{data.visi}</p>
            </div>
          </Fade>

          {/* mission */}
          <Fade up delay={400}>
            <div className="mt-20">
              <h1 className="text-2xl font-bold text-secondary-one mb-4 ">
                MISI
              </h1>
              <p className="text-[18px] text-slate-600 mb-6">{data.misi}</p>
            </div>
          </Fade>
        </div>
        <div className="p-10 bg-primary-one flex items-center justify-center">
          <span className="text-white">
            {data.nama} © 2022 | All rights reserved
          </span>
        </div>
      </div>
    </>
  );
};

export default AboutCompany;
