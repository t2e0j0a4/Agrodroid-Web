import React from "react";

import Home from "./Components/Home";
import About from "./Components/About";
import Services from "./Components/Services";
import FAQ from "./Components/FAQ";
// import Partners from "./Components/Partners";
import Footer from "./Components/Footer";
import Advantages from "./Components/Advantages";

const App = () => {

  return (
    <>
      <Home/>
      <About/>
      <Services/>
      <Advantages/>
      {/* <Partners/> */}
      <FAQ/>
      <Footer/>
    </>
  );
};

export default App;
