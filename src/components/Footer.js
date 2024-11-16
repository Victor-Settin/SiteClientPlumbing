import React from 'react';
import '../styles/Footer.css';
import logo from '../images/logo-mascot.png';  // Imagem da logo
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';  // Ícones das redes sociais

function Footer() {
  return (
    <footer className="footer">
      <div className="sub-footer">
      <div className="footer-logo">
        <img src={logo} alt="Logo" />
      </div>
      
      <div className="footer-info">
        <h3>Contact Us</h3>
        <p>teste@gmail.com</p>
        <p>(650) 281-9637</p>
        <p>city city, CA</p>
      </div>
      
      <div className="footer-social">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook size={24} color="#fff" />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram size={24} color="#fff" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter size={24} color="#fff" />
        </a>
      </div>
      </div>

      {/* Linha de direitos reservados */}
      <div className="footer-rights">
        <span>© 2024 . All rights reserved.</span>
        <a href="/privacy-policy" className="privacy-policy">Privacy Policy</a>
      </div>
    </footer>
  );
}

export default Footer;
