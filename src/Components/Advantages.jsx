import React from "react";


const Advantages = () => {
  return (
    <main id="advantages" className="w-[100%] min-h-screen ">
      <section className="w-[100%] pt-16 pl-4">
        <div className="text-3xl font-nunitosans mt-4 my-2 text-[#004346] ml-4 pt-2">
          Advantages
        </div>
        <div
          id="sub-head"
          className="w-28 h-[0.15rem] rounded bg-[#f29f05] mb-2 ml-4 "
        ></div>
        <div
          id="sub-head"
          className="w-80 h-[0.15rem] break-words rounded font-[Poppins] font-[600] mb-2 ml-4 "
        >
          The Smart Way to get your Benefits
        </div>

        <div className="rows-wrapper w-[100%] h-auto">

          <div className="box-wrapper pl-8 pr-8 md:gap-x-6 pt-16 w-[100%] md:grid md:grid-rows-1 md:grid-cols-3 sm:grid-rows-3 sm:grid-cols-1 sm:gap-y-6">

            <div
              className="box w-[100%]  h-[100%] bg-green-400 relative shadow-md
          rounded-md mb-10 md:mb-0"
            >
              <div className="content z-[10] text-black p-3  flex flex-col items-start justify-around w-[100%] space-y-4">
                <span className="head font-[Poppins] font-semibold text-2xl z-[3]">
                  Heading
                </span>
                <span className="info z-[3]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae, omnis nam laboriosam reprehenderit facere minima
                  eligendi. Eum expedita ratione ab.
                </span>
              </div>
              <span className="absolute font-leaguespartan text-white text-8xl text-opacity-30 z-[0] top-10 right-0 mt-0 mr-8 text-center">
                1
              </span>
            </div>

            <div
              className="box w-[100%] h-[100%] bg-green-400 relative shadow-md
          rounded-md mb-10 md:mb-0"
            >
              <div className="content z-[10] text-black p-3  flex flex-col items-start justify-around w-[100%] space-y-4">
                <span className="head font-[Poppins] font-semibold text-2xl z-[3]">
                  Heading
                </span>
                <span className="info z-[3]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae, omnis nam laboriosam reprehenderit facere minima
                  eligendi. Eum expedita ratione ab.
                </span>
              </div>
              <span className="absolute font-leaguespartan text-white text-8xl text-opacity-30 z-[0] top-10 right-0 mt-0 mr-8 text-center">
                2
              </span>
            </div>

            <div
              className="box w-[100%] h-[100%] bg-green-400 relative shadow-md
          rounded-md mb-10 md:mb-0"
            >
              <div className="content z-[10] text-black p-3  flex flex-col items-start justify-around w-[100%] space-y-4">
                <span className="head font-[Poppins] font-semibold text-2xl z-[3]">
                  Heading
                </span>
                <span className="info z-[3]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae, omnis nam laboriosam reprehenderit facere minima
                  eligendi. Eum expedita ratione ab.
                </span>
              </div>
              <span className="absolute font-leaguespartan text-white text-8xl text-opacity-30 z-[0] top-10 right-0 mt-0 mr-8 text-center">
                3
              </span>
            </div>

          </div>

        </div>

      </section>
    </main>
  );
};

export default Advantages;
