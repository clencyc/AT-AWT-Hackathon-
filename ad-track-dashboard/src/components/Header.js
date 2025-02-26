import React from "react";
import profilePic from "../assets/Ellipse3.png";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <h1 className="title">Welcome to your Dashboard</h1>
      <div className="profile-section">
        <span className="profile-name">Vanessa K</span>
        <img src={profilePic} alt="Profile" className="profile-pic" />
      </div>
    </div>
  );
};

export default Header;
