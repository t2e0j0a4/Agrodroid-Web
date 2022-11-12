import React, { useState } from "react";

// Component Imports
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import Advantages from "./Components/Advantages";
import Achivements from "./Components/Achivements";
import Events from "./Components/Events";
import PhotoGallery from "./Components/PhotoGallery";
// import Partners from "./Components/Partners";
import FAQ from "./Components/FAQ";
import Footer from "./Components/Footer";

const App = () => {
  const [navbar, setNavbar] = useState(false);

  const navbarColor = () => {
    if (window.scrollY >= 200) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", () => {
    navbarColor();
  });

  return (
    <>
      <Home navbar={navbar} />
      <div className="bg-gray-50">
        <About />
        <Services />
        <Advantages />
        <Achivements />
        <Events />
        {/* <Partners/> */}
        <PhotoGallery/>
        <FAQ />
      </div>
      <Footer />
    </>
  );
};

export default App;
