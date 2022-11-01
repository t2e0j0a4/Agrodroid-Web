import React from 'react'
import thub from "../Images/T-hub.png";
import orbit from "../Images/The Eco-orbit.png";

import {SiHandshake} from "react-icons/si";

const Partners = () => {
  return (
    <>
        <section id="partners" className='w-[100%] h-[auto] pt-8 pb-2 px-4'>
        <div className="text-3xl max-w-fit flex flex-row gap-4 font-nunitosans mt-4 my-2 text-[#004346] ml-4">
            Partners <span className='w-fit'><SiHandshake className='text-green-800 text-outline'/></span>
          </div>
          <div
            id="sub-head"
            className="w-48 h-[0.15rem] rounded bg-[#f29f05] mb-2 ml-4 "
          ></div>
          <div
            id="sub-head"
            className="w-64 h-[0.15rem] rounded font-[Poppins] font-[600] mb-2 ml-4 "
          >
            We're better together.
          </div>
            <div className="partners flex flex-row justify-around flex-wrap py-0 sm:py-2">
                <img src={thub} alt="T-hub" className='w-[100px] pb-0 sm:pb-2'/>
                <img src={orbit} alt="The Eco-Orbit" className='w-[100px]'/>
            </div>

        </section>
    </>
  )
}

export default Partners
