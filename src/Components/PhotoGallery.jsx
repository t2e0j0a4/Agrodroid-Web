import React, { useState, useEffect } from "react";

import "./PhotoGallery.css";

import Pic1 from "../Images/Startup-India Logo.png";
import Pic2 from '../Images/PG1.jpg';
import Pic3 from "../Images/Prost Win.jpg";

const PhotoGallery = () => {

  const images = [
    Pic1, Pic2, Pic3
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((i) => (i + 1) % images.length);
    }, 5000);
    return () => clearInterval(intervalId);
  }, [images.length]);

  return (
    <>
      <main id="photo-gallery-section" className="w-[100%] h-[100%]">
        <section
          id="photo-gallery"
          className="w-[100%] h-[100%] bg-white pt-2 pl-4"
        >
          <div
            className="text-3xl font-nunitosans mt-4 mb-2 text-[#004346] ml-4 pt-2 text-left"
            data-aos="zoom-in"
            data-aos-duration="600"
          >
            Gallery
          </div>
          <div
            id="sub-head"
            className="w-40 h-[0.15rem] rounded bg-[#f29f05] mb-2 ml-4 "
            data-aos="zoom-in"
            data-aos-duration="700"
          ></div>
          <div
            id="sub-head"
            className="w-52 md:w-64 text-[#252525] rounded font-[Poppins] font-[600] mb-2 ml-4 text-left break-words "
            data-aos="zoom-in"
            data-aos-duration="900"
          >
            Sneak Peek to our Accolades
          </div>

          <div className="image-gallery" data-aos="zoom-in"
          data-aos-duration="800">
            {images.map((src, i) => (
              <img key={src} className={`image ${i === index ? "active" : ""}`} src={src} alt={`Pic ${i}`}/>
            ))}
          </div>

          <div className="animated-arrows relative mt-16 md:mt-12">
            <div className="scroll-down down-1"></div>
            <div className="scroll-down down-2"></div>
          </div>
        </section>
      </main>
    </>
  );
};

export default PhotoGallery;
