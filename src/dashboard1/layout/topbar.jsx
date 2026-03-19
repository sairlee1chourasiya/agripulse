import React from 'react'

import rajat from "../../assets/dashboard/dashboard1/rajatimg.png";
import Search from "../../assets/dashboard/dashboard1/search.png";
import Notification from "../../assets/dashboard/dashboard1/notification.png";

import "../../styles/screen/Dashboard1/topbar.css";

const Topbar = () => {
  return (
    <div className="navbar">
      <div className="search-box">
      <input type="text" placeholder="search here"/>  
      <button>
       <img src={Search}/> 
      </button>
      
      </div> 
      <div className="Right-portion">
        <div className="notification">
        <img src={Notification}/>
        </div>

        <div className="message">
       
        </div>

         <div className = "profile">
            <p>Hi, Rajat</p>
            <span>Admin</span>
          </div>

          <div className="rajat">
            <img src={rajat}/>
          </div>


      </div>
    </div>
  )
}

export default Topbar