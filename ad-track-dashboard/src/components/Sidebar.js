import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/ProjectLogo.png"; // Ensure this file exists
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <img src={logo} alt="Logo" className="logo" />
      <nav>
        <Link to="/" className="subheading">Dashboard</Link>
        <Link to="/advertisement" className="subheading">Advertisement</Link>  {/* Fixed this */}
        <Link to="/profile" className="subheading">Profile</Link>
        <Link to="/settings" className="subheading">Settings</Link>
      </nav>
    </div>
  );
};

export default Sidebar;
