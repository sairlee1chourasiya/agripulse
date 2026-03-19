import React from 'react'
import frame1 from "../../assets/dashboard/dashboard1/frame1.png";
import frame2 from "../../assets/dashboard/dashboard1/frame2.png";
import frame3 from "../../assets/dashboard/dashboard1/frame3.png";
import "../../styles/screen/frame.css";

const Frame = () => {
  return (
    <div className="mainframe">
        <div className="frame1">
            <img src={frame1}  />
        </div>
        <div className="frame2">
            <img src={frame2}  />
        </div>
        <div className="frame3">
            <img src={frame3}  />
        </div>
    </div>
  )
}

export default Frame