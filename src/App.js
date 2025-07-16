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
           <Home/>
      <Routes>
        <Route path="/" element={<Home   />} />
        <Route path="/about us" element={<AboutUs />} />
        <Route path="/Contact-Us" element={<Contactus/>} />
        <Route path="/SEO" element={<Seo />} />
        <Route path="/SMM" element={<Smm />} />
        <Route path="/DM" element={<Digital />} />
      
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
