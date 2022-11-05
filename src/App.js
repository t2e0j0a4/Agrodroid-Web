import React, { useState } from "react";

// Component Imports
import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import FAQ from "./Components/FAQ";
import Footer from "./Components/Footer";
import Advantages from "./Components/Advantages";

const App = () => {
  const [navbar, setNavbar] = useState(false);

  const navbarColor = () => {
    if (window.scrollY >= 80) {
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
        <FAQ />
      </div>
      <Footer />
    </>
  );
};

export default App;
