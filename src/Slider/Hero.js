import "../Slider/Hero.css";
import React, { useEffect, useRef } from "react";
import Image from "../Images/banner1-1.jpeg"
import Image2 from "../Images/banner2.jpeg"
import Image3 from "../Images/banner3-1.jpg"


function Hero() {
  const lines = [
    "Boost Your Online Presence.",
    "Drive Traffic to Your Website.",
    "Grow Your Business with Us.",
  ];
  const typedTextRef = useRef(null);

  let currentLine = 0;
  let currentIndex = 0;

  useEffect(() => {
    const typedText = typedTextRef.current;
    function type() {
      if (currentIndex < lines[currentLine].length) {
        typedText.textContent += lines[currentLine].charAt(currentIndex);
        currentIndex++;
        setTimeout(type, 100);
      } else {
        setTimeout(erase, 1500);
      }
    }

    function erase() {
      if (currentIndex > 0) {
        typedText.textContent = lines[currentLine].substring(
          0,
          currentIndex - 1
        );
        currentIndex--;
        setTimeout(erase, 50);
      } else {
        currentLine = (currentLine + 1) % lines.length;
        setTimeout(type, 500);
      }
    }
    const startTyping = setTimeout(type, 1000);
    return () => clearTimeout(startTyping);
  }, []);

  return (
    <div>
      <section className="hero-section">
        <div className="shape"></div>
        <div className="shape"></div>
        <div className="shape"></div>

        <div className="content1234">
          <h1 className="main-heading">Welcome to our agency</h1>

          <p className="typing-effect">
            <span className="typed-text" ref={typedTextRef}></span>
            <span className="cursor">|</span>
          </p>

          <a
            target="_blank"
            href="https://outreachxpert.in/connect-with-us/"
            className="cta-button"
          >
            Book a Demo
          </a>

          <a href="tel:+91 8527279527" className="cta-button" id="callplusres">
            Call us 📞
            {/* <img
              src="https://outreachxpert.in/wp-content/uploads/2025/01/phone-call-svgrepo-com-3.png"
              alt="phone-call"
              width="28"
              height="30"
              id="phn-sym-call"
            />{" "} */}
          </a>

          <a href="tel:+91 000000" className="cta-button" id="callplusresshow">
            {" "}
            <img
              src="https://outreachxpert.in/wp-content/uploads/2025/01/phone-call-svgrepo-com-2.png"
              alt="phone-call"
              width="28"
              height="30"
              id="phn-sym-call"
            />{" "}
          </a>
        </div>
        <div className="image-container">
          <div className="gallery">
            <img
              src={Image}
              alt="Image 1"
            />
            <img
              src={Image2}
              alt="Image 2"
            />
            <img
              src={Image3}
              alt="Image 3"
            />
          </div>
        </div>
      </section>

 
    </div>
  );
}

export default Hero;
