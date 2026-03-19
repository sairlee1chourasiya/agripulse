import React from "react";

import logo from "../../assets/dashboard/purchase-page/agripulse-logo.png";
import search from "../../assets/dashboard/purchase-page/Search.png";

const Sidebaar = () => {

return(

<div className="sidebar">

<div className="logo-box">
<img src={logo}/>
</div>

<div className="search-box">

<img src={search}/>

<input type="text" placeholder="Search"/>

</div>

<p className="menu-title">MAIN MENU</p>

<ul className="menu">

<li>Dashboard</li>
<li>Purchase</li>
<li>Plots</li>
<li className="active">Customers</li>
<li>Registry</li>

</ul>

<p className="menu-title">SETTINGS</p>

<ul className="menu">

<li>Profile</li>
<li>Help</li>

</ul>

</div>

)

}

export default Sidebaar;