import React from "react";



import logo from "../../assets/dashboard/dashboard1/logo.png";
import search from "../../assets/dashboard/dashboard1/search.png";

import totalproperty from "../../assets/dashboard/dashboard1/total-property.png";
import sales1 from "../../assets/dashboard/dashboard1/sales1.png";
import sales2 from "../../assets/dashboard/dashboard1/sales2.png";
import revenue from "../../assets/dashboard/dashboard1/total-revenue.png";
import overview from "../../assets/dashboard/dashboard1/overview.png";
import whiteimg from "../../assets/dashboard/dashboard1/white-container.png";
import productimg from "../../assets/dashboard/dashboard1/product-container.png";
import worldmap from "../../assets/dashboard/dashboard1/world-map.png";
import sideimg from "../../assets/dashboard/dashboard1/sideimg.png";
import propertyimg from "../../assets/dashboard/dashboard1/propertyimg.png";
import { useNavigate } from "react-router-dom";


import "../../styles/screen/Dashboard1/dashboard.css";


const Dashboard = () => {
  const navigate = useNavigate();
  return (
    <div className="one">
    <div className="dashboard-container">
      

      
     
      <section>
        <div  className="top-div">
          <div> <h2   onClick={() => navigate("/mainpage")}>Dashboard</h2>
          <p>Welcome to Agripulse Property Admin </p></div>
          
          
          

        </div>
        <div className="refresh-btn">
            <button>Refresh</button></div>
        <div className="second-div">
          <div className="total-properties">
            <img src={totalproperty} />

          </div>
          <div className="sales">
            <img src={sales1}  />
             <img src={sales2}  />
          </div>
          <div className="total-revenue">
             <img src={revenue}  />

          </div>
        </div>


      

        <div className="middle-div">
          <div className="overview">
             <img src={overview}  />

          </div>
          <div className="white-container">
             <img src={whiteimg}  />

          </div>
          <div className="product">
             <img src={productimg}  />

          </div>
        </div>

      
       <div className="last-div">
        <div className="world-map">
          <img src={worldmap}  />

        </div>
       </div>

       <div className="side-div">
        <div className="customers-chart">
          <img src={sideimg}  />
          <h2>Demo</h2>
          <span>5m ago </span>
          <p>Friendly service Josh, Lunar and everyone at Just Property in Hastings deserved a big Thank You from us for moving us from Jakarta to Medan during the lockdown.</p>

        </div>
         <div className="customers-chart2">
          <img src={sideimg}  />
          <h2>Demo</h2>
          <span>5m ago </span>
          <p>Friendly service Josh, Lunar and everyone at Just Property in Hastings deserved a big Thank You from us for moving us from Jakarta to Medan during the lockdown.</p>
        
        </div>
        <button onClick={() => navigate("/chatsupport")}>Open Chat</button>
       </div>

       <div className="recent-property">
        <h2>Recent Property</h2>
        <img src={propertyimg}  />
        <h4>Plot No. 5655</h4>
        <span>Address</span>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad mini</p>
       </div>

       <footer>
        Copyright © Designed & Developed by <p>SmartChainStudio</p> 2025
       </footer>


      </section>
      </div>
      </div>
  );
};

export default Dashboard;