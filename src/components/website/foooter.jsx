import React from "react";
import "../../styles/screen/foooter.css";

const Footer = () => {
  return (
    <footer  className="footer">l
      <div className="footer-container">
        <h2 className="footer-title">Subscribe to our newsletter</h2>
        <p className="footer-description">
          Lorem ipsum dolor sit amet consectetur adipiscing elit phasellus
          amet dui quam vitae quis leo.
        </p>

        <form className="newsletter-form">
          <input
            type="email"
            placeholder="Enter your email"
            className="newsletter-input"
          />
          <button type="submit" className="newsletter-button">
            Subscribe
          </button>
        </form>

        <p className="footer-copy">
          Copyright © 2024 | All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
