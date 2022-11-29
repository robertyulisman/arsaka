import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-scroll";

import cookie from "js-cookie";
import i18next from "i18next";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  // translate feature
  const { t } = useTranslation();
  const currentLanguageCode = cookie.get("i18next") || "en";
  console.log("currentLanguageCode", currentLanguageCode);

  React.useEffect(() => {
    i18next.changeLanguage(currentLanguageCode);
  }, []);

  const handleChangeLanguage = (language) => {
    i18next.changeLanguage(language);
  };

  const [nav, setNav] = React.useState(false);
  const [backgroundwhite, setBackgroundWhite] = React.useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleWindowScroll = (e) => {
    const height = window.scrollY;
    const tresholdHeight = 50;

    if (height > tresholdHeight) {
      setBackgroundWhite(true);
    } else {
      setBackgroundWhite(false);
    }
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleWindowScroll);

    return () => window.removeEventListener("scroll", handleWindowScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full transition-all duration-700 z-10 ${
        backgroundwhite ? "app__background_nav shadow-lg !py-2" : ""
      }`}
    >
      <div className="flex justify-between items-center h-20 max-w-[1240px] mx-auto px-4 text-white">
        {/* <img className="w-20 mx-auto  bg-transparent" src={Logo} alt="/" /> */}
        <h1 className="w-full text-3xl font-bold text-[#F38E16]">
          ARSAKA GROUP.
        </h1>
        <ul className="hidden md:flex">
          <Link to="home" smooth={true}>
            <li className="p-4 hover:cursor-pointer hover:text-[#F38E16]">
              {t("home")}
            </li>
          </Link>
          <Link to="about" smooth={true}>
            <li className="p-4 hover:cursor-pointer hover:text-[#F38E16]">
              {t("about")}
            </li>
          </Link>
          <Link to="group" smooth={true}>
            <li className="p-4 hover:cursor-pointer hover:text-[#F38E16]">
              {t("group")}
            </li>
          </Link>

          {/* <li className="p-4 hover:cursor-pointer hover:text-[#F38E16]">
            Service
          </li> */}
          <Link to="gallery" smooth={true} offset={-100}>
            <li className="p-4 hover:cursor-pointer hover:text-[#F38E16]">
              {t("gallery")}
            </li>
          </Link>
          <Link to="contact" smooth={true} offset={-100}>
            <li className="p-4 hover:cursor-pointer hover:text-[#F38E16]">
              {t("contact")}
            </li>
          </Link>
        </ul>

        <div className="ml-3 hidden md:flex">
          <button
            className={`${
              currentLanguageCode === "id"
                ? "bg-white px-3 py-1 rounded-sm text-[#F38E16] font-bold"
                : ""
            } duration-300 ease-in-out`}
            onClick={() => handleChangeLanguage("id")}
          >
            ID
          </button>
          <span className="mx-2">|</span>
          <button
            className={`${
              currentLanguageCode === "en"
                ? "bg-white px-3 py-1 rounded-sm text-[#F38E16] font-bold"
                : ""
            } duration-300 ease-in-out`}
            onClick={() => handleChangeLanguage("en")}
          >
            EN
          </button>
        </div>
        <div onClick={handleNav} className="block md:hidden z-[998]">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-[100vh] border-r border-r-[#1E2734] bg-[#1E2734] ease-in-out duration-500 z-[999] shadow-md"
              : "ease-in-out duration-500 fixed left-[-100%] top-0 bottom-0"
          }
        >
          <h1 className="w-full text-3xl font-bold text-[#F38E16] m-4">
            PT ARSAKA.
          </h1>

          <Link to="home" smooth={true}>
            <li
              onClick={handleNav}
              className="p-4 border-b border-gray-600 hover:cursor-pointer "
            >
              {t("home")}
            </li>
          </Link>
          <Link to="about" smooth={true}>
            <li
              onClick={handleNav}
              className="p-4 border-b border-gray-600 hover:cursor-pointer "
            >
              {t("about")}
            </li>
          </Link>

          <Link to="group" smooth={true}>
            <li
              onClick={handleNav}
              className="p-4 border-b border-gray-600 hover:cursor-pointer "
            >
              {t("group")}
            </li>
          </Link>

          {/* <li onClick={handleNav} className="p-4 border-b border-gray-600">
            Service
          </li> */}
          <Link to="gallery" smooth={true} offset={-100}>
            <li
              onClick={handleNav}
              className="p-4 border-b border-gray-600 hover:cursor-pointer "
            >
              {t("gallery")}
            </li>
          </Link>
          <Link to="contact" smooth={true} offset={-100}>
            <li onClick={handleNav} className="p-4 hover:cursor-pointer ">
              {t("contact")}
            </li>
          </Link>
        </ul>

        <div
          className={
            nav
              ? "fixed left-0 top-0 w-[100vw] h-[100vh] border-r border-r-[#1E2734] bg-[#1E2734] ease-in-out duration-500 z-[997] opacity-80"
              : "hidden"
          }
        />
      </div>
      <div
        className={`ml-3 ${
          nav ? "flex" : "hidden"
        } md:hidden fixed bottom-3 left-0 z-[999]`}
      >
        <button
          className={`${
            currentLanguageCode === "id"
              ? "bg-white px-3 py-1 rounded-sm text-[#F38E16] font-bold"
              : "text-white"
          } duration-300 ease-in-out`}
          onClick={() => handleChangeLanguage("id")}
        >
          ID
        </button>
        <span className="mx-2 text-white">|</span>
        <button
          className={`${
            currentLanguageCode === "en"
              ? "bg-white px-3 py-1 rounded-sm text-[#F38E16] font-bold"
              : "text-white"
          } duration-300 ease-in-out`}
          onClick={() => handleChangeLanguage("en")}
        >
          EN
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
