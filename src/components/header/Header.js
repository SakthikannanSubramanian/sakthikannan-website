import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <img src="https://avatars.githubusercontent.com/u/40839233?v=4" alt="Sakthikannan Subramanian" className="profile-pic" />
        <div className="header-text">
          <h1>Sakthikannan Subramanian</h1>
          <p className='sub-text'>Software Development Engineer in Test</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
