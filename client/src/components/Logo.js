import React from 'react';
import './Logo.css';

const Logo = () => {
  return (
    <div className="logo-container">
      <div className="logo-icon">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          {/* Buildings */}
          <rect x="8" y="20" width="6" height="15" stroke="#4ade80" strokeWidth="2" fill="none"/>
          <rect x="16" y="15" width="6" height="20" stroke="#4ade80" strokeWidth="2" fill="none"/>
          {/* Windows */}
          <rect x="9" y="22" width="2" height="2" fill="#fbbf24"/>
          <rect x="12" y="22" width="2" height="2" fill="#fbbf24"/>
          <rect x="9" y="26" width="2" height="2" fill="#fbbf24"/>
          <rect x="12" y="26" width="2" height="2" fill="#fbbf24"/>
          <rect x="17" y="17" width="2" height="2" fill="#fbbf24"/>
          <rect x="20" y="17" width="2" height="2" fill="#fbbf24"/>
          <rect x="17" y="21" width="2" height="2" fill="#fbbf24"/>
          <rect x="20" y="21" width="2" height="2" fill="#fbbf24"/>
          <rect x="17" y="25" width="2" height="2" fill="#fbbf24"/>
          <rect x="20" y="25" width="2" height="2" fill="#fbbf24"/>
          {/* Palm Trees */}
          <path d="M4 25 L6 15 L8 25" stroke="#4ade80" strokeWidth="2" fill="none"/>
          <path d="M32 25 L34 15 L36 25" stroke="#4ade80" strokeWidth="2" fill="none"/>
        </svg>
      </div>
      <span className="logo-text">Fixyland</span>
    </div>
  );
};

export default Logo;
