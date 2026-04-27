import React from "react";
import "../../styles/screen/Banner/Banner.css";

import img1 from "../../assets/dashboard/Banner/img1.jpg";
import img2 from "../../assets/dashboard/Banner/img2.jpg";
import img3 from "../../assets/dashboard/Banner/img3.jpg";
import img4 from "../../assets/dashboard/Banner/img4.jpg";


import { FaSearch,  } from "react-icons/fa";
import { IoNotificationsCircle } from "react-icons/io5";
import { SiGooglemessages } from "react-icons/si";

export const bannerData = [
  { id: 1, title: "Banner One", image: img1 },
  { id: 2, title: "Banner Two", image: img2 },
  { id: 3, title: "Banner Three", image: img3 },
  { id: 4, title: "Banner Fourth", image: img4 },
];

const Banner = () => {
  return (
    <div className="main-layout">

     
      

    
      <div className="content">

        <div className="header">
          <div className="search-box">
            <input type="text" placeholder="Search Here" />
            <FaSearch className="search-icon" />
          </div>

          <div className="header-right">
            
            <IoNotificationsCircle className="icon"/>
            <SiGooglemessages className="icon"/>

            <div className="profile">
              <img src={img1} alt="user" />
              <div>
                <h4>Hi, Rajat</h4>
                <p>Admin</p>
              </div>
            </div>
          </div>
        </div>

        
        <div className="banner-container">
          <h2>Edit Banner</h2>

          {bannerData.map((item) => (
            <div className="banner-card" key={item.id}>

             
              <div className="banner-image">
                <img src={item.image} alt={item.title} />
              </div>

             
              <div className="banner-form">
                <div className="banner-header">
                  <h3>{item.title} Image & Direction</h3>
                  <button className="delete-btn">Delete Slide</button>
                </div>

                <div className="form-grid">
                  <div>
                    <label>Select Image</label>
                    <input type="file" />
                  </div>

                  <div>
                    <label>Select Category</label>
                    <select>
                      <option>Choose</option>
                    </select>
                  </div>

                  <div>
                    <label>Select Brand (Optional)</label>
                    <select>
                      <option>Choose</option>
                    </select>
                  </div>

                  <div>
                    <label>Select Product (Optional)</label>
                    <select>
                      <option>Choose</option>
                    </select>
                  </div>

                  <div>
                    <label>Select Discount (Optional)</label>
                    <select>
                      <option>Choose</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          ))}

         
          <div className="btn-group">
            <button className="add-btn">Add More Slide</button>
            <button className="save-btn">Save Banner</button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Banner;