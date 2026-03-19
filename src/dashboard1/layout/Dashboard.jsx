import React from "react";
import Sidebar from "../../customer/sidebar";


import logo from "../../assets/dashboard/dashboard1/logo.png";
import search from "../../assets/dashboard/dashboard1/search.png";
import notification from "../../assets/dashboard/dashboard1/notification.png";
import message from "../../assets/dashboard/dashboard1/message.png";
import rajatimg from "../../assets/dashboard/dashboard1/rajatimg.png";
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


import "../../styles/screen/Dashboard1/dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">

      
      <div className="dashboard-navbar">

        <div className="search-box">
          <img src={search}  />
          <input type="text" placeholder="Search Here" />
        </div>

        <div className="portion-right">
            <div className="nav-icon">
                <img src={notification}/>
            </div>
            <div className="nav-icon">
                <img src={message}/>
            </div>
          
          

          <div className="profile">
            <img src={rajatimg} />
            <div>
              <h4>hi, Rajat</h4>
              <p>Admin</p>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div  className="top-div">
          <div> <h2>Dashboard</h2>
          <p>Welcome to Agripulse Property Admin </p></div>
          
          <div className="refresh-btn">
            <button>Refresh</button></div>
          

        </div>
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


        {/*middle div*/}

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

        {/*last div*/}
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
        <button>Open Chat</button>
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
  );
};

export default Dashboard;