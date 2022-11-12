import React from "react";

import "./PhotoGallery.css";

const PhotoGallery = () => {
  return (
    <>
      <main id="photo-gallery-section" className="w-[100%] h-[100%]">
        <section id="photo-gallery" className="w-[100%] h-[100%] bg-white pt-2 pl-4">
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

          <div id="photo" className="w-[90%] md:w-[60%] h-[440px] bg-white mx-auto rounded-[8px] shadow-sm mt-8" data-aos="zoom-in"
          data-aos-duration="800"></div>

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
