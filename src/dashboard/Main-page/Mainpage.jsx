{/*
import React from 'react'
import Sideboard from '../FAQ/Sideboard';
import Footer from '../FAQ/Footer'
import "../../styles/screen/Main-page/Mainpage.css";

const Mainpage = () => {
  return (
    <section>
    <div><Sideboard/>
 

  </div>



  <>
  <form action="hyyyy"></form></>
    </section>
  )
}

export default Mainpage*/}


{/*}



import React, { useState } from "react";
import "../../styles/screen/Main-page/Mainpage.css";

const Mainpage = () => {

  const [price, setPrice] = useState(500);

  return (
    <div className="filter-container">

      <h2>Book Custom Firm Land</h2>

      
      <p className="price-text">
        Price Range: ₹{price}
      </p>

   
      <input
        type="range"
        min="500"
        max="3500000"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        className="range"
      />

    </div>
  );
};

export default Mainpage; 
  */}

import React from "react";
import SVG1 from "../../assets/dashboard/main-page/SVG1.png";
import SVG2 from "../../assets/dashboard/main-page/SVG 2.png";
import SVG3 from "../../assets/dashboard/main-page/SVG3.png";
import SVG4 from "../../assets/dashboard/main-page/SVG4.png";
import img1 from "../../assets/dashboard/purchase/img1.png";

import img2 from "../../assets/dashboard/purchase/img2.png";
import img3 from "../../assets/dashboard/purchase/img3.png";
import img4 from "../../assets/dashboard/purchase/img4.png";
import photo from "../../assets/dashboard/main-page/photo.png";

import icon1 from "../../assets/dashboard/main-page/icon1.png";
import icon2 from "../../assets/dashboard/main-page/icon2.png";
import icon3 from "../../assets/dashboard/main-page/icon3.png";
import icon4 from "../../assets/dashboard/main-page/icon4.png";
import icon5 from "../../assets/dashboard/main-page/icon5.png";
import icon6 from "../../assets/dashboard/main-page/icon6.png";
import icon7 from "../../assets/dashboard/main-page/icon7.png";
import icon8 from "../../assets/dashboard/main-page/icon8.png";
import Background1 from "../../assets/dashboard/main-page/Background1.png";
import Background2 from "../../assets/dashboard/main-page/Background2.png";
import Background3 from "../../assets/dashboard/main-page/Background3.png";
import Background4 from "../../assets/dashboard/main-page/Background4.png";
import Background5 from "../../assets/dashboard/main-page/Background5.png";
import Frame1 from "../../assets/dashboard/main-page/Frame1.png";
import { IoMdNotificationsOutline } from "react-icons/io";




import "../../styles/screen/Main-page/Mainpage.css";
import Card from './Card';
import Data from './Data';
import Customer from './Customer';

import FilterBar from "./FilterBar";
import RequestForm from "./RequestForm";
import Footer from "../FAQ/Footer";
import Slider from "./Slider";

import Firstslide from "./Firstslide";

 

const properties = [
  {
    id: 1,
    title: "Kesar - 1 M",
    type: "Virtual Firm Land",
    price: "1 M",
    image: img1,
    liked: true,
  },
  {
    id: 2,
    title: "Kesar - 10 M",
    type: "Virtual Firm Land",
    price: "10 M",
    image: img2,
    liked: false,
  },
  {
    id: 3,
    title: "Kesar - 25 M",
    type: "Virtual Firm Land",
    price: "25 M",
    image: img3,
    liked: false,
  },
  {
    id: 4,
    title: "Kesar - 100 M",
    type: "Marker Land",
    price: "100 M",
    image: img4,
    liked: false,
  },
];


const firmland = [
    {
    id: 1,
    title: "Hotels",
    type: "Hotels are a type of commercial real  estate property that can be extremel profitable.",
    
    image: icon1,
    
  },


   {
    id: 2,
    title: "Industrial",
    type: "Industrial properties are used for a variety of purposes, like manufacturing,storage, and distribution..",
    
    image: icon2,
    
  },


   {
    id: 3,
    title: "Lands",
    type: "We have a variety of land for sale,ranging in size and price. We can help you find what you’re looking for.",
    
    image: icon3,
    
  },


   {
    id: 4,
    title: "Mixed Use",
    type: "Mixed-use properties are becoming popular, as they offer a combination of residential and commercial space..",
    
    image: icon4,
    
  },



   {
    id: 5,
    title: "Multifamily",
    type: "Multifamily properties are a great investment providing you with rental income and potential appreciation..",
    
    image: icon5,
    
  },

   {
    id: 6,
    title: "Office",
    type: "Multifamily properties are a great investment providing you with rental income and potential appreciation..",
    
    image: icon6,
    
  },

     {
    id: 7,
    title: "Retail",
    type: "Multifamily properties are a great investment providing you with rental income and potential appreciation.",
    
    image: icon7,
    
  },


     {
    id: 8,
    title: "Special Purpose",
    type: "Multifamily properties are a great investment providing you with rental income and potential appreciation.",
    
    image: icon8,
    
  },

]


const customers = [


 
  {
    id: 1,
    title: " 9 Properties",
    type: "Peer gate",
   
    image: Background1,
    
  },
  {
    id: 2,
    title: "15 Properties",
    type: "Bhopal talkies",
  
    image: Background2,
   
  },
  {
    id: 3,
    title: "11 Properties",
    type: "Lake View",
  
    image: Background3,
    
  },
   {
    id: 4,
    title: "14 Properties",
    type: "Lal ghati",
   
    image: Background4,
   
  },
   {
    id: 5,
    title: "13 Properties",
    type: "Vip road",
    
    image: Background5,
    
  },
   
];








 

 




  









const Mainpage = () => {
  return (
    
   
<div className="maincontainer">



  <div className="header">
    <div className="button"><button>HI THERE</button></div>
     <IoMdNotificationsOutline className="icon" />
  </div>

  
  <Firstslide/>
<div className="first-infopart">
    <div className="info">
<img src={SVG1} /> <p>Large number of properties located
near your desired location.</p></div>

   <div className="info">
<img src={SVG2} /> <p>Large number of properties located
near your desired location.</p></div>

   <div className="info">
<img src={SVG3} /> <p>Large number of properties located
near your desired location.</p></div>


   <div className="info">
<img src={SVG4} /> <p>Large number of properties located
near your desired location.</p></div>









</div>





    
    <FilterBar />
    
    <Slider/>
     

    
    <><p className='abcd'>We provide every type of Firm Land</p></>

     <div className="firm-land-section">
    <div className="data-container">
      {firmland.map((item) => (
        <Data key={item.id} item={item}/>
      ))
        } 




    </div></div>



    <div className="customer">
       {customers.map((item) => (
        <Customer key={item.id} item={item}/>

      ) )}

    </div>
    <RequestForm/>


    <div className="goodhands-container">

      {/* LEFT CONTENT */}
      <div className="left-section">
        <div className="line"></div>

        <h1>You’re in good hands</h1>

        <p>
          Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit,
          ne ferae quidem se repellere, idque instituit docere sic: omne animal,
          simul atque integre iudicante itaque aiunt hanc quasi involuta aperiri,
          altera occulta quaedam et voluptatem accusantium doloremque.
        </p>

        <button className="learn-btn">
          Learn more →
        </button>
      </div>

      {/* RIGHT IMAGE */}
      <div className="right-section">
        <img src={Frame1} alt="land" />
      </div>

    </div>



<Footer/>

</div>


    
  )
}


export default Mainpage;








  