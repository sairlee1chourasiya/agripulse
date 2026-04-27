import React from "react";
import "../../styles/screen/AdminPropertyPage/AdminPropertyPage.css";
import { FaHome } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";

import a from "../../assets/dashboard/details/1.png";
import logo from "../../assets/dashboard/dashboard1/logo.png";
import { CiBoxList } from "react-icons/ci";



import { IoNotificationsOutline, IoChatbubbleOutline } from "react-icons/io5";

import { TbBuildingEstate, TbCurrencyRupee } from "react-icons/tb";
import { MdOutlineMoreHoriz } from "react-icons/md";


const AdminPropertyPage = () => {

  const topCards = [
    {
      id: 1,
      icon: <TbBuildingEstate size={28} color="#fff" />,
      title: "Total Property",
      unit: "(Unit)",
      value: "5578",
      rows: [
        { label: "Balance Unit For Sale", val: "5578" },
        { label: "Property Sold (Unit)", val: "0001", badge: true },
      ],
    },
    {
      id: 2,
      icon: <CiBoxList size={28} color="#fff" />,
      title: "Total Registry Request in Process",
      unit: "(Unit)",
      value: "0001",
      rows: [
        { label: "Registry Process Done", val: "0003", badge: true },
        { label: "Registry Process Balance", val: "0001" },
      ],
    },
    {
      id: 3,
      icon: <TbCurrencyRupee size={28} color="#fff" />,
      title: "Total Revenue",
      unit: "(Rs)",
      value: "10455060",
      rows: [
        { label: "Received Revenue", val: "4374060" },
        { label: "Balance Revenue", val: "0001", badge: true },
      ],
    },
  ];

  const bottomTables = [
    {
      id: 1,
      title: "Total Properties (Unit)",
      total: "5578",
      rows: [
        { label: "Balance Unit For Sale", val: "5577" },
        { label: "Property Sold (Unit)", val: "1" },
      ],
    },
    {
      id: 2,
      title: "Total Registry Request in Process",
      total: "4",
      rows: [
        { label: "Registry Process Done", val: "3" },
        { label: "Registry Process Balance", val: "1" },
      ],
    },
    {
      id: 3,
      title: "Total Revenue",
      total: "10455060",
      rows: [
        { label: "Received Revenue", val: "4374060" },
        { label: "Balance Revenue", val: "6081000" },
      ],
    },
    {
      id: 4,
      title: "Registry Done & Received",
      total: "4",
      rows: [
        { label: "Registry Delivered", val: "3" },
        { label: "Registry Delivery Balance", val: "1" },
      ],
    },
    {
      id: 5,
      title: "Total Withdrawal",
      total: "120",
      rows: [
        { label: "Withdrawal Done", val: "80" },
        { label: "Withdrawal Balance", val: "40" },
      ],
    },
    {
      id: 6,
      title: "Upload Registry in Process",
      total: "4",
      rows: [
        { label: "Upload Registry Process Done", val: "3" },
        { label: "Upload Registry Process Balance", val: "1" },
      ],
    },
    {
      id: 7,
      title: "Request For Withdrawal",
      total: "120",
      rows: [
        { label: "Withdrawal Release", val: "80" },
        { label: "Total Withdrawal Balance", val: "40" },
      ],
    },
  ];

  return (
    <div className="db-layout">

    
      <aside className="db-sidebar">
        <div className="db-logobox">
          <img src={logo}  className="db-logoimg" />
          <div className="db-logotext">
            
          </div>
        </div>

        <nav className="db-nav">
          <div className="db-navitem db-navitem--active">
            <FaHome size={16} />
            <span>Dashboard</span>
          </div>
          <div className="db-navitem">
            <CiBoxList size={16} />
            <span>Property</span>
          </div>
        </nav>
      </aside>

   
      <div className="db-main">

      
        <header className="db-topbar">
          <div className="db-searchbox">
            <input type="text" placeholder="Search Here" className="db-searchinput" />
            <button className="db-searchbtn"><FiSearch size={15} color="#fff" /></button>
          </div>

          <div className="db-topright">
            <div className="db-iconbtn"><IoNotificationsOutline size={18} color="#2e7d32" /></div>
            <div className="db-iconbtn"><IoChatbubbleOutline size={18} color="#2e7d32" /></div>
            <div className="db-userbox">
              <div className="db-userinfo">
                <span className="db-username">hi, Rajat</span>
                <span className="db-userrole">Admin</span>
              </div>
              <img src={a} alt="user" className="db-useravatar" />
            </div>
          </div>
        </header>

       
        <div className="db-content">
          <h1 className="db-pagetitle">Dashboard</h1>
          <p className="db-pagesub">Welcome to Agripulse Property Admin</p>

          
          <div className="db-cardrow">
            {topCards.map((card) => (
              <div className="db-statcard" key={card.id}>
                <div className="db-statcard-top">
                  <div className="db-staticonbox">{card.icon}</div>
                  <div className="db-stattitlebox">
                    <span className="db-stattitle">{card.title}</span>
                    <span className="db-statunit">{card.unit}</span>
                  </div>
                  <div className="db-statvaluebox">
                    <span className="db-statvalue">{card.value}</span>
                  </div>
                </div>

                <div className="db-statcard-rows">
                  {card.rows.map((row, i) => (
                    <div className="db-statrow" key={i}>
                      <span className="db-statrowval">{row.val}</span>
                      {row.badge && <span className="db-growbadge">↑20%</span>}
                      <span className="db-statrowlabel">{row.label}</span>
                    </div>
                  ))}
                </div>

                <div className="db-statcard-more">
                  <MdOutlineMoreHoriz size={20} color="#aaa" />
                </div>
              </div>
            ))}
          </div>

          <div className="db-tablegrid">
            {bottomTables.map((tbl) => (
              <div className="db-tablebox" key={tbl.id}>
                <div className="db-tablehead">
                  <span>{tbl.title}</span>
                  <span>{tbl.total}</span>
                </div>
                {tbl.rows.map((row, i) => (
                  <div className="db-tablerow" key={i}>
                    <span className="db-tablerowlabel">{row.label}</span>
                    <span className="db-tablerowval">{row.val}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  );
};

export default AdminPropertyPage;