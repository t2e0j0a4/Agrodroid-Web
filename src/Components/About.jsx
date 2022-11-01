import React  from 'react'

import { BsLinkedin , BsInstagram } from "react-icons/bs";

import about from "../Images/Image1.png";
import Binoculars from "../Images/Binoculars.png";
import Target from "../Images/Target.png";
import Team from "../Images/Team.png";



import Partner1 from "../Images/Partner-1.png";
import Partner2 from "../Images/Partner-2.png";
import Partner3 from "../Images/Partner-3.png";
import Partner4 from "../Images/Partner-4.png";


const teamMembers = [
    {key:1, name:"Mahesh Vuppu" , linkedin: "https://linkedin/in/..." , instagram:"https://instagram.com/...", "desc":"Extremely ambitious to accomplish great things through serial entrepreneurship." , role:"Co-Founder"},
    {key:2, name:"Adhnan Mahboob.M" , linkedin: "https://linkedin/in/..." , instagram:"https://instagram.com/...", "desc":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, porro!" , role:"Co-Founder"},
    {key:3, name:"Jeshwanth Reddy.K" , linkedin: "https://linkedin/in/..." , instagram:"https://instagram.com/...", "desc":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, porro!" , role:"Co-Founder"},
    {key:4, name:"Naveen Gadala" , linkedin: "https://linkedin/in/..." , instagram:"https://instagram.com/...", "desc":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, porro!" , role:"Co-Founder"}
]




const About = () => {
  return (
    <main className="font-[Poppins] min-h-screen" id="about-us">
        {/* About Us Section */}
        <section
          className="w-[100%] min-h-screen bg-[#FFFFFF] text-black px-4 pb-2 pt-14"
          
        >
          <div className="text-3xl font-nunitosans mt-4 my-2 text-[#004346] ml-4 pt-2">
            About
          </div>
          <div
            id="sub-head"
            className="w-28 h-[0.15rem] rounded bg-[#f29f05] mb-2 ml-4 "
          ></div>
          <div
            id="sub-head"
            className="w-40 h-[0.15rem] rounded font-[Poppins] font-[600] mb-2 ml-4 "
          >
            What we're doing?
          </div>
          <div className="flex flex-row items-center justify-center flex-wrap lg:flex-nowrap my-2 mx-2">
            <div
              className="matter sm:w-[80%] lg:w-[50%] text-2xl ml-4 order-2 lg:order-1 text-center lg:text-left text-black font-semibold "
              id="text-image"
            >
              <span className="text-5xl font-leaguespartan font-bold">
                AgroDroid
              </span>{" "}
              is an autonomous rover robot that can sow seeds, weed fields,
              fertilize crops with precision spraying and solid fertilization,
              and harvest cotton .
            </div>
            <img
              className="image-about lg:w-[55%] w-[100%] mr-2 order-1 lg:order-2"
              src={about}
              alt="about-us"
            />
          </div>
          <div className="animated-arrows relative">
            <div className="scroll-down down-1"></div>
            <div className="scroll-down down-2"></div>
          </div>
        </section>
        {/* About Us Section Ends */}

        {/* Vision and Mission Starts */}
        <section id="vision-and-mission" className="w-[100%] min-h-screen bg-white px-4 pb-2 pt-16">
            <div className="main-head-v-m text-2xl font-nunitosans font-semibold text-[#004346] text-center">Vision and Mission</div>
            <div className="w-28 h-[0.15rem] bg-[#f29f05] rounded text-center m-auto mb-4 mt-2"></div>
            <div className="outer-box  flex flex-row my-3 justify-center items-center flex-wrap md:flex-nowrap space-y-20 md:space-y-0">
              <div className="inner w-[90%] md:w-[50%] h-[auto] flex flex-col items-center justify-center">
                    <img src={Binoculars} alt="Vision" className="w-[40%]"/>
                    <div className="inner-head text-lg font-bold my-6 italic text-center font-leaguespartan">Vision</div>
                    <div className="sub-head-line text-md w-[70%] text-center">Enlight the technology in farming to make it independent of labour.</div>
              </div>
              <div className="line w-1 h-96 bg-black rounded hidden md:block"></div>
              <div className="inner w-[85%] md:w-[50%] h-[auto] flex flex-col items-center justify-center">
                    <img src={Target} alt="Mission" className="sm:w-[60%] md:w-[50%] lg:w-[40%] "/>
                    <div className="inner-head text-lg font-bold my-6 italic text-center font-leaguespartan">Mission</div>
                    <div className="sub-head-line text-md w-[70%] text-center">To offer technical solutions for smart agriculture as a service to grow up its Production quality and revenues for farmers with 0% mental stress.</div>
              </div>
            </div>

            <div className="animated-arrows relative pt-10 mt-10 mb-4 text-center">
              <div className="scroll-down down-1"></div>
              <div className="scroll-down down-2"></div>
            </div>
        </section>
        {/* Vision and Mission Ends */}

        {/* Our Team Starts */}
        <section id="team-section" className="w-[100%] min-h-screen px-4 pb-2 pt-8">
          <div className="logo w-[30%] md:w-[15%] mx-auto py-3">
            <img src={Team} alt="Team"/>
          </div>
          <div className="team-member-cards ml-4 mt-8 grid sm:grid-cols-1 sm:grid-rows-4 sm:gap-y-3 md:grid-cols-2 md:grid-rows-2 md:gap-x-3 md:gap-y-3 lg:grid-cols-4 lg:grid-rows-1 lg:gap-x-3 mx-auto">
            {
              teamMembers.map((each)=>{
                return (
                  <div key={each.key} className="each-card flex flex-col w-[280px] bg-white  hover:scale-[1.05] hover:duration-300 hover:ease-in-out py-3 m-auto">
                    <img src={each.name === "Mahesh Vuppu" ? Partner1 : each.name === "Adhnan Mahboob.M" ? Partner2 : each.name === "Jeshwanth Reddy.K" ? Partner3 : each.name === "Naveen Gadala" ? Partner4 : ""} alt="member" className="object-cover my-1 w-[80%] h-[220px] rounded-[50%] m-auto "/>
                    <span className="post m-auto my-2 text-center italic">{each.role}</span>
                    <span className="name m-auto my-2 text-center font-nunitosans text-xl">{each.name}</span>
                    <span className="desc m-auto my-2 text-center w-[90%] font-lignt">{each.desc}</span>
                    <div className="social-media mx-auto my-2 w-[90%] flex text-center justify-center items-center">
                          <a href={each.linkedin} className="linkedin mx-auto my-2  text-center"><BsLinkedin id="linkedin" className=" w-8 h-auto"/></a>
                          <a href={each.instagram} className="linkedin mx-auto my-2  text-center"><BsInstagram id="instagram" className="w-8 h-auto"/></a>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className="my-7 mx-auto w-[100%] flex flex-col justify-center items-center space-y-5">
            <div className="text-center font-bold text-xl font-">and</div>
            <div className="text-center font-medium text-xl w-[80%] mx-auto md:w-auto">We have a Passionate technical team of <span className="font-bold text-2xl ">11 members</span> who are working on this project.</div>
          </div>

            <div className="animated-arrows relative pt-10 mt-10 mb-4 text-center">
              <div className="scroll-down down-1"></div>
              <div className="scroll-down down-2"></div>
            </div>
        </section>

        {/* Our Team Ends */}

      </main>
  )
}

export default About