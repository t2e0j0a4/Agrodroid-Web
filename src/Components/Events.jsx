import React from "react";

import Build from "../Images/Build2.0-Eve.png";
import Google from "../Images/GoogleDevelopers-Eve.png";
import Surge from "../Images/Surge-Eve.png";
import Eyantra from "../Images/Eyantra-Eve.jpg";

const events = [
  {
    id: 1,
    info: "Boeing University Innovation Leadership Program",
    img: Build,
    o1: 2,
    o2: 1,
    text: "right",
  },
  {
    id: 2,
    info: "Seed fund support up to INR 1cr+ and INR 25 lakhs worth of prizes.",
    img: Eyantra,
    o1: 1,
    o2: 2,
    text: "left",
  },
  {
    id: 3,
    info: "Start-Up Bootcamp | University Edition",
    img: Google,
    o1: 2,
    o2: 1,
    text: "right",
  },
  {
    id: 4,
    info: "Surge combines up to $3 million of seed capital with company-building workshops, global immersion trips and support from a community of exceptional founders.",
    img: Surge,
    o1: 1,
    o2: 2,
    text: "left",
  },
];

const Events = () => {
  return (
    <>
      <main
        id="events"
        className="w-[100%] h-[100%] overflow-x-hidden pt-8 bg-gray-50"
      >
        <section className="w-[100%] h-[100%] px-4 py-1 overflow-x-hidden">
          <div
            className="text-3xl font-nunitosans mb-2 text-[#004346] ml-4 pt-2 text-left"
            data-aos="zoom-in"
            data-aos-duration="600"
          >
            Events
          </div>
          <div
            id="sub-head"
            className="w-28 h-[0.15rem] rounded bg-[#f29f05] mb-2 ml-4 "
            data-aos="zoom-in"
            data-aos-duration="700"
          ></div>
          <div
            id="sub-head"
            className="w-52 h-[0.15rem] rounded font-[Poppins] text-[#252525] font-[600] mb-2 ml-4 text-left"
            data-aos="zoom-in"
            data-aos-duration="900"
          >
            Next Great Experiences
          </div>

          <div
            id="event-scroll"
            className="eventdisplay overflow-y-scroll w-[90%] md:w-[75%] xl:w-[68%] mt-14 md:mt-12 h-[450px] bg-white p-3 mb-16 md:mb-14 mx-auto shadow-md relative z-[10] rounded-lg"
            data-aos="zoom-out"
            data-aos-duration="900"
            data-aos-offset="300"
          >
            {events.map((eve) => {
              return (
                <>
                  <div
                    id="single-event"
                    key={eve.id}
                    className="w-[90%] mx-auto flex gap-y-4 md:gap-y-0 md:gap-x-6 flex-col md:flex-row items-center bg-gray-50 justify-between my-6 mb-8 p-4 z-[20] rounded-[10px] shadow-sm"
                  >
                    <div
                      className={`md:w-[75%] w-[100%] gap-y-10 z-[20] text-center order-2 md:order-${eve.o1}`}
                    >
                      <span className="font-medium text-lg font-[Poppins] text-center text-[#252525]">
                        {eve.info}
                      </span>
                    </div>
                    <img loading='lazy'
                      src={eve.img}
                      alt="Event"
                      className={`w-[80%] md:w-[25%] object-cover order-1 md:order-${eve.o2}`}
                    />
                  </div>
                </>
              );
            })}
          </div>

          <div className="animated-arrows relative pt-10 md:pt-0">
            <div className="scroll-down down-1"></div>
            <div className="scroll-down down-2"></div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Events;
