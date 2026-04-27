import React from 'react'

import { FaChartPie } from "react-icons/fa";
import { TbFlipHorizontal } from "react-icons/tb";
import { CiHeart } from "react-icons/ci";

import { TbMoneybagHeart } from "react-icons/tb";
import { FcPieChart } from "react-icons/fc";
import { FaArrowsTurnToDots } from "react-icons/fa6";
import chart from "../../assets/dashboard/purchase/chart.png";
import Footer from '../FAQ/Footer'

import "../../styles/screen/Purchase/Purchase.css";
import { LuCircleParking } from "react-icons/lu";
import { CiCalendarDate } from "react-icons/ci";
import { RiHome7Line } from "react-icons/ri";
import { MdSquareFoot } from "react-icons/md";
import { MdBedroomChild } from "react-icons/md";
import { GiBathtub } from "react-icons/gi";
import { IoLocation } from "react-icons/io5";
import mashroombg from "../../assets/dashboard/details/mashroombg.png";
import mashroom from "../../assets/dashboard/details/mashroom.png";
import notification from "../../assets/dashboard/purchase-page/notification.png";
import img1 from "../../assets/dashboard/purchase/img1.png";
import img2 from "../../assets/dashboard/purchase/img2.png";
import img3 from "../../assets/dashboard/purchase/img3.png";
import img4 from "../../assets/dashboard/purchase/img4.png";
{/*import first from "../../assets/dashboard/purchase/first.png";*/}
import graph from "../../assets/dashboard/purchase/graph.png";
import blueline from "../../assets/dashboard/purchase/blueline.png";
import LandDetails from '../Details/LandDetails';







const Purchase = () => {
  return (
    
   
  

      <div className="main-detailscontainer">
       
        
        
          <div className="head">
            <button>HI, THERE</button>
            <div className="notifica">
              <img src={notification} />
            </div>
          </div>


        <div className="investment-details">
          <h2 >Investment-Details</h2>


          <div className="four-boxs" >
            <div className="left-coloum">
              <div className="total-investment">
                <span>Total Investment Amount</span>
                <h2 >150000</h2>
                <TbMoneybagHeart className="icon-style"/>

              </div>
              <div className="total-investment">
                <span>Total Sqft</span>
                <h2>3298</h2>
                <FaChartPie className="icon-style1" />

              </div>


            </div>


            <div className="right-coloum">
              <div className="total-investment">
                <span>Return</span>
                <h2>150000</h2>
                <TbFlipHorizontal className="icon-style2" />

              </div>
              <div className="total-investment">
                <span>Firm Land Type</span>
                <h2>Kesar 100-M</h2>
                <div className="blue-line">
                  <img src={blueline} />
                </div>

              </div>

            </div>
            



           


           



           



          </div>

          <div className="plot-rate">
            <img src={chart} />
          </div>


        </div>


          

          <div className="plot-currentValue">

            <h2>Plots Current Value</h2>
            <img src={graph}
/>
          </div>




          <div className="all-plots">
            <h2>All Plots</h2>
            <div className="first-div">
              <div className="img-box">

                <img src={img1} /> 
               <div className="overlay"style={{backgroundColor:"white"}}>
                <div className="text">
                
                
                <h2>Kesar-1M</h2>
                <span>Virtual Firm Land</span>  <br /> 
                <button className="buy">Buy Now</button>
                <CiHeart  className="heart"/></div>
        
               </div>

        
              </div>

              
            </div>    
            
              <div className="img-box">

                <img src={img1} /> 
               <div className="overlay"style={{backgroundColor:"white"}}>
                <div className="text">
                
                
                <h2>Kesar-1M</h2>
                <span>Virtual Firm Land</span>  <br />
                <button className="buy">Buy Now</button>
                <CiHeart  className="heart"/></div>
        
        
              </div>

              
            </div>

            
              <div className="img-box">

                <img src={img1} /> 
               <div className="overlay "style={{backgroundColor:"white"}}>
                <div className="text">
                
                
                <h2>Kesar-1M</h2>
                <span>Virtual Firm Land</span>  <br />
                <button className="buy">Buy Now</button>
                <CiHeart  className="heart"/></div>
        
           

        
              </div>

              
            </div>

           
              <div className="img-box">

                <img src={img1} /> 
               <div className="overlay" style={{backgroundColor:"white"}}>
                <div className="text">
                
                
                <h2>Kesar-1M</h2>
                <span>Virtual Firm Land</span>  <br />
                <button className="buy">Buy Now</button>
               
                <CiHeart   className="heart"/></div>
        
              

        
              </div>

              
            </div>
            
            </div>
            




           



<div className="all-plots"  style={{ marginLeft: "95px", marginTop:"-70px" }}>
            
            <div className="first-div">
              <div className="img-box">

                <img src={img1} /> 
               <div className="overlay" style={{backgroundColor:"white"}}>
                <div className="text">
                
                
                <h2>Kesar-1M</h2>
                <span>Virtual Firm Land</span>  <br /> 
                <button className="buy">Buy Now</button>
                <CiHeart  className="heart"/></div>
        
               </div>

        
              </div>

              
            </div>    
            
              <div className="img-box">

                <img src={img1} /> 
               <div className="overlay" style={{backgroundColor:"white"}}>
                <div className="text">
                
                
                <h2>Kesar-1M</h2>
                <span>Virtual Firm Land</span>  <br />
                <button className="buy">Buy Now</button>
                <CiHeart  className="heart"/></div>
        
        
              </div>

              
            </div>

            
              <div className="img-box">

                <img src={img1} /> 
               <div className="overlay" style={{backgroundColor:"white"}}>
                <div className="text">
                
                
                <h2>Kesar-1M</h2>
                <span>Virtual Firm Land</span>  <br />
                <button className="buy">Buy Now</button>
                <CiHeart  className="heart"/></div>
        
           

        
              </div>

              
            </div>

           
              <div className="img-box">

                <img src={img1} /> 
               <div className="overlay" style={{backgroundColor:"white"}}>
                <div className="text">
                
                
                <h2>Kesar-1M</h2>
                <span>Virtual Firm Land</span>  <br />
                <button className="buy">Buy Now</button>
               
                <CiHeart   className="heart"/></div>
        
              

        
              </div>

              
            </div>
            
            </div>


               





         




            <div className="history">
              <h2 style={{marginTop: "20px", marginLeft: "20px"} }>Purchase History </h2>
            </div>



            <LandDetails/>  
            <LandDetails/>  
            <LandDetails/>    



 



 
</div>


          



           

           
           
         
    
        
  )
}

export default Purchase;