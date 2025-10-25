import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Discover Amazing Destinations</h1>
          <p>Experience the world with our expert travel services and create memories that last a lifetime.</p>
          <div className="hero-buttons">
            <Link to="/booking" className="btn btn-primary">Book Now</Link>
            <Link to="/about" className="btn btn-secondary">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features py-5">
        <div className="container">
          <h2 className="text-center mb-5">Why Choose TravelPro?</h2>
          <div className="grid grid-3">
            <div className="feature-card">
              <div className="feature-icon">✈️</div>
              <h3>Expert Travel Planning</h3>
              <p>Our experienced team creates personalized itineraries tailored to your preferences and budget.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🏨</div>
              <h3>Premium Accommodations</h3>
              <p>We partner with the finest hotels and resorts worldwide to ensure your comfort and satisfaction.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>24/7 Support</h3>
              <p>Round-the-clock assistance to help you with any questions or concerns during your travels.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta py-5">
        <div className="container text-center">
          <h2>Ready to Start Your Journey?</h2>
          <p className="mb-4">Let us help you plan the perfect trip. Contact our travel experts today!</p>
          <Link to="/booking" className="btn btn-success">Get Started</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
