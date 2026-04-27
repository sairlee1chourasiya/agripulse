import React from "react";
import Sidepart from "../dashboard/VenderList/Sidepart";

const DashboardLayout = ({ screen }) => {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#f5f5f5",
      }}
    >
     
      <div
        style={{
          width: "220px",
          height: "100vh",
          position: "fixed",
          top: 0,
          left: 0,
          background: "#fff",
          borderRight: "1px solid #eee",
          zIndex: 1000,
        }}
      >
        <Sidepart />
      </div>

  
      <div
        style={{
          marginLeft: "220px",   
          width: "100%",
          padding: "20px",
          overflowX: "hidden",
        }}
      >
        {screen}
      </div>
    </div>
  );
};

export default DashboardLayout;