import React from 'react'
import "../../styles/screen/VenderList/VenderList.css";
import rajat from "../../assets/dashboard/dashboard1/rajatimg.png";

import { FaSearch } from "react-icons/fa";
import { IoNotificationsCircle } from "react-icons/io5";
import { SiGooglemessages } from "react-icons/si";
import { TbMinusVertical } from "react-icons/tb";
import VendorTable from './VendorTable';



const VenderList = () => {
  return (
    <div className="one">
       
        <div className="top-part">
          <div className="search-bar">
          <input type="text" placeholder="Search Here" />
               <button className="search-btn">
                    <FaSearch className="icon2" />
                    </button>
                </div>


          <div className="side-part">
            <IoNotificationsCircle className="icon" />
            <SiGooglemessages  className="icon"/>
            <p>hi Rajat</p><TbMinusVertical className="line" />
            <span>Admin</span> 
            <img src={rajat} className="picture" />
          </div>

        </div>

        <VendorTable/>
      
       
    </div>
  )
}

export default VenderList;