import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/section/About";
import Footer from "../components/section/Footer";
import Gallery from "../components/section/Gallery";
import Group from "../components/section/Group";
import Hero from "../components/section/Hero";
import Newsletter from "../components/section/Newsletter";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Arsaka Group</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
        <meta
          name="description"
          content="Arsaka Group Pelayaran - Berpengalaman Dalam Mobilisasi Proyek, Bongkar Muat serta Pengurusan
      Sertifikasi Kapal ( Endorsment ) untuk mendukung Mitra Perusahaan
      Lokal dan Asing"
        />
      </Helmet>
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
