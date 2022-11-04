import React, { useState } from "react";

import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import FAQ from "./Components/FAQ";
import Footer from "./Components/Footer";
import Advantages from "./Components/Advantages";

const App = () => {
  const [navbar, setNavbar] = useState(false);

  const navbarColor = () => {
    if (window.scrollY >= 100) {
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
      <About />
      <Services />
      <Advantages />
      <FAQ />
      <Footer />
    </>
  );
};

export default App;
