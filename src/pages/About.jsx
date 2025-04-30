import React from 'react';

const About = () => {
  return (
    <div className="about-page">
      <div className="about-header">
        <h1>About ShopEase</h1>
      </div>
      <div className="about-content">
        <section className="about-section">
          <h2>Our Story</h2>
          <p>
            ShopEase was founded in 2023 with a simple mission: to provide customers with a seamless online shopping experience. 
            What started as a small venture has now grown into a trusted e-commerce platform serving customers nationwide.
          </p>
        </section>
        
        <section className="about-section">
          <h2>Our Mission</h2>
          <p>
            At ShopEase, we are committed to offering high-quality products at competitive prices, 
            all while delivering exceptional customer service. We believe in building lasting relationships with our customers 
            and creating an online shopping experience that is both enjoyable and convenient.
          </p>
        </section>
        
        <section className="about-section">
          <h2>Our Values</h2>
          <ul>
            <li>Customer Satisfaction: We put our customers first and strive to exceed their expectations.</li>
            <li>Quality: We ensure all products meet high standards of quality and durability.</li>
            <li>Integrity: We conduct our business with honesty, transparency, and ethical practices.</li>
            <li>Innovation: We continuously look for ways to improve our services and offerings.</li>
          </ul>
        </section>
        
        <section className="about-section">
          <h2>Meet the Team</h2>
          <div className="team-members">
            <div className="team-member">
              <h3>John Doe</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <h3>Jane Smith</h3>
              <p>Head of Operations</p>
            </div>
            <div className="team-member">
              <h3>Mike Johnson</h3>
              <p>Customer Service Manager</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;