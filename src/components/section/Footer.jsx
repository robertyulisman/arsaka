import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import Scroll from "react-scroll";
const scroll = Scroll.animateScroll;

const Footer = () => {
  const handleScrolltoTop = () => {
    scroll.scrollToTop();
  };
  return (
    <section className="bg-primary-one">
      <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 ">
        <div>
          <h1
            onClick={handleScrolltoTop}
            className="w-full text-3xl font-bold text-[#F38E16] hover:cursor-pointer"
          >
            ARSAKA GROUP.
          </h1>
          <p className="py-4">
            Berpengalaman Dalam Mobilisasi Proyek, Bongkar Muat serta Pengurusan
            Sertifikasi Kapal ( Endorsment ) untuk mendukung Mitra Perusahaan
            Lokal dan Asing.
          </p>
          <div className="flex gap-4  md:w-[75%] my-6">
            <FaFacebookSquare
              size={30}
              className="hover:cursor-pointer hover:text-[#4267B2]"
            />
            <FaInstagram
              size={30}
              className="hover:cursor-pointer hover:text-[#C13584]"
            />
            {/* <FaTwitterSquare
              size={30}
              className="hover:cursor-pointer hover:text-[#00b9fb]"
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
