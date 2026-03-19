import React from "react";
import "../../styles/screen/product.css";

import vegi1 from "../../assets/website/vegi1.png";
import vegi2 from "../../assets/website/vegi2.png";
import vegi3 from "../../assets/website/vegi3.png";

const Product = () => {
  return (
    <section className="product">
      <div className="product-header">
        <h2>Boost your vitamin with our fresh vegetables</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit
          phasellus mollis sit aliquam sit nullam.
        </p>
      </div>

      <div className="product-container">

        
        <div className="product-card">
          <img src={vegi1}  />

          <div className="product-info">
            <div className="product-title">
              <h3>Wortel</h3>
              <span>$3</span>
            </div>

            <p>
              Lorem ipsum dolor sit amet dolor siti conse ctetur adipiscing elit.
            </p>

            <ul>
              <li>All best quality</li>
              <li>Multi vitamins and minerals</li>
              <li>Normal support</li>
            </ul>

            <button>Buy now</button>
          </div>
        </div>

        {}
        <div className="product-card">
          <img src={vegi2}  />

          <div className="product-info">
            <div className="product-title">
              <h3>Lobak</h3>
              <span>$4</span>
            </div>

            <p>
              Lorem ipsum dolor sit amet dolor siti conse ctetur adipiscing elit.
            </p>

            <ul>
              <li>All best quality</li>
              <li>Multi vitamins and minerals</li>
              <li>Normal support</li>
            </ul>

            <button>Buy now</button>
          </div>
        </div>

        {}
        <div className="product-card">
          <img src={vegi3}  />

          <div className="product-info">
            <div className="product-title">
              <h3>Seledri</h3>
              <span>$1</span>
            </div>

            <p>
              Lorem ipsum dolor sit amet dolor siti conse ctetur adipiscing elit.
            </p>

            <ul>
              <li>All best quality</li>
              <li>Multi vitamins and minerals</li>
              <li>Normal support</li>
            </ul>

            <button>Buy now</button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Product;
