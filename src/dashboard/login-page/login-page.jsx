import React from "react";
import "../../styles/screen/dashboard/login-page.css";
import loginBg from "../../assets/dashboard/login-bg.png";




const LoginPage = () => {
  return (
    <div
      className="login-container"
      style={{ backgroundImage: `url(${loginBg})` }}
    >
      <div className="overlay" />

      <div className="admin-text">Admin Login</div>

      <div className="login-card">
        <div className="logo-section">
          <h2 className="logo-title">
            AGRIPULSE
          </h2>
          <p className="logo-subtitle">BEST PLACE TO INVEST</p>
        </div>

        <p className="welcome-text">WELCOME BACK</p>
        <h3 className="login-title">Log In to your Account</h3>

        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="loginkae@unknownmail.com"
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="***************"
          />
        </div>

        <div className="login-options">
          <div className="remember-me">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember me</label>
          </div>

          <span className="forgot-password">
            Forgot Password?
          </span>
        </div>

        <button className="login-btn">
          CONTINUE
        </button>
      </div>

      <div className="copyright">
        Copyright 2025 – 2026 Company Inc. All rights Reserved.
      </div>
    </div>
  );
};

export default LoginPage;
