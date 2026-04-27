



import React from "react";
import "../../styles/screen/FAQ/Sidebar1.css";

import {
  FaHome,
  FaShoppingCart,
  FaCube,
  FaUsers,
  FaChartPie,
  FaCog,
  FaQuestionCircle,
  FaSearch
} from "react-icons/fa";

import logo from "../../assets/dashboard/dashboard1/logo.png";
import discount from "../../assets/dashboard/purchase-page/discount.png";
import profile from "../../assets/dashboard/purchase-page/profile.png";

import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Sidebar1 = () => {
    const navigate = useNavigate();
  
  return (

    <div className="layout">

      <div className="sidebar">

        
        <div className="logo-box">
          <img src={logo} alt="logo" />
        </div>

       
        <div className="search-box">
          <input type="text" placeholder="Search" />
          <FaSearch className="glass" />
        </div>

    
        <p className="menu-title">MAIN MENU</p>

        <ul className="menu1">

      
          <li className="Abcd">
            <NavLink 
              to="/mainpage"
              className={({ isActive }) =>
                isActive ? "menu-item active" : "menu-item"
              }
            >
              <FaHome />
              <span>Dashboard</span>
            </NavLink>
          </li>

          
          <li className="Abcd">
            <NavLink 
              to="/purchase"
              className={({ isActive }) =>
                isActive ? "menu-item active" : "menu-item"
              }
            >
              <FaShoppingCart />
              <span>Purchase</span>
            </NavLink>
          </li>

        
          <li className="Abcd">
            <NavLink 
              to="/details"
              className={({ isActive }) =>
                isActive ? "menu-item active" : "menu-item"
              }
            >
              <FaCube />
              <span>Plots</span>
            </NavLink>
          </li>

       
          <li className="Abcd">
            <NavLink 
              to="/chatsupportnew"
              className={({ isActive }) =>
                isActive ? "menu-item active" : "menu-item"
              }
            >
              <FaUsers />
              <span>Customers</span>
            </NavLink>
          </li>

       
          <li className="Abcd">
            <NavLink 
              to="/purchaseproperty"
              className={({ isActive }) =>
                isActive ? "menu-item active" : "menu-item"
              }
            >
              <FaChartPie />
              <span>Registry</span>
            </NavLink>
          </li>

        </ul>

        <p className="menu-title1">SETTINGS</p>

        <ul className="menu2">

         
          <li className="Abcd">
            <NavLink 
              to="/generaldetails"
              className={({ isActive }) =>
                isActive ? "menu-item active" : "menu-item"
              }
            >
              <FaCog />
              <span >Profile</span>
            </NavLink>
          </li>

         
          <li className="Abcd">
            <NavLink 
              to="/faqcontent"
              className={({ isActive }) =>
                isActive ? "menu-item active" : "menu-item"
              }
            >
              <FaQuestionCircle />
              <span>Help</span>
            </NavLink>
          </li>

        </ul>

      
        <div className="discount-card">
          <img src={discount} alt="discount" />
          <div className="discount-text">
            <h3><span>50%</span> Discount!</h3>
            <p>
              t consectetur. Tincidunt dui nulla diam cum ac.
              Venenatis bibendum
            </p>
          </div>
          <div className="arrow">→</div>
        </div>

      
        <div className="profile">
          <img src={profile} alt="profile" />
          <div>
            <h4>Rajat Pradhan</h4>
            <p  onClick={() => navigate("/loginpage")}>rajatpradhan@gmail.com</p>
          </div >
          <span onClick={() => navigate("/frame")}  >  •••</span>
        </div>

      </div>

      
      <div>
      
      </div>

    </div>
  );
};

export default Sidebar1;





  

