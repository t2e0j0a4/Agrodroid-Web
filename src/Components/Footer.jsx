import React from 'react'

import { BsInstagram , BsTwitter , BsLinkedin , BsFacebook } from "react-icons/bs"

const Footer = () => {
  return (
    <>
        <section id='footer' className='w-[100%] border-t-2 border-green-700 h-[100%] mt-4 flex flex-row items-center justify-around py-8 flex-wrap md:flex-nowrap border-opacity-5'>
            <div className="side1 my-4 md:my-0">
                <span className='text-2xl font-bold font-nunitosans'>Copyright &copy; Agrodroid</span>
            </div>
            <div className="side2 flex space-x-6 my-4 md:my-0">
                <a href='/' target="_blank" className="w-[50%]"><BsFacebook id='facebook' className="w-8 h-8"/></a>
                <a href='/' target="_blank" className="w-[50%]"><BsInstagram id='instagram' className="w-8 h-8"/></a>
                <a href='/' target="_blank" className="w-[50%]"><BsLinkedin id='linkedin' className="w-8 h-8"/></a>
                <a href='/' target="_blank" className="w-[50%]"><BsTwitter id='twitter' className="w-8 h-8"/></a>
            </div>
        </section>
    </>
  )
}

export default Footer