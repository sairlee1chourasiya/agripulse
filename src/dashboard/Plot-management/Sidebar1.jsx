import React from 'react';
import "../../styles/screen/Plot-management/sidebar1.css";
import logo from "../../assets/dashboard/dashboard1/logo.png";

const Sidebar1 = () => {
  return (
    <div className="sidebar">

      {/* Logo */}
      <div className="sidebar-logo">
        <img src={logo} alt="Agripulse" />
      </div>

    
      <ul className="sidebar-menu">
        <li >Dashboard</li>
        <li className="active">Plot Management</li>
        <li>User Management</li>
        <li>Content Management</li>
        <li>Chat Support</li>
      </ul>

    </div>
  );
}

export default Sidebar1;