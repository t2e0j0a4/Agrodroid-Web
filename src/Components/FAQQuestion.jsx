import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const FAQQuestion = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <>
      <div
        className="question-box border-b-2 py-4 cursor-pointer transition-all duration-500"
        onClick={() => {
          setShowInfo(!showInfo);
        }}
      >
        <div className="question-section flex items-center justify-between duration-500 my-2">
          <span
            className="text-lg font-semibold italic font-[Poppins] cursor-pointer select-none"
            onClick={() => {
              setShowInfo(!showInfo);
            }}
          >
            {title}
          </span>
          <span
            className="cursor-pointer p-1 duration-500 transition-all"
            onClick={() => {
              setShowInfo(!showInfo);
            }}
          >
            {showInfo === true ? (
              <AiOutlineMinus className="hover:scale-110 font-bold text-xl text-[#004346]" />
            ) : (
              <AiOutlinePlus className="hover:scale-110 font-bold text-xl text-[#004346]" />
            )}
          </span>
        </div>
        {showInfo && (
          <div className="answer-section duration-500 transition-all">
            <p className="select-none duration-500 transition-all text-sm py-2 font-light font-[Poppins]">
              {info}
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default FAQQuestion;
