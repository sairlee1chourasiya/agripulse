import React from "react";
import "../../../src/styles/screen/user/signup.css";

import bgImage from "../../../src/assets/dashboard/signup-bg.png";
import formImage from "../../../src/assets/dashboard/content1.png";

const SignupPage = () => {
  return (
    <div
      className="signup-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="signup-overlay">
        <div className="signup-card">
          <img src={formImage} alt="form visual" className="form-image" />

          
           
              
           
        </div>
      </div>
    </div>
  );
};

export default SignupPage;