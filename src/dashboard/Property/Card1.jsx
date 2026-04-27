import React from 'react'
import { TfiControlSkipBackward } from "react-icons/tfi";
import { RiSkipForwardMiniLine } from "react-icons/ri";
import { IoLocation } from "react-icons/io5";
import { LiaRupeeSignSolid } from "react-icons/lia";
import { useNavigate } from "react-router-dom";



const Card1 = ({item}) => {
   const navigate = useNavigate();
  return (
    <div className= "one">
        <div className="part1">
            <img src={item.image}  className="image-part"/>
            <button className="plot-btn"  onClick={() => navigate("/plot")}>Plot</button>
            <TfiControlSkipBackward />
            <RiSkipForwardMiniLine />
        </div>


        <div className="second-part">
            <h3>{item.title}</h3>
            <p> <LiaRupeeSignSolid />{item.price}</p>
             <IoLocation /><h5>{item.location}</h5>
        </div>

        
            <button className="btn" onClick={() => navigate("/adminpropertypage")}>VIEW</button>
        

    </div>
  )
}

export default Card1