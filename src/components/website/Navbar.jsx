import React from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/app/logo.png";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      
      
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="logo" className="logo-img" />
        </Link>
      </div>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/testimonial">Testimonial</Link></li>
      </ul>

     
      <button 
        className="loginbtn"
        onClick={() => navigate("/login")}
      >
        Login
      </button>

    </nav>
  );
};

export default Navbar;