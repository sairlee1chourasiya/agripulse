import React from "react";
import "../../styles/screen/VenderList/Sidepart.css";
import logo from "../../assets/dashboard/dashboard1/logo.png";

import { FaHome, FaUserFriends } from "react-icons/fa";
import { MdOutlineChat } from "react-icons/md";
import { BsBoxSeam } from "react-icons/bs";
import { HiOutlineDocumentText } from "react-icons/hi";

import { NavLink } from "react-router-dom";

const Sidepart = () => {
  return (
    <div className="sidebar">
      
   
      <div className="logo-section">
        <img src={logo} alt="logo" />
      </div>

      
      <ul className="menu">

       
        <li>
          <NavLink 
            to="/dashboard" 
            className={({ isActive }) =>
              isActive ? "menu-item active" : "menu-item"
            }
          >
            <FaHome />
            <span>Dashboard</span>
          </NavLink>
        </li>

       
        <li>
          <NavLink 
            to="/property1" 
            className={({ isActive }) =>
              isActive ? "menu-item active" : "menu-item"
            }
          >
            <BsBoxSeam />
            <span>Plot Management</span>
          </NavLink>
        </li>

       
        <li>
          <NavLink 
            to="/venderlist" 
            className={({ isActive }) =>
              isActive ? "menu-item active" : "menu-item"
            }
          >
            <FaUserFriends />
            <span>User Management</span>
          </NavLink>
        </li>

      
        <li>
          <NavLink 
            to="/banner" 
            className={({ isActive }) =>
              isActive ? "menu-item active" : "menu-item"
            }
          >
            <HiOutlineDocumentText />
            <span>Content Management</span>
          </NavLink>
        </li>

  
        <li>
          <NavLink 
            to="/chatsupportold" 
            className={({ isActive }) =>
              isActive ? "menu-item active" : "menu-item"
            }
          >
            <MdOutlineChat />
            <span>Chat Support</span>
          </NavLink>
        </li>

      </ul>

    </div>
  );
};

export default Sidepart;