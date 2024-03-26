// src/components/Header.js
import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <h1>Invita</h1>
      <nav>
        <ul>
          <li><a href="#link1">Link 1</a></li>
          <li><a href="#link2">Link 2</a></li>
          <li><a href="#link3">Link 3</a></li>
          <li><a href="#link4">Link 4</a></li>
        </ul>
      </nav>
      <div className="auth-buttons">
        <button className="login-button">Login</button>
        <button className="signup-button">SignUp</button>
      </div>
    </header>
  );
}

export default Header;
