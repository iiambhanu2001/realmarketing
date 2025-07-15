import React, { useEffect, useRef, useState } from "react";
import "./stylesinside/insideseo.css"

const ServiceCard = ({ image, title, description, link }) => {
  const headingRef = useRef(null);
  const infoRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    if (headingRef.current && infoRef.current) {
      const headingHeight = headingRef.current.offsetHeight;
      setOffset(headingHeight);
      infoRef.current.style.transform = `translateY(calc(100% - ${headingHeight + 15}px))`;
    }
  }, []);

  const handleMouseEnter = () => {
    if (infoRef.current) {
      infoRef.current.style.transform = "translateY(0)";
    }
  };

  const handleMouseLeave = () => {
    if (infoRef.current) {
      infoRef.current.style.transform = `translateY(calc(100% - ${offset + 20}px))`;
    }
  };

  return (
    <div
      className="seo-section_card"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img src={image} alt={title} />
      <div className="seo-section_info" ref={infoRef}>
        <h2 className="seo-section_heading" ref={headingRef}>
          {title}
        </h2>
        <div className="seo-section_desc">
          <h5>{description}</h5>
        </div>
        <a className="seo-section_btn" href={link}>
          Read More
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
