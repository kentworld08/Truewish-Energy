import { Routes, Route } from "react-router-dom";

import Home from "./Component/Home";
import Services from "./Component/Services";
import Contact from "./Component/Contact";
import Poject from "./Component/Poject";
import About from "./Component/About";
import Nav from "./Component/Nav";
import Footer from "./Component/Footer.jsx";
import TechnicalService from "./Component/TechnicalService";
import Batteries from "./Component/Batteries";
import SolarProducts from "./Component/SolarProducts";
import CapacityInverter from "./Component/CapacityInverter";

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="services" element={<Services />} />
        <Route path="contact" element={<Contact />} />
        <Route path="Poject" element={<Poject />} />
        <Route path="About" element={<About />} />
        <Route path="technicalervice" element={<TechnicalService />} />
        <Route path="batteries" element={<Batteries />} />
        <Route path="solarproducts" element={<SolarProducts />} />
        <Route path="capacityinverter" element={<CapacityInverter />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
