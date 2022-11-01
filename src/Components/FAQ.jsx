import React, { useState } from "react";
import questions from "../Data";
import SingleQuestion from "./FAQQuestion";

import { MdQuestionAnswer } from "react-icons/md";

const FAQ = () => {
    // eslint-disable-next-line
    const [question, setQuestion] = useState(questions);

  return (
    <>
      <main className="w-[100%] h-[100%] py-2" id="FAQ">
        <section className="w-[100%] pt-20 py-2 px-4">
          <div className="text-3xl font-nunitosans flex items-center flex-row gap-4 mt-4 my-2 text-[#004346] ml-4">
            FAQ <span className='w-fit'><MdQuestionAnswer className='text-green-800 text-outline'/></span>
          </div>
          <div
            id="sub-head"
            className="w-32 h-[0.15rem] rounded bg-[#f29f05] mb-2 ml-4 "
          ></div>
          <div
            id="sub-head"
            className="w-52 h-[0.15rem] rounded font-[Poppins] font-[600] mb-2 ml-4 "
          >
            Do you have querys?
          </div>
          <div className="questions w-[90%] lg:w-[60%] mx-auto mt-8 mb-8 duration-500">
            {question.map((q) => {
              return (
                <SingleQuestion
                  key={q.id}
                  {...q}
                ></SingleQuestion>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
};

export default FAQ;
