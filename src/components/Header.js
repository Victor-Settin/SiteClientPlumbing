import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaBars } from 'react-icons/fa';
import '../styles/Header.css';
import logo from '../images/logo.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Alterna a visibilidade do menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Fecha o menu ao clicar em um item de navegação
  const handleMenuItemClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header__top-bar">
        <div className="header__contact-container">
          <span className="header__contact-text">Contact Us: </span>
          <div className="header__phone-container">
            <FaPhoneAlt className="header__phone-icon" />
            <a href="tel:1234567890" className="header__phone-number">(123) 456-7890</a>
          </div>
        </div>
      </div>

      <nav className="header__nav">
        <div className="header__logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Ícone de Menu para dispositivos móveis */}
        <FaBars className="header__menu-icon" onClick={toggleMenu} />

        {/* Menu de navegação, com fechamento automático ao clicar em um item */}
        <ul className={`header__menu ${isMenuOpen ? 'header__menu--open' : ''}`}>
          <li><Link to="/" onClick={handleMenuItemClick}>Home</Link></li>
          <li><Link to="/about" onClick={handleMenuItemClick}>About</Link></li>
          <li><Link to="/services" onClick={handleMenuItemClick}>Services</Link></li>
          <li><Link to="/contact" onClick={handleMenuItemClick}>Contact</Link></li>
        </ul>
        <button className="header__cta-button">Free estimation</button>
      </nav>
    </header>
  );
}

export default Header;
