import React, { useState } from "react";
import "./DashboardStats.css";

const DashboardStats = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const [showPostAd, setShowPostAd] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    callToAction: "",
    category: "",
  });

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Ensure all fields are filled before showing the success message
    if (formData.title && formData.description && formData.callToAction && formData.category) {
      setFormSubmitted(true); // ✅ Show success message

      // ✅ Reset form fields immediately after submission
      setFormData({
        title: "",
        description: "",
        callToAction: "",
        category: "",
      });

      // ✅ Hide success message after 3 seconds
      setTimeout(() => {
        setFormSubmitted(false);
      }, 3000);
    }
  };

  return (
    <div className="stats-container">
      {/* Buttons */}
      <div className="buttons">
        <button className={activeTab === "overview" ? "button active" : "button"} onClick={() => setActiveTab("overview")}>
          Overview
        </button>
        <button className={activeTab === "views" ? "button active" : "button"} onClick={() => setActiveTab("views")}>
          Views
        </button>
        <button className={activeTab === "engagement" ? "button active" : "button"} onClick={() => setActiveTab("engagement")}>
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

      {/* Post Ad Form */}
      {showPostAd && (
        <div className="post-ad-form">
          <h3>Post Ad</h3>
          <form onSubmit={handleSubmit}>
            <input type="text" name="title" placeholder="Ad Title" value={formData.title} onChange={handleChange} required />
            <input type="text" name="description" placeholder="Ad Description" value={formData.description} onChange={handleChange} required />
            <input type="text" name="callToAction" placeholder="Call to Action" value={formData.callToAction} onChange={handleChange} required />
            <select name="category" className="category-select" value={formData.category} onChange={handleChange} required>
              <option value="">Select Category</option>
              <option value="Technology">Technology</option>
              <option value="Fashion">Fashion</option>
              <option value="Food">Food</option>
              <option value="Health">Health</option>
              <option value="Education">Education</option>
            </select>

            <div className="form-buttons">
              <button type="submit" className="submitAd">Submit</button>
              <button type="button" className="closeAd" onClick={() => setShowPostAd(false)}>Close</button>
            </div>
          </form>

          {/* ✅ Success Message Now Appears Immediately! */}
          {formSubmitted && <p className="success-message">Successful Submission!</p>}
        </div>
      )}
    </div>
  );
};

export default DashboardStats;
