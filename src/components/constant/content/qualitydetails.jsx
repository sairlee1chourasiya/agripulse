import React from "react";
import "../../../styles/screen/qualitydetails.css";
import farmerImg from "../../../assets/website/farmerimg.png";

const QualityDetails = () => {
  return (
    <section className="quality">
      <div className="quality-container">

        <div className="quality-image">
          <img src={farmerImg}  />
        </div>

        <div className="quality-content">
          <h2>Keep our quality with the best farmers</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
            phasellus mollis sit aliquam sit nullam.
          </p>
          <button className="quality-btn">Read more</button>
        </div>

      </div>
    </section>
  );
};

export default QualityDetails;
