// File: src/App.jsx

import React from "react";
// DELETE these redundant imports, the Layout component handles them now
// import Navbar from "./components/Navbar.jsx"; 
// import Footer from "./components/Footer.jsx"; 

import Hero from "./components/Hero.jsx"; 

function App() {
  return (
    // This wrapper is what the Layout centers and constrains (max-width: 1440px)
    <div className="landing-page-wrapper"> 
      {/* The Hero component (and its children) is the content of the landing page */}
      <Hero />
      
      {/* Additional sections (features, content) go here */}
      
    </div>
  );
}

export default App;