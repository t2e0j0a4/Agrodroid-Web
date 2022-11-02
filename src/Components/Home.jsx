import React , {useState} from 'react'

const Home = ({navbar}) => {

    let Links = [
        { name: "Home", link: "#home" },
        { name: "About", link: "#about-us" },
        { name: "Services", link: "#services" },
        { name: "Advantages", link: "#advantages" },
        { name: "FAQ", link: "#FAQ" },
    ];
      
    const [open, setOpen] = useState(false);

  return (
    <>
        {/* <header className="z-10 relative w-[100%] h-[100vh] overflow-hidden text-center flex items-center justify-center" id="header"> */}
        <header className="relative w-[100%] h-[100vh]" id="header">

        {/* <video id="back-video" autoPlay loop  muted playsInline className="z-[-1] absolute top-20 left-0 w-[100%] h-[100vh] bg-cover">
          <source src={Sample} type="video/mp4"/>
        </video> */}

        <div className={navbar === true ? "bg-white z-10 w-full fixed top-0 left-0 font-[Poppins] md:h-auto" : "bg-white bg-opacity-0 z-10 w-full fixed top-0 left-0 font-[Poppins] md:h-auto"}>
          <div className="md:flex items-center justify-between py-4 md:px-10 px-7 z-10">
            <a
              href="/"
              className="font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800"
            >
              <span className="text-3xl mr-1 pt-2 sm:text-center">Agrodroid</span>
            </a>

            <div
              onClick={() => setOpen(!open)}
              className=" text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
            >
              <ion-icon name={open ? "close" : "menu"}></ion-icon>
            </div>

            <ul
              className={`md:flex md:items-center md:pb-0 pb-8 absolute md:static md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 md:h-auto h-[100vh] md:transition-none duration-300 ease-in ${navbar === true ? "bg-white" : "bg-white md:bg-white md:bg-opacity-0 duration-500 transition-all"} ${
                open ? "top-16 " : "top-[-579px]"
              } text-center`}
            >
              {Links.map((link) => (
                <li key={link.name} className="md:ml-8 text-xl md:my-0 my-14">
                  <a
                    href={link.link}
                    className={navbar === true ?"text-gray-800" : "text-gray-800 md:text-gray-100"}
                    target="_parent"
                    onClick={() => {
                      setOpen(!open);
                      document.title=`Agrodroid | ${link.name}`;
                    }}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div id="home" className="w-[100%] h-[100vh] flex justify-center items-center flex-col  m-auto">
        
        <h1 className="text-black outline- z-9 text-[16vmin] font-[Poppins] text-center">AGRODROID</h1>
      </div>

      </header>
    </>
  )
}

export default Home