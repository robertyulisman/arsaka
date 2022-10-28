import { motion } from "framer-motion";
import React from "react";
import { Fade } from "react-reveal";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";

import Scroll from "react-scroll";
const scroll = Scroll.scroller;

const HeroCompany = ({ data }) => {
  const slides = [
    {
      title: "We Provide all your need",
      description: "Our Services",
      key: "services",
    },
    {
      title:
        "We Support Goverments Program to expand and improve the distribution of goods",
      description: "Learn More",
      key: "about",
    },
    {
      title: "Discuss your work project immediately",
      description: "Contact Us",
      key: "contact",
    },
  ];

  const handleClickHero = (value) => {
    console.log("value", value);

    switch (value) {
      case "services":
        scroll.scrollTo("services", {
          duration: 1500,
          delay: 100,
          smooth: true,
          offset: -100,
        });

        break;
      case "contact":
        scroll.scrollTo("contact", {
          duration: 1500,
          delay: 100,
          smooth: true,
          offset: 50,
        });

        break;

      default:
        break;
    }
  };

  return (
    <section id="home_company" className="pb-10">
      <Slider autoplay={300}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div className="w-[70%] h-[500px] m-auto flex items-center justify-center flex-col ">
              <Fade right>
                <h1 className="text-white text-2xl drop-shadow-lg lg:text-4xl font-bold text-center ">
                  {slide.title}
                </h1>
              </Fade>
              <Fade bottom>
                <button
                  onClick={() => handleClickHero(slide.key)}
                  className="mt-8 border-2 border-white px-4 py-2 rounded-md text-white hover:cursor-pointer "
                >
                  {slide.description}
                </button>
              </Fade>
            </div>
          </div>
        ))}
      </Slider>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-[1240px] m-auto px-5 lg:px-20 py-10 bg-white rounded-lg shadow-md"
      >
        {data.tentang.map((item) => (
          <div key={item._id}>
            <p className="mb-8">{item.teks}</p>
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default HeroCompany;
