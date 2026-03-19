import React from 'react'
import Sidebar from '../FAQ/Sidebar'
import notification from "../../assets/dashboard/purchase-page/notification.png";
import { AiOutlineHome } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { FcLike } from "react-icons/fc";
import { CiShare2 } from "react-icons/ci";
import { IoIosPrint } from "react-icons/io";
import { IoChevronForwardOutline } from "react-icons/io5";
import { IoMdArrowRoundForward } from "react-icons/io";
import saffron from "../../assets/dashboard/details/saffron.png";
import a from "../../assets/dashboard/details/1.png";
import b from "../../assets/dashboard/details/2.png";
import c from "../../assets/dashboard/details/3.png";
import d from "../../assets/dashboard/details/4.png";
import "../../styles/screen/Details/Details.css";
import { MdOutlineBedroomChild } from "react-icons/md";
import { FaShower } from "react-icons/fa6";
import { MdSquareFoot } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import { FaCar } from "react-icons/fa";
import map from "../../assets/dashboard/details/map.png";
import girl from "../../assets/dashboard/details/girl.png";
import { SiTicktick } from "react-icons/si";
import mashroombg from "../../assets/dashboard/details/mashroombg.png";
import mashroom from "../../assets/dashboard/details/mashroom.png";
import { IoLocation } from "react-icons/io5";
import { MdBedroomChild } from "react-icons/md";
import { GiBathtub } from "react-icons/gi";
import { RiHome7Line } from "react-icons/ri";
import { LuCircleParking } from "react-icons/lu";


import Footer from '../FAQ/Footer'


