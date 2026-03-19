import React from "react";

import logo1 from "../../../../src/assets/website/logo1.png";
import logo2 from "../../../../src/assets/website/logo2.png";
import logo3 from "../../../../src/assets/website/logo3.png";
import logo4 from "../../../../src/assets/website/logo4.png";
import logo5 from "../../../../src/assets/website/logo5.png";
import logo6 from "../../../../src/assets/website/logo6.png";
import "../../screen/logopartner.css";




const Logopartner = () => {
  return (
    <section className="logo-partner">
      <h3>Trusted by 10,000+ companies around the world</h3>

      <div className="logo-container">
        <img src={logo1}  />
        <img src={logo2}  />
        <img src={logo3}  />
        <img src={logo4}  />
        <img src={logo5}  />
      </div>
    </section>
  );
};

export default Logopartner;
