import React from "react";

const Newsletter = () => {
  return (
    <section id="contact">
      <div className="w-full py-16 bg-white text-black px-4">
        <div className="max-w-[1240px] mx-auto grid lg:grid-cols-2 gap-4">
          <div className=" my-4">
            <p className="text-[#F38E16] font-bold text-2xl">CONTACT</p>
            <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">
              Need Help and want to Contact Us ?
            </h1>
            <p>let us know by sending an Email.</p>
          </div>
          <div className="my-4 py-10 px-4 bg-slate-800 rounded-md">
            <div className="flex flex-col sm:flex-row items-center justify-between w-full">
              <input
                className="p-3 flex w-full rounded-md text-black"
                type="email"
                placeholder="Enter Email"
              />
              <button className="bg-[#00df9a] text-black rounded-md font-medium w-[200px] ml-4 my-6 px-6 py-3">
                Sent
              </button>
            </div>
            <p className="text-white">
              We care bout the protection of your data. Read our{" "}
              <span className="text-[#00df9a]">Privacy Policy.</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
