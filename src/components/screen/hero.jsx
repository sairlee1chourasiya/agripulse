import React from "react";
import heroImage from "../../assets/website/hero.jpg";
import "../../styles/screen/hero.css";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="overlay">
        <h1>
          A sustainable farming <br /> for our earth
        </h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.
        </p>

        <div className="hero-buttons">
          <button className="contact-btn">Contact us</button>
          <button className="learn-btn">Learn more</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;




