import React from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import DashboardStats from "../components/DashboardStats";


const Dashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1, padding: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Header />
        <DashboardStats />
      </div>
    </div>
  );
};

export default Dashboard;
