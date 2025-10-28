import React from "react";
import "./Layout.css";

export default function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>&copy; 2025 TicketPro App. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Privacy</a>
          <a href="#">Terms</a>
        </div>
      </div>
    </footer>
  );
}