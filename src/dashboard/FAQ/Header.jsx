import React from 'react'
import notification from "../../assets/dashboard/purchase-page/notification.png";

const Header = () => {
  return (
    <div className="topbar">
    
    <button className="hi-btn">HI, THERE</button>
    
    <div className="notification">
    <img src={notification} alt="" />
    </div>
    
    </div>
  )
}

export default Header