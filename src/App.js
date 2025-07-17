import Header from "./Header";
import Hero from "./Slider/Hero";
import Home from "./Slider/Home";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./Pages/About-us";

import Seo from "./Pages/Seo";
import Digital from "./Pages/Digital";
import Smm from "./Pages/Smm";
import Contactus from "./Pages/Contactus";
import Footer from "./Footer"

function App() {
  return (
   <BrowserRouter>
  <Header />
  <Routes>
    <Route path="/" element={<Home />} />                      
     <Route path="/about-us" element={<AboutUs />} />
    <Route path="/contact-us" element={<Contactus />} />
    <Route path="/seo" element={<Seo />} />
    <Route path="/smm" element={<Smm />} />
    <Route path="/dm" element={<Digital />} />
  </Routes>
  <Footer />
</BrowserRouter>
  );
}

export default App;
