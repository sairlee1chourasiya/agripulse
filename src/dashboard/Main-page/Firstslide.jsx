import React, { useEffect, useState } from "react";
import "../../styles/screen/Main-page/Firstslide.css";

import Frame1 from "../../assets/dashboard/main-page/Frame1.png";
import Frame2 from "../../assets/dashboard/main-page/Frame2.png";
import Frame3 from "../../assets/dashboard/main-page/Frame3.png";
const Firstslide = () => {
  const images = [Frame1, Frame2, Frame3];

  const [index, setIndex] = useState(0);

  
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider">
      <img src={images[index]} alt="slide" />
    </div>
  );
};

export default Firstslide;