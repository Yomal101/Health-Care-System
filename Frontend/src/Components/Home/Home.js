import React from "react";
import NavBar from "../NavBar/NavBar";
import "./beforhome.css"; 

function Home() {
  return (
    <div className="beforhome">
      <NavBar />
      
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

export default Home;
