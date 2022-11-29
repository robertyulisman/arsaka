import React from "react";
import { useTranslation } from "react-i18next";

import Scroll from "react-scroll";
const Element = Scroll.Element;

const ContactCompany = ({ data }) => {
  const { t } = useTranslation();
  const [message, setMessage] = React.useState("");
  const [nama, setNama] = React.useState("");
  const [email, setEmail] = React.useState("");

  const handleSubmit = () => {
    const noWa = "6281372413324";
    const text = `hallo Pak,
    saya ${nama} dengan email ${email} ingin bertanya tentang Perusahaan Bapak
    ${message}`;
    window.open(
      `https://api.whatsapp.com/send/?phone=${noWa}&text=${text}`,
      "_blank"
    );
  };
  return (
    <Element name="contact" className="w-full h-[100%] py-20 bg-primary-one">
      <div className="max-w-[1240px] m-auto ">
        <h2 className="text-center text-2xl mb-8 font-bold text-secondary-one ">
          {t("hubungi_tag")}
        </h2>
        <div className="grid p-5 md:p-5 lg:p-0 md:grid-cols-2 ">
          <div>
            <h1 className="text-2xl text-white font-bold">{data.nama}</h1>
            <h2 className="text-xl text-white mt-6 font-bold">
              {" "}
              {t("hubungi_alamat")} :
            </h2>
            <p className="text-white mt-2">{data.alamat}</p>

            <h2 className="text-xl text-white mt-6 font-bold">
              {" "}
              {t("hubungi_Telp")} :
            </h2>
            <p className="text-white mt-2">{data.telephone}</p>
            <h2 className="text-xl text-white mt-6 font-bold">Fax:</h2>
            <p className="text-white mt-2">{data.fax}</p>
          </div>
          <div className="mt-10 md:mt-0">
            <div className="flex gap-5 ">
              <input
                className="w-full py-3 px-4 rounded-md"
                type="text"
                placeholder={t("hubungi_nama")}
                value={nama}
                onChange={(e) => setNama(e.target.value)}
              />
              <input
                className="w-full py-3 px-4 rounded-md"
                type="text"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <textarea
              className="w-full rounded-md mt-5 py-3 px-4"
              name="message"
              cols="30"
              rows="5"
              placeholder={t("hubungi_pesan")}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              onClick={handleSubmit}
              className="bg-[#F38E16] w-[200px] rounded-md font-medium my-4 mx-auto py-3 text-black"
            >
              {t("hubungi_tombol")}
            </button>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default ContactCompany;
