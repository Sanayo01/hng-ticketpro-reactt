import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar-main">
      <div className="navbar-content">
        <Link to="/" className="logo">
          🎟️ **TicketPro**
        </Link>
        <div className="nav-links-public">
          <Link to="/">Home</Link>
          <Link to="/contact">Contact</Link>
          
          {/* NOTE: The Login link is hidden here for simplicity on the landing page.
             In a later step (after Dashboard), we will make a smarter navbar 
             that checks if the user is logged in. 
          */}
        </div>
      </div>
    </nav>
  );
}