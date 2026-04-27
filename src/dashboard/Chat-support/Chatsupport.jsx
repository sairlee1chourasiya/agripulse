import React from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiCirclePlus } from "react-icons/ci";
import { FaUserSecret } from "react-icons/fa";
import { FaCircle } from "react-icons/fa";
import { TiTickOutline } from "react-icons/ti";
import { IoMdAlarm } from "react-icons/io";
import { FaPaperclip } from "react-icons/fa";
import { IoSend } from "react-icons/io5";
import Footer from "../FAQ/Footer";


import Header from "../FAQ/Header";


import "../../styles/screen/Chat-support/Chatsupport.css";


const Chatsupport = () => {
  return (
    <div className="main">
      
      

      <div className="page-content">
       
         <Header />
        

        

        <h2 className="title">Chat Support</h2>

        <div className="container">

      

          <div className="inbox-panel">

            <div className="inbox-header">
              <h4>Inbox</h4>
              <RiArrowDropDownLine className="icon" />
              <span className="count">12</span>
              <CiCirclePlus className="plusicon" />
            </div>

            <div className="searchbar">
              <input type="text" placeholder="Search messages" />
            </div>

            <div className="users">

              <div className="user">
                <FaUserSecret className="candidate"/>
                <div>
                  <h4>Sateesh Singh</h4>
                  <p>Kya haal chaal hai Admin</p>
                </div>
                <span>12m</span>
              </div>

              <div className="user">
                <FaUserSecret className="candidate"/>
                <div>
                  <h4>User455779</h4>
                  <p>Refund not completed</p>
                </div>
                <span>28m</span>
              </div>

              <div className="user">
                <FaUserSecret className="candidate"/>
                <div>
                  <h4>Rajat Pradhan</h4>
                  <p>Delivery problem</p>
                </div>
                <span>1h</span>
              </div>

              <div className="user">
                <FaUserSecret className="candidate"/>
                <div>
                  <h4>User340967</h4>
                  <p>Omg this is amazing</p>
                </div>
                <span>2h</span>
              </div>

            </div>

          </div>


          
          <div className="chat-panel">

            <div className="panel-header">
              <h3>User 44656546464</h3>
              <FaCircle className="online"/>
              <span>Online</span>
            </div>

            <div className="message-list">

              <div className="message left">
                <FaUserSecret className="candidate"/>
                <div className="bubble">Lorem lorem lorem</div>
              </div>

              <div className="message left">
                <FaUserSecret className="candidate"/>
                <div className="bubble">
                  Lorem lorem lorem <TiTickOutline className="tick"/>
                </div>
              </div>

              <div className="message left">
                <FaUserSecret className="candidate"/>
                <div className="bubble">
                  Lorem lorem lorem <IoMdAlarm className="alarm"/>
                </div>
              </div>

              <div className="message right">
                <div className="bubble">Lorem lorem lorem</div>
              </div>

              <div className="message right">
                <div className="bubble">Lorem lorem lorem</div>
              </div>

            </div>


        

            <div className="chat-input-container">

              <FaPaperclip className="attach-icon"/>

              <input
                type="text"
                placeholder="Type a message"
                className="message-input"
              />

              <IoSend className="send-icon"/>
              

            </div>
            

          </div>
         

        </div>
        

        

      </div>
      <div className="footer">
               <Footer/>
              </div>
      

    </div>
    
  );
};

export default Chatsupport;