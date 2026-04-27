{/*import React from "react";
import heroImage from "../../assets/website/hero.jpg";
import "../../styles/screen/hero.css";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="overlay">

       <span> home about product testimonial  </span> 
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
   */}




   {/*



   import React from "react";
import heroImage from "../../assets/website/hero.jpg";
import logo from "../../assets/dashboard/dashboard1/logo.png";
import "../../styles/screen/hero.css";
import Logopartner from "../constant/content/logopartner";
import QualityDetails from "../constant/content/qualitydetails";
import AboutUs from "./aboutus";
import Product from "./product";
import BuyerReview from "../constant/content/buyerreview";
import Footer from "../website/footer";


const Hero = () => {
  return (

    <div className="one">
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
   
      <div className="hero-overlay">
        
      
        <header className="hero-navbar">
          <div className="hero-logo">
            <img src={logo} alt="logo" />
          </div>

          <nav className="hero-menu">
            <a href="/">Home</a>
            <a href="/">About</a>
            <a href="/">Products</a>
            <a href="/">Testimonial</a>
          </nav>

          <button className="login-btn" style= {{backgroundColor: "green"}}>Login</button>
        </header>

     
        <div className="hero-content">
          <h1>
            A sustainable farming <br />
            for our earth
          </h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit
            phasellus mollis sit aliquam sit nullam neque ultrices.
          </p>

          <div className="hero-buttons">
            <button className="contact-btn">Contact us</button>
            <button className="learn-btn">Learn more</button>
          </div>
        </div>
      </div>


   
    </section>
    <Logopartner/>
   
    <AboutUs />
     <Product />
      <BuyerReview />
       <QualityDetails />
      <Footer/>


    </div>
    
    
  );
};

export default Hero;  */}



import React from "react";
import { useNavigate } from "react-router-dom";

import heroImage from "../../assets/website/hero.jpg";
import logo from "../../assets/dashboard/dashboard1/logo.png";
import "../../styles/screen/hero.css";

import Logopartner from "../constant/content/logopartner";
import QualityDetails from "../constant/content/qualitydetails";
import AboutUs from "./aboutus";
import Product from "./product";
import BuyerReview from "../constant/content/buyerreview";
import Foooter from "../website/foooter";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="one">
      <section
        className="hero"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="hero-overlay">

          {/* Navbar */}
          <header className="hero-navbar">
            <div className="hero-logo">
              <img src={logo} alt="logo" />
            </div>

            <nav className="hero-menu">
              <a href="/">Home</a>
              <a href="/">About</a>
              <a href="/">Products</a>
              <a href="/">Testimonial</a>
            </nav>

            {/* Login Button Navigation */}
            <button
              className="login-btn"
              style={{ backgroundColor: "  #4f7d18;" }}
              onClick={() => navigate("/welcomepage")}
            >
              Login
            </button>
          </header>

          {/* Content */}
          <div className="hero-content">
            <h1>
              A sustainable farming <br />
              for our earth
            </h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit mattis sit
              phasellus mollis sit aliquam sit nullam neque ultrices.
            </p>

            <div className="hero-buttons">
              <button className="contact-btn">Contact us</button>
              <button className="learn-btn">Learn more</button>
            </div>
          </div>

        </div>
      
      </section>

      <Logopartner />
      <AboutUs />
      <Product />
    
      <BuyerReview />
      <QualityDetails />
      <Foooter />
      
    </div>
  );
};

export default Hero;


