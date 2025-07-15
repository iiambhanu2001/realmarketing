import React from "react";
import ServiceCard from "./Card";
import Smm1 from "../Images/SMM1.webp";
import Smm2 from "../Images/smm2.jpg";
import Smm3 from "../Images/smm3.webp";

const digitalCards = [
  {
    title: "Email Marketing",
    description: "Reach your audience with high-converting email campaigns.",
    image: Smm1,
    link: "#",
  },
  {
    title: "Performance Ads",
    description: "ROI-driven ads and retargeting to maximize your conversions.",
    image: Smm2,
    link: "#",
  },
  {
    title: "Analytics & Insights",
    description: "Track, analyze, and act on real-time data to boost results.",
    image: Smm3,
    link: "#",
  },
];

function InsideDigital() {
  return (
    <section className="seo-section" style={{ background: "linear-gradient(45deg, #232526, #414345)" }}>
      <div className="seo-section_container">
        <h1 className="seo-section_title">
          Digital <span className="txt-decoration_underline">Marketing</span>
        </h1>
        <div className="seo-section_subtitle">
          <p>Leverage digital channels to grow faster. Smart strategies for a modern digital world.</p>
          <button className="seo-section_cta">Know More about Digital Marketing</button>
        </div>
        <div className="seo-section_cards">
          {digitalCards.map((card, index) => (
            <ServiceCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default InsideDigital;
