import React from "react";

import services from "../Images/Services.png";

const Services = () => {
  return (
    <main
      id="services"
      className="w-[100%] h-[100%] md:min-h-screen mx-auto pt-4 md:pt-16"
    >
      <section className="w-[100%] h-[100%]  ">
        <div className="overflow-hidden w-[100%] lg:w-[50%] mx-auto pb-8 pt-4 md:pt-4 md:pb-8 z-[-1] flex justify-center items-center">
          <img
            src={services}
            alt="Services"
            className="rotate object-cover w-[100%] m-auto"
          />
          <span className="absolute text-[#004346] font-leaguespartan lg:text-3xl sm:text-[7vmin]">
            Services
          </span>
        </div>

        <div className="animated-arrows relative">
          <div className="scroll-down down-1"></div>
          <div className="scroll-down down-2"></div>
        </div>
      </section>
    </main>
  );
};

export default Services;
