import React from 'react'
import {
FaFacebookF,
FaTwitter,
FaGooglePlusG,
FaLinkedinIn,
FaInstagram,
FaPinterestP,
FaYelp,
FaYoutube,


} from "react-icons/fa";
import "../../styles/screen/FAQ/Footer.css";

const Footer = () => {
  return (
   <div className="footer">
   
   <div className="social-icons">
   
   <span><FaFacebookF/> Facebook</span>
   <span><FaTwitter/> Twitter</span>
   <span><FaGooglePlusG/> Google +</span>
   <span><FaLinkedinIn/> Linkedin</span>
   <span><FaInstagram/> Instagram</span>
   <span><FaPinterestP/> Pinterest</span>
   <span><FaYelp/> Yelp</span>
   <span><FaYoutube/> Youtube</span>
   
   </div>
   
   <p className="copyright">
   © Company - All rights reserved
   </p>
   
   </div>
   
   
   

   
   )
   
   }
   
  
  


export default Footer