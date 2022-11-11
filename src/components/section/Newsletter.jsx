import React from "react";

const Newsletter = () => {
  return (
    <section id="contact">
      <div className="w-full py-16 bg-white text-black px-4">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 gap-4">
          <div className=" my-4">
            <p className="text-[#F38E16] font-bold text-2xl">KONTAK</p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Butuh Bantuan dan ingin Menghubungi Kami ?
            </h1>
            <p>silahkan ketik pesan dibawah dan kirim melalui Whatsapp</p>
          </div>
          <div className="my-4 py-10 px-4 bg-slate-800 rounded-md">
            <div className="flex flex-col sm:flex-row items-center justify-between w-full">
              <input
                className="p-3 flex w-full rounded-md text-black"
                type="email"
                placeholder="Tuis Pesan kamu disini"
              />
              <button className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">
                Kirim
              </button>
            </div>
            <p className="text-white">
            Kami peduli dengan perlindungan data Anda. silahkan Baca{" "}
              <span className="text-[#00df9a]">Privacy Policy.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
