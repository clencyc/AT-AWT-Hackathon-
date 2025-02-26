import React, { useState } from "react";
import "./DashboardStats.css";

const DashboardStats = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [showPostAd, setShowPostAd] = useState(false);

  const content = {
    overview: [
      { label: "Ads Sent", value: "20" },
      { label: "Registered Customers", value: "15" },
      { label: "Ads Delivered", value: "15" },
      { label: "Ads Clicked", value: "7" },
      { label: "Conversion Rate", value: "30%" },
    ],
    views: [
      { label: "Registered Members", value: "250" },
      { label: "Gender", value: "60% Male, 40% Female" },
      { label: "Age", value: "18-45 Years" },
      { label: "Location", value: "Nairobi, Mombasa, Kisumu" },
      { label: "New Weekly Members", value: "30" },
    ],
    engagement: [
      { label: "Ads Clicked", value: "120" },
      { label: "Most Engaged Time", value: "6:00 PM - 9:00 PM" },
      { label: "Most Popular Ad", value: "Tech Gadgets Sale" },
      { label: "Conversion Data", value: "50 Leads Generated" },
      { label: "Conversion Rate", value: "40%" },
    ],
  };

  return (
    <div className="stats-container">
      {/* Buttons */}
      <div className="buttons">
        <button
          className={activeTab === "overview" ? "button active" : "button"}
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </button>
        <button
          className={activeTab === "views" ? "button active" : "button"}
          onClick={() => setActiveTab("views")}
        >
          Views
        </button>
        <button
          className={activeTab === "engagement" ? "button active" : "button"}
          onClick={() => setActiveTab("engagement")}
        >
          Engagement
        </button>
      </div>

      {/* Dynamic Content */}
      <div className="stats-content">
        {content[activeTab].map((item, index) => (
          <div key={index} className="stat-item">
            <span className="label">{item.label}:</span>
            <span className="value">{item.value}</span>
          </div>
        ))}
      </div>

      {/* Post Ad Button */}
      <div className="post-ad-container">
        <button className="postAd" onClick={() => setShowPostAd(true)}>Post Ad</button>
      </div>

      {/* Post Ad Form (Initially Hidden) */}
      {showPostAd && (
        <div className="post-ad-form">
          <h3>Post Ad</h3>
          <input type="text" placeholder="Ad Title" />
          <input type="text" placeholder="Ad Description" />
          <input type="text" placeholder="Call to Action" />
          <div className="form-buttons">
            <button className="submitAd">Submit</button>
            <button className="closeAd" onClick={() => setShowPostAd(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DashboardStats;
