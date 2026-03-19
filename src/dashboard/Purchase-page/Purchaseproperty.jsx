import React, { useState } from "react";

import {
FaFacebookF,
FaTwitter,
FaGooglePlusG,
FaLinkedinIn,
FaInstagram,
FaPinterestP,
FaYelp,
FaYoutube,
FaHome,
FaShoppingCart,
FaMap,
FaUsers,
FaFileAlt,
FaUser,
FaQuestionCircle
} from "react-icons/fa";

import property from "../../assets/dashboard/purchase-page/main.png";
import notification from "../../assets/dashboard/purchase-page/notification.png";
import logo from "../../assets/dashboard/purchase-page/agripulse-logo.png";
import search from "../../assets/dashboard/purchase-page/Search.png";
import profile from "../../assets/dashboard/purchase-page/profile.png";
import discount from "../../assets/dashboard/purchase-page/discount.png";

import "../../styles/screen/Purchase-page/Purchaseproperty.css";

const Purchaseproperty = () => {

const pricePerUnit = 60000;
const [unit,setUnit] = useState(0);

const increase = ()=>{
setUnit(unit + 1);
};

const decrease = ()=>{
if(unit > 0){
setUnit(unit - 1);
}
};

const total = unit * pricePerUnit;

return(

<div className="page">

{/* SIDEBAR */}

<div className="sidebar">


<img src={logo} alt="" />


<div className="search-box">
<img src={search} alt="" />
<input type="text" placeholder="Search"/>
</div>

<p className="menu-title">MAIN MENU</p>

<ul className="menu">

<li>
<FaHome className="menu-icon"/> Dashboard
</li>

<li>
<FaShoppingCart className="menu-icon"/> Purchase
</li>

<li>
<FaMap className="menu-icon"/> Plots
</li>

<li className="active">
<FaUsers className="menu-icon"/> Customer
</li>

<li>
<FaFileAlt className="menu-icon"/> Registry
</li>

</ul>

<p className="menu-title">SETTINGS</p>

<ul className="menu">

<li>
<FaUser className="menu-icon"/> Profile
</li>

<li>
<FaQuestionCircle className="menu-icon"/> Help
</li>

</ul>
<div className="discount-img" style={{ backgroundImage: `url(${discount})` }}>
    <h3><span>50%</span> Discount!</h3>

<p>
t consectetur. Tincidunt dui nulla diam cum ac. Venenatis bibendum
</p>
</div>
<div className="profile-img">

  <img src={profile} alt="profile"/>

  <div className="profile-text">
    <h4>Rajat Pradhan</h4>
    <h5>rajatpradhan@gmail.com</h5>
  </div>

</div>



</div>



{/* MAIN */}

<div className="main">

<div className="topbar">

<button className="hi-btn">HI, THERE</button>

<div className="notification">
<img src={notification} alt="" />
</div>

</div>

<h2 className="page-title">Purchase Property</h2>

<div className="purchase-card">

<div className="property-img">
<img src={property} alt="" />
</div>

<div className="property-details">

<h1>Garden Farm 10M</h1>

<p className="price">Price – 60,000</p>
<p className="size">Size – 1 Unit = 10.75sqft.</p>

<div className="quantity">

<button onClick={decrease}>-</button>

<span>{unit}</span>

<button className="plus" onClick={increase}>+</button>

</div>

</div>

<div className="order-summary">

<h3>Order Summary</h3>

<div className="summary-row">
<p>Total Purchase Unit</p>
<span>{unit} Unit</span>
</div>

<div className="summary-row">
<p>Total Payable Amount</p>
<span>{total.toLocaleString()}/-</span>
</div>

<div className="summary-row">
<p>Grand Total</p>
<span>{total.toLocaleString()}/-</span>
</div>

<button className="purchase-btn">Purchase</button>

</div>

</div>

{/* FOOTER */}

<div className="footer">

<div className="social-icons">

<span><FaFacebookF/> Facebook</span>
<span><FaTwitter/> Twitter</span>
<span><FaGooglePlusG/> Google +</span>
<span><FaLinkedinIn/> Linkedin</span>
<span><FaInstagram/> Instagram</span>
<span><FaPinterestP/> Pinterest</span>
<span><FaYelp/> Yelp</span>
<span><FaYoutube/> Youtube</span>

</div>

<p className="copyright">
© Company - All rights reserved
</p>

</div>

</div>

</div>

)

}

export default Purchaseproperty;