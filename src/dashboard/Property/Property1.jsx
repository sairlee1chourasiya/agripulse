





import React, { useState } from "react";
import "../../styles/screen/Property1/Property1.css";
import image1 from "../../assets/dashboard/image1.png";
import image2 from "../../assets/dashboard/image2.png";
import image3 from "../../assets/dashboard/image3.png";
import image4 from "../../assets/dashboard/image4.png";




import Card1 from "./Card1";
import { FaSearch } from "react-icons/fa";



const Property1 = () => {
  const [price, setPrice] = useState(50);
  const [area, setArea] = useState(50);


  const properties = [
    {
      id: 1,
      title:"The Stables",
      price: 9540.99 ,
      location: "Bhopal MP",
      image: image1, 



    } ,
    {
      id: 2,
      title:"The Stables",
      price: 9540.99 ,
      location: "Bhopal MP",
      image: image2, 



    },
    {
      id: 3,
      title:"The Stables",
      price: 9540.99 ,
      location: "Bhopal MP",
      image: image3, 



    },
    {
      id: 4,
      title:"The Stables",
      price: 9540.99 ,
      location: "Bhopal MP",
      image: image4, 



    },
    {
      id: 5,
      title:"The Stables",
      price: 9540.99 ,
      location: "Bhopal MP",
      image: image2, 



    },
    {
      id: 6,
      title:"The Stables",
      price: 9540.99 ,
      location: "Bhopal MP",
      image: image4, 



    },
    {
      id: 7,
      title:"The Stables",
      price: 9540.99 ,
      location: "Bhopal MP",
      image: image1, 



    },
    {
      id: 8,
      title:"The Stables",
      price: 9540.99 ,
      location: "Bhopal MP",
      image: image3, 



    },
  ]

  return (
    <div className="one">
     
    
    <div className="filter-container">
    
      <div className="headings">
      
      <h3 >Property</h3>
      <p>Property / <span>Property List</span></p></div>
      <div className="filter-top">
        <input type="text" placeholder="Enter Your Keyword..." />

        <select>
          <option>Select Location</option>
        </select>

        <select>
          <option>Property Type</option>
        </select>

        <select>
          <option>Select Category</option>
        </select>
      </div>

      
      <div className="filter-bottom">
        
        {/* Price */}
        <div className="range-box">
          <label>Price Range</label>
          <input
            type="range"
            min="0"
            max="100"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <p>{price}.00</p>
        </div>

        
        <div className="range-box">
          <label>Area Range</label>
          <input
            type="range"
            min="0"
            max="100"
            value={area}
            onChange={(e) => setArea(e.target.value)}
          />
          <p>{area}.00</p>
        </div>

      
        <button className="search-btn"><FaSearch /> Search</button>
      </div>


      <div className="card-container">
  
 
      {properties.map((item) => (
        <Card1 key={item.id} item={item} />
      ))}
    </div>


    <footer>Copyright © Designed & Developed by <p>SmartChainStudio</p><span> 2025</span></footer>

    
   
    </div>
     </div>

  );
};

export default  Property1;