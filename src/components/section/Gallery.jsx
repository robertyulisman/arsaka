import React from "react";
import { Fade } from "react-reveal";
import Image1 from "../../assets/gallery/1.jpg";
import Image2 from "../../assets/gallery/2.jpg";
import Image3 from "../../assets/gallery/3.jpg";
import Image4 from "../../assets/gallery/4.jpg";
import Image5 from "../../assets/gallery/5.jpg";
import Image6 from "../../assets/gallery/6.jpg";
import Image7 from "../../assets/gallery/7.jpg";
import Image8 from "../../assets/gallery/8.jpg";
import Image9 from "../../assets/gallery/9.jpg";
import Image10 from "../../assets/gallery/10.jpg";
import Image11 from "../../assets/gallery/11.jpg";
import Image12 from "../../assets/gallery/12.jpg";

import arsaka1 from "../../assets/gallery/arsaka/1.jpeg";
import arsaka2 from "../../assets/gallery/arsaka/2.jpeg";
import arsaka3 from "../../assets/gallery/arsaka/3.jpeg";
import arsaka4 from "../../assets/gallery/arsaka/4.jpeg";
import arsaka5 from "../../assets/gallery/arsaka/5.jpeg";
import arsaka6 from "../../assets/gallery/arsaka/6.jpeg";
import arsaka7 from "../../assets/gallery/arsaka/7.jpeg";
import arsaka8 from "../../assets/gallery/arsaka/8.jpeg";

import Lightbox from "react-awesome-lightbox";
// You need to import the CSS only once
import "react-awesome-lightbox/build/style.css";

export default function Gallery() {
  const [showImage, setShowImage] = React.useState(false);
  const [imageSelected, setImageSelected] = React.useState(null);

  const data = [
    {
      _id: 1,
      image: arsaka1,
      text: "kapal",
      delay: 0,
      ratio: "3/4",
    },
    {
      _id: 2,
      image: arsaka2,
      text: "kapal",
      delay: 200,
      ratio: "3/4",
    },
    {
      _id: 3,
      image: arsaka3,
      text: "kapal",
      delay: 500,
      ratio: "3/4",
    },
    {
      _id: 4,
      image: arsaka4,
      text: "kapal",
      delay: 700,
      ratio: "3/4",
    },
    {
      _id: 5,
      image: arsaka5,
      text: "kapal",
      delay: 700,
      ratio: "4/3",
    },
    {
      _id: 6,
      image: arsaka6,
      text: "kapal",
      delay: 0,
      ratio: "4/3",
    },

    {
      _id: 7,
      image: arsaka7,
      text: "kapal",
      delay: 300,
      ratio: "4/3",
    },
    {
      _id: 8,
      image: arsaka8,
      text: "kapal",
      delay: 400,
      ratio: "4/3",
    },
  ];
  return (
    <section
      id="gallery"
      className="bg-gradient-to-b from-[#FFFFFF] to-[#e7effa]"
    >
      <div className="max-w-[1240px] m-auto  py-20">
        <div className="container mx-auto">
          <div className="text-left px-4 mb-4">
            <p className="text-[#F38E16] font-bold p-2 text-center mb-10 text-2xl">
              GALLERY
            </p>
            <div className="flex justify-between items-center">
              <p className="text-gray">
                Berikut beberapa Gallery dan Dokumentasi yang sudah kami
                kerjakan.
              </p>

              <button
                className="py-2 px-8 text-primary underline hover:no-underline hover:bg-[#F38E16] hover:text-white transition-all duration-300 ease-in-out hover:rounded-md "
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/pt.als_btm/?hl=id",
                    "_blank"
                  )
                }
              >
                Lihat Semua
              </button>
            </div>
          </div>
          <div className="mx-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {data.map((item) => (
                <Fade up>
                  <div className="flex flex-col">
                    <div
                      className={`h-15 bg-blue aspect-[4/3] rounded-lg md:aspect-[4/3] xl:aspect-[4/3] overflow-hidden group relative hover:scale-95 transition-all duration-500`}
                    >
                      <img
                        onClick={() => {
                          setImageSelected(item);
                          setShowImage(true);
                        }}
                        className="w-full h-full object-cover hover:cursor-pointer absolute group-hover:scale-125 transition-all duration-500"
                        src={item.image}
                        alt={item.text}
                      />
                    </div>
                    {/* <span className="text-center mt-2">{item.text}</span> */}
                  </div>
                </Fade>
              ))}
            </div>
            {showImage ? (
              <Lightbox
                className="w-full h-full"
                image={imageSelected?.image}
                title={imageSelected?.text}
                onClose={() => setShowImage(false)}
              />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
