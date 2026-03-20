import React from "react";
import Sidebar from "../customer/sidebar";

const DashboardLayout = ({ screen }) => {
  return (
    <div style={{ display: "flex", position: "relative" }}>
      <Sidebar />

      {screen}
    </div>
  );
};

export default DashboardLayout;
