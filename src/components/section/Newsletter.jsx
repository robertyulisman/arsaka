import React from "react";

const Newsletter = () => {
  const [message, setMessage] = React.useState("");

  const handleSubmit = () => {
    const noWa = "6281372413324";
    window.open(
      `https://api.whatsapp.com/send/?phone=${noWa}&text=${message}`,
      "_blank"
    );
  };
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
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="p-3 flex w-full rounded-md text-black"
                type="email"
                placeholder="Tuis Pesan kamu disini"
              />
              <button
                onClick={handleSubmit}
                className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3"
              >
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
