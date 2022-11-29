import React from "react";
import { useNavigate } from "react-router-dom";
import Scroll from "react-scroll";
import company from "../../utils/data";
import { useTranslation } from "react-i18next";
const scroll = Scroll.animateScroll;

const Group = () => {
  const { t } = useTranslation();
  const navigation = useNavigate();

  const handleNavigation = (item) => {
    navigation(`/company/${item.key}`);
    scroll.scrollToTop();
  };

  return (
    <div id="group" className="w-full py-[10rem] px-4 bg-[#1E2734]">
      <p className="text-secondary-one text-2xl font-bold p-2 text-center mb-10">
        {t("group_tag")}
      </p>
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-0 md:gap-8">
        {company.map((item) => (
          <div className="w-full shadow-xl bg-gray-100 flex flex-col p-4 my-4 md:my-0 rounded-lg hover:scale-105 duration-300">
            <img
              className="h-20 mt-10 mx-auto  bg-transparent"
              src={item.logo}
              alt="/"
            />
            <h2 className="text-2xl font-bold text-center py-8">{item.nama}</h2>
            <p className="text-center text-xl text-gray-700">
              {item.deskripsiPendek}
            </p>
            <button
              onClick={() => handleNavigation(item)}
              className="bg-[#F38E16] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 text-black"
            >
              {t("selengkapnya")}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Group;
