import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../common/assets/nbaLogo.png';

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <div className="linkLogo">
          <img src={logo} alt="linkLogo" />
        </div>
      </Link>
      <div className="east-color"></div>
      <div className="west-color"></div>
    </header>
  );
}

export default Header;
