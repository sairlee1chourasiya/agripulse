import React from "react";
import "../../styles/screen/dashboard/login-page.css";
import bg from "../../assets/dashboard/main-page/bg.png";
import logo from "../../assets/dashboard/dashboard1/logo.png";

const LoginPage = () => {
  return (
    <div
      className="login-container"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="form">
        <h2>Login</h2>

        <h4>Email</h4>

        <input type="text" placeholder="" />

        <h4>Password</h4>
        <input type="password" placeholder="" />

        <button>Login</button>
      </div>
    </div>
  );
};

export default LoginPage;