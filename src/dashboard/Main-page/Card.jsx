import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";

const Card = ({ item }) => {
  return (
    <div className="card">
      
      <img src={item.image}  className="card-img" />

    
      <div className="tag">Only 2 Left</div>

    
      <div className="card-content">
        <div className="text">
          <h3>{item.title}</h3>
          <p>{item.type}</p>
          <button className="buy-btn">BUY NOW</button>
        </div>

        <div className="heart">
          {item.liked ? <FaHeart /> : <FaRegHeart />}
        </div>
      </div>
    </div>
  );
};

export default Card;