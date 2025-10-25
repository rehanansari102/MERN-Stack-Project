import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './About.css';

const About = () => {
  const [staff, setStaff] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const response = await axios.get('/api/staff');
        setStaff(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to load staff information');
        setLoading(false);
      }
    };

    fetchStaff();
  }, []);

  if (loading) {
    return (
      <div className="about">
        <div className="container">
          <div className="loading">Loading...</div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="about">
        <div className="container">
          <div className="error">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="about">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>About Us</h1>
          <div className="breadcrumb">
            <span>Home</span>
            <span className="separator">></span>
            <span>About Us</span>
          </div>
        </div>
      </section>

      {/* Outdoor Activities Section */}
      <section className="outdoor-activities">
        <div className="container">
          <div className="activities-content">
            <div className="activities-text">
              <span className="section-subtitle">LUXURY HOTEL</span>
              <h2 className="section-title">We Provide Outdoor Activities To All Visitors</h2>
              <p className="section-description">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
              </p>
              
              <div className="features">
                <div className="feature-item">
                  <div className="feature-icon">🏊‍♂️</div>
                  <span>The Best Swimming Pool</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">🚴‍♂️</div>
                  <span>The Best Stationary Bike</span>
                </div>
              </div>

              <div className="checklist">
                <div className="check-item">
                  <div className="check-icon">✓</div>
                  <span>There are many variations of passages</span>
                </div>
                <div className="check-item">
                  <div className="check-icon">✓</div>
                  <span>Majority have suffered alteration</span>
                </div>
                <div className="check-item">
                  <div className="check-icon">✓</div>
                  <span>Injected humour randomised words</span>
                </div>
              </div>

              <button className="discover-btn">
                <span>Discover More</span>
                <span className="arrow">→</span>
              </button>
            </div>

            <div className="activities-images">
              <div className="main-image">
                <img src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=500&fit=crop&auto=format" alt="Luxury Interior" />
              </div>
              <div className="secondary-image">
                <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=300&h=300&fit=crop&auto=format" alt="Outdoor Area" />
                <div className="overlay-card">
                  <div className="card-icon">🍽️</div>
                  <h3>Restaurants</h3>
                  <p>There are many variations of passages of Lorem Ipsum available.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="statistics">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">305+</div>
              <div className="stat-label">Luxury Rooms</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">650+</div>
              <div className="stat-label">Regular Guests</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">80+</div>
              <div className="stat-label">Team Member</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">75+</div>
              <div className="stat-label">Beaches</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="container">
          <div className="choose-content">
            <div className="choose-text">
              <span className="section-subtitle">OUR SKILLS</span>
              <h2 className="section-title">Why Choose for us?</h2>
              <p className="section-description">
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.
              </p>

              <div className="skills">
                <div className="skill-item">
                  <div className="skill-label">
                    <span>Services</span>
                    <span>95%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '95%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-label">
                    <span>Chef Master</span>
                    <span>85%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '85%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-label">
                    <span>Design</span>
                    <span>92%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '92%'}}></div>
                  </div>
                </div>
                <div className="skill-item">
                  <div className="skill-label">
                    <span>It Solution</span>
                    <span>90%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{width: '90%'}}></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="choose-images">
              <div className="main-beach-image">
                <img src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop&auto=format" alt="Beach Resort" />
              </div>
              <div className="overlay-restaurant-image">
                <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=300&h=300&fit=crop&auto=format" alt="Restaurant" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Relax and Enjoy Section */}
      <section className="relax-enjoy">
        <div className="container">
          <div className="relax-content">
            <span className="relax-subtitle">AMAZING EXPERIENCE</span>
            <h2 className="relax-title">Relax And Enjoy With Our Hotel & Resort</h2>
            <div className="play-button">
              <div className="play-icon">▶</div>
            </div>
          </div>
        </div>
      </section>

      {/* Expert Staff Section */}
      <section className="expert-staff">
        <div className="container">
          <div className="staff-header">
            <span className="staff-subtitle">FIEYLAND STAFF</span>
            <h2 className="staff-title">Expert Staff Persons</h2>
          </div>

          <div className="staff-grid">
            <div className="staff-card">
              <div className="staff-image">
                <img src="https://images.unsplash.com/photo-1583394838336-acd977736f90?w=300&h=300&fit=crop&auto=format" alt="Michael Dean" />
                <div className="staff-plus">+</div>
              </div>
              <div className="staff-info">
                <h3>Michael Dean</h3>
                <p>Chef Master</p>
              </div>
            </div>

            <div className="staff-card">
              <div className="staff-image">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&auto=format" alt="Arnold Taylor" />
                <div className="staff-plus">+</div>
              </div>
              <div className="staff-info">
                <h3>Arnold Taylor</h3>
                <p>Room Cleaner</p>
              </div>
            </div>

            <div className="staff-card">
              <div className="staff-image">
                <img src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&auto=format" alt="Sarah Johnson" />
                <div className="staff-plus">+</div>
              </div>
              <div className="staff-info">
                <h3>Sarah Johnson</h3>
                <p>Assistant Chef</p>
              </div>
            </div>

            <div className="staff-card">
              <div className="staff-image">
                <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&auto=format" alt="David Wilson" />
                <div className="staff-plus">+</div>
              </div>
              <div className="staff-info">
                <h3>David Wilson</h3>
                <p>Supervisor</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
