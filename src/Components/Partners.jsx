import React from 'react'
import thub from "../Images/T-hub.png";
import orbit from "../Images/The Eco-orbit.png";

import {SiHandshake} from "react-icons/si";

const partners = [
  {id : 1 , pic : thub , like:'in'},
  {id : 2 , pic : orbit , like:'out'}
];

const Partners = () => {
  return (
    <>
        <section id="partners" className='w-[100%] h-[100%] pt-8 pb-2 px-4 bg-white'>
        <div className="text-3xl max-w-fit flex flex-row gap-4 font-nunitosans mt-4 my-2 text-[#004346] ml-4" data-aos="zoom-in"
          data-aos-duration="600">
            Partners <span className='w-fit'><SiHandshake className='text-green-800 text-outline'/></span>
          </div>
          <div
            id="sub-head"
            className="w-48 h-[0.15rem] rounded bg-[#f29f05] mb-2 ml-4 " data-aos="zoom-in"
            data-aos-duration="700"
          ></div>
          <div
            id="sub-head"
            className="w-64 h-[0.15rem] rounded font-[Poppins] font-[600] mb-2 ml-4 " data-aos="zoom-in"
            data-aos-duration="900"
          >
            We're better together.
          </div>
            <div className="partners flex flex-row justify-around flex-wrap py-8">
                {
                  partners.map((img)=>{
                    return (
                      <img key={img.id} src={img.pic} alt={`Partner-${img.id}`} className='w-[100px] pb-0 sm:pb-2' data-aos={`zoom-${img.like}`} data-aos-duration="800" data-aos-offset="200"/>
                    )
                  })
                }
            </div>

        </section>
    </>
  )
}

export default Partners
