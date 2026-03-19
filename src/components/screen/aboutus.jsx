import React from "react";
import "../../styles/screen/aboutus.css";

import aboutImage from "../../assets/website/aboutimg.png";
 

const AboutUs = () => {
  return (
    <section className="about">
      <div className="about-wrapper">

        {}
        <div className="about-content">
          <h1>
            Boost your vitamin with our <br />
            fresh vegetables
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
            phasellus mollis sit aliquam sit nullam.
          </p>

          <button className="about-btn">Read more</button>
        </div>

        {}
        <div className="about-image">
          <img src={aboutImage} />
        </div>

      </div>
    </section>
  );
};

export default AboutUs;
