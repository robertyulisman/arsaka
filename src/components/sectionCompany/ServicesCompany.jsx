import React from "react";
import Service1 from "../../assets/services/1.jpg";
import Service2 from "../../assets/services/2.jpg";
import Service3 from "../../assets/services/3.jpg";
import { Fade } from "react-reveal";

import Scroll from "react-scroll";
const Element = Scroll.Element;

const ServicesCompany = ({ data }) => {
  return (
    <Element id="services_company" name="services" className="w-full h-full">
      <div className="max-w-[1240px] m-auto py-20">
        <h2 className="text-center text-2xl mb-5 font-bold text-secondary-one ">
          OUR SERVICES
        </h2>
        <div className="grid  md:grid-cols-2 lg:grid-cols-3 gap-20 p-5 md:p-10">
          {data.services.map((item, index) => (
            <Fade key={item._id} up delay={index * 200}>
              <div>
                <img
                  className="h-auto w-full m-auto"
                  src={item.image}
                  alt="Cargo Transport Services Inter Island"
                />
                <h3 className="text-xl p-2 mt-2 text-center font-bold">
                  {item.judul}
                </h3>
                <p className="p-2">{item.deskripsi}</p>
              </div>
            </Fade>
          ))}
        </div>
      </div>
    </Element>
  );
};

export default ServicesCompany;
