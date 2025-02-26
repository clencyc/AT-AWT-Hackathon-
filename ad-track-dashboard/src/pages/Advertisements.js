import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "./Advertisements.css"; // Import styles

const Advertisement = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className="advertisement-container">
      {/* Sidebar */}
      <Sidebar />

      <div className="advertisement-content">
        {/* Header */}
        <Header />

        {/* Main Ad Section */}
        <div className="ad-section">
          <div className="ad-template">
            <h2 className="ad-title">Ad Template</h2>
            <div className="ad-box">
              <p className="ad-example">
                <strong>Here is an example of a well-structured Ad</strong>
                <br />
                Get 50% off on all sneakers! Visit XYZ Store at Nairobi CBD. Offer valid till Sunday! 
                Call 0700XXXXXX to grab yours now! #BestDeal
              </p>
            </div>
          </div>

          <div className="ad-tips">
            <h2 className="ad-title">Ad Tips</h2>
            <div className="ad-box">
              <p><strong>Tips for an attractive Ad:</strong></p>
              <ul>
                <li>✅ Keep it short & clear (Max 160 characters)</li>
                <li>✅ Include a strong Call-To-Action (E.g., "Call Now" or "Visit Store")</li>
                <li>✅ Mention offers or urgency (E.g., "Limited stock available!")</li>
                <li>✅ Personalize if possible (E.g., "Hey [First Name], check out this deal!")</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Post Ad Button */}
        <button className="post-ad-btn" onClick={() => setShowForm(!showForm)}>
          Post Ad
        </button>

        {/* Post Ad Form */}
        {showForm && (
          <div className="post-ad-form">
            <h2>Post Your Ad</h2>
            <input type="text" placeholder="Ad Title" />
            <textarea placeholder="Ad Description"></textarea>
            <input type="text" placeholder="Call to Action" />
            <button className="submit-btn">Submit</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Advertisement;
