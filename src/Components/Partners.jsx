import React from 'react'

import aws from "../Images/aws Activate.png"
import orbit from "../Images/Eco-Orbit.png";
import eDAM from "../Images/eDAM.png";

import {SiHandshake} from "react-icons/si";

const partners = [
  {id : 1 , pic : aws , desc : 'AWS credits of $5000 were received from Eureka2022.' , like:'in'},
  {id : 2 , pic : orbit , desc : 'Technical assistance in the integration of deep learning into robots' , like:'out'},
  {id : 3 , pic : eDAM , desc : 'e-DAM | Talent acquisition partner' , like : 'in'}
];


const PartnerInfo = ({partnerLogo,partnerDesc}) => {
  return (
    <div id='partnerInfo' className='flex flex-col items-center justify-center w-[70%] lg:w-[100%] h-[300px] p-4 rounded-lg bg-gray-50 hover:scale-[1.05] gap-y-4'>
      <img src={partnerLogo} alt="Partners-Tag" className='w-[200px] rounded-[50%]'/>
      <span className='text-center font-[Poppins] text-lg font-light'>{partnerDesc}</span>
    </div>
  )
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
          
          <div id="morePartners" className='flex flex-row lg:flex-nowrap flex-wrap items-center justify-center gap-x-3 gap-y-6 my-16'>
            {
              partners.map((partner)=>{
                return (
                  <PartnerInfo key={partner.id} partnerLogo={partner.pic} partnerDesc={partner.desc}/>
                )
              })
            }
          </div>

        </section>
    </>
  )
}

export default Partners
