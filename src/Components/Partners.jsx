import React from 'react'

import aws from "../Images/aws Activate.png"
import orbit from "../Images/Eco-Orbit.png";
import eDAM from "../Images/eDAM.png";

import {SiHandshake} from "react-icons/si";

const partners = [
  {id : 1 , pic : aws , desc : 'AWS credits of $5000 were received from Eureka2022.' , like:'in'},
  {id : 2 , pic : orbit , desc : 'Technical assistance in the integration of deep learning into robots' , like:'out'},
  {id : 3 , pic : eDAM , desc : 'e-DAM | Talent acquisition partner' , like : 'in', redirect : "https://edam.tech/"}
];


const PartnerInfo = ({partner}) => {
  const {pic, desc, redirect} = partner;
  return (
    <div
      id="partnerInfo"
      className="flex flex-col items-center justify-center w-[90%] lg:w-[100%] h-[300px] p-3 bg-white rounded-[6px] hover:rounded-[20px] hover:scale-[1.10] transition-all duration-300 hover:bg-gray-50 gap-y-4 hover:shadow-lg"
    >
      {redirect ? (
        <a href={redirect} target="_blank" rel="noreferrer" className='w-[200px]'><img src={pic} alt="Partners-Tag" className='w-[100%] rounded-[50%]'/></a>
      ) : (
        <img src={pic} alt="Partners-Tag" className="w-[200px] rounded-[50%]" />
      )}
      <span className="text-center font-[Poppins] text-lg font-semibold">
        {desc}
      </span>
    </div>
  );
}

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
          
          <div id="morePartners" className='flex flex-row lg:flex-nowrap flex-wrap items-center justify-center gap-x-5 gap-y-6 my-16 w-[96%] mx-auto'>
            {
              partners.map((partner)=>{
                return (
                  <PartnerInfo key={partner.id} partner={partner}/>
                )
              })
            }
          </div>

        </section>
    </>
  )
}

export default Partners
