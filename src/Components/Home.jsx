import React, { useState } from "react";

import Logo1 from "../Images/AgroDr-B.png";
import Logo2 from "../Images/AgroDr-W.png";

import BG from "../Images/Rover.mp4";

let Links = [
  { id: 1, name: "Home", link: "#home" },
  { id: 2, name: "About", link: "#about-us" },
  { id: 3, name: "Services", link: "#services" },
  { id: 4, name: "Advantages", link: "#advantages" },
  { id: 5, name: "FAQ", link: "#FAQ" },
];

const Home = ({ navbar }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <header className="relative w-[100%] h-[100vh]" id="header">
        <div className="overlay absolute top-0 left-0 w-[100%] h-[100%] bg-black bg-opacity-0 z-[6]"></div>

        <div className="absolute top-0 w-[100%] h-[100vh]">
          <video
            src={BG}
            autoPlay
            loop
            muted
            className="h-[100%] w-[100%] object-cover"
          />
        </div>

        <nav
          id="navbar"
          className={
            navbar === true
              ? "w-[100%] h-[74px] bg-white fixed top-0 left-0 right-0 flex flex-row items-center justify-between font-[Poppins] z-[12]"
              : "w-[100%] h-[74px] bg-white bg-opacity-100 lg:bg-opacity-0 fixed top-0 left-0 right-0 flex flex-row items-center justify-between font-[Poppins] z-[10]"
          }
        >
          <div
            id="logo"
            className={`ml-6 lg:ml-10 text-3xl font-semibold ${
              navbar ? "text-gray-900" : "text-gray-900 lg:text-white"
            }`}
          >
            <a href="/">
              {navbar ? (
                <img src={Logo1} alt="Logo1" className={`w-[150px]`} />
              ) : (
                <>
                  <img
                    src={Logo2}
                    alt="Logo1"
                    className={`w-[150px] lg:block hidden`}
                  />{" "}
                  <img
                    src={Logo1}
                    alt="Logo1"
                    className={`w-[150px] block lg:hidden`}
                  />
                </>
              )}
            </a>
          </div>
          <ul
            id="navitems"
            className={`flex flex-col lg:flex-row items-start justify-start lg:items-center lg:justify-center lg:space-x-8 lg:mr-10 pt-10 lg:pt-0 absolute lg:static w-[100%] lg:w-auto bg-white h-[100vh] lg:h-auto space-y-10 lg:space-y-0 ${
              open ? "top-[74px]" : "top-[-900px]"
            } ${navbar === true ? "bg-white" : "bg-white lg:bg-opacity-0"}`}
          >
            {Links.map((link) => {
              return (
                <Linker
                  key={link.id}
                  {...link}
                  open={open}
                  setOpen={setOpen}
                  navbar={navbar}
                />
              );
            })}
          </ul>
          <div
            id="menu"
            className="block lg:hidden text-3xl cursor-pointer absolute top-0 right-0 mt-5 mr-5"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>
        </nav>

        <section
          id="home"
          className="w-[100%] h-[100%] absolute top-0 left-0 flex flex-col items-center md:justify-end justify-center flex-wrap lg:flex-nowrap z-[8] pt-16"
        >
          <h2 className="w-[50%] lg:w-[100%] italic text-[10vmin] md:text-[9vmin] lg:text-[10vmin] font-medium mb-8 text-center mx-auto text-gray-100 pt-72 md:pt-64 lg:pt-0">
            Farming Made Easy
          </h2>
        </section>
      </header>
    </>
  );
};

export default Home;

const Linker = ({ name, link, open, setOpen, navbar }) => {
  return (
    <li
      id="navigate"
      className={`flex flex-row items-center justify-center text-xl space-x-1 py-2 pl-9 lg:pl-0`}
    >
      <a
        className={`navhlink ${
          navbar ? "text-gray-900" : "text-gray-900 lg:text-gray-100"
        } hover:scale-[1.10]`}
        href={link}
        onClick={(e) => {
          setOpen(!open);
          document.title = `Agrodroid | ${name}`;
        }}
      >
        {name}
      </a>
    </li>
  );
};
