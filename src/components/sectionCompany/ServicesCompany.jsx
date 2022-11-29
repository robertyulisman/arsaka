import React from "react";
import { Fade } from "react-reveal";
import { useTranslation } from "react-i18next";
import Scroll from "react-scroll";
const Element = Scroll.Element;

const ServicesCompany = ({ data }) => {
  const { t } = useTranslation();
  return (
    <Element id="services_company" name="services" className="w-full h-full">
      <div className="max-w-[1240px] m-auto py-20">
        <h2 className="text-center text-2xl mb-5 font-bold text-secondary-one ">
          {t("service_tag")}
        </h2>
        <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-20 p-5 md:p-10">
          {data.services.map((item, index) => (
            <Fade key={item._id} up delay={index * 200}>
              <div>
                <div className="relative overflow-hidden rounded-xl">
                  <img
                    className="h-auto w-full m-auto "
                    src={item.image}
                    alt="Cargo Transport Services Inter Island"
                  />
                  <div className="bg-gradient-to-t from-[#1c1e20] to-[rgba(0, 0, 0, 0.2)] absolute top-0 bottom-0 left-0 right-0" />
                </div>

                <h3 className="text-xl p-2 mt-2 text-center font-bold ">
                  {item.judul}
                </h3>
                <p className="p-2 text-center">{item.deskripsi}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default ServicesCompany;
