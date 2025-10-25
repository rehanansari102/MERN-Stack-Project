import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
  return (
    <div className="not-found">
      {/* Dark Header Section */}
      <div className="not-found-header">
        <div className="header-content">
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            <span className="separator">></span>
            <span>Error</span>
          </div>
          <h1 className="error-title">404 Error</h1>
        </div>
      </div>

      {/* Light Content Section */}
      <div className="not-found-content">
        <div className="content-wrapper">
          {/* Nature Illustration */}
          <div className="nature-illustration">
            <div className="mountains">
              <div className="mountain mountain-1"></div>
              <div className="mountain mountain-2"></div>
              <div className="mountain mountain-3"></div>
            </div>
            
            <div className="trees">
              <div className="tree tree-1"></div>
              <div className="tree tree-2"></div>
              <div className="tree tree-3"></div>
              <div className="tree tree-4"></div>
              <div className="tree tree-5"></div>
            </div>
            
            <div className="clouds">
              <div className="cloud cloud-1"></div>
              <div className="cloud cloud-2"></div>
              <div className="cloud cloud-3"></div>
            </div>
            
            <div className="birds">
              <div className="bird bird-1"></div>
              <div className="bird bird-2"></div>
              <div className="bird bird-3"></div>
            </div>
            
            {/* 404 Number overlaid on the illustration */}
            <div className="error-number">404</div>
          </div>

          <h2 className="page-title">Ohh! Page Not Found</h2>
          
          <p className="error-description">
            We're sorry but we can't seem to find the page you requested. 
            This might be because you have typed the web address incorrectly.
          </p>
          
          <Link to="/" className="back-home-btn">
            <span>Back To Home</span>
            <span className="arrow">↗</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
