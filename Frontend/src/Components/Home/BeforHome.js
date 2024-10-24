import React from "react";
import BeforNav from "../NavBar/BeforNav";
import "./beforhome.css"; 

function BeforHome() {
  return (
    <div className="beforhome">
      <BeforNav />
      
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-content">
          <h1>Welcome to HealthFirst</h1>
          <p className="topic_1">Empowering you with personalized health solutions for a happier, healthier life.</p>
        </div>
      </div>
      
 
      
      {/* Testimonials Section */}
      <div className="testimonials-section">
        
      </div>
      

      
    </div>
  );
}

export default BeforHome;
