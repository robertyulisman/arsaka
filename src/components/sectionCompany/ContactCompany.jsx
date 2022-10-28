import React from "react";
import Scroll from "react-scroll";
const Element = Scroll.Element;

const ContactCompany = ({ data }) => {
  return (
    <Element name="contact" className="w-full h-[100%] py-20 bg-primary-one">
      <div className="max-w-[1240px] m-auto ">
        <h2 className="text-center text-2xl mb-8 font-bold text-secondary-one ">
          CONTACT US
        </h2>
        <div className="grid p-5 md:p-5 lg:p-0 md:grid-cols-2 ">
          <div>
            <h1 className="text-2xl text-white font-bold">{data.nama}</h1>
            <h2 className="text-xl text-white mt-6 font-bold">Address :</h2>
            <p className="text-white mt-2">{data.alamat}</p>

            <h2 className="text-xl text-white mt-6 font-bold">Telephone :</h2>
            <p className="text-white mt-2">{data.telephone}</p>
            <h2 className="text-xl text-white mt-6 font-bold">Fax:</h2>
            <p className="text-white mt-2">{data.fax}</p>
          </div>
          <div className="mt-10 md:mt-0">
            <div className="flex gap-5 ">
              <input
                className="w-full py-3 px-4 rounded-md"
                type="text"
                placeholder="Name"
              />
              <input
                className="w-full py-3 px-4 rounded-md"
                type="text"
                placeholder="Email"
              />
            </div>
            <textarea
              className="w-full rounded-md mt-5 py-3 px-4"
              name="message"
              cols="30"
              rows="5"
              placeholder="Message"
            />
            <button className="bg-[#F38E16] w-[200px] rounded-md font-medium my-4 mx-auto py-3 text-black">
              Submit
            </button>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default ContactCompany;
