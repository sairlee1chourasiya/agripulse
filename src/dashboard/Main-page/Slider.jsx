import React, { useState } from "react";
import "../../styles/screen/Main-page/PriceRange.css";

const Slider = () => {
  const MIN = 500;
  const MAX = 3500000;

  const [min, setMin] = useState(MIN);
  const [max, setMax] = useState(3500000);

  const getPercent = (value) => {
    return ((value - MIN) / (MAX - MIN)) * 100;
  };

  return (
    <div className="range-container">
      <div className="ann">
      <p className="label">
        Price Range From ₹{min.toLocaleString()} To ₹{max.toLocaleString()}
      </p> </div>

      <div className="slider">
       
        <div className="track" />

      
        <div
          className="range"
          style={{
            left: `${getPercent(min)}%`,
            width: `${getPercent(max) - getPercent(min)}%`,
          }}
        />

   
       

       
        <input
          type="range"
          min={MIN}
          max={MAX}
          value={max}
          onChange={(e) =>
            setMax(Math.max(+e.target.value, min + 100))
          }
          className="thumb thumb-right"
        />
      </div>
    </div>
  );
};

export default Slider;