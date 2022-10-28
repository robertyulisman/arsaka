import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/section/About";
import Footer from "../components/section/Footer";
import Gallery from "../components/section/Gallery";
import Group from "../components/section/Group";
import Hero from "../components/section/Hero";
import Newsletter from "../components/section/Newsletter";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="pt-24">
        <Hero />
        <About />
        <Group />
        <Gallery />
        <Newsletter />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
