import React from "react";
import "../../styles/screen/Details/LandDetails.css";
import mashroombg from "../../assets/dashboard/details/mashroombg.png";
import mashroom from "../../assets/dashboard/details/mashroom.png";

import { IoLocation } from "react-icons/io5";
import { MdBedroomChild } from "react-icons/md";
import { GiBathtub } from "react-icons/gi";
import { MdSquareFoot } from "react-icons/md";
import { RiHome7Line } from "react-icons/ri";




import { LuCircleParking } from "react-icons/lu";

const LandDetails = () => {
  return (
    <div className="ld-wrapper">
      <div className="ld-card">

        {/* LEFT */}
        <div className="ld-imgcol">
          <img src={mashroom} alt="main" className="ld-mainimg" />
          <div className="ld-thumbrow">
            <img src={mashroombg} alt="thumb1" className="ld-thumb" />
            <img src={mashroombg} alt="thumb2" className="ld-thumb" />
            <img src={mashroombg} alt="thumb3" className="ld-thumb" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="ld-content">

          <div className="ld-titleblock">
            <h2 className="ld-title">Mushroom 1000M</h2>
            <div className="ld-location">
              <IoLocation size={14} />
              <span>Bhopal</span>
            </div>
          </div>

          <div className="ld-overviewblock">
            <h3 className="ld-overviewtitle">Overview</h3>
            <p className="ld-overviewtext">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
              euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad
              minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut
              aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in
              vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis.
            </p>
          </div>

          <div className="ld-footer">

            <div className="ld-feat">
              <div className="ld-iconring">
                <MdBedroomChild size={16} color="#888" />
              </div>
              <div className="ld-featinfo">
                <span className="ld-featlabel">Bedroom</span>
                <span className="ld-featval">4</span>
              </div>
            </div>

            <div className="ld-feat">
              <div className="ld-iconring ld-iconring--green">
                <GiBathtub size={16} color="#fff" />
              </div>
              <div className="ld-featinfo">
                <span className="ld-featlabel ld-featlabel--green">Bath</span>
                <span className="ld-featval ld-featval--green">3</span>
              </div>
            </div>

            <div className="ld-feat">
              <div className="ld-iconring">
                <MdSquareFoot size={16} color="#888" />
              </div>
              <div className="ld-featinfo">
                <span className="ld-featlabel">Sqft</span>
                <span className="ld-featval">2200</span>
              </div>
            </div>

            <div className="ld-feat">
              <div className="ld-iconring">
                <RiHome7Line size={16} color="#888" />
              </div>
              <div className="ld-featinfo">
                <span className="ld-featlabel">Type</span>
                <span className="ld-featval">Home</span>
              </div>
            </div>

            <div className="ld-feat">
              <div className="ld-iconring">
                <LuCircleParking size={16} color="#888" />
              </div>
              <div className="ld-featinfo">
                <span className="ld-featlabel">Parking</span>
                <span className="ld-featval">Yes</span>
              </div>
            </div>

            <div className="ld-feat">
              <div className="ld-iconring">
                <MdBedroomChild size={16} color="#888" />
              </div>
              <div className="ld-featinfo">
                <span className="ld-featlabel">Build Year</span>
                <span className="ld-featval">2020</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default LandDetails;