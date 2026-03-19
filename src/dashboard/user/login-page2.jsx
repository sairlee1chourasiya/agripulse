import React from "react";
import { useNavigate } from "react-router-dom";
import "../../../src/styles/screen/user/login.css";
import bgImage from "../../../src/assets/dashboard/signup-bg.png";
import formImage from "../../../src/assets/dashboard/content.png";

const LoginPage2 = () => {
  const navigate = useNavigate();

  return (
    <div
      className="signup-container"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="signup-overlay">
        <div className="signup-card">
          <img src={formImage} alt="form visual" className="form-image" />

          <button onClick={() => navigate("/dashboard")}>
            Go To Dashboard
          </button>

        </div>
      </div>
    </div>
  );
};

export default LoginPage2;