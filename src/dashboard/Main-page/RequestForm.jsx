import React from "react";
import "../../styles/screen/Main-page/RequestForm.css";

import Frame1 from "../../assets/dashboard/main-page/Frame1.png";

const RequestForm = () => {
  return (
    <div className="request-container">
      
     
      <div className="left-content">
        <h2>Request A Free Registry</h2>
        <p>
          Our Plots company has a number of luxury and exclusive listings
          that are perfect for international clients.
        </p>

       
        <div className="form-card">
          <h4>Personal Information</h4>

          <div className="form-row">
            <select><option>Select</option></select>
            <input type="text" placeholder="First name" />
            <input type="text" placeholder="Last name" />
          </div>

          <div className="form-row">
            <input type="email" placeholder="Email address" />
            <input type="text" placeholder="Phone number" />
          </div>

          <h4>Property Information</h4>

          <div className="form-row">
            <select><option>Type</option></select>
            <input type="text" placeholder="Zip code" />
            <input type="text" placeholder="Your budget" />
          </div>

          <div className="form-row">
            <select><option>N. of bedrooms</option></select>
            <select><option>N. of bathrooms</option></select>

            <button className="submit-btn">SUBMIT</button>
          </div>
        </div>
      </div>

     
      <div className="image-section">
        <img src={Frame1} alt="land" />
      </div>
    </div>
  );
};

export default RequestForm;