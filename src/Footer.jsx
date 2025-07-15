import React from "react";
import "./App.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container">
        <div className="footer_brand">
          <h2>Real Marketing</h2>
          <p>Boosting your brand with SEO, SMM & Digital Strategy.</p>
        </div>

        <div className="footer_links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#seo">SEO</a></li>
            <li><a href="#smm">SMM</a></li>
            <li><a href="#digital">Digital Marketing</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer_social">
          <h4>Follow Us</h4>
          <div className="social_icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-x-twitter"></i></a>
          </div>
        </div>
      </div>

      <div className="footer_bottom">
        <p>&copy; {new Date().getFullYear()} Real Marketing. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
