import React from "react";
import "../../styles/screen/Plot-management/Layout.css";

import Sidebar1 from "./Sidebar1";
import Topbar from "../../dashboard1/layout/topbar";

import mapImage from "../../assets/dashboard/plot-management/map.png";
import houseImage from "../../assets/dashboard/plot-management/house.png";
import image1 from "../../assets/dashboard/plot-management/image1.png";
import image2 from "../../assets/dashboard/plot-management/image2.png";
import image3 from "../../assets/dashboard/plot-management/image3.png";
import first from "../../assets/dashboard/plot-management/1.png";
import second from "../../assets/dashboard/plot-management/2.png";
import third from "../../assets/dashboard/plot-management/3.png";
import fourth from "../../assets/dashboard/plot-management/4.png";

const Layout = () => {
  return (
    <div className="dashboard-layout">

      
      <Sidebar1 />

      
      <div className="main-content">

        
        <div className="layout-topbar">
          <Topbar />
        </div>

        
        <div className="Layout-header">

       
          <div className="page-header">
            <div className="Property">
              <h2>Property</h2>
              <p>Property / Property List / Property Details</p>
            </div>

            <div className="side-buttons">
              <button className="update">Update Info</button>
              <button className="delete">Delete</button>
            </div>
          </div>

          
          <div className="main-layout">

       
            <div className="left-sidebar">

              <div className="sale">
                <h2>SALE</h2>
                <p>₹400,000 - ₹600,000</p>
              </div>

              <div className="property-part">
                <h3>Property Location</h3>
                <img src={mapImage} alt="Property Location" />
                <button>View In Full Screen</button>
              </div>

              <div className="plot-features">
                <h3>Plot Features</h3>
                <ul>
                  <li>Swimming Pool</li>
                  <li>Internet</li>
                  <li>Terrace</li>
                  <li>Coffee Pot</li>
                  <li>Towels</li>
                  <li>Radio</li>
                  <li>Balcony</li>
                  <li>Roof Terrace</li>
                  <li>Grill</li>
                  <li>Computer</li>
                  <li>Oven</li>
                  <li>Cable TV</li>
                  <li>Parquet</li>
                </ul>
              </div>

            </div>

           
            <div className="right-content">

              <div className="image-part">
                <img src={houseImage} alt="House" />
              </div>

              <div className="bottom-part">
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
              </div>

              <div className="details">

                <div className="title">
                  <h3>108 Gujar Pura, Huzur</h3>
                  <span>Bhopal</span>
                </div>

                <button className="type">Type Plot</button>

                <div className="price-range">
                  <p>$400,000 - $600,000</p>
                </div>

                <div className="facilities">
                  <button>4 Bedroom</button>
                  <button>2 Bathroom</button>
                  <button>Wifi Available</button>
                </div>

              </div>

              <div className="description">
                <h3>Description</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius
modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit
laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum
                </p>
              </div>

            </div>

          </div>

          {/* Similar Plot */}
          <div className="similar-section">
            <h2>Similar Plot</h2>

            <div className="similar-grid">

              <div className="div1">
                <img src={first} alt="" />
                <h3>The Stables</h3>
                <h5>₹9540.99</h5>
                <span>Bhopal MP</span>
                <button>VIEW</button>
              </div>

              <div className="div1">
                <img src={second} alt="" />
                <h3>The Stables</h3>
                <h5>₹9540.99</h5>
                <span>Bhopal MP</span>
                <button>VIEW</button>
              </div>

              <div className="div1">
                <img src={third} alt="" />
                <h3>The Stables</h3>
                <h5>₹9540.99</h5>
                <span>Bhopal MP</span>
                <button>VIEW</button>
              </div>

              <div className="div1">
                <img src={fourth} alt="" />
                <h3>The Stables</h3>
                <h5>₹9540.99</h5>
                <span>Bhopal MP</span>
                <button>VIEW</button>
              </div>

            </div>
          </div>

          {/* Footer */}
          <footer>
            Copyright © Designed & Developed by <span>SmartChainStudio</span> 2025
          </footer>

        </div>
      </div>
    </div>
  );
};

export default Layout;