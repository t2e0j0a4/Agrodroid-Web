import React from "react";

const advantages = [
  {
    id: 1,
    head: "Services that are Fully Autonomous",
    animation: "zoom-out",
  },
  {
    id: 2,
    head: "Purely Solar-Powered, CO2-Neutral Technology",
    animation: "zoom-in",
  },
  {
    id: 3,
    head: "Increased Production",
    animation: "zoom-out",
  },
  {
    id: 4,
    head: "81.45% Commercial & 76.06% Traditional Margins.",
    animation: "zoom-out",
  },
  {
    id: 5,
    head: "Agriculture Without Hustle",
    animation: "zoom-in",
  },
  {
    id: 6,
    head: "Time Efficient",
    animation: "zoom-out",
  },
];

const Advantages = () => {
  return (
    <main id="advantages" className="w-[100%] h-[100%] overflow-x-hidden md:overflow-y-hidden">
      <section className="w-[100%] h-[100%] pt-16 pl-4">
        <div
          className="text-3xl font-nunitosans mt-4 mb-1 text-[#004346] ml-4 pt-2"
          data-aos="zoom-in"
          data-aos-duration="600"
        >
          Advantages
        </div>
        <div
          id="sub-head"
          className="w-28 h-[0.15rem] rounded bg-[#f29f05] mb-2 ml-4"
          data-aos="zoom-in"
          data-aos-duration="700"
        ></div>
        <div
          id="sub-head"
          className="w-64 h-auto break-words rounded text-[#252525] font-[Poppins] font-[600] mb-2 ml-4 "
          data-aos="zoom-in"
          data-aos-duration="900"
        >
          The Smart Way to get your Benefits
        </div>

        <div className="rows-wrapper w-[100%] h-auto mb-20 md:mb-12">
          <div className="box-wrapper pl-4 pr-8 md:gap-x-6 pt-16 w-[100%] md:grid md:grid-rows-1 md:grid-cols-3 md:gap-y-8 sm:grid-rows-3 sm:grid-cols-1 sm:gap-y-6">
            {advantages.map((each) => {
              return (
                <div
                  key={each.id}
                  className="box w-[86%] mx-auto select-none md:w-[96%] h-[160px] md:h-[150px] bg-green-500 relative shadow-md
                rounded-md mb-10 md:mb-12"
                  data-aos={each.animation}
                  data-aos-duration="700"
                  data-aos-offset="140"
                >
                  <div className="content z-[10] text-black p-3  flex flex-col items-start justify-around w-[100%] space-y-4">
                    <span className="break-words head font-leaguespartan font-semibold text-2xl z-[3] text-[#252525]">
                      {each.head}
                    </span>
                  </div>
                  <span className="absolute font-leaguespartan text-white text-6xl lg:text-8xl text-opacity-30 z-[0] bottom-0 right-0 mt-0 mr-8 text-center">
                    {each.id}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <div className="animated-arrows relative">
        <div className="scroll-down down-1"></div>
        <div className="scroll-down down-2"></div>
      </div>
    </main>
  );
};

export default Advantages;
