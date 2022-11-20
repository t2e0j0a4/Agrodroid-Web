import React, { useState } from "react";

// Component Imports
import { Home , About , Services , Advantages , Achivements , Events , PhotoGallery , FAQ , Footer } from "./Components";

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
