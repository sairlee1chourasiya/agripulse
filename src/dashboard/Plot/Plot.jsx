

{/*
import React from "react";
import "../../styles/screen/Plot/Plot.css";
import { FaHome } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoNotificationsOutline } from "react-icons/io5";
import logo from "../../assets/dashboard/dashboard1/logo.png";
import a from "../../assets/dashboard/details/1.png";
import { CiBoxList } from "react-icons/ci";*/}


import React from "react";
import "../../styles/screen/Plot/Plot.css";
import logo from "../../assets/dashboard/dashboard1/logo.png";






import a from "../../assets/dashboard/details/1.png";
import { FaHome } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { IoNotificationsOutline, IoChatbubbleOutline } from "react-icons/io5";
import { CiBoxList } from "react-icons/ci";

const Plot = () => {
  return (
    <div className="ap-layout">

      
      <aside className="ap-sidebar">
        <div className="ap-logobox">
          <img src={logo} alt="logo" className="ap-logoimg" />
          <div className="ap-logotext">
           
          </div>
        </div>

        <nav className="ap-nav">
          <div className="ap-navitem">
            <FaHome size={15} />
            <span>Dashboard</span>
          </div>
          <div className="ap-navitem ap-navitem--active">
            <CiBoxList size={15} />
            <span>Plots</span>
          </div>
          <div className="ap-navitem ap-navitem--sub">
            <span>Add Plot</span>
          </div>
          <div className="ap-navitem ap-navitem--sub">
            <span>View Plot</span>
          </div>
        </nav>
      </aside>

      <div className="ap-main">

      
        <header className="ap-topbar">
          <div className="ap-searchbox">
            <input type="text" placeholder="Search Here" className="ap-searchinput" />
            <button className="ap-searchbtn"><FiSearch size={15} color="#fff" /></button>
          </div>

          <div className="ap-topright">
            <div className="ap-iconbtn"><IoNotificationsOutline size={18} color="#2e7d32" /></div>
            <div className="ap-iconbtn"><IoChatbubbleOutline size={18} color="#2e7d32" /></div>
            <div className="ap-userbox">
              <div className="ap-userinfo">
                <span className="ap-username">hi, Rajat</span>
                <span className="ap-userrole">Admin</span>
              </div>
              <img src={a} alt="user" className="ap-useravatar" />
            </div>
          </div>
        </header>

      
        <div className="ap-content">
          <h1 className="ap-heading">Property</h1>
          <p className="ap-breadcrumb"><span>Property</span> / Add Property</p>

          <div className="ap-formcard">
            <h3 className="ap-formtitle">Add Property</h3>

        
            <div className="ap-row">
              <div className="ap-field">
                <label className="ap-label">Property Type</label>
                <input className="ap-input" placeholder="office,villa,apartment,plot" />
              </div>
              <div className="ap-field">
                <label className="ap-label">Property Status</label>
                <select className="ap-select">
                  <option>For Rent</option>
                  <option>For Sale</option>
                </select>
              </div>
              <div className="ap-field">
                <label className="ap-label">Property Price</label>
                <input className="ap-input" placeholder="$2800" />
              </div>
            </div>

           
            <div className="ap-row">
              <div className="ap-field">
                <label className="ap-label">Max Rooms</label>
                <select className="ap-select">
                  <option>1</option><option>2</option><option>3</option>
                </select>
              </div>
              <div className="ap-field">
                <label className="ap-label">Beds</label>
                <select className="ap-select">
                  <option>1</option><option>2</option><option>3</option>
                </select>
              </div>
              <div className="ap-field">
                <label className="ap-label">Baths</label>
                <select className="ap-select">
                  <option>1</option><option>2</option><option>3</option>
                </select>
              </div>
            </div>

          
            <div className="ap-row">
              <div className="ap-field">
                <label className="ap-label">Area</label>
                <input className="ap-input" placeholder="85 sq ft" />
              </div>
              <div className="ap-field">
                <label className="ap-label">Price</label>
                <input className="ap-input" placeholder="$3000" />
              </div>
              <div className="ap-field">
                <label className="ap-label">Premiere</label>
                <select className="ap-select">
                  <option>Blue Sky</option>
                  <option>Gold</option>
                </select>
              </div>
            </div>

          
            <div className="ap-field ap-field--full">
              <label className="ap-label">Description</label>
              <textarea className="ap-textarea"></textarea>
            </div>

           
            <div className="ap-row">
              <div className="ap-field ap-field--2col">
                <label className="ap-label">Address</label>
                <input className="ap-input" placeholder="Address of your property" />
              </div>
              <div className="ap-field">
                <label className="ap-label">Zip Code</label>
                <input className="ap-input" placeholder="Enter pin code" />
              </div>
            </div>

          
            <div className="ap-field ap-field--full">
              <label className="ap-label">Media</label>
              <div className="ap-uploadbox">
                <span>Drop files here or click to upload.</span>
              </div>
            </div>

            <div className="ap-field ap-field--full">
              <label className="ap-label">video (mp4)</label>
              <input className="ap-input" placeholder="mp4 video link" />
            </div>

           
            <div className="ap-field ap-field--full">
              <label className="ap-label">Additional features</label>
              <div className="ap-features">
                {["Emergency Exit","CCTV","Free Wi-Fi","Free Parking In The Area",
                  "Air Conditioning","Security Guard","Terrace","Laundry Service",
                  "Elevator Lift","Balcony"].map((feat) => (
                  <label key={feat} className="ap-checkbox">
                    <input type="checkbox" />
                    <span>{feat}</span>
                  </label>
                ))}
              </div>
            </div>

            
            <div className="ap-btnrow">
              <button className="ap-btn ap-btn--submit">Submit</button>
              <button className="ap-btn ap-btn--cancel">Cancel</button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Plot;
