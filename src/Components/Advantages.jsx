import React from "react";

const advantages = [
  {
    id: 1,
    head: "Heading",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis amet odit ea voluptate numquam. Aut.",
    animation : "zoom-out-right"    
  },
  {
    id: 2,
    head: "Heading",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis amet odit ea voluptate numquam. Aut.",
    animation : "zoom-in"    
  },
  {
    id: 3,
    head: "Heading",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis amet odit ea voluptate numquam. Aut.",
    animation : "zoom-out-left"
  },
  {
    id: 4,
    head: "Heading",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis amet odit ea voluptate numquam. Aut.",
    animation : "zoom-out-right"
  },
  {
    id: 5,
    head: "Heading",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis amet odit ea voluptate numquam. Aut.",
    animation : "zoom-in"
  },
  {
    id: 6,
    head: "Heading",
    info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis amet odit ea voluptate numquam. Aut.",
    animation : "zoom-out-left"    
  },
];

const Advantages = () => {
  return (
    <main id="advantages" className="w-[100%] min-h-screen ">
      <section className="w-[100%] pt-16 pl-4">
        <div className="text-3xl font-nunitosans mt-4 mb-1 text-[#004346] ml-4 pt-2" data-aos="fade-right" data-aos-duration="400">
          Advantages
        </div>
        <div
          id="sub-head"
          className="w-28 h-[0.15rem] rounded bg-[#f29f05] mb-2 ml-4" data-aos="fade-right" data-aos-duration="700"
        ></div>
        <div
          id="sub-head"
          className="w-80 h-[0.15rem] break-words rounded font-[Poppins] font-[600] mb-2 ml-4 " data-aos="fade-right" data-aos-duration="900"
        >
          The Smart Way to get your Benefits
        </div>

        <div className="rows-wrapper w-[100%] h-auto mb-16 md:mb-18">
          <div className="box-wrapper pl-8 pr-8 md:gap-x-6 pt-16 w-[100%] md:grid md:grid-rows-1 md:grid-cols-3 md:gap-y-16 sm:grid-rows-3 sm:grid-cols-1 sm:gap-y-6">
            {advantages.map((each) => {
              return (
                <div
                  key={each.id}
                  className="box w-[90%] mx-auto hover:scale-105 select-none md:w-[100%] h-[100%] bg-green-400 relative shadow-md
                rounded-md mb-10 md:mb-6" data-aos={each.animation} data-aos-duration="600" data-aos-offset="-100"
                >
                  <div className="content z-[10] text-black p-3  flex flex-col items-start justify-around w-[100%] space-y-4">
                    <span className="break-words head font-[Poppins] font-semibold text-2xl z-[3]">
                      {each.head}
                    </span>
                    <span className="info z-[3]break-words ">{each.info}</span>
                  </div>
                  <span className="absolute font-leaguespartan text-white text-8xl text-opacity-30 z-[0] top-10 right-0 mt-0 mr-8 text-center">
                    {each.id}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="animated-arrows relative">
          <div className="scroll-down down-1"></div>
          <div className="scroll-down down-2"></div>
        </div>
      </section>
    </main>
  );
};

export default Advantages;
