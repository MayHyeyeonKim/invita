// src/components/Header.js
import React from 'react';
import './Header.css';

function Header() {
  return (
    <nav>
    <div className="logo">INVITA</div>
    <div className="menu">
      <a href="#link1">Link 1</a>
      <a href="#link2">Link 2</a>
      <a href="#link3">Link 3</a>
      <a href="#link4">Link 4</a>
    </div>
    <div className="actions">
      <button>Help</button>
      <button>Login</button>
      <button>Sign Up</button>
    </div>
  </nav>
  );
}

export default Header;
