import React from "react";
import ServiceCard from "./Card";
import Smm1 from "../Images/SMM1.webp";
import Smm2 from "../Images/smm2.jpg";
import Smm3 from "../Images/smm3.webp";


const smmCards = [
  {
    title: "Instagram Growth",
    description: "Engage your audience and grow your brand on Instagram organically.",
    image: Smm1,
    link: "#",
  },
  {
    title: "Facebook Ads",
    description: "Run optimized ad campaigns for targeted engagement and lead generation.",
    image: Smm2,
    link: "#",
  },
  {
    title: "YouTube Strategy",
    description: "Create content that ranks and connects with your audience on YouTube.",
    image: Smm3,
    link: "#",
  },
];

function InsideSMM() {
  return (
    <section className="seo-section" style={{ background: "linear-gradient(45deg, #1a2980, #26d0ce)" ,margin:"20px 0px"}}>
      <div className="seo-section_container">
        <h1 className="seo-section_title">
          Social Media <span className="txt-decoration_underline">Marketing</span>
        </h1>
        <div className="seo-section_subtitle">
          <p>Connect, engage, and convert with powerful social media strategies tailored for your brand.</p>
          <button className="seo-section_cta">Know More about SMM</button>
        </div>
        <div className="seo-section_cards">
          {smmCards.map((card, index) => (
            <ServiceCard key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default InsideSMM;