const Details = () => {
  return (
    <section className='details'>
     <div className="sidediv"><Sidebar/> </div>
        

        
            <div className="main-detailscontainer">
              
                <div className="header">
                    <button>HI THERE</button>
                    <div className="notifi">
                    <img src={notification} /></div></div>
               <div className="container1">
               <div className="container1a">
                 <div className="headings">
                    <AiOutlineHome />
                    <p>Home</p><IoChevronForwardOutline /><p>List</p><IoChevronForwardOutline /><p>kesar-100M Details</p>
                   
                    





                 </div>
                 <div className="kesar">
                    <p>Kesar-100M</p>
                    <button className='F'>FEATURED</button>
                     <button className='F'>FOR RENT</button>
                     <p> <CiLocationOn />172 Gujar Pura, Peer Gate, Huzur , Bhopal M.P 462001</p>
                 </div></div>
                 <div className="price-section">

  <div className="icons-box">
    <span><FcLike /></span>
    <span><CiShare2 /></span>
    <span><IoIosPrint /></span>
  </div>

  <div className="price-text">
    From ₹45,000,00/-
  </div>

  <button className="purchase-btn">
    PURCHASE THIS PROPERTY
    <IoMdArrowRoundForward />
  </button>

</div>

                </div>
                   


                  


                   <div className="top-panel">
                   <div className="mainimg">
                    <img src={saffron} className='mainimage'/></div>
                    <div className="sideimgs">
                        <img src={a} className='sideimage'/>
                        <img src={b} className='sideimage'/>
                        <img src={c} className='sideimage'/>
                        <img src={d} className='sideimage'/>
                        <img src={d} className='sideimage'/>
                        
                    </div>

                   </div>
            <div className="Overview-part">
  <h2>Overview</h2>

  <div className="overview-container">

 
    <div className="overview-left">

      <div className="overview-grid">

        
        <div className="item property-type">
          <div>
            <h3>Apartment</h3>
            <span>Property Type</span>
          </div>
        </div>

        <div className="item">
          <MdOutlineBedroomChild />
          <div>
            <h3>4</h3>
            <span>Bedrooms</span>
          </div>
        </div>

        <div className="item">
          <FaShower />
          <div>
            <h3>2</h3>
            <span>Bathrooms</span>
          </div>
        </div>

        
        <div className="item">
          <FaCar />
          <div>
            <h3>1</h3>
            <span>Garage</span>
          </div>
        </div>

        <div className="item">
          <MdSquareFoot />
          <div>
            <h3>1200</h3>
            <span>Sq Ft</span>
          </div>
        </div>

        <div className="item">
          <CiCalendarDate />
          <div>
            <h3>2016</h3>
            <span>Year Built</span>
          </div>
        </div>

      </div>

    </div>

    {/* RIGHT SIDE MAP  upar import krna h  */}
    <div className="map-part">
      <img src={map} alt="map" />
    </div>

  </div>
</div>






{/*enquiry form*/}

<div className="enquiry-form">
<h2>Enquiry Form

</h2>
<div className="user-info">
<div className="user-detail">
  <img src={girl} />
</div>
<div className="user-name">
  <h3>Rajat Pradhan</h3>
  <h3 style={{color: "green"}}>VIEW LISTINGS</h3>
</div> </div>

<form className='forms'>
  <input type="text" placeholder='Name' />
  <input type="text" placeholder='Phone' />
  <input type="email" placeholder='E-mail' />

  <textarea rows={4} placeholder="Hello, I am interested in [Modern apartment on the bay]"></textarea>


  <select name="select" ></select>
  <p>By submitting this form I agree to Terms of Use</p>

  <button>Send Message</button>
</form>

</div>




{/*description part */}






<div className="description-part">
    <div className="descrip">
<h2>Description</h2></div>
       <div className="info">
    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation
ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor
in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero
eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te
feugait nulla facilisi.   <br />   Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim
placerat facer possim assum. Typi non habent claritatem insitam; est usus legentis in iis qui facit eorum
claritatem. Investigationes demonstraverunt lectores legere me lius quod ii legunt saepius. Claritas est
etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam
littera gothica, quam nunc putamus parum claram, anteposuerit litterarum formas humanitatis per
seacula quarta decima et quinta decima. Eodem modo typi, qui nunc nobis videntur parum clari, fiant
sollemnes in futurum.</p></div>
</div>








{/*deatls part table wala */}


<div className="details-part">
  <div className="detail-header">
    <h2>Details</h2>
    <p className='data'><CiCalendarDate />Updated on April 17, 2025 at 6:19 am</p>
  </div>
  <div className="table-part">
    <div className="coloum">
      <div className="row">
        <span>Property ID:</span>
        <span>hz-HZ40</span>
      </div>


      <div className="row">
        <span>Prise:</span>
        <span>From ₹45,000,00/-</span>
      </div>


      <div className="row">
        <span>Property Size:</span>
        <span>1200 Sq Ft</span>
      </div>

      <div className="row">
        <span>Bedrooms:</span>
        <span>4</span>
      </div>


      <div className="row">
        <span>Bathrooms:</span>
        <span>2</span>
      </div>


    </div>


    <div className="coloum">
      <div className="row">
        <span>Garage:</span>
        <span>1</span>
      </div>


      <div className="row">
        <span>Garage Size:</span>
        <span>200 SqFt</span>
      </div>


      <div className="row">
        <span>Year Built:</span>
        <span>2024</span>
      </div>

      <div className="row">
        <span>Property Type:</span>
        <span>Apartment</span>
      </div>


      <div className="row">
        <span>Property Status:</span>
        <span>For Rent</span>
      </div>


    </div>
  </div>
</div>    





{/*additional part*/}


<div className="details-part">
  <div className="detail-header">
    <h2> Additional Details</h2>
    <button className='A'>Open On Google Map</button>
  </div>
  <div className="table-part">
    <div className="coloum">
      <div className="row">
        <span>Deposit:</span>
        <span>20%</span>
      </div>


      <div className="row">
        <span>Pool Size:</span>
        <span>300 Sqft</span>
      </div>


      <div className="row">
        <span>Last remodel year:</span>
        <span>1986</span>
      </div>

      


    </div>


    <div className="coloum">
      <div className="row">
        <span>Amenities:</span>
        <span>clubhouse</span>
      </div>


      <div className="row">
        <span>Additional Rooms:</span>
        <span>Guest Bath</span>
      </div>


      <div className="row">
        <span>Equipment:</span>
        <span>Grill - Gas</span>
      </div>




    </div>
  </div>
</div>




{/*features*/}



 
<div className="features-part">
  <div className="features-header">
    <h2> Features</h2>
    
  </div>
  <div className="table-feature">
    <div className="coloum1">
      <div className="row1">
        <SiTicktick /><span>Air Conditioning</span>
        
      </div>


      <div className="row1">
        <SiTicktick /><span>dryer</span>
       
      </div>


      <div className="row1">
       <SiTicktick /> <span>Laundry</span>
       
      </div>
      <div className="row1">
       <SiTicktick /> <span>Barbeque</span>
       
      </div>
      

      


    </div>


    <div className="coloum1">
      <div className="row1">
        <SiTicktick /><span>Lawn</span>
       
      </div>


      <div className="row1">
        <SiTicktick /><span>Microwave</span>
       
      </div>


      <div className="row1">
       <SiTicktick /><span>Outdoor Shower</span>
       
      </div>
      <div className="row1">
       <SiTicktick /><span>Sauna</span>
       
      </div>
      <div className="row1">
       <SiTicktick /><span>Refrigerator</span>
        
      </div>




    </div>
     <div className="coloum1">
      <div className="row1">
        <SiTicktick /><span>Swimming Pool</span>
       
      </div>


      <div className="row1">
        <SiTicktick /><span>WiFi</span>
       
      </div>


      <div className="row1">
       <SiTicktick /><span>Washer</span>
       
      </div>
      <div className="row1">
       <SiTicktick /><span>TV Cable </span>
       
      </div>
      <div className="row1">
       <SiTicktick /><span>Window Covering</span>
        
      </div>




    </div>
  </div>
</div>

<div className="similar-landdetails">

  <div className="part1">
    <div className="imagepart">
      <div className="img1">
        <img src={mashroom} />
      </div>
      <div className="bgimg">
        <div className="img2">
          <img src={mashroombg} />
          <img src={mashroombg} />
          <img src={mashroombg} />
        </div>
      </div>

    </div>

    <div className="content">
      <div className="mashroom-header">
      <h2>Mushroom 1000M</h2> 
      <div className="bhopal">
      <IoLocation /> 
      <span>Bhopal</span></div>
      </div>

      <div className="overview-mashroom">

        <h3>Overview</h3>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te
feugait nulla facilisi.</p>
      </div>



      {/*footer mashroom */}



      <div className="mashroom-footer">
        <div className="facility">
         <MdBedroomChild />
         <div className="facility1">
          <span>Bedrooms</span>
          <span>4</span>
          </div> 

        </div>
        <div className="facility">
         <GiBathtub />
         <div className="facility1">
          <span>Bath</span>
          <span>2</span>
          </div> 

        </div>
        <div className="facility">
        <MdSquareFoot />
         <div className="facility1">
          <span>sqft</span>
          <span>2200</span>
          </div> 

        </div>
        <div className="facility">
         <RiHome7Line />
         <div className="facility1">
          <span>Type</span>
          <span>Home</span>
          </div> 

        </div>
        <div className="facility">
         <LuCircleParking />
         <div className="facility1">
          <span>Parking</span>
          <span>yes</span>
          </div> 

        </div>
        <div className="facility">
        <CiCalendarDate />
         <div className="facility1">
          <span>Build Year</span>
          <span>2020</span>
          </div> 

        </div>

      </div>

    </div>
  </div>
</div>

<div className="similar-landdetails">

  <div className="part1">
    <div className="imagepart">
      <div className="img1">
        <img src={mashroom} />
      </div>
      <div className="bgimg">
        <div className="img2">
          <img src={mashroombg} />
          <img src={mashroombg} />
          <img src={mashroombg} />
        </div>
      </div>

    </div>

    <div className="content">
      <div className="mashroom-header">
      <h2>Mushroom 1000M</h2> 
      <div className="bhopal">
      <IoLocation /> 
      <span>Bhopal</span></div>
      </div>

      <div className="overview-mashroom">

        <h3>Overview</h3>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te
feugait nulla facilisi.</p>
      </div>



      {/*footer mashroom */}



      <div className="mashroom-footer">
        <div className="facility">
         <MdBedroomChild />
         <div className="facility1">
          <span>Bedrooms</span>
          <span>4</span>
          </div> 

        </div>
        <div className="facility">
         <GiBathtub />
         <div className="facility1">
          <span>Bath</span>
          <span>2</span>
          </div> 

        </div>
        <div className="facility">
        <MdSquareFoot />
         <div className="facility1">
          <span>sqft</span>
          <span>2200</span>
          </div> 

        </div>
        <div className="facility">
         <RiHome7Line />
         <div className="facility1">
          <span>Type</span>
          <span>Home</span>
          </div> 

        </div>
        <div className="facility">
         <LuCircleParking />
         <div className="facility1">
          <span>Parking</span>
          <span>yes</span>
          </div> 

        </div>
        <div className="facility">
        <CiCalendarDate />
         <div className="facility1">
          <span>Build Year</span>
          <span>2020</span>
          </div> 

        </div>

      </div>

    </div>
  </div>
</div>




<div className="similar-landdetails">

  <div className="part1">
    <div className="imagepart">
      <div className="img1">
        <img src={mashroom} />
      </div>
      <div className="bgimg">
        <div className="img2">
          <img src={mashroombg} />
          <img src={mashroombg} />
          <img src={mashroombg} />
        </div>
      </div>

    </div>

    <div className="content">
      <div className="mashroom-header">
      <h2>Mushroom 1000M</h2> 
      <div className="bhopal">
      <IoLocation /> 
      <span>Bhopal</span></div>
      </div>

      <div className="overview-mashroom">

        <h3>Overview</h3>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te
feugait nulla facilisi.</p>
      </div>



      {/*footer mashroom */}



      <div className="mashroom-footer">
        <div className="facility">
         <MdBedroomChild />
         <div className="facility1">
          <span>Bedrooms</span>
          <span>4</span>
          </div> 

        </div>
        <div className="facility">
         <GiBathtub />
         <div className="facility1">
          <span>Bath</span>
          <span>2</span>
          </div> 

        </div>
        <div className="facility">
        <MdSquareFoot />
         <div className="facility1">
          <span>sqft</span>
          <span>2200</span>
          </div> 

        </div>
        <div className="facility">
         <RiHome7Line />
         <div className="facility1">
          <span>Type</span>
          <span>Home</span>
          </div> 

        </div>
        <div className="facility">
         <LuCircleParking />
         <div className="facility1">
          <span>Parking</span>
          <span>yes</span>
          </div> 

        </div>
        <div className="facility">
        <CiCalendarDate />
         <div className="facility1">
          <span>Build Year</span>
          <span>2020</span>
          </div> 

        </div>

      </div>

    </div>
  </div>
</div>




<div className="similar-landdetails">

  <div className="part1">
    <div className="imagepart">
      <div className="img1">
        <img src={mashroom} />
      </div>
      <div className="bgimg">
        <div className="img2">
          <img src={mashroombg} />
          <img src={mashroombg} />
          <img src={mashroombg} />
        </div>
      </div>

    </div>

    <div className="content">
      <div className="mashroom-header">
      <h2>Mushroom 1000M</h2> 
      <div className="bhopal">
      <IoLocation /> 
      <span>Bhopal</span></div>
      </div>

      <div className="overview-mashroom">

        <h3>Overview</h3>
        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te
feugait nulla facilisi.</p>
      </div>



      {/*footer mashroom */}



      <div className="mashroom-footer">
        <div className="facility">
         <MdBedroomChild />
         <div className="facility1">
          <span>Bedrooms</span>
          <span>4</span>
          </div> 

        </div>
        <div className="facility">
         <GiBathtub />
         <div className="facility1">
          <span>Bath</span>
          <span>2</span>
          </div> 

        </div>
        <div className="facility">
        <MdSquareFoot />
         <div className="facility1">
          <span>sqft</span>
          <span>2200</span>
          </div> 

        </div>
        <div className="facility">
         <RiHome7Line />
         <div className="facility1">
          <span>Type</span>
          <span>Home</span>
          </div> 

        </div>
        <div className="facility">
         <LuCircleParking />
         <div className="facility1">
          <span>Parking</span>
          <span>yes</span>
          </div> 

        </div>
        <div className="facility">
        <CiCalendarDate />
         <div className="facility1">
          <span>Build Year</span>
          <span>2020</span>
          </div> 

        </div>

      </div>
      

    </div>
  </div>
  
</div>



{/*original footer*/

}
<div className="footdiv"><Footer/></div>

</div>
 
            
  </section>
  )
}

export default Details