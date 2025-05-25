import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="Layout">
      <div className="logo">Digital Store</div>
      <nav>
        <a href="/">Home</a>
        <a href="/produtos">Produtos</a>
      </nav>
    </header>
  );
};

export default Header;

