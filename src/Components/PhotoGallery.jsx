import React from "react";

import "./PhotoGallery.css";

import Pic1 from '../Images/PG1.jpg';
import Pic2 from '../Images/Prost.png';

import {BsArrowUpRight} from "react-icons/bs";

const PhotoGallery = () => {

  // const images = [
  //   Pic1, Pic2, Pic3
  // ];

  // const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setIndex((i) => (i + 1) % images.length);
  //   }, 5000);
  //   return () => clearInterval(intervalId);
  // }, [images.length]);

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

          {/* <div className="image-gallery" data-aos="zoom-in"
          data-aos-duration="800">
            {images.map((src, i) => (
              <img key={src} className={`image ${i === index ? "active" : ""}`} src={src} alt={`Pic ${i}`}/>
            ))}
          </div> */}

          <div className="imageGallery py-2 px-2 w-[100%] sm:w-[90%] md:w-[80%] mx-auto">
            <div className="images w-[100%] min-h-[75vh] flex flex-col md:flex-row items-start justify-center gap-[2rem] mt-4">
              <img src={Pic1} alt="PG1" className="flex-1 w-[98%] md:w-[45%] rounded-md border-[8px] border-solid border-[#f0f0f0] shadow-md"/>
              <div className="redirectImage">
                <img src={Pic2} alt="Prost_Win" />
                <div className="redirectBtn">
                  <a href="https://www.instagram.com/p/CqaYeTNhrh8/" target="_blank" rel="noreferrer">Redirect<BsArrowUpRight/></a>
                </div>
              </div>
            </div>
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



/* <a href="https://www.instagram.com/p/CqaYeTNhrh8/" target="_blank" rel="noreferrer" className=" w-[98%] md:w-[55%] flex-1 relative">
  <img src={Pic2} alt="Prost_Win" className="w-[100%] rounded-md hover:scale-[1.02] transition-all duration-300 border-[8px] border-[groove] border-gray-50 shadow-md"/>
  <span className="flex flex-row gap-[0.2rem] justify-start items-center absolute bottom-0 left-0 ml-[14px] mb-[8px] font-[Poppins] text-[#FFF]">Redirect<BsArrowUpRight/></span>
</a> */