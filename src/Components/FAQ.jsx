import React, { useState } from "react";
import questions from "../Data";
import SingleQuestion from "./FAQQuestion";

import { MdQuestionAnswer } from "react-icons/md";

const FAQ = () => {

  // eslint-disable-next-line
  const [question, setQuestion] = useState(questions);

  const [more , setMore] = useState(false);

  const moreQuerys = () => {
    if (more === false){
      setQuestion([...question,
        {
          id: 6,
          title: 'How long it takes for harvesting cotton?',
          info:
            "For 2 Acres of Land in 6 Hour.",
        },{
          id: 7,
          title: 'Does it require any labour?',
          info:
            "There is no need of labour as it is fully autonomous.",
        },{
          id: 8,
          title: 'Is this service available to night?',
          info:
            "Yes, We have a battery backups for 4-6 hours. So, Service available for night also.",
        },{
          id: 9,
          title: 'How we can book our service?',
          info:
            "Over online through our website and mobile application and also there are always our service centers in your village.",
        },{
          id: 10,
          title: 'Supported crops ? ',
          info:
            "Cotton and Non-Leafy Vegetables",
        },{
          id: 11,
          title: 'Is this environmental friendly ?',
          info:
            "Yes, It's CO2 Free",
        }
      ]);
    }

    if (more){
      setQuestion([...questions])
    }
  }

  return (
    <>
      <main className="w-[100%] h-[100%] pt-12 md:pt-16 pb-8 overflow-x-hidden bg-gray-50" id="FAQ">
        <section className="w-[100%] h-[100%] py-2 px-4 overflow-x-hidden">
          <div className="text-3xl font-nunitosans flex items-center flex-row gap-4 mt-4 my-2 text-[#004346] ml-4" data-aos="zoom-in" data-aos-duration="400">
            FAQ <span className='w-fit'><MdQuestionAnswer className='text-green-800 text-outline'/></span>
          </div>
          <div
            id="sub-head"
            className="w-32 h-[0.15rem] rounded bg-[#f29f05] mb-2 ml-4 " data-aos="zoom-in" data-aos-duration="700"
          ></div>
          <div
            id="sub-head"
            className="w-48 md:w-52 h-[0.15rem] rounded break-words font-[Poppins] font-[600] mb-2 ml-4 " data-aos="zoom-in" data-aos-duration="900"
          >
            Do you have querys?
          </div>
          <div className="questions w-[90%] lg:w-[60%] mx-auto mt-8 mb-4 bg-gray-50 duration-500">
            {question.map((q) => {
              return (
                <SingleQuestion
                  key={q.id}
                  {...q}
                ></SingleQuestion>
              );
            })}
          </div>

          <div className={`flex flex-row w-[90%] lg:w-[60%] justify-end mx-auto`}>
            <span className="cursor-pointer text-sm font-medium italic text-gray-800 hover:text-gray-900 font-[Poppins]" onClick={
              ()=>{
                setMore(!more);
                moreQuerys();
              }
            }>{more ? "Less" : "More"}</span>
            {/* <span className="" ></span> */}
          </div>
        </section>
      </main>
    </>
  );
};

export default FAQ;
