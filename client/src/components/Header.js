import React from 'react';
import TopBar from './TopBar';
import MainNav from './MainNav';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <TopBar />
      <MainNav />
    </header>
  );
};

export default Header;
