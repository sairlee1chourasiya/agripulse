
{/*


import React from "react";

import "../../styles/screen/Welcomepage.css";

import d from "../../assets/dashboard/details/4.png";
import logo from "../../assets/dashboard/dashboard1/logo.png";

const Welcomepage = () => {
  return (
    <div
      className="login-page"
      style={{ backgroundImage: `url(${d})` }}
    >
     
      <div className="overlay"></div>

     
      <h1 className="admin-title">Admin Login</h1>


      <div className="login-card">
        <img src={logo} alt="logo" className="logo" />

        <p className="welcome-text">WELCOME BACK</p>
        <h2>Log In to your Account</h2>

        <div className="input-box">
          <label>Email</label>
          <input
            type="email"
            placeholder="loginkae@unknownmail.com"
          />
        </div>

        <div className="input-box">
          <label>Password</label>
          <input
            type="password"
            placeholder="*************"
          />
        </div>

        <div className="login-options">
          <label>
            <input type="checkbox" /> Remember me
          </label>

          <span>Forgot Password?</span>
        </div>

        <button className="login-btn">CONTINUE</button>
      </div>

    
      <div className="footer">
        Copyright 2025 – 2026 Company Inc. All rights Reserved
      </div>
    </div>
  );
};

export default  Welcomepage;   */}


// Welcomepage.jsx

import React from "react";
import { useNavigate } from "react-router-dom";

import "../../styles/screen/Welcomepage.css";

import d from "../../assets/dashboard/details/4.png";
import logo from "../../assets/dashboard/dashboard1/logo.png";

const Welcomepage = () => {
  const navigate = useNavigate();

  return (
    <div
      className="login-page"
      style={{ backgroundImage: `url(${d})` }}
    >
     
      <div className="overlay"></div>

     
      <h1 className="admin-title">Admin Login</h1>

     
      <div className="login-card">
        <img src={logo} alt="logo" className="logo" />

        <p className="welcome-text">WELCOME BACK</p>
        <h2>Log In to your Account</h2>

        <div className="input-box">
          <label>Email</label>
          <input
            type="email"
            placeholder="loginkae@unknownmail.com"
          />
        </div>

        <div className="input-box">
          <label>Password</label>
          <input
            type="password"
            placeholder="*************"
          />
        </div>

        <div className="login-options">
          <label>
             Remember me
          </label>

          <span>Forgot Password?</span>
        </div>

       
        <button
          className="login-btn"
          onClick={() => navigate("/model")}
        >
          CONTINUE
        </button>
      </div>

      
      <div className="futer">
        Copyright 2025 – 2026 Company Inc. All rights Reserved
      </div>
    </div>
  );
};

export default Welcomepage;