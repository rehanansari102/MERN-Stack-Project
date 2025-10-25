import React from 'react';
import './TopBar.css';

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="container">
        <div className="top-bar-left">
          <span className="contact-info">7631 Sabina Park, 115 Devon Isle, USA</span>
          <span className="separator"></span>
          <span className="contact-info">info@domain.com</span>
          <span className="separator"></span>
          <span className="contact-info">(+1) 987 654 3210</span>
        </div>
        <div className="top-bar-right">
          <div className="social-icons">
            <a href="#" className="social-icon">f</a>
            <a href="#" className="social-icon">X</a>
            <a href="#" className="social-icon">@</a>
            <a href="#" className="social-icon">Be</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
