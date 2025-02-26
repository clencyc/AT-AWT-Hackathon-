import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Advertisement from "./pages/Advertisements"; // Ensure correct file name

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/advertisement" element={<Advertisement />} /> {/* Add this */}
      </Routes>
    </Router>
  );
}

export default App;
