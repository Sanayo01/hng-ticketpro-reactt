// File: src/components/Hero.jsx
import React from "react";
import { Link } from "react-router-dom"; // <-- ADD THIS IMPORT
import "./Hero.css"; 

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1 className="hero-title">🎟️ TicketPro</h1>
        {/* ... */}
        <div className="hero-buttons">
          {/* Change to Link for Signup */}
          <Link to="/auth/signup" className="btn-primary"> 
            Get Started
          </Link>
          {/* Change to Link for Login */}
          <Link to="/auth/login" className="btn-secondary"> 
            Login
          </Link>
        </div>
      </div>
      {/* ... rest of component ... */}
    </section>
  );
};

export default Hero;