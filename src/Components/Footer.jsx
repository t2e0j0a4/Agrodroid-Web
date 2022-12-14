import React from 'react'

import { BsInstagram , BsTwitter , BsLinkedin , BsFacebook } from "react-icons/bs"

const Footer = () => {
  return (
    <>
        <section id='footer' className='w-[100%] border-t-2 border-green-700 h-[100%]  flex flex-row items-center justify-around py-8 flex-wrap md:flex-nowrap border-opacity-5 gap-x-6'>
            <div className="side1 my-4 md:my-0 mx-auto md:mx-0 text-center" data-aos="zoom-in" data-aos-offset="-200" data-aos-duration='600'>
                <span className='text-xl text-center md:text-left font-normal font-[Poppins] break-words italic'>Copyright &copy; <span className='text-gray-500'>AgroDroid - All Rights Reserved</span> </span>
            </div>
            <div className="side2 flex space-x-6 my-4 md:my-0" data-aos="zoom-out" data-aos-offset="-100" data-aos-duration='600'>
                <a href='https://www.facebook.com/profile.php?id=100087642785714' target="_blank" rel="noreferrer" className="w-[50%]"><BsFacebook id='facebook' className="w-8 h-8"/></a>
                <a href='https://instagram.com/agrodroid/' rel="noreferrer" target="_blank" className="w-[50%]"><BsInstagram id='instagram-foo' className="w-8 h-8"/></a>
                <a href='/' target="_blank" rel="noreferrer" className="w-[50%]"><BsLinkedin id='linkedin-foo' className="w-8 h-8"/></a>
                <a href='https://twitter.com/AgroDroid' target="_blank" rel="noreferrer" className="w-[50%]"><BsTwitter id='twitter' className="w-8 h-8"/></a>
            </div>
        </section>
        <div className="more flex w-[100%] mx-auto text-center justify-center text-2xl font-[Poppins] text-[#252525] font-medium break-words mb-2">
          Production by AgroDroid &reg;
        </div>
    </>
  )
}

export default Footer