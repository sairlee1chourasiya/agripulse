import React from 'react'
import {

FaHome,
FaShoppingCart,
FaMap,
FaUsers,
FaFileAlt,
FaUser,
FaQuestionCircle
} from "react-icons/fa";


import logo from "../../assets/dashboard/purchase-page/agripulse-logo.png";
import discount from "../../assets/dashboard/purchase-page/discount.png";
import search from "../../assets/dashboard/purchase-page/Search.png";
import profile from "../../assets/dashboard/purchase-page/profile.png";
{/*
import "../../styles/screen/FAQ/Sidebar.css";*/}


const Sidebar = () => {
  return (
    <div className="sidebar">
    
    
    <img src={logo} alt="" />
    
    
    <div className="search-box">
    <img src={search} alt="" />
    <input type="text" placeholder="Search"/>
    </div>
    
    <p className="menu-title">MAIN MENU</p>
    
    <ul className="menu">
    
    <li>
    <FaHome className="menu-icon"/> Dashboard
    </li>
    
    <li>
    <FaShoppingCart className="menu-icon"/> Purchase
    </li>
    
    <li>
    <FaMap className="menu-icon"/> Plots
    </li>
    
    <li className="active">
    <FaUsers className="menu-icon"/> Customer
    </li>
    
    <li>
    <FaFileAlt className="menu-icon"/> Registry
    </li>
    
    </ul>
    
    <p className="menu-title">SETTINGS</p>
    
    <ul className="menu">
    
    <li>
    <FaUser className="menu-icon"/> Profile
    </li>
    
    <li>
    <FaQuestionCircle className="menu-icon"/> Help
    </li>
    
    </ul>
    <div className="discount-img" style={{ backgroundImage: `url(${discount})` }}>
        <h3><span>50%</span> Discount!</h3>
    
    <p>
    t consectetur. Tincidunt dui nulla diam cum ac. Venenatis bibendum
    </p>
    </div>
    <div className="profile-img">
    
      <img src={profile} alt="profile"/>
    
      <div className="profile-text">
        <h4>Rajat Pradhan</h4>
        <h5>rajatpradhan@gmail.com</h5>
      </div>
    
    </div>
    
    
    
    </div>
  )
}

export default Sidebar