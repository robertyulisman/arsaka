import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import Logo from "../assets/logo.png";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <img className="w-20 mx-auto  bg-transparent" src={Logo} alt="/" />
      <h1 className="w-full text-3xl font-bold text-[#F38E16]">PT. ARSAKA</h1>
      <ul className="hidden md:flex">
        <li className="p-4 hover:cursor-pointer hover:text-[#F38E16]">Home</li>
        <li className="p-4 hover:cursor-pointer hover:text-[#F38E16]">About</li>
        <li className="p-4 hover:cursor-pointer hover:text-[#F38E16]">Group</li>
        <li className="p-4 hover:cursor-pointer hover:text-[#F38E16]">
          Service
        </li>
        <li className="p-4 hover:cursor-pointer hover:text-[#F38E16]">
          Gallery
        </li>
        <li className="p-4 hover:cursor-pointer hover:text-[#F38E16]">
          Contact
        </li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <ul
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
            : "ease-in-out duration-500 fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#F38E16] m-4">
          PT ARSAKA
        </h1>
        <li className="p-4 border-b border-gray-600">Home</li>
        <li className="p-4 border-b border-gray-600">About</li>
        <li className="p-4 border-b border-gray-600">Group</li>
        <li className="p-4 border-b border-gray-600">Service</li>
        <li className="p-4 border-b border-gray-600">Gallery</li>
        <li className="p-4">Contact</li>
      </ul>
    </div>
  );
};

export default Navbar;
