// File: src/components/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom"; // <-- ADD THIS IMPORT
import Navbar from "./Navbar.jsx"; 
import Footer from "./footer.jsx";
import "./Layout.css";

// Remove the { children } prop from the function signature
export default function Layout() { 
  return (
    <div className="app-wrapper">
      <Navbar />
      <main className="content-container">
        <div className="page-content">
            {/* Renders the NESTED component (Dashboard or Contact) */}
            <Outlet /> 
        </div>
      </main>
      <Footer />
    </div>
  );
}