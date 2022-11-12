import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Company from "./pages/Company";
import { AiOutlineArrowUp, AiOutlineWhatsApp } from "react-icons/ai";

import Error404 from "./pages/Error404";
import Home from "./pages/Home";
import Scroll from "react-scroll";
const scroll = Scroll.animateScroll;

function App() {
  const handleScrolltoTop = () => {
    scroll.scrollToTop();
  };

  const handleWa = () => {
    const text = "hallo Pak Mulyono";
    const noWa = "6281372413324";
    window.open(
      `https://api.whatsapp.com/send/?phone=${noWa}&text=${text}`,
      "_blank"
    );
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/company/:_id" element={<Company />} />
        {/* <Route path="/company/:_id" element={<Dashboard />} />
        <Route path="/company/:_id/about" element={<AboutCompany />} /> */}
        <Route path="*" element={<Error404 />} />
      </Routes>
      <div className="fixed bottom-3 left-3" onClick={handleScrolltoTop}>
        <div className="w-[60px] h-[60px] bg-slate-700 flex items-center justify-center rounded-md text-white hover:cursor-pointer shadow-md">
          <AiOutlineArrowUp className=" " size={30} />
        </div>
      </div>
      <div className="fixed bottom-3 right-3" onClick={handleWa}>
        <div className="w-[60px] h-[60px] bg-[#25D366] flex items-center justify-center rounded-md text-white hover:cursor-pointer shadow-md">
          <AiOutlineWhatsApp className=" " size={30} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
