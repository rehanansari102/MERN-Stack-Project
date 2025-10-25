import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from './Logo';
import './MainNav.css';

const MainNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="main-nav">
      <div className="container">
        {/* Logo Section */}
        <div className="nav-brand">
          <Link to="/" className="nav-link"><Logo /></Link>
        </div>

        {/* Navigation Links */}
        <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Home
          </Link>
          <div className="nav-dropdown">
            <Link to="/about" className="nav-link">
              About Us 
            </Link>
          </div>
          <div className="nav-dropdown">
            <Link to="/Booking" className="nav-link">
              Rooms & Suites 
            </Link>
          </div>
          <div className="nav-dropdown">
            <Link to="/services" className="nav-link">
              Services <span className="dropdown-arrow">▼</span>
            </Link>
          </div>
          <div className="nav-dropdown">
            <Link to="/blog" className="nav-link">
              Blog <span className="dropdown-arrow">▼</span>
            </Link>
          </div>
          <Link to="/contact" className="nav-link" onClick={() => setIsMenuOpen(false)}>
            Contact
          </Link>
        </div>

        {/* Right Side Actions */}
        <div className="nav-actions">
          <button className="action-btn search-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"/>
              <path d="m21 21-4.35-4.35"/>
            </svg>
          </button>
          <button className="action-btn menu-btn" onClick={toggleMenu}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="6" x2="21" y2="6"/>
              <line x1="3" y1="12" x2="21" y2="12"/>
              <line x1="3" y1="18" x2="21" y2="18"/>
            </svg>
          </button>
          <Link to="/booking" className="book-btn">
            Book Your Stay
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M7 17L17 7"/>
              <path d="M7 7h10v10"/>
            </svg>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default MainNav;
