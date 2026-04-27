import React, { useState } from "react";
import "../../styles/screen/Property/Property.css";



import { FiSearch } from "react-icons/fi";
import { IoMdNotificationsOutline } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";


import img1 from "../../assets/dashboard/PurchaseList/img1.png";
import img2 from "../../assets/dashboard/PurchaseList/img2.png";
import img3 from "../../assets/dashboard/PurchaseList/img3.png";
import img4 from "../../assets/dashboard/PurchaseList/img4.png";

const Property = () => {

  const properties = [
    { id: 1, title: "The Stables", price: "₹ 9540.99", location: "Bhopal MP", images: [img1, img2, img3] },
    { id: 2, title: "The Stables", price: "₹ 9540.99", location: "Bhopal MP", images: [img2, img3, img4] },
    { id: 3, title: "The Stables", price: "₹ 9540.99", location: "Bhopal MP", images: [img3, img4, img1] },
    { id: 4, title: "The Stables", price: "₹ 9540.99", location: "Bhopal MP", images: [img4, img1, img2] },
  ];

  const [currentIndex, setCurrentIndex] = useState({});

  const nextSlide = (id, length) => {
    setCurrentIndex((prev) => ({
      ...prev,
      [id]: prev[id] === length - 1 ? 0 : (prev[id] || 0) + 1
    }));
  };

  const prevSlide = (id, length) => {
    setCurrentIndex((prev) => ({
      ...prev,
      [id]: prev[id] === 0 ? length - 1 : (prev[id] || 0) - 1
    }));
  };

  return (
    <div className="layout">

    

      <div className="main">

        
        <div className="navbar">
          <div className="logo">AGRIPULSE</div>

          <div className="nav-search">
            <input placeholder="Search Here" />
            <button><FiSearch /></button>
          </div>

          <div className="nav-icons">
            <IoMdNotificationsOutline />
            <div className="profile">hi, Rajat</div>
          </div>
        </div>

     
        <div className="page-header">
          <h2>Property</h2>
          <p>Property / Property List</p>
        </div>


        <div className="filter-box">
          <input placeholder="Enter Your Keyword..." />
          <select><option>Select Location</option></select>
          <select><option>Property Type</option></select>
          <select><option>Select Category</option></select>

          <div className="range">
            <label>Price Range</label>
            <input type="range" />
          </div>

          <div className="range">
            <label>Area Range</label>
            <input type="range" />
          </div>

          <button className="search-btn">Search</button>
        </div>

   
        <div className="grid">
          {properties.map((item) => {
            const index = currentIndex[item.id] || 0;

            return (
              <div className="card" key={item.id}>

                <div className="image-box">
                  <img src={item.images[index]} alt="" />

                  <button className="prev" onClick={() => prevSlide(item.id, item.images.length)}>‹</button>
                  <button className="next" onClick={() => nextSlide(item.id, item.images.length)}>›</button>

                  <span className="tag">Plot</span>
                </div>

                <h3>{item.title}</h3>
                <p className="price">{item.price}</p>

                <div className="bottom">
                  <span><IoLocationOutline /> {item.location}</span>
                  <button>VIEW</button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};

export default Property;