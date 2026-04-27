import React from 'react'
import { CiPlay1 } from "react-icons/ci";

const Customer = ({item}) => {
  return (
    <div className="Customer">
     <img src={item.image}  className="customer-imge"/>
       

       <div className="property">
        <h3>{item.title}</h3>
        <p>{item.type}</p>
          <h5 className="more-details">More Details</h5>
          <div className="play">
         <CiPlay1 /></div>

       </div>



    </div>
  )
}

export default Customer;