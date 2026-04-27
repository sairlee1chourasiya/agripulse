import React from "react";
import "../../../styles/screen/buyerreview.css";

import manReview from "../../../assets/website/manreview.png";
import womenReview from "../../../assets/website/womanreview.png";

const BuyerReview = () => {
  return (
    <section className="buyer">
      <div className="buyer-container">

        <div className="buyer-header">
          <h2>What our buyer say</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
            phasellus mollis sit aliquam sit nullam.
          </p>
        </div>

        <div className="buyer-cards">

          {}
          <div className="buyer-card">
            <img  src={manReview}  />
            <div className="buyer-content">
              <p>
                Lorem ipsum dolor sit amet dolor sit consectetur adipiscing elit.
                Lorem ipsum dolor sit amet dolor sit consectetur adipiscing elit.
              </p>
              <h4>John Doe</h4>
              <span>CEO</span>
            </div>
          </div>

          {}
          <div className="buyer-card">
            <img  src={womenReview} alt="Woman Review" />
            <div className="buyer-content">
              <p>
                Lorem ipsum dolor sit amet dolor sit consectetur adipiscing elit.
                Lorem ipsum dolor sit amet dolor sit consectetur adipiscing elit.
              </p>
              <h4>Jane Doe</h4>
              <span>CMO</span>
            </div>
          </div>

        </div>

        {}
        <div className="buyer-dots">
          <span className="dot active"></span>
          <span className="dot"></span>
          <span className="dot"></span>
          <span className="dot"></span>
        </div>

      </div>
    </section>
  );
};

export default BuyerReview;
