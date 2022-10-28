import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
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
          ARSAKA GROUP
        </h1>
        <ul className="hidden md:flex">
          <Link to="home" smooth={true}>
            <li className="p-4 hover:cursor-pointer hover:text-[#F38E16]">
              Home
            </li>
          </Link>
          <Link to="about" smooth={true}>
            <li className="p-4 hover:cursor-pointer hover:text-[#F38E16]">
              About
            </li>
          </Link>
          <Link to="group" smooth={true}>
            <li className="p-4 hover:cursor-pointer hover:text-[#F38E16]">
              Group
            </li>
          </Link>

          {/* <li className="p-4 hover:cursor-pointer hover:text-[#F38E16]">
            Service
          </li> */}
          <Link to="gallery" smooth={true} offset={-100}>
            <li className="p-4 hover:cursor-pointer hover:text-[#F38E16]">
              Gallery
            </li>
          </Link>
          <Link to="contact" smooth={true} offset={-100}>
            <li className="p-4 hover:cursor-pointer hover:text-[#F38E16]">
              Contact
            </li>
          </Link>
        </ul>
        <div onClick={handleNav} className="block md:hidden">
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <ul
          className={
            nav
              ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-[#1E2734] bg-[#1E2734] ease-in-out duration-500"
              : "ease-in-out duration-500 fixed left-[-100%] top-0 bottom-0"
          }
        >
          <h1 className="w-full text-3xl font-bold text-[#F38E16] m-4">
            PT ARSAKA
          </h1>

          <Link to="home" smooth={true}>
            <li
              onClick={handleNav}
              className="p-4 border-b border-gray-600 hover:cursor-pointer "
            >
              Home
            </li>
          </Link>
          <Link to="about" smooth={true}>
            <li
              onClick={handleNav}
              className="p-4 border-b border-gray-600 hover:cursor-pointer "
            >
              About
            </li>
          </Link>

          <Link to="group" smooth={true}>
            <li
              onClick={handleNav}
              className="p-4 border-b border-gray-600 hover:cursor-pointer "
            >
              Group
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
              Gallery
            </li>
          </Link>
          <Link to="contact" smooth={true} offset={-100}>
            <li onClick={handleNav} className="p-4 hover:cursor-pointer ">
              Contact
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
