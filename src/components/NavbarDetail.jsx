import React from "react";
import { FaArrowDown, FaAngleDown } from "react-icons/fa";
import { motion } from "framer-motion";

import { useNavigate, useParams } from "react-router-dom";
import Scroll from "react-scroll";
const scroll = Scroll.animateScroll;

const NavbarDetail = ({ home, about, fleets, data }) => {
  const [nav, setNav] = React.useState(false);
  const [backgroundwhite, setBackgroundWhite] = React.useState(false);
  const [show, setShow] = React.useState(false);

  const navigation = useNavigate();
  const { _id } = useParams();

  const handleNavigation = (type) => {
    scroll.scrollToTop();
    switch (type) {
      case "home":
        navigation(`/company/${_id}`);

        break;
      case "about":
        navigation(`/company/${_id}/about`);

        break;
      case "fleets":
        // navigation(`/company/${_id}/fleets`);

        break;

      default:
        break;
    }
    console.log("_id", _id);
    //
  };

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
      className={`fixed top-0 w-full transition-all duration-700 z-10 py-4 bg-white ${
        backgroundwhite ? "shadow-lg !py-2" : ""
      }`}
    >
      <div className="flex flex-col items-center">
        <img
          className={`w-auto transition-all duration-700 ${
            backgroundwhite ? "h-[60px]" : "h-[90px]"
          }   bg-transparent`}
          src={data.logo}
          alt="/"
        />
        <div className="flex gap-6 mt-4 ">
          <span
            onClick={() => handleNavigation("home")}
            className={`hover:text-secondary-one hover:cursor-pointer ${
              home ? "text-secondary-one" : "text-slate-900"
            } `}
          >
            Home
          </span>
          <span
            onClick={() => handleNavigation("about")}
            className={`hover:text-secondary-one hover:cursor-pointer ${
              about ? "text-secondary-one" : "text-slate-900"
            } `}
          >
            About
          </span>
          <div
            className=" relative flex items-center"
            onClick={() => setShow((show) => !show)}
          >
            <span
              onClick={() => handleNavigation("fleets")}
              className={`hover:text-secondary-one hover:cursor-pointer ${
                fleets ? "text-secondary-one" : "text-slate-900"
              } `}
            >
              Fleets
            </span>
            <FaAngleDown size={16} className="hover:cursor-pointer ml-2" />
            {show && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className=" flex flex-col absolute w-[200px] top-10 bg-white rounded-md transition-all duration-500 ease-in-out p-2 shadow-md "
              >
                <span className="p-2 hover:text-secondary-one hover:cursor-pointer">
                  test satu
                </span>
                <span className="p-2 hover:text-secondary-one hover:cursor-pointer">
                  test dua
                </span>
                <span className="p-2 hover:text-secondary-one hover:cursor-pointer">
                  test tiga
                </span>
                <span className="p-2 hover:text-secondary-one hover:cursor-pointer">
                  test empat
                </span>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavbarDetail;
