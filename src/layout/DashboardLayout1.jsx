


import React from "react";
import Sidebar1 from "../dashboard/FAQ/Sidebar1";

const DashboardLayout1 = ({ screen }) => {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>

   
      <div
        style={{
          width: "260px",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          background: "#f2f2f2",
          borderRight: "1px solid #eee",
          zIndex: 1000,
        }}
      >
        <Sidebar1 />
      </div>

     
      <div
        style={{
          marginLeft: "260px",
          flex: 1,
          padding: "20px",
          minHeight: "100vh",
          overflowY: "auto",
          overflowX: "hidden",
          background: "#f5f5f5",
        }}
      >
        {screen}
      </div>

    </div>
  );
};

export default DashboardLayout1; 

