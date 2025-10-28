import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./dashboard.css"; // We will create this next

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Mandate: Logout should clear the session and return the user to the landing page.
    localStorage.removeItem("ticketapp_session");
    navigate("/"); // Redirect to landing page
  };

  return (
    <div className="dashboard-page">
      <h1>👋 Welcome Back!</h1>
      <p>This is your high-level overview of the Ticket Management System.</p>

      {/* Required: Display Summary Statistics */}
      <div className="stats-grid">
        <div className="stat-box">
          <h3>Total Tickets</h3>
          <p className="stat-number">125</p>
        </div>
        <div className="stat-box open">
          <h3>Open Tickets</h3>
          <p className="stat-number">45</p>
        </div>
        <div className="stat-box closed">
          <h3>Resolved Tickets</h3>
          <p className="stat-number">80</p>
        </div>
      </div>
      
      {/* Required: Include navigation links to the Ticket Management screen */}
      <div className="dashboard-actions">
        <Link to="/tickets" className="action-button primary">
          Manage All Tickets →
        </Link>
        {/* Required: Add a visible Logout button */}
        <button onClick={handleLogout} className="action-button secondary">
          Logout
        </button>
      </div>
    </div>
  );
}