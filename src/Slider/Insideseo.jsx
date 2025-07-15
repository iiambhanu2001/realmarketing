import React from "react";
import ServiceCard from "./Card";
import Smm1 from "../Images/SMM1.webp";
import Smm2 from "../Images/smm2.jpg";
import Smm3 from "../Images/smm3.webp";

const seoCards = [
  {
    title: "SEO Basics",
    description:
      "Understand how SEO works and how it can boost your site ranking.",
    image: Smm1,
    link: "#",
  },
  {
    title: "Keyword Research",
    description:
      "Identify the best keywords to target the right audience effectively.",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e",
    link: "#",
  },
  {
    title: "Content Strategy",
    description:
      "Plan and publish content that ranks well and engages readers.",
    image: Smm2,
    link: "#",
  },
];

function Insideseo() {
  return (
    <section
      className="seo-section"
      style={{ background: "linear-gradient(45deg, #b7003f, #383838)" ,margin:"20px 0px"}}
    >
      <div className="seo-section_container" >
        <h1 className="seo-section_title">
          Search Engine{" "}
          <span className="txt-decoration_underline">Optimization</span>
        </h1>
        <div className="seo-section_subtitle">
          <p>
            Grow your brand's presence with smart strategies. Enhance your
            visibility and drive organic traffic with powerful SEO.
          </p>
          <button className="seo-section_cta">Know More about SEO</button>
        </div>
        <div className="seo-section_cards">
          <ServiceCard
            image={Smm1}
            title="Social Branding"
            description="Build a consistent and engaging brand across all platforms."
            link="#"
          />
          <ServiceCard
            image={Smm2}
            title="Engagement Strategy"
            description="Increase likes, shares, and comments with strategic content."
            link="#"
          />
          <ServiceCard
            image={Smm3}
            title="Influencer Marketing"
            description="Leverage influencers to extend your reach and trust."
            link="#"
          />
        </div>
      </div>
    </section>
  );
}

export default Insideseo;
