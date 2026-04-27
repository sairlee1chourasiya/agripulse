import React from "react";
import "../../styles/screen/KYC/KycPage.css";
import logo from "../../assets/dashboard/dashboard1/logo.png";


import Sidebar from "../FAQ/Sidebar1";







import { AiOutlineHome } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { FiSearch } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";

const KycPage = () => {
  return (
    <div className="container">
      <Sidebar/>
      


    
      <div className="main">

      
        <div className="header">
          <div className="search-box">
            <input type="text" placeholder="Search here..." />
            <FiSearch className="search-icon" />
          </div>

          <div className="header-right">
            <IoMdNotificationsOutline className="icon" />
            
            <div className="user">Hi, Rajat</div>
            
          </div>
        </div>

       
        <div className="card">
          <h3>KYC</h3>

          <div className="form-grid">
            <input placeholder="Full Name" />
            <input placeholder="Father's Name" />
            <input placeholder="DOB" />
            <input placeholder="Primary Contact" />

            <input placeholder="Secondary Contact" />
            <input placeholder="Address Proof" />
            <input placeholder="Email" />
            <input placeholder="Designation" />

            <input placeholder="Country" />
            <input placeholder="State" />
            <input placeholder="City" />
            <input placeholder="Pincode" />

            <input placeholder="Aadhar Number" />
            <input placeholder="Pancard Number" />
            <input placeholder="Upload Aadhar" />
            <input placeholder="Upload Pancard" />
          </div>
        </div>

       
        <div className="card">
          <h3>Bank Detail</h3>

          <div className="form-grid">
            <input placeholder="Bank Name" />
            <input placeholder="Bank A/C No" />
            <input placeholder="Branch" />
            <input placeholder="IFSC Code" />

            <input placeholder="Account Holder Name" />
            <input placeholder="Upload Passbook" />
            <input placeholder="Email" />
            <input placeholder="Mobile No" />

            <input placeholder="GST No" />
            <input placeholder="Pancard No" />
            <input placeholder="Upload Pancard" />
            <input placeholder="Pincode" />
          </div>
        </div>

      
        <div className="btn-group">
          <button className="approve">Approve</button>
          <button className="reject">Reject</button>
        </div>

      </div>
    </div>
  );
};

export default KycPage